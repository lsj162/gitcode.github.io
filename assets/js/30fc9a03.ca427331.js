"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26],{2798:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>u,metadata:()=>s,toc:()=>f});const s=JSON.parse('{"id":"\u524d\u7aef/React/API/Hooks/useLayoutEffect","title":"useLayoutEffect","description":"useLayoutEffect \u662f useEffect \u7684\u4e00\u4e2a\u7248\u672c\uff0c\u5728\u6d4f\u89c8\u5668\u91cd\u65b0\u7ed8\u5236\u5c4f\u5e55\u4e4b\u524d\u89e6\u53d1\u3002","source":"@site/docs/\u524d\u7aef/React/API/Hooks/useLayoutEffect.mdx","sourceDirName":"\u524d\u7aef/React/API/Hooks","slug":"/\u524d\u7aef/React/API/Hooks/useLayoutEffect","permalink":"/docs/\u524d\u7aef/React/API/Hooks/useLayoutEffect","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u524d\u7aef/React/API/Hooks/useLayoutEffect.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"\u524d\u7aef","previous":{"title":"useImperativeHandle","permalink":"/docs/\u524d\u7aef/React/API/Hooks/useImperativeHandle"},"next":{"title":"useMemo","permalink":"/docs/\u524d\u7aef/React/API/Hooks/useMemo"}}');var n=o(5105),c=o(3881);const u={},r="useLayoutEffect",a={},f=[];function i(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"uselayouteffect",children:"useLayoutEffect"})}),"\n",(0,n.jsx)(t.p,{children:"useLayoutEffect \u662f useEffect \u7684\u4e00\u4e2a\u7248\u672c\uff0c\u5728\u6d4f\u89c8\u5668\u91cd\u65b0\u7ed8\u5236\u5c4f\u5e55\u4e4b\u524d\u89e6\u53d1\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u9677\u9631\uff0c\u6700\u597d\u7981\u6b62\u4f7f\u7528 useLayoutEffect \u53ef\u80fd\u4f1a\u5f71\u54cd\u6027\u80fd\u3002\u5c3d\u53ef\u80fd\u4f7f\u7528 useEffect\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-JSX",children:'import { useState, useRef, useLayoutEffect } from "react";\n\nfunction Tooltip() {\n  const ref = useRef(null);\n  const [tooltipHeight, setTooltipHeight] = useState(0);\n\n  useLayoutEffect(() => {\n    const { height } = ref.current.getBoundingClientRect();\n    setTooltipHeight(height);\n  }, []);\n}\n'})})]})}function l(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},3881:(e,t,o)=>{o.d(t,{R:()=>u,x:()=>r});var s=o(8101);const n={},c=s.createContext(n);function u(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:u(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);