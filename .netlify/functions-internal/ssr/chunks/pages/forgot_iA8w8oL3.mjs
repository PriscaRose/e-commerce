/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_Cmh9rrm7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './__CvbSeiAy.mjs';

const $$Astro = createAstro();
const $$Forgot = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Forgot;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Reset Password" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-16 py-8 max-w-xl mx-auto"> <h2 class="text-blue-800 text-2xl text-center font-sans font-meduim">
Reset your password
</h2> <div id="block"> <p class="font-sans mt-8">
To reset your password, enter your email below and submit.<br> An
        email will be sent to you with instructions about how to complete the
        process.
</p> <form action="/api/user/forgot-password" method="post" class="flex flex-col mt-8"> <input type="email" name="email" placeholder="New email" class="max-w-lg h-14 rounded-md"> <button type="submit" class="mt-8 bg-blue-800 text-white font-bold h-14 px-11 rounded-md w-max">Reset Password</button> </form> </div> <div id="hidden" class="hidden mt-8 bg-green-100 max-w-max p-8 rounded-md"> <p class="text-green-800 text-lg">Please check your email inbox for a link to complete the reset.</p> </div> </div> ` })} `;
}, "/home/Prisca/coding/online-booking/src/pages/admin/user/password/forgot.astro", void 0);

const $$file = "/home/Prisca/coding/online-booking/src/pages/admin/user/password/forgot.astro";
const $$url = "/admin/user/password/forgot";

export { $$Forgot as default, $$file as file, $$url as url };
