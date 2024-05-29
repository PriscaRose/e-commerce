/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_Cmh9rrm7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$AdminLayout } from './__pX6LcLvi.mjs';

const $$Astro = createAstro();
const $$SignoutConfirm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignoutConfirm;
  return renderTemplate`${renderComponent($$result, "Layout", $$AdminLayout, { "title": "confirm" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AdminPanel", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/Prisca/coding/online-booking/src/components/AdminSideBar", "client:component-export": "default" })} ${maybeRenderHead()}<div class="basis-[80%]"> <p class="text-center mt-8 text-xl">
You have logged out successfully from your admin Account
</p> <form method="post" action="/api/user/signin" class="max-w-xl mx-auto mt-16"> <fieldset class="flex flex-col my-8"> <label for="email">Email</label> <input type="email" name="email" id="email" placeholder="email" class="h-14 rounded-md pl-4 border border-blue-900" required> </fieldset> <fieldset class="flex flex-col my-8"> <label for="password">Password</label> <input type="password" name="password" id="password" placeholder="password" class="h-14 rounded-md pl-4 border border-blue-900" required> </fieldset> <div class="flex justify-between items-center"> <a href="/" class="underline">Back to home</a> <button class="bg-blue-800 text-white font-bold h-14 px-11 rounded-md">
Login
</button> </div> </form> </div> ` })}`;
}, "/home/Prisca/coding/online-booking/src/pages/signoutConfirm.astro", void 0);

const $$file = "/home/Prisca/coding/online-booking/src/pages/signoutConfirm.astro";
const $$url = "/signoutConfirm";

export { $$SignoutConfirm as default, $$file as file, $$url as url };
