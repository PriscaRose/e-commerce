/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_Cmh9rrm7.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { email } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<section class="flex justify-center h-screen bg-gray-900 fixed top-0 z-20 w-screen items-center"> <div class="bg-green-100 py-11 px-8 text-lg"> <p>Your payment has been sent successfully</p> <p class="my-3">
Please check your receipt in your email box <span class="text-green-900">${email}</span>.
</p> <p>
If you have any questions, please email
<a href="mailto:orders@example.com" class="text-green-900">orders@example.com</a>.
</p> <p class="mt-3">Thank you for trusting our service</p> <div class="mt-6"> <a href="/" class="text-green-900">Back to home</a> </div> </div> </section>`;
}, "/home/Prisca/coding/online-booking/src/pages/success/[...email].astro", void 0);

const $$file = "/home/Prisca/coding/online-booking/src/pages/success/[...email].astro";
const $$url = "/success/[...email]";

export { $$ as default, $$file as file, $$url as url };
