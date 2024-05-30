/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_Cmh9rrm7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './__CvbSeiAy.mjs';

const $$Astro = createAstro();
const $$Signin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Signin" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-20"> <h2 class="text-5xl text-center text-blue-900">
Hello and Welcome to <i>Happy Travel</i> </h2> <div class="max-w-max mx-auto mt-8 text-xl">
Don't have an account?
<a href="/signup" target="_blank" class="px-10rounded-lg text-blue-800">
Sign up
</a> </div> </div> <form method="post" action="/api/user/signin" class="max-w-xl mx-auto mt-16"> <fieldset class="flex flex-col my-8"> <label for="email">Email</label> <input type="email" name="email" id="email" placeholder="email" class="h-14 rounded-md pl-4 border border-blue-900" required> </fieldset> <fieldset class="flex flex-col my-8"> <label for="password">Password</label> <input type="password" name="password" id="password" placeholder="password" class="h-14 rounded-md pl-4 border border-blue-900" required> </fieldset> <div class="flex justify-between items-center"> <button class="bg-blue-800 text-white font-bold h-14 px-11 rounded-md">
Login
</button> <a href="/password/forgot" target="_blank" rel="noopener noreferrer">Forgot your password?</a> </div> <p id="form-error" class="text-red-300 text-xl"></p> </form> ` })}`;
}, "/home/Prisca/coding/online-booking/src/pages/admin/user/signin.astro", void 0);

const $$file = "/home/Prisca/coding/online-booking/src/pages/admin/user/signin.astro";
const $$url = "/admin/user/signin";

export { $$Signin as default, $$file as file, $$url as url };
