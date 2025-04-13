"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8657],{3881:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(8101);const r={},c=i.createContext(r);function s(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:n},e.children)}},6780:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"\u524d\u7aef/EcmaScript2015/BigInt \u5185\u7f6e\u5bf9\u8c61/index","title":"BigInt \u5185\u7f6e\u5bf9\u8c61","description":"Javascript \u4e2d\u53ef\u4ee5\u7528 Number \u8868\u793a\u7684\u6700\u5927\u6570\u5b57","source":"@site/docs/\u524d\u7aef/EcmaScript2015/BigInt \u5185\u7f6e\u5bf9\u8c61/index.mdx","sourceDirName":"\u524d\u7aef/EcmaScript2015/BigInt \u5185\u7f6e\u5bf9\u8c61","slug":"/\u524d\u7aef/EcmaScript2015/BigInt \u5185\u7f6e\u5bf9\u8c61/","permalink":"/docs/\u524d\u7aef/EcmaScript2015/BigInt \u5185\u7f6e\u5bf9\u8c61/","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u524d\u7aef/EcmaScript2015/BigInt \u5185\u7f6e\u5bf9\u8c61/index.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"\u524d\u7aef","previous":{"title":"ArrayBuffer","permalink":"/docs/\u524d\u7aef/EcmaScript2015/ArrayBuffer \u5bf9\u8c61/"},"next":{"title":"Module \u7684\u8bed\u6cd5","permalink":"/docs/\u524d\u7aef/EcmaScript2015/Module \u7684\u8bed\u6cd5/"}}');var r=t(5105),c=t(3881);const s={},a="BigInt \u5185\u7f6e\u5bf9\u8c61",o={},l=[{value:"\u4f7f\u7528 BigInt",id:"\u4f7f\u7528-bigint",level:2},{value:"\u4e0d\u652f\u6301",id:"\u4e0d\u652f\u6301",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"bigint-\u5185\u7f6e\u5bf9\u8c61",children:"BigInt \u5185\u7f6e\u5bf9\u8c61"})}),"\n",(0,r.jsx)(n.p,{children:"Javascript \u4e2d\u53ef\u4ee5\u7528 Number \u8868\u793a\u7684\u6700\u5927\u6570\u5b57"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Javascript",children:"Number.MAX_SAFE_INTEGER // \u4f7f\u7528 Number.MAX_SAFE_INTEGER\n// 9007199254740991\n\nconst maxSafeInteger = Math.pow(2, 53) - 1; // \u4f7f\u7528 Math.pow()\n// 9007199254740991\n\nconst maxSafeIntegerBitwise = (1 << 53) - 1; // \u4f7f\u7528\u4f4d\u8fd0\u7b97\n\nconst maxBigInt = BigInt(Number.MAX_SAFE_INTEGER); // \u4f7f\u7528 BigInt\n// 9007199254740991n\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528-bigint",children:"\u4f7f\u7528 BigInt"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Javascript",children:'typeof BigInt("9007199254740991") === "bigint"; // true\ntypeof 1n === "bigint"; // true\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u4e0d\u652f\u6301",children:"\u4e0d\u652f\u6301"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e0d\u80fd\u7528\u4e8e Math \u5bf9\u8c61\u4e2d\u7684\u65b9\u6cd5\u3002"}),"\n",(0,r.jsx)(n.li,{children:"BigInt \u4e0d\u652f\u6301\u5355\u76ee (+) \u8fd0\u7b97\u7b26\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4e0d\u80fd\u548c\u4efb\u4f55 Number \u5b9e\u4f8b\u6df7\u5408\u8fd0\u7b97\uff0c\u4e24\u8005\u5fc5\u987b\u8f6c\u6362\u6210\u540c\u4e00\u79cd\u7c7b\u578b\u3002"}),"\n",(0,r.jsx)(n.li,{children:"BigInt \u53d8\u91cf\u5728\u8f6c\u6362\u6210 Number \u53d8\u91cf\u65f6\u53ef\u80fd\u4f1a\u4e22\u5931\u7cbe\u5ea6\u3002"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);