"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[3601],{72668:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(53587),r=n(68739),o=n(98074),i=n(83059),l=n(79068),s=n(51609);var c=n(61481),d=n(20196),p=n(7392);const u=e=>{let{title:t,enhanced:n=!0,duration:r=i.t.medium}=e;const{enqueue:o}=(0,d.Ds)();return(0,a.useEffect)((()=>{(0,s.jJ)().ack||((0,s.P0)(),o&&o({message:t,startEnhancer:e=>{let{size:t}=e;return n?(0,p.tZ)(c.Z,{size:t}):null}},r))}),[t]),null};function g(e){return(0,p.tZ)(d.ZP,{placement:i.r.bottomRight,children:(0,p.tZ)(u,{...e})})}var m=n(28806);const f=e=>{let{title:t,errorTitle:n,onEnable:c,BannerComponent:d}=e;const u=(0,r.G2)(o.$8),f=(0,s.jJ)(),[y,h]=(0,a.useState)(!1),[b,k]=(0,a.useState)(!0),[C,Z]=(0,a.useState)(!1),L=f.error||C,S=async()=>{let e;try{const t=await u(m.Z$),n=await t.json();if(!t.ok||n.error)throw new Error("Could not update user");e=n}catch(t){e={error:`${t}`}}return e},w=function(e){const{gpcLoading:t,gpcEnabled:n}=(0,l.w)(),[r,o]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{t||null===n||((0,s.jJ)().enabled!==n?(n&&e&&e(),(0,s.Rj)(n),o(n)):o(!1))}),[t,n]),r}((()=>{c&&c(),(async()=>{const{error:e}=await S();e&&Z(!0),k(!1)})()}));return(0,a.useEffect)((()=>{const e=(0,s.jJ)();!e.enabled||!e.error&&e.updatedUuid||(async()=>{(0,s.Rj)(!0);const{error:e,updatedUuid:t}=await S();!e&&t&&h(!0),k(!1)})()}),[]),b||!L||y?b||!w&&!y?null:d?(0,p.tZ)(d,{}):(0,p.tZ)(g,{title:t}):(0,p.tZ)(g,{title:n,enhanced:!1,duration:i.t.infinite})}},28806:(e,t,n)=>{n.d(t,{DM:()=>a,Z$:()=>r,lK:()=>o});const a="gpc",r="/gpc-update",o={GET_ERROR:"Could not get user",UPDATE_ERROR:"Could not update user",FATAL_ERROR:"Uncaught error",PARSE_ERROR:"Could not parse the cookie",UPDATE_SUCCESS:"Updated user marketing pref",NO_ACTION:"User is already opted out"}},51609:(e,t,n)=>{n.d(t,{P0:()=>i,Rj:()=>o,jJ:()=>l,vW:()=>r});var a=n(28806);function r(){return!(!("globalPrivacyControl"in navigator)||!navigator.globalPrivacyControl)}function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n={enabled:e,updatedUuid:t};document.cookie=`${a.DM}=${JSON.stringify(n)}; path=/`}function i(){const e=l();e.ack=!0,document.cookie=`${a.DM}=${JSON.stringify(e)}; path=/`}function l(e){e||(e=document.cookie);let t=null;try{const n=e&&e.match(new RegExp(`(^|;\\s*)${a.DM}=(.*?)(;|$)`));t=n?JSON.parse(n[2]):null}catch(e){console.error(a.lK.PARSE_ERROR,e)}return{enabled:!!t&&t.enabled,error:!!t&&t.error,result:t?t.result:"",updatedUuid:t?t.updatedUuid:"",ack:!!t&&t.ack}}},79068:(e,t,n)=>{n.d(t,{w:()=>o});var a=n(53587),r=n(51609);function o(){const[e,t]=(0,a.useState)(!0),[n,o]=(0,a.useState)(null);return(0,a.useEffect)((()=>{const e=(0,r.jJ)(),n=(0,r.vW)();n||e.enabled===n||(0,r.Rj)(!1),o(n),t(!1)}),[]),{gpcLoading:e,gpcEnabled:n}}},64635:(e,t,n)=>{n.d(t,{ZP:()=>i,jC:()=>o});var a=n(53587),r=n(7392);const o=a.createContext(0),i=e=>{let{children:t}=e;return(0,r.tZ)(o.Consumer,{children:e=>(0,r.tZ)(o.Provider,{value:e+1,children:t})})}},84173:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(85341),r=n(64635),o=n(7392);const i=["","font1050","font950","font850","font750","font650","font550"],l=e=>{let{styleLevel:t,...n}=e;return(0,o.tZ)(r.jC.Consumer,{children:e=>{if(0===e)throw new Error("Heading component must be a descendant of HeadingLevel component.");if(e>6)throw new Error(`HeadingLevel cannot be nested ${e} times. The maximum is 6 levels.`);if("undefined"!=typeof t&&(t<1||t>6))throw new Error(`styleLevel = ${t} is out of 1-6 range.`);return(0,o.tZ)(a.Z,{"data-baseweb":"heading",as:`h${e}`,font:t?i[t]:i[e],color:"contentPrimary",...n})}})}},61481:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(53587),r=n(79810),o=n(92300),i=n(8905),l=n(7392);function s(e,t){const[,n]=(0,r.hQ)(),{title:a="Check",size:s,color:c,overrides:d={},...p}=e,u=(0,o.vt)({component:n.icons&&n.icons.Check?n.icons.Check:null},d&&d.Svg?(0,o.hq)(d.Svg):{});return(0,l.tZ)(i.Z,{viewBox:"0 0 24 24",ref:t,title:a,size:s,color:c,overrides:{Svg:u},...p,children:(0,l.tZ)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.6 7.20006C18.0418 7.53143 18.1314 8.15823 17.8 8.60006L11.8 16.6001C11.6261 16.832 11.3601 16.977 11.0709 16.9975C10.7817 17.0181 10.4979 16.9122 10.2929 16.7072L7.29289 13.7072C6.90237 13.3166 6.90237 12.6835 7.29289 12.293C7.68342 11.9024 8.31658 11.9024 8.70711 12.293L10.8918 14.4777L16.2 7.40006C16.5314 6.95823 17.1582 6.86869 17.6 7.20006Z"})})}const c=a.forwardRef(s)},89166:(e,t,n)=>{n.d(t,{F:()=>c});var a=n(53587),r=n(79810);const o=(0,r.zo)("a",(e=>{let{$theme:t,$isAnimateUnderline:n,$isFocusVisible:a}=e;const{colors:r,typography:o,animation:i,direction:l}=t,s=`linear-gradient(transparent calc(100% - 1px), ${r.linkHover} 1px), linear-gradient(transparent calc(100% - 1px), ${r.linkText} 1px)`,c=`linear-gradient(transparent calc(100% - 1px), ${r.linkText} 1px), linear-gradient(transparent calc(100% - 1px), ${r.linkHover} 1px)`;return{color:r.linkText,...o.font350,fontSize:"inherit",lineHeight:"inherit",transitionProperty:n?"":"backgroundSize",transitionDuration:i.timing500,transitionTimingFunction:i.easeOutQuinticCurve,position:n?"relative":null,textDecoration:n?"none":"underline",textUnderlinePosition:"under",willChange:"background-size",backgroundSize:"rtl"===l?"100% 100%, 100% 100%":"0% 100%, 100% 100%",backgroundRepeat:"no-repeat",backgroundImage:n?"rtl"===l?c:s:"none",":hover":{color:r.linkHover,backgroundSize:"rtl"===l?"0% 100%, 100% 100%":"100% 100%, 100% 100%"},":focus":{outline:a?`3px solid ${r.borderAccent}`:"none",outlineOffset:"1px",textDecoration:"none"},":visited":{color:r.linkVisited},":active":{color:r.linkActive}}}));o.displayName="Link";var i=n(75267),l=n(7392);function s(e){const[t,n]=a.useState(!1);return e.children({focusVisible:t,handleFocus:e=>{(0,i.E)(e)&&n(!0)},handleBlur:e=>{!1!==t&&n(!1)}})}const c=(0,r.Le)(o,(e=>function(t){let{animateUnderline:n,...a}=t;return(0,l.tZ)(s,{children:t=>(0,l.tZ)(e,{"data-baseweb":"link",$isAnimateUnderline:n,$isFocusVisible:t.focusVisible,onFocus:(0,i.Ah)(a,t.handleFocus),onBlur:(0,i.Z5)(a,t.handleBlur),...a})})}))},59210:(e,t,n)=>{n.d(t,{D9:()=>m,Ih:()=>d,Jf:()=>u,S$:()=>y,TE:()=>p,UU:()=>h,Uc:()=>f,Y9:()=>s,Yl:()=>k,aM:()=>C,fH:()=>g,iY:()=>l,kd:()=>b,lU:()=>Z,lp:()=>c,oW:()=>i});var a=n(53587),r=n(85341),o=n(7392);a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-displaylarge",...e,font:e.font||"DisplayLarge",color:e.color||"contentPrimary",ref:t}))).displayName="DisplayLarge";a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-displaymedium",...e,font:e.font||"DisplayMedium",color:e.color||"contentPrimary",ref:t}))).displayName="DisplayMedium";const i=a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-displaysmall",...e,font:e.font||"DisplaySmall",color:e.color||"contentPrimary",ref:t})));i.displayName="DisplaySmall";const l=a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-displayxsmall",...e,font:e.font||"DisplayXSmall",color:e.color||"contentPrimary",ref:t})));l.displayName="DisplayXSmall";const s=a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-headingxxlarge",as:e.as||"h1",...e,font:e.font||"HeadingXXLarge",color:e.color||"contentPrimary",ref:t})));s.displayName="HeadingXXLarge";const c=a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-headingxlarge",as:e.as||"h2",...e,font:e.font||"HeadingXLarge",color:e.color||"contentPrimary",ref:t})));c.displayName="HeadingXLarge";const d=a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-headinglarge",as:e.as||"h3",...e,font:e.font||"HeadingLarge",color:e.color||"contentPrimary",ref:t})));d.displayName="HeadingLarge";const p=a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-headingmedium",as:e.as||"h4",...e,font:e.font||"HeadingMedium",color:e.color||"contentPrimary",ref:t})));p.displayName="HeadingMedium";const u=a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-headingsmall",as:e.as||"h5",...e,font:e.font||"HeadingSmall",color:e.color||"contentPrimary",ref:t})));u.displayName="HeadingSmall";const g=a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-headingxsmall",as:e.as||"h6",...e,font:e.font||"HeadingXSmall",color:e.color||"contentPrimary",ref:t})));g.displayName="HeadingXSmall";const m=a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-labellarge",...e,font:e.font||"LabelLarge",color:e.color||"contentPrimary",ref:t})));m.displayName="LabelLarge";const f=a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-labelmedium",...e,font:e.font||"LabelMedium",color:e.color||"contentPrimary",ref:t})));f.displayName="LabelMedium";const y=a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-labelsmall",...e,font:e.font||"LabelSmall",color:e.color||"contentPrimary",ref:t})));y.displayName="LabelSmall";const h=a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-labelxsmall",...e,font:e.font||"LabelXSmall",color:e.color||"contentPrimary",ref:t})));h.displayName="LabelXSmall";const b=a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-paragraphlarge",as:e.as||"p",...e,font:e.font||"ParagraphLarge",color:e.color||"contentPrimary",ref:t})));b.displayName="ParagraphLarge";const k=a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-paragraphmedium",as:e.as||"p",...e,font:e.font||"ParagraphMedium",color:e.color||"contentPrimary",ref:t})));k.displayName="ParagraphMedium";const C=a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-paragraphsmall",as:e.as||"p",...e,font:e.font||"ParagraphSmall",color:e.color||"contentPrimary",ref:t})));C.displayName="ParagraphSmall";const Z=a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-paragraphxsmall",as:e.as||"p",...e,font:e.font||"ParagraphXSmall",color:e.color||"contentPrimary",ref:t})));Z.displayName="ParagraphXSmall";a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-monodisplaylarge",...e,font:e.font||"MonoDisplayLarge",color:e.color||"contentPrimary",ref:t}))).displayName="MonoDisplayLarge";a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-monodisplaymedium",...e,font:e.font||"MonoDisplayMedium",color:e.color||"contentPrimary",ref:t}))).displayName="MonoDisplayMedium";a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-monodisplaysmall",...e,font:e.font||"MonoDisplaySmall",color:e.color||"contentPrimary",ref:t}))).displayName="MonoDisplaySmall";a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-monodisplayxsmall",...e,font:e.font||"MonoDisplayXSmall",color:e.color||"contentPrimary",ref:t}))).displayName="MonoDisplayXSmall";a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-monoheadingxxlarge",as:e.as||"h1",...e,font:e.font||"MonoHeadingXXLarge",color:e.color||"contentPrimary",ref:t}))).displayName="MonoHeadingXXLarge";a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-monoheadingxlarge",as:e.as||"h2",...e,font:e.font||"MonoHeadingXLarge",color:e.color||"contentPrimary",ref:t}))).displayName="MonoHeadingXLarge";a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-monoheadinglarge",as:e.as||"h3",...e,font:e.font||"MonoHeadingLarge",color:e.color||"contentPrimary",ref:t}))).displayName="MonoHeadingLarge";a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-monoheadingmedium",as:e.as||"h4",...e,font:e.font||"MonoHeadingMedium",color:e.color||"contentPrimary",ref:t}))).displayName="MonoHeadingMedium";a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-monoheadingsmall",as:e.as||"h5",...e,font:e.font||"MonoHeadingSmall",color:e.color||"contentPrimary",ref:t}))).displayName="MonoHeadingSmall";a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-monoheadingxsmall",as:e.as||"h6",...e,font:e.font||"MonoHeadingXSmall",color:e.color||"contentPrimary",ref:t}))).displayName="MonoHeadingXSmall";a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-monolabellarge",...e,font:e.font||"MonoLabelLarge",color:e.color||"contentPrimary",ref:t}))).displayName="MonoLabelLarge";a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-monolabelmedium",...e,font:e.font||"MonoLabelMedium",color:e.color||"contentPrimary",ref:t}))).displayName="MonoLabelMedium";a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-monolabelsmall",...e,font:e.font||"MonoLabelSmall",color:e.color||"contentPrimary",ref:t}))).displayName="MonoLabelSmall";a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-monolabelxsmall",...e,font:e.font||"MonoLabelXSmall",color:e.color||"contentPrimary",ref:t}))).displayName="MonoLabelXSmall";a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-monoparagraphlarge",as:e.as||"p",...e,font:e.font||"MonoParagraphLarge",color:e.color||"contentPrimary",ref:t}))).displayName="MonoParagraphLarge";a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-monoparagraphmedium",as:e.as||"p",...e,font:e.font||"MonoParagraphMedium",color:e.color||"contentPrimary",ref:t}))).displayName="MonoParagraphMedium";a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-monoparagraphsmall",as:e.as||"p",...e,font:e.font||"MonoParagraphSmall",color:e.color||"contentPrimary",ref:t}))).displayName="MonoParagraphSmall";a.forwardRef(((e,t)=>(0,o.tZ)(r.Z,{"data-baseweb":"typo-monoparagraphxsmall",as:e.as||"p",...e,font:e.font||"MonoParagraphXSmall",color:e.color||"contentPrimary",ref:t}))).displayName="MonoParagraphXSmall"},28463:(e,t,n)=>{n.d(t,{h:()=>s});var a=n(94813),r=n(55758),o=n(68739),i=n(53587),l=n(61514);function s(){const e=(0,i.useContext)(o.GM),t=(0,o.G2)(l.rQ).from(e),n=t.getState().isEatsWebviewFeedEnabled,s=(0,r.d)(),c=(0,a.TH)(),d=t.isInWebviewScreen({pathname:c.pathname,diningMode:s});return n&&d}},9022:(e,t,n)=>{n.d(t,{R:()=>d,h:()=>c});var a=n(14016),r=n(91931),o=n(31171),i=n(14966),l=n(94579),s=n(7392);function c(){const[e,t]=(0,r.hQ)(),n=e({...(0,i.lE)({$theme:t}),color:t.colors.contentInversePrimary}),l=(0,a.T)(),{hasLoaded:c,data:d}=(0,o.Z)(),p=d?.geoIpCountryCode||"US",u=function(e){let{countryCode:t}=e;return"https://privacy.uber.com/us"}({countryCode:p}),g=`<a href="${u}" target="_blank" class="${n}">${l("gpc.banner.title.link.text")}</a>`,m=l("gpc.banner.title",{constructedGPCTitleLink:g}),f=(0,s.tZ)("span",{dangerouslySetInnerHTML:{__html:m}}),y=`<a href="${u}" target="_blank" class="${n}">${l("gpc.banner.error.link.text")}</a>`,h=l("gpc.banner.error",{constructedGPCErrorLink:y});return{isGPCCountry:c&&"US"===p,gpcPrivacyLink:u,gpcBannerTitle:f,gpcBannerErrorTitle:(0,s.tZ)("span",{dangerouslySetInnerHTML:{__html:h}})}}const d=(0,r.zo)("div",{position:"relative",zIndex:l.I_.toast})},35144:(e,t,n)=>{n.d(t,{Z:()=>de});var a=n(87444),r=n(53587),o=n(14016),i=n(57457),l=n(68313);var s=n(28992),c=n(79068),d=n(96853),p=n(96741),u=n(79810);const g="privacy-cookie-banners-root";var m=n(7392);const f=e=>{let{children:t,element:n=globalThis.document.body}=e;const[a,r]=(0,u.hQ)(),o=a({position:"fixed",bottom:0,right:0,zIndex:1e4,marginTop:r.sizing.scale600,marginBottom:r.sizing.scale600,marginLeft:r.sizing.scale600,marginRight:r.sizing.scale600}),i=a({width:"auto",padding:r.sizing.scale600,boxShadow:r.lighting.shadow600,borderRadius:r.borders.radius400,backgroundColor:r.colors.primaryB,color:r.colors.primaryA});return p.createPortal((0,m.tZ)("div",{role:"dialog",className:o,id:g,children:(0,m.tZ)("div",{className:i,children:t})}),n)};var y=n(68065),h=n(64635),b=n(84173),k=n(89166),C=n(59210),Z=n(32857);const L=e=>{let{children:t}=e;const[n,a]=(0,u.hQ)(),r=n({display:"flex",justifyContent:"flex-end",gap:a.sizing.scale500});return(0,m.tZ)("div",{className:r,children:t})},S=e=>(0,m.tZ)(Z.Z,{size:y.NO.compact,...e}),w=e=>{let{strings:t,onOptOut:n,onOptIn:a,onSettingsClick:r}=e;return(0,m.BX)(h.ZP,{children:[(0,m.tZ)(b.Z,{styleLevel:4,marginTop:0,marginBottom:0,children:t.title}),(0,m.tZ)(v,{summary:t.summary,cookieStatementUrl:t.cookieStatementUrl}),(0,m.BX)(L,{children:[(0,m.tZ)(S,{onClick:r,kind:y.TO.tertiary,"data-tracking-name":"cookie-preferences-mloi-initial-settings",children:t.cookieSettingsCTA}),(0,m.tZ)(S,{onClick:n,kind:y.TO.secondary,"data-tracking-name":"cookie-preferences-mloi-initial-opt-out",children:t.optOutCTA}),(0,m.tZ)(S,{onClick:a,"data-tracking-name":"cookie-preferences-mloi-initial-opt-in",children:t.optInCTA})]})]})},v=e=>{let{summary:t,cookieStatementUrl:n}=e;const a=t.split(/<cookieStatementLink>(.*?)<\/cookieStatementLink>/);return(0,m.BX)(C.aM,{marginTop:0,children:[a[0],(0,m.tZ)(k.F,{href:n,target:"_blank",rel:"noopener noreferrer",children:a[1]}),a[2]]})};var O=n(38488),P=n(4524);const E=e=>{let{strings:t,cookieCategories:n,onToggleCookieCategory:a}=e;const[r,o]=(0,u.hQ)(),[i,l]=s.useState(d.EL.Essential),c=r({display:"flex",gap:"20px"}),p=r({flexBasis:"40%",display:"flex",flexDirection:"column",gap:o.sizing.scale300}),g=r({flexBasis:"60%",margin:"0"});return(0,m.BX)("div",{className:c,children:[(0,m.BX)("div",{className:p,children:[(0,m.tZ)(O.Z,{checked:!0,labelPlacement:P.Oi.right,onChange:()=>{l(d.EL.Essential),a(d.EL.Essential)},children:i===d.EL.Essential?(0,m.tZ)(k.F,{children:t.essential}):t.essential}),(0,m.tZ)(O.Z,{checked:n.includes(d.EL.Targeted),onChange:()=>{l(d.EL.Targeted),a(d.EL.Targeted)},children:i===d.EL.Targeted?(0,m.tZ)(k.F,{children:t.targetedAdvertising}):t.targetedAdvertising}),(0,m.tZ)(O.Z,{checked:n.includes(d.EL.Analytics),onChange:()=>{l(d.EL.Analytics),a(d.EL.Analytics)},children:i===d.EL.Analytics?(0,m.tZ)(k.F,{children:t.analytics}):t.analytics})]}),(0,m.tZ)(C.aM,{className:g,children:t[T[i]]})]})},T={[d.EL.Essential]:"essentialSummary",[d.EL.Targeted]:"targetedAdvertisingSummary",[d.EL.Analytics]:"analyticsSummary"},M=e=>{let{strings:t,onChange:n,onCloseSettingsClick:a}=e;const r=(()=>{const[e,t]=s.useState([d.EL.Essential]);return{cookieCategories:e,toggleCookieCategory(e){e!==d.EL.Essential&&t((t=>t.includes(e)?t.filter((t=>t!==e)):[...t,e]))}}})();return(0,m.BX)(h.ZP,{children:[(0,m.tZ)(b.Z,{styleLevel:4,marginTop:"0",marginBottom:"0",children:t.title}),(0,m.tZ)(E,{strings:t,cookieCategories:r.cookieCategories,onToggleCookieCategory:r.toggleCookieCategory}),(0,m.BX)(L,{children:[(0,m.tZ)(S,{onClick:a,kind:y.TO.tertiary,"data-tracking-name":"cookie-preferences-mloi-settings-close",children:t.closeSettingsCTA}),(0,m.tZ)(S,{onClick:()=>{n([d.EL.Essential])},kind:y.TO.secondary,"data-tracking-name":"cookie-preferences-mloi-settings-opt-out",children:t.optOutCTA}),(0,m.tZ)(S,{onClick:()=>{n(r.cookieCategories)},"data-tracking-name":"cookie-preferences-mloi-settings-accept",children:t.acceptCTA})]})]})};var A=function(e){return e[e.Initial=0]="Initial",e[e.Settings=1]="Settings",e}(A||{});const R=e=>{let{strings:t,onChange:n}=e;const[a,r]=(0,u.hQ)(),[o,i]=s.useState(A.Initial),l=a({display:"flex",flexDirection:"column",gap:r.sizing.scale650,width:"auto",maxWidth:"520px"});return(0,m.tZ)("div",{className:l,children:o===A.Initial?(0,m.tZ)(w,{strings:t.initialLayer,onOptIn:()=>{n([d.EL.All])},onOptOut:()=>{n([d.EL.Essential])},onSettingsClick:()=>{i(A.Settings)}}):(0,m.tZ)(M,{strings:t.settingsLayer,onChange:e=>{n(e)},onCloseSettingsClick:()=>{i(A.Initial)}})})};var x=n(82428);const N=e=>{let{summaryString:t,sharingOptOutUrl:n,optInCTAString:a,optOutCTAString:o,onChange:i}=e;const[l,c]=(0,u.hQ)(),p=l({display:"flex",flexDirection:"column",gap:c.sizing.scale650,width:"288px"}),f=s.useCallback((e=>{let{implicit:t}=e;i([d.EL.All],t)}),[i]),h=s.useCallback((e=>{const t=e.target,n=globalThis.document.getElementById(g);n&&!n?.contains(t)&&f({implicit:!0})}),[f]),b=s.useCallback((()=>{globalThis.document.removeEventListener("click",h)}),[h]);return(0,r.useEffect)((()=>(globalThis.document.addEventListener("click",h),()=>{b()})),[h,b]),(0,m.BX)("div",{className:p,children:[(0,m.tZ)($,{summary:t,sharingOptOutUrl:n}),(0,m.BX)(L,{children:[(0,m.tZ)(S,{onClick:()=>{i([d.EL.Essential])},kind:y.TO.secondary,"data-tracking-name":"cookie-preferences-sloo-opt-out",children:o}),(0,m.tZ)(S,{onClick:()=>f({implicit:!1}),"data-tracking-name":"cookie-preferences-sloo-opt-in",children:a})]})]})},$=e=>{let{summary:t,sharingOptOutUrl:n}=e;const a=t.split(/<sharingOptOutLink>(.*?)<\/sharingOptOutLink>/);return(0,m.BX)(C.aM,{marginTop:"0",children:[a[0],(0,m.tZ)(k.F,{href:n,target:"_blank",rel:"noopener noreferrer",children:a[1]}),a[2]]})},_=["us"],B=["at","be","bg","hr","cy","cz","dk","ee","fi","fr","de","gr","hu","ie","it","lv","lt","lu","mt","nl","an","pl","pt","ro","sk","si","es","se","gb","is","li","no","ch","br","ar","bo","cl","co","cr","do","ec","sv","gt","hn","jm","mx","pa","py","pe","uy","tz","qa","ng"],H=["391","2299","2300","404","397","403","140","1473"],X={ca:["qc"]},I=(e,t)=>{const n=(0,r.useContext)(i.y),a=(e||n.geoLocation?.countryCode||l.mN.countryCode).toLowerCase();return n.enableGeoLocationLookup&&((e,t)=>!!e.find((e=>X[t]?.includes(e.toLowerCase()))))(n.geoLocation?.isoCodes||[],a)||H.includes(t||"")?d.$.MultiLayerOptIn:_.includes(a)?d.$.SingleLayerOptOut:B.includes(a)?d.$.MultiLayerOptIn:d.$.None};var U=n(29742),D=n(68739),z=n(49181);const q=e=>{switch(e){case d.qc.Closed:return"closed";case d.qc.MultiLayerOptInOpen:return"multi-layer-opt-in-open";case d.qc.SingleLayerOptOutOpen:return"single-layer-opt-out-open";default:return"unknown"}},F=e=>{switch(e){case d.$.None:return"none";case d.$.SingleLayerOptOut:return"single-layer-opt-out";case d.$.MultiLayerOptIn:return"multi-layer-opt-in";default:return"unknown"}},j=e=>{let{strings:t,userCountryCode:n,userTerritoryId:a="",onChange:o}=e;const l=s.useContext(i.y),[c,p]=s.useState(d.qc.Closed),[u,g]=s.useState(!1),y=I(n,a),h=(()=>{const e=(0,D.G2)(U.U),t=(0,D.G2)(z.EK);return{emitBannerStateChange:n=>{const a=F(n.bannerType),r=q(n.bannerState);e?.emit("privacy-banners:cookie:state-change",{type:a,state:r}),n.bannerState!==d.qc.Closed&&t?.increment("cookie-preferences-banner-open",{type:a})},emitCookiePreferencesChange:n=>{const a=F(n.bannerType),r=q(n.bannerState);e?.emit("privacy-banners:cookie:cookie-preferences-change",{type:a,state:r,cookieCategories:n.cookieCategories?.toString()}),1===n.cookieCategories.length&&n.cookieCategories[0]===d.EL.Essential?t?.increment("cookie_preferences_opt_out",{type:a}):t?.increment("cookie_preferences_opt_in",{type:a})}}})();s.useEffect((()=>{l.bannerState!==c&&(h.emitBannerStateChange({bannerType:y,bannerState:c}),l.setBannerState(c))}),[c,y,l,h]),(0,r.useEffect)((()=>{u||g(!0)}),[u]),s.useEffect((()=>{const e=l.readCookiePreferences();e?.implicit?u||y!==d.$.SingleLayerOptOut||p(d.qc.SingleLayerOptOutOpen):null===e||(0,x.Q6)(e.version)?y===d.$.SingleLayerOptOut?p(d.qc.SingleLayerOptOutOpen):y===d.$.MultiLayerOptIn?p(d.qc.MultiLayerOptInOpen):p(d.qc.Closed):p(d.qc.Closed)}),[c,l,y,u]);const b=s.useCallback(((e,t)=>{p(d.qc.Closed),l.persistCookiePreferences({cookieCategories:e,implicit:t||!1}),o(e),h.emitCookiePreferencesChange({bannerType:y,bannerState:c,cookieCategories:e})}),[o,l,y,h,c]);let k;switch(s.useEffect((()=>{const e=l.readCookiePreferences();if(y===d.$.None&&(!e||1!==e.cookieCategories.length||e.cookieCategories[0]!==d.EL.All)){l.bannerState!==d.qc.Closed&&l.setBannerState(d.qc.Closed);const e=[d.EL.All];l.persistCookiePreferences({cookieCategories:e,implicit:!0}),o(e)}}),[o,y,l]),c){case d.qc.SingleLayerOptOutOpen:k=(0,m.tZ)(N,{summaryString:t.singleLayerOptOut.summary,sharingOptOutUrl:t.singleLayerOptOut.sharingOptOutUrl,optInCTAString:t.singleLayerOptOut.optInCTA,optOutCTAString:t.singleLayerOptOut.optOutCTA,onChange:b});break;case d.qc.MultiLayerOptInOpen:k=(0,m.tZ)(R,{strings:t.multiLayerOptIn,onChange:b});break;case d.qc.Closed:default:k=null}return k?(0,m.tZ)(f,{children:k}):null};var G=n(72668);const W=e=>(0,m.tZ)(G.Z,{title:(0,m.tZ)(J,{title:e.strings.title,link:e.strings.titleLink}),errorTitle:(0,m.tZ)(V,{errorTitle:e.strings.errorTitle,link:e.strings.errorTitleLink})}),Q=()=>{const[e,t]=(0,u.hQ)();return e({color:t.colors.primaryB,":hover":{color:t.colors.primaryB}})},J=e=>{let{title:t,link:n}=e;const a=Q(),r=t.split(/<gpcTitleLink>(.*?)<\/gpcTitleLink>/);return(0,m.BX)(m.HY,{children:[r[0],(0,m.tZ)(k.F,{className:a,href:n,target:"_blank",rel:"noopener noreferrer",children:r[1]}),r[2]]})},V=e=>{let{errorTitle:t,link:n}=e;const a=Q(),r=t.split(/<gpcErrorLink>(.*?)<\/gpcErrorLink>/);return(0,m.BX)(m.HY,{children:[r[0],(0,m.tZ)(k.F,{className:a,href:n,target:"_blank",rel:"noopener noreferrer",children:r[1]}),r[2]]})},Y=e=>{let{configs:t}=e;const{gpcEnabled:n,gpcLoading:a}=(0,c.w)(),r=s.useContext(i.y);if(t.isWebView)return null;if(a)return null;if("US"===t.userCountryCode&&n)return(0,m.tZ)(W,{strings:t.gpc.strings});if(!t.userCountryCode&&!r.enableGeoLocationLookup)throw new Error("PrivacyBanners: When not enabling enableUserGeoLocationLookup, the userCountryCode must be provided. See fusion-plugin-privacy-banners README for more information.");return(0,m.tZ)(j,{userCountryCode:t.userCountryCode||r.geoLocation?.countryCode||l.mN.countryCode,userTerritoryId:t.userTerritoryId,strings:t.cookiePreferences.strings,onChange:t.cookiePreferences.onChange})};var K=n(28463),ee=n(92431),te=n(79857),ne=n(31171),ae=n(33535),re=n(87696),oe=n(27130);function ie(e){const{hasLoaded:t,data:n}=(0,ne.Z)(),r=I(e),o=(0,ee.Z)(),l=(0,re.FH)(o),c=(()=>{const e=s.useContext(i.y);if(void 0===e)throw new Error("usePrivacyBanners must be used within a PrivacyBannersProvider");return{readCookiePreferences:e.readCookiePreferences,persistCookiePreferences:e.persistCookiePreferences,bannerState:e.bannerState}})(),p=(0,K.h)(),u=(0,te.Z)(),g=(0,a.Z)("load_tealium"),m=(0,ae.ZP)(),f=(0,oe.Z)("setUserConsentV1"),[y,h]=s.useState(!1);s.useEffect((()=>{u||p||!t||r===d.$.None&&null===l&&((0,re.WO)(o,!0),f({name:"gdpr",value:!0}),m("eats:gdpr_opt_in",{analytics:"1",targetedAd:"1",gdprBannerType:"unknown",isAcceptAllClick:!1}))}),[u,p,t,r,l,o,f,m]),s.useEffect((()=>{if(u||p||!g||!t)return;const e=c.readCookiePreferences();r===d.$.MultiLayerOptIn&&null===e||n?.loadTealium()}),[u,p,g,t,c,r,n]),s.useEffect((()=>{u||p||y||c.bannerState!==d.qc.Closed&&(m("eats:gdpr_banner_start"),h(!0))}),[u,p,c,m,y]);return{onChange:s.useCallback((e=>{if(r===d.$.None)return;const t=r===d.$.SingleLayerOptOut?"ccpa":"eea";if(1===e.length&&e[0]===d.EL.Essential)return m("eats:gdpr_opt_out",{gdprBannerType:t}),(0,re.WO)(o,!1),void f({name:"gdpr",value:!1});const n={analytics:!1,targetedAdvertising:!1},a=e[0]===d.EL.All;e.forEach((e=>{e===d.EL.Analytics?n.analytics=!0:e===d.EL.Targeted&&(n.targetedAdvertising=!0)})),m("eats:gdpr_opt_in",{analytics:a||n.analytics?"1":"0",targetedAd:a||n.targetedAdvertising?"1":"0",gdprBannerType:t,isAcceptAllClick:a||!1}),(0,re.WO)(o,!0),f({name:"gdpr",value:!0})}),[r,o,m,f])}}var le=n(70327),se=n(76476);const ce=()=>{const{userCountryCode:e}=(0,se.Z)({userCountryCode:""}),t=ie(e),n=(e=>{const t=(0,o.T)(),n=(0,r.useContext)(i.y);return e||n.geoLocation?.countryCode||l.mN.countryCode,{gpc:{title:t("gpc-banner.title"),titleLink:"https://privacy.uber.com/us",errorTitle:t("gpc-banner.error"),errorTitleLink:"https://privacy.uber.com/us"},cookiePreferences:{singleLayerOptOut:{summary:t("cookie-preferences.single-layer-opt-out.summary"),optOutCTA:t("cookie-preferences.single-layer-opt-out.opt-out-cta"),optInCTA:t("cookie-preferences.single-layer-opt-out.opt-in-cta"),sharingOptOutUrl:"https://privacy.uber.com/us"},multiLayerOptIn:{initialLayer:{title:t("cookie-preferences.multi-layer-opt-in.title"),summary:t("cookie-preferences.multi-layer-opt-in.initial-layer.summary"),optInCTA:t("cookie-preferences.multi-layer-opt-in.initial-layer.opt-in-cta"),optOutCTA:t("cookie-preferences.multi-layer-opt-in.opt-out-cta"),cookieSettingsCTA:t("cookie-preferences.multi-layer-opt-in.initial-layer.cookie-settings-cta"),cookieStatementUrl:"https://www.uber.com/legal/en/document/?name=cookie-notice"},settingsLayer:{title:t("cookie-preferences.multi-layer-opt-in.title"),essential:t("cookie-preferences.multi-layer-opt-in.settings-layer.essential"),essentialSummary:t("cookie-preferences.multi-layer-opt-in.settings-layer.essential-summary"),targetedAdvertising:t("cookie-preferences.multi-layer-opt-in.settings-layer.targeted-advertising"),targetedAdvertisingSummary:t("cookie-preferences.multi-layer-opt-in.settings-layer.targeted-advertising-summary"),analytics:t("cookie-preferences.multi-layer-opt-in.settings-layer.analytics"),analyticsSummary:t("cookie-preferences.multi-layer-opt-in.settings-layer.analytics-summary"),acceptCTA:t("cookie-preferences.multi-layer-opt-in.settings-layer.accept-cta"),optOutCTA:t("cookie-preferences.multi-layer-opt-in.opt-out-cta"),closeSettingsCTA:t("cookie-preferences.multi-layer-opt-in.settings-layer.close-settings-cta")}}}}})(e),a=(0,K.h)(),s=(0,te.Z)(),c={userCountryCode:e,isWebView:a||s,gpc:{strings:n.gpc},cookiePreferences:{onChange:e=>{t.onChange(e)},strings:n.cookiePreferences}};return(0,m.tZ)(le.Z,{messageKey:"gdpr",children:(0,m.tZ)(Y,{configs:c})})},de=e=>{let{legacyCookieBannerReactNode:t}=e;return(0,a.Z)("privacy_banners_enabled")?(0,m.tZ)(ce,{}):t}},76476:(e,t,n)=>{n.d(t,{L:()=>o,Z:()=>i});var a=n(68799),r=n(1798);const o="privacy-banners:config",i=e=>(0,r.Z)()?{...e,...(0,a.Z7)(o)}:e},31171:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(53587),r=n(68739),o=n(24385);function i(){const e=(0,a.useContext)(r.GM),t=(0,r.G2)(o.J).from(e),[n,i]=(0,a.useState)({isLoading:!0,hasLoaded:!1,data:null,error:null});return(0,a.useEffect)((()=>{t.fetch().then((e=>{i({isLoading:!1,hasLoaded:!0,data:e,error:null})}))}),[t,e]),n}},54505:(e,t,n)=>{n.d(t,{Z:()=>Z});var a=n(28992),r=n(92431),o=n(79857),i=n(31171),l=n(33535),s=n(87696),c=n(27130),d=n(87444),p=n(15649),u=n(14016),g=n(47986),m=n(91931),f=n(14966),y=n(46399),h=n(30946),b=n(9022),k=n(72843),C=n(94813);function Z(){const e=(0,p.Z)(),t=(0,r.Z)(),[n,Z]=(0,m.hQ)(),L=n((0,f.lE)({$theme:Z})),{hasLoaded:S,data:w}=(0,i.Z)(),v=(0,u.T)(),O=(0,s.FH)(t),P=(0,o.Z)(),E=(0,d.Z)("load_tealium"),[T,M]=a.useState(!1),{shouldShowMessage:A}=(0,y.Z)("gdpr"),R=(0,h.Y)(),{isGPCCountry:x,gpcPrivacyLink:N}=(0,b.h)(),$=S&&w?.isCcpaCountry,_=S&&w?.isEeaCountry,B=(0,C.TH)(),H=k.parse(B.search)[g.FSm.modalName],X=!H&&!P&&!R&&$&&null===O&&!T,I=!H&&A&&X,U=_&&X,D=_&&I,z=!P&&S&&(!$||O)&&E,q=(0,l.ZP)(),F=(0,c.Z)("setUserConsentV1"),[j,G]=a.useState({essential:!0,targetedAdvertising:!1,analytics:!1}),W={essential:v("cookie.banner.essential.description"),targetedAdvertising:v("cookie.banner.trageted.ad.description"),analytics:v("cookie.banner.analytics.description")},Q=a.useMemo((()=>{if(D)return v("banner.v2.gdpr.cookie",{cookieLink:`<a href="${(0,g.Q_j)(e)}" target="_blank" class="${L}">${v("banner.v2.gdpr.cookieLink")}</a>`});if(x){const e=`<a href="${N}" target="_blank" class="${L}">${v("cookie.banner.ccpa.url.text")}</a>`;return v("cookie.banner.ccpa.body",{constructedCCPACookieLink:e})}return v("banner.v2.gdpr.basic.cookie",{cookieLink:`<a href="${(0,g.Q_j)(e)}" target="_blank" class="${L}">${v("banner.cookie.link")}</a>`})}),[N,x,L,e,D,v]);a.useEffect((()=>{z&&!I&&null===O&&((0,s.WO)(t,!0),F({name:"gdpr",value:!0}),q("eats:gdpr_opt_in",{analytics:"1",targetedAd:"1",gdprBannerType:"unknown",isAcceptAllClick:!1}))}),[t,q,O,F,z,I]),a.useEffect((()=>{z&&w&&w.loadTealium(),I&&q("eats:gdpr_banner_start")}),[q,w,z,I]);const J=a.useCallback((e=>{q("eats:gdpr_opt_in",{analytics:e||j.analytics?"1":"0",targetedAd:e||j.targetedAdvertising?"1":"0",gdprBannerType:_?"eea":"ccpa",isAcceptAllClick:e||!1}),(0,s.WO)(t,!0),F({name:"gdpr",value:!0})}),[t,q,_,j.analytics,j.targetedAdvertising,F]),V=a.useCallback((()=>{q("eats:gdpr_opt_out",{gdprBannerType:_?"eea":"ccpa"}),(0,s.WO)(t,!1),F({name:"gdpr",value:!1})}),[t,q,_,F]);return{shouldShowGdprBanner:I,shouldShowGdprContent:X,shouldShowExtendedBanner:D,shouldShowExtendedContent:U,onOptIn:J,onOptOut:V,selectedSettings:j,setSelectedSettings:G,settingDescriptions:W,cookieStatement:Q,hideBanner:()=>{M(!0)}}}}}]);