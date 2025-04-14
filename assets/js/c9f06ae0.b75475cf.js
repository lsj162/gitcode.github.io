"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5817],{35519:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"\u5ba2\u6237\u7aef/\u684c\u9762\u7aef/Tauri/\u5b89\u88c5/\u73af\u5883\u642d\u5efa","title":"\u5b89\u88c5","description":"\u5b89\u88c5 Rust \u53ca\u5176\u4ed6\u7cfb\u7edf\u4f9d\u8d56 nodejs\uff0cnpm/pnpm\uff0cgit\uff0cvscode \u7b49\u5fc5\u987b\u5de5\u5177\u3002","source":"@site/docs/\u5ba2\u6237\u7aef/\u684c\u9762\u7aef/Tauri/\u5b89\u88c5/\u73af\u5883\u642d\u5efa.md","sourceDirName":"\u5ba2\u6237\u7aef/\u684c\u9762\u7aef/Tauri/\u5b89\u88c5","slug":"/\u5ba2\u6237\u7aef/\u684c\u9762\u7aef/Tauri/\u5b89\u88c5/\u73af\u5883\u642d\u5efa","permalink":"/docs/\u5ba2\u6237\u7aef/\u684c\u9762\u7aef/Tauri/\u5b89\u88c5/\u73af\u5883\u642d\u5efa","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u5ba2\u6237\u7aef/\u684c\u9762\u7aef/Tauri/\u5b89\u88c5/\u73af\u5883\u642d\u5efa.md","tags":[],"version":"current","frontMatter":{},"sidebar":"\u5ba2\u6237\u7aef","previous":{"title":"Tauri","permalink":"/docs/\u5ba2\u6237\u7aef/\u684c\u9762\u7aef/Tauri/"},"next":{"title":"\u5e38\u89c1\u9519\u8bef","permalink":"/docs/\u5ba2\u6237\u7aef/\u684c\u9762\u7aef/Tauri/\u5e38\u89c1\u9519\u8bef/"}}');var s=r(25105),i=r(93881);const a={},o="\u5b89\u88c5",c={},d=[{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u751f\u6210\u7684\u76ee\u5f55\u7ed3\u6784",id:"\u751f\u6210\u7684\u76ee\u5f55\u7ed3\u6784",level:2},{value:"\u542f\u52a8 Tauri \u5f00\u53d1\u7a97\u53e3",id:"\u542f\u52a8-tauri-\u5f00\u53d1\u7a97\u53e3",level:2},{value:"\u7f16\u8bd1\u6253\u5305",id:"\u7f16\u8bd1\u6253\u5305",level:2},{value:"\u62a5\u9519",id:"\u62a5\u9519",level:2}];function l(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"})}),"\n",(0,s.jsx)(e.p,{children:"::: info \u7cfb\u7edf\u73af\u5883\n\u5b89\u88c5 Rust \u53ca\u5176\u4ed6\u7cfb\u7edf\u4f9d\u8d56 nodejs\uff0cnpm/pnpm\uff0cgit\uff0cvscode \u7b49\u5fc5\u987b\u5de5\u5177\u3002\n:::"}),"\n",(0,s.jsx)(e.p,{children:"::: warning\n\u5c3d\u7ba1 Rust \u7684\u8bed\u6cd5\u548c C++\u76f8\u4f3c\uff0cRust \u5728\u7f16\u7a0b\u8bed\u8a00\u96be\u5ea6\u6392\u540d\u4e2d\u4f4d\u5c45\u699c\u9996\uff08\u65e0\u7528\u6b66\u4e4b\u5730\u8bdd\uff0c\u614e\u91cd\uff09\uff0c\u7ee7\u7eed\u4f53\u9a8c\u3002\n:::"}),"\n",(0,s.jsx)(e.h2,{id:"\u521d\u59cb\u5316",children:"\u521d\u59cb\u5316"}),"\n",(0,s.jsx)(e.p,{children:"\u5b98\u65b9\u63a8\u8350\u60a8\u4f7f\u7528 create-tauri-app \u6765\u8f7b\u677e\u5feb\u901f\u5730\u521b\u5efa\u4e00\u4e2a\u65b0 Tauri \u9879\u76ee\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:"pnpm create tauri-app\npnpm i\n\n# \u8fd9\u91cc\u9009\u62e9\u81ea\u5df1\u719f\u6089\u7684\u8bed\u8a00\u5f00\u53d1\uff0c\u6bd4\u5982\uff1a\n\u2714 Project name \xb7 tauri-app\n\u2714 Choose which language to use for your frontend \xb7 TypeScript / JavaScript - (pnpm, yarn, npm, bun)\n\u2714 Choose your package manager \xb7 pnpm\n\u2714 Choose your UI template \xb7 React - (https://react.dev/)\n\u2714 Choose your UI flavor \xb7 TypeScript\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u751f\u6210\u7684\u76ee\u5f55\u7ed3\u6784",children:"\u751f\u6210\u7684\u76ee\u5f55\u7ed3\u6784"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-md",children:"- tauri-app\n  - .vscode\n  - node_modules \u5b89\u88c5\u5305\n  - public \u516c\u5171\u6587\u4ef6\n  - src \u6e90\u4ee3\u7801\u4f4d\u7f6e\n    - assets\n    - App.tsx\n    - main.tsx\n  - src-tauri\n    - icons\n    - src\n      - main.ts\n    - build.rs\n    - Cargo.toml \u914d\u7f6e rust \u6587\u4ef6\n    - tauri.conf.json \u914d\u7f6e tauri \u6587\u4ef6\n  - .gitignore\n  - index.html \u9996\u9875\n  - package.json \u914d\u7f6e\n  - tsconfig.json \u914d\u7f6e ts \u6587\u4ef6\n  - tsconfig.node.json \u914d\u7f6e ts-node \u6587\u4ef6\n  - vite.config.ts \u914d\u7f6e vite \u6587\u4ef6\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u542f\u52a8-tauri-\u5f00\u53d1\u7a97\u53e3",children:"\u542f\u52a8 Tauri \u5f00\u53d1\u7a97\u53e3"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:"# \u751f\u6210\u7acb\u5373\u9884\u89c8\npnpm tauri dev\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u7f16\u8bd1\u6253\u5305",children:"\u7f16\u8bd1\u6253\u5305"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:"pnpm build\n\n# \u751f\u6210\n- dist \u6587\u4ef6\n\npnpm tauri build\n\n# \u751f\u6210\u5b89\u88c5\u5305\uff0c\u6bd4\u5982macOS\u4e0a\u521b\u5efa.dmg\u6346\u7ed1\u6587\u4ef6\uff0c\u56e0\u6b64\u4ea4\u53c9\u7f16\u8bd1\u8fd8\u4e0d\u80fd\u5de5\u4f5c\u3002\n- ./src-tauri/target/release/bundle\n"})}),"\n",(0,s.jsxs)(e.p,{children:["::: warning ","\ud83c\udf89","\n\u81f3\u6b64\uff0chello world \u5df2\u5b8c\u6210\uff1b\n:::"]}),"\n",(0,s.jsx)(e.h2,{id:"\u62a5\u9519",children:"\u62a5\u9519"}),"\n",(0,s.jsxs)(e.p,{children:["VScode \u7ec8\u7aef\u8fd0\u884c",(0,s.jsx)(e.code,{children:" pnpm tauri build"}),"\uff1a Error failed to bundle project: error running bundle_dmg.sh"]}),"\n",(0,s.jsx)(e.p,{children:"\u6253\u5305\u4e00\u5207\u6b63\u5e38\uff0c\u53ea\u662f\u6700\u540e\u8fd0\u884c\u6743\u9650\u4e0d\u8db3\uff0c\u53ef\u4ee5\u4f7f\u7528\u7ba1\u7406\u5458\u6743\u9650\u7cfb\u7edf\u7ec8\u7aef\u8fd0\u884c\uff1b"})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},93881:(n,e,r)=>{r.d(e,{R:()=>a,x:()=>o});var t=r(58101);const s={},i=t.createContext(s);function a(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);