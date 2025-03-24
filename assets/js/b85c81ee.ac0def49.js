"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3598],{3881:(n,e,c)=>{c.d(e,{R:()=>i,x:()=>r});var t=c(8101);const s={},a=t.createContext(s);function i(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),t.createElement(a.Provider,{value:e},n.children)}},5660:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"\u524d\u7aef/EcmaScript/EcmaScript2015/async \u51fd\u6570/index","title":"async \u51fd\u6570","description":"Generator \u51fd\u6570\u7684\u8bed\u6cd5\u7cd6\uff0c\u5c06 Generator \u51fd\u6570\u7684\u661f\u53f7\uff08\\\\*\uff09\u66ff\u6362\u6210 async\uff0c\u5c06 yield \u66ff\u6362\u6210 await\u3002ES2017 \u6807\u51c6\u5f15\u5165\u4e86 async \u51fd\u6570\uff0c\u4f7f\u5f97\u5f02\u6b65\u64cd\u4f5c\u53d8\u5f97\u66f4\u52a0\u65b9\u4fbf\u3002","source":"@site/docs/\u524d\u7aef/EcmaScript/EcmaScript2015/async \u51fd\u6570/index.mdx","sourceDirName":"\u524d\u7aef/EcmaScript/EcmaScript2015/async \u51fd\u6570","slug":"/\u524d\u7aef/EcmaScript/EcmaScript2015/async \u51fd\u6570/","permalink":"/docs/\u524d\u7aef/EcmaScript/EcmaScript2015/async \u51fd\u6570/","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u524d\u7aef/EcmaScript/EcmaScript2015/async \u51fd\u6570/index.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"\u524d\u7aef","previous":{"title":"index","permalink":"/docs/\u524d\u7aef/EcmaScript/EcmaScript2015/WebAssembly/"},"next":{"title":"HTML","permalink":"/docs/\u524d\u7aef/HTML\uff08DOM\u5bf9\u8c61\u6a21\u578b\uff09/"}}');var s=c(5105),a=c(3881);const i={},r="async \u51fd\u6570",o={},l=[{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"\u9519\u8bef\u5904\u7406\u673a\u5236\u3002",id:"\u9519\u8bef\u5904\u7406\u673a\u5236",level:2},{value:"\u6309\u987a\u5e8f\u5b8c\u6210\u5f02\u6b65\u64cd\u4f5c",id:"\u6309\u987a\u5e8f\u5b8c\u6210\u5f02\u6b65\u64cd\u4f5c",level:2},{value:"\u9876\u5c42 await",id:"\u9876\u5c42-await",level:2}];function d(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"async-\u51fd\u6570",children:"async \u51fd\u6570"})}),"\n",(0,s.jsx)(e.p,{children:"Generator \u51fd\u6570\u7684\u8bed\u6cd5\u7cd6\uff0c\u5c06 Generator \u51fd\u6570\u7684\u661f\u53f7\uff08*\uff09\u66ff\u6362\u6210 async\uff0c\u5c06 yield \u66ff\u6362\u6210 await\u3002ES2017 \u6807\u51c6\u5f15\u5165\u4e86 async \u51fd\u6570\uff0c\u4f7f\u5f97\u5f02\u6b65\u64cd\u4f5c\u53d8\u5f97\u66f4\u52a0\u65b9\u4fbf\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u7279\u70b9",children:"\u7279\u70b9"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5185\u7f6e\u6267\u884c\u5668\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u66f4\u597d\u7684\u8bed\u4e49\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u66f4\u5e7f\u7684\u9002\u7528\u6027\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u8fd4\u56de\u503c\u662f Promise\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u57fa\u672c\u7528\u6cd5",children:"\u57fa\u672c\u7528\u6cd5"}),"\n",(0,s.jsx)(e.p,{children:"\u9047\u5230 await \u5c31\u4f1a\u5148\u8fd4\u56de\uff0c\u7b49\u5230\u5f02\u6b65\u64cd\u4f5c\u5b8c\u6210\uff0c\u518d\u63a5\u7740\u6267\u884c\u51fd\u6570\u4f53\u5185\u540e\u9762\u7684\u8bed\u53e5\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Javascript",children:"// \u51fd\u6570\u58f0\u660e\nasync function foo() {}\n\n// \u51fd\u6570\u8868\u8fbe\u5f0f\nconst foo = async function () {};\n\n// \u5bf9\u8c61\u7684\u65b9\u6cd5\nlet obj = { async foo() {} };\n\n// Class \u7684\u65b9\u6cd5\nclass Storage {\n  async foo(name) {}\n}\n\n// \u7bad\u5934\u51fd\u6570\nconst foo = async () => {};\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9519\u8bef\u5904\u7406\u673a\u5236",children:"\u9519\u8bef\u5904\u7406\u673a\u5236\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'async function f() {\n  await Promise.reject("\u51fa\u9519\u4e86");\n}\n\nf()\n  .then((v) => console.log(v))\n  .catch((e) => console.log(e));\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u6309\u987a\u5e8f\u5b8c\u6210\u5f02\u6b65\u64cd\u4f5c",children:"\u6309\u987a\u5e8f\u5b8c\u6210\u5f02\u6b65\u64cd\u4f5c"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Javascript",children:"async function logInOrder(urls) {\n  // \u5e76\u53d1\u8bfb\u53d6\u8fdc\u7a0bURL\n  const textPromises = urls.map(async (url) => {\n    const response = await fetch(url);\n    return response.text();\n  });\n\n  // \u6309\u6b21\u5e8f\u8f93\u51fa\n  for (const textPromise of textPromises) {\n    console.log(await textPromise);\n  }\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9876\u5c42-await",children:"\u9876\u5c42 await"}),"\n",(0,s.jsx)(e.p,{children:"ES2022 \u5f00\u59cb\uff0c\u5141\u8bb8\u5728\u6a21\u5757\u7684\u9876\u5c42\u72ec\u7acb\u4f7f\u7528 await \u547d\u4ee4\uff0c\u8bbe\u8ba1\u76ee\u7684\u4f7f\u7528 await \u89e3\u51b3\u6a21\u5757\u5f02\u6b65\u52a0\u8f7d\u7684\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:"\u9876\u5c42 await \u53ea\u80fd\u7528\u5728 ES6 \u6a21\u5757\uff0c\u4e0d\u80fd\u7528\u5728 CommonJS \u6a21\u5757\u3002\u8fd9\u662f\u56e0\u4e3a CommonJS \u6a21\u5757\u7684 require()\u662f\u540c\u6b65\u52a0\u8f7d\uff0c\u5982\u679c\u6709\u9876\u5c42 await\uff0c\u5c31\u6ca1\u6cd5\u5904\u7406\u52a0\u8f7d\u4e86\u3002"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Javascript",children:"const strings = await import();\n"})})]})}function p(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}}}]);