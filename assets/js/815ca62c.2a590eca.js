"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8430],{4485:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"\u540e\u7aef/Nodejs/HelloWorld/JWT/index","title":"JWT","description":"\u4e3a\u4e86\u63d0\u9ad8\u6027\u3002\u670d\u52a1\u5668\u751f\u6210\u65e0\u72b6\u6001 JWT\uff0c\u5ba2\u6237\u7aef\u5b58\u50a8\uff0c\u6bcf\u6b21\u7528\u6237\u8bf7\u6c42\uff0c\u5e26\u4e0a JWT \u4fe1\u606f\uff0c\u540e\u7aef\u89e3\u7801\u6210\u529f\u4ee3\u8868\u8eab\u4efd\u5408\u6cd5\u3002","source":"@site/docs/\u540e\u7aef/Nodejs/HelloWorld/JWT/index.mdx","sourceDirName":"\u540e\u7aef/Nodejs/HelloWorld/JWT","slug":"/\u540e\u7aef/Nodejs/HelloWorld/JWT/","permalink":"/docs/\u540e\u7aef/Nodejs/HelloWorld/JWT/","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u540e\u7aef/Nodejs/HelloWorld/JWT/index.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"\u540e\u7aef","previous":{"title":"\u542f\u52a8nginx\u7f13\u5b58\u9759\u6001\u6587\u4ef6","permalink":"/docs/\u540e\u7aef/Nginx/\u914d\u7f6e/\u542f\u52a8nginx\u7f13\u5b58\u9759\u6001\u6587\u4ef6"},"next":{"title":"koa","permalink":"/docs/\u540e\u7aef/Nodejs/HelloWorld/Koa/"}}');var s=t(5105),l=t(7890);const r={},i="JWT",d={},c=[{value:"\u7b80\u5355\u5165\u95e8",id:"\u7b80\u5355\u5165\u95e8",level:2},{value:"\u6700\u4f73\u5b9e\u8df5\u4e4b\u4e00",id:"\u6700\u4f73\u5b9e\u8df5\u4e4b\u4e00",level:2}];function a(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"jwt",children:"JWT"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4e86\u63d0\u9ad8\u6027\u3002\u670d\u52a1\u5668\u751f\u6210\u65e0\u72b6\u6001 JWT\uff0c\u5ba2\u6237\u7aef\u5b58\u50a8\uff0c\u6bcf\u6b21\u7528\u6237\u8bf7\u6c42\uff0c\u5e26\u4e0a JWT \u4fe1\u606f\uff0c\u540e\u7aef\u89e3\u7801\u6210\u529f\u4ee3\u8868\u8eab\u4efd\u5408\u6cd5\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u7b80\u5355\u5165\u95e8",children:"\u7b80\u5355\u5165\u95e8"}),"\n",(0,s.jsx)(n.p,{children:"\u751f\u6210\uff0c\u9a8c\u8bc1\u3002\u8fd4\u56de\u6709\u6548\uff0c\u65e0\u6548\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df5\u4e4b\u4e00",children:"\u6700\u4f73\u5b9e\u8df5\u4e4b\u4e00"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6a21\u5f0f\u4e00\n\u751f\u6210\u548c\u751f\u6210\u5237\u65b0 token\uff0c\u9a8c\u8bc1\u3002\u8fd4\u56de\u6709\u6548\uff0c\u65e0\u6548\u3002\n\u65e0\u6548\u652f\u6301\u5237\u65b0 token\uff0c\u6709\u6548\uff0c\u66f4\u65b0\u3002\u76f4\u5230\u5237\u65b0 token \u5931\u6548\uff0c\u91cd\u65b0\u767b\u5f55\u3002\n\u65e0\u6cd5\u9000\u51fa\u8bbe\u5907\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6a21\u5f0f\u4e8c\n\u751f\u6210\u548c\u8bb0\u5f55 redis token\uff0c\u9a8c\u8bc1\u3002\u8fd4\u56de\u6709\u6548\uff0c\u65e0\u6548\u3002\n\u65e0\u6548\u652f\u6301\u5237\u65b0 token\uff0c\u6709\u6548\uff0c\u66f4\u65b0\u3002\u76f4\u5230\u8fc7\u671f\u6216\u9000\u51fa\u5bfc\u81f4 token \u4e0d\u5b58\u5728\uff0c\u91cd\u65b0\u767b\u5f55\u3002\n\u5237\u65b0\u65e0\u6548\uff0c\u9000\u51fa\u5176\u4ed6\u8bbe\u5907\u3002"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},7890:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var o=t(8101);const s={},l=o.createContext(s);function r(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);