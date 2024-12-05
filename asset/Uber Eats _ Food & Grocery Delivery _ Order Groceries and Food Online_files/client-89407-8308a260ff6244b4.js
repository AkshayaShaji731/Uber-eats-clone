"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[89407],{2763:(r,e,o)=>{o.d(e,{NO:()=>l,T5:()=>a,TO:()=>t});const l={small:"small",medium:"medium",large:"large"},a=Object.freeze({primary:"primary",secondary:"secondary"}),t={custom:"custom",neutral:"neutral",primary:"primary",accent:"accent",positive:"positive",warning:"warning",negative:"negative",black:"black",blue:"blue",green:"green",red:"red",yellow:"yellow",orange:"orange",purple:"purple",brown:"brown",teal:"teal",lime:"lime"}},89407:(r,e,o)=>{o.d(e,{Z:()=>P});var l=o(53587),a=o(92300),t=o(11772),n=o.n(t),d=o(67098),i=o.n(d),c=o(79810),u=o(2763);function s(r,e){if(r||"0"===e||"1000"===e)switch(e){case"0":return"white";case"50":return n()(.8,r);case"100":return n()(.6,r);case"200":return n()(.4,r);case"300":return n()(.2,r);case"400":return r;case"500":return i()(.2,r);case"600":return i()(.4,r);case"700":return i()(.6,r);case"800":return i()(.8,r);case"1000":return"black";default:return r}}const f="disabled",b="primary",g="secondary",p=(r,e,o)=>r.name&&r.name.includes("dark")?o:e,m={[f]:(r,e)=>({color:r.colors.tagNeutralFontDisabled,backgroundColor:p(r,r.colors.gray50,r.colors.gray100Dark),borderColor:null}),[b]:(r,e)=>({color:r.colors.tagNeutralSolidFont,backgroundColor:r.colors.tagNeutralSolidBackground,borderColor:null}),[g]:(r,e)=>({color:r.colors.tagNeutralOutlinedFont,backgroundColor:r.colors.tagNeutralOutlinedBackground,borderColor:null})},h={[f]:(r,e)=>({color:r.colors.tagPrimaryFontDisabled,backgroundColor:p(r,r.colors.gray50,r.colors.gray100Dark),borderColor:null}),[b]:(r,e)=>({color:r.colors.tagPrimarySolidFont,backgroundColor:r.colors.tagPrimarySolidBackground,borderColor:null}),[g]:(r,e)=>({color:r.colors.tagPrimaryOutlinedFont,backgroundColor:r.colors.tagPrimaryOutlinedBackground,borderColor:null})},k={[f]:(r,e)=>({color:r.colors.tagAccentFontDisabled,backgroundColor:p(r,r.colors.blue50,r.colors.blue100Dark),borderColor:null}),[b]:(r,e)=>({color:r.colors.tagAccentSolidFont,backgroundColor:r.colors.tagAccentSolidBackground,borderColor:null}),[g]:(r,e)=>({color:r.colors.tagAccentOutlinedFont,backgroundColor:r.colors.tagAccentOutlinedBackground,borderColor:null})},y={[f]:(r,e)=>({color:r.colors.tagPositiveFontDisabled,backgroundColor:p(r,r.colors.green50,r.colors.green100Dark),borderColor:null}),[b]:(r,e)=>({color:r.colors.tagPositiveSolidFont,backgroundColor:r.colors.tagPositiveSolidBackground,borderColor:null}),[g]:(r,e)=>({color:r.colors.tagPositiveOutlinedFont,backgroundColor:r.colors.tagPositiveOutlinedBackground,borderColor:null})},v={[f]:(r,e)=>({color:r.colors.tagWarningFontDisabled,backgroundColor:p(r,r.colors.yellow50,r.colors.yellow100Dark),borderColor:null}),[b]:(r,e)=>({color:r.colors.tagWarningSolidFont,backgroundColor:r.colors.tagWarningSolidBackground,borderColor:null}),[g]:(r,e)=>({color:r.colors.tagWarningOutlinedFont,backgroundColor:r.colors.tagWarningOutlinedBackground,borderColor:null})},C={[f]:(r,e)=>({color:r.colors.tagNegativeFontDisabled,backgroundColor:p(r,r.colors.red50,r.colors.red100Dark),borderColor:null}),[b]:(r,e)=>({color:r.colors.tagNegativeSolidFont,backgroundColor:r.colors.tagNegativeSolidBackground,borderColor:null}),[g]:(r,e)=>({color:r.colors.tagNegativeOutlinedFont,backgroundColor:r.colors.tagNegativeOutlinedBackground,borderColor:null})},w={[f]:(r,e)=>({color:p(r,r.colors.lime300,r.colors.lime400Dark),backgroundColor:p(r,r.colors.lime50,r.colors.lime100Dark),borderColor:null}),[b]:(r,e)=>({color:p(r,r.colors.white,r.colors.lime900Dark),backgroundColor:p(r,r.colors.lime600,r.colors.lime400Dark),borderColor:null}),[g]:(r,e)=>({color:p(r,r.colors.lime700,r.colors.lime700Dark),backgroundColor:p(r,r.colors.lime50,r.colors.lime100Dark),borderColor:null})},O={[f]:(r,e)=>({color:p(r,r.colors.teal300,r.colors.teal400Dark),backgroundColor:p(r,r.colors.teal50,r.colors.teal100Dark),borderColor:null}),[b]:(r,e)=>({color:p(r,r.colors.white,r.colors.teal900Dark),backgroundColor:p(r,r.colors.teal600,r.colors.teal400Dark),borderColor:null}),[g]:(r,e)=>({color:p(r,r.colors.teal700,r.colors.teal700Dark),backgroundColor:p(r,r.colors.teal50,r.colors.teal100Dark),borderColor:null})},x={[f]:(r,e)=>({color:p(r,r.colors.orange300,r.colors.orange400Dark),backgroundColor:p(r,r.colors.orange50,r.colors.orange100Dark),borderColor:null}),[b]:(r,e)=>({color:p(r,r.colors.white,r.colors.orange900Dark),backgroundColor:p(r,r.colors.orange600,r.colors.orange400Dark),borderColor:null}),[g]:(r,e)=>({color:p(r,r.colors.orange700,r.colors.orange700Dark),backgroundColor:p(r,r.colors.orange50,r.colors.orange100Dark),borderColor:null})},F={[f]:(r,e)=>({color:p(r,r.colors.purple300,r.colors.purple400Dark),backgroundColor:p(r,r.colors.purple50,r.colors.purple100Dark),borderColor:null}),[b]:(r,e)=>({color:p(r,r.colors.white,r.colors.purple900Dark),backgroundColor:p(r,r.colors.purple600,r.colors.purple400Dark),borderColor:null}),[g]:(r,e)=>({color:p(r,r.colors.purple700,r.colors.purple700Dark),backgroundColor:p(r,r.colors.purple50,r.colors.purple100Dark),borderColor:null})},D={[f]:(r,e)=>({color:p(r,r.colors.amber200,r.colors.amber400Dark),backgroundColor:null,borderColor:p(r,r.colors.amber200,r.colors.amber400Dark)}),[b]:(r,e)=>({color:p(r,r.colors.white,r.colors.gray900Dark),backgroundColor:p(r,r.colors.amber600,r.colors.amber400Dark),borderColor:null}),[g]:(r,e)=>({color:p(r,r.colors.amber600,r.colors.amber600Dark),backgroundColor:null,borderColor:p(r,r.colors.amber600,r.colors.amber600Dark)})},_={[f]:(r,e)=>({color:s(e,r.colors.tagFontDisabledRampUnit),backgroundColor:null,borderColor:s(e,r.colors.tagSolidDisabledRampUnit)}),[b]:(r,e)=>({color:s(e,r.colors.tagSolidFontRampUnit),backgroundColor:s(e,r.colors.tagSolidRampUnit),borderColor:null}),[g]:(r,e)=>({color:s(e,r.colors.tagOutlinedFontRampUnit),backgroundColor:null,borderColor:s(e,r.colors.tagOutlinedRampUnit)})},$={[u.TO.neutral]:m,[u.TO.primary]:h,[u.TO.accent]:k,[u.TO.positive]:y,[u.TO.warning]:v,[u.TO.negative]:C,[u.TO.black]:h,[u.TO.blue]:k,[u.TO.green]:y,[u.TO.red]:C,[u.TO.yellow]:v,[u.TO.orange]:x,[u.TO.purple]:F,[u.TO.brown]:D,[u.TO.lime]:w,[u.TO.teal]:O,[u.TO.custom]:_},T=(0,c.zo)("span",(r=>{const{$theme:e,$disabled:o,$size:l=u.NO.small}=r,a="rtl"===e.direction?"borderBottomLeftRadius":"borderBottomRightRadius",t="rtl"===e.direction?"borderTopLeftRadius":"borderTopRightRadius",n="rtl"===e.direction?"marginRight":"marginLeft";return{alignItems:"center",[a]:e.borders.useRoundedCorners?e.borders.radius400:0,[t]:e.borders.useRoundedCorners?e.borders.radius400:0,cursor:o?"not-allowed":"pointer",display:"flex",[n]:{[u.NO.small]:"8px",[u.NO.medium]:"12px",[u.NO.large]:"16px"}[l],outline:"none",transitionProperty:"all",transitionDuration:"background-color",transitionTimingFunction:e.animation.easeOutCurve}}));T.displayName="Action";const I=(0,c.zo)("div",(r=>{let{$theme:e,$size:o=u.NO.small}=r,l=e.sizing.scale300;o===u.NO.medium?l=e.sizing.scale400:o===u.NO.large&&(l=e.sizing.scale600);return{alignItems:"center",display:"flex",["rtl"===e.direction?"paddingLeft":"paddingRight"]:l}}));I.displayName="StartEnhancerContainer";const N=(0,c.zo)("span",(r=>{const{$theme:e,$contentMaxWidth:o}=r;return{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",maxWidth:null===o?"auto":o||r.$theme.sizing.scale3200,order:"rtl"===e.direction?1:0}}));N.displayName="Text";const R=(0,c.zo)("span",(r=>{const{$theme:e,$kind:o=u.TO.primary,$clickable:l,$hierarchy:a,$disabled:t,$closeable:n,$isFocusVisible:d,$color:i,$size:c=u.NO.small,$contentMaxWidth:s}=r,m=c===u.NO.small?e.borders.radius200:e.borders.radius300,h={[u.NO.small]:e.sizing.scale300,[u.NO.medium]:e.sizing.scale500,[u.NO.large]:e.sizing.scale600}[c],k=!t&&a===u.T5.primary||o!==u.TO.custom?0:"2px",{color:y,backgroundColor:v,borderColor:C}=$[o][(r=>r.$disabled?f:r.$hierarchy===u.T5.primary?b:g)(r)](e,i);return{...{[u.NO.small]:e.typography.LabelSmall,[u.NO.medium]:e.typography.LabelMedium,[u.NO.large]:e.typography.LabelLarge}[c],alignItems:"center",color:y,backgroundColor:v,borderLeftColor:C,borderRightColor:C,borderTopColor:C,borderBottomColor:C,borderLeftStyle:"solid",borderRightStyle:"solid",borderTopStyle:"solid",borderBottomStyle:"solid",borderLeftWidth:k,borderRightWidth:k,borderTopWidth:k,borderBottomWidth:k,borderTopLeftRadius:m,borderTopRightRadius:m,borderBottomRightRadius:m,borderBottomLeftRadius:m,boxSizing:"border-box",cursor:t?"not-allowed":l?"pointer":"default",display:"inline-flex",height:{[u.NO.small]:"24px",[u.NO.medium]:"32px",[u.NO.large]:"40px"}[c],justifyContent:"space-between",maxWith:null===s?"100%":"auto",marginTop:"5px",marginBottom:"5px",marginLeft:"5px",marginRight:"5px",paddingTop:e.sizing.scale0,paddingBottom:e.sizing.scale0,paddingLeft:h,paddingRight:h,outline:"none",":hover":t||!l?{}:{boxShadow:`inset 0px 0px 100px ${p(e,"rgba(0, 0, 0, 0.08)","rgba(255, 255, 255, 0.2)")}`},":focus":t||!l&&!n?{}:{boxShadow:d?`0 0 0 3px ${o===u.TO.accent?e.colors.backgroundInversePrimary:e.colors.backgroundAccent}`:"none"}}}));R.displayName="Root";const M=new Set(["string","number"]);var S=o(30772),B=o(75267),z=o(7392);const j=r=>(0,z.tZ)(S.Z,{viewBox:"5 5 13.186 13.186",...r}),A=l.forwardRef(((r,e)=>{const{children:o,closeable:t=!0,color:n,contentMaxWidth:d,size:i=u.NO.small,disabled:c=!1,isFocused:s=!1,isHovered:f=!1,kind:b=u.TO.primary,onActionClick:g=(r=>{}),onActionKeyDown:p=(r=>{}),onClick:m=null,onKeyDown:h=null,overrides:k={},startEnhancer:y,title:v,hierarchy:C=u.T5.secondary}=r,[w,O]=l.useState(!1);const[x,F]=(0,a.jb)(k.Root,R),[D,_]=(0,a.jb)(k.Action,T),[$,S]=(0,a.jb)(k.ActionIcon,j),[A,P]=(0,a.jb)(k.StartEnhancerContainer,I),[L,W]=(0,a.jb)(k.Text,N),q="function"==typeof m,Z=c?{}:{onClick:m,onKeyDown:function(r){if(r.currentTarget!==r.target)return;const e=r.key;m&&"Enter"===e&&m(r),!t||"Backspace"!==e&&"Delete"!==e||(g(r),p(r)),h&&h(r)}},E=c?{}:{onClick:r=>{r.stopPropagation(),g(r)}},U={$clickable:q,$closeable:t,$color:n,$disabled:c,$isFocused:s,$isHovered:f,$kind:b,$hierarchy:C,$isFocusVisible:w,$size:i},H=v||function(r){const e=l.Children.toArray(r).filter((r=>null!=r));return e.length&&e.every((r=>M.has(typeof r)))?e.join(""):null}(o),K=(q||t)&&!c,V={[u.NO.small]:12,[u.NO.medium]:16,[u.NO.large]:20}[i],X=y;return(0,z.BX)(x,{ref:e,"data-baseweb":"tag","aria-label":K&&t?("string"==typeof o?`${o}, `:"")+"close by backspace":null,"aria-disabled":!!c||null,role:K?"button":null,tabIndex:K?0:null,...Z,...U,...F,onFocus:(0,B.Ah)(F,(function(r){(0,B.E)(r)&&O(!0)})),onBlur:(0,B.Z5)(F,(function(r){!1!==w&&O(!1)})),$contentMaxWidth:d,children:[X&&0!==X&&(0,z.tZ)(A,{...P,children:(0,z.tZ)(X,{})}),(0,z.tZ)(L,{$contentMaxWidth:d,title:H,...W,children:o}),t?(0,z.tZ)(D,{"aria-hidden":!0,role:"presentation",...E,...U,..._,children:(0,z.tZ)($,{size:V,...S})}):null]})}));A.displayName="Tag";const P=A},86037:(r,e,o)=>{e.__esModule=!0,e.default=void 0;var l=n(o(47606)),a=n(o(8768)),t=n(o(8769));function n(r){return r&&r.__esModule?r:{default:r}}function d(){return(d=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(r[l]=o[l])}return r}).apply(this,arguments)}function i(r,e,o){if("transparent"===e)return o;if("transparent"===o)return e;if(0===r)return o;var l=(0,t.default)(e),n=d({},l,{alpha:"number"==typeof l.alpha?l.alpha:1}),i=(0,t.default)(o),c=d({},i,{alpha:"number"==typeof i.alpha?i.alpha:1}),u=n.alpha-c.alpha,s=2*parseFloat(r)-1,f=((s*u==-1?s:s+u)/(1+s*u)+1)/2,b=1-f,g={red:Math.floor(n.red*f+c.red*b),green:Math.floor(n.green*f+c.green*b),blue:Math.floor(n.blue*f+c.blue*b),alpha:n.alpha*parseFloat(r)+c.alpha*(1-parseFloat(r))};return(0,a.default)(g)}var c=(0,l.default)(i);e.default=c,r.exports=e.default},8769:(r,e,o)=>{e.__esModule=!0,e.default=function(r){if("string"!=typeof r)throw new t.default(3);var e=(0,a.default)(r);if(e.match(d))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(i)){var o=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:o}}if(e.match(c))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(u)){var n=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:n}}var p=s.exec(e);if(p)return{red:parseInt(""+p[1],10),green:parseInt(""+p[2],10),blue:parseInt(""+p[3],10)};var m=f.exec(e.substring(0,50));if(m)return{red:parseInt(""+m[1],10),green:parseInt(""+m[2],10),blue:parseInt(""+m[3],10),alpha:parseFloat(""+m[4])>1?parseFloat(""+m[4])/100:parseFloat(""+m[4])};var h=b.exec(e);if(h){var k=parseInt(""+h[1],10),y=parseInt(""+h[2],10)/100,v=parseInt(""+h[3],10)/100,C="rgb("+(0,l.default)(k,y,v)+")",w=s.exec(C);if(!w)throw new t.default(4,e,C);return{red:parseInt(""+w[1],10),green:parseInt(""+w[2],10),blue:parseInt(""+w[3],10)}}var O=g.exec(e.substring(0,50));if(O){var x=parseInt(""+O[1],10),F=parseInt(""+O[2],10)/100,D=parseInt(""+O[3],10)/100,_="rgb("+(0,l.default)(x,F,D)+")",$=s.exec(_);if(!$)throw new t.default(4,e,_);return{red:parseInt(""+$[1],10),green:parseInt(""+$[2],10),blue:parseInt(""+$[3],10),alpha:parseFloat(""+O[4])>1?parseFloat(""+O[4])/100:parseFloat(""+O[4])}}throw new t.default(5)};var l=n(o(67920)),a=n(o(44753)),t=n(o(75909));function n(r){return r&&r.__esModule?r:{default:r}}var d=/^#[a-fA-F0-9]{6}$/,i=/^#[a-fA-F0-9]{8}$/,c=/^#[a-fA-F0-9]{3}$/,u=/^#[a-fA-F0-9]{4}$/,s=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,f=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,b=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,g=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;r.exports=e.default},86809:(r,e,o)=>{e.__esModule=!0,e.default=function(r,e,o){if("number"==typeof r&&"number"==typeof e&&"number"==typeof o)return(0,l.default)("#"+(0,a.default)(r)+(0,a.default)(e)+(0,a.default)(o));if("object"==typeof r&&void 0===e&&void 0===o)return(0,l.default)("#"+(0,a.default)(r.red)+(0,a.default)(r.green)+(0,a.default)(r.blue));throw new t.default(6)};var l=n(o(449)),a=n(o(93252)),t=n(o(75909));function n(r){return r&&r.__esModule?r:{default:r}}r.exports=e.default},8768:(r,e,o)=>{e.__esModule=!0,e.default=function(r,e,o,n){if("string"==typeof r&&"number"==typeof e){var d=(0,l.default)(r);return"rgba("+d.red+","+d.green+","+d.blue+","+e+")"}if("number"==typeof r&&"number"==typeof e&&"number"==typeof o&&"number"==typeof n)return n>=1?(0,a.default)(r,e,o):"rgba("+r+","+e+","+o+","+n+")";if("object"==typeof r&&void 0===e&&void 0===o&&void 0===n)return r.alpha>=1?(0,a.default)(r.red,r.green,r.blue):"rgba("+r.red+","+r.green+","+r.blue+","+r.alpha+")";throw new t.default(7)};var l=n(o(8769)),a=n(o(86809)),t=n(o(75909));function n(r){return r&&r.__esModule?r:{default:r}}r.exports=e.default},67098:(r,e,o)=>{e.__esModule=!0,e.default=void 0;var l=t(o(47606)),a=t(o(86037));function t(r){return r&&r.__esModule?r:{default:r}}function n(r,e){return"transparent"===e?e:(0,a.default)(parseFloat(r),"rgb(0, 0, 0)",e)}var d=(0,l.default)(n);e.default=d,r.exports=e.default},11772:(r,e,o)=>{e.__esModule=!0,e.default=void 0;var l=t(o(47606)),a=t(o(86037));function t(r){return r&&r.__esModule?r:{default:r}}function n(r,e){return"transparent"===e?e:(0,a.default)(parseFloat(r),"rgb(255, 255, 255)",e)}var d=(0,l.default)(n);e.default=d,r.exports=e.default},47606:(r,e)=>{function o(r,e,l){return function(){var a=l.concat(Array.prototype.slice.call(arguments));return a.length>=e?r.apply(this,a):o(r,e,a)}}e.__esModule=!0,e.default=function(r){return o(r,r.length,[])},r.exports=e.default},75909:(r,e)=>{function o(r){var e="function"==typeof Map?new Map:void 0;return(o=function(r){if(null===r||!function(r){return-1!==Function.toString.call(r).indexOf("[native code]")}(r))return r;if("function"!=typeof r)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof e){if(e.has(r))return e.get(r);e.set(r,o)}function o(){return l(r,arguments,n(this).constructor)}return o.prototype=Object.create(r.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),t(o,r)})(r)}function l(r,e,o){return(l=a()?Reflect.construct:function(r,e,o){var l=[null];l.push.apply(l,e);var a=new(Function.bind.apply(r,l));return o&&t(a,o.prototype),a}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(r){return!1}}function t(r,e){return(t=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r})(r,e)}function n(r){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(r)}e.__esModule=!0,e.default=void 0;var d=function(r){function e(e){return function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+e+" for more information.")||this)}return function(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,t(r,e)}(e,r),e}(o(Error));e.default=d,r.exports=e.default},67920:(r,e)=>{function o(r){return Math.round(255*r)}function l(r,e,l){return o(r)+","+o(e)+","+o(l)}e.__esModule=!0,e.default=void 0;var a=function(r,e,o,a){if(void 0===a&&(a=l),0===e)return a(o,o,o);var t=(r%360+360)%360/60,n=(1-Math.abs(2*o-1))*e,d=n*(1-Math.abs(t%2-1)),i=0,c=0,u=0;t>=0&&t<1?(i=n,c=d):t>=1&&t<2?(i=d,c=n):t>=2&&t<3?(c=n,u=d):t>=3&&t<4?(c=d,u=n):t>=4&&t<5?(i=d,u=n):t>=5&&t<6&&(i=n,u=d);var s=o-n/2;return a(i+s,c+s,u+s)};e.default=a,r.exports=e.default},44753:(r,e)=>{e.__esModule=!0,e.default=void 0;var o={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var l=function(r){if("string"!=typeof r)return r;var e=r.toLowerCase();return o[e]?"#"+o[e]:r};e.default=l,r.exports=e.default},93252:(r,e)=>{e.__esModule=!0,e.default=void 0;var o=function(r){var e=r.toString(16);return 1===e.length?"0"+e:e};e.default=o,r.exports=e.default},449:(r,e)=>{e.__esModule=!0,e.default=void 0;var o=function(r){return 7===r.length&&r[1]===r[2]&&r[3]===r[4]&&r[5]===r[6]?"#"+r[1]+r[3]+r[5]:r};e.default=o,r.exports=e.default}}]);