import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import Stripe from 'stripe';
import { B as Bus } from './bookSeat_lnmxtZ2Z.mjs';
import { Resend } from 'resend';

const PassengersEmailTemplate = (passengersInfo) => {
  const {
    username,
    amount,
    quantity,
    driverName,
    driverPhoneNumber,
    busNumber,
    busType
  } = passengersInfo;
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
        /* @__PURE__ */ jsx("span", { children: "Booked Seat:" }),
        /* @__PURE__ */ jsx("span", { className: "ml-3", children: quantity })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { children: "Driver Name:" }),
        /* @__PURE__ */ jsx("span", { className: "ml-3", children: driverName })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { children: "Driver phone number:" }),
        /* @__PURE__ */ jsx("span", { className: "ml-3", children: driverPhoneNumber })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { children: "Bus number:" }),
        /* @__PURE__ */ jsx("span", { className: "ml-3", children: busNumber })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("span", { children: "Bus type:" }),
        /* @__PURE__ */ jsx("span", { className: "ml-3", children: busType })
      ] })
    ] })
  ] });
};

const STRING_API = "sk_test_51Oy8502KAOzdzFmpM1hKml14JFonnL450FjkF3hOZame22e7THiuxCkiqKbPxtWNq2WFcpz9wu5FfHVONbz4B8ch00lGx3faBy";
const stripe = new Stripe(STRING_API);
const resend = new Resend("re_7Tnhpeka_CQRTLjcjUq6xBiWG4q13gyp8");
async function creatEmail(passengersInfo) {
  const { email } = passengersInfo;
  const { data, error } = await resend.emails.send({
    from: "happytravel@onja.org",
    to: [email],
    subject: "Receipt",
    react: PassengersEmailTemplate(passengersInfo)
  });
  if (error) {
    return new Response("Failed to create token", {
      status: 400
    });
  }
  return data;
}
const POST = async (context) => {
  const { amount, paymentMethodId, user, busId, seatIds } = await context.request.json();
  try {
    const customer = await stripe.customers.create({
      email: user.email,
      name: user.username,
      payment_method: paymentMethodId,
      invoice_settings: { default_payment_method: paymentMethodId }
    });
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount),
      currency: "usd",
      payment_method_types: ["card"],
      payment_method: paymentMethodId,
      customer: customer.id
    });
    const confirm = await stripe.paymentIntents.confirm(
      paymentIntent.id,
      {
        payment_method: paymentMethodId,
        receipt_email: user.email
      }
    );
    if (confirm.status === "succeeded") {
      const bus = await Bus.findOne({ _id: busId });
      if (!bus) {
        return new Response(JSON.stringify({ message: "Bus not found" }), {
          status: 404
        });
      }
      const seatIdStrings = seatIds.map((id) => id.toString());
      const passengersInfo = {
        email: user.email,
        username: user.username,
        amount,
        quantity: seatIds.length,
        driverName: bus.driver.driverName,
        driverPhoneNumber: bus.driver.driverPhoneNumber,
        busNumber: bus.busNumber,
        busType: bus.busType
      };
      bus.seats.forEach((seat) => {
        if (seatIdStrings.includes(seat._id.toString())) {
          seat.isAvailable = false;
        }
      });
      creatEmail(passengersInfo);
      await bus.save();
    }
    return new Response(
      JSON.stringify({ message: "Seat updated successfully", clientSecret: confirm }),
      {
        status: 200
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to update seat" }), {
      status: 500
    });
  }
};

export { POST, creatEmail };
