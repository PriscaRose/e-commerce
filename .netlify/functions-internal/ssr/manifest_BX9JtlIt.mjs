import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_Cmh9rrm7.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BnJAlrXm.css"},{"type":"external","src":"/_astro/_id_.CMrlTJwl.css"}],"routeData":{"route":"/admin/buses","isIndex":true,"type":"page","pattern":"^\\/admin\\/buses\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"buses","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/buses/index.astro","pathname":"/admin/buses","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BnJAlrXm.css"},{"type":"external","src":"/_astro/_id_.CMrlTJwl.css"}],"routeData":{"route":"/admin/buses/[...id]","isIndex":false,"type":"page","pattern":"^\\/admin\\/buses(?:\\/(.*?))?\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"buses","dynamic":false,"spread":false}],[{"content":"...id","dynamic":true,"spread":true}]],"params":["...id"],"component":"src/pages/admin/buses/[...id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BnJAlrXm.css"},{"type":"external","src":"/_astro/_id_.CMrlTJwl.css"}],"routeData":{"route":"/admin/create","isIndex":false,"type":"page","pattern":"^\\/admin\\/create\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"create","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/create.astro","pathname":"/admin/create","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BnJAlrXm.css"}],"routeData":{"route":"/admin/dashboard","isIndex":false,"type":"page","pattern":"^\\/admin\\/dashboard\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/dashboard.astro","pathname":"/admin/dashboard","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BnJAlrXm.css"},{"type":"external","src":"/_astro/_id_.CMrlTJwl.css"}],"routeData":{"route":"/admin/drivers","isIndex":false,"type":"page","pattern":"^\\/admin\\/drivers\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"drivers","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/drivers.astro","pathname":"/admin/drivers","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const o=document.getElementById(\"toast-danger\"),d=document.getElementById(\"toast-success\"),n=document.getElementById(\"errMessage\"),a=document.getElementById(\"close\");document.forms[0].addEventListener(\"submit\",async t=>{t.preventDefault(),n.innerText=\"\";const e=t.target,s=await fetch(e.action,{method:e.method,body:new FormData(e)});s.ok?d.classList.remove(\"hidden\"):(o.classList.remove(\"hidden\"),n.innerText=(await s.json()).error)});a.addEventListener(\"click\",()=>{o.classList.add(\"hidden\"),d.classList.add(\"hidden\")});\n"}],"styles":[{"type":"external","src":"/_astro/_id_.BnJAlrXm.css"},{"type":"external","src":"/_astro/_id_.CMrlTJwl.css"}],"routeData":{"route":"/admin/settings","isIndex":false,"type":"page","pattern":"^\\/admin\\/settings\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"settings","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/settings.astro","pathname":"/admin/settings","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=document.getElementById(\"hidden\"),o=document.getElementById(\"block\");document.forms[0].addEventListener(\"submit\",async t=>{t.preventDefault();const e=t.target;(await fetch(e.action,{method:e.method,body:new FormData(e)})).ok&&(n?.classList.remove(\"hidden\"),o?.classList.add(\"hidden\"))});\n"}],"styles":[{"type":"external","src":"/_astro/_id_.BnJAlrXm.css"},{"type":"external","src":"/_astro/_id_.CMrlTJwl.css"},{"type":"inline","content":".video-container[data-astro-cid-3ef6ksr2]{position:relative;top:0;bottom:0;width:100%;height:500px;overflow:hidden}.video-container[data-astro-cid-3ef6ksr2] video[data-astro-cid-3ef6ksr2]{min-width:100%;min-height:100%;width:auto;height:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n"}],"routeData":{"route":"/admin/user/password/forgot","isIndex":false,"type":"page","pattern":"^\\/admin\\/user\\/password\\/forgot\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"user","dynamic":false,"spread":false}],[{"content":"password","dynamic":false,"spread":false}],[{"content":"forgot","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/user/password/forgot.astro","pathname":"/admin/user/password/forgot","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BnJAlrXm.css"},{"type":"external","src":"/_astro/_id_.CMrlTJwl.css"},{"type":"inline","content":".video-container[data-astro-cid-3ef6ksr2]{position:relative;top:0;bottom:0;width:100%;height:500px;overflow:hidden}.video-container[data-astro-cid-3ef6ksr2] video[data-astro-cid-3ef6ksr2]{min-width:100%;min-height:100%;width:auto;height:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n"}],"routeData":{"route":"/admin/user/password/reset","isIndex":false,"type":"page","pattern":"^\\/admin\\/user\\/password\\/reset\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"user","dynamic":false,"spread":false}],[{"content":"password","dynamic":false,"spread":false}],[{"content":"reset","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/user/password/reset.astro","pathname":"/admin/user/password/reset","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BnJAlrXm.css"},{"type":"external","src":"/_astro/_id_.CMrlTJwl.css"},{"type":"inline","content":".video-container[data-astro-cid-3ef6ksr2]{position:relative;top:0;bottom:0;width:100%;height:500px;overflow:hidden}.video-container[data-astro-cid-3ef6ksr2] video[data-astro-cid-3ef6ksr2]{min-width:100%;min-height:100%;width:auto;height:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n"}],"routeData":{"route":"/admin/user/signin","isIndex":false,"type":"page","pattern":"^\\/admin\\/user\\/signin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"user","dynamic":false,"spread":false}],[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/user/signin.astro","pathname":"/admin/user/signin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BnJAlrXm.css"},{"type":"external","src":"/_astro/_id_.CMrlTJwl.css"},{"type":"inline","content":".video-container[data-astro-cid-3ef6ksr2]{position:relative;top:0;bottom:0;width:100%;height:500px;overflow:hidden}.video-container[data-astro-cid-3ef6ksr2] video[data-astro-cid-3ef6ksr2]{min-width:100%;min-height:100%;width:auto;height:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n"}],"routeData":{"route":"/admin/user/signup","isIndex":false,"type":"page","pattern":"^\\/admin\\/user\\/signup\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"user","dynamic":false,"spread":false}],[{"content":"signup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/user/signup.astro","pathname":"/admin/user/signup","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BnJAlrXm.css"},{"type":"external","src":"/_astro/_id_.CMrlTJwl.css"}],"routeData":{"route":"/admin","isIndex":true,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/index.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/bookseat","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/bookSeat\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"bookSeat","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/bookSeat.ts","pathname":"/api/bookSeat","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/create-payment-intent","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/create-payment-intent\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"create-payment-intent","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/create-payment-intent.ts","pathname":"/api/create-payment-intent","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/createbus","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/createBus\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"createBus","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/createBus.ts","pathname":"/api/createBus","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/deletebus","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/deleteBus\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"deleteBus","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/deleteBus.ts","pathname":"/api/deleteBus","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/monthly-payment","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/monthly-payment\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"monthly-payment","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/monthly-payment.ts","pathname":"/api/monthly-payment","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/resettrip","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/resetTrip\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"resetTrip","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/resetTrip.ts","pathname":"/api/resetTrip","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/search","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/search\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/search.ts","pathname":"/api/search","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/unpickseat","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/unpickSeat\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"unpickSeat","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/unpickSeat.ts","pathname":"/api/unpickSeat","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/updatebus","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/updateBus\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"updateBus","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/updateBus.ts","pathname":"/api/updateBus","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/updatedriver","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/updateDriver\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"updateDriver","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/updateDriver.ts","pathname":"/api/updateDriver","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/user/ex","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/user\\/ex\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"user","dynamic":false,"spread":false}],[{"content":"ex","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/user/ex.ts","pathname":"/api/user/ex","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/user/forgot-password","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/user\\/forgot-password\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"user","dynamic":false,"spread":false}],[{"content":"forgot-password","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/user/forgot-password.ts","pathname":"/api/user/forgot-password","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/user/reset-password","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/user\\/reset-password\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"user","dynamic":false,"spread":false}],[{"content":"reset-password","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/user/reset-password.ts","pathname":"/api/user/reset-password","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/user/signin","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/user\\/signin\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"user","dynamic":false,"spread":false}],[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/user/signin.ts","pathname":"/api/user/signin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/user/signout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/user\\/signout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"user","dynamic":false,"spread":false}],[{"content":"signout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/user/signout.ts","pathname":"/api/user/signout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/user/update","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/user\\/update\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"user","dynamic":false,"spread":false}],[{"content":"update","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/user/update.ts","pathname":"/api/user/update","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api","isIndex":true,"type":"endpoint","pattern":"^\\/api\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/index.ts","pathname":"/api","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BnJAlrXm.css"},{"type":"external","src":"/_astro/_id_.CMrlTJwl.css"},{"type":"inline","content":".video-container[data-astro-cid-3ef6ksr2]{position:relative;top:0;bottom:0;width:100%;height:500px;overflow:hidden}.video-container[data-astro-cid-3ef6ksr2] video[data-astro-cid-3ef6ksr2]{min-width:100%;min-height:100%;width:auto;height:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n"}],"routeData":{"route":"/booking/seat/[...busid]","isIndex":false,"type":"page","pattern":"^\\/booking\\/seat(?:\\/(.*?))?\\/?$","segments":[[{"content":"booking","dynamic":false,"spread":false}],[{"content":"seat","dynamic":false,"spread":false}],[{"content":"...busId","dynamic":true,"spread":true}]],"params":["...busId"],"component":"src/pages/booking/seat/[...busId].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BnJAlrXm.css"},{"type":"external","src":"/_astro/_id_.CMrlTJwl.css"},{"type":"inline","content":".video-container[data-astro-cid-3ef6ksr2]{position:relative;top:0;bottom:0;width:100%;height:500px;overflow:hidden}.video-container[data-astro-cid-3ef6ksr2] video[data-astro-cid-3ef6ksr2]{min-width:100%;min-height:100%;width:auto;height:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n"}],"routeData":{"route":"/booking/[...search]","isIndex":false,"type":"page","pattern":"^\\/booking(?:\\/(.*?))?\\/?$","segments":[[{"content":"booking","dynamic":false,"spread":false}],[{"content":"...search","dynamic":true,"spread":true}]],"params":["...search"],"component":"src/pages/booking/[...search].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BnJAlrXm.css"},{"type":"external","src":"/_astro/_id_.CMrlTJwl.css"},{"type":"inline","content":".video-container[data-astro-cid-3ef6ksr2]{position:relative;top:0;bottom:0;width:100%;height:500px;overflow:hidden}.video-container[data-astro-cid-3ef6ksr2] video[data-astro-cid-3ef6ksr2]{min-width:100%;min-height:100%;width:auto;height:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n"}],"routeData":{"route":"/completion","isIndex":false,"type":"page","pattern":"^\\/completion\\/?$","segments":[[{"content":"completion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/completion.astro","pathname":"/completion","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BnJAlrXm.css"},{"type":"external","src":"/_astro/_id_.CMrlTJwl.css"},{"type":"inline","content":".video-container[data-astro-cid-3ef6ksr2]{position:relative;top:0;bottom:0;width:100%;height:500px;overflow:hidden}.video-container[data-astro-cid-3ef6ksr2] video[data-astro-cid-3ef6ksr2]{min-width:100%;min-height:100%;width:auto;height:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n"}],"routeData":{"route":"/cooperatives/[...name]","isIndex":false,"type":"page","pattern":"^\\/cooperatives(?:\\/(.*?))?\\/?$","segments":[[{"content":"cooperatives","dynamic":false,"spread":false}],[{"content":"...name","dynamic":true,"spread":true}]],"params":["...name"],"component":"src/pages/cooperatives/[...name].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BnJAlrXm.css"},{"type":"external","src":"/_astro/_id_.CMrlTJwl.css"},{"type":"inline","content":".video-container[data-astro-cid-3ef6ksr2]{position:relative;top:0;bottom:0;width:100%;height:500px;overflow:hidden}.video-container[data-astro-cid-3ef6ksr2] video[data-astro-cid-3ef6ksr2]{min-width:100%;min-height:100%;width:auto;height:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n"}],"routeData":{"route":"/payment","isIndex":false,"type":"page","pattern":"^\\/payment\\/?$","segments":[[{"content":"payment","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/payment.astro","pathname":"/payment","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BnJAlrXm.css"},{"type":"external","src":"/_astro/_id_.CMrlTJwl.css"},{"type":"inline","content":".video-container[data-astro-cid-3ef6ksr2]{position:relative;top:0;bottom:0;width:100%;height:500px;overflow:hidden}.video-container[data-astro-cid-3ef6ksr2] video[data-astro-cid-3ef6ksr2]{min-width:100%;min-height:100%;width:auto;height:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n"}],"routeData":{"route":"/policy","isIndex":false,"type":"page","pattern":"^\\/policy\\/?$","segments":[[{"content":"policy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/policy.astro","pathname":"/policy","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BnJAlrXm.css"},{"type":"external","src":"/_astro/_id_.CMrlTJwl.css"}],"routeData":{"route":"/signoutconfirm","isIndex":false,"type":"page","pattern":"^\\/signoutConfirm\\/?$","segments":[[{"content":"signoutConfirm","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signoutConfirm.astro","pathname":"/signoutConfirm","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BnJAlrXm.css"}],"routeData":{"route":"/success/[...email]","isIndex":false,"type":"page","pattern":"^\\/success(?:\\/(.*?))?\\/?$","segments":[[{"content":"success","dynamic":false,"spread":false}],[{"content":"...email","dynamic":true,"spread":true}]],"params":["...email"],"component":"src/pages/success/[...email].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BnJAlrXm.css"},{"type":"external","src":"/_astro/_id_.CMrlTJwl.css"},{"type":"inline","content":".video-container[data-astro-cid-3ef6ksr2]{position:relative;top:0;bottom:0;width:100%;height:500px;overflow:hidden}.video-container[data-astro-cid-3ef6ksr2] video[data-astro-cid-3ef6ksr2]{min-width:100%;min-height:100%;width:auto;height:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/Prisca/coding/online-booking/src/pages/admin/user/password/forgot.astro",{"propagation":"none","containsHead":true}],["/home/Prisca/coding/online-booking/src/pages/admin/user/password/reset.astro",{"propagation":"none","containsHead":true}],["/home/Prisca/coding/online-booking/src/pages/admin/user/signin.astro",{"propagation":"none","containsHead":true}],["/home/Prisca/coding/online-booking/src/pages/admin/user/signup.astro",{"propagation":"none","containsHead":true}],["/home/Prisca/coding/online-booking/src/pages/booking/[...search].astro",{"propagation":"none","containsHead":true}],["/home/Prisca/coding/online-booking/src/pages/booking/seat/[...busId].astro",{"propagation":"none","containsHead":true}],["/home/Prisca/coding/online-booking/src/pages/completion.astro",{"propagation":"none","containsHead":true}],["/home/Prisca/coding/online-booking/src/pages/cooperatives/[...name].astro",{"propagation":"none","containsHead":true}],["/home/Prisca/coding/online-booking/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/Prisca/coding/online-booking/src/pages/payment.astro",{"propagation":"none","containsHead":true}],["/home/Prisca/coding/online-booking/src/pages/policy.astro",{"propagation":"none","containsHead":true}],["/home/Prisca/coding/online-booking/src/pages/admin/buses/[...id].astro",{"propagation":"none","containsHead":true}],["/home/Prisca/coding/online-booking/src/pages/admin/buses/index.astro",{"propagation":"none","containsHead":true}],["/home/Prisca/coding/online-booking/src/pages/admin/create.astro",{"propagation":"none","containsHead":true}],["/home/Prisca/coding/online-booking/src/pages/admin/drivers.astro",{"propagation":"none","containsHead":true}],["/home/Prisca/coding/online-booking/src/pages/admin/index.astro",{"propagation":"none","containsHead":true}],["/home/Prisca/coding/online-booking/src/pages/admin/settings.astro",{"propagation":"none","containsHead":true}],["/home/Prisca/coding/online-booking/src/pages/signoutConfirm.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","/src/pages/success/[...email].astro":"chunks/pages/__-dtCdAY0.mjs","/src/pages/cooperatives/[...name].astro":"chunks/pages/__DEUDBuE5.mjs","/src/pages/completion.astro":"chunks/pages/completion_BUxgIVwu.mjs","/src/pages/api/create-payment-intent.ts":"chunks/pages/create-payment-intent_CLpRuBWT.mjs","/src/pages/admin/dashboard.astro":"chunks/pages/dashboard_DdUh2OTT.mjs","/src/pages/api/deleteBus.ts":"chunks/pages/deleteBus_ZcS4E116.mjs","/src/pages/admin/drivers.astro":"chunks/pages/drivers_Bia-gi8B.mjs","/src/pages/api/user/ex.ts":"chunks/pages/ex_l0sNRNKZ.mjs","/src/pages/admin/user/password/forgot.astro":"chunks/pages/forgot_iA8w8oL3.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_B3ah-nRb.mjs","/src/pages/payment.astro":"chunks/pages/payment_BbCLVS8i.mjs","/src/pages/policy.astro":"chunks/pages/policy_Clv4n7lh.mjs","/src/pages/api/user/reset-password.ts":"chunks/pages/reset-password_Dj1wMBZe.mjs","/src/pages/admin/user/password/reset.astro":"chunks/pages/reset_UIODOltr.mjs","/src/pages/api/resetTrip.ts":"chunks/pages/resetTrip_DyJeXe8U.mjs","/src/pages/api/search.ts":"chunks/pages/search_CE-hoFa9.mjs","/src/pages/admin/settings.astro":"chunks/pages/settings_DVbP5kgl.mjs","/src/pages/admin/user/signin.astro":"chunks/pages/signin_BKCUsmkG.mjs","/src/pages/api/user/signin.ts":"chunks/pages/signin_IM0gW6ah.mjs","/src/pages/api/user/signout.ts":"chunks/pages/signout_CcCuMQUc.mjs","/src/pages/signoutConfirm.astro":"chunks/pages/signoutConfirm_maRRW2F7.mjs","/src/pages/admin/user/signup.astro":"chunks/pages/signup_BceI-hHx.mjs","/src/pages/api/unpickSeat.ts":"chunks/pages/unpickSeat_CSXkebKI.mjs","/src/pages/api/user/update.ts":"chunks/pages/update_IEuCfc9F.mjs","/src/pages/api/updateBus.ts":"chunks/pages/updateBus_CTAktmOz.mjs","/src/pages/api/updateDriver.ts":"chunks/pages/updateDriver_CHTP51KC.mjs","\u0000@astrojs-manifest":"manifest_BX9JtlIt.mjs","/home/Prisca/coding/online-booking/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_ACuT26l8.mjs","\u0000@astro-page:src/pages/admin/buses/index@_@astro":"chunks/index_nNgYshxE.mjs","\u0000@astro-page:src/pages/admin/buses/[...id]@_@astro":"chunks/_.._B4CAAQQv.mjs","\u0000@astro-page:src/pages/admin/create@_@astro":"chunks/create_D3_oO6Xt.mjs","\u0000@astro-page:src/pages/admin/dashboard@_@astro":"chunks/dashboard_BuhtL5tc.mjs","\u0000@astro-page:src/pages/admin/drivers@_@astro":"chunks/drivers_nzPj48P1.mjs","\u0000@astro-page:src/pages/admin/settings@_@astro":"chunks/settings_DHmzHMwl.mjs","\u0000@astro-page:src/pages/admin/user/password/forgot@_@astro":"chunks/forgot_DBO7ZBiM.mjs","\u0000@astro-page:src/pages/admin/user/password/reset@_@astro":"chunks/reset_BUIvG3zz.mjs","\u0000@astro-page:src/pages/admin/user/signin@_@astro":"chunks/signin_vTKNpLqK.mjs","\u0000@astro-page:src/pages/admin/user/signup@_@astro":"chunks/signup_B6ThXSUT.mjs","\u0000@astro-page:src/pages/admin/index@_@astro":"chunks/index_5QZQJzEJ.mjs","\u0000@astro-page:src/pages/api/bookSeat@_@ts":"chunks/bookSeat_BGwa8tUt.mjs","\u0000@astro-page:src/pages/api/create-payment-intent@_@ts":"chunks/create-payment-intent_D9OMdQvx.mjs","\u0000@astro-page:src/pages/api/createBus@_@ts":"chunks/createBus_BlqptnWc.mjs","\u0000@astro-page:src/pages/api/deleteBus@_@ts":"chunks/deleteBus_D56q_rat.mjs","\u0000@astro-page:src/pages/api/monthly-payment@_@ts":"chunks/monthly-payment_DqqanYNM.mjs","\u0000@astro-page:src/pages/api/resetTrip@_@ts":"chunks/resetTrip_rQpY_Nxf.mjs","\u0000@astro-page:src/pages/api/search@_@ts":"chunks/search_Br6YTVMT.mjs","\u0000@astro-page:src/pages/api/unpickSeat@_@ts":"chunks/unpickSeat_DXhkGdhC.mjs","\u0000@astro-page:src/pages/api/updateBus@_@ts":"chunks/updateBus_DAefm4Sn.mjs","\u0000@astro-page:src/pages/api/updateDriver@_@ts":"chunks/updateDriver_Bapdui9k.mjs","\u0000@astro-page:src/pages/api/user/ex@_@ts":"chunks/ex_CO6nSwg-.mjs","\u0000@astro-page:src/pages/api/user/forgot-password@_@ts":"chunks/forgot-password_BXYMRO5K.mjs","\u0000@astro-page:src/pages/api/user/reset-password@_@ts":"chunks/reset-password_C5bIZoyl.mjs","\u0000@astro-page:src/pages/api/user/signin@_@ts":"chunks/signin_BfCEUOf4.mjs","\u0000@astro-page:src/pages/api/user/signout@_@ts":"chunks/signout_C7wuOCrv.mjs","\u0000@astro-page:src/pages/api/user/update@_@ts":"chunks/update_CmXDdp96.mjs","\u0000@astro-page:src/pages/api/index@_@ts":"chunks/index_CNRzAYCY.mjs","\u0000@astro-page:src/pages/booking/seat/[...busId]@_@astro":"chunks/_.._DxhN2ScN.mjs","\u0000@astro-page:src/pages/booking/[...search]@_@astro":"chunks/_.._CCY_Bkg0.mjs","\u0000@astro-page:src/pages/completion@_@astro":"chunks/completion_BXlySPxv.mjs","\u0000@astro-page:src/pages/cooperatives/[...name]@_@astro":"chunks/_.._g3SsQYai.mjs","\u0000@astro-page:src/pages/payment@_@astro":"chunks/payment_5Xhs9TE-.mjs","\u0000@astro-page:src/pages/policy@_@astro":"chunks/policy_B5opHa34.mjs","\u0000@astro-page:src/pages/signoutConfirm@_@astro":"chunks/signoutConfirm_zdByIdxx.mjs","\u0000@astro-page:src/pages/success/[...email]@_@astro":"chunks/_.._BGlFpVOH.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_oxY4OS3N.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Sh3tBjVt.js","/home/Prisca/coding/online-booking/src/components/AdminSideBar":"_astro/AdminSideBar.2PRstlxo.js","/astro/hoisted.js?q=1":"_astro/hoisted.Dp2vkFke.js","/home/Prisca/coding/online-booking/src/components/Faqs":"_astro/Faqs.DpWK_Ko_.js","/home/Prisca/coding/online-booking/src/components/AdminBusDetails":"_astro/AdminBusDetails.BPgqbkPT.js","/home/Prisca/coding/online-booking/src/components/AdminForm":"_astro/AdminForm.B9M7-1yz.js","/home/Prisca/coding/online-booking/src/components/Checkout":"_astro/Checkout.B0NSZYYp.js","/home/Prisca/coding/online-booking/src/components/BookedSeat":"_astro/BookedSeat.D46uvFYB.js","/home/Prisca/coding/online-booking/src/components/DriversList":"_astro/DriversList.DtqY5bA9.js","/home/Prisca/coding/online-booking/src/components/SignupForm":"_astro/SignupForm.BDcRprC1.js","/home/Prisca/coding/online-booking/src/components/DashboardComponent":"_astro/DashboardComponent.C8HeNAp-.js","/home/Prisca/coding/online-booking/src/components/SearchForm.tsx":"_astro/SearchForm.C33uWnU9.js","@astrojs/react/client.js":"_astro/client.DRtVOg_I.js","/home/Prisca/coding/online-booking/src/components/SearchForm":"_astro/SearchForm.By4sEeea.js","/home/Prisca/coding/online-booking/src/components/BusesList":"_astro/BusesList.CwTlA2Hd.js","/home/Prisca/coding/online-booking/src/components/BookingBus":"_astro/BookingBus.C-JibsWx.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/roboto-cyrillic-ext-400-normal.DORK9bGA.woff2","/_astro/roboto-cyrillic-400-normal.DVDTZtmW.woff2","/_astro/roboto-greek-400-normal.BRWHCUYo.woff2","/_astro/roboto-vietnamese-400-normal.kCRe3VZk.woff2","/_astro/roboto-latin-ext-400-normal.4bLplyDh.woff2","/_astro/roboto-latin-400-normal.mTIRXP6Y.woff2","/_astro/roboto-cyrillic-400-normal.DCQqOlfN.woff","/_astro/roboto-cyrillic-ext-400-normal.-KougVX-.woff","/_astro/roboto-greek-400-normal.BnGNaKeW.woff","/_astro/roboto-vietnamese-400-normal.BkEBOAV9.woff","/_astro/roboto-latin-ext-400-normal.ABAIaefi.woff","/_astro/roboto-latin-400-normal.BU1SoK4h.woff","/_astro/logo.PlVdirGL.svg","/_astro/bus.zoRD9lKj.mp4","/_astro/_id_.BnJAlrXm.css","/_astro/_id_.CMrlTJwl.css","/_astro/AdminBusDetails.BPgqbkPT.js","/_astro/AdminForm.B9M7-1yz.js","/_astro/AdminSideBar.2PRstlxo.js","/_astro/BookedSeat.D46uvFYB.js","/_astro/BookingBus.C-JibsWx.js","/_astro/BusConfirmationModal.DRSHiHx9.js","/_astro/BusesList.CwTlA2Hd.js","/_astro/Checkout.B0NSZYYp.js","/_astro/DashboardComponent.C8HeNAp-.js","/_astro/DriversList.DtqY5bA9.js","/_astro/Faqs.DpWK_Ko_.js","/_astro/NoResultsFound.C2cXKc01.js","/_astro/SearchForm.By4sEeea.js","/_astro/SearchForm.C33uWnU9.js","/_astro/SignupForm.BDcRprC1.js","/_astro/ToggleSwitch.Dqk84GcV.js","/_astro/axios.Cm0UX6qg.js","/_astro/bus.B9PpKywP.js","/_astro/client.DRtVOg_I.js","/_astro/constants.Cgdrv_0e.js","/_astro/helpers.BDgiuomC.js","/_astro/index.BEJjD82H.js","/_astro/index.CfyKTq7u.js","/_astro/index.CgP7__lt.js","/_astro/index.Crz5h5pu.js","/_astro/index.D3g0PtM7.js","/_astro/index.Dl_w_I9S.js","/_astro/jsx-runtime.brf_q0lO.js","/_astro/theme.BXKTqvMc.js","/icons/bus.svg","/icons/close.svg","/icons/favicon.svg","/icons/not-found.svg","/icons/seat.svg"],"buildFormat":"directory","checkOrigin":false});

export { manifest };
