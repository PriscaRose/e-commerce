import { createDate, TimeSpan } from 'oslo';
import { sha256 } from 'oslo/crypto';
import { encodeHex } from 'oslo/encoding';
import mongoose from 'mongoose';
import { Resend } from 'resend';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';

const UserSchema$1 = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  cooperativeName: { type: String, required: true },
  cooperativePhoneNumber: { type: String, required: true }
});
const UserModel = mongoose.models.User || mongoose.model("User", UserSchema$1);

const UserSchema = new mongoose.Schema({
  token_hash: { type: String, required: true },
  user_id: { type: String, required: true },
  expires_at: { type: Date, required: true }
});
const ResetPassword = mongoose.model("ResetPassword", UserSchema);

const EmailTemplate = ({ token, email }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { children: "Reset Password" }),
    /* @__PURE__ */ jsx("p", { children: "A password reset event has been triggered. The password reset window is limited to two hours." }),
    /* @__PURE__ */ jsx("p", { children: "If you do not reset your password within two hours, you will need to submit a new request." }),
    "To complete the password reset process, visit the following link:",
    /* @__PURE__ */ jsx("br", {}),
    "http://localhost:4321/password/reset?token=",
    token,
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("p", { children: [
      "Username: ",
      email
    ] })
  ] });
};

const resend = new Resend("re_7Tnhpeka_CQRTLjcjUq6xBiWG4q13gyp8");
async function sendPasswordResetToken(email, token) {
  const { data, error } = await resend.emails.send({
    from: "test@onja.org",
    to: [email],
    subject: "Password Reset Request",
    react: EmailTemplate({ token, email })
  });
  if (error) {
    return new Response("Failed to create token", {
      status: 400
    });
  }
  return data;
}
async function createPasswordResetToken(userId) {
  await ResetPassword.findByIdAndDelete(userId).exec();
  const tokenHash = encodeHex(await sha256(new TextEncoder().encode(userId)));
  const newPassword = new ResetPassword({
    token_hash: tokenHash,
    user_id: userId,
    expires_at: createDate(new TimeSpan(2, "h"))
  });
  await newPassword.save();
  return tokenHash;
}
async function POST(context) {
  const formData = await context.request.formData();
  const email = formData.get("email");
  try {
    const user = await UserModel.findOne({ email });
    if (typeof user.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      return new Response("Invalid email", {
        status: 400
      });
    }
    const verificationToken = await createPasswordResetToken(user._id);
    await sendPasswordResetToken(user.email, verificationToken);
    return new Response(null, {
      status: 200
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Email not sent" }), {
      status: 500
    });
  }
}

const forgotPassword = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

export { ResetPassword as R, UserModel as U, forgotPassword as f };
