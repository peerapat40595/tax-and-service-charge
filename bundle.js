var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function u(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(t,e){e=""+e,t.data!==e&&(t.data=e)}let s;function v(t){s=t}const $=[],p=Promise.resolve();let m=!1;const x=[],y=[],g=[];function W(t){y.push(t)}function _(){const t=new Set;do{for(;$.length;){const t=$.shift();v(t),b(t.$$)}for(;x.length;)x.shift()();for(;y.length;){const e=y.pop();t.has(e)||(e(),t.add(e))}}while($.length);for(;g.length;)g.pop()();m=!1}function b(t){t.fragment&&(t.update(t.dirty),r(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(W))}function T(t,e){t.$$.dirty||($.push(t),m||(m=!0,p.then(_)),t.$$.dirty=n()),t.$$.dirty[e]=!0}function S(o,a,i,c,l,f){const d=s;v(o);const h=a.props||{},$=o.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:null};let p=!1;var m;$.ctx=i?i(o,h,(t,e)=>{$.ctx&&l($.ctx[t],$.ctx[t]=e)&&($.bound[t]&&$.bound[t](e),p&&T(o,t))}):h,$.update(),p=!0,r($.before_render),$.fragment=c($.ctx),a.target&&(a.hydrate?$.fragment.l((m=a.target,Array.from(m.childNodes))):$.fragment.c(),a.intro&&o.$$.fragment.i&&o.$$.fragment.i(),function(t,n,o){const{fragment:a,on_mount:i,on_destroy:c,after_render:l}=t.$$;a.m(n,o),W(()=>{const n=i.map(e).filter(u);c?c.push(...n):r(n),t.$$.on_mount=[]}),l.forEach(W)}(o,a.target,a.anchor),_()),v(d)}class A{$destroy(){var e,n;n=!0,(e=this).$$&&(r(e.$$.on_destroy),e.$$.fragment.d(n),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function E(e){var n,r,u,o,s,v,$,p,m,x,y,g,W,_,b,T,S,A=w(e.valueWithTax),E=w(e.valueWithTaxAndService),C=w(e.valueWithService);return{c(){var t,a,i;n=l("input"),r=d(),(u=l("h2")).textContent="With 7% Tax:",o=d(),s=l("h3"),v=f(A),$=d(),(p=l("h2")).textContent="With 7% Tax And 10% Service:",m=d(),x=l("h3"),y=f(E),g=d(),(W=l("h2")).textContent="With 10% Service:",_=d(),b=l("h3"),T=f(C),t=n,a="type",null==(i="number")?t.removeAttribute(a):t.setAttribute(a,i),S=function(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}(n,"input",e.input_input_handler)},m(t,c){i(t,n,c),n.value=e.value,i(t,r,c),i(t,u,c),i(t,o,c),i(t,s,c),a(s,v),i(t,$,c),i(t,p,c),i(t,m,c),i(t,x,c),a(x,y),i(t,g,c),i(t,W,c),i(t,_,c),i(t,b,c),a(b,T)},p(t,e){t.value&&(n.value=e.value),t.valueWithTax&&A!==(A=w(e.valueWithTax))&&h(v,A),t.valueWithTaxAndService&&E!==(E=w(e.valueWithTaxAndService))&&h(y,E),t.valueWithService&&C!==(C=w(e.valueWithService))&&h(T,C)},i:t,o:t,d(t){t&&(c(n),c(r),c(u),c(o),c(s),c($),c(p),c(m),c(x),c(g),c(W),c(_),c(b)),S()}}}function w(t){return new Intl.NumberFormat(void 0,{style:"currency",currency:"SGD"}).format(t)}function C(t,e,n){let r,u,o,a;return t.$$.update=((t={value:1,valueWithTax:1})=>{t.value&&n("valueWithTax",u=1.07*r),t.valueWithTax&&n("valueWithTaxAndService",o=1.1*u),t.value&&n("valueWithService",a=1.1*r)}),{value:r,valueWithTax:u,valueWithTaxAndService:o,valueWithService:a,input_input_handler:function(){r=function(t){return""===t?void 0:+t}(this.value),n("value",r)}}}return new class extends A{constructor(t){super(),S(this,t,C,E,o,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
