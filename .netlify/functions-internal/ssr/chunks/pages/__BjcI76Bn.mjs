/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_Cmh9rrm7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { GET } from './search_CE-hoFa9.mjs';
import { persistentAtom } from '@nanostores/persistent';
import { $ as $$Layout } from './__Dh2kIqUE.mjs';

const departureLocations = persistentAtom(
  "departureLocations",
  [],
  {
    encode: JSON.stringify,
    decode: JSON.parse
  }
);
const destinationLocations = persistentAtom(
  "destinations",
  [],
  {
    encode: JSON.stringify,
    decode: JSON.parse
  }
);
persistentAtom("passengers", [], {
  encode: JSON.stringify,
  decode: JSON.parse
});
persistentAtom(
  "searchTerms",
  { departureLocation: "", destination: "", departureDate: "" },
  {
    encode: JSON.stringify,
    decode: JSON.parse
  }
);
persistentAtom("pickedSeat", {
  seatPrice: 0,
  totalPickedSeat: 0,
  busId: "",
  seatIds: []
}, {
  encode: JSON.stringify,
  decode: JSON.parse
});
function getDepartureLocations(data) {
  departureLocations.set(data);
}
function getDestinations(data) {
  destinationLocations.set(data);
}

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const response = await GET(Astro2);
  const data = await response.json();
  const busDepartureLocations = departureLocations.get();
  const busDestinationLocations = destinationLocations.get();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result2, "SearchForm", null, { "departures": busDepartureLocations, "destinations": busDestinationLocations, "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/Prisca/coding/online-booking/src/components/SearchForm", "client:component-export": "default" })} ${renderComponent($$result2, "BookingBus", null, { "client:only": "react", "buses": data, "client:component-hydration": "only", "client:component-path": "/home/Prisca/coding/online-booking/src/components/BookingBus", "client:component-export": "default" })} </div> ` })}`;
}, "/home/Prisca/coding/online-booking/src/pages/booking/[...search].astro", void 0);

const $$file = "/home/Prisca/coding/online-booking/src/pages/booking/[...search].astro";
const $$url = "/booking/[...search]";

const ____search_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { ____search_ as _, getDestinations as a, getDepartureLocations as g };
