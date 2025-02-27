"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8850],{2408:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"\u524d\u7aef/\u96c6\u6210\u6d4b\u8bd5/lint/Eslint","title":"Eslint","description":"ESLint \u4f1a\u9759\u6001\u5206\u6790\u60a8\u7684\u4ee3\u7801\u4ee5\u5feb\u901f\u53d1\u73b0\u95ee\u9898\u3002\u5b83\u5185\u7f6e\u4e8e\u5927\u591a\u6570\u6587\u672c\u7f16\u8f91\u5668\u4e2d\uff0c\u60a8\u53ef\u4ee5\u5c06 ESLint \u4f5c\u4e3a\u6301\u7eed\u96c6\u6210\u7ba1\u9053\u7684\u4e00\u90e8\u5206\u8fd0\u884c\u3002","source":"@site/docs/\u524d\u7aef/\u96c6\u6210\u6d4b\u8bd5/lint/Eslint.mdx","sourceDirName":"\u524d\u7aef/\u96c6\u6210\u6d4b\u8bd5/lint","slug":"/\u524d\u7aef/\u96c6\u6210\u6d4b\u8bd5/lint/Eslint","permalink":"/docs/\u524d\u7aef/\u96c6\u6210\u6d4b\u8bd5/lint/Eslint","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u524d\u7aef/\u96c6\u6210\u6d4b\u8bd5/lint/Eslint.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"\u524d\u7aef","previous":{"title":"SVG","permalink":"/docs/\u524d\u7aef/\u56fe\u5f62\u53ef\u89c6\u5316/Svg/"},"next":{"title":"commitlint","permalink":"/docs/\u524d\u7aef/\u96c6\u6210\u6d4b\u8bd5/lint/commitlint"}}');var s=t(5105),l=t(7890);const o={},r="Eslint",c={},d=[{value:"\u89c4\u5219",id:"\u89c4\u5219",level:2},{value:"\u65e7\u7684\u914d\u7f6e\uff0c\u5f85\u5220\u9664",id:"\u65e7\u7684\u914d\u7f6e\u5f85\u5220\u9664",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}];function a(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"eslint",children:"Eslint"})}),"\n",(0,s.jsx)(e.p,{children:"ESLint \u4f1a\u9759\u6001\u5206\u6790\u60a8\u7684\u4ee3\u7801\u4ee5\u5feb\u901f\u53d1\u73b0\u95ee\u9898\u3002\u5b83\u5185\u7f6e\u4e8e\u5927\u591a\u6570\u6587\u672c\u7f16\u8f91\u5668\u4e2d\uff0c\u60a8\u53ef\u4ee5\u5c06 ESLint \u4f5c\u4e3a\u6301\u7eed\u96c6\u6210\u7ba1\u9053\u7684\u4e00\u90e8\u5206\u8fd0\u884c\u3002"}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsxs)(e.p,{children:["ESLint 2024 \u5e74\u56de\u987e\n2024 \u5e74\u53d1\u5e03\u4e86 ESLint v9.0.0 \u5e76\u5f15\u5165\u4e86\u8bed\u8a00\u63d2\u4ef6\u3002",(0,s.jsx)(e.a,{href:"https://eslint.org/docs/latest/use/configure/migration-guide",children:"\ud83d\ude04 \u914d\u7f6e\u8fc1\u79fb\u6307\u5357"})]})}),"\n",(0,s.jsx)(e.h2,{id:"\u89c4\u5219",children:"\u89c4\u5219"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["jsx ",(0,s.jsx)(e.code,{children:"<Fragment>"})," \u901a\u5e38\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"<>...</>"})," \u4ee3\u66ff\uff0ceslint \u9ed8\u8ba4\u4e0d\u88ab\u652f\u6301\uff1f"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u65e7\u7684\u914d\u7f6e\u5f85\u5220\u9664",children:"\u65e7\u7684\u914d\u7f6e\uff0c\u5f85\u5220\u9664"}),"\n",(0,s.jsxs)(e.admonition,{type:"note",children:[(0,s.jsx)(e.p,{children:"package.json \u4e0d\u518d\u652f\u6301\u7684\u914d\u7f6e\n\u4f7f\u7528 eslintrc\uff0c\u53ef\u4ee5\u4f7f\u7528 package.json \u6587\u4ef6\u901a\u8fc7 eslintConfig \u5bc6\u94a5\u914d\u7f6e ESLint\u3002"}),(0,s.jsx)(e.p,{children:"\u4f7f\u7528\u5e73\u9762\u914d\u7f6e\u540e\uff0c\u4e0d\u518d\u53ef\u80fd\u4f7f\u7528 package.json \u6587\u4ef6\u6765\u914d\u7f6e ESLint\u3002\u60a8\u9700\u8981\u5c06\u914d\u7f6e\u79fb\u81f3\u5355\u72ec\u7684\u6587\u4ef6\u4e2d\u3002"})]}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://eslint.org/",children:"https://eslint.org/"})})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},7890:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>r});var i=t(8101);const s={},l=i.createContext(s);function o(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);