/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, l as Fragment } from '../astro_Cmh9rrm7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { G as GET } from './index_JlIgSKxQ.mjs';
import { $ as $$AccessDenied } from './create_DclzPKOJ.mjs';

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const response = await GET();
  const buses = await response.json();
  const user = Astro2.locals.user;
  const userBuses = buses.filter(
    (bus) => bus.cooperative.name === user?.cooperativeName
  );
  return renderTemplate`${user !== null ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "AdminPanel", null, { "client:only": "react", "user": user, "client:component-hydration": "only", "client:component-path": "/home/Prisca/coding/online-booking/src/components/AdminSideBar", "client:component-export": "default" })}${maybeRenderHead()}<div class="w-full basis-[78%] max-h-screen overflow-y-auto pr-10">${renderComponent($$result2, "DashboardComponent", null, { "client:only": "react", "buses": userBuses, "client:component-hydration": "only", "client:component-path": "/home/Prisca/coding/online-booking/src/components/DashboardComponent", "client:component-export": "default" })}</div>` })}` : renderTemplate`${renderComponent($$result, "AccessDenied", $$AccessDenied, {})}`}`;
}, "/home/Prisca/coding/online-booking/src/pages/admin/dashboard.astro", void 0);

const $$file = "/home/Prisca/coding/online-booking/src/pages/admin/dashboard.astro";
const $$url = "/admin/dashboard";

export { $$Dashboard as default, $$file as file, $$url as url };
