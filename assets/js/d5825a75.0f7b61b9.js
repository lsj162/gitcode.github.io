"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3894],{3881:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>r});var l=n(8101);const s={},i=l.createContext(s);function d(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(i.Provider,{value:t},e.children)}},8212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>u});const l=JSON.parse('{"id":"\u64cd\u4f5c\u7cfb\u7edf/Linux/ufw \u9632\u706b\u5899/index","title":"ufw \u9632\u706b\u5899","description":"\u5728 Debian \u53d1\u884c\u7248\u4e0a\uff0c\u9ed8\u8ba4\u53ef\u80fd\u6ca1\u6709\u5b89\u88c5 ufw\uff0c\u4f60\u53ef\u4ee5\u624b\u52a8\u5b89\u88c5\uff1a\u2705","source":"@site/docs/\u64cd\u4f5c\u7cfb\u7edf/Linux/ufw \u9632\u706b\u5899/index.mdx","sourceDirName":"\u64cd\u4f5c\u7cfb\u7edf/Linux/ufw \u9632\u706b\u5899","slug":"/\u64cd\u4f5c\u7cfb\u7edf/Linux/ufw \u9632\u706b\u5899/","permalink":"/docs/\u64cd\u4f5c\u7cfb\u7edf/Linux/ufw \u9632\u706b\u5899/","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u64cd\u4f5c\u7cfb\u7edf/Linux/ufw \u9632\u706b\u5899/index.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"\u64cd\u4f5c\u7cfb\u7edf","previous":{"title":"iptables \u7ba1\u7406\u9632\u706b\u5899","permalink":"/docs/\u64cd\u4f5c\u7cfb\u7edf/Linux/iptables \u7ba1\u7406\u9632\u706b\u5899/"},"next":{"title":"Linux \u6587\u4ef6\u64cd\u4f5c\u547d\u4ee4","permalink":"/docs/\u64cd\u4f5c\u7cfb\u7edf/Linux/\u7cfb\u7edf\u547d\u4ee4/Linux\u6587\u4ef6\u64cd\u4f5c\u547d\u4ee4"}}');var s=n(5105),i=n(3881);const d={},r="ufw \u9632\u706b\u5899",c={},u=[{value:"\u5728 Debian \u53d1\u884c\u7248\u4e0a\uff0c\u9ed8\u8ba4\u53ef\u80fd\u6ca1\u6709\u5b89\u88c5 ufw\uff0c\u4f60\u53ef\u4ee5\u624b\u52a8\u5b89\u88c5\uff1a\u2705",id:"\u5728-debian-\u53d1\u884c\u7248\u4e0a\u9ed8\u8ba4\u53ef\u80fd\u6ca1\u6709\u5b89\u88c5-ufw\u4f60\u53ef\u4ee5\u624b\u52a8\u5b89\u88c5",level:2},{value:"\u5b89\u88c5\u5b8c\u6210\u540e\uff1a",id:"\u5b89\u88c5\u5b8c\u6210\u540e",level:2},{value:"\u68c0\u67e5 ufw \u72b6\u6001",id:"\u68c0\u67e5-ufw-\u72b6\u6001",level:2},{value:"\u786e\u4fdd ufw \u5f00\u673a\u81ea\u542f",id:"\u786e\u4fdd-ufw-\u5f00\u673a\u81ea\u542f",level:2},{value:"\u5f00\u653e\u4ee5\u4e0b\u7aef\u53e3\uff1a",id:"\u5f00\u653e\u4ee5\u4e0b\u7aef\u53e3",level:2},{value:"\u67e5\u770b\u5f00\u542f\u7684\u7aef\u53e3",id:"\u67e5\u770b\u5f00\u542f\u7684\u7aef\u53e3",level:2},{value:"ufw vs. \u76f4\u63a5\u7528 iptables",id:"ufw-vs-\u76f4\u63a5\u7528-iptables",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"ufw-\u9632\u706b\u5899",children:"ufw \u9632\u706b\u5899"})}),"\n",(0,s.jsx)(t.h2,{id:"\u5728-debian-\u53d1\u884c\u7248\u4e0a\u9ed8\u8ba4\u53ef\u80fd\u6ca1\u6709\u5b89\u88c5-ufw\u4f60\u53ef\u4ee5\u624b\u52a8\u5b89\u88c5",children:"\u5728 Debian \u53d1\u884c\u7248\u4e0a\uff0c\u9ed8\u8ba4\u53ef\u80fd\u6ca1\u6709\u5b89\u88c5 ufw\uff0c\u4f60\u53ef\u4ee5\u624b\u52a8\u5b89\u88c5\uff1a\u2705"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"sudo apt update\nsudo apt install ufw -y\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u5b89\u88c5\u5b8c\u6210\u540e",children:"\u5b89\u88c5\u5b8c\u6210\u540e\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"sudo ufw enable   # \u542f\u7528\u9632\u706b\u5899\uff08\u5982\u679c\u4e4b\u524d\u672a\u542f\u7528\uff09\nsudo ufw reload   # \u91cd\u65b0\u52a0\u8f7d\u89c4\u5219\nsudo ufw disable  # \u5173\u95ed ufw \u9632\u706b\u5899\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u68c0\u67e5-ufw-\u72b6\u6001",children:"\u68c0\u67e5 ufw \u72b6\u6001"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"sudo ufw status verbose\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u786e\u4fdd-ufw-\u5f00\u673a\u81ea\u542f",children:"\u786e\u4fdd ufw \u5f00\u673a\u81ea\u542f"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"sudo systemctl enable ufw\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u5f00\u653e\u4ee5\u4e0b\u7aef\u53e3",children:"\u5f00\u653e\u4ee5\u4e0b\u7aef\u53e3\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"sudo ufw allow 25/tcp      # SMTP\nsudo ufw allow 587/tcp     # SMTP Submission\nsudo ufw allow 465/tcp     # SMTPS (SSL) \u5e9f\u5f03\nsudo ufw allow 80/tcp   # HTTP\nsudo ufw allow 443/tcp  # HTTPS\nsudo ufw allow 22/tcp  # SSH\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u67e5\u770b\u5f00\u542f\u7684\u7aef\u53e3",children:"\u67e5\u770b\u5f00\u542f\u7684\u7aef\u53e3"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"sudo ufw status verbose\n"})}),"\n",(0,s.jsx)(t.h2,{id:"ufw-vs-\u76f4\u63a5\u7528-iptables",children:"ufw vs. \u76f4\u63a5\u7528 iptables"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"\u5bf9\u6bd4\u9879"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"ufw"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"iptables"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u6613\u7528\u6027"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 \u7b80\u5355\uff0c\u9002\u5408\u5feb\u901f\u914d\u7f6e"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c \u590d\u6742\uff0c\u9700\u8981\u624b\u5199\u89c4\u5219"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u529f\u80fd"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u57fa\u4e8e iptables\uff0c\u7b80\u5316\u7ba1\u7406"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u66f4\u7075\u6d3b\uff0c\u53ef\u81ea\u5b9a\u4e49\u89c4\u5219"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u9002\u7528\u573a\u666f"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u9002\u5408\u5c0f\u578b\u670d\u52a1\u5668\u3001\u4e2a\u4eba\u4f7f\u7528"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u9002\u5408\u9ad8\u7ea7\u7528\u6237\u3001\u5927\u578b\u90e8\u7f72"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u5f00\u9500"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u4f4e"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u4f4e"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\u662f\u5426\u5fc5\u8981"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u53ef\u9009\uff0c\u4f46\u9002\u5408\u65b0\u624b"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u9002\u5408\u4e0d\u60f3\u5b89\u88c5 ufw \u7684\u7528\u6237"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}}}]);