"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9166],{29063:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"\u8ba1\u7b97\u673a\u7f16\u7a0b/socket.io/index","title":"socket","description":"Socket\uff08\u5957\u63a5\u5b57\uff09\u662f\u4e00\u79cd\u7f51\u7edc\u7f16\u7a0b\u63a5\u53e3\uff0c\u5b83\u65e2\u4e0d\u5c5e\u4e8e\u534f\u8bae\uff0c\u4e5f\u4e0d\u5c5e\u4e8e\u8f6f\u4ef6\uff0c\u800c\u662f\u4e00\u79cd\u62bd\u8c61\u5c42\uff0c\u7528\u4e8e\u5728\u4e0d\u540c\u8bbe\u5907\u6216\u8fdb\u7a0b\u4e4b\u95f4\u8fdb\u884c\u6570\u636e\u4f20\u8f93\u3002","source":"@site/docs/\u8ba1\u7b97\u673a\u7f16\u7a0b/socket.io/index.mdx","sourceDirName":"\u8ba1\u7b97\u673a\u7f16\u7a0b/socket.io","slug":"/\u8ba1\u7b97\u673a\u7f16\u7a0b/socket.io/","permalink":"/docs/\u8ba1\u7b97\u673a\u7f16\u7a0b/socket.io/","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u8ba1\u7b97\u673a\u7f16\u7a0b/socket.io/index.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"\u8ba1\u7b97\u673a\u7f16\u7a0b","previous":{"title":"gitlab","permalink":"/docs/\u8ba1\u7b97\u673a\u7f16\u7a0b/gitlab/"},"next":{"title":"yaml","permalink":"/docs/\u8ba1\u7b97\u673a\u7f16\u7a0b/yaml/"}}');var s=c(25105),i=c(93881);const o={},l="socket",r={},d=[{value:"Socket \u7684\u5206\u7c7b",id:"socket-\u7684\u5206\u7c7b",level:2},{value:"\u57fa\u4e8e\u4f20\u8f93\u534f\u8bae \u2753",id:"\u57fa\u4e8e\u4f20\u8f93\u534f\u8bae-",level:3},{value:"\u57fa\u4e8e\u5730\u5740\u65cf \u2753",id:"\u57fa\u4e8e\u5730\u5740\u65cf-",level:3},{value:"Socket \u7684\u5de5\u4f5c\u539f\u7406",id:"socket-\u7684\u5de5\u4f5c\u539f\u7406",level:2},{value:"Socket \u7684\u8bbe\u8ba1\u76ee\u7684\uff0c\u5e94\u7528\u573a\u666f",id:"socket-\u7684\u8bbe\u8ba1\u76ee\u7684\u5e94\u7528\u573a\u666f",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"socket",children:"socket"})}),"\n",(0,s.jsx)(n.p,{children:"Socket\uff08\u5957\u63a5\u5b57\uff09\u662f\u4e00\u79cd\u7f51\u7edc\u7f16\u7a0b\u63a5\u53e3\uff0c\u5b83\u65e2\u4e0d\u5c5e\u4e8e\u534f\u8bae\uff0c\u4e5f\u4e0d\u5c5e\u4e8e\u8f6f\u4ef6\uff0c\u800c\u662f\u4e00\u79cd\u62bd\u8c61\u5c42\uff0c\u7528\u4e8e\u5728\u4e0d\u540c\u8bbe\u5907\u6216\u8fdb\u7a0b\u4e4b\u95f4\u8fdb\u884c\u6570\u636e\u4f20\u8f93\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"socket-\u7684\u5206\u7c7b",children:"Socket \u7684\u5206\u7c7b"}),"\n",(0,s.jsx)(n.h3,{id:"\u57fa\u4e8e\u4f20\u8f93\u534f\u8bae-",children:"\u57fa\u4e8e\u4f20\u8f93\u534f\u8bae \u2753"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"TCP Socket\uff08\u6d41\u5f0f\u5957\u63a5\u5b57\uff09\uff1a\u57fa\u4e8e TCP \u534f\u8bae\uff0c\u63d0\u4f9b\u53ef\u9760\u7684\u3001\u9762\u5411\u8fde\u63a5\u7684\u901a\u4fe1\u3002\u6570\u636e\u4f20\u8f93\u4fdd\u8bc1\u987a\u5e8f\u548c\u5b8c\u6574\u6027"}),"\n",(0,s.jsx)(n.li,{children:"UDP Socket\uff08\u6570\u636e\u62a5\u5957\u63a5\u5b57\uff09\uff1a\u57fa\u4e8e UDP \u534f\u8bae\uff0c\u63d0\u4f9b\u65e0\u8fde\u63a5\u7684\u670d\u52a1\u3002\u6570\u636e\u4f20\u8f93\u4e0d\u4fdd\u8bc1\u987a\u5e8f\u548c\u5b8c\u6574\u6027\uff0c\u4f46\u901f\u5ea6\u66f4\u5feb"}),"\n",(0,s.jsx)(n.li,{children:"Raw Socket\uff08\u539f\u59cb\u5957\u63a5\u5b57\uff09\uff1a\u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u76f4\u63a5\u8bbf\u95ee\u7f51\u7edc\u5e95\u5c42\u534f\u8bae\uff08\u5982 ICMP\uff09\u3002\u9002\u7528\u4e8e\u9700\u8981\u5904\u7406\u7279\u6b8a\u7f51\u7edc\u62a5\u6587\u7684\u5e94\u7528"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u57fa\u4e8e\u5730\u5740\u65cf-",children:"\u57fa\u4e8e\u5730\u5740\u65cf \u2753"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"AF_INET\uff1aIPv4 \u5730\u5740\u65cf"}),"\n",(0,s.jsx)(n.li,{children:"AF_INET6\uff1aIPv6 \u5730\u5740\u65cf"}),"\n",(0,s.jsx)(n.li,{children:"AF_UNIX\uff1a\u7528\u4e8e\u8fdb\u7a0b\u95f4\u901a\u4fe1\u7684 Unix \u5957\u63a5\u5b57"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"socket-\u7684\u5de5\u4f5c\u539f\u7406",children:"Socket \u7684\u5de5\u4f5c\u539f\u7406"}),"\n",(0,s.jsx)(n.p,{children:"\u670d\u52a1\u5668\u7aef\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"- \u521b\u5efa Socket\uff1a\u521d\u59cb\u5316\u76d1\u542c\u7aef\u53e3\u3002\n- \u7ed1\u5b9a\uff08bind\uff09\uff1a\u5c06 Socket \u7ed1\u5b9a\u5230\u6307\u5b9a IP \u548c\u7aef\u53e3\u3002\n- \u76d1\u542c\uff08listen\uff09\uff1a\u7b49\u5f85\u5ba2\u6237\u7aef\u8fde\u63a5\u8bf7\u6c42\u3002\n- \u63a5\u53d7\u8fde\u63a5\uff08accept\uff09\uff1a\u4e0e\u5ba2\u6237\u7aef\u5efa\u7acb\u8fde\u63a5\u3002\n- \u6570\u636e\u6536\u53d1\uff08send/recv\uff09\uff1a\u8fdb\u884c\u6570\u636e\u901a\u4fe1\u3002\n- \u5173\u95ed\u8fde\u63a5\uff08close\uff09\uff1a\u91ca\u653e\u8d44\u6e90\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"- \u521b\u5efa Socket\u3002\n- \u8fde\u63a5\u670d\u52a1\u5668\uff08connect\uff09\u3002\n- \u6570\u636e\u6536\u53d1\uff08send/recv\uff09\u3002\n- \u5173\u95ed\u8fde\u63a5\uff08close\uff09\n"})}),"\n",(0,s.jsx)(n.h2,{id:"socket-\u7684\u8bbe\u8ba1\u76ee\u7684\u5e94\u7528\u573a\u666f",children:"Socket \u7684\u8bbe\u8ba1\u76ee\u7684\uff0c\u5e94\u7528\u573a\u666f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f51\u9875\u6d4f\u89c8\uff1a\u4f7f\u7528 TCP Socket \u8fdb\u884c\u53ef\u9760\u7684\u6570\u636e\u4f20\u8f93\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5b9e\u65f6\u97f3\u89c6\u9891\u4f20\u8f93\uff1a\u4f7f\u7528 UDP Socket \u4fdd\u8bc1\u4f20\u8f93\u901f\u5ea6\u548c\u5b9e\u65f6\u6027\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u7f51\u7edc\u5b89\u5168\u76d1\u63a7\uff1a\u4f7f\u7528 Raw Socket \u8fdb\u884c\u5e95\u5c42\u7f51\u7edc\u6570\u636e\u5305\u7684\u6355\u83b7\u548c\u5206\u6790"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},93881:(e,n,c)=>{c.d(n,{R:()=>o,x:()=>l});var t=c(58101);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);