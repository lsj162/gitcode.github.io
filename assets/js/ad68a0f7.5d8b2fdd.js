"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6460],{85467:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"\u524d\u7aef/React/React \u751f\u6001/\u670d\u52a1\u7aef\u6e32\u67d3\u6846\u67b6/Nextjs/index","title":"nextjs","description":"1.  nextjs \u670d\u52a1\u7aef\u7ec4\u4ef6\uff0cPage \u9875\u9762\u5982\u4f55\u83b7\u53d6\u5230\u6d4f\u89c8\u5668\u8def\u5f84\u548c\u8bf7\u6c42\u53c2\u6570\uff1f","source":"@site/docs/\u524d\u7aef/React/React \u751f\u6001/\u670d\u52a1\u7aef\u6e32\u67d3\u6846\u67b6/Nextjs/index.mdx","sourceDirName":"\u524d\u7aef/React/React \u751f\u6001/\u670d\u52a1\u7aef\u6e32\u67d3\u6846\u67b6/Nextjs","slug":"/\u524d\u7aef/React/React \u751f\u6001/\u670d\u52a1\u7aef\u6e32\u67d3\u6846\u67b6/Nextjs/","permalink":"/docs/\u524d\u7aef/React/React \u751f\u6001/\u670d\u52a1\u7aef\u6e32\u67d3\u6846\u67b6/Nextjs/","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u524d\u7aef/React/React \u751f\u6001/\u670d\u52a1\u7aef\u6e32\u67d3\u6846\u67b6/Nextjs/index.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"\u524d\u7aef","previous":{"title":"use","permalink":"/docs/\u524d\u7aef/React/API\u624b\u518c/React V19/use/"},"next":{"title":"remix","permalink":"/docs/\u524d\u7aef/React/React \u751f\u6001/\u670d\u52a1\u7aef\u6e32\u67d3\u6846\u67b6/Remix/"}}');var r=t(25105),a=t(93881);const c={},l="nextjs",i={},o=[{value:"\u4f18\u5316\u5efa\u8bae",id:"\u4f18\u5316\u5efa\u8bae",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"nextjs",children:"nextjs"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"nextjs \u670d\u52a1\u7aef\u7ec4\u4ef6\uff0cPage \u9875\u9762\u5982\u4f55\u83b7\u53d6\u5230\u6d4f\u89c8\u5668\u8def\u5f84\u548c\u8bf7\u6c42\u53c2\u6570\uff1f"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u53ef\u4ee5[...page]\u52a8\u6001\u83b7\u53d6"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"api: \u83b7\u53d6\u94fe\u63a5\u53c2\u6570"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { useSearchParams } from "next/navigation";\n\nconst searchParams = useSearchParams();\nconst ref_page = searchParams.get("ref_page");\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"\u73af\u5883\u53d8\u91cf"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const VITE_HOST = process.env.NEXT_PUBLIC_VITE_HOST;\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"nextjs \u52a8\u6001\u52a0\u8f7d react-beautiful-dnd"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import dynamic from "next/dynamic";\n\nconst DragDropContext = dynamic(\n  () => import("react-beautiful-dnd").then((module) => module.DragDropContext),\n  { ssr: false }\n);\nconst Droppable = dynamic(\n  () => import("react-beautiful-dnd").then((module) => module.Droppable),\n  { ssr: false }\n);\nconst Draggable = dynamic(\n  () => import("react-beautiful-dnd").then((module) => module.Draggable),\n  { ssr: false }\n);\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u4f18\u5316\u5efa\u8bae",children:"\u4f18\u5316\u5efa\u8bae"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u63a8\u8350 App \u8def\u7531\uff1b\u8def\u7531 app \u5c06\u4f18\u5148\u4e8e pages\u3002\u6211\u4eec\u5efa\u8bae\u5728\u60a8\u7684\u65b0\u9879\u76ee\u4e2d\u4ec5\u4f7f\u7528\u4e00\u53f0\u8def\u7531\u5668\u4ee5\u907f\u514d\u6df7\u6dc6\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5e76\u884c\u8def\u7531\u63d2\u69fd @folder \u6d4b\u8bd5\u65e0\u6548\uff08\u4f30\u8ba1\u88ab\u79fb\u9664\u4e86\uff09\uff0c\u7981\u6b62\u4f7f\u7528\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://nextjs.org/",children:"https://nextjs.org/"})})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},93881:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var s=t(58101);const r={},a=s.createContext(r);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);