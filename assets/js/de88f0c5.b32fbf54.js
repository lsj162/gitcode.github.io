"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7104],{86781:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811 (Tree)/\u6811","title":"\u5b9a\u4e49","description":"\u6811\uff08Tree\uff09\u662f\u4e00\u79cd\u62bd\u8c61\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u7531\u4e00\u7ec4\u8282\u70b9\uff08Node\uff09\u548c\u8fde\u63a5\u8fd9\u4e9b\u8282\u70b9\u7684\u8fb9\uff08Edge\uff09\u7ec4\u6210\u3002","source":"@site/docs/\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811 (Tree)/\u6811.mdx","sourceDirName":"\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811 (Tree)","slug":"/\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811 (Tree)/\u6811","permalink":"/docs/\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811 (Tree)/\u6811","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811 (Tree)/\u6811.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"\u8ba1\u7b97\u673a\u7f16\u7a0b","previous":{"title":"\u5b8c\u5168\u4e8c\u53c9\u6811 (Complete Binary Tree)","permalink":"/docs/\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811 (Tree)/\u5b8c\u5168\u4e8c\u53c9\u6811 (Complete Binary Tree)"},"next":{"title":"\u6ee1\u4e8c\u53c9\u6811 (Full Binary Tree)","permalink":"/docs/\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811 (Tree)/\u6ee1\u4e8c\u53c9\u6811 (Full Binary Tree)"}}');var l=s(25105),i=s(93881);const t={},c="\u5b9a\u4e49",d={},o=[{value:"\u6811\u7684\u672f\u8bed\u5b9a\u4e49\u5982\u4e0b\uff1a",id:"\u6811\u7684\u672f\u8bed\u5b9a\u4e49\u5982\u4e0b",level:2}];function h(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u5b9a\u4e49",children:"\u5b9a\u4e49"})}),"\n",(0,l.jsx)(n.p,{children:"\u6811\uff08Tree\uff09\u662f\u4e00\u79cd\u62bd\u8c61\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u7531\u4e00\u7ec4\u8282\u70b9\uff08Node\uff09\u548c\u8fde\u63a5\u8fd9\u4e9b\u8282\u70b9\u7684\u8fb9\uff08Edge\uff09\u7ec4\u6210\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u6570\u636e\u7ed3\u6784\u4e2d\uff0c\u6811\uff08Tree\uff09\u662f\u4e00\u79cd\u62bd\u8c61\u6570\u636e\u7c7b\u578b\uff08ADT\uff09\uff0c\u5b83\u662f\u7531\u8282\u70b9\u548c\u8fb9\u7ec4\u6210\u7684\u975e\u7ebf\u6027\u6570\u636e\u7ed3\u6784\u3002\u6811\u901a\u5e38\u7528\u6765\u6a21\u62df\u5177\u6709\u5c42\u6b21\u5173\u7cfb\u7684\u6570\u636e\uff0c\u4f8b\u5982\u6587\u4ef6\u7cfb\u7edf\u3001\u7ec4\u7ec7\u7ed3\u6784\u3001\u8bed\u6cd5\u5206\u6790\u6811\u7b49\u3002\u6811\u4e2d\u7684\u8282\u70b9\u53ef\u4ee5\u6709\u96f6\u4e2a\u6216\u591a\u4e2a\u5b50\u8282\u70b9\uff0c\u4f46\u53ea\u6709\u4e00\u4e2a\u7236\u8282\u70b9\uff0c\u9664\u4e86\u6839\u8282\u70b9\u5916\uff0c\u6bcf\u4e2a\u8282\u70b9\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a\u7236\u8282\u70b9\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u6811\u7684\u672f\u8bed\u5b9a\u4e49\u5982\u4e0b",children:"\u6811\u7684\u672f\u8bed\u5b9a\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u6839\u8282\u70b9\uff08Root\uff09\uff1a\u6811\u7684\u6700\u9876\u7aef\u8282\u70b9\uff0c\u6ca1\u6709\u7236\u8282\u70b9\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"\u8fb9\uff08Edge\uff09\uff1a\u8282\u70b9\u4e4b\u95f4\u7684\u8fde\u63a5\u79f0\u4e3a\u8fb9\u3002\u5728\u6811\u4e2d\uff0c\u8fb9\u8868\u793a\u8282\u70b9\u4e4b\u95f4\u7684\u7236\u5b50\u5173\u7cfb\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"\u7236\u8282\u70b9\uff08Parent\uff09\uff1a\u4e0e\u5b50\u8282\u70b9\u76f4\u63a5\u76f8\u8fde\u7684\u8282\u70b9\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsx)(n.li,{children:"\u5b50\u8282\u70b9\uff08Child\uff09\uff1a\u76f4\u63a5\u8fde\u63a5\u5230\u53e6\u4e00\u4e2a\u8282\u70b9\u7684\u8282\u70b9\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.ol,{start:"5",children:["\n",(0,l.jsx)(n.li,{children:"\u5144\u5f1f\u8282\u70b9\uff08Sibling\uff09\uff1a\u5177\u6709\u76f8\u540c\u7236\u8282\u70b9\u7684\u8282\u70b9\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.ol,{start:"6",children:["\n",(0,l.jsx)(n.li,{children:"\u5185\u90e8\u8282\u70b9\uff08Internal Node\uff09\uff1a\u81f3\u5c11\u6709\u4e00\u4e2a\u5b50\u8282\u70b9\u7684\u8282\u70b9\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.ol,{start:"7",children:["\n",(0,l.jsx)(n.li,{children:"\u53f6\u8282\u70b9\uff08Leaf\uff09\uff1a\u6ca1\u6709\u5b50\u8282\u70b9\u7684\u8282\u70b9\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.ol,{start:"8",children:["\n",(0,l.jsx)(n.li,{children:"\u8def\u5f84\uff08Path\uff09\uff1a\u4ece\u6839\u8282\u70b9\u5230\u67d0\u4e2a\u8282\u70b9\u7684\u8fb9\u7684\u5e8f\u5217\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.ol,{start:"9",children:["\n",(0,l.jsx)(n.li,{children:"\u6df1\u5ea6\uff08Depth\uff09\uff1a\u4ece\u6839\u8282\u70b9\u5230\u67d0\u4e2a\u8282\u70b9\u7684\u8fb9\u7684\u6570\u91cf\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.ol,{start:"10",children:["\n",(0,l.jsx)(n.li,{children:"\u9ad8\u5ea6\uff08Height\uff09\uff1a\u4ece\u67d0\u4e2a\u8282\u70b9\u5230\u5176\u6700\u6df1\u53f6\u8282\u70b9\u7684\u6700\u957f\u8def\u5f84\u7684\u8fb9\u7684\u6570\u91cf\u3002"}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},93881:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var r=s(58101);const l={},i=r.createContext(l);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);