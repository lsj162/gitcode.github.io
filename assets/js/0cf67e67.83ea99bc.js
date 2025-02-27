"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4317],{6435:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>i});const t=JSON.parse('{"id":"\u8ba1\u7b97\u673a\u79d1\u5b66/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811\u5806 (Tree Heap)/\u6811\u5806 (Tree Heap)","title":"\u6811\u5806 (Tree Heap)","description":"\u6811\u5806\uff08Treap\uff09\u662f\u57fa\u4e8e\u4e8c\u53c9\u67e5\u627e\u6811\uff08BST\uff09\u548c\u5806\uff08Heap\uff09\u8fd9\u4e24\u4e2a\u6570\u636e\u7ed3\u6784\u7684\u4f18\u52bf\u7ed3\u5408\u4ea7\u751f\u7684\uff0cTreap=Tree+heap\u3002","source":"@site/docs/\u8ba1\u7b97\u673a\u79d1\u5b66/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811\u5806 (Tree Heap)/\u6811\u5806 (Tree Heap).mdx","sourceDirName":"\u8ba1\u7b97\u673a\u79d1\u5b66/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811\u5806 (Tree Heap)","slug":"/\u8ba1\u7b97\u673a\u79d1\u5b66/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811\u5806 (Tree Heap)/","permalink":"/docs/\u8ba1\u7b97\u673a\u79d1\u5b66/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811\u5806 (Tree Heap)/","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u8ba1\u7b97\u673a\u79d1\u5b66/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811\u5806 (Tree Heap)/\u6811\u5806 (Tree Heap).mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"\u8ba1\u7b97\u673a\u79d1\u5b66","previous":{"title":"\u7ea2\u9ed1\u6811 (Red-Black Tree)","permalink":"/docs/\u8ba1\u7b97\u673a\u79d1\u5b66/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811 (Tree)/\u7ea2\u9ed1\u6811 (Red-Black Tree)"},"next":{"title":"\u6570\u7ec4 (Array)","permalink":"/docs/\u8ba1\u7b97\u673a\u79d1\u5b66/\u6570\u636e\u7ed3\u6784/\u7ebf\u6027\u7ed3\u6784/\u6570\u7ec4 (Array)/"}}');var a=n(5105),s=n(7890);const o={},c="\u6811\u5806 (Tree Heap)",p={},i=[];function l(e){const r={h1:"h1",header:"header",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"\u6811\u5806-tree-heap",children:"\u6811\u5806 (Tree Heap)"})}),"\n",(0,a.jsx)(r.p,{children:"\u6811\u5806\uff08Treap\uff09\u662f\u57fa\u4e8e\u4e8c\u53c9\u67e5\u627e\u6811\uff08BST\uff09\u548c\u5806\uff08Heap\uff09\u8fd9\u4e24\u4e2a\u6570\u636e\u7ed3\u6784\u7684\u4f18\u52bf\u7ed3\u5408\u4ea7\u751f\u7684\uff0cTreap=Tree+heap\u3002"}),"\n",(0,a.jsx)(r.p,{children:"\u7279\u70b9\u5305\u62ec\uff1a"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"\u8282\u70b9\u7684\u4f18\u5148\u7ea7\u4e0d\u662f\u6392\u5e8f\u7684\uff0c\u6240\u4ee5\u5b83\u4eec\u7684\u5806\u6027\u8d28\u53ef\u80fd\u4f1a\u88ab\u7834\u574f\uff0c\u4f46\u5728\u6bcf\u6b21\u63d2\u5165\u548c\u5220\u9664\u64cd\u4f5c\u65f6\uff0c\u901a\u8fc7\u65cb\u8f6c\u7b49\u64cd\u4f5c\uff0cTreap \u90fd\u4f1a\u5c1d\u8bd5\u6062\u590d\u5806\u6027\u8d28\u3002"}),"\n",(0,a.jsx)(r.li,{children:"Treap \u5728\u5927\u591a\u6570\u64cd\u4f5c\u4e2d\u5177\u6709\u8f83\u597d\u7684\u6027\u80fd\uff0c\u56e0\u4e3a\u5b83\u4eec\u65e2\u5229\u7528\u4e86 BST \u7684\u9ad8\u6548\u67e5\u627e\u80fd\u529b\uff0c\u53c8\u4fdd\u6301\u4e86\u5806\u7684\u9ad8\u6548\u63d2\u5165\u548c\u5220\u9664\u80fd\u529b\u3002"}),"\n",(0,a.jsx)(r.li,{children:"\u7531\u4e8e\u5176\u968f\u673a\u6027\u8d28\uff0cTreap \u5728\u5b9e\u9645\u5e94\u7528\u4e2d\u8868\u73b0\u51fa\u8272\uff0c\u7279\u522b\u662f\u5728\u9700\u8981\u5feb\u901f\u63d2\u5165\u548c\u5220\u9664\u64cd\u4f5c\u7684\u573a\u666f\u3002\nTreap \u7684\u64cd\u4f5c\u901a\u5e38\u5305\u62ec\u65cb\u8f6c\u64cd\u4f5c\uff0c\u4ee5\u7ef4\u6301 BST \u548c\u5806\u7684\u6027\u8d28\u3002\u65cb\u8f6c\u64cd\u4f5c\u5305\u62ec\u5de6\u65cb\u548c\u53f3\u65cb\u4e24\u79cd\uff0c\u5b83\u4eec\u80fd\u591f\u5c06\u4e00\u4e2a\u4e0d\u6ee1\u8db3 BST \u6216\u5806\u6027\u8d28\u7684\u5b50\u6811\u91cd\u65b0\u7ec4\u7ec7\u6210\u6ee1\u8db3\u6027\u8d28\u7684\u5b50\u6811 \u2460\u2462\u3002"}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},7890:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>c});var t=n(8101);const a={},s=t.createContext(a);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);