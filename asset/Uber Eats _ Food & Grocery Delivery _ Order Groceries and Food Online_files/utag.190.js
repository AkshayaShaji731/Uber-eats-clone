//tealium universal tag - utag.190 ut4.0.202411251701, Copyright 2024 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;u.ev={"view":1,"link":1};u.map={"orderId":"order_id"};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,g;u.data={"base_url":"","acct":"34411","additional":"","shadditional":"","order_id":"","order_subtotal":"","product_id":[],"product_quantity":[],"product_unit_price":[]};c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
u.data.order_id=u.data.order_id||b._corder;u.data.order_subtotal=u.data.order_subtotal||b._csubtotal;if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
var adv=[];for(d in utag.loader.GV(u.data)){if(d.indexOf("adv.track.")>-1){adv=d.split(".");u.data.additional+="&"+adv[2]+"="+u.data[d];}else if(d.indexOf("adv.conv.")>-1){adv=d.split(".");u.data.shadditional+="&"+adv[2]+"="+u.data[d];}}
(function(){"use strict";var e=null,b="4.0.0",n=u.data.acct,additional=u.data.additional||"",t,r,i;try{t=top.document.referer!==""?encodeURIComponent(top.document.referrer.substring(0,2048)):""}catch(o){t=document.referrer!==null?document.referrer.toString().substring(0,2048):""}
try{r=window&&window.top&&document.location&&window.top.location===document.location?document.location:window&&window.top&&window.top.location&&""!==window.top.location?window.top.location:document.location}catch(u){r=document.location}
try{i=parent.location.href!==""?encodeURIComponent(parent.location.href.toString().substring(0,2048)):""}catch(a){try{i=r!==null?encodeURIComponent(r.toString().substring(0,2048)):""}catch(f){i=""}}
var l=Math.floor(Math.random()*1e17);utag.ut.loader({"type":"script","src":"//dx.mountain.com/spx?"+"dxver="+b+"&shaid="+n+"&tdr="+t+"&plh="+i+"&cb="+l+additional,"loc":"script","id":"utag_190","attrs":{}});})()
if(u.data.order_id&&b.funnel_step==6&&b.newOrReturning==='new'){(function(){var x=null,p,q,m,o=u.data.acct,l=u.data.order_id,i=u.data.order_subtotal,c="",k=u.data.product_id.join(","),g=u.data.product_quantity.join(","),j=u.data.product_unit_price.join(","),us="",shadditional=u.data.shadditional||"";try{p=top.document.referer!==""?encodeURIComponent(top.document.referrer.substring(0,512)):""}catch(n){p=document.referrer!==null?document.referrer.toString().substring(0,512):""}
try{q=window&&window.top&&document.location&&window.top.location===document.location?document.location:window&&window.top&&window.top.location&&""!==window.top.location?window.top.location:document.location}catch(b){q=document.location}
try{m=parent.location.href!==""?encodeURIComponent(parent.location.href.toString().substring(0,512)):""}catch(z){try{m=q!==null?encodeURIComponent(q.toString().substring(0,512)):""}catch(h){m=""}}
var A=Math.floor(Math.random()*100000000000000000);utag.ut.loader({"type":"script","src":"//dx.mountain.com/spx?conv=1&shaid="+o+"&tdr="+p+"&plh="+m+"&cb="+A+"&shoid="+l+"&shoamt="+i+"&shocur="+c+"&shopid="+k+"&shoq="+g+"&shoup="+j+"&shpil="+us+shadditional,"loc":"script","id":"utag_190","attrs":{}});})(u.data);}
}};utag.o[loader].loader.LOAD(id);}("190","uber.eatsv2"));}catch(error){utag.DB(error);}
