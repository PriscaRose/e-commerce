/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, l as Fragment } from '../astro_Cmh9rrm7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$AdminLayout } from './__DxMKhI5Q.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$AccessDenied = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AccessDenied;
  return renderTemplate`${maybeRenderHead()}<div class="w-full flex flex-col items-center justify-center h-screen bg-gray-100"> <h1 class="text-3xl font-semibold mb-6">Access Denied</h1> <p class="text-gray-700 mb-8">
Please log in or create an account to access this page.
</p> <div class="flex space-x-4"> <a href="/admin/user/signin" class="bg-blue-900 cursor-pointer text-white font-semibold py-2 px-4 rounded">
Log In
</a> <a href="/admin/user/signup" class="bg-gray-500 cursor-pointer hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
Create Account
</a> </div> </div>`;
}, "/home/Prisca/coding/online-booking/src/components/AccessDenied.astro", void 0);

const $$Astro = createAstro();
const $$Create = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Create;
  const user = Astro2.locals.user;
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Create Bus" }, { "default": ($$result2) => renderTemplate`${user !== null ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AdminPanel", null, { "client:only": "react", "user": user, "client:component-hydration": "only", "client:component-path": "/home/Prisca/coding/online-booking/src/components/AdminSideBar", "client:component-export": "default" })} ${maybeRenderHead()}<div class="w-full basis-[78%] px-10"> ${renderComponent($$result3, "AddBusForm", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/Prisca/coding/online-booking/src/components/AdminForm", "client:component-export": "default" })} </div> ` })}` : renderTemplate`${renderComponent($$result2, "AccessDenied", $$AccessDenied, {})}`}` })}`;
}, "/home/Prisca/coding/online-booking/src/pages/admin/create.astro", void 0);

const $$file = "/home/Prisca/coding/online-booking/src/pages/admin/create.astro";
const $$url = "/admin/create";

const create = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Create,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$AccessDenied as $, create as c };
