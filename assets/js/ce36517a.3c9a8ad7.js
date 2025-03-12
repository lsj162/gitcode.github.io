"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7370],{2137:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>o,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"\u524d\u7aef/\u56fe\u5f62\u53ef\u89c6\u5316/Canvas/index","title":"Canvas","description":"HTML \u7684 canvas \u5143\u7d20\u4e3a\u811a\u672c\u63d0\u4f9b\u4e86\u4f9d\u8d56\u4e8e\u5206\u8fa8\u7387\u7684\u4f4d\u56fe\u753b\u5e03\uff0c\u53ef\u4ee5\u4f7f\u7528 APIs \uff08\u6bd4\u5982 Canvas 2D \u6216 WebGL\uff09\u6765\u7ed8\u5236\u56fe\u5f62\u3002\u53ef\u7528\u4e8e\u52a8\u6001\u6e32\u67d3\u56fe\u5f62\u3001\u6e38\u620f\u56fe\u5f62\u6216\u5176\u4ed6\u89c6\u89c9\u56fe\u50cf\u3002","source":"@site/docs/\u524d\u7aef/\u56fe\u5f62\u53ef\u89c6\u5316/Canvas/index.md","sourceDirName":"\u524d\u7aef/\u56fe\u5f62\u53ef\u89c6\u5316/Canvas","slug":"/\u524d\u7aef/\u56fe\u5f62\u53ef\u89c6\u5316/Canvas/","permalink":"/docs/\u524d\u7aef/\u56fe\u5f62\u53ef\u89c6\u5316/Canvas/","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u524d\u7aef/\u56fe\u5f62\u53ef\u89c6\u5316/Canvas/index.md","tags":[],"version":"current","frontMatter":{},"sidebar":"\u524d\u7aef","previous":{"title":"\u5b89\u88c5","permalink":"/docs/\u524d\u7aef/Vue/HelloWorld/Vuex/\u521d\u59cb\u5316"},"next":{"title":"SVG","permalink":"/docs/\u524d\u7aef/\u56fe\u5f62\u53ef\u89c6\u5316/Svg/"}}');var a=s(5105),l=s(3881);const t={},c="Canvas",r={},d=[{value:"\u7528\u9014",id:"\u7528\u9014",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"\u76ee\u5f55",id:"\u76ee\u5f55",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2},{value:"\u63a8\u8350\u4e66\u7c4d",id:"\u63a8\u8350\u4e66\u7c4d",level:2}];function h(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"canvas",children:"Canvas"})}),"\n",(0,a.jsx)(e.p,{children:"HTML \u7684 canvas \u5143\u7d20\u4e3a\u811a\u672c\u63d0\u4f9b\u4e86\u4f9d\u8d56\u4e8e\u5206\u8fa8\u7387\u7684\u4f4d\u56fe\u753b\u5e03\uff0c\u53ef\u4ee5\u4f7f\u7528 APIs \uff08\u6bd4\u5982 Canvas 2D \u6216 WebGL\uff09\u6765\u7ed8\u5236\u56fe\u5f62\u3002\u53ef\u7528\u4e8e\u52a8\u6001\u6e32\u67d3\u56fe\u5f62\u3001\u6e38\u620f\u56fe\u5f62\u6216\u5176\u4ed6\u89c6\u89c9\u56fe\u50cf\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u7528\u9014",children:"\u7528\u9014"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u6e38\u620f\u5f00\u53d1\uff1aCanvas \u662f\u6e38\u620f\u5f00\u53d1\u7684\u6d41\u884c\u9009\u62e9\u4e4b\u4e00\uff0c\u56e0\u4e3a\u5b83\u63d0\u4f9b\u4e86\u7ed8\u5236\u56fe\u5f62\u3001\u5904\u7406\u7528\u6237\u8f93\u5165\u548c\u7ba1\u7406\u6e38\u620f\u5faa\u73af\u7684\u7075\u6d3b\u6027\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528 Canvas \u521b\u5efa 2D \u6e38\u620f\u3001\u5c0f\u6e38\u620f\u548c\u4ea4\u4e92\u5f0f\u56fe\u5f62\u5e94\u7528\u7a0b\u5e8f\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u6570\u636e\u53ef\u89c6\u5316\uff1aCanvas \u53ef\u4ee5\u7528\u4e8e\u521b\u5efa\u4ea4\u4e92\u5f0f\u6570\u636e\u53ef\u89c6\u5316\uff0c\u5305\u62ec\u56fe\u8868\u3001\u56fe\u5f62\u548c\u5b9e\u65f6\u6570\u636e\u5c55\u793a\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u56fe\u50cf\u5904\u7406\uff1aCanvas \u53ef\u4ee5\u7528\u4e8e\u56fe\u50cf\u5904\u7406\uff0c\u5982\u56fe\u7247\u7f16\u8f91\u548c\u6ee4\u955c\u5e94\u7528\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u52a8\u753b\uff1aCanvas \u53ef\u7528\u4e8e\u521b\u5efa\u52a8\u753b\uff0c\u5305\u62ec\u5e27\u52a8\u753b\u3001\u7269\u7406\u6a21\u62df\u548c\u7c92\u5b50\u6548\u679c\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u4ea4\u4e92\u5f0f\u7528\u6237\u754c\u9762\u5143\u7d20\uff1aCanvas \u53ef\u4ee5\u7528\u4e8e\u521b\u5efa\u81ea\u5b9a\u4e49\u7684\u4ea4\u4e92\u5f0f\u7528\u6237\u754c\u9762\u5143\u7d20\uff0c\u5982\u62d6\u653e\u5143\u7d20\u3001\u62d6\u52a8\u6ed1\u5757\u3001\u56fe\u5f62\u6309\u94ae\u7b49\u3002"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"\u57fa\u672c\u7528\u6cd5",children:"\u57fa\u672c\u7528\u6cd5"}),"\n",(0,a.jsx)(e.p,{children:"id \u5c5e\u6027\u5e76\u4e0d\u662f<canvas>\u5143\u7d20\u6240\u7279\u6709\u7684\uff0c<canvas> \u6807\u7b7e\u53ea\u6709\u4e24\u4e2a\u5c5e\u6027 width \u548c height\u3002\u8fd9\u4e9b\u90fd\u662f\u53ef\u9009\u7684\uff0c\u5f53\u6ca1\u6709\u8bbe\u7f6e\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u7684\u65f6\u5019\uff0ccanvas \u4f1a\u521d\u59cb\u5316\u5bbd\u5ea6\u4e3a 300 \u50cf\u7d20\u548c\u9ad8\u5ea6\u4e3a 150 \u50cf\u7d20\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:'<canvas id="tutorial" width="300" height="150"></canvas>\n'})}),"\n",(0,a.jsx)(e.h2,{id:"\u76ee\u5f55",children:"\u76ee\u5f55"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u5165\u95e8"}),"\n",(0,a.jsx)(e.li,{children:"\u57fa\u672c\u7528\u6cd5"}),"\n",(0,a.jsx)(e.li,{children:"\u7ed8\u5236\u56fe\u5f62"}),"\n",(0,a.jsx)(e.li,{children:"\u4f7f\u7528\u6837\u5f0f\u4e0e\u989c\u8272"}),"\n",(0,a.jsx)(e.li,{children:"\u7ed8\u5236\u6587\u672c"}),"\n",(0,a.jsx)(e.li,{children:"\u4f7f\u7528\u56fe\u50cf"}),"\n",(0,a.jsx)(e.li,{children:"\u53d8\u5f62"}),"\n",(0,a.jsx)(e.li,{children:"\u5408\u6210\u548c\u526a\u8f91"}),"\n",(0,a.jsx)(e.li,{children:"\u57fa\u672c\u52a8\u753b"}),"\n",(0,a.jsx)(e.li,{children:"\u9ad8\u7ea7\u52a8\u753b"}),"\n",(0,a.jsx)(e.li,{children:"\u50cf\u7d20\u5904\u7406"}),"\n",(0,a.jsx)(e.li,{children:"Canvas \u6027\u80fd\u4f18\u5316"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://www.html5canvastutorials.com/",children:"https://www.html5canvastutorials.com/"})}),"\n",(0,a.jsx)(e.h2,{id:"\u63a8\u8350\u4e66\u7c4d",children:"\u63a8\u8350\u4e66\u7c4d"})]})}function o(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(h,{...n})}):h(n)}},3881:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>c});var i=s(8101);const a={},l=i.createContext(a);function t(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:t(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);