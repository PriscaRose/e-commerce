/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent } from '../astro_Cmh9rrm7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './__CvbSeiAy.mjs';

const $$Astro = createAstro();
const $$Payment = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Payment;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Checkout", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/Prisca/coding/online-booking/src/components/Checkout", "client:component-export": "default" })} ` })}`;
}, "/home/Prisca/coding/online-booking/src/pages/payment.astro", void 0);

const $$file = "/home/Prisca/coding/online-booking/src/pages/payment.astro";
const $$url = "/payment";

export { $$Payment as default, $$file as file, $$url as url };
