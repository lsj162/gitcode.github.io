"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1126],{15867:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"\u524d\u7aef/React/API\u624b\u518c/React V16/\u5185\u7f6e\u7ec4\u4ef6/Suspense","title":"Suspense","description":"\u9010\u6b65\u52a0\u8f7d\u5185\u5bb9\uff0c \u5141\u8bb8\u4f60\u663e\u793a\u4e00\u4e2a\u9000\u8def\u65b9\u6848\uff08fallback\uff09\u76f4\u5230\u5b83\u7684\u5b50\u7ec4\u4ef6\u5b8c\u6210\u52a0\u8f7d\u3002","source":"@site/docs/\u524d\u7aef/React/API\u624b\u518c/React V16/\u5185\u7f6e\u7ec4\u4ef6/Suspense.mdx","sourceDirName":"\u524d\u7aef/React/API\u624b\u518c/React V16/\u5185\u7f6e\u7ec4\u4ef6","slug":"/\u524d\u7aef/React/API\u624b\u518c/React V16/\u5185\u7f6e\u7ec4\u4ef6/Suspense","permalink":"/docs/\u524d\u7aef/React/API\u624b\u518c/React V16/\u5185\u7f6e\u7ec4\u4ef6/Suspense","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u524d\u7aef/React/API\u624b\u518c/React V16/\u5185\u7f6e\u7ec4\u4ef6/Suspense.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"\u524d\u7aef","previous":{"title":"StrictMode","permalink":"/docs/\u524d\u7aef/React/API\u624b\u518c/React V16/\u5185\u7f6e\u7ec4\u4ef6/StrictMode"},"next":{"title":"useCallback","permalink":"/docs/\u524d\u7aef/React/API\u624b\u518c/React V16/\u5f15\u5165 Hooks/Hooks/useCallback"}}');var c=n(25105),o=n(93881);const i={},l="Suspense",r={},a=[{value:"\u8bbe\u8ba1\u76ee\u7684",id:"\u8bbe\u8ba1\u76ee\u7684",level:2},{value:"\u53ea\u6709\u542f\u7528\u4e86 Suspense \u7684\u6570\u636e\u6e90\u624d\u4f1a\u6fc0\u6d3b Suspense \u7ec4\u4ef6\uff0c\u5b83\u4eec\u5305\u62ec\uff1a",id:"\u53ea\u6709\u542f\u7528\u4e86-suspense-\u7684\u6570\u636e\u6e90\u624d\u4f1a\u6fc0\u6d3b-suspense-\u7ec4\u4ef6\u5b83\u4eec\u5305\u62ec",level:3}];function u(e){const s={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.header,{children:(0,c.jsx)(s.h1,{id:"suspense",children:"Suspense"})}),"\n",(0,c.jsxs)(s.p,{children:["\u9010\u6b65\u52a0\u8f7d\u5185\u5bb9\uff0c",(0,c.jsx)(s.code,{children:"<Suspense> "}),"\u5141\u8bb8\u4f60\u663e\u793a\u4e00\u4e2a\u9000\u8def\u65b9\u6848\uff08fallback\uff09\u76f4\u5230\u5b83\u7684\u5b50\u7ec4\u4ef6\u5b8c\u6210\u52a0\u8f7d\u3002"]}),"\n",(0,c.jsx)(s.h2,{id:"\u8bbe\u8ba1\u76ee\u7684",children:"\u8bbe\u8ba1\u76ee\u7684"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\u5f53\u5185\u5bb9\u6b63\u5728\u52a0\u8f7d\u65f6\u663e\u793a\u540e\u5907\u65b9\u6848"}),"\n"]}),"\n",(0,c.jsxs)(s.admonition,{title:"\u6ce8\u610f",type:"tip",children:[(0,c.jsx)(s.h3,{id:"\u53ea\u6709\u542f\u7528\u4e86-suspense-\u7684\u6570\u636e\u6e90\u624d\u4f1a\u6fc0\u6d3b-suspense-\u7ec4\u4ef6\u5b83\u4eec\u5305\u62ec",children:"\u53ea\u6709\u542f\u7528\u4e86 Suspense \u7684\u6570\u636e\u6e90\u624d\u4f1a\u6fc0\u6d3b Suspense \u7ec4\u4ef6\uff0c\u5b83\u4eec\u5305\u62ec\uff1a"}),(0,c.jsxs)(s.ol,{children:["\n",(0,c.jsx)(s.li,{children:"\u4f7f\u7528 lazy \u61d2\u52a0\u8f7d\u7ec4\u4ef6\u4ee3\u7801\u3002"}),"\n",(0,c.jsx)(s.li,{children:"\u4f7f\u7528 use \u8bfb\u53d6\u7f13\u5b58\u7684 Promise \u503c\u3002"}),"\n"]}),(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"Suspense \u65e0\u6cd5 \u68c0\u6d4b\u5728 Effect \u6216\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4e2d\u83b7\u53d6\u6570\u636e\u7684\u60c5\u51b5\u3002"}),"\n"]})]})]})}function d(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},93881:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var t=n(58101);const c={},o=t.createContext(c);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);