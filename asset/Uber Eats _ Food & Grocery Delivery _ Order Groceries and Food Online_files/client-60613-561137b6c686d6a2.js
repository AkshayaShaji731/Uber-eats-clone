"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[60613],{14718:(e,t,i)=>{i.d(t,{Z:()=>m});var n=i(28992),s=i(91931),o=i(8639);const r={tiny:1,small:4,regular:8},a=[r.tiny,r.small],l=[r.small,r.tiny],d=function(){let{maxDots:e=0,pageId:t=0,dotsSize:i,dotsSizeSequence:n=[]}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Array.from({length:e},((e,s)=>({pageId:t+s,dotSize:i||n[s]||r.regular})))};var c=i(7392);const u=(0,s.zo)("ol",{display:"flex",justifyContent:"center",alignItems:"center"}),p=(0,s.zo)("li",(e=>{let{$theme:t,$filled:i,$inversedDotColor:n,$dotsSize:s=8,$margin:r=4}=e;return{borderRadius:"50%",width:`${s}px`,height:`${s}px`,margin:`0 ${r}px`,cursor:"pointer",...i?{background:n?t.colors.black:t.colors.white}:{background:n?(0,o.uE)(t.colors.black,.24):(0,o.uE)(t.colors.white,.6)}}}));const m=function(e){const{currentPage:t,pages:i,inversedDotColor:s,fullDots:o=!0,dotsSize:m}=e,h=n.useMemo((()=>o?4:8),[o]),g=n.useMemo((()=>function(){let{currentPage:e=0,pages:t=1,startFrom:i=0,dots:n=5,outermostDots:s=2,fullDots:o=!0,dotsSize:c=r.regular}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(o)return d({maxDots:t,pageId:i,dotsSize:c});if(t<=1)return d({maxDots:1,pageId:i,dotsSize:r.regular});const u=t-1;e=Math.min(Math.max(e,i),u);const p=e+1,m=Math.min(t,n),h=Math.max(p-m,0),g=Math.max(Math.min(h,s),0),f=Math.max(p-m-g,0),S=f+g,w=Math.max(t-m,0),v=p>m?t-p:w,x=Math.max(Math.min(v,s),0),y=d({maxDots:g,pageId:f,dotsSizeSequence:1===g?a.slice(1):a}),b=d({maxDots:m,pageId:S,dotsSize:r.regular}),$=b[b.length-1].pageId+1,T=d({maxDots:x,pageId:$,dotsSizeSequence:1===v&&g>0?[r.regular]:l});return[...y,...b,...T]}({currentPage:t,pages:i,fullDots:o,dotsSize:m})),[t,i,o,m]);return(0,c.tZ)(u,{children:g.map((t=>{let{pageId:i,dotSize:n}=t;return(0,c.tZ)(p,{$inversedDotColor:s,$filled:i===e.currentPage,$dotsSize:n,$margin:h,onClick:t=>{t.stopPropagation(),e.onClick(i)}},i)}))})}},60613:(e,t,i)=>{i.d(t,{Z:()=>y});var n=i(91931),s=i(13834),o=i(14718),r=i(38784),a=i(7392);const l=(0,n.zo)("ol",{display:"flex",justifyContent:"center",alignItems:"center"}),d=(0,n.zo)("li",(e=>{let{$dotsSize:t=4,$theme:i}=e;return{borderRadius:"50%",width:2*t+"px",height:2*t+"px",margin:"0 3px",background:i.colors.backgroundPrimary}}));const c=function(e){return(0,a.tZ)(l,{children:[...Array(e.pages).keys()].map((t=>(0,a.tZ)(d,{$dotsSize:t===e.currentPage?(e.dotsSize||0)+2:e.dotsSize,onClick:i=>{i.stopPropagation(),e.onClick(t)}},t)))})};var u=i(28992),p=i(25750),m=i(36278),h=i(29194),g=i(94579);const f=(0,n.zo)("div",{padding:"8px",boxSizing:"border-box",position:"absolute",bottom:0,left:0,right:0,display:"flex",alignItems:"center",justifyContent:"flex-start",overflowY:"hidden",overflowX:"scroll",flexWrap:"nowrap",scrollbarWidth:"none","::-webkit-scrollbar":{display:"none"},boxShadow:"0px -4px 16px rgba(0, 0, 0, 0.12)",scrollBehavior:"smooth",transition:g.pB.default});function S(e){let{currentDisplayIndex:t,slides:i,renderPaginationSlide:n,onClick:s,paginationSlideSize:o}=e;const r=u.useRef(null),l=(0,h.gm)();return u.useEffect((()=>{if(!r.current)return;const e=r.current.scrollWidth;if(t>=3)if("ltr"===l)r.current.scrollLeft=(t-3)*(o+8);else{const i=e-(t-3)*(o+8);r.current.scrollLeft=i}else("ltr"===l&&r.current.scrollLeft>=t*(o+8)||"rtl"===l&&e-r.current.scrollLeft<t*(o+8))&&(r.current.scrollLeft=t*(o+8))}),[t,o,l]),(0,a.tZ)(f,{ref:r,children:(0,a.tZ)(p.Z,{separator:()=>(0,a.tZ)(m.ZP,{$width:"8px"}),children:i.map(((e,i)=>(0,a.tZ)("div",{onClick:()=>s(i),children:n({slide:e,isActive:i===t,index:i})},i)))})})}const w=(0,n.zo)("div",(e=>{let{$height:t,$overflowVisible:i,$disabled:n}=e;return{position:"relative",width:"100%",overflow:i?"visible":"hidden",...t?{height:t}:{},pointerEvents:""+(n?"none":"auto")}})),v=(0,n.zo)("div",(e=>{let{$theme:t}=e;return{position:"absolute",bottom:0,width:"100%",padding:`${t.sizing.scale500} 0`}})),x=(0,n.zo)("div",(e=>{let{$dotsBottomPosition:t="16px"}=e;return{bottom:t,position:"absolute",padding:0,margin:"0 auto",width:"100%"}}));function y(e){const{displaySlides:t,displayIndex:i,displayOffset:n,useTransition:l,stopAutoScroll:d,changeDisplaySlide:u,onTransitionEnd:p}=(0,r.Z)({slides:e.slides,pageSize:1,autoScrollInterval:e.autoScrollInterval,onSlidesDisplayed:e.onSlidesDisplayed,initialIndex:e.initialIndex,isInfinite:e.isInfinite,peekAnimation:e.peekAnimation});return 0===e.slides.length?null:1===e.slides.length&&e.slides[0]?(0,a.tZ)(w,{$height:e.height,children:(0,a.tZ)(s.M,{$as:"div",$margin:e.margin,children:e.renderSlide({slide:e.slides[0],carouselSlideProps:{isDummy:!1,isVisible:!0,index:0}})})}):(0,a.BX)(w,{$height:e.height,$overflowVisible:e.overflowVisible,$disabled:e.disabled,children:[(0,a.tZ)(s.Z,{displayIndex:i,displayOffset:n,displaySlides:t,onSwipe:d,renderSlide:e.renderSlide,useTransition:l,onTransitionEnd:()=>{if(p(),"function"==typeof e.onTransitionEnd){const t=e.slides[i];e.onTransitionEnd(i,t)}},changeDisplaySlide:u,margin:e.margin,isInfinite:e.isInfinite,width:e.width}),"regular"===e.dotsType?(0,a.tZ)(x,{$dotsBottomPosition:e.dotsBottomPosition,children:(0,a.tZ)(o.Z,{dotsSize:e.dotsSize,pages:e.slides.length,inversedDotColor:e.inversedDotColor,currentPage:i,fullDots:e.fullDots,onClick:e=>{u({index:e})}})}):null,"large"===e.dotsType?(0,a.tZ)(v,{children:(0,a.tZ)(x,{$dotsBottomPosition:e.dotsBottomPosition,children:(0,a.tZ)(c,{dotsSize:e.dotsSize,pages:e.slides.length,currentPage:i,onClick:e=>{u({index:e})}})})}):null,e.paginationSlideProps?(0,a.tZ)(S,{currentDisplayIndex:i,slides:e.slides,renderPaginationSlide:e.paginationSlideProps.renderPaginationSlide,onClick:e=>u({index:e}),paginationSlideSize:e.paginationSlideProps.slideSize}):null]})}},13834:(e,t,i)=>{i.d(t,{M:()=>m,Z:()=>h});var n=i(53587),s=i(28992),o=i(91931);const r={swipeStart:null,swipeStartY:0,swipeOffset:0,lastSwipeStartTime:0,didLastSwipeStartAsTouch:!1,isSwipe:null};function a(e,t){let{x:i,y:n,timestamp:s}=t,o=e.isSwipe;if(e.swipeStart&&null===o&&s-e.lastSwipeStartTime>60){const t=Math.abs(i-e.swipeStart),s=Math.abs(n-e.swipeStartY);o=t>8&&s<50}return o}function l(e,t){switch(t.type){case"swipe start":return{isSwipe:null,swipeStart:t.x,swipeStartY:t.y,swipeOffset:0,lastSwipeStartTime:t.timestamp,didLastSwipeStartAsTouch:t.isTouch};case"swipe move":if(e.swipeStart){const{x:i,y:n,timestamp:s}=t;return{...e,swipeOffset:t.x-e.swipeStart,isSwipe:a(e,{x:i,y:n,timestamp:s})}}return e;case"swipe end":return r;default:throw new Error}}const d=e=>{e.cancelable&&e.preventDefault()};var c=i(29194),u=i(7392);const p=(0,o.zo)("ol",(e=>({margin:0,padding:0,display:"flex",userSelect:"none",willChange:"transform",...e.$useTransition?{transition:"transform 200ms ease-in-out"}:{}}))),m=(0,o.zo)("li",(e=>{let{$margin:t,$width:i}=e;return{width:`${i??100}%`,margin:`0 ${t/2}px`,flex:"none",display:"flex"}}));function h(e){let{displaySlides:t,renderSlide:i,displayIndex:o,displayOffset:h,useTransition:g,onTransitionEnd:f,onSwipe:S,changeDisplaySlide:w,margin:v,width:x=100,isInfinite:y}=e;const b=(0,n.useRef)(null),$=(0,c.gm)(),T=t.findIndex((e=>{let{displayIndex:t}=e;return t===o})),z=t.length-1,E=T===z;!function(e){let{swipeTargetRef:t,onSwipeEnd:i,onSwipeMove:s}=e;const o=!0,[c,u]=(0,n.useReducer)(l,r),p=(0,n.useCallback)((e=>{e instanceof TouchEvent&&1!==e.touches.length||u({type:"swipe start",x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,timestamp:e.timeStamp,isTouch:!0})}),[]),m=(0,n.useCallback)((e=>{e.preventDefault(),c.didLastSwipeStartAsTouch&&Math.abs(e.timeStamp-c.lastSwipeStartTime)<200||u({type:"swipe start",x:e.pageX,y:e.pageY,timestamp:e.timeStamp,isTouch:!1})}),[c.didLastSwipeStartAsTouch,c.lastSwipeStartTime]),h=(0,n.useCallback)((e=>{if(e instanceof TouchEvent&&1!==e.touches.length)return;const{x:t,y:i}=e instanceof MouseEvent?{x:e.pageX,y:e.pageY}:{x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY};a(c,{x:t,y:i,timestamp:e.timeStamp})&&c.swipeStart&&s(t-c.swipeStart),u({type:"swipe move",x:t,y:i,timestamp:e.timeStamp})}),[c,s]),g=(0,n.useCallback)((e=>{if(e instanceof TouchEvent&&0!==e.touches.length)return;const{x:t,y:n}=e instanceof MouseEvent?{x:e.pageX,y:e.pageY}:{x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY};a(c,{x:t,y:n,timestamp:e.timeStamp})&&c.swipeStart&&i(t-c.swipeStart),u({type:"swipe end"})}),[c,i]);(0,n.useEffect)((()=>{const e=Math.abs(c.swipeOffset)>8&&o;return e&&document.addEventListener("touchmove",d,{passive:!1}),()=>{e&&document.removeEventListener("touchmove",d,{passive:!1})}}),[c.swipeOffset,o]),(0,n.useEffect)((()=>{const e=t.current;return e&&(e.addEventListener("touchstart",p,{passive:!0}),e.addEventListener("mousedown",m)),()=>{e&&(e.removeEventListener("touchstart",p,{passive:!0}),e.removeEventListener("mousedown",m))}}),[t,p,m]),(0,n.useEffect)((()=>{const e=t.current;return e&&(e.addEventListener("touchmove",h,{passive:!1}),e.addEventListener("touchend",g,{passive:!0})),()=>{e&&(e.removeEventListener("touchmove",h,{passive:!1}),e.removeEventListener("touchend",g,{passive:!0}))}}),[t,h,g,o]),(0,n.useEffect)((()=>{const e=c.swipeStart&&!c.didLastSwipeStartAsTouch;return e&&(document.addEventListener("mousemove",h),document.addEventListener("mouseup",g)),()=>{e&&(document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",g))}}),[c.swipeStart,c.didLastSwipeStartAsTouch,h,g])}({swipeTargetRef:b,onSwipeMove:(0,n.useCallback)((e=>{const t=0===o?1:-1,i=(o===z&&e<0||0===o&&e>0)&&!y,n=Math.abs(e)>40?40*t:e;w({index:o,offset:i?n:e,useTransition:!1}),S&&S()}),[o,w,S,z,y]),onSwipeEnd:(0,n.useCallback)((e=>{Math.abs(e)<40?w({index:o,offset:0}):e<0?w({index:"ltr"===$?"forward":"back"}):e>0&&w({index:"ltr"===$?"back":"forward"})}),[o,w,$])});const k=s.useMemo((()=>t.map(((e,t)=>{let{slide:n,displayIndex:s,isDummy:r}=e;return(0,u.tZ)(m,{"aria-hidden":!!r||void 0,$margin:v,$width:x,children:i({slide:n,carouselSlideProps:{isDummy:r,isVisible:s===o,index:t}})},s)}))),[i,t,o,v,x]),D="ltr"===$?-1:1;return(0,u.tZ)(p,{$useTransition:g,style:{transform:`translateX(${T*D*x-D*(E?100-x:0)}%) translateX(${h}px)translateX(${T*D*v+D*v/2}px)`},ref:b,onTransitionEnd:f,children:k})}}}]);