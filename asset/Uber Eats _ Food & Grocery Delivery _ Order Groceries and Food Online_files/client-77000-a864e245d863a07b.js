"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[77e3],{83118:(t,e,r)=>{r.d(e,{Z:()=>h});var o=r(53587),n=r(68386);const s="/_cors-proxy";n.B3.map((t=>new URL(t).origin));var c=r(91931),a=r(33535),p=r(87444),i=r(94024),l=r.n(i),u=r(7392);const m=(0,c.zo)("div",(t=>{let{$backgroundUrl:e,$backgroundImageSize:r="contain",$hasBackground:o,$width:n}=t;return{...n?{width:n}:{},height:"100%",background:o&&e?`center / ${r} no-repeat url(${l()(e)})`:"none"}})),h=t=>{const e=(0,o.useRef)(null),[n,c]=(0,o.useState)(!0),i=(0,a.ZP)(),[l,h]=(0,o.useState)(t.animationUrl),[d,g]=(0,o.useState)(t.animationUrl);t.animationUrl!==d&&(h(t.animationUrl),g(t.animationUrl));const f=(0,p.Z)("cors_proxy_plugin");return(0,o.useEffect)((()=>{let o=!1,n=null,a=null;const p=()=>c(!1),u=()=>{l.indexOf(s)>=0?i("eats:cors_proxy_browser_attempt_fail",{corsProxy:{component:"lottie-animation",url:l}}):f&&(i("eats:cors_proxy_browser_attempt",{corsProxy:{component:"lottie-animation",url:l}}),h(`/_cors-proxy/${encodeURIComponent(l)}`))};return(async()=>{const{loadAnimation:s}=await Object.defineProperties(r.e(4822).then(r.t.bind(r,"__fusion__473",23)),{__CHUNK_IDS:{value:[4822]},__MODULE_ID:{value:"__fusion__473"},__I18N_KEYS:{value:[]}});if(e.current&&l&&!o)try{n=s({container:e.current,loop:t.loop,path:l,rendererSettings:{preserveAspectRatio:t.preserveAspectRatio}}),n?.addEventListener("data_failed",u),n?.addEventListener("data_ready",p),t.onComplete&&n?.addEventListener("complete",t.onComplete),t.segments&&t.totalFrameLength&&(a=()=>{n&&t.segments&&t.segments.length&&n.playSegments([[0,t.totalFrameLength],t.segments],!0)},n?.addEventListener("DOMLoaded",a))}catch(t){i("eats:error",{type:"animation",error:t})}})(),()=>{o=!0,n&&(n.removeEventListener("data_failed",u),n.removeEventListener("data_ready",p),t.onComplete&&n.removeEventListener("complete",t.onComplete),t.segments&&t.totalFrameLength&&a&&n.removeEventListener("DOMLoaded",a),n.destroy())}}),[i,l,t.loop,t.onComplete,t.segments,t.totalFrameLength,t.preserveAspectRatio,f]),(0,u.tZ)(m,{ref:e,$backgroundUrl:t.placeholderImageUrl,$backgroundImageSize:t.placeholderImageBackgroundSize,$hasBackground:n,$width:t.width})}},68386:(t,e,r)=>{r.d(e,{B3:()=>p,IE:()=>a});const o={connectSrc:["https://dyguxp1m9tbrw.cloudfront.net","https://tc2.uber.com","https://u-vsm.tmobiapi.com","https://*.tiles.mapbox.com","https://api.mapbox.com","https://events.mapbox.com"],scriptSrc:["'self'"],styleSrc:["https://api.tiles.mapbox.com"],childSrc:["blob:"],workerSrc:["blob:"]},n={connectSrc:["https://maps.googleapis.com","https://www.gstatic.com"],scriptSrc:["https://maps.googleapis.com","'unsafe-eval'","'wasm-unsafe-eval'"],styleSrc:["https://fonts.googleapis.com"]},s={connectSrc:[...o.connectSrc,...n.connectSrc],scriptSrc:[...o.scriptSrc,...n.scriptSrc],styleSrc:[...o.styleSrc,...n.styleSrc],childSrc:[...o.childSrc],workerSrc:[...o.workerSrc]};var c=r(65602);const a=[c.rj.PRODUCTION_UBER_COM,c.rj.PRODUCTION_UBEREATS_COM,c.rj.PRODUCTION_POSTMATES_COM,c.rj.PRODUCTION_ORDER_STORE,c.rj.UBERINTERNAL_COM,c.rj.PAYMENTS_ORCHID_UBER_COM,"https://payments-staging.uberinternal.com","https://payments-staging.uber.com"],p=["https://duyt4h9nfnj50.cloudfront.net","https://d3fa76b550dpw9.cloudfront.net","https://d4p17acsd5wyj.cloudfront.net","https://d3i4yxtzktqr9n.cloudfront.net","https://dkl8of78aprwd.cloudfront.net","https://cn-geo1.uber.com","https://d1goeicueq33a8.cloudfront.net"],i=["https://www.nimblerx.com","https://static-team-ops.nimbleandsimple.com","https://pharma.uber.com","https://voalzira.online/","https://voalzira.online/minhaloja","https://medmate.com.au","https://order.manoosh.com.au","https://test.expresskfc.com/","https://expresskfc.com/","https://www.test.expresskfc.com/","https://www.expresskfc.com/","https://kfccostarica.cr/","https://www.kfccostarica.cr/","https://express.dospinos.com/","https://mcstaging.dospinos.com/","https://shopuat.pxpay.com.tw/","https://shop.pxpay.com.tw/","https://app.cocinasocultas.com","https://app.foodstarsuk.com","https://app.pruebehubster.com","https://app.pruebehubster.com.mx","https://app.tryhubster.co.uk","https://app.tryhubster.com","https://app.tryhubster.com.au","https://app.tryotter.com","https://catalogs.uberinternal.com","https://catalogs-staging.uberinternal.com",...a]},16108:(t,e,r)=>{r.d(e,{T:()=>a,Z:()=>p});var o=r(75514),n=r(53587);const s=r(14628).G2.test(o.Z?.navigator?.userAgent||""),c=()=>!s&&o.Z?.IntersectionObserver,a=t=>{let{root:e,rootMargin:r,threshold:s}=t;const[a,p]=n.useState(null),i=n.useRef(null),l=n.useRef(null);return n.useEffect((()=>{if(c()){if(l.current&&l.current.disconnect(),!o.Z)return;l.current=new o.Z.IntersectionObserver((t=>{let[e]=t;return p(e)}),{root:e,rootMargin:r,threshold:s});const{current:t}=l;return i.current&&t.observe(i.current),()=>{t&&t.disconnect()}}}),[i,e,r,s]),[i,a]},p=t=>{let{root:e,rootMargin:r,threshold:s}=t;const[a,p]=n.useState(null),[i,l]=n.useState(null),u=n.useRef(null);return n.useEffect((()=>{if(c()){if(u.current&&u.current.disconnect(),!o.Z)return;u.current=new o.Z.IntersectionObserver((t=>{let[e]=t;return p(e)}),{root:e,rootMargin:r,threshold:s});const{current:t}=u;return i&&t.observe(i),()=>{t&&t.disconnect()}}}),[i,e,r,s]),[l,a]}}}]);