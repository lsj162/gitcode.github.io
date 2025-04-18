"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6863],{37404:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u7ebf\u6027\u7ed3\u6784/\u961f\u5217 (Queue)/\u53cc\u7aef\u961f\u5217 (Deque)","title":"\u53cc\u7aef\u961f\u5217 (Deque)","description":"\u53cc\u7aef\u961f\u5217\uff08Deque\uff0cDouble-Ended Queue\uff09\u662f\u4e00\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u652f\u6301\u5728\u8868\u7684\u4e24\u7aef\u8fdb\u884c\u63d2\u5165\u548c\u5220\u9664\u64cd\u4f5c\u3002\u5b83\u7ed3\u5408\u4e86\u6808\uff08stack\uff09\u548c\u961f\u5217\uff08queue\uff09\u7684\u64cd\u4f5c\uff0c\u5141\u8bb8\u5feb\u901f\u5730\u4ece\u4e24\u7aef\u6dfb\u52a0\u6216\u79fb\u9664\u5143\u7d20\uff0c\u800c\u4e0d\u662f\u53ea\u4ece\u4e00\u7aef\u8fdb\u884c\uff0c\u56e0\u6b64\u5b83\u662f\u4e00\u79cd\u66f4\u7075\u6d3b\u7684\u6570\u636e\u7ed3\u6784\u3002","source":"@site/docs/\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u7ebf\u6027\u7ed3\u6784/\u961f\u5217 (Queue)/\u53cc\u7aef\u961f\u5217 (Deque).mdx","sourceDirName":"\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u7ebf\u6027\u7ed3\u6784/\u961f\u5217 (Queue)","slug":"/\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u7ebf\u6027\u7ed3\u6784/\u961f\u5217 (Queue)/\u53cc\u7aef\u961f\u5217 (Deque)","permalink":"/docs/\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u7ebf\u6027\u7ed3\u6784/\u961f\u5217 (Queue)/\u53cc\u7aef\u961f\u5217 (Deque)","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u7ebf\u6027\u7ed3\u6784/\u961f\u5217 (Queue)/\u53cc\u7aef\u961f\u5217 (Deque).mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"\u8ba1\u7b97\u673a\u7f16\u7a0b","previous":{"title":"\u4f18\u5148\u961f\u5217 (Priority Queue)","permalink":"/docs/\u8ba1\u7b97\u673a\u7f16\u7a0b/\u6570\u636e\u7ed3\u6784/\u7ebf\u6027\u7ed3\u6784/\u961f\u5217 (Queue)/\u4f18\u5148\u961f\u5217 (Priority Queue)"},"next":{"title":"\u5e7f\u5ea6\u4f18\u5148\u7b97\u6cd5","permalink":"/docs/\u8ba1\u7b97\u673a\u7f16\u7a0b/\u7b97\u6cd5\ud83c\udf1e/\u56fe/\u5e7f\u5ea6\u4f18\u5148\u7b97\u6cd5"}}');var o=t(25105),r=t(93881);const d={},c=void 0,u={},i=[];function l(e){const n={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"\u53cc\u7aef\u961f\u5217\uff08Deque\uff0cDouble-Ended Queue\uff09\u662f\u4e00\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u652f\u6301\u5728\u8868\u7684\u4e24\u7aef\u8fdb\u884c\u63d2\u5165\u548c\u5220\u9664\u64cd\u4f5c\u3002\u5b83\u7ed3\u5408\u4e86\u6808\uff08stack\uff09\u548c\u961f\u5217\uff08queue\uff09\u7684\u64cd\u4f5c\uff0c\u5141\u8bb8\u5feb\u901f\u5730\u4ece\u4e24\u7aef\u6dfb\u52a0\u6216\u79fb\u9664\u5143\u7d20\uff0c\u800c\u4e0d\u662f\u53ea\u4ece\u4e00\u7aef\u8fdb\u884c\uff0c\u56e0\u6b64\u5b83\u662f\u4e00\u79cd\u66f4\u7075\u6d3b\u7684\u6570\u636e\u7ed3\u6784\u3002"}),"\n",(0,o.jsx)(n.p,{children:"Deque \u7684\u7279\u6027\u5305\u62ec\uff1a"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u4e24\u7aef\u63d2\u5165\u548c\u5220\u9664"}),"\uff1a\u5728\u53cc\u7aef\u961f\u5217\u7684\u4e24\u7aef\u90fd\u53ef\u4ee5\u5feb\u901f\u63d2\u5165\u548c\u5220\u9664\u5143\u7d20\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u9ad8\u6548\u8bbf\u95ee"}),"\uff1a\u53cc\u7aef\u961f\u5217\u63d0\u4f9b\u4e86\u5728\u4e24\u7aef\u7684\u5feb\u901f\u63d2\u5165\u548c\u5220\u9664\u64cd\u4f5c\uff0c\u540c\u65f6\u63d0\u4f9b\u4e86\u4ece\u4e24\u7aef\u5230\u4e2d\u5fc3\u7684\u7ebf\u6027\u65f6\u95f4\u8bbf\u95ee\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u652f\u6301\u961f\u5217\u548c\u6808\u64cd\u4f5c"}),"\uff1a\u5b83\u65e2\u53ef\u4ee5\u4f5c\u4e3a\u961f\u5217\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u6808\u4f7f\u7528\u3002\u4f5c\u4e3a\u961f\u5217\u65f6\uff0c\u5b83\u9075\u5faa\u5148\u8fdb\u5148\u51fa\u7684\u539f\u5219\uff1b\u4f5c\u4e3a\u6808\u65f6\uff0c\u5b83\u9075\u5faa\u540e\u8fdb\u5148\u51fa\u7684\u539f\u5219\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5728 Python \u4e2d\uff0c",(0,o.jsx)(n.code,{children:"collections"}),"\u6a21\u5757\u63d0\u4f9b\u4e86\u4e00\u4e2a\u540d\u4e3a",(0,o.jsx)(n.code,{children:"deque"}),"\u7684\u7c7b\uff0c\u5b9e\u73b0\u4e86\u53cc\u7aef\u961f\u5217\u3002",(0,o.jsx)(n.code,{children:"deque"}),"\u7c7b\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7ebf\u7a0b\u5b89\u5168\u7684\u53cc\u7aef\u961f\u5217\uff0c\u53ef\u4ee5\u5728 O(1)\u65f6\u95f4\u5185\u4ece\u4e24\u7aef\u63d2\u5165\u548c\u5220\u9664\u5143\u7d20\u3002",(0,o.jsx)(n.code,{children:"deque"}),"\u53ef\u4ee5\u4f5c\u4e3a\u961f\u5217\u548c\u6808\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e8e\u5b9e\u73b0\u5176\u4ed6\u7684\u7b97\u6cd5\uff0c\u5982\u641c\u7d22\u7b97\u6cd5\u7b49\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u4f7f\u7528 Python \u7684",(0,o.jsx)(n.code,{children:"collections.deque"}),"\u7c7b\u7684\u4f8b\u5b50\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from collections import deque\n\n# \u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u53cc\u7aef\u961f\u5217\ndq = deque()\n\n# \u4ece\u53f3\u4fa7\u6dfb\u52a0\u5143\u7d20\ndq.append('a')\ndq.append('b')\ndq.append('c')\nprint(dq)  # \u8f93\u51fa: deque(['a', 'b', 'c'])\n\n# \u4ece\u5de6\u4fa7\u6dfb\u52a0\u5143\u7d20\ndq.appendleft('z')\nprint(dq)  # \u8f93\u51fa: deque(['z', 'a', 'b', 'c'])\n\n# \u4ece\u53f3\u4fa7\u5220\u9664\u5143\u7d20\ndq.pop()\nprint(dq)  # \u8f93\u51fa: deque(['z', 'a', 'b'])\n\n# \u4ece\u5de6\u4fa7\u5220\u9664\u5143\u7d20\ndq.popleft()\nprint(dq)  # \u8f93\u51fa: deque(['a', 'b'])\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u4f7f\u7528\u65f6\uff0c\u53cc\u7aef\u961f\u5217\u975e\u5e38\u9ad8\u6548\uff0c\u975e\u5e38\u9002\u5408\u9700\u8981\u5728\u4e24\u7aef\u8fdb\u884c\u5feb\u901f\u63d2\u5165\u548c\u5220\u9664\u64cd\u4f5c\u7684\u573a\u666f\uff0c\u4f8b\u5982\u5728\u5904\u7406\u5927\u91cf\u6570\u636e\u65f6\u8fdb\u884c\u7f13\u51b2\u5904\u7406\u6216\u8005\u4f5c\u4e3a\u52a8\u6001\u6570\u7ec4\u7684\u66ff\u4ee3\u54c1\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},93881:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var s=t(58101);const o={},r=s.createContext(o);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);