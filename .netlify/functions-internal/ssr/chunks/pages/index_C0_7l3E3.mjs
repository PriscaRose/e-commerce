/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, l as Fragment, m as maybeRenderHead, h as addAttribute } from '../astro_Cmh9rrm7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { G as GET } from './index_JlIgSKxQ.mjs';
import { $ as $$AdminLayout } from './__DxMKhI5Q.mjs';
import { $ as $$AccessDenied } from './create_DclzPKOJ.mjs';
import $$Dashboard from './dashboard_DdUh2OTT.mjs';
import { g as getDepartureLocations, a as getDestinations } from './__DBRh8STZ.mjs';
import 'clsx';
import { $ as $$Layout } from './__CvbSeiAy.mjs';

const $$Astro$3 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$2;
  const response = await GET();
  const user = Astro2.locals.user;
  const buses = await response.json();
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Buses" }, { "default": ($$result2) => renderTemplate`${user !== null ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AdminPanel", null, { "client:only": "react", "user": user, "client:component-hydration": "only", "client:component-path": "/home/Prisca/coding/online-booking/src/components/AdminSideBar", "client:component-export": "default" })} ${maybeRenderHead()}<div class="mt-4 basis-[78%] max-h-screen overflow-y-auto pr-10"> <h1 class="text-2xl font-bold text-blue-900">
Available Buses at ${user?.cooperativeName} </h1> ${renderComponent($$result3, "BusesList", null, { "client:only": "react", "buses": buses, "cooperativeName": user?.cooperativeName, "client:component-hydration": "only", "client:component-path": "/home/Prisca/coding/online-booking/src/components/BusesList", "client:component-export": "default" })} </div> ` })}` : renderTemplate`${renderComponent($$result2, "AccessDenied", $$AccessDenied, {})}`}` })}`;
}, "/home/Prisca/coding/online-booking/src/pages/admin/buses/index.astro", void 0);

const $$file$2 = "/home/Prisca/coding/online-booking/src/pages/admin/buses/index.astro";
const $$url$2 = "/admin/buses";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Admin Panel" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Dashboard", $$Dashboard, {})} ` })}`;
}, "/home/Prisca/coding/online-booking/src/pages/admin/index.astro", void 0);

const $$file$1 = "/home/Prisca/coding/online-booking/src/pages/admin/index.astro";
const $$url$1 = "/admin";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

function color(index) {
  let color2;
  if (index % 2 === 0) {
    color2 = "pink";
  } else if (index % 3 === 0) {
    color2 = "green";
  } else if (index % 5 === 0) {
    color2 = "yellow";
  } else if (index % 7 === 0) {
    color2 = "red";
  } else if (index % 9 === 0) {
    color2 = "purple";
  } else {
    color2 = "black";
  }
  return color2;
}

const $$Astro$1 = createAstro();
const $$CooperativeCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CooperativeCard;
  const { cooperativeInfoName, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(`/cooperatives/${cooperativeInfoName}`, "href")}${addAttribute(`bg-white text-${color(
    index
  )}-700 text-xl font-bold uppercase shadow-sm border rounded-md w-[151px] h-28 px-2 text-center flex items-center justify-center`, "class")}> ${cooperativeInfoName}</a> </li>`;
}, "/home/Prisca/coding/online-booking/src/components/CooperativeCard.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const response = await GET();
  const buses = await response.json();
  const cooperativesInfo = buses.map((bus) => bus.cooperative.name);
  const uniquecooperativesInfo = cooperativesInfo.filter(
    (item, index) => cooperativesInfo.indexOf(item) === index
  );
  const departures = buses.map((bus) => bus.busDepartureLocation);
  const destinations = buses.map((bus) => bus.destination);
  getDepartureLocations(departures);
  getDestinations(destinations);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result2, "SearchForm", null, { "client:only": "react", "departures": departures, "destinations": destinations, "client:component-hydration": "only", "client:component-path": "/home/Prisca/coding/online-booking/src/components/SearchForm.tsx", "client:component-export": "default" })} <h2 class="text-2xl font-bold text-center">Our partners include</h2> <ul class="relative pt-10 flex justify-start gap-3 flex-wrap"> ${uniquecooperativesInfo.map(
    (cooperativeInfoName, index) => renderTemplate`${renderComponent($$result2, "CooperativeCard", $$CooperativeCard, { "cooperativeInfoName": cooperativeInfoName, "index": index })}`
  )} </ul> <div class="mt-8"> <h3 class="text-lg font-bold mb-3">What is Happy Travel?</h3> <p>
In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is available
</p> </div> <div class="mt-8"> <h3 class="text-lg font-bold mb-3">What is Happy Travel?</h3> <p>
In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is available
</p> </div> <div class="mt-8"> <h3 class="text-lg font-bold mb-3">What is Happy Travel?</h3> <p>
In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before the final copy is available
</p> </div> </div> ` })}`;
}, "/home/Prisca/coding/online-booking/src/pages/index.astro", void 0);

const $$file = "/home/Prisca/coding/online-booking/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
