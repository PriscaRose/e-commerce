/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, j as renderHead, k as renderSlot, i as renderComponent, m as maybeRenderHead } from '../astro_Cmh9rrm7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { G as GET } from './index_JlIgSKxQ.mjs';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$AdminLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AdminLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" type="image/svg+xml" href="/icons/favicon.svg"><title>${title}</title>${renderHead()}</head> <body class="relative font-sans max-h-screen overflow-y-hidden"> <main class="w-full flex justify-between"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/home/Prisca/coding/online-booking/src/layout/AdminLayout.astro", void 0);

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const currentUrl = Astro2.url.pathname;
  const response = await GET();
  const user = Astro2.locals.user;
  const buses = await response.json();
  const urlParts = currentUrl.split("/");
  const busId = urlParts[urlParts.length - 1];
  const bus = buses.find((bus2) => bus2._id === busId);
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Admin Bus Details" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AdminSidebar", null, { "client:only": "react", "user": user || void 0, "client:component-hydration": "only", "client:component-path": "/home/Prisca/coding/online-booking/src/components/AdminSideBar", "client:component-export": "default" })} ${maybeRenderHead()}<div class="w-full basis-[78%] max-h-screen overflow-y-auto pr-10"> ${renderComponent($$result2, "AdminBusDetails", null, { "client:only": "react", "bus": bus, "client:component-hydration": "only", "client:component-path": "/home/Prisca/coding/online-booking/src/components/AdminBusDetails", "client:component-export": "default" })} </div> ` })}`;
}, "/home/Prisca/coding/online-booking/src/pages/admin/buses/[...id].astro", void 0);

const $$file = "/home/Prisca/coding/online-booking/src/pages/admin/buses/[...id].astro";
const $$url = "/admin/buses/[...id]";

const ____id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$AdminLayout as $, ____id_ as _ };
