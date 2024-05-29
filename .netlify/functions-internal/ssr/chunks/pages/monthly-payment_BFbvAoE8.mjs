import Stripe from 'stripe';
import { U as UserModel } from './forgot-password_D88SrvWL.mjs';
import { Argon2id } from 'oslo/password';
import { Lucia } from 'lucia';
import { MongodbAdapter } from '@lucia-auth/adapter-mongodb';
import { d as db } from './index_JlIgSKxQ.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { Resend } from 'resend';

const adapter = new MongodbAdapter(
  db.collection("sessions"),
  db.collection("users")
);
const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === "production"
    }
  },
  getUserAttributes: (attributes) => {
    return {
      username: attributes.username,
      email: attributes.email,
      cooperativeName: attributes.cooperativeName,
      cooperativePhoneNumber: attributes.cooperativePhoneNumber
    };
  }
});

const UserEmailTemplate = (passengersInfo) => {
  const { username, amount, cooperativeName, cooperativePhoneNumber } = passengersInfo;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { children: "Thanks for trusting our service" }),
    /* @__PURE__ */ jsx("p", { children: "Please, review your receipt below" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { children: "Username:" }),
        /* @__PURE__ */ jsx("span", { className: "m-0.5", children: username })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { children: "Paid amount:" }),
        /* @__PURE__ */ jsx("span", { className: "ml-3", children: amount })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { children: "Cooperative Name:" }),
        /* @__PURE__ */ jsx("span", { className: "ml-3", children: cooperativeName })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { children: "Cooperative Phone Number:" }),
        /* @__PURE__ */ jsx("span", { className: "ml-3", children: cooperativePhoneNumber })
      ] })
    ] })
  ] });
};

const STRING_API = "sk_test_51Oy8502KAOzdzFmpM1hKml14JFonnL450FjkF3hOZame22e7THiuxCkiqKbPxtWNq2WFcpz9wu5FfHVONbz4B8ch00lGx3faBy";
const resend = new Resend("re_7Tnhpeka_CQRTLjcjUq6xBiWG4q13gyp8");
const stripe = new Stripe(STRING_API);
async function creatEmail(emailInfo) {
  const { email } = emailInfo;
  const { data, error } = await resend.emails.send({
    from: "happytravel@onja.org",
    to: [email],
    subject: "Receipt",
    react: UserEmailTemplate(emailInfo)
  });
  if (error) {
    return new Response("Failed to create token", {
      status: 400
    });
  }
  return data;
}
const POST = async (context) => {
  const body = await context.request.json();
  try {
    const { amount, paymentMethodId, user } = body;
    const {
      email,
      username,
      password,
      cooperativeName,
      cooperativePhoneNumber
    } = user.user;
    const hasNumber = cooperativeName?.toString().match("/d+/g");
    const isValidPhoneNumber = typeof cooperativePhoneNumber === "string" && cooperativePhoneNumber.replace(/\s/g, "").length === 10;
    const customer = await stripe.customers.create({
      email: user.email,
      name: user.username,
      payment_method: paymentMethodId,
      invoice_settings: { default_payment_method: paymentMethodId }
    });
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
      payment_method: paymentMethodId,
      customer: customer.id
    });
    const price = await stripe.prices.create({
      currency: "usd",
      unit_amount: amount,
      recurring: {
        interval: "month"
      },
      product_data: {
        name: "Bus Fee"
      }
    });
    await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price: price.id
        }
      ]
    });
    const confirm = await stripe.paymentIntents.confirm(
      paymentIntent.id,
      {
        payment_method: paymentMethodId,
        receipt_email: user.email
      }
    );
    if (confirm.status !== "succeeded") {
      return new Response(
        JSON.stringify({ message: "Payment is not successful" }),
        {
          status: 500
        }
      );
    }
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response("Invalid email", {
        status: 400
      });
    }
    if (typeof username !== "string" || username.length < 3 || username.length > 31 || !/^[a-zA-Z]+$/.test(username)) {
      return new Response("Invalid username", {
        status: 400
      });
    }
    if (typeof cooperativeName !== "string" || hasNumber) {
      return new Response("Invalid cooperative name", {
        status: 400
      });
    }
    if (!isValidPhoneNumber) {
      return new Response("Invalid phone number", {
        status: 400
      });
    }
    if (typeof password !== "string" || password.length < 6 || password.length > 255) {
      return new Response("Invalid password", {
        status: 400
      });
    }
    const hashedPassword = await new Argon2id().hash(password);
    let existingUser;
    existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({
          message: "User exists already, please login instead."
        }),
        {
          status: 422
        }
      );
    }
    const createdUser = new UserModel({
      username,
      email,
      password: hashedPassword,
      cooperativeName,
      cooperativePhoneNumber
    });
    const userInfo = {
      email,
      username,
      password,
      amount,
      cooperativeName,
      cooperativePhoneNumber
    };
    creatEmail(userInfo);
    await createdUser.save();
    const session = await lucia.createSession(createdUser._id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    context.cookies.set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
    return new Response(
      JSON.stringify({ message: "User created successfully", user: createdUser }),
      {
        status: 200
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to complete subscription" }),
      {
        status: 500
      }
    );
  }
};

const monthlyPayment = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  creatEmail
}, Symbol.toStringTag, { value: 'Module' }));

export { lucia as l, monthlyPayment as m };
