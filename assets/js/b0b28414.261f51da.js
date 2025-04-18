"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7650],{516:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811 (Tree)/\u7ea2\u9ed1\u6811 (Red-Black Tree)","title":"\u7ea2\u9ed1\u6811 (Red-Black Tree)","description":"\u7ea2\u9ed1\u6811\uff08Red-Black Tree\uff09\u662f\u4e00\u79cd\u81ea\u5e73\u8861\u7684\u4e8c\u53c9\u641c\u7d22\u6811\uff0c\u5b83\u5728\u63d2\u5165\u548c\u5220\u9664\u64cd\u4f5c\u65f6\u901a\u8fc7\u65cb\u8f6c\u548c\u91cd\u65b0\u7740\u8272\u6765\u4fdd\u6301\u6811\u7684\u5e73\u8861\uff0c\u4ece\u800c\u786e\u4fdd\u6700\u574f\u60c5\u51b5\u4e0b\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(log n)\u3002\u7ea2\u9ed1\u6811\u662f\u7531 Rudolf Bayer \u5728 1972 \u5e74\u53d1\u660e\u7684\uff0c\u5e76\u7531 Leo J. Guibas \u548c Robert Sedgewick \u5728 1978 \u5e74\u8fdb\u4e00\u6b65\u53d1\u5c55\u3002","source":"@site/docs/\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811 (Tree)/\u7ea2\u9ed1\u6811 (Red-Black Tree).mdx","sourceDirName":"\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811 (Tree)","slug":"/\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811 (Tree)/\u7ea2\u9ed1\u6811 (Red-Black Tree)","permalink":"/docs/\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811 (Tree)/\u7ea2\u9ed1\u6811 (Red-Black Tree)","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811 (Tree)/\u7ea2\u9ed1\u6811 (Red-Black Tree).mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"\u8ba1\u7b97\u673a\u7f16\u7a0b","previous":{"title":"\u6ee1\u4e8c\u53c9\u6811 (Full Binary Tree)","permalink":"/docs/\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811 (Tree)/\u6ee1\u4e8c\u53c9\u6811 (Full Binary Tree)"},"next":{"title":"\u6811\u5806 (Tree Heap)","permalink":"/docs/\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7ed3\u6784/\u6811\u5806 (Tree Heap)/"}}');var l=r(25105),t=r(93881);const c={},i="\u7ea2\u9ed1\u6811 (Red-Black Tree)",o={},d=[];function a(e){const n={code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u7ea2\u9ed1\u6811-red-black-tree",children:"\u7ea2\u9ed1\u6811 (Red-Black Tree)"})}),"\n",(0,l.jsx)(n.p,{children:"\u7ea2\u9ed1\u6811\uff08Red-Black Tree\uff09\u662f\u4e00\u79cd\u81ea\u5e73\u8861\u7684\u4e8c\u53c9\u641c\u7d22\u6811\uff0c\u5b83\u5728\u63d2\u5165\u548c\u5220\u9664\u64cd\u4f5c\u65f6\u901a\u8fc7\u65cb\u8f6c\u548c\u91cd\u65b0\u7740\u8272\u6765\u4fdd\u6301\u6811\u7684\u5e73\u8861\uff0c\u4ece\u800c\u786e\u4fdd\u6700\u574f\u60c5\u51b5\u4e0b\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(log n)\u3002\u7ea2\u9ed1\u6811\u662f\u7531 Rudolf Bayer \u5728 1972 \u5e74\u53d1\u660e\u7684\uff0c\u5e76\u7531 Leo J. Guibas \u548c Robert Sedgewick \u5728 1978 \u5e74\u8fdb\u4e00\u6b65\u53d1\u5c55\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u7ea2\u9ed1\u6811\u7684\u5e73\u8861\u6027\u662f\u901a\u8fc7\u4ee5\u4e0b\u4e94\u4e2a\u6027\u8d28\u6765\u4fdd\u8bc1\u7684\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u8282\u70b9\u989c\u8272"}),"\uff1a\u6bcf\u4e2a\u8282\u70b9\u8981\u4e48\u662f\u7ea2\u8272\uff0c\u8981\u4e48\u662f\u9ed1\u8272\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u6839\u8282\u70b9"}),"\uff1a\u6839\u8282\u70b9\u662f\u9ed1\u8272\u7684\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u53f6\u5b50\u8282\u70b9"}),"\uff1a\u6240\u6709\u53f6\u5b50\u8282\u70b9\uff08NIL \u8282\u70b9\uff0c\u7a7a\u8282\u70b9\uff09\u90fd\u662f\u9ed1\u8272\u7684\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u7ea2\u8272\u8282\u70b9"}),"\uff1a\u5982\u679c\u4e00\u4e2a\u8282\u70b9\u662f\u7ea2\u8272\u7684\uff0c\u5219\u5b83\u7684\u4e24\u4e2a\u5b50\u8282\u70b9\u90fd\u662f\u9ed1\u8272\u7684\uff08\u4ece\u6bcf\u4e2a\u53f6\u5b50\u5230\u6839\u7684\u6240\u6709\u8def\u5f84\u4e0a\u4e0d\u80fd\u6709\u4e24\u4e2a\u8fde\u7eed\u7684\u7ea2\u8272\u8282\u70b9\uff09\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u9ed1\u8272\u9ad8\u5ea6"}),"\uff1a\u4ece\u4efb\u4e00\u8282\u70b9\u5230\u5176\u6bcf\u4e2a\u53f6\u5b50\u7684\u6240\u6709\u8def\u5f84\u90fd\u5305\u542b\u76f8\u540c\u6570\u76ee\u7684\u9ed1\u8272\u8282\u70b9\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u7ea2\u9ed1\u6811\u7684\u8fd9\u4e9b\u6027\u8d28\u786e\u4fdd\u4e86\u6811\u7684\u9ad8\u5ea6\u5927\u81f4\u4fdd\u6301\u5728 ",(0,l.jsx)(n.code,{children:"log n"})," \u7684\u6570\u91cf\u7ea7\uff0c\u4ece\u800c\u4f7f\u5f97\u6811\u7684\u64cd\u4f5c\uff08\u5982\u63d2\u5165\u3001\u5220\u9664\u548c\u67e5\u627e\uff09\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(log n)\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u7ea2\u9ed1\u6811\u7684\u64cd\u4f5c\u5305\u62ec\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u63d2\u5165"}),"\uff1a\u5728\u7ea2\u9ed1\u6811\u4e2d\u63d2\u5165\u4e00\u4e2a\u65b0\u8282\u70b9\u53ef\u80fd\u4f1a\u7834\u574f\u4e0a\u8ff0\u7684\u6027\u8d28\uff0c\u56e0\u6b64\u9700\u8981\u901a\u8fc7\u4e00\u7cfb\u5217\u7684\u65cb\u8f6c\u548c\u91cd\u65b0\u7740\u8272\u64cd\u4f5c\u6765\u6062\u590d\u5e73\u8861\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u5220\u9664"}),"\uff1a\u5220\u9664\u64cd\u4f5c\u540c\u6837\u53ef\u80fd\u7834\u574f\u7ea2\u9ed1\u6811\u7684\u6027\u8d28\uff0c\u9700\u8981\u901a\u8fc7\u65cb\u8f6c\u548c\u91cd\u65b0\u7740\u8272\u6765\u6062\u590d\u5e73\u8861\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u65cb\u8f6c"}),"\uff1a\u65cb\u8f6c\u662f\u7ea2\u9ed1\u6811\u4e2d\u7684\u4e00\u79cd\u57fa\u672c\u64cd\u4f5c\uff0c\u5305\u62ec\u5de6\u65cb\u548c\u53f3\u65cb\uff0c\u7528\u4e8e\u8c03\u6574\u6811\u7684\u7ed3\u6784\u800c\u4e0d\u7834\u574f\u4e8c\u53c9\u641c\u7d22\u6811\u7684\u6027\u8d28\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u91cd\u65b0\u7740\u8272"}),"\uff1a\u91cd\u65b0\u7740\u8272\u662f\u53e6\u4e00\u79cd\u8c03\u6574\u6811\u5e73\u8861\u7684\u65b9\u6cd5\uff0c\u901a\u8fc7\u6539\u53d8\u8282\u70b9\u7684\u989c\u8272\u6765\u6ee1\u8db3\u7ea2\u9ed1\u6811\u7684\u6027\u8d28\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u7ea2\u9ed1\u6811\u5728\u8ba1\u7b97\u673a\u79d1\u5b66\u4e2d\u975e\u5e38\u6709\u7528\uff0c\u7279\u522b\u662f\u5728\u9700\u8981\u9891\u7e41\u63d2\u5165\u548c\u5220\u9664\u64cd\u4f5c\u7684\u573a\u666f\u4e2d\uff0c\u5982\u5173\u8054\u6570\u7ec4\u3001\u5b57\u5178\u3001\u96c6\u5408\u7b49\u6570\u636e\u7ed3\u6784\u3002\u7531\u4e8e\u5176\u5e73\u8861\u6027\uff0c\u7ea2\u9ed1\u6811\u5728\u8fd9\u4e9b\u5e94\u7528\u4e2d\u63d0\u4f9b\u4e86\u6bd4\u666e\u901a\u4e8c\u53c9\u641c\u7d22\u6811\u66f4\u597d\u7684\u6027\u80fd\u4fdd\u8bc1\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},93881:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var s=r(58101);const l={},t=s.createContext(l);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);