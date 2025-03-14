"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3824],{3881:(e,n,t)=>{t.d(n,{R:()=>u,x:()=>a});var s=t(8101);const r={},o=s.createContext(r);function u(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:u(e.components),s.createElement(o.Provider,{value:n},e.children)}},7509:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>u,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"\u524d\u7aef/Vue\ud83d\udeae/Vue \u751f\u6001/\u72b6\u6001\u7ba1\u7406/Vuex/index","title":"Vuex","description":"{/ truncate /}","source":"@site/docs/\u524d\u7aef/Vue\ud83d\udeae/Vue \u751f\u6001/\u72b6\u6001\u7ba1\u7406/Vuex/index.mdx","sourceDirName":"\u524d\u7aef/Vue\ud83d\udeae/Vue \u751f\u6001/\u72b6\u6001\u7ba1\u7406/Vuex","slug":"/\u524d\u7aef/Vue\ud83d\udeae/Vue \u751f\u6001/\u72b6\u6001\u7ba1\u7406/Vuex/","permalink":"/docs/\u524d\u7aef/Vue\ud83d\udeae/Vue \u751f\u6001/\u72b6\u6001\u7ba1\u7406/Vuex/","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u524d\u7aef/Vue\ud83d\udeae/Vue \u751f\u6001/\u72b6\u6001\u7ba1\u7406/Vuex/index.mdx","tags":[],"version":"current","frontMatter":{"title":"Vuex","date":"2021-09-13T10:00","authors":[],"tags":[]},"sidebar":"\u524d\u7aef","previous":{"title":"Pinia","permalink":"/docs/\u524d\u7aef/Vue\ud83d\udeae/Vue \u751f\u6001/\u72b6\u6001\u7ba1\u7406/Pinia/"},"next":{"title":"Vue Router","permalink":"/docs/\u524d\u7aef/Vue\ud83d\udeae/Vue \u751f\u6001/\u8def\u7531/Vue Router/"}}');var r=t(5105),o=t(3881);const u={title:"Vuex",date:"2021-09-13T10:00",authors:[],tags:[]},a=void 0,c={},i=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u5e94\u7528",id:"\u5e94\u7528",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:["\n",(0,r.jsx)(n.p,{children:"Vue \u7684\u5b98\u65b9\u72b6\u6001\u7ba1\u7406\u5e93\u5df2\u66f4\u6539\u4e3a Pinia\u3002Vuex \u662f Vue.js \u5e94\u7528\u7a0b\u5e8f\u7684\u72b6\u6001\u7ba1\u7406\u6a21\u5f0f + \u5e93\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"pnpm add vuex\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import { createStore } from "vuex";\n\n// Create a new store instance.\nconst store = createStore({\n  state() {\n    return {\n      count: 0,\n    };\n  },\n  mutations: {\n    increment(state) {\n      state.count++;\n    },\n  },\n});\n\nexport default store;\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u5e94\u7528",children:"\u5e94\u7528"}),"\n",(0,r.jsx)(n.p,{children:"main.ts"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"const app = createApp({ /* your root component */ })\n\n// Install the store instance as a plugin\napp.use(store)\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);