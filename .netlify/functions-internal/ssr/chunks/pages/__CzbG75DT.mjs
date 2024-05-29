/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, h as addAttribute } from '../astro_Cmh9rrm7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './__Dh2kIqUE.mjs';
import { G as GET } from './index_JlIgSKxQ.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Rating = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Rating;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center"> <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"> <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path> </svg> <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"> <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path> </svg> <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"> <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path> </svg> <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"> <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path> </svg> <svg class="w-4 h-4 ms-1 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"> <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path> </svg> </div>`;
}, "/home/Prisca/coding/online-booking/src/components/Rating.astro", void 0);

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { name } = Astro2.params;
  const response = await GET();
  const buses = await response.json();
  const findBuses = buses?.filter(
    (bus) => bus.cooperative.name === name
  );
  const networks = findBuses?.map((bus) => bus.destination);
  const cooperativeName = findBuses[0]?.cooperative?.name;
  const cooperativePhoneNum = findBuses[0]?.cooperative?.phoneNumber;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-8"> <h2 class="text-4xl pb-8">About ${cooperativeName}</h2> <p class="text-gray-700">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum vitae
      ipsum totam voluptate voluptas quaerat natus voluptates neque ex, magnam
      esse similique nesciunt fugiat quisquam vel, delectus reprehenderit quidem
      asperiores.
</p> <div> <h3 class="uppercase font-sans font-meduim text-xl mt-10">
Contact ${cooperativeName} </h3> <div class="mt-4"> <p class="text-gray-700"></p>
Phone Number: <a${addAttribute(`tel:+261${cooperativePhoneNum}`, "href")} class="font-meduim font-sans text-blue-800">${cooperativePhoneNum}</a> </div> <p class="text-gray-700">
Email: <a href="mailto:test@gmail.com" class="font-meduim font-sans text-blue-800">test@gmial.com</a> </p> </div> </div> <div> <h3 class="font-sans font-meduim text-2xl mt-10 mb-4"> ${name} Routes & Network
</h3> <p class="text-gray-700"> ${name}’s bus network features 1 bus routes that connect ${networks.length}
cities serving ${networks.length} stations. On average, ${name}
performs about ${findBuses.length} bus trips every day. The top cities to
      which ${name} offers the highest number of daily bus service include El
      Paso and Phoenix.
</p> </div> <div class="mb-10"> <h3 class="font-sans font-meduim text-2xl mt-10 mb-4">
Traveling with a Group on ${name} </h3> <p class="text-gray-700">
Want to travel as a group on Greyhound? You can book up to five tickets in
      one reservation on Wanderu. Simply add more travelers on the Trip Summary
      page, and then type each passenger’s name on the checkout page. If you
      choose to print the tickets at home, the email address on the reservation
      will receive the tickets for each of the passengers traveling on the bus.
      Alternatively, you could choose to pick up the tickets for your group at
      the bus station by selecting the will-call option on the checkout page.
</p> </div> <div> <h3 class="font-sans font-meduim text-2xl mt-10 mb-4"> ${name} reviews from Happy Travel customers
</h3> <p class="text-gray-700">
Overall review score for ${name} (Based on 243 reviews)
</p> <h4 class="font-meduim my-4">RATINGS (OUT OF 5)</h4> <div> <div class="relative overflow-x-auto"> <table class="w-full text-sm text-left rtl:text-right text-gray-500"> <tbody> <tr class="bg-gray-100 border-b"> <th scope="row" class="px-6 py-4 font-bold text-gray-700 whitespace-nowrap">
Comfort
</th> <td class="px-6 py-4 flex justify-end"> ${renderComponent($$result2, "Rating", $$Rating, {})} </td> </tr> <tr class="bg-white border-b"> <th scope="row" class="px-6 py-4 font-bold text-gray-700 whitespace-nowrap">
Timeliness
</th> <td class="px-6 py-4 flex justify-end"> ${renderComponent($$result2, "Rating", $$Rating, {})} </td> </tr> <tr class="bg-gray-100"> <th scope="row" class="px-6 py-4 font-bold text-gray-700 whitespace-nowrap">
Staff
</th> <td class="px-6 py-4 flex justify-end"> ${renderComponent($$result2, "Rating", $$Rating, {})} </td> </tr> <tr class="bg-white"> <th scope="row" class="px-6 py-4 font-bold text-gray-700 whitespace-nowrap">
Price
</th> <td class="px-6 py-4 flex justify-end"> ${renderComponent($$result2, "Rating", $$Rating, {})} </td> </tr> </tbody> </table> </div> </div> </div> <h3 class="font-sans font-meduim text-2xl mt-10 mb-4"> ${name} Bus Guide & FAQs
</h3> ${renderComponent($$result2, "Faqs", null, { "name": name ? name : "", "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/Prisca/coding/online-booking/src/components/Faqs", "client:component-export": "default" })} ` })}`;
}, "/home/Prisca/coding/online-booking/src/pages/cooperatives/[...name].astro", void 0);

const $$file = "/home/Prisca/coding/online-booking/src/pages/cooperatives/[...name].astro";
const $$url = "/cooperatives/[...name]";

export { $$ as default, $$file as file, $$url as url };
