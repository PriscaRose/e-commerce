import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BX9JtlIt.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_astro-internal_middleware.mjs';

const _page0 = () => import('./chunks/generic_ACuT26l8.mjs');
const _page1 = () => import('./chunks/index_nNgYshxE.mjs');
const _page2 = () => import('./chunks/_.._B4CAAQQv.mjs');
const _page3 = () => import('./chunks/create_D3_oO6Xt.mjs');
const _page4 = () => import('./chunks/dashboard_BuhtL5tc.mjs');
const _page5 = () => import('./chunks/drivers_nzPj48P1.mjs');
const _page6 = () => import('./chunks/settings_DHmzHMwl.mjs');
const _page7 = () => import('./chunks/forgot_DBO7ZBiM.mjs');
const _page8 = () => import('./chunks/reset_BUIvG3zz.mjs');
const _page9 = () => import('./chunks/signin_vTKNpLqK.mjs');
const _page10 = () => import('./chunks/signup_B6ThXSUT.mjs');
const _page11 = () => import('./chunks/index_5QZQJzEJ.mjs');
const _page12 = () => import('./chunks/bookSeat_BGwa8tUt.mjs');
const _page13 = () => import('./chunks/create-payment-intent_D9OMdQvx.mjs');
const _page14 = () => import('./chunks/createBus_BlqptnWc.mjs');
const _page15 = () => import('./chunks/deleteBus_D56q_rat.mjs');
const _page16 = () => import('./chunks/monthly-payment_DqqanYNM.mjs');
const _page17 = () => import('./chunks/resetTrip_rQpY_Nxf.mjs');
const _page18 = () => import('./chunks/search_Br6YTVMT.mjs');
const _page19 = () => import('./chunks/unpickSeat_DXhkGdhC.mjs');
const _page20 = () => import('./chunks/updateBus_DAefm4Sn.mjs');
const _page21 = () => import('./chunks/updateDriver_Bapdui9k.mjs');
const _page22 = () => import('./chunks/ex_CO6nSwg-.mjs');
const _page23 = () => import('./chunks/forgot-password_BXYMRO5K.mjs');
const _page24 = () => import('./chunks/reset-password_C5bIZoyl.mjs');
const _page25 = () => import('./chunks/signin_BfCEUOf4.mjs');
const _page26 = () => import('./chunks/signout_C7wuOCrv.mjs');
const _page27 = () => import('./chunks/update_CmXDdp96.mjs');
const _page28 = () => import('./chunks/index_CNRzAYCY.mjs');
const _page29 = () => import('./chunks/_.._DxhN2ScN.mjs');
const _page30 = () => import('./chunks/_.._CCY_Bkg0.mjs');
const _page31 = () => import('./chunks/completion_BXlySPxv.mjs');
const _page32 = () => import('./chunks/_.._g3SsQYai.mjs');
const _page33 = () => import('./chunks/payment_5Xhs9TE-.mjs');
const _page34 = () => import('./chunks/policy_B5opHa34.mjs');
const _page35 = () => import('./chunks/signoutConfirm_zdByIdxx.mjs');
const _page36 = () => import('./chunks/_.._BGlFpVOH.mjs');
const _page37 = () => import('./chunks/index_oxY4OS3N.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/buses/index.astro", _page1],
    ["src/pages/admin/buses/[...id].astro", _page2],
    ["src/pages/admin/create.astro", _page3],
    ["src/pages/admin/dashboard.astro", _page4],
    ["src/pages/admin/drivers.astro", _page5],
    ["src/pages/admin/settings.astro", _page6],
    ["src/pages/admin/user/password/forgot.astro", _page7],
    ["src/pages/admin/user/password/reset.astro", _page8],
    ["src/pages/admin/user/signin.astro", _page9],
    ["src/pages/admin/user/signup.astro", _page10],
    ["src/pages/admin/index.astro", _page11],
    ["src/pages/api/bookSeat.ts", _page12],
    ["src/pages/api/create-payment-intent.ts", _page13],
    ["src/pages/api/createBus.ts", _page14],
    ["src/pages/api/deleteBus.ts", _page15],
    ["src/pages/api/monthly-payment.ts", _page16],
    ["src/pages/api/resetTrip.ts", _page17],
    ["src/pages/api/search.ts", _page18],
    ["src/pages/api/unpickSeat.ts", _page19],
    ["src/pages/api/updateBus.ts", _page20],
    ["src/pages/api/updateDriver.ts", _page21],
    ["src/pages/api/user/ex.ts", _page22],
    ["src/pages/api/user/forgot-password.ts", _page23],
    ["src/pages/api/user/reset-password.ts", _page24],
    ["src/pages/api/user/signin.ts", _page25],
    ["src/pages/api/user/signout.ts", _page26],
    ["src/pages/api/user/update.ts", _page27],
    ["src/pages/api/index.ts", _page28],
    ["src/pages/booking/seat/[...busId].astro", _page29],
    ["src/pages/booking/[...search].astro", _page30],
    ["src/pages/completion.astro", _page31],
    ["src/pages/cooperatives/[...name].astro", _page32],
    ["src/pages/payment.astro", _page33],
    ["src/pages/policy.astro", _page34],
    ["src/pages/signoutConfirm.astro", _page35],
    ["src/pages/success/[...email].astro", _page36],
    ["src/pages/index.astro", _page37]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "0805c07c-f78e-4c68-8fe1-a22724941b71"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
