"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2132],{61957:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"\u524d\u7aef/Vue/Vue \u751f\u6001/\u72b6\u6001\u7ba1\u7406/Vuex/index","title":"Vuex","description":"{/ truncate /}","source":"@site/docs/\u524d\u7aef/Vue/Vue \u751f\u6001/\u72b6\u6001\u7ba1\u7406/Vuex/index.mdx","sourceDirName":"\u524d\u7aef/Vue/Vue \u751f\u6001/\u72b6\u6001\u7ba1\u7406/Vuex","slug":"/\u524d\u7aef/Vue/Vue \u751f\u6001/\u72b6\u6001\u7ba1\u7406/Vuex/","permalink":"/docs/\u524d\u7aef/Vue/Vue \u751f\u6001/\u72b6\u6001\u7ba1\u7406/Vuex/","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u524d\u7aef/Vue/Vue \u751f\u6001/\u72b6\u6001\u7ba1\u7406/Vuex/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Vuex","authors":[],"tags":[]},"sidebar":"\u524d\u7aef","previous":{"title":"Pinia","permalink":"/docs/\u524d\u7aef/Vue/Vue \u751f\u6001/\u72b6\u6001\u7ba1\u7406/Pinia/"},"next":{"title":"\u4ece 3.x \u8fc1\u79fb\u5230 4.0","permalink":"/docs/\u524d\u7aef/Vue/Vue \u751f\u6001/\u72b6\u6001\u7ba1\u7406/Vuex/\u4ece 3.x \u8fc1\u79fb\u5230 4.0"}}');var r=t(25105),a=t(93881);const o={title:"Vuex",authors:[],tags:[]},u=void 0,i={},c=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u5e94\u7528",id:"\u5e94\u7528",level:2},{value:"API",id:"api",level:2}];function l(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:["\n",(0,r.jsx)(n.p,{children:"Vue \u7684\u5b98\u65b9\u72b6\u6001\u7ba1\u7406\u5e93\u5df2\u66f4\u6539\u4e3a Pinia\u3002Vuex \u662f Vue.js \u5e94\u7528\u7a0b\u5e8f\u7684\u72b6\u6001\u7ba1\u7406\u6a21\u5f0f + \u5e93\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"pnpm add vuex\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import { createStore } from "vuex";\n\n// Create a new store instance.\nconst store = createStore({\n  state() {\n    return {\n      count: 0,\n    };\n  },\n  mutations: {\n    increment(state) {\n      state.count++;\n    },\n  },\n});\n\nexport default store;\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u5e94\u7528",children:"\u5e94\u7528"}),"\n",(0,r.jsx)(n.p,{children:"main.ts"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"const app = createApp({ /* your root component */ })\n\n// Install the store instance as a plugin\napp.use(store)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"- State\uff08\u72b6\u6001\uff09\uff1a\u5b58\u50a8\u5e94\u7528\u7684\u72b6\u6001\u6570\u636e\u3002\n- Getters\uff08\u83b7\u53d6\u5668\uff09\uff1a\u7528\u4e8e\u4ece state \u4e2d\u6d3e\u751f\u51fa\u72b6\u6001\uff0c\u7c7b\u4f3c\u4e8e\u8ba1\u7b97\u5c5e\u6027\u3002\n- Mutations\uff08\u53d8\u66f4\uff09\uff1a\u7528\u4e8e\u540c\u6b65\u5730\u66f4\u6539 state \u7684\u65b9\u6cd5\u3002\n- Actions\uff08\u52a8\u4f5c\uff09\uff1a\u7528\u4e8e\u63d0\u4ea4 mutations\uff0c\u53ef\u4ee5\u5305\u542b\u4efb\u610f\u5f02\u6b65\u64cd\u4f5c\u3002\n- Modules\uff08\u6a21\u5757\uff09\uff1a\u5c06 store \u5206\u5272\u6210\u6a21\u5757\uff0c\u6bcf\u4e2a\u6a21\u5757\u62e5\u6709\u81ea\u5df1\u7684 state\u3001getters\u3001mutations\u3001actions\u3002\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},93881:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>u});var s=t(58101);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);