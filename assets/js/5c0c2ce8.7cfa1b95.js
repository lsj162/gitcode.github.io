"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[814],{4595:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u884c\u4e3a\u578b\u6a21\u5f0f/\u8bbf\u95ee\u8005\u6a21\u5f0f/index","title":"\u8bbf\u95ee\u8005\u6a21\u5f0f\uff08Visitor Pattern\uff09","description":"\u8bbf\u95ee\u8005\u6a21\u5f0f\uff08Visitor Pattern\uff09\u662f\u4e00\u79cd\u884c\u4e3a\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u5b83\u7528\u4e8e\u5c01\u88c5\u4e00\u7ec4\u64cd\u4f5c\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u53ef\u4ee5\u5728\u4e0d\u6539\u53d8\u88ab\u64cd\u4f5c\u5bf9\u8c61\u7684\u7c7b\u7684\u524d\u63d0\u4e0b\u5e94\u7528\u4e8e\u8fd9\u4e9b\u5bf9\u8c61\u3002\u8bbf\u95ee\u8005\u6a21\u5f0f\u7684\u76ee\u7684\u662f\u5c06\u6570\u636e\u7ed3\u6784\u548c\u6570\u636e\u64cd\u4f5c\u5206\u79bb\uff0c\u4ece\u800c\u4f7f\u6dfb\u52a0\u65b0\u64cd\u4f5c\u66f4\u52a0\u5bb9\u6613\uff0c\u540c\u65f6\u4fdd\u6301\u6570\u636e\u7ed3\u6784\u7684\u7a33\u5b9a\u3002","source":"@site/docs/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u884c\u4e3a\u578b\u6a21\u5f0f/\u8bbf\u95ee\u8005\u6a21\u5f0f/index.md","sourceDirName":"\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u884c\u4e3a\u578b\u6a21\u5f0f/\u8bbf\u95ee\u8005\u6a21\u5f0f","slug":"/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u884c\u4e3a\u578b\u6a21\u5f0f/\u8bbf\u95ee\u8005\u6a21\u5f0f/","permalink":"/docs/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u884c\u4e3a\u578b\u6a21\u5f0f/\u8bbf\u95ee\u8005\u6a21\u5f0f/","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u884c\u4e3a\u578b\u6a21\u5f0f/\u8bbf\u95ee\u8005\u6a21\u5f0f/index.md","tags":[],"version":"current","frontMatter":{},"sidebar":"\u524d\u7aef","previous":{"title":"\u89e3\u91ca\u5668\u6a21\u5f0f\uff08Interpreter Pattern\uff09","permalink":"/docs/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u884c\u4e3a\u578b\u6a21\u5f0f/\u89e3\u91ca\u5668\u6a21\u5f0f/"},"next":{"title":"\u8d23\u4efb\u94fe\u6a21\u5f0f\uff08Chain of Responsibility Pattern\uff09","permalink":"/docs/\u524d\u7aef/JavaScript/\u8bbe\u8ba1\u6a21\u5f0f/\u884c\u4e3a\u578b\u6a21\u5f0f/\u8d23\u4efb\u94fe\u6a21\u5f0f/"}}');var s=e(5105),o=e(7890);const a={},r="\u8bbf\u95ee\u8005\u6a21\u5f0f\uff08Visitor Pattern\uff09",c={},p=[{value:"\u573a\u666f",id:"\u573a\u666f",level:2},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:2}];function l(n){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"\u8bbf\u95ee\u8005\u6a21\u5f0fvisitor-pattern",children:"\u8bbf\u95ee\u8005\u6a21\u5f0f\uff08Visitor Pattern\uff09"})}),"\n",(0,s.jsx)(t.p,{children:"\u8bbf\u95ee\u8005\u6a21\u5f0f\uff08Visitor Pattern\uff09\u662f\u4e00\u79cd\u884c\u4e3a\u578b\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u5b83\u7528\u4e8e\u5c01\u88c5\u4e00\u7ec4\u64cd\u4f5c\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u53ef\u4ee5\u5728\u4e0d\u6539\u53d8\u88ab\u64cd\u4f5c\u5bf9\u8c61\u7684\u7c7b\u7684\u524d\u63d0\u4e0b\u5e94\u7528\u4e8e\u8fd9\u4e9b\u5bf9\u8c61\u3002\u8bbf\u95ee\u8005\u6a21\u5f0f\u7684\u76ee\u7684\u662f\u5c06\u6570\u636e\u7ed3\u6784\u548c\u6570\u636e\u64cd\u4f5c\u5206\u79bb\uff0c\u4ece\u800c\u4f7f\u6dfb\u52a0\u65b0\u64cd\u4f5c\u66f4\u52a0\u5bb9\u6613\uff0c\u540c\u65f6\u4fdd\u6301\u6570\u636e\u7ed3\u6784\u7684\u7a33\u5b9a\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u8bbf\u95ee\u8005\u6a21\u5f0f\u4e2d\uff0c\u6709\u4e24\u4e2a\u5173\u952e\u5143\u7d20\uff1a"}),"\n",(0,s.jsx)(t.p,{children:"\u8bbf\u95ee\u8005\uff08Visitor\uff09\uff1a\u8bbf\u95ee\u8005\u662f\u4e00\u4e2a\u63a5\u53e3\u6216\u62bd\u8c61\u7c7b\uff0c\u5b83\u5b9a\u4e49\u4e86\u4e00\u7ec4\u8bbf\u95ee\u64cd\u4f5c\uff0c\u6bcf\u4e2a\u64cd\u4f5c\u5bf9\u5e94\u4e0d\u540c\u7c7b\u578b\u7684\u5143\u7d20\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u5143\u7d20\uff08Element\uff09\uff1a\u5143\u7d20\u662f\u6570\u636e\u7ed3\u6784\u7684\u7ec4\u6210\u90e8\u5206\uff0c\u901a\u5e38\u662f\u4e00\u4e2a\u63a5\u53e3\u6216\u62bd\u8c61\u7c7b\uff0c\u5b83\u5b9a\u4e49\u4e86\u4e00\u4e2a\u63a5\u53d7\u8bbf\u95ee\u8005\u7684\u65b9\u6cd5\uff08\u901a\u5e38\u79f0\u4e3a accept \u65b9\u6cd5\uff09\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u5141\u8bb8\u8bbf\u95ee\u8005\u8bbf\u95ee\u5143\u7d20\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u573a\u666f",children:"\u573a\u666f"}),"\n",(0,s.jsx)(t.p,{children:"\u6570\u636e\u7ed3\u6784\u7a33\u5b9a\uff0c\u4f46\u64cd\u4f5c\u591a\u53d8\uff1a\u5f53\u6570\u636e\u7ed3\u6784\u76f8\u5bf9\u7a33\u5b9a\uff0c\u4f46\u9700\u8981\u6267\u884c\u591a\u79cd\u4e0d\u540c\u64cd\u4f5c\u65f6\uff0c\u8bbf\u95ee\u8005\u6a21\u5f0f\u975e\u5e38\u6709\u7528\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u89e3\u8026\u64cd\u4f5c\u548c\u6570\u636e\u7ed3\u6784\uff1a\u8bbf\u95ee\u8005\u6a21\u5f0f\u53ef\u4ee5\u5e2e\u52a9\u89e3\u8026\u6570\u636e\u7ed3\u6784\u548c\u64cd\u4f5c\uff0c\u4f7f\u7cfb\u7edf\u66f4\u5177\u53ef\u7ef4\u62a4\u6027\u548c\u6269\u5c55\u6027\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u6dfb\u52a0\u65b0\u64cd\u4f5c\uff1a\u5982\u679c\u9700\u8981\u5728\u4e0d\u6539\u53d8\u73b0\u6709\u6570\u636e\u7ed3\u6784\u7684\u60c5\u51b5\u4e0b\u6dfb\u52a0\u65b0\u7684\u64cd\u4f5c\uff0c\u8bbf\u95ee\u8005\u6a21\u5f0f\u53ef\u4ee5\u964d\u4f4e\u7ef4\u62a4\u6210\u672c\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"\u5b9e\u73b0",children:"\u5b9e\u73b0"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'// \u8bbf\u95ee\u8005\u63a5\u53e3\nclass AnimalVisitor {\n  visitDog(dog) {}\n  visitCat(cat) {}\n}\n\n// \u5177\u4f53\u8bbf\u95ee\u8005\uff0c\u5b9e\u73b0\u4e0d\u540c\u7c7b\u578b\u52a8\u7269\u7684\u8bbf\u95ee\u64cd\u4f5c\nclass SpeakVisitor extends AnimalVisitor {\n  visitDog(dog) {\n    console.log("Dog speaks: Woof woof!");\n  }\n\n  visitCat(cat) {\n    console.log("Cat speaks: Meow!");\n  }\n}\n\nclass JumpVisitor extends AnimalVisitor {\n  visitDog(dog) {\n    console.log("Dog jumps high!");\n  }\n\n  visitCat(cat) {\n    console.log("Cat jumps gracefully.");\n  }\n}\n\n// \u5143\u7d20\u63a5\u53e3\nclass Animal {\n  accept(visitor) {}\n}\n\n// \u5177\u4f53\u5143\u7d20\uff0c\u4e0d\u540c\u7c7b\u578b\u7684\u52a8\u7269\nclass Dog extends Animal {\n  accept(visitor) {\n    visitor.visitDog(this);\n  }\n}\n\nclass Cat extends Animal {\n  accept(visitor) {\n    visitor.visitCat(this);\n  }\n}\n\n// \u5ba2\u6237\u7aef\u4ee3\u7801\nconst dog = new Dog();\nconst cat = new Cat();\n\nconst speakVisitor = new SpeakVisitor();\nconst jumpVisitor = new JumpVisitor();\n\ndog.accept(speakVisitor); // Dog speaks: Woof woof!\ncat.accept(speakVisitor); // Cat speaks: Meow!\n\ndog.accept(jumpVisitor); // Dog jumps high!\ncat.accept(jumpVisitor); // Cat jumps gracefully.\n'})}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0cAnimalVisitor \u662f\u8bbf\u95ee\u8005\u63a5\u53e3\uff0c\u5b9a\u4e49\u4e86\u4e24\u4e2a\u8bbf\u95ee\u64cd\u4f5c\uff1avisitDog \u548c visitCat\u3002\u5177\u4f53\u8bbf\u95ee\u8005\u5982 SpeakVisitor \u548c JumpVisitor \u5b9e\u73b0\u4e86\u8fd9\u4e9b\u64cd\u4f5c\u3002"}),"\n",(0,s.jsx)(t.p,{children:"Animal \u662f\u5143\u7d20\u63a5\u53e3\uff0c\u5b9a\u4e49\u4e86 accept \u65b9\u6cd5\uff0c\u7528\u4e8e\u5141\u8bb8\u8bbf\u95ee\u8005\u8bbf\u95ee\u5143\u7d20\u3002\u5177\u4f53\u5143\u7d20\u5982 Dog \u548c Cat \u5b9e\u73b0\u4e86 accept \u65b9\u6cd5\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u5ba2\u6237\u7aef\u4ee3\u7801\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u8bbf\u95ee\u8005\u6765\u8bbf\u95ee\u4e0d\u540c\u7c7b\u578b\u7684\u52a8\u7269\uff0c\u5e76\u6267\u884c\u4e0d\u540c\u7684\u64cd\u4f5c\u3002\u8fd9\u5141\u8bb8\u5728\u4e0d\u6539\u53d8\u52a8\u7269\u7c7b\u7684\u60c5\u51b5\u4e0b\u6dfb\u52a0\u65b0\u7684\u8bbf\u95ee\u64cd\u4f5c\u3002\u8bbf\u95ee\u8005\u6a21\u5f0f\u6709\u52a9\u4e8e\u7ef4\u62a4\u548c\u6269\u5c55\u4ee3\u7801\uff0c\u5c24\u5176\u5728\u9700\u8981\u6267\u884c\u591a\u79cd\u4e0d\u540c\u64cd\u4f5c\u7684\u573a\u666f\u4e2d\u3002"})]})}function d(n={}){const{wrapper:t}={...(0,o.R)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},7890:(n,t,e)=>{e.d(t,{R:()=>a,x:()=>r});var i=e(8101);const s={},o=i.createContext(s);function a(n){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function r(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),i.createElement(o.Provider,{value:t},n.children)}}}]);