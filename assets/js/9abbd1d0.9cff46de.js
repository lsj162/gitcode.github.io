"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8108],{2696:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"\u524d\u7aef/TypeScript/API \u624b\u518c/JSX/declare \u5173\u952e\u5b57","title":"JSX","description":"JSX \u662f\u4e00\u79cd\u53ef\u5d4c\u5165\u7684\u7c7b\u4f3c XML \u7684\u8bed\u6cd5\u3002\u5b83\u65e8\u5728\u8f6c\u6362\u4e3a\u6709\u6548\u7684 JavaScript\uff0c\u5c3d\u7ba1\u8fd9\u79cd\u8f6c\u6362\u7684\u8bed\u4e49\u662f\u7279\u5b9a\u4e8e\u5b9e\u73b0\u7684\u3002JSX \u56e0 React \u6846\u67b6\u800c\u6d41\u884c\u8d77\u6765\uff0c\u4f46\u6b64\u540e\u4e5f\u6709\u5176\u4ed6\u5b9e\u73b0\u3002TypeScript \u652f\u6301\u5d4c\u5165\u3001\u7c7b\u578b\u68c0\u67e5\u548c\u5c06 JSX \u76f4\u63a5\u7f16\u8bd1\u4e3a JavaScript\u3002","source":"@site/docs/\u524d\u7aef/TypeScript/API \u624b\u518c/JSX/declare \u5173\u952e\u5b57.mdx","sourceDirName":"\u524d\u7aef/TypeScript/API \u624b\u518c/JSX","slug":"/\u524d\u7aef/TypeScript/API \u624b\u518c/JSX/declare \u5173\u952e\u5b57","permalink":"/docs/\u524d\u7aef/TypeScript/API \u624b\u518c/JSX/declare \u5173\u952e\u5b57","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u524d\u7aef/TypeScript/API \u624b\u518c/JSX/declare \u5173\u952e\u5b57.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"\u524d\u7aef","previous":{"title":"\u679a\u4e3e","permalink":"/docs/\u524d\u7aef/TypeScript/API \u624b\u518c/Enum \u7c7b\u578b/"},"next":{"title":"tsconfig.json \u6587\u4ef6","permalink":"/docs/\u524d\u7aef/TypeScript/API \u624b\u518c/tsconfig.json\u6587\u4ef6/"}}');var c=t(5105),o=t(3881);const s={},p="JSX",i={},a=[];function d(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"jsx",children:"JSX"})}),"\n",(0,c.jsx)(n.p,{children:"JSX \u662f\u4e00\u79cd\u53ef\u5d4c\u5165\u7684\u7c7b\u4f3c XML \u7684\u8bed\u6cd5\u3002\u5b83\u65e8\u5728\u8f6c\u6362\u4e3a\u6709\u6548\u7684 JavaScript\uff0c\u5c3d\u7ba1\u8fd9\u79cd\u8f6c\u6362\u7684\u8bed\u4e49\u662f\u7279\u5b9a\u4e8e\u5b9e\u73b0\u7684\u3002JSX \u56e0 React \u6846\u67b6\u800c\u6d41\u884c\u8d77\u6765\uff0c\u4f46\u6b64\u540e\u4e5f\u6709\u5176\u4ed6\u5b9e\u73b0\u3002TypeScript \u652f\u6301\u5d4c\u5165\u3001\u7c7b\u578b\u68c0\u67e5\u548c\u5c06 JSX \u76f4\u63a5\u7f16\u8bd1\u4e3a JavaScript\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-TypeScript",children:"// TypeScript \u4e0d\u5141\u8bb8\u5728.tsx\u6587\u4ef6\u4e2d\u4f7f\u7528\u5c16\u62ec\u53f7\u7c7b\u578b\u65ad\u8a00\u3002\u53ef\u4ee5\u4f7f\u7528 as\u3002\nconst foo = bar as Foo;\n\n// \u51fd\u6570\u7ec4\u4ef6\ninterface FooProp {\n  name: string;\n  X: number;\n  Y: number;\n}\n\nfunction ComponentFoo(prop: FooProp) {\n  return <></>\n}\n\n// \u7c7b\u7ec4\u4ef6\ud83d\udeae\ninterface PropsType {\n  children: JSX.Element\n  name: string\n}\n\nclass Component extends React.Component<PropsType, {}> {\n  render() {\n    return (\n      <h2>\n        {this.props.children}\n      </h2>\n    )\n  }\n}\n\n"})}),"\n",(0,c.jsx)(n.h1,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/jsx.html",children:"https://www.typescriptlang.org/docs/handbook/jsx.html"})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},3881:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>p});var r=t(8101);const c={},o=r.createContext(c);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);