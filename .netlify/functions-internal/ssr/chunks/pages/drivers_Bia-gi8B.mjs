/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, l as Fragment } from '../astro_Cmh9rrm7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { G as GET } from './index_JlIgSKxQ.mjs';
import { $ as $$AdminLayout } from './__DxMKhI5Q.mjs';
import { $ as $$AccessDenied } from './create_DclzPKOJ.mjs';

const $$Astro = createAstro();
const $$Drivers = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Drivers;
  const user = Astro2.locals.user;
  const response = await GET();
  const buses = await response.json();
  const userBuses = buses.filter(
    (bus) => bus.cooperative.name === user?.cooperativeName
  );
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Drivers" }, { "default": ($$result2) => renderTemplate`${user !== null ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AdminPanel", null, { "client:only": "react", "user": user, "client:component-hydration": "only", "client:component-path": "/home/Prisca/coding/online-booking/src/components/AdminSideBar", "client:component-export": "default" })} ${renderComponent($$result3, "DriversList", null, { "client:only": "react", "userBuses": userBuses, "cooperativeName": user?.cooperativeName, "client:component-hydration": "only", "client:component-path": "/home/Prisca/coding/online-booking/src/components/DriversList", "client:component-export": "default" })} ` })}` : renderTemplate`${renderComponent($$result2, "AccessDenied", $$AccessDenied, {})}`}` })}`;
}, "/home/Prisca/coding/online-booking/src/pages/admin/drivers.astro", void 0);

const $$file = "/home/Prisca/coding/online-booking/src/pages/admin/drivers.astro";
const $$url = "/admin/drivers";

export { $$Drivers as default, $$file as file, $$url as url };
