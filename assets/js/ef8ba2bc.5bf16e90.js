"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9372],{3881:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(8101);const s={},a=r.createContext(s);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(a.Provider,{value:n},e.children)}},7859:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u7ed3\u6784\u578b\u6a21\u5f0f/\u4ee3\u7406\u6a21\u5f0f/index","title":"\u4ee3\u7406\u6a21\u5f0f\uff08Proxy Pattern\uff09","description":"\u4ee3\u7406\u6a21\u5f0f\uff08Proxy Pattern\uff09\u662f\u4e00\u79cd\u7ed3\u6784\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a\u4ee3\u7406\u5bf9\u8c61\u6765\u63a7\u5236\u5bf9\u5176\u4ed6\u5bf9\u8c61\u7684\u8bbf\u95ee\u3002\u4ee3\u7406\u6a21\u5f0f\u7684\u76ee\u6807\u662f\u5728\u4e0d\u6539\u53d8\u539f\u59cb\u5bf9\u8c61\u7684\u60c5\u51b5\u4e0b\uff0c\u63a7\u5236\u5bf9\u8be5\u5bf9\u8c61\u7684\u8bbf\u95ee\uff0c\u4ee5\u5b9e\u73b0\u4e00\u4e9b\u989d\u5916\u7684\u529f\u80fd\uff0c\u5982\u5ef6\u8fdf\u52a0\u8f7d\u3001\u8bbf\u95ee\u63a7\u5236\u3001\u65e5\u5fd7\u8bb0\u5f55\u3001\u7f13\u5b58\u7b49\u3002","source":"@site/docs/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u7ed3\u6784\u578b\u6a21\u5f0f/\u4ee3\u7406\u6a21\u5f0f/index.md","sourceDirName":"\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u7ed3\u6784\u578b\u6a21\u5f0f/\u4ee3\u7406\u6a21\u5f0f","slug":"/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u7ed3\u6784\u578b\u6a21\u5f0f/\u4ee3\u7406\u6a21\u5f0f/","permalink":"/docs/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u7ed3\u6784\u578b\u6a21\u5f0f/\u4ee3\u7406\u6a21\u5f0f/","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u7ed3\u6784\u578b\u6a21\u5f0f/\u4ee3\u7406\u6a21\u5f0f/index.md","tags":[],"version":"current","frontMatter":{},"sidebar":"\u524d\u7aef","previous":{"title":"\u4eab\u5143\u6a21\u5f0f\uff08Flyweight Pattern\uff09","permalink":"/docs/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u7ed3\u6784\u578b\u6a21\u5f0f/\u4eab\u5143\u6a21\u5f0f/"},"next":{"title":"\u5916\u89c2\u6a21\u5f0f\uff08Facade Pattern\uff09","permalink":"/docs/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u7ed3\u6784\u578b\u6a21\u5f0f/\u5916\u89c2\u6a21\u5f0f/"}}');var s=t(5105),a=t(3881);const c={},i="\u4ee3\u7406\u6a21\u5f0f\uff08Proxy Pattern\uff09",o={},l=[{value:"\u573a\u666f",id:"\u573a\u666f",level:2},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u4ee3\u7406\u6a21\u5f0fproxy-pattern",children:"\u4ee3\u7406\u6a21\u5f0f\uff08Proxy Pattern\uff09"})}),"\n",(0,s.jsx)(n.p,{children:"\u4ee3\u7406\u6a21\u5f0f\uff08Proxy Pattern\uff09\u662f\u4e00\u79cd\u7ed3\u6784\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a\u4ee3\u7406\u5bf9\u8c61\u6765\u63a7\u5236\u5bf9\u5176\u4ed6\u5bf9\u8c61\u7684\u8bbf\u95ee\u3002\u4ee3\u7406\u6a21\u5f0f\u7684\u76ee\u6807\u662f\u5728\u4e0d\u6539\u53d8\u539f\u59cb\u5bf9\u8c61\u7684\u60c5\u51b5\u4e0b\uff0c\u63a7\u5236\u5bf9\u8be5\u5bf9\u8c61\u7684\u8bbf\u95ee\uff0c\u4ee5\u5b9e\u73b0\u4e00\u4e9b\u989d\u5916\u7684\u529f\u80fd\uff0c\u5982\u5ef6\u8fdf\u52a0\u8f7d\u3001\u8bbf\u95ee\u63a7\u5236\u3001\u65e5\u5fd7\u8bb0\u5f55\u3001\u7f13\u5b58\u7b49\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4ee3\u7406\u6a21\u5f0f\u7684\u6838\u5fc3\u601d\u60f3\u662f\u521b\u5efa\u4e00\u4e2a\u4ee3\u7406\u5bf9\u8c61\uff0c\u8be5\u4ee3\u7406\u5bf9\u8c61\u5177\u6709\u4e0e\u539f\u59cb\u5bf9\u8c61\u76f8\u540c\u7684\u63a5\u53e3\uff0c\u4ee5\u4fbf\u5ba2\u6237\u7aef\u53ef\u4ee5\u65e0\u7f1d\u5730\u4f7f\u7528\u4ee3\u7406\u3002\u4ee3\u7406\u5bf9\u8c61\u901a\u5e38\u5728\u5176\u5185\u90e8\u5305\u542b\u5bf9\u539f\u59cb\u5bf9\u8c61\u7684\u5f15\u7528\uff0c\u5e76\u53ef\u4ee5\u5728\u6267\u884c\u5176\u64cd\u4f5c\u4e4b\u524d\u6216\u4e4b\u540e\u6267\u884c\u989d\u5916\u7684\u64cd\u4f5c\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u573a\u666f",children:"\u573a\u666f"}),"\n",(0,s.jsx)(n.p,{children:"\u8fdc\u7a0b\u4ee3\u7406\uff1a\u4ee3\u7406\u5bf9\u8c61\u53ef\u4ee5\u4ee3\u8868\u8fdc\u7a0b\u5bf9\u8c61\uff0c\u5ba2\u6237\u7aef\u901a\u8fc7\u4ee3\u7406\u5bf9\u8c61\u4e0e\u8fdc\u7a0b\u5bf9\u8c61\u901a\u4fe1\uff0c\u800c\u4e0d\u9700\u8981\u76f4\u63a5\u8bbf\u95ee\u8fdc\u7a0b\u5bf9\u8c61\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u865a\u62df\u4ee3\u7406\uff1a\u4ee3\u7406\u5bf9\u8c61\u53ef\u4ee5\u7528\u4e8e\u5ef6\u8fdf\u52a0\u8f7d\uff0c\u53ea\u6709\u5728\u9700\u8981\u65f6\u624d\u771f\u6b63\u521b\u5efa\u548c\u8bbf\u95ee\u539f\u59cb\u5bf9\u8c61\uff0c\u4ee5\u63d0\u9ad8\u6027\u80fd\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8bbf\u95ee\u63a7\u5236\uff1a\u4ee3\u7406\u5bf9\u8c61\u53ef\u4ee5\u63a7\u5236\u5ba2\u6237\u7aef\u5bf9\u539f\u59cb\u5bf9\u8c61\u7684\u8bbf\u95ee\uff0c\u5b9e\u65bd\u8bbf\u95ee\u6743\u9650\u63a7\u5236\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u7f13\u5b58\u4ee3\u7406\uff1a\u4ee3\u7406\u5bf9\u8c61\u53ef\u4ee5\u7ef4\u62a4\u7f13\u5b58\uff0c\u4ee5\u51cf\u5c11\u5bf9\u539f\u59cb\u5bf9\u8c61\u7684\u9891\u7e41\u8bbf\u95ee\uff0c\u4ece\u800c\u63d0\u9ad8\u6027\u80fd\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5b9e\u73b0",children:"\u5b9e\u73b0"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// \u539f\u59cb\u5bf9\u8c61\nclass RealObject {\n  constructor() {\n    this.sensitiveData = "This is sensitive information";\n  }\n\n  getData() {\n    return this.sensitiveData;\n  }\n}\n\n// \u4ee3\u7406\u5bf9\u8c61\nclass ProxyObject {\n  constructor() {\n    this.realObject = new RealObject();\n  }\n\n  getData() {\n    // \u5728\u6b64\u8fdb\u884c\u8bbf\u95ee\u63a7\u5236\u6216\u5176\u4ed6\u989d\u5916\u64cd\u4f5c\n    if (this.isAuthorized()) {\n      return this.realObject.getData();\n    } else {\n      return "Unauthorized access";\n    }\n  }\n\n  isAuthorized() {\n    // \u6a21\u62df\u8bbf\u95ee\u63a7\u5236\uff0c\u53ef\u4ee5\u6839\u636e\u9700\u8981\u5b9e\u73b0\u5177\u4f53\u903b\u8f91\n    return true; // \u7b80\u5316\u793a\u4f8b\uff0c\u59cb\u7ec8\u6388\u6743\n  }\n}\n\n// \u5ba2\u6237\u7aef\u4ee3\u7801\nconst realObject = new RealObject();\nconsole.log(realObject.getData()); // \u8f93\u51fa\u539f\u59cb\u6570\u636e\n\nconst proxyObject = new ProxyObject();\nconsole.log(proxyObject.getData()); // \u8f93\u51fa\u4ee3\u7406\u6570\u636e\uff0c\u7ecf\u8fc7\u8bbf\u95ee\u63a7\u5236\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0cRealObject \u662f\u539f\u59cb\u5bf9\u8c61\uff0c\u5b83\u5305\u542b\u654f\u611f\u4fe1\u606f\u3002ProxyObject \u662f\u4ee3\u7406\u5bf9\u8c61\uff0c\u5b83\u5728 getData \u65b9\u6cd5\u4e2d\u5b9e\u65bd\u4e86\u8bbf\u95ee\u63a7\u5236\u3002\u5ba2\u6237\u7aef\u53ef\u4ee5\u4f7f\u7528\u4ee3\u7406\u5bf9\u8c61\u6765\u8bbf\u95ee\u6570\u636e\uff0c\u4ee3\u7406\u5bf9\u8c61\u8d1f\u8d23\u63a7\u5236\u8bbf\u95ee\u6743\u9650\uff0c\u5e76\u53ef\u4ee5\u5728\u5fc5\u8981\u65f6\u6267\u884c\u989d\u5916\u7684\u64cd\u4f5c\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4ee3\u7406\u6a21\u5f0f\u4f7f\u5f97\u53ef\u4ee5\u5728\u4e0d\u6539\u53d8\u539f\u59cb\u5bf9\u8c61\u7684\u60c5\u51b5\u4e0b\uff0c\u5bf9\u8bbf\u95ee\u8fdb\u884c\u63a7\u5236\u548c\u589e\u5f3a\uff0c\u4ece\u800c\u63d0\u4f9b\u4e86\u66f4\u5927\u7684\u7075\u6d3b\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002\u8fd9\u79cd\u6a21\u5f0f\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\u7ecf\u5e38\u7528\u4e8e\u5b89\u5168\u63a7\u5236\u3001\u5ef6\u8fdf\u52a0\u8f7d\u548c\u6027\u80fd\u4f18\u5316\u7b49\u573a\u666f\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);