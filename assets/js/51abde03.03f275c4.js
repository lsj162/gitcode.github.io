"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2646],{15306:e=>{e.exports=JSON.parse('{"permalink":"/blog/Postfix","editUrl":"https://github.com/blog/Postfix/index.mdx","source":"@site/blog/Postfix/index.mdx","title":"Postfix","description":"Postfix \u662f\u4ec0\u4e48\uff1f","date":"2025-01-01T10:00:00.000Z","tags":[],"readingTime":5.905,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Postfix","date":"2025-01-01T10:00","authors":[],"tags":[]},"unlisted":false,"prevItem":{"title":"BSD \u5957\u63a5\u5b57","permalink":"/blog/BSD \u5957\u63a5\u5b57"},"nextItem":{"title":"unsplash","permalink":"/blog/Unsplash"}}')},75351:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>x});var l=i(15306),t=i(25105),s=i(93881);const d={title:"Postfix",date:"2025-01-01T10:00",authors:[],tags:[]},r=void 0,c={authorsImageUrls:[]},x=[{value:"Postfix \u662f\u4ec0\u4e48\uff1f",id:"postfix-\u662f\u4ec0\u4e48",level:2},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4e3a\u4ec0\u4e48\u9009\u62e9 Postfix \u90ae\u4ef6\u670d\u52a1\u5668\u8f6f\u4ef6?",id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-postfix-\u90ae\u4ef6\u670d\u52a1\u5668\u8f6f\u4ef6",level:3},{value:"Postfix \u5b89\u5168\uff1f",id:"postfix-\u5b89\u5168",level:3},{value:"SMTP \u662f\u4ec0\u4e48?",id:"smtp-\u662f\u4ec0\u4e48",level:2},{value:"SMTP \u670d\u52a1\u5668\u7684\u4f5c\u7528\uff1a",id:"smtp-\u670d\u52a1\u5668\u7684\u4f5c\u7528",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"DNS \u6dfb\u52a0 MX \u8bb0\u5f55",id:"dns-\u6dfb\u52a0-mx-\u8bb0\u5f55",level:3},{value:"DNS \u6dfb\u52a0 SPF \u8bb0\u5f55",id:"dns-\u6dfb\u52a0-spf-\u8bb0\u5f55",level:3},{value:"DKIM \u7528\u4e8e\u90ae\u4ef6\u7b7e\u540d",id:"dkim-\u7528\u4e8e\u90ae\u4ef6\u7b7e\u540d",level:3},{value:"DNS \u6dfb\u52a0 DMARC \u8bb0\u5f55\uff1a",id:"dns-\u6dfb\u52a0-dmarc-\u8bb0\u5f55",level:3},{value:"\u9a8c\u8bc1\u6240\u6709\u90ae\u4ef6\u8bbe\u7f6e",id:"\u9a8c\u8bc1\u6240\u6709\u90ae\u4ef6\u8bbe\u7f6e",level:2},{value:"\u68c0\u67e5",id:"\u68c0\u67e5",level:2},{value:"\u91cd\u542f",id:"\u91cd\u542f",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"postfix-\u662f\u4ec0\u4e48",children:"Postfix \u662f\u4ec0\u4e48\uff1f"}),"\n",(0,t.jsxs)(n.p,{children:["Postfix \u662f\u4e00\u6b3e\u5f00\u6e90\u7684 \u90ae\u4ef6\u4f20\u8f93\u4ee3\u7406\uff08MTA, Mail Transfer Agent\uff09\uff0c\u7528\u4e8e\u5728 Linux/Unix \u670d\u52a1\u5668 \u4e0a\u53d1\u9001\u3001\u63a5\u6536\u548c\u8def\u7531\u7535\u5b50\u90ae\u4ef6\u3002\u6700\u521d\u5728 IBM \u7814\u7a76\u90e8\u95e8\u5f00\u53d1\uff0c\u4f5c\u4e3a\u5e7f\u6cdb\u4f7f\u7528\u7684 Sendmail \u7a0b\u5e8f\u7684\u66ff\u4ee3\u54c1\u3002",(0,t.jsx)(n.a,{href:"http://www.porcupine.org/wietse/",children:"Wietse Venema"})]}),"\n","\n",(0,t.jsx)(n.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,t.jsx)(n.p,{children:"Postfix \u6709\u6570\u767e\u4e2a\u914d\u7f6e\u53c2\u6570\uff0c\u8fd9\u4e9b\u53c2\u6570\u901a\u8fc7 main.cf \u6587\u4ef6\u8fdb\u884c\u63a7\u5236\u3002\u5e78\u8fd0\u7684\u662f\uff0c\u6240\u6709\u53c2\u6570\u90fd\u6709\u5408\u7406\u7684\u9ed8\u8ba4\u503c\u3002\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ea\u9700\u914d\u7f6e\u4e24\u4e09\u4e2a\u53c2\u6570\uff0c\u5c31\u53ef\u4ee5\u5f00\u59cb\u4f7f\u7528\u90ae\u4ef6\u7cfb\u7edf\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-postfix-\u90ae\u4ef6\u670d\u52a1\u5668\u8f6f\u4ef6",children:"\u4e3a\u4ec0\u4e48\u9009\u62e9 Postfix \u90ae\u4ef6\u670d\u52a1\u5668\u8f6f\u4ef6?"}),"\n",(0,t.jsx)(n.p,{children:"Postfix\uff08\u63a8\u8350\uff0cLinux \u4e0a\u6700\u6d41\u884c\uff09\uff0cPostfix \u662f\u5f00\u6e90\u7684\u90ae\u4ef6\u670d\u52a1\u5668\u8f6f\u4ef6\uff0c\u5e76\u4e14\u5728\u5b89\u5168\u6027\u65b9\u9762\u975e\u5e38\u51fa\u8272\u3002"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u9002\u7528\u573a\u666f"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Postfix"}),(0,t.jsx)(n.th,{style:{textAlign:"right"},children:"Sendmail"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"\u4f01\u4e1a\u90ae\u4ef6\u670d\u52a1\u5668"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705 \u63a8\u8350\uff08\u9ad8\u6027\u80fd\uff0c\u9ad8\u5b89\u5168\uff09"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"\u274c \u4e0d\u63a8\u8350\uff08\u7ef4\u62a4\u6210\u672c\u9ad8\uff09"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"\u5927\u89c4\u6a21\u90ae\u4ef6\u7cfb\u7edf"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705 \u9002\u7528\uff08\u9ad8\u5e76\u53d1\uff0c\u90ae\u4ef6\u961f\u5217\u4f18\u5316\uff09"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"\u274c \u4e0d\u9002\u7528\uff08\u5355\u8fdb\u7a0b\u74f6\u9888\uff09"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"\u4e2a\u4eba\u90ae\u4ef6\u670d\u52a1\u5668"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705 \u63a8\u8350\uff08\u6613\u914d\u7f6e\uff09"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"\u274c \u4e0d\u63a8\u8350\uff08\u590d\u6742\uff0c\u6613\u51fa\u9519\uff09"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"\u65e7 Unix \u670d\u52a1\u5668"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705 \u53ef\u7528"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"\u2705 \u9002\u5408\uff08Unix \u4f20\u7edf\u90ae\u4ef6\u670d\u52a1\u5668\uff09"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"postfix-\u5b89\u5168",children:"Postfix \u5b89\u5168\uff1f"}),"\n",(0,t.jsx)(n.p,{children:"\u2705 \u6700\u5c0f\u6743\u9650\u8bbe\u8ba1\uff1a\u91c7\u7528 \u6a21\u5757\u5316\u67b6\u6784\uff0c\u5927\u90e8\u5206\u8fdb\u7a0b\u5728\u53d7\u9650\u6743\u9650\u4e0b\u8fd0\u884c\uff0c\u5373\u4f7f\u6709\u6f0f\u6d1e\uff0c\u4e5f\u5f88\u96be\u63d0\u5347\u6743\u9650\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u2705 \u9632\u6b62\u5783\u573e\u90ae\u4ef6\uff1a\u652f\u6301 SPF\u3001DKIM\u3001DMARC\uff0c\u7ed3\u5408 RBL\uff08\u9ed1\u540d\u5355\uff09\u673a\u5236\u6709\u6548\u62e6\u622a\u5783\u573e\u90ae\u4ef6\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u2705 SMTP \u8ba4\u8bc1\uff1a\u652f\u6301 TLS \u52a0\u5bc6\uff08STARTTLS\uff09\uff0c\u53ef\u9632\u6b62\u660e\u6587\u5bc6\u7801\u6cc4\u9732\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u2705 \u9632\u6b62\u90ae\u4ef6\u4f2a\u9020\uff1a\u9ed8\u8ba4\u652f\u6301 SASL \u8ba4\u8bc1\uff0c\u53ef\u7ed3\u5408 OpenDKIM \u8fdb\u884c DKIM \u7b7e\u540d\uff0c\u63d0\u9ad8\u90ae\u4ef6\u53ef\u4fe1\u5ea6\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u2705 DDoS \u4fdd\u62a4\uff1a\u652f\u6301 Greylisting\uff08\u7070\u540d\u5355\uff09\uff0c\u9632\u6b62\u90ae\u4ef6\u8f70\u70b8\u653b\u51fb\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u2705 \u65e5\u5fd7\u76d1\u63a7\uff1a\u652f\u6301 fail2ban\uff0c\u53ef\u81ea\u52a8\u5c01\u7981\u53ef\u7591 IP\uff0c\u9632\u6b62\u66b4\u529b\u7834\u89e3\u3002"}),"\n",(0,t.jsx)(n.h1,{id:"\u7528\u9014",children:"\u7528\u9014\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"\u90a3\u4e48\u5b9e\u73b0\u4ee5\u57df\u540d\u65b9\u5f0f\u53d1\u9001\u90ae\u4ef6\u662f\u4e0d\u662f\u5f88\u9177\u3002\u2705 \u6700\u4f73\u65b9\u6848\uff1a\u4f7f\u7528 SMTP \u4ee3\u53d1\uff08163\u3001Gmail\u3001SendGrid\uff09"}),"\n",(0,t.jsx)(n.h2,{id:"smtp-\u662f\u4ec0\u4e48",children:"SMTP \u662f\u4ec0\u4e48?"}),"\n",(0,t.jsx)(n.p,{children:"SMTP\uff08Simple Mail Transfer Protocol\uff0c\u7b80\u5355\u90ae\u4ef6\u4f20\u8f93\u534f\u8bae\uff09\u670d\u52a1\u5668\u662f\u7528\u4e8e\u53d1\u9001\u90ae\u4ef6\u7684\u670d\u52a1\u5668\uff0c\u5b83\u8d1f\u8d23\u63a5\u6536\u3001\u4f20\u8f93\u548c\u5206\u53d1\u7535\u5b50\u90ae\u4ef6\u5230\u76ee\u6807\u90ae\u4ef6\u670d\u52a1\u5668\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"smtp-\u670d\u52a1\u5668\u7684\u4f5c\u7528",children:"SMTP \u670d\u52a1\u5668\u7684\u4f5c\u7528\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"\ud83d\udce9 \u53d1\u9001\u90ae\u4ef6\uff1a\u65e0\u8bba\u662f\u4e2a\u4eba\u90ae\u4ef6\u3001\u7cfb\u7edf\u901a\u77e5\u8fd8\u662f\u6279\u91cf\u90ae\u4ef6\uff0cSMTP \u670d\u52a1\u5668\u90fd\u662f\u90ae\u4ef6\u53d1\u9001\u7684\u6838\u5fc3\u3002\n\u2705 \u8eab\u4efd\u8ba4\u8bc1\uff1a\u9632\u6b62\u5783\u573e\u90ae\u4ef6\uff0cSMTP \u670d\u52a1\u5668\u901a\u5e38\u8981\u6c42\u53d1\u4ef6\u4eba\u8eab\u4efd\u9a8c\u8bc1\uff08\u7528\u6237\u540d+\u5bc6\u7801\uff09\u3002\n\ud83d\udd04 \u90ae\u4ef6\u4e2d\u7ee7\uff1aSMTP \u670d\u52a1\u5668\u53ef\u4ee5\u4f5c\u4e3a\u90ae\u4ef6\u4e2d\u7ee7\uff0c\u628a\u90ae\u4ef6\u4ece\u4e00\u4e2a\u670d\u52a1\u5668\u8f6c\u53d1\u5230\u53e6\u4e00\u4e2a\u670d\u52a1\u5668\u3002\n\ud83d\ude80 \u63d0\u9ad8\u90ae\u4ef6\u9001\u8fbe\u7387\uff1a\u4f7f\u7528\u53d7\u4fe1\u4efb\u7684 SMTP \u670d\u52a1\u5668\uff08\u5982 Gmail\u3001SendGrid\uff09\u53ef\u4ee5\u63d0\u9ad8\u90ae\u4ef6\u9001\u8fbe\u7387\uff0c\u907f\u514d\u8fdb\u5165\u5783\u573e\u90ae\u4ef6\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,t.jsx)(n.h3,{id:"dns-\u6dfb\u52a0-mx-\u8bb0\u5f55",children:"DNS \u6dfb\u52a0 MX \u8bb0\u5f55"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",children:"| \u540d\u79f0 | \u8bb0\u5f55\u7c7b\u578b |               \u503c |\n| :--- | :------: | ---------------: |\n| @    |    MX    | mail.example.com |\n"})}),"\n",(0,t.jsx)(n.h3,{id:"dns-\u6dfb\u52a0-spf-\u8bb0\u5f55",children:"DNS \u6dfb\u52a0 SPF \u8bb0\u5f55"}),"\n",(0,t.jsx)(n.p,{children:"SPF \u8bb0\u5f55\u7528\u4e8e\u9a8c\u8bc1\u90ae\u4ef6\u7684\u6765\u6e90\u662f\u5426\u53ef\u4fe1\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",children:"| \u540d\u79f0 | \u8bb0\u5f55\u7c7b\u578b |                              \u503c |\n| :--- | :------: | ------------------------------: |\n| @    |   TXT    | v=spf1 ip4:192.168.111.111 -all |\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ip4:192.168.1.100\uff1a\u5141\u8bb8\u6b64 IP \u5730\u5740\u53d1\u9001\u90ae\u4ef6\u3002"}),"\n",(0,t.jsx)(n.li,{children:"-all\uff1a\u62d2\u7edd\u6240\u6709\u4e0d\u5339\u914d\u7684\u6765\u6e90\uff0c\u9632\u6b62\u4f2a\u9020\u90ae\u4ef6\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"dkim-\u7528\u4e8e\u90ae\u4ef6\u7b7e\u540d",children:"DKIM \u7528\u4e8e\u90ae\u4ef6\u7b7e\u540d"}),"\n",(0,t.jsx)(n.p,{children:"\u66f4\u591a\u5b89\u5168\uff0cDKIM \u7528\u4e8e\u90ae\u4ef6\u7b7e\u540d\uff0c\u786e\u4fdd\u90ae\u4ef6\u672a\u88ab\u7be1\u6539\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'# 1. \u5b89\u88c5 OpenDKIM\napt install opendkim opendkim-tools\n\n# 2. \u751f\u6210 DKIM \u5bc6\u94a5\uff08\u67e5\u770b cat default.txt\uff09\nopendkim-genkey -D /etc/opendkim/keys/ -s default -d example.com\n\n# 3. \u5728 DNS \u4e2d\u6dfb\u52a0 DKIM \u8bb0\u5f55\uff1a\ndefault._domainkey TXT  "v=DKIM1; k=rsa; p=\u4f60\u7684\u516c\u94a5"\n\n# 4. \u914d\u7f6e Postfix \u5173\u8054 DKIM\uff1a \u5728 main.cf \u4e2d\u6dfb\u52a0\uff1a\nsmtpd_milters = unix:/var/run/opendkim/opendkim.sock\nnon_smtpd_milters = unix:/var/run/opendkim/opendkim.sock\n'})}),"\n",(0,t.jsx)(n.h3,{id:"dns-\u6dfb\u52a0-dmarc-\u8bb0\u5f55",children:"DNS \u6dfb\u52a0 DMARC \u8bb0\u5f55\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'_dmarc TXT "v=DMARC1; p=reject; rua=mailto:admin@example.com"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"v=DMARC1\uff1a\u8868\u793a DMARC \u7248\u672c\u3002"}),"\n",(0,t.jsx)(n.li,{children:"p=reject\uff1a\u62d2\u7edd\u6240\u6709\u4e0d\u7b26\u5408 SPF/DKIM \u89c4\u5219\u7684\u90ae\u4ef6\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["rua=mailto",":admin","@example.com\uff1a\u63a5\u6536 DMARC \u62a5\u544a\u7684\u90ae\u7bb1\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9a8c\u8bc1\u6240\u6709\u90ae\u4ef6\u8bbe\u7f6e",children:"\u9a8c\u8bc1\u6240\u6709\u90ae\u4ef6\u8bbe\u7f6e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# 1. \u68c0\u67e5 SPF \u8bb0\u5f55\ndig TXT example.com\n\n# 2. \u68c0\u67e5 DKIM \u8bb0\u5f55\ndig TXT default._domainkey.example.com\n\n# 3. \u68c0\u67e5 DMARC \u8bb0\u5f55\ndig TXT _dmarc.example.com\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u68c0\u67e5",children:"\u68c0\u67e5"}),"\n",(0,t.jsx)(n.p,{children:"\u53cd\u5411 DNS \u89e3\u6790\uff0c\u786e\u4fdd\u4f60\u7684\u90ae\u4ef6\u670d\u52a1\u5668\u57df\u540d\u4e0e rDNS \u5339\u914d\uff0c\u5426\u5219\u90ae\u4ef6\u5bb9\u6613\u88ab\u5224\u4e3a\u5783\u573e\u90ae\u4ef6\uff01"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"dig -x 192.168.1.100\n# 100.1.168.192.in-addr.arpa. PTR mail.example.com.\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u91cd\u542f",children:"\u91cd\u542f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"systemctl restart opendkim postfix\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"\u5728\u9065\u8fdc\u7684\u8fc7\u53bb\uff0c\u4e92\u8054\u7f51\u662f\u4e00\u4e2a\u53cb\u597d\u7684\u73af\u5883\u3002\u770b\u4e0a\u53bb\uff0c\u57ce\u697c\u4e4b\u4e0b\uff0c\u4eba\u4eba\u7686\u53ef\u4f20\u9012\u7eb8\u98de\u673a\u3002\u5411\u7740\u57ce\u697c\u98de\u53bb\uff0c\u8981\u60f3\u98de\u8fc7\u57ce\u697c\u662f\u4e0d\u80fd\u7684\uff0825 \u7aef\u53e3\u9ad8\u5371\uff09\u3002\n\u9ad8\u9ad8\u7684\u57ce\u5899\u7d27\u5173\u7684\u5927\u95e8\uff0c\u5c31\u7b97\u662f\u7ffb\u4e0a\u4e86\u57ce\u697c\u4e5f\u4f1a\u88ab\u58eb\u5175\u62e6\u4e0b\uff0c\u4e5f\u5f97\u70ed\u60c5\u62db\u547c\u9012\u4e0a\u4e13\u5c5e\u4ee4\u724c\uff0c\u624d\u53ef\u4ee5\u8fdb\u5165\u57ce\u5185\uff0c\u57ce\u5185\u90a3\u53ef\u662f\u773c\u82b1\u7f2d\u4e71\uff0c\u56e0\u4e3a\u5b83\u4eec\u8fd8\u53ef\u4ee5\u94fe\u63a5\u7740\u66f4\u591a\u7684\u4e16\u754c\u4e4b\u57ce\u3002\n\u8981\u662f\u6df7\u719f\u4e86\uff0c\u641e\u5f97\u4e00\u679a\u4ee4\u724c\u5929\u5929\u8dd1\u7740\uff0c\u90a3\u4e5f\u5f97\u4ea4\u4e2a\u6df7\u719f\u7684\u8d39\u7528\u3002\uff08\u6bcf\u4e2a\u58eb\u5175\u63a5\u5f85\u6d41\u91cf 100 \u6761\u5de6\u53f3\uff0c\u8d85\u8fc7\u8ba1\u670d\u52a1\u8d39\uff09\u3002"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://postmarkapp.com/pricing",children:"\u5bf9\u6bd4\u90ae\u7bb1\u4ef7\u683c"})})]}),"\n",(0,t.jsx)(n.h1,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.postfix.org/documentation.html",children:"https://www.postfix.org/documentation.html"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},93881:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>r});var l=i(58101);const t={},s=l.createContext(t);function d(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);