"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2289],{3881:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var o=t(8101);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}},3910:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"\u540e\u7aef/\u6570\u636e\u5e93/MongoDB/Api/\u805a\u5408/index","title":"\u805a\u5408","description":"\u6ca1\u6709\u7d22\u5f15\uff0cMongoDB \u5fc5\u987b\u6267\u884c\u96c6\u5408\u626b\u63cf\uff0c\u5373\u626b\u63cf\u96c6\u5408\u4e2d\u7684\u6bcf\u4e2a\u6587\u6863\u3002","source":"@site/docs/\u540e\u7aef/\u6570\u636e\u5e93/MongoDB/Api/\u805a\u5408/index.mdx","sourceDirName":"\u540e\u7aef/\u6570\u636e\u5e93/MongoDB/Api/\u805a\u5408","slug":"/\u540e\u7aef/\u6570\u636e\u5e93/MongoDB/Api/\u805a\u5408/","permalink":"/docs/\u540e\u7aef/\u6570\u636e\u5e93/MongoDB/Api/\u805a\u5408/","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u540e\u7aef/\u6570\u636e\u5e93/MongoDB/Api/\u805a\u5408/index.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"\u540e\u7aef","previous":{"title":"\u7d22\u5f15","permalink":"/docs/\u540e\u7aef/\u6570\u636e\u5e93/MongoDB/Api/\u7d22\u5f15/"},"next":{"title":"\u89d2\u8272\u6743\u9650","permalink":"/docs/\u540e\u7aef/\u6570\u636e\u5e93/MongoDB/Api/\u89d2\u8272\u6743\u9650/"}}');var r=t(5105),a=t(3881);const i={},s="\u805a\u5408",d={},c=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u805a\u5408",children:"\u805a\u5408"})}),"\n",(0,r.jsx)(n.p,{children:"\u6ca1\u6709\u7d22\u5f15\uff0cMongoDB \u5fc5\u987b\u6267\u884c\u96c6\u5408\u626b\u63cf\uff0c\u5373\u626b\u63cf\u96c6\u5408\u4e2d\u7684\u6bcf\u4e2a\u6587\u6863\u3002\n\u60a8\u4e0d\u80fd\u5728_id \u5b57\u6bb5\u4e0a\u5220\u9664\u6b64\u7d22\u5f15\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mongo",children:"db.collection.aggregate( [ { <stage> }, ... ] )\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4f8b\u5b50",children:"\u4f8b\u5b50"}),"\n",(0,r.jsx)(n.p,{children:"\u805a\u5408\u7ba1\u9053\u9636\u6bb5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mongo",children:'db.orders.aggregate([\n  // Stage 1: Filter pizza order documents by date range\n  {\n    $match: {\n      date: {\n        $gte: new ISODate("2020-01-30"),\n        $lt: new ISODate("2022-01-30"),\n      },\n    },\n  },\n\n  // Stage 2: Group remaining documents by date and calculate results\n  {\n    $group: {\n      _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },\n      totalOrderValue: { $sum: { $multiply: ["$price", "$quantity"] } },\n      averageOrderQuantity: { $avg: "$quantity" },\n    },\n  },\n\n  // Stage 3: Sort documents by totalOrderValue in descending order\n  {\n    $sort: { totalOrderValue: -1 },\n  },\n]);\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);