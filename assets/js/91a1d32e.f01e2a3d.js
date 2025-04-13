"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8639],{3881:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>p});var r=t(8101);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}},6695:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u884c\u4e3a\u578b\u6a21\u5f0f/\u89e3\u91ca\u5668\u6a21\u5f0f/index","title":"\u89e3\u91ca\u5668\u6a21\u5f0f\uff08Interpreter Pattern\uff09","description":"\u89e3\u91ca\u5668\u6a21\u5f0f\uff08Interpreter Pattern\uff09\u662f\u4e00\u79cd\u884c\u4e3a\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u5b83\u7528\u4e8e\u5b9a\u4e49\u8bed\u8a00\u7684\u6587\u6cd5\u8868\u793a\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e2a\u89e3\u91ca\u5668\u6765\u89e3\u91ca\u8bed\u8a00\u4e2d\u7684\u8868\u8fbe\u5f0f\u3002\u8be5\u6a21\u5f0f\u901a\u5e38\u7528\u4e8e\u6784\u5efa\u89e3\u91ca\u5668\uff0c\u7528\u4e8e\u89e3\u6790\u548c\u6267\u884c\u7279\u5b9a\u8bed\u8a00\u6216\u8bed\u6cd5\u3002","source":"@site/docs/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u884c\u4e3a\u578b\u6a21\u5f0f/\u89e3\u91ca\u5668\u6a21\u5f0f/index.md","sourceDirName":"\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u884c\u4e3a\u578b\u6a21\u5f0f/\u89e3\u91ca\u5668\u6a21\u5f0f","slug":"/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u884c\u4e3a\u578b\u6a21\u5f0f/\u89e3\u91ca\u5668\u6a21\u5f0f/","permalink":"/docs/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u884c\u4e3a\u578b\u6a21\u5f0f/\u89e3\u91ca\u5668\u6a21\u5f0f/","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u884c\u4e3a\u578b\u6a21\u5f0f/\u89e3\u91ca\u5668\u6a21\u5f0f/index.md","tags":[],"version":"current","frontMatter":{},"sidebar":"\u524d\u7aef","previous":{"title":"\u89c2\u5bdf\u8005\u6a21\u5f0f\uff08Observer Pattern\uff09","permalink":"/docs/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u884c\u4e3a\u578b\u6a21\u5f0f/\u89c2\u5bdf\u8005\u6a21\u5f0f/"},"next":{"title":"\u8bbf\u95ee\u8005\u6a21\u5f0f\uff08Visitor Pattern\uff09","permalink":"/docs/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u884c\u4e3a\u578b\u6a21\u5f0f/\u8bbf\u95ee\u8005\u6a21\u5f0f/"}}');var s=t(5105),i=t(3881);const o={},p="\u89e3\u91ca\u5668\u6a21\u5f0f\uff08Interpreter Pattern\uff09",c={},a=[{value:"\u573a\u666f",id:"\u573a\u666f",level:2},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:2}];function x(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u89e3\u91ca\u5668\u6a21\u5f0finterpreter-pattern",children:"\u89e3\u91ca\u5668\u6a21\u5f0f\uff08Interpreter Pattern\uff09"})}),"\n",(0,s.jsx)(n.p,{children:"\u89e3\u91ca\u5668\u6a21\u5f0f\uff08Interpreter Pattern\uff09\u662f\u4e00\u79cd\u884c\u4e3a\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u5b83\u7528\u4e8e\u5b9a\u4e49\u8bed\u8a00\u7684\u6587\u6cd5\u8868\u793a\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e2a\u89e3\u91ca\u5668\u6765\u89e3\u91ca\u8bed\u8a00\u4e2d\u7684\u8868\u8fbe\u5f0f\u3002\u8be5\u6a21\u5f0f\u901a\u5e38\u7528\u4e8e\u6784\u5efa\u89e3\u91ca\u5668\uff0c\u7528\u4e8e\u89e3\u6790\u548c\u6267\u884c\u7279\u5b9a\u8bed\u8a00\u6216\u8bed\u6cd5\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u89e3\u91ca\u5668\u6a21\u5f0f\u7684\u6838\u5fc3\u601d\u60f3\u662f\u5c06\u8bed\u8a00\u7684\u6587\u6cd5\u8868\u793a\u6210\u4e00\u4e2a\u62bd\u8c61\u8bed\u6cd5\u6811\uff0c\u6bcf\u4e2a\u6587\u6cd5\u89c4\u5219\u90fd\u5bf9\u5e94\u4e00\u4e2a\u8868\u8fbe\u5f0f\uff0c\u89e3\u91ca\u5668\u9012\u5f52\u5730\u904d\u5386\u8fd9\u68f5\u6811\u6765\u6267\u884c\u8868\u8fbe\u5f0f\u3002\u89e3\u91ca\u5668\u6a21\u5f0f\u5c06\u590d\u6742\u7684\u8bed\u6cd5\u89e3\u91ca\u5206\u89e3\u4e3a\u4e00\u7cfb\u5217\u7b80\u5355\u7684\u8868\u8fbe\u5f0f\uff0c\u4f7f\u5f97\u7cfb\u7edf\u66f4\u5177\u53ef\u6269\u5c55\u6027\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u573a\u666f",children:"\u573a\u666f"}),"\n",(0,s.jsx)(n.p,{children:"\u9886\u57df\u7279\u5b9a\u8bed\u8a00\uff08DSL\uff09\uff1a\u5f53\u9700\u8981\u6784\u5efa\u81ea\u5b9a\u4e49\u9886\u57df\u7279\u5b9a\u8bed\u8a00\uff08\u5982\u914d\u7f6e\u6587\u4ef6\u89e3\u6790\u3001\u67e5\u8be2\u8bed\u8a00\u7b49\uff09\u65f6\uff0c\u89e3\u91ca\u5668\u6a21\u5f0f\u975e\u5e38\u6709\u7528\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6b63\u5219\u8868\u8fbe\u5f0f\u89e3\u6790\uff1a\u89e3\u91ca\u5668\u6a21\u5f0f\u53ef\u7528\u4e8e\u89e3\u6790\u548c\u6267\u884c\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u81ea\u5b9a\u4e49\u67e5\u8be2\u8bed\u8a00\uff1a\u6784\u5efa\u81ea\u5b9a\u4e49\u67e5\u8be2\u8bed\u8a00\u7684\u89e3\u91ca\u5668\uff0c\u7528\u4e8e\u67e5\u8be2\u6570\u636e\u5e93\u6216\u5176\u4ed6\u6570\u636e\u6e90\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u89c4\u5219\u5f15\u64ce\uff1a\u6784\u5efa\u89c4\u5219\u5f15\u64ce\uff0c\u7528\u4e8e\u6267\u884c\u590d\u6742\u7684\u4e1a\u52a1\u89c4\u5219\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5b9e\u73b0",children:"\u5b9e\u73b0"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u62bd\u8c61\u8868\u8fbe\u5f0f\nclass Expression {\n  interpret(context) {}\n}\n\n// \u7ec8\u7ed3\u7b26\u8868\u8fbe\u5f0f\uff0c\u8868\u793a\u6570\u5b57\nclass NumberExpression extends Expression {\n  constructor(number) {\n    super();\n    this.number = number;\n  }\n\n  interpret(context) {\n    return this.number;\n  }\n}\n\n// \u975e\u7ec8\u7ed3\u7b26\u8868\u8fbe\u5f0f\uff0c\u8868\u793a\u52a0\u6cd5\u64cd\u4f5c\nclass AddExpression extends Expression {\n  constructor(left, right) {\n    super();\n    this.left = left;\n    this.right = right;\n  }\n\n  interpret(context) {\n    return this.left.interpret(context) + this.right.interpret(context);\n  }\n}\n\n// \u4e0a\u4e0b\u6587\nclass Context {\n  constructor() {\n    this.expressionStack = [];\n  }\n\n  pushExpression(expression) {\n    this.expressionStack.push(expression);\n  }\n\n  popExpression() {\n    return this.expressionStack.pop();\n  }\n}\n\n// \u5ba2\u6237\u7aef\u4ee3\u7801\nconst context = new Context();\ncontext.pushExpression(new NumberExpression(5));\ncontext.pushExpression(new NumberExpression(10));\ncontext.pushExpression(\n  new AddExpression(context.popExpression(), context.popExpression())\n);\n\nconst result = context.popExpression().interpret(context);\nconsole.log(`Result: ${result}`); // Output: Result: 15\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0cExpression \u662f\u62bd\u8c61\u8868\u8fbe\u5f0f\u7c7b\uff0c\u5176\u4e2d\u5305\u542b\u4e86 interpret \u65b9\u6cd5\u3002\u5177\u4f53\u7684\u8868\u8fbe\u5f0f\u7c7b\u5982 NumberExpression \u548c AddExpression \u7ee7\u627f\u81ea\u62bd\u8c61\u8868\u8fbe\u5f0f\u7c7b\uff0c\u5b9e\u73b0\u4e86 interpret \u65b9\u6cd5\u4ee5\u6267\u884c\u4e0d\u540c\u7684\u8868\u8fbe\u5f0f\u64cd\u4f5c\u3002"}),"\n",(0,s.jsx)(n.p,{children:"Context \u7c7b\u7528\u4e8e\u7ef4\u62a4\u8868\u8fbe\u5f0f\u6808\uff0c\u5b83\u652f\u6301\u5c06\u8868\u8fbe\u5f0f\u63a8\u5165\u6808\u548c\u5f39\u51fa\u6808\uff0c\u4ee5\u4fbf\u6267\u884c\u8868\u8fbe\u5f0f\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\u4ee3\u7801\u901a\u8fc7\u521b\u5efa\u548c\u7ec4\u5408\u4e0d\u540c\u7684\u8868\u8fbe\u5f0f\u6765\u6784\u5efa\u7b97\u672f\u8868\u8fbe\u5f0f\uff0c\u5e76\u6700\u7ec8\u6267\u884c\u8868\u8fbe\u5f0f\u4ee5\u83b7\u53d6\u7ed3\u679c\u3002\u89e3\u91ca\u5668\u6a21\u5f0f\u5728\u6784\u5efa\u89e3\u6790\u5668\u3001\u9886\u57df\u7279\u5b9a\u8bed\u8a00\u548c\u89c4\u5219\u5f15\u64ce\u7b49\u65b9\u9762\u975e\u5e38\u6709\u7528\u3002"})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}}}]);