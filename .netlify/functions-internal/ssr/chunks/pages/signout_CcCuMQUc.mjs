import { l as lucia } from './monthly-payment_BFbvAoE8.mjs';

async function POST(context) {
  if (!context.locals.session) {
    return new Response(JSON.stringify({ message: "Session do not exist" }), {
      status: 401
    });
  }
  try {
    await lucia.invalidateSession(context.locals.session.id);
    const sessionCookie = lucia.createBlankSessionCookie();
    context.cookies.set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
    return context.redirect("/signoutConfirm");
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to log out" }), {
      status: 500
    });
  }
}

export { POST };
