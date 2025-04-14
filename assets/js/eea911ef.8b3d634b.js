"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7487],{67814:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"\u524d\u7aef/JavaScript/API \u6587\u6863\u624b\u518c/\u6807\u51c6\u5e93\u5185\u7f6e\u5bf9\u8c61/Function/index","title":"Function \u5bf9\u8c61","description":"Function \u5bf9\u8c61\u63d0\u4f9b\u4e86\u7528\u4e8e\u5904\u7406\u51fd\u6570\u7684\u65b9\u6cd5\u3002\u5728 JavaScript \u4e2d\uff0c\u6bcf\u4e2a\u51fd\u6570\u5b9e\u9645\u4e0a\u90fd\u662f\u4e00\u4e2a Function \u5bf9\u8c61\u3002","source":"@site/docs/\u524d\u7aef/JavaScript/API \u6587\u6863\u624b\u518c/\u6807\u51c6\u5e93\u5185\u7f6e\u5bf9\u8c61/Function/index.mdx","sourceDirName":"\u524d\u7aef/JavaScript/API \u6587\u6863\u624b\u518c/\u6807\u51c6\u5e93\u5185\u7f6e\u5bf9\u8c61/Function","slug":"/\u524d\u7aef/JavaScript/API \u6587\u6863\u624b\u518c/\u6807\u51c6\u5e93\u5185\u7f6e\u5bf9\u8c61/Function/","permalink":"/docs/\u524d\u7aef/JavaScript/API \u6587\u6863\u624b\u518c/\u6807\u51c6\u5e93\u5185\u7f6e\u5bf9\u8c61/Function/","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u524d\u7aef/JavaScript/API \u6587\u6863\u624b\u518c/\u6807\u51c6\u5e93\u5185\u7f6e\u5bf9\u8c61/Function/index.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"\u524d\u7aef","previous":{"title":"Error","permalink":"/docs/\u524d\u7aef/JavaScript/API \u6587\u6863\u624b\u518c/\u6807\u51c6\u5e93\u5185\u7f6e\u5bf9\u8c61/Error \u9519\u8bef\u5bf9\u8c61/"},"next":{"title":"JSON","permalink":"/docs/\u524d\u7aef/JavaScript/API \u6587\u6863\u624b\u518c/\u6807\u51c6\u5e93\u5185\u7f6e\u5bf9\u8c61/JSON/"}}');var r=e(25105),o=e(93881);const c={},s="Function \u5bf9\u8c61",a={},l=[{value:"\u5b9e\u4f8b\u5c5e\u6027",id:"\u5b9e\u4f8b\u5c5e\u6027",level:2},{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",level:2}];function p(n){const t={h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"function-\u5bf9\u8c61",children:"Function \u5bf9\u8c61"})}),"\n",(0,r.jsx)(t.p,{children:"Function \u5bf9\u8c61\u63d0\u4f9b\u4e86\u7528\u4e8e\u5904\u7406\u51fd\u6570\u7684\u65b9\u6cd5\u3002\u5728 JavaScript \u4e2d\uff0c\u6bcf\u4e2a\u51fd\u6570\u5b9e\u9645\u4e0a\u90fd\u662f\u4e00\u4e2a Function \u5bf9\u8c61\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"\u5b9e\u4f8b\u5c5e\u6027",children:"\u5b9e\u4f8b\u5c5e\u6027"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Function.prototype.length \u51fd\u6570\u671f\u671b\u7684\u53c2\u6570\u6570\u91cf\u3002"}),"\n",(0,r.jsx)(t.li,{children:"Function.prototype.name \u51fd\u6570\u7684\u540d\u79f0\u3002"}),"\n",(0,r.jsx)(t.li,{children:"Function.prototype.prototype \u4e00\u4e2a Function \u5bf9\u8c61\u5728\u4f7f\u7528 new \u8fd0\u7b97\u7b26\u6765\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u65f6\uff0c\u4f1a\u7528\u5230\u5b83\u7684 prototype \u5c5e\u6027\u3002\u5b83\u5c06\u6210\u4e3a\u65b0\u5bf9\u8c61\u7684\u539f\u578b\u3002"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u5b9e\u4f8b\u65b9\u6cd5",children:"\u5b9e\u4f8b\u65b9\u6cd5"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Function.prototype.apply(thisArg [, argsArray]) \u8c03\u7528\u4e00\u4e2a\u51fd\u6570\u5e76\u5c06\u5176 this \u7684\u503c\u8bbe\u7f6e\u4e3a\u63d0\u4f9b\u7684 thisArg\u3002\u53c2\u6570\u53ef\u7528\u4ee5\u901a\u8fc7\u6570\u7ec4\u5bf9\u8c61\u4f20\u9012\u3002"}),"\n",(0,r.jsx)(t.li,{children:"Function.prototype.bind(thisArg[, arg1[, arg2[, ...argN]]]) \u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u5728\u8c03\u7528\u65f6\uff0c\u4f1a\u5c06 this \u8bbe\u7f6e\u4e3a\u63d0\u4f9b\u7684 thisArg\u3002\u5728\u8c03\u7528\u65b0\u7ed1\u5b9a\u7684\u51fd\u6570\u65f6\uff0c\u53ef\u9009\u7684\u53c2\u6570\u5e8f\u5217\uff08[, arg1[, arg2[, ...argN]]]\uff09\u4f1a\u88ab\u63d0\u524d\u6dfb\u52a0\u5230\u53c2\u6570\u5e8f\u5217\u4e2d\uff08\u8bd1\u8005\u6ce8\uff1a\u5373\u8c03\u7528\u7ed1\u5b9a\u521b\u5efa\u7684\u51fd\u6570\u65f6\uff0c\u4f20\u9012\u7684\u53c2\u6570\u4f1a\u63a5\u7eed\u5728\u53ef\u9009\u53c2\u6570\u5e8f\u5217\u540e\uff09\u3002"}),"\n",(0,r.jsx)(t.li,{children:"Function.prototype.call(thisArg[, arg1, arg2, ...argN]) \u8c03\u7528\u4e00\u4e2a\u51fd\u6570\uff0c\u5e76\u5c06\u5176 this \u503c\u8bbe\u7f6e\u4e3a\u63d0\u4f9b\u7684\u503c\u3002\u4e5f\u53ef\u4ee5\u9009\u62e9\u4f20\u8f93\u65b0\u53c2\u6570\u3002"}),"\n",(0,r.jsx)(t.li,{children:"Function.prototype.toString() \u8fd4\u56de\u8868\u793a\u51fd\u6570\u6e90\u7801\u7684\u5b57\u7b26\u4e32\u3002\u8986\u76d6\u4e86 Object.prototype.toString \u65b9\u6cd5\u3002"}),"\n"]})]})}function u(n={}){const{wrapper:t}={...(0,o.R)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(p,{...n})}):p(n)}},93881:(n,t,e)=>{e.d(t,{R:()=>c,x:()=>s});var i=e(58101);const r={},o=i.createContext(r);function c(n){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(o.Provider,{value:t},n.children)}}}]);