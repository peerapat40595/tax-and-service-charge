var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function s(t,e){e=""+e,t.data!==e&&(t.data=e)}let h;function $(t){h=t}const v=[],p=Promise.resolve();let m=!1;const x=[],y=[],g=[];function _(t){y.push(t)}function b(){const t=new Set;do{for(;v.length;){const t=v.shift();$(t),T(t.$$)}for(;x.length;)x.shift()();for(;y.length;){const e=y.pop();t.has(e)||(e(),t.add(e))}}while(v.length);for(;g.length;)g.pop()();m=!1}function T(t){t.fragment&&(t.update(t.dirty),r(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(_))}function W(t,e){t.$$.dirty||(v.push(t),m||(m=!0,p.then(b)),t.$$.dirty=n()),t.$$.dirty[e]=!0}function A(u,a,i,c,l,f){const d=h;$(u);const s=a.props||{},v=u.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:null};let p=!1;var m;v.ctx=i?i(u,s,(t,e)=>{v.ctx&&l(v.ctx[t],v.ctx[t]=e)&&(v.bound[t]&&v.bound[t](e),p&&W(u,t))}):s,v.update(),p=!0,r(v.before_render),v.fragment=c(v.ctx),a.target&&(a.hydrate?v.fragment.l((m=a.target,Array.from(m.childNodes))):v.fragment.c(),a.intro&&u.$$.fragment.i&&u.$$.fragment.i(),function(t,n,u){const{fragment:a,on_mount:i,on_destroy:c,after_render:l}=t.$$;a.m(n,u),_(()=>{const n=i.map(e).filter(o);c?c.push(...n):r(n),t.$$.on_mount=[]}),l.forEach(_)}(u,a.target,a.anchor),b()),$(d)}class S{$destroy(){var e,n;n=!0,(e=this).$$&&(r(e.$$.on_destroy),e.$$.fragment.d(n),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function E(e){var n,r,o,u,h,$,v,p,m,x,y,g;return{c(){var t,a,i;n=l("input"),r=d(),(o=l("h2")).textContent="With 7% Tax:",u=d(),h=l("h3"),$=f(e.valueWithTax),v=d(),(p=l("h2")).textContent="With 7% Tax And 10% Service:",m=d(),x=l("h3"),y=f(e.valueWithTaxAndService),t=n,a="type",null==(i="number")?t.removeAttribute(a):t.setAttribute(a,i),g=function(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}(n,"input",e.input_input_handler)},m(t,c){i(t,n,c),n.value=e.value,i(t,r,c),i(t,o,c),i(t,u,c),i(t,h,c),a(h,$),i(t,v,c),i(t,p,c),i(t,m,c),i(t,x,c),a(x,y)},p(t,e){t.value&&(n.value=e.value),t.valueWithTax&&s($,e.valueWithTax),t.valueWithTaxAndService&&s(y,e.valueWithTaxAndService)},i:t,o:t,d(t){t&&(c(n),c(r),c(o),c(u),c(h),c(v),c(p),c(m),c(x)),g()}}}function w(t){return new Intl.NumberFormat(void 0,{style:"currency",currency:"SGD"}).format(t)}function C(t,e,n){let r,o,u;return t.$$.update=((t={value:1})=>{t.value&&n("valueWithTax",o=w(1.07*r)),t.value&&n("valueWithTaxAndService",u=w(1.07*r*1.1))}),{value:r,valueWithTax:o,valueWithTaxAndService:u,input_input_handler:function(){r=function(t){return""===t?void 0:+t}(this.value),n("value",r)}}}return new class extends S{constructor(t){super(),A(this,t,C,E,u,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
