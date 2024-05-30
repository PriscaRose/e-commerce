/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_Cmh9rrm7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './__CvbSeiAy.mjs';

const $$Astro = createAstro();
const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signup;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Signup" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-10"> ${renderComponent($$result2, "SignupForm", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/Prisca/coding/online-booking/src/components/SignupForm", "client:component-export": "default" })} </div> ` })}`;
}, "/home/Prisca/coding/online-booking/src/pages/admin/user/signup.astro", void 0);

const $$file = "/home/Prisca/coding/online-booking/src/pages/admin/user/signup.astro";
const $$url = "/admin/user/signup";

export { $$Signup as default, $$file as file, $$url as url };
