"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7804],{42878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"\u524d\u7aef/React/API \u624b\u518c/React V16 \ud83d\udeae/\u5f15\u5165 Hooks/Hooks/useCallback","title":"useCallback","description":"useCallback \u662f\u4e00\u4e2a\u5141\u8bb8\u4f60\u5728\u591a\u6b21\u6e32\u67d3\u4e2d\u7f13\u5b58\u51fd\u6570\u7684 React Hook\u3002","source":"@site/docs/\u524d\u7aef/React/API \u624b\u518c/React V16 \ud83d\udeae/\u5f15\u5165 Hooks/Hooks/useCallback.mdx","sourceDirName":"\u524d\u7aef/React/API \u624b\u518c/React V16 \ud83d\udeae/\u5f15\u5165 Hooks/Hooks","slug":"/\u524d\u7aef/React/API \u624b\u518c/React V16 \ud83d\udeae/\u5f15\u5165 Hooks/Hooks/useCallback","permalink":"/docs/\u524d\u7aef/React/API \u624b\u518c/React V16 \ud83d\udeae/\u5f15\u5165 Hooks/Hooks/useCallback","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u524d\u7aef/React/API \u624b\u518c/React V16 \ud83d\udeae/\u5f15\u5165 Hooks/Hooks/useCallback.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"\u524d\u7aef","previous":{"title":"Suspense","permalink":"/docs/\u524d\u7aef/React/API \u624b\u518c/React V16 \ud83d\udeae/\u5185\u7f6e\u7ec4\u4ef6/Suspense"},"next":{"title":"useContext","permalink":"/docs/\u524d\u7aef/React/API \u624b\u518c/React V16 \ud83d\udeae/\u5f15\u5165 Hooks/Hooks/useContext"}}');var o=n(25105),c=n(93881);const a={},r="useCallback",l={},u=[];function i(e){const t={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"usecallback",children:"useCallback"})}),"\n",(0,o.jsx)(t.p,{children:"useCallback \u662f\u4e00\u4e2a\u5141\u8bb8\u4f60\u5728\u591a\u6b21\u6e32\u67d3\u4e2d\u7f13\u5b58\u51fd\u6570\u7684 React Hook\u3002\n\u4f60\u9700\u8981\u4f20\u9012\u4e24\u4e2a\u53c2\u6570\u7ed9 useCallback\uff1a"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"\u5728\u591a\u6b21\u6e32\u67d3\u4e2d\u9700\u8981\u7f13\u5b58\u7684\u51fd\u6570"}),"\n",(0,o.jsx)(t.li,{children:"\u51fd\u6570\u5185\u90e8\u9700\u8981\u4f7f\u7528\u5230\u7684\u6240\u6709\u7ec4\u4ef6\u5185\u90e8\u503c\u7684 \u4f9d\u8d56\u5217\u8868\u3002"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-JSX",children:'import { useCallback } from "react";\n\nfunction ProductPage({ productId, referrer, theme }) {\n  const handleSubmit = useCallback(\n    (orderDetails) => {\n      post("/product/" + productId + "/buy", {\n        referrer,\n        orderDetails,\n      });\n    },\n    [productId, referrer]\n  );\n\n  // ...\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},93881:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(58101);const o={},c=s.createContext(o);function a(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);