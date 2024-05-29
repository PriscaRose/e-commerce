/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_Cmh9rrm7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './__Dh2kIqUE.mjs';

const $$Astro = createAstro();
const $$Reset = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Reset;
  const search = new URL(Astro2.url).search;
  const params = new URLSearchParams(search.substring(1));
  const query = {};
  for (const [key, value] of params) {
    query[key] = value;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Reset Password" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-16 py-8 max-w-xl mx-auto"> <h2 class="text-blue-800 text-2xl font-sans font-meduim">Reset your password</h2> <form action="/api/user/reset-password" method="post" class="flex flex-col mt-8"> <input type="hidden" name="token"${addAttribute(query.token, "value")}> <label for="new-password">New password</label> <input type="password" name="new-password" placeholder="New password" class="max-w-lg h-14 rounded-md"> <label for="confirm-passowrd" class="mt-6">Confirm password</label> <input type="password" name="confirm-password" placeholder="Confirm password" class="max-w-lg h-14 rounded-md"> <button type="submit" class="mt-8 bg-blue-800 text-white font-bold h-14 px-11 rounded-md w-max">Reset Password</button> </form> </div> ` })}`;
}, "/home/Prisca/coding/online-booking/src/pages/admin/user/password/reset.astro", void 0);

const $$file = "/home/Prisca/coding/online-booking/src/pages/admin/user/password/reset.astro";
const $$url = "/admin/user/password/reset";

export { $$Reset as default, $$file as file, $$url as url };
