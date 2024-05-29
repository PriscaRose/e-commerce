/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_Cmh9rrm7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './__Dh2kIqUE.mjs';

const $$Astro = createAstro();
const $$Completion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Completion;
  const search = new URL(Astro2.url).search;
  const params = new URLSearchParams(search.substring(1));
  const query = {};
  for (const [key, value] of params) {
    query[key] = value;
  }
  const paymentId = query.payment_intent;
  const paymentStatus = query.redirect_status;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gray-800 max-w-xl mx-auto p-4 bg-opacity-70 mt-8 flex justify-center items-center"> <div class="bg-white max-w-xl mx-auto shadow-2xl border-8 border-pink-600 p-8"> <h1 class="font-sans text-5xl font-meduim">Booking confirmed!</h1> <p class="font-sans mt-8">
Thank you for trusting our services. Your booking has been added to your
        account. You can check your <a href="https://" target="_blank" class="text-blue-800">email</a> to review your payment.
</p> <div class="mt-6"> <div> <a${addAttribute(`https://dashboard.stripe.com/test/payments/${paymentId && paymentId}`, "href")} target="_blank" rel="noreferrer">
Payment Status: <span class="uppercase text-blue-800">${paymentStatus && paymentStatus}</span> </a> </div> </div> <div class="mt-11"> <span>Didn't get email? <a href="/" class="text-blue-900 ml-2 text-xl">No</a> <a href="#" class="text-blue-900 ml-2 text-xl">Yes</a></span> </div> </div> </div> ` })}`;
}, "/home/Prisca/coding/online-booking/src/pages/completion.astro", void 0);

const $$file = "/home/Prisca/coding/online-booking/src/pages/completion.astro";
const $$url = "/completion";

export { $$Completion as default, $$file as file, $$url as url };
