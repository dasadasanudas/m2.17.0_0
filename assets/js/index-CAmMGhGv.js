import{V as e,y as t,w as n,z as o,B as s,C as r,D as a,F as i,G as u,H as l,I as c,J as v,K as d}from"./icon-alert-Cei3Tz55.js";function p(e){var t;const n=o(e);return null!=(t=null==n?void 0:n.$el)?t:n}e.util.warn;const f=l?window:void 0;function m(...e){let t,s,r,a;if("string"==typeof e[0]||Array.isArray(e[0])?([s,r,a]=e,t=f):[t,s,r,a]=e,!t)return u;Array.isArray(s)||(s=[s]),Array.isArray(r)||(r=[r]);const i=[],l=()=>{i.forEach((e=>e())),i.length=0},v=n((()=>[p(t),o(a)]),(([e,t])=>{if(l(),!e)return;const n=d(t)?{...t}:t;i.push(...s.flatMap((t=>r.map((o=>((e,t,n,o)=>(e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)))(e,t,o,n))))))}),{immediate:!0,flush:"post"}),m=()=>{v(),l()};return c(m),m}function h(e){const n=function(){const e=s(!1);return r()&&a((()=>{e.value=!0})),e}();return t((()=>(n.value,Boolean(e()))))}function y(e,t,o={}){const{window:s=f,...r}=o;let a;const i=h((()=>s&&"MutationObserver"in s)),u=()=>{a&&(a.disconnect(),a=void 0)},l=n((()=>p(e)),(e=>{u(),i.value&&s&&e&&(a=new MutationObserver(t),a.observe(e,r))}),{immediate:!0}),v=()=>{u(),l()};return c(v),{isSupported:i,stop:v,takeRecords:()=>null==a?void 0:a.takeRecords()}}function w(e,o,s={}){const{window:r=f,...a}=s;let i;const u=h((()=>r&&"ResizeObserver"in r)),l=()=>{i&&(i.disconnect(),i=void 0)},v=t((()=>Array.isArray(e)?e.map((e=>p(e))):[p(e)])),d=n(v,(e=>{if(l(),u.value&&r){i=new ResizeObserver(o);for(const t of e)t&&i.observe(t,a)}}),{immediate:!0,flush:"post",deep:!0}),m=()=>{l(),d()};return c(m),{isSupported:u,stop:m}}function g(e,t={}){const{reset:o=!0,windowResize:r=!0,windowScroll:a=!0,immediate:i=!0}=t,u=s(0),l=s(0),c=s(0),d=s(0),f=s(0),h=s(0),g=s(0),b=s(0);function A(){const t=p(e);if(!t)return void(o&&(u.value=0,l.value=0,c.value=0,d.value=0,f.value=0,h.value=0,g.value=0,b.value=0));const n=t.getBoundingClientRect();u.value=n.height,l.value=n.bottom,c.value=n.left,d.value=n.right,f.value=n.top,h.value=n.width,g.value=n.x,b.value=n.y}return w(e,A),n((()=>p(e)),(e=>!e&&A())),y(e,A,{attributeFilter:["style","class"]}),a&&m("scroll",A,{capture:!0,passive:!0}),r&&m("resize",A,{passive:!0}),v((()=>{i&&A()})),{height:u,bottom:l,left:c,right:d,top:f,width:h,x:g,y:b,update:A}}function b(e,r,a={}){const{root:l,rootMargin:v="0px",threshold:d=.1,window:m=f,immediate:y=!0}=a,w=h((()=>m&&"IntersectionObserver"in m)),g=t((()=>{const t=o(e);return(Array.isArray(t)?t:[t]).map(p).filter(i)}));let b=u;const A=s(y),x=w.value?n((()=>[g.value,p(l),A.value]),(([e,t])=>{if(b(),!A.value)return;if(!e.length)return;const n=new IntersectionObserver(r,{root:p(t),rootMargin:v,threshold:d});e.forEach((e=>e&&n.observe(e))),b=()=>{n.disconnect(),b=u}}),{immediate:y,flush:"post"}):u,O=()=>{b(),x(),A.value=!1};return c(O),{isSupported:w,isActive:A,pause(){b(),A.value=!1},resume(){A.value=!0},stop:O}}const A={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function x(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:r={x:0,y:0},window:a=f,target:i=a,scroll:u=!0,eventFilter:l}=e;let c=null;const v=s(r.x),d=s(r.y),p=s(null),h="function"==typeof t?t:A[t],y=e=>{const t=h(e);c=e,t&&([v.value,d.value]=t,p.value="mouse")},w=e=>{if(e.touches.length>0){const t=h(e.touches[0]);t&&([v.value,d.value]=t,p.value="touch")}},g=()=>{if(!c||!a)return;const e=h(c);c instanceof MouseEvent&&e&&(v.value=e[0]+a.scrollX,d.value=e[1]+a.scrollY)},b=()=>{v.value=r.x,d.value=r.y},x=l?e=>l((()=>y(e)),{}):e=>y(e),O=l?e=>l((()=>w(e)),{}):e=>w(e),E=l?()=>l((()=>g()),{}):()=>g();if(i){const e={passive:!0};m(i,["mousemove","dragover"],x,e),n&&"movement"!==t&&(m(i,["touchstart","touchmove"],O,e),o&&m(i,"touchend",b,e)),u&&"page"===t&&m(a,"scroll",E,{passive:!0})}return{x:v,y:d,sourceType:p}}export{w as a,x as b,y as c,b as d,g as u};