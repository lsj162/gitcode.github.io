"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7725],{49509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u521b\u5efa\u578b\u6a21\u5f0f/\u5efa\u9020\u8005\u6a21\u5f0f/index","title":"\u5efa\u9020\u8005\u6a21\u5f0f\uff08Builder Pattern\uff09","description":"\u5efa\u9020\u8005\u6a21\u5f0f\uff08Builder Pattern\uff09\u662f\u4e00\u79cd\u521b\u5efa\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u590d\u6742\u5bf9\u8c61\uff0c\u5c06\u5bf9\u8c61\u7684\u6784\u5efa\u8fc7\u7a0b\u4e0e\u5176\u8868\u793a\u5206\u79bb\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u521b\u5efa\u4e0d\u540c\u7c7b\u578b\u7684\u5bf9\u8c61\u3002\u5b83\u5141\u8bb8\u4f60\u9010\u6b65\u6784\u5efa\u4e00\u4e2a\u5bf9\u8c61\uff0c\u540c\u65f6\u5728\u521b\u5efa\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u7075\u6d3b\u5730\u6307\u5b9a\u4e0d\u540c\u7684\u5c5e\u6027\u548c\u53c2\u6570\u3002\u5efa\u9020\u8005\u6a21\u5f0f\u7684\u76ee\u6807\u662f\u521b\u5efa\u4e00\u4e2a\u590d\u6742\u5bf9\u8c61\uff0c\u540c\u65f6\u9690\u85cf\u521b\u5efa\u7684\u7ec6\u8282\u3002","source":"@site/docs/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u521b\u5efa\u578b\u6a21\u5f0f/\u5efa\u9020\u8005\u6a21\u5f0f/index.md","sourceDirName":"\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u521b\u5efa\u578b\u6a21\u5f0f/\u5efa\u9020\u8005\u6a21\u5f0f","slug":"/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u521b\u5efa\u578b\u6a21\u5f0f/\u5efa\u9020\u8005\u6a21\u5f0f/","permalink":"/docs/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u521b\u5efa\u578b\u6a21\u5f0f/\u5efa\u9020\u8005\u6a21\u5f0f/","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u521b\u5efa\u578b\u6a21\u5f0f/\u5efa\u9020\u8005\u6a21\u5f0f/index.md","tags":[],"version":"current","frontMatter":{"outline":"deep"},"sidebar":"\u524d\u7aef","previous":{"title":"\u5de5\u5382\u6a21\u5f0f\uff08Factory Pattern\uff09","permalink":"/docs/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u521b\u5efa\u578b\u6a21\u5f0f/\u5de5\u5382\u6a21\u5f0f"},"next":{"title":"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f\uff08Abstract Factory Pattern\uff09","permalink":"/docs/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u521b\u5efa\u578b\u6a21\u5f0f/\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f/"}}');var s=n(25105),i=n(93881);const c={outline:"deep"},o="\u5efa\u9020\u8005\u6a21\u5f0f\uff08Builder Pattern\uff09",a={},d=[{value:"\u573a\u666f",id:"\u573a\u666f",level:2},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"\u5efa\u9020\u8005\u6a21\u5f0fbuilder-pattern",children:"\u5efa\u9020\u8005\u6a21\u5f0f\uff08Builder Pattern\uff09"})}),"\n",(0,s.jsx)(t.p,{children:"\u5efa\u9020\u8005\u6a21\u5f0f\uff08Builder Pattern\uff09\u662f\u4e00\u79cd\u521b\u5efa\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u590d\u6742\u5bf9\u8c61\uff0c\u5c06\u5bf9\u8c61\u7684\u6784\u5efa\u8fc7\u7a0b\u4e0e\u5176\u8868\u793a\u5206\u79bb\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u521b\u5efa\u4e0d\u540c\u7c7b\u578b\u7684\u5bf9\u8c61\u3002\u5b83\u5141\u8bb8\u4f60\u9010\u6b65\u6784\u5efa\u4e00\u4e2a\u5bf9\u8c61\uff0c\u540c\u65f6\u5728\u521b\u5efa\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u7075\u6d3b\u5730\u6307\u5b9a\u4e0d\u540c\u7684\u5c5e\u6027\u548c\u53c2\u6570\u3002\u5efa\u9020\u8005\u6a21\u5f0f\u7684\u76ee\u6807\u662f\u521b\u5efa\u4e00\u4e2a\u590d\u6742\u5bf9\u8c61\uff0c\u540c\u65f6\u9690\u85cf\u521b\u5efa\u7684\u7ec6\u8282\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u573a\u666f",children:"\u573a\u666f"}),"\n",(0,s.jsx)(t.p,{children:"\u521b\u5efa\u590d\u6742\u5bf9\u8c61\uff1a\u5f53\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u5927\u91cf\u5c5e\u6027\u548c\u914d\u7f6e\u9009\u9879\u7684\u5bf9\u8c61\u65f6\uff0c\u5efa\u9020\u8005\u6a21\u5f0f\u53ef\u4ee5\u5c06\u6784\u5efa\u8fc7\u7a0b\u5206\u89e3\u4e3a\u591a\u4e2a\u6b65\u9aa4\uff0c\u4f7f\u5176\u66f4\u6613\u7ba1\u7406\u548c\u7ef4\u62a4\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u5bf9\u8c61\u7684\u53ef\u914d\u7f6e\u6027\uff1a\u5f53\u5bf9\u8c61\u7684\u5c5e\u6027\u548c\u53c2\u6570\u9700\u8981\u6839\u636e\u4e0d\u540c\u7684\u9700\u6c42\u8fdb\u884c\u914d\u7f6e\u65f6\uff0c\u5efa\u9020\u8005\u6a21\u5f0f\u63d0\u4f9b\u4e86\u4e00\u79cd\u6e05\u6670\u7684\u65b9\u5f0f\u6765\u6307\u5b9a\u8fd9\u4e9b\u914d\u7f6e\u9009\u9879\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u907f\u514d\u8fc7\u591a\u7684\u6784\u9020\u51fd\u6570\u53c2\u6570\uff1a\u5f53\u5bf9\u8c61\u6709\u8bb8\u591a\u53ef\u9009\u53c2\u6570\u65f6\uff0c\u901a\u8fc7\u6784\u9020\u51fd\u6570\u4f20\u9012\u53c2\u6570\u4f1a\u53d8\u5f97\u590d\u6742\uff0c\u5efa\u9020\u8005\u6a21\u5f0f\u53ef\u4ee5\u6539\u5584\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u5b9e\u73b0",children:"\u5b9e\u73b0"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'// \u5efa\u9020\u8005\u7c7b\nclass ProductBuilder {\n  constructor() {\n    this.product = {};\n  }\n\n  setProperty1(value) {\n    this.product.property1 = value;\n    return this;\n  }\n\n  setProperty2(value) {\n    this.product.property2 = value;\n    return this;\n  }\n\n  setProperty3(value) {\n    this.product.property3 = value;\n    return this;\n  }\n\n  build() {\n    return this.product;\n  }\n}\n\n// \u4f7f\u7528\u5efa\u9020\u8005\u521b\u5efa\u5bf9\u8c61\nconst product = new ProductBuilder()\n  .setProperty1("Value 1")\n  .setProperty2("Value 2")\n  .setProperty3("Value 3")\n  .build();\n\nconsole.log(product);\n'})}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0cProductBuilder \u662f\u5efa\u9020\u8005\u7c7b\uff0c\u5b83\u5141\u8bb8\u9010\u6b65\u6784\u5efa\u4e00\u4e2a product \u5bf9\u8c61\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fde\u7eed\u8c03\u7528 setPropertyX \u65b9\u6cd5\u6765\u6307\u5b9a\u4e0d\u540c\u7684\u5c5e\u6027\u503c\uff0c\u6700\u540e\u4f7f\u7528 build \u65b9\u6cd5\u521b\u5efa\u6700\u7ec8\u7684\u4ea7\u54c1\u5bf9\u8c61\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u8fd9\u79cd\u65b9\u6cd5\u5141\u8bb8\u4f60\u4ee5\u6e05\u6670\u7684\u65b9\u5f0f\u6307\u5b9a\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u800c\u4e0d\u9700\u8981\u590d\u6742\u7684\u6784\u9020\u51fd\u6570\u3002\u5efa\u9020\u8005\u6a21\u5f0f\u8fd8\u53ef\u4ee5\u6269\u5c55\uff0c\u4ee5\u652f\u6301\u66f4\u591a\u7684\u5c5e\u6027\u548c\u9009\u9879\uff0c\u4f7f\u5176\u9002\u7528\u4e8e\u521b\u5efa\u590d\u6742\u5bf9\u8c61\u7684\u9700\u6c42\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u5efa\u9020\u8005\u6a21\u5f0f\u7684\u53e6\u4e00\u4e2a\u4f18\u70b9\u662f\u53ef\u4ee5\u63d0\u9ad8\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\uff0c\u56e0\u4e3a\u4f60\u53ef\u4ee5\u6839\u636e\u5c5e\u6027\u7684\u540d\u79f0\u6765\u8bbe\u7f6e\u503c\uff0c\u800c\u4e0d\u9700\u8981\u8bb0\u4f4f\u53c2\u6570\u7684\u987a\u5e8f\uff0c\u4ece\u800c\u51cf\u5c11\u4e86\u9519\u8bef\u7684\u98ce\u9669\u3002"})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},93881:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var r=n(58101);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);