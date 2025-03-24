"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3469],{3881:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>l});var t=r(8101);const i={},o=t.createContext(i);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(o.Provider,{value:n},e.children)}},7001:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>s});const t=JSON.parse('{"id":"\u524d\u7aef/JavaScript/API \u624b\u518c/\u8bed\u6cd5/\u8bed\u53e5","title":"\u8bed\u53e5","description":"JavaScript \u5e94\u7528\u7a0b\u5e8f\u662f\u7531\u8bb8\u591a\u8bed\u6cd5\u6b63\u786e\u7684\u8bed\u53e5\u7ec4\u6210\u7684\u3002","source":"@site/docs/\u524d\u7aef/JavaScript/API \u624b\u518c/\u8bed\u6cd5/\u8bed\u53e5.mdx","sourceDirName":"\u524d\u7aef/JavaScript/API \u624b\u518c/\u8bed\u6cd5","slug":"/\u524d\u7aef/JavaScript/API \u624b\u518c/\u8bed\u6cd5/\u8bed\u53e5","permalink":"/docs/\u524d\u7aef/JavaScript/API \u624b\u518c/\u8bed\u6cd5/\u8bed\u53e5","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u524d\u7aef/JavaScript/API \u624b\u518c/\u8bed\u6cd5/\u8bed\u53e5.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"\u524d\u7aef","previous":{"title":"\u8bcd\u6cd5\u8bed\u6cd5","permalink":"/docs/\u524d\u7aef/JavaScript/API \u624b\u518c/\u8bed\u6cd5/\u8bcd\u6cd5\u8bed\u6cd5"},"next":{"title":"\u8fd0\u7b97\u7b26","permalink":"/docs/\u524d\u7aef/JavaScript/API \u624b\u518c/\u8bed\u6cd5/\u8fd0\u7b97\u7b26"}}');var i=r(5105),o=r(3881);const c={},l="\u8bed\u53e5",a={},s=[{value:"if...else",id:"ifelse",level:2},{value:"for",id:"for",level:2},{value:"for in",id:"for-in",level:2},{value:"for of",id:"for-of",level:2},{value:"while",id:"while",level:2},{value:"do...while",id:"dowhile",level:2},{value:"label",id:"label",level:2},{value:"throw",id:"throw",level:2},{value:"try...catch",id:"trycatch",level:2},{value:"debugger",id:"debugger",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u8bed\u53e5",children:"\u8bed\u53e5"})}),"\n",(0,i.jsx)(n.p,{children:"JavaScript \u5e94\u7528\u7a0b\u5e8f\u662f\u7531\u8bb8\u591a\u8bed\u6cd5\u6b63\u786e\u7684\u8bed\u53e5\u7ec4\u6210\u7684\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"ifelse",children:"if...else"}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u6307\u5b9a\u6761\u4ef6\u4e3a\u771f\uff0cif \u8bed\u53e5\u4f1a\u6267\u884c\u4e00\u6bb5\u8bed\u53e5\u3002\u5982\u679c\u6761\u4ef6\u4e3a\u5047\uff0c\u5219\u6267\u884c\u53e6\u4e00\u6bb5\u8bed\u53e5\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JavaScript",children:"if (x > 5) {\n    /* do the right thing */\n} else if (x > 50) {\n    /* do the right thing */\n} else {\n    /* do the right thing */\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"for",children:"for"}),"\n",(0,i.jsx)(n.p,{children:"for \u8bed\u53e5\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u5faa\u73af\uff0c\u5b83\u5305\u542b\u4e86\u4e09\u4e2a\u53ef\u9009\u7684\u8868\u8fbe\u5f0f\uff0c\u8fd9\u4e09\u4e2a\u8868\u8fbe\u5f0f\u88ab\u5305\u56f4\u5728\u5706\u62ec\u53f7\u4e4b\u4e2d\uff0c\u4f7f\u7528\u5206\u53f7\u5206\u9694\uff0c\u540e\u8ddf\u4e00\u4e2a\u7528\u4e8e\u5728\u5faa\u73af\u4e2d\u6267\u884c\u7684\u8bed\u53e5\uff08\u901a\u5e38\u662f\u4e00\u4e2a\u5757\u8bed\u53e5\uff09\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JavaScript",children:'let text = "";\nfor (let i = 0; i < 10; i++) {\n    if (i === 3) {\n        continue;\n    } else if (i === 5) {\n        break;\n    }\n    text = text + i;\n}\nconsole.log(text); // Expected output: "0124"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"for-in",children:"for in"}),"\n",(0,i.jsx)(n.p,{children:"for...in \u8bed\u53e5\u4ee5\u4efb\u610f\u987a\u5e8f\u8fed\u4ee3\u4e00\u4e2a\u5bf9\u8c61\u7684\u9664 Symbol \u4ee5\u5916\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\uff0c\u5305\u62ec\u7ee7\u627f\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JavaScript",children:'var obj = { a: 1, b: 2, c: 3 };\n\nfor (var prop in obj) {\n    console.log("obj." + prop + " = " + obj[prop]);\n}\n\n// Output:\n// "obj.a = 1"\n// "obj.b = 2"\n// "obj.c = 3"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"for-of",children:"for of"}),"\n",(0,i.jsx)(n.p,{children:"for...of \u8bed\u53e5\u5728\u53ef\u8fed\u4ee3\u5bf9\u8c61\uff08\u5305\u62ec Array\uff0cMap\uff0cSet\uff0cString\uff0cTypedArray\uff0carguments \u5bf9\u8c61\u7b49\u7b49\uff09\u4e0a\u521b\u5efa\u4e00\u4e2a\u8fed\u4ee3\u5faa\u73af\uff0c\u8c03\u7528\u81ea\u5b9a\u4e49\u8fed\u4ee3\u94a9\u5b50\uff0c\u5e76\u4e3a\u6bcf\u4e2a\u4e0d\u540c\u5c5e\u6027\u7684\u503c\u6267\u884c\u8bed\u53e5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JavaScript",children:'const array1 = ["a", "b", "c"];\n\nfor (const element of array1) {\n    console.log(element);\n}\n\n// Expected output: "a"\n// Expected output: "b"\n// Expected output: "c"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"while",children:"while"}),"\n",(0,i.jsx)(n.p,{children:"while \u8bed\u53e5\u53ef\u4ee5\u5728\u67d0\u4e2a\u6761\u4ef6\u8868\u8fbe\u5f0f\u4e3a\u771f\u7684\u524d\u63d0\u4e0b\uff0c\u5faa\u73af\u6267\u884c\u6307\u5b9a\u7684\u4e00\u6bb5\u4ee3\u7801\uff0c\u76f4\u5230\u90a3\u4e2a\u8868\u8fbe\u5f0f\u4e0d\u4e3a\u771f\u65f6\u7ed3\u675f\u5faa\u73af\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JavaScript",children:"let n = 0;\n\nwhile (n < 3) {\n    n++;\n}\n\nconsole.log(n);\n// Expected output: 3\n"})}),"\n",(0,i.jsx)(n.h2,{id:"dowhile",children:"do...while"}),"\n",(0,i.jsx)(n.p,{children:"do...while \u8bed\u53e5\u521b\u5efa\u4e00\u4e2a\u6267\u884c\u6307\u5b9a\u8bed\u53e5\u7684\u5faa\u73af\uff0c\u76f4\u5230 condition \u503c\u4e3a false\u3002\u5728\u6267\u884c statement \u540e\u68c0\u6d4b condition\uff0c\u6240\u4ee5\u6307\u5b9a\u7684 statement \u81f3\u5c11\u6267\u884c\u4e00\u6b21\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JavaScript",children:'var result = "";\nvar i = 0;\ndo {\n    i += 1;\n    result += i + " ";\n} while (i < 5);\n\nconsole.log(result); // Expected output: 1 2 3 4 5\n'})}),"\n",(0,i.jsx)(n.h2,{id:"label",children:"label"}),"\n",(0,i.jsx)(n.p,{children:"\u6807\u8bb0\u8bed\u53e5\u53ef\u4ee5\u548c break \u6216 continue \u8bed\u53e5\u4e00\u8d77\u4f7f\u7528\u3002\u6807\u8bb0\u5c31\u662f\u5728\u4e00\u6761\u8bed\u53e5\u524d\u9762\u52a0\u4e2a\u53ef\u4ee5\u5f15\u7528\u7684\u6807\u8bc6\u7b26\uff08identifier\uff09\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JavaScript",children:'let str = "";\n\nloop1: for (let i = 0; i < 5; i++) {\n    if (i === 1) {\n        continue loop1;\n    }\n    str = str + i;\n}\n\nconsole.log(str); // Expected output: "0234"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"throw",children:"throw"}),"\n",(0,i.jsx)(n.p,{children:"throw \u8bed\u53e5\u7528\u6765\u629b\u51fa\u4e00\u4e2a\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u5f02\u5e38\u3002\u5f53\u524d\u51fd\u6570\u7684\u6267\u884c\u5c06\u88ab\u505c\u6b62\uff08throw \u4e4b\u540e\u7684\u8bed\u53e5\u5c06\u4e0d\u4f1a\u6267\u884c\uff09\uff0c\u5e76\u4e14\u63a7\u5236\u5c06\u88ab\u4f20\u9012\u5230\u8c03\u7528\u5806\u6808\u4e2d\u7684\u7b2c\u4e00\u4e2a catch \u5757\u3002\u5982\u679c\u8c03\u7528\u8005\u51fd\u6570\u4e2d\u6ca1\u6709 catch \u5757\uff0c\u7a0b\u5e8f\u5c06\u4f1a\u7ec8\u6b62\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JavaScript",children:'function getRectArea(width, height) {\n    if (isNaN(width) || isNaN(height)) {\n        throw new Error("Parameter is not a number!");\n        console.log(123);\n    }\n}\n\ntry {\n    getRectArea(3, "A");\n} catch (e) {\n    console.error(e);\n    // Expected output: Error: Parameter is not a number!\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"trycatch",children:"try...catch"}),"\n",(0,i.jsx)(n.p,{children:"try...catch \u8bed\u53e5\u6807\u8bb0\u8981\u5c1d\u8bd5\u7684\u8bed\u53e5\u5757\uff0c\u5e76\u6307\u5b9a\u4e00\u4e2a\u51fa\u73b0\u5f02\u5e38\u65f6\u629b\u51fa\u7684\u54cd\u5e94\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JavaScript",children:"try {\n    nonExistentFunction();\n} catch (error) {\n    console.error(error);\n    // Expected output: ReferenceError: nonExistentFunction is not defined\n    // (Note: the exact output may be browser-dependent)\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"debugger",children:"debugger"}),"\n",(0,i.jsx)(n.p,{children:"debugger \u8bed\u53e5\u8c03\u7528\u4efb\u4f55\u53ef\u7528\u7684\u8c03\u8bd5\u529f\u80fd\uff0c\u4f8b\u5982\u8bbe\u7f6e\u65ad\u70b9\u3002\u5982\u679c\u6ca1\u6709\u8c03\u8bd5\u529f\u80fd\u53ef\u7528\uff0c\u5219\u6b64\u8bed\u53e5\u4e0d\u8d77\u4f5c\u7528\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);