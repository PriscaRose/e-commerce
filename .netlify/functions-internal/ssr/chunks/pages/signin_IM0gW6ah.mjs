import { l as lucia } from './monthly-payment_BFbvAoE8.mjs';
import { Argon2id } from 'oslo/password';
import { U as UserModel } from './forgot-password_D88SrvWL.mjs';

async function POST(context) {
  const formData = await context.request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response("Invalid email", {
      status: 400
    });
  }
  if (typeof password !== "string" || password.length < 6 || password.length > 255) {
    return new Response(JSON.stringify({ error: "Invalid password" }), {
      status: 400
    });
  }
  let existingUser;
  try {
    existingUser = await UserModel.findOne({ email });
  } catch (err) {
    return new Response(
      JSON.stringify({
        message: "User does not exist"
      }),
      {
        status: 500
      }
    );
  }
  if (!existingUser) {
    return new Response(
      JSON.stringify({
        error: "Incorrect email or password"
      }),
      {
        status: 400
      }
    );
  }
  const validPassword = await new Argon2id().verify(
    existingUser.password,
    password
  );
  if (!validPassword) {
    return new Response(
      JSON.stringify({
        error: "Incorrect email or password"
      }),
      {
        status: 400
      }
    );
  }
  try {
    const session = await lucia.createSession(existingUser._id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    context.cookies.set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
    return context.redirect("/admin");
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Sign up failed" }),
      {
        status: 500
      }
    );
  }
}

export { POST };
