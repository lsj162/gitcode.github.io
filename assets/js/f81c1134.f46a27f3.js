"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8130],{7735:n=>{n.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/Unsplash","metadata":{"permalink":"/blog/Unsplash","editUrl":"https://github.com/blog/Unsplash/index.mdx","source":"@site/blog/Unsplash/index.mdx","title":"unsplash","description":"\u4e16\u754c\u4e0a\u6700\u5f3a\u5927\u7684\u7167\u7247\u5f15\u64ce\u3002unsplash.com","date":"2025-03-09T05:53:36.000Z","tags":[],"readingTime":0.075,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"nextItem":{"title":"Postfix\u90ae\u7bb1\u670d\u52a1\u5668\u642d\u5efa","permalink":"/blog/Postfix\u90ae\u7bb1\u670d\u52a1\u5668"}},"content":"\u4e16\u754c\u4e0a\u6700\u5f3a\u5927\u7684\u7167\u7247\u5f15\u64ce\u3002[unsplash.com](https://unsplash.com/developers)\\n\\n## \u6ce8\u518c"},{"id":"/Postfix\u90ae\u7bb1\u670d\u52a1\u5668","metadata":{"permalink":"/blog/Postfix\u90ae\u7bb1\u670d\u52a1\u5668","editUrl":"https://github.com/blog/Postfix\u90ae\u7bb1\u670d\u52a1\u5668/index.mdx","source":"@site/blog/Postfix\u90ae\u7bb1\u670d\u52a1\u5668/index.mdx","title":"Postfix\u90ae\u7bb1\u670d\u52a1\u5668\u642d\u5efa","description":"Postfix \u662f\u4ec0\u4e48\uff1f","date":"2024-03-13T10:00:00.000Z","tags":[],"readingTime":3.355,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Postfix\u90ae\u7bb1\u670d\u52a1\u5668\u642d\u5efa","date":"2024-03-13T10:00","authors":[],"tags":[]},"unlisted":false,"prevItem":{"title":"unsplash","permalink":"/blog/Unsplash"},"nextItem":{"title":"Markdown \u8bed\u6cd5\u683c\u5f0f","permalink":"/blog/Markdown\u8bed\u6cd5\u683c\u5f0f"}},"content":"## Postfix \u662f\u4ec0\u4e48\uff1f\\n\\n\u90ae\u4ef6\u670d\u52a1\u5668\uff0c\u6700\u521d\u5728 IBM \u7814\u7a76\u90e8\u95e8\u5f00\u53d1\uff0c\u4f5c\u4e3a\u5e7f\u6cdb\u4f7f\u7528\u7684 Sendmail \u7a0b\u5e8f\u7684\u66ff\u4ee3\u54c1\u3002[Wietse Venema](http://www.porcupine.org/wietse/)\\n\\n{/* truncate */}\\n\\n## \u4e3a\u4ec0\u4e48\u9009\u62e9 Postfix \u90ae\u4ef6\u670d\u52a1\u5668\u8f6f\u4ef6?\\n\\nPostfix\uff08\u63a8\u8350\uff0cLinux \u4e0a\u6700\u6d41\u884c\uff09\uff0cPostfix \u662f\u5f00\u6e90\u7684\u90ae\u4ef6\u670d\u52a1\u5668\u8f6f\u4ef6\uff0c\u5e76\u4e14\u5728\u5b89\u5168\u6027\u65b9\u9762\u975e\u5e38\u51fa\u8272\u3002\\n\\n| \u9002\u7528\u573a\u666f       |             Postfix             |                       Sendmail |\\n| :------------- | :-----------------------------: | -----------------------------: |\\n| \u4f01\u4e1a\u90ae\u4ef6\u670d\u52a1\u5668 |    \u2705 \u63a8\u8350\uff08\u9ad8\u6027\u80fd\uff0c\u9ad8\u5b89\u5168\uff09    |        \u274c \u4e0d\u63a8\u8350\uff08\u7ef4\u62a4\u6210\u672c\u9ad8\uff09 |\\n| \u5927\u89c4\u6a21\u90ae\u4ef6\u7cfb\u7edf | \u2705 \u9002\u7528\uff08\u9ad8\u5e76\u53d1\uff0c\u90ae\u4ef6\u961f\u5217\u4f18\u5316\uff09 |        \u274c \u4e0d\u9002\u7528\uff08\u5355\u8fdb\u7a0b\u74f6\u9888\uff09 |\\n| \u4e2a\u4eba\u90ae\u4ef6\u670d\u52a1\u5668 |        \u2705 \u63a8\u8350\uff08\u6613\u914d\u7f6e\uff09        |      \u274c \u4e0d\u63a8\u8350\uff08\u590d\u6742\uff0c\u6613\u51fa\u9519\uff09 |\\n| \u65e7 Unix \u670d\u52a1\u5668 |             \u2705 \u53ef\u7528             | \u2705 \u9002\u5408\uff08Unix \u4f20\u7edf\u90ae\u4ef6\u670d\u52a1\u5668\uff09 |\\n\\n## Postfix \u662f\u5426\u5b89\u5168\uff1f\\n\\n\u2705 \u6700\u5c0f\u6743\u9650\u8bbe\u8ba1\uff1a\u91c7\u7528 \u6a21\u5757\u5316\u67b6\u6784\uff0c\u5927\u90e8\u5206\u8fdb\u7a0b\u5728\u53d7\u9650\u6743\u9650\u4e0b\u8fd0\u884c\uff0c\u5373\u4f7f\u6709\u6f0f\u6d1e\uff0c\u4e5f\u5f88\u96be\u63d0\u5347\u6743\u9650\u3002\\n\\n\u2705 \u9632\u6b62\u5783\u573e\u90ae\u4ef6\uff1a\u652f\u6301 SPF\u3001DKIM\u3001DMARC\uff0c\u7ed3\u5408 RBL\uff08\u9ed1\u540d\u5355\uff09\u673a\u5236\u6709\u6548\u62e6\u622a\u5783\u573e\u90ae\u4ef6\u3002\\n\\n\u2705 SMTP \u8ba4\u8bc1\uff1a\u652f\u6301 TLS \u52a0\u5bc6\uff08STARTTLS\uff09\uff0c\u53ef\u9632\u6b62\u660e\u6587\u5bc6\u7801\u6cc4\u9732\u3002\\n\\n\u2705 \u9632\u6b62\u90ae\u4ef6\u4f2a\u9020\uff1a\u9ed8\u8ba4\u652f\u6301 SASL \u8ba4\u8bc1\uff0c\u53ef\u7ed3\u5408 OpenDKIM \u8fdb\u884c DKIM \u7b7e\u540d\uff0c\u63d0\u9ad8\u90ae\u4ef6\u53ef\u4fe1\u5ea6\u3002\\n\\n\u2705 DDoS \u4fdd\u62a4\uff1a\u652f\u6301 Greylisting\uff08\u7070\u540d\u5355\uff09\uff0c\u9632\u6b62\u90ae\u4ef6\u8f70\u70b8\u653b\u51fb\u3002\\n\\n\u2705 \u65e5\u5fd7\u76d1\u63a7\uff1a\u652f\u6301 fail2ban\uff0c\u53ef\u81ea\u52a8\u5c01\u7981\u53ef\u7591 IP\uff0c\u9632\u6b62\u66b4\u529b\u7834\u89e3\u3002\\n\\n## \u914d\u7f6e DNS \u8bb0\u5f55\\n\\n### MX \u8bb0\u5f55\\n\\n```md\\n| \u540d\u79f0 | \u8bb0\u5f55\u7c7b\u578b |               \u503c |\\n| :--- | :------: | ---------------: |\\n| @    |    MX    | mail.example.com |\\n```\\n\\n### SPF\\n\\nSPF \u8bb0\u5f55\u7528\u4e8e\u9a8c\u8bc1\u90ae\u4ef6\u7684\u6765\u6e90\u662f\u5426\u53ef\u4fe1\u3002\\n\\n```md\\n| \u540d\u79f0 | \u8bb0\u5f55\u7c7b\u578b |                              \u503c |\\n| :--- | :------: | ------------------------------: |\\n| @    |   TXT    | v=spf1 ip4:192.168.111.111 -all |\\n```\\n\\n- ip4:192.168.1.100\uff1a\u5141\u8bb8\u6b64 IP \u5730\u5740\u53d1\u9001\u90ae\u4ef6\u3002\\n- -all\uff1a\u62d2\u7edd\u6240\u6709\u4e0d\u5339\u914d\u7684\u6765\u6e90\uff0c\u9632\u6b62\u4f2a\u9020\u90ae\u4ef6\u3002\\n\\n### DKIM \u7528\u4e8e\u90ae\u4ef6\u7b7e\u540d\\n\\n\u66f4\u591a\u5b89\u5168\uff0cDKIM \u7528\u4e8e\u90ae\u4ef6\u7b7e\u540d\uff0c\u786e\u4fdd\u90ae\u4ef6\u672a\u88ab\u7be1\u6539\u3002\\n\\n```shell\\n# 1. \u5b89\u88c5 OpenDKIM\\napt install opendkim opendkim-tools\\n\\n# 2. \u751f\u6210 DKIM \u5bc6\u94a5\uff08\u67e5\u770b cat default.txt\uff09\\nopendkim-genkey -D /etc/opendkim/keys/ -s default -d example.com\\n\\n# 3. \u5728 DNS \u4e2d\u6dfb\u52a0 DKIM \u8bb0\u5f55\uff1a\\ndefault._domainkey TXT  \\"v=DKIM1; k=rsa; p=\u4f60\u7684\u516c\u94a5\\"\\n\\n# 4. \u914d\u7f6e Postfix \u5173\u8054 DKIM\uff1a \u5728 main.cf \u4e2d\u6dfb\u52a0\uff1a\\nsmtpd_milters = unix:/var/run/opendkim/opendkim.sock\\nnon_smtpd_milters = unix:/var/run/opendkim/opendkim.sock\\n```\\n\\n### \u5728 DNS \u4e2d\u6dfb\u52a0 DMARC \u8bb0\u5f55\uff1a\\n\\n```shell\\n_dmarc TXT \\"v=DMARC1; p=reject; rua=mailto:admin@example.com\\"\\n```\\n\\n- v=DMARC1\uff1a\u8868\u793a DMARC \u7248\u672c\u3002\\n- p=reject\uff1a\u62d2\u7edd\u6240\u6709\u4e0d\u7b26\u5408 SPF/DKIM \u89c4\u5219\u7684\u90ae\u4ef6\u3002\\n- rua=mailto:admin@example.com\uff1a\u63a5\u6536 DMARC \u62a5\u544a\u7684\u90ae\u7bb1\u3002\\n\\n### \u9a8c\u8bc1\u6240\u6709\u90ae\u4ef6\u8bbe\u7f6e\\n\\n```shell\\n# 1. \u68c0\u67e5 SPF \u8bb0\u5f55\\ndig TXT example.com\\n\\n# 2. \u68c0\u67e5 DKIM \u8bb0\u5f55\\ndig TXT default._domainkey.example.com\\n\\n# 3. \u68c0\u67e5 DMARC \u8bb0\u5f55\\ndig TXT _dmarc.example.com\\n```\\n\\n### \u68c0\u67e5\\n\\n\u53cd\u5411 DNS \u89e3\u6790\uff0c\u786e\u4fdd\u4f60\u7684\u90ae\u4ef6\u670d\u52a1\u5668\u57df\u540d\u4e0e rDNS \u5339\u914d\uff0c\u5426\u5219\u90ae\u4ef6\u5bb9\u6613\u88ab\u5224\u4e3a\u5783\u573e\u90ae\u4ef6\uff01\\n\\n```shell\\ndig -x 192.168.1.100\\n# 100.1.168.192.in-addr.arpa. PTR mail.example.com.\\n```\\n\\n### \u91cd\u542f\\n\\n```shell\\nsystemctl restart opendkim postfix\\n```"},{"id":"/Markdown\u8bed\u6cd5\u683c\u5f0f","metadata":{"permalink":"/blog/Markdown\u8bed\u6cd5\u683c\u5f0f","editUrl":"https://github.com/blog/Markdown\u8bed\u6cd5\u683c\u5f0f/index.mdx","source":"@site/blog/Markdown\u8bed\u6cd5\u683c\u5f0f/index.mdx","title":"Markdown \u8bed\u6cd5\u683c\u5f0f","description":"Markdown \u8bed\u6cd5\u7b80\u4ecb","date":"2021-09-13T10:00:00.000Z","tags":[],"readingTime":2.965,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2021-09-13T10:00"},"unlisted":false,"prevItem":{"title":"Postfix\u90ae\u7bb1\u670d\u52a1\u5668\u642d\u5efa","permalink":"/blog/Postfix\u90ae\u7bb1\u670d\u52a1\u5668"},"nextItem":{"title":"Web3","permalink":"/blog/Web3.0"}},"content":"## Markdown \u8bed\u6cd5\u7b80\u4ecb\\n\\n- \u672c\u6587\u6f14\u793a Markdown \u6240\u6709\u8bed\u6cd5\u529f\u80fd\\n- \u6709\u4e9b\u529f\u80fd\u9700\u8981\u63d2\u4ef6\u652f\u6301\\n\\n## \u544a\u793a\\n\\n:::note\\n\\n\u90e8\u5206 **\u5185\u5bb9** \u4f7f\u7528 Markdown `syntax` \u7f16\u5199\u3002\u8bf7\u67e5\u770b[\u6b64\u5904`api`](#)\u3002\\n:::\\n\\n:::tip\\n\u90e8\u5206 **\u5185\u5bb9** \u4f7f\u7528 Markdown `syntax` \u7f16\u5199\u3002\u8bf7\u67e5\u770b[\u6b64\u5904`api`](#)\u3002\\n:::\\n\\n:::info\\n\u90e8\u5206 **\u5185\u5bb9** \u4f7f\u7528 Markdown `syntax` \u7f16\u5199\u3002\u8bf7\u67e5\u770b[\u6b64\u5904`api`](#)\u3002\\n:::\\n\\n:::warning\\n\u90e8\u5206 **\u5185\u5bb9** \u4f7f\u7528 Markdown `syntax` \u7f16\u5199\u3002\u8bf7\u67e5\u770b[\u6b64\u5904`api`](#)\u3002\\n:::\\n\\n:::danger\\n\u90e8\u5206 **\u5185\u5bb9** \u4f7f\u7528 Markdown `syntax` \u7f16\u5199\u3002\u8bf7\u67e5\u770b[\u6b64\u5904`api`](#)\u3002\\n:::\\n\\n## \u6807\u9898\\n\\n\u4e0d\u540c\u6570\u91cf\u7684`#`\u53ef\u4ee5\u5b8c\u6210\u4e0d\u540c\u7684\u6807\u9898\uff0c\u5982\u4e0b\uff1a\\n\\n## \u4e8c\u7ea7\u6807\u9898\\n\\n### \u4e09\u7ea7\u6807\u9898\\n\\n### \u56db\u7ea7\u6807\u9898\\n\\n## \u5b57\u4f53\\n\\n\\\\*\\\\*\u7c97\u4f53\\\\*\\\\*\u3001\\\\_\u659c\u4f53\\\\_\u3001\\\\*\\\\*\\\\_\u7c97\u4f53\u548c\u659c\u4f53\\\\_\\\\*\\\\*\uff0c\\\\~\u5220\u9664\u7ebf\\\\~\uff0c\u9700\u8981\u5728\u6587\u5b57\u524d\u540e\u52a0\u4e0d\u540c\u7684\u6807\u8bb0\u7b26\u53f7\u3002\u5982\u4e0b\uff1a\\n\\n**\u8fd9\u4e2a\u662f\u7c97\u4f53**\\n\\n_\u8fd9\u4e2a\u662f\u659c\u4f53_\\n\\n**_\u8fd9\u4e2a\u662f\u7c97\u4f53\u52a0\u659c\u4f53_**\\n\\n~\u8fd9\u91cc\u60f3\u7528\u5220\u9664\u7ebf~\\n\\n## \u65e0\u5e8f\u5217\u8868\\n\\n\u65e0\u5e8f\u5217\u8868\u7684\u4f7f\u7528\uff0c\u5728\u7b26\u53f7`-`\u540e\u52a0\u7a7a\u683c\u4f7f\u7528\u3002\u5982\u679c\u8981\u63a7\u5236\u5217\u8868\u7684\u5c42\u7ea7\uff0c\u5219\u9700\u8981\u5728\u7b26\u53f7`-`\u524d\u4f7f\u7528\u7a7a\u683c\u3002\u5982\u4e0b\uff1a\\n\\n- \u65e0\u5e8f\u5217\u8868 1\\n- \u65e0\u5e8f\u5217\u8868 2\\n  - \u65e0\u5e8f\u5217\u8868 2.1\\n  - \u65e0\u5e8f\u5217\u8868 2.2\\n\\n## \u6709\u5e8f\u5217\u8868\\n\\n\u6709\u5e8f\u5217\u8868\u7684\u4f7f\u7528\uff0c\u5728\u6570\u5b57\u53ca\u7b26\u53f7`.`\u540e\u52a0\u7a7a\u683c\u540e\u8f93\u5165\u5185\u5bb9\uff0c\u5982\u4e0b\uff1a\\n\\n1. \u6709\u5e8f\u5217\u8868 1\\n2. \u6709\u5e8f\u5217\u8868 2\\n3. \u6709\u5e8f\u5217\u8868 3\\n\\n## \u5f15\u7528\\n\\n\u5f15\u7528\u7684\u683c\u5f0f\u662f\u5728\u7b26\u53f7`>`\u540e\u9762\u4e66\u5199\u6587\u5b57\u3002\u5982\u4e0b\uff1a\\n\\n> \u8bfb\u4e00\u672c\u597d\u4e66\uff0c\u5c31\u662f\u5728\u548c\u9ad8\u5c1a\u7684\u4eba\u8c08\u8bdd\u3002 \u2014\u2014\u6b4c\u5fb7\\n\\n> \u96c7\u7528\u5236\u5ea6\u5bf9\u5de5\u4eba\u4e0d\u5229\uff0c\u4f46\u5de5\u4eba\u6839\u672c\u65e0\u529b\u6446\u8131\u8fd9\u4e2a\u5236\u5ea6\u3002 \u2014\u2014\u962e\u4e00\u5cf0\\n\\n## \u94fe\u63a5\\n\\n\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u6dfb\u52a0\u5230\u53e6\u4e00\u4e2a\u9875\u9762\u7684\u94fe\u63a5\uff1a\u901a\u8fc7 URL \u8def\u5f84\u548c\u6587\u4ef6\u8def\u5f84\u3002\\n\\n```\\n- [\u6307\u5411\u53e6\u4e00\u4e2a\u6587\u6863\u7684 URL \u8def\u5f84](./installation)\\n```\\n\\n## \u56fe\u7247\\n\\n\u7528\u7b80\u5355\u7684 Markdown \u8bed\u6cd5\u663e\u793a\u56fe\u50cf\uff1a\\n\\n```\\n![\u793a\u4f8b\u6a2a\u5e45](/img/icon/visual_studio_code.png)\\n```\\n\\n![\u793a\u4f8b\u6a2a\u5e45](/img/icon/visual_studio_code.png)\\n\\n## \u5206\u5272\u7ebf\\n\\n```md\\n---\\n```\\n\\n---\\n\\n## \u8868\u683c\\n\\n\u53ef\u4ee5\u4f7f\u7528\u5192\u53f7\u6765\u5b9a\u4e49\u8868\u683c\u7684\u5bf9\u9f50\u65b9\u5f0f\uff0c\u5982\u4e0b\uff1a\\n\\n| \u59d3\u540d       | \u5e74\u9f84 |         \u5de5\u4f5c |\\n| :--------- | :--: | -----------: |\\n| \u5c0f\u53ef\u7231     |  18  |     \u5403\u53ef\u7231\u591a |\\n| \u5c0f\u5c0f\u52c7\u6562   |  20  |   \u722c\u68f5\u52c7\u6562\u6811 |\\n| \u5c0f\u5c0f\u5c0f\u673a\u667a |  22  | \u770b\u4e00\u672c\u673a\u667a\u4e66 |\\n\\n## \u4ee3\u7801\u5757\\n\\n````md\\n```js\\nconsole.log(\\"\u6bcf\u4e2a\u4ed3\u5e93\u90fd\u5e94\u8be5\u6709\u4e2a\u5409\u7965\u7269\u3002\\");\\n```\\n````\\n\\n```js\\nconsole.log(\\"\u6bcf\u4e2a\u4ed3\u5e93\u90fd\u5e94\u8be5\u6709\u4e2a\u5409\u7965\u7269\u3002\\");\\n```\\n\\n## \u6570\u5b66\u516c\u5f0f\\n\\n[\u53ef\u4ee5\u4f7f\u7528 KaTeX](https://katex.org/)\u6e32\u67d3\u6570\u5b66\u65b9\u7a0b\u5f0f\u3002\\n\\n```mdx\\n$$\\nI = \\\\int_0^{2\\\\pi} \\\\sin(x)\\\\,dx\\n$$\\n```\\n\\n$$\\nI = \\\\int_0^{2\\\\pi} \\\\sin(x)\\\\,dx\\n$$\\n\\n## \u53c2\u8003\u94fe\u63a5\\n\\n[markdown \u8bed\u6cd5\u6587\u6863](https://markdown.com.cn/editor/)"},{"id":"/Web3.0","metadata":{"permalink":"/blog/Web3.0","editUrl":"https://github.com/blog/Web3.0/index.mdx","source":"@site/blog/Web3.0/index.mdx","title":"Web3","description":"\u53c2\u8003\u94fe\u63a5","date":"2021-09-13T10:00:00.000Z","tags":[],"readingTime":0.105,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2021-09-13T10:00"},"unlisted":false,"prevItem":{"title":"Markdown \u8bed\u6cd5\u683c\u5f0f","permalink":"/blog/Markdown\u8bed\u6cd5\u683c\u5f0f"},"nextItem":{"title":"\u540e\u7aef\u5982\u4f55\u67b6\u6784","permalink":"/blog/\u540e\u7aef\u5982\u4f55\u67b6\u6784"}},"content":"## \u53c2\u8003\u94fe\u63a5\\n\\n[PKU BLOCKCHAIN\uff1a\u5199\u7ed9\u524d\u7aef\u5f00\u53d1\u8005\u7684 Web3 \u5165\u95e8\u6307\u5357](https://www.odaily.news/post/5192190)"},{"id":"/\u540e\u7aef\u5982\u4f55\u67b6\u6784","metadata":{"permalink":"/blog/\u540e\u7aef\u5982\u4f55\u67b6\u6784","editUrl":"https://github.com/blog/\u540e\u7aef\u5982\u4f55\u67b6\u6784/index.mdx","source":"@site/blog/\u540e\u7aef\u5982\u4f55\u67b6\u6784/index.mdx","title":"\u540e\u7aef\u5982\u4f55\u67b6\u6784","description":"MVC\uff08Model-View-Controller\uff09","date":"2021-09-13T10:00:00.000Z","tags":[],"readingTime":0.665,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2021-09-13T10:00"},"unlisted":false,"prevItem":{"title":"Web3","permalink":"/blog/Web3.0"},"nextItem":{"title":"\u6587\u6863\u5de5\u5177","permalink":"/blog/\u6587\u6863\u5de5\u5177"}},"content":"## MVC\uff08Model-View-Controller\uff09\\n\\n\u8fd9\u4e2a\u67b6\u6784\u8bbe\u8ba1\u7b80\u5355\u660e\u4e86\u3002\\n\u4ece\u8def\u7531\u63a5\u53e3\u8bbf\u95ee\uff0c\u9996\u5148\u8bbf\u95ee C \u63a7\u5236\u5c42\u3002\\n\\n- Controller\uff08\u63a7\u5236\u5668\uff09\uff1a\u5904\u7406 HTTP \u8bf7\u6c42\uff0c\u8c03\u7528 Model\uff0c\u8fd4\u56de\u7ed3\u679c\u7ed9\u524d\u7aef\u3002\\n\\n  - \u63a7\u5236\u5c42\u4e3b\u8981\u8d1f\u8d23\uff0c\u6bd4\u5982\u9a8c\u8bc1\u8eab\u4efd\uff0c\u9a8c\u8bc1\u8bf7\u6c42\u53c2\u6570\u662f\u5426\u7b26\u5408\u7b49\u7b49\\n\\n- Model\uff08\u6a21\u578b\uff09\uff1a\u6570\u636e\u5c42\uff0c\u8d1f\u8d23\u4e0e\u6570\u636e\u5e93\u4ea4\u4e92\\n\\n  - \u6a21\u578b\u5c42\u4e3b\u8981\u8d1f\u8d23\uff0c\u5b9a\u4e49\u6570\u636e\u7ed3\u6784\uff0c\u64cd\u4f5c\u6570\u636e\u5e93\uff0c\u8fd4\u56de\u7ed3\u679c\u3002\\n\\n- View\uff08\u89c6\u56fe\uff09\uff1a\u8868\u73b0\u5c42\uff0c\u901a\u5e38\u662f\u524d\u7aef\u9875\u9762\uff08\u5728 API \u670d\u52a1\u5668\u4e2d\u53ef\u80fd\u4e0d\u4f1a\u6709 View\uff09\u3002\\n\\n##"},{"id":"/\u6587\u6863\u5de5\u5177","metadata":{"permalink":"/blog/\u6587\u6863\u5de5\u5177","editUrl":"https://github.com/blog/\u6587\u6863\u5de5\u5177/index.mdx","source":"@site/blog/\u6587\u6863\u5de5\u5177/index.mdx","title":"\u6587\u6863\u5de5\u5177","description":"vitepress","date":"2021-09-13T10:00:00.000Z","tags":[],"readingTime":2.945,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2021-09-13T10:00"},"unlisted":false,"prevItem":{"title":"\u540e\u7aef\u5982\u4f55\u67b6\u6784","permalink":"/blog/\u540e\u7aef\u5982\u4f55\u67b6\u6784"},"nextItem":{"title":"\u663e\u5361","permalink":"/blog/\u663e\u5361/\u663e\u5361"}},"content":"## vitepress\\n\\n### \u4ecb\u7ecd\\n\\n\u7528\u6765\u5199 markdown \u6587\u6863\uff0c\u975e\u5e38\u65b9\u4fbf\uff1b\\n\\n### \u521d\u59cb\u5316\\n\\n```sh\\nnpm init\\n\\npnpm add -D vitepress\\n\\nnpx vitepress init\\n\\n# \u8fd9\u91cc\u6309\u7167\u5b98\u65b9\u5efa\u8bae\uff0c\u653e\u5728docs\u76ee\u5f55\\n1. Where should VitePress initialize the config?\\n  ./docs\\n```\\n\\n### \u542f\u52a8\u4e0e\u7f16\u8bd1\\n\\n```json\\n// \u81ea\u5b9a\u4e49\u542f\u52a8\u65b9\u5f0f\\n{\\n  \\"scripts\\": {\\n    \\"start\\": \\"vitepress dev docs\\",\\n    \\"build\\": \\"vitepress build docs\\"\\n  }\\n}\\n```\\n\\n### \u76ee\u5f55\u7ed3\u6784\\n\\n```md\\n...\\n\\n- .vitepress\\n  # \u4e3b\u9898\\n  - theme\\n    - index.ts\\n  # \u914d\u7f6e\u6587\u4ef6\\n  - config.mts\\n    ...\\n```\\n\\n### \u914d\u7f6e\u6587\u4ef6\\n\\n```js\\nimport { defineConfig } from \\"vitepress\\";\\n\\n// https://vitepress.dev/reference/site-config\\nexport default defineConfig({\\n  // \u9875\u9762\u7684\u6807\u9898\\n  title: \\"\\",\\n  // \u81ea\u5b9a\u4e49title\u683c\u5f0f\\n  titleTemplate: \\":title\\",\\n  // \u9875\u9762\u7684\u63cf\u8ff0\\n  description: \\"\\",\\n  // \u6dfb\u52a0\u7f51\u7ad9\u56fe\u6807\\n  head: [[\\"link\\", { rel: \\"icon\\", href: \\"/favicon.png\\" }]],\\n  // \u542f\u7528\u6697\u9ed1\u6a21\u5f0f\\n  appearance: undefined, // dark\\n  // \u66f4\u65b0\u65f6\u95f4\\n  lastUpdated: true,\\n\\n  // \u9879\u76ee\u7684\u6784\u5efa\u8f93\u51fa\u4f4d\u7f6e\\n  outDir: \\"./dist\\",\\n\\n  themeConfig: {\\n    // \u7f51\u7ad9\u6807\u9898\\n    siteTitle: \\"\\",\\n    // \u5fbd\u6807\u6587\u4ef6\\n    logo: \\"/favicon.png\\",\\n    // \u793e\u4ea4\u94fe\u63a5\\n    socialLinks: [{ icon: \\"github\\", link: \\"https://github.com\\" }],\\n    // \u9875\u811a\\n    footer: {\\n      message: \\"\\",\\n      copyright: \\"Copyright \xa9 2023\\",\\n    },\\n    // \u641c\u7d22\\n    search: {\\n      provider: \\"algolia\\",\\n      options: {\\n        appId: \\"...\\",\\n        apiKey: \\"...\\",\\n        indexName: \\"...\\",\\n      },\\n    },\\n    // \u4e0b\u4e00\u4e2a\\n    docFooter: {\\n      prev: \\"\u4e0a\u4e00\u9875\\",\\n      next: \\"\u4e0b\u4e00\u9875\\",\\n    },\\n    // \u6700\u540e\u66f4\u65b0\u65f6\u95f4\\n    lastUpdated: {\\n      text: \\"\u6700\u540e\u66f4\u65b0\u4e8e\\",\\n      formatOptions: {\\n        dateStyle: \\"short\\",\\n        timeStyle: \\"short\\",\\n      },\\n    },\\n\\n    // \u5bfc\u822a\\n    nav: [],\\n\\n    // \u4fa7\u8fb9\u680f\\n    sidebar: {},\\n  },\\n});\\n```\\n\\n### \u4e3b\u9898\\n\\n```js\\n// https://vitepress.dev/guide/custom-theme\\nimport Theme from \\"vitepress/theme\\";\\nimport { h } from \\"vue\\";\\nimport Comments from \\"../components/Comments.vue\\";\\nimport \\"./style.css\\";\\n\\nexport default {\\n  extends: Theme,\\n\\n  Layout: () => {\\n    return h(Theme.Layout, null, {\\n      // \u8fd9\u91cc\u52a0\u8f7d\u8bc4\u8bba\u6a21\u5757\\n      \\"doc-after\\": () => h(Comments),\\n    });\\n  },\\n};\\n```\\n\\n### \u6dfb\u52a0\u8bc4\u8bba\\n\\n\u4f7f\u7528 giscus \u5b9e\u73b0\u8bc4\u8bba\u529f\u80fd\u3002[https://giscus.app](https://giscus.app)\\n![](./public/image.png)\\n\u5b8c\u6210\u4e0a\u9762\u4e09\u6b65\u9aa4\uff0c\u5373\u53ef\u9a8c\u8bc1\u3002\\n\\n#### \u5b89\u88c5\\n\\n```sh\\npnpm add @giscus/vue\\n```\\n\\n#### \u914d\u7f6e\\n\\n```vue\\n\x3c!-- /components/Comments.vue --\x3e\\n\\n<template>\\n  <Giscus\\n    v-if=\\"showComment\\"\\n    :repo=\\"giscusConfig.repo\\"\\n    :repo-id=\\"giscusConfig.repo_id\\"\\n    :category=\\"giscusConfig.category\\"\\n    :category-id=\\"giscusConfig.category_id\\"\\n    mapping=\\"title\\"\\n    strict=\\"0\\"\\n    reactions-enabled=\\"1\\"\\n    emit-metadata=\\"0\\"\\n    input-position=\\"top\\"\\n    theme=\\"light\\"\\n    lang=\\"zh-CN\\"\\n    loading=\\"lazy\\"\\n    crossorigin=\\"anonymous\\"\\n    async\\n  />\\n</template>\\n\\n<script lang=\\"ts\\" setup>\\nimport Giscus from \\"@giscus/vue\\";\\nimport { useRoute } from \\"vitepress\\";\\nimport { reactive, ref, watch } from \\"vue\\";\\nconst route = useRoute();\\n\\nconst giscusConfig = reactive({\\n  repo: \\"...\\", // # \u8fd9\u91cc\u5c31\u662fgiscus\u5b98\u65b9\u63d0\u4f9b\u7684\\n  repo_id: \\"...\\", // # \u8fd9\u91cc\u5c31\u662fgiscus\u5b98\u65b9\u63d0\u4f9b\u7684\\n  category: \\"...\\", // # \u8fd9\u91cc\u5c31\u662fgiscus\u5b98\u65b9\u63d0\u4f9b\u7684\\n  category_id: \\"...\\", // # \u8fd9\u91cc\u5c31\u662fgiscus\u5b98\u65b9\u63d0\u4f9b\u7684\\n});\\n\\nconst showComment = ref(true);\\n\\nwatch(\\n  () => route.path,\\n  () => {\\n    showComment.value = false;\\n\\n    setTimeout(() => {\\n      showComment.value = true;\\n    }, 200);\\n  },\\n  {\\n    immediate: true,\\n  }\\n);\\n<\/script>\\n```\\n\\n#### \u6dfb\u52a0\u5230\u5168\u5c40\\n\\n```ts\\n// https://vitepress.dev/guide/custom-theme\\nimport Theme from \\"vitepress/theme\\";\\nimport { h } from \\"vue\\";\\nimport Comments from \\"../components/Comments.vue\\";\\n\\nexport default {\\n  extends: Theme,\\n\\n  Layout: () => {\\n    return h(Theme.Layout, null, {\\n      // https://vitepress.dev/guide/extending-default-theme#layout-slots\\n      \\"doc-after\\": () => h(Comments),\\n    });\\n  },\\n};\\n```\\n\\n### \u53c2\u8003\u94fe\u63a5\\n\\n[giscus-component vue demo](https://github.com/giscus/giscus-component/blob/main/demo/vue/src/App.vue)\\n\\n[https://justin3go.com/](https://justin3go.com/s?u=269dc86edff)\\n\\n## nextra\\n\\n\u989d\uff0c\u4e00\u822c\\n\\n## docusaurus\\n\\n\u597d\u7528"},{"id":"/\u663e\u5361/\u663e\u5361","metadata":{"permalink":"/blog/\u663e\u5361/\u663e\u5361","editUrl":"https://github.com/blog/\u663e\u5361/\u663e\u5361.mdx","source":"@site/blog/\u663e\u5361/\u663e\u5361.mdx","title":"\u663e\u5361","description":"\u3010\u786c\u6838\u79d1\u666e\u3011\u4ece\u96f6\u5f00\u59cb\u8ba4\u8bc6\u663e\u5361 https://youtu.be/","date":"2021-09-13T10:00:00.000Z","tags":[],"readingTime":0.07,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2021-09-13T10:00"},"unlisted":false,"prevItem":{"title":"\u6587\u6863\u5de5\u5177","permalink":"/blog/\u6587\u6863\u5de5\u5177"},"nextItem":{"title":"\u524d\u7aef\u5982\u4f55\u67b6\u6784","permalink":"/blog/\u524d\u7aef\u5982\u4f55\u67b6\u6784"}},"content":"[\u3010\u786c\u6838\u79d1\u666e\u3011\u4ece\u96f6\u5f00\u59cb\u8ba4\u8bc6\u663e\u5361 https://youtu.be/](https://youtu.be/vtR7cgYATdk?si=ooKekaw6Hzkm_ms2)"},{"id":"/\u524d\u7aef\u5982\u4f55\u67b6\u6784","metadata":{"permalink":"/blog/\u524d\u7aef\u5982\u4f55\u67b6\u6784","editUrl":"https://github.com/blog/\u524d\u7aef\u5982\u4f55\u67b6\u6784/index.mdx","source":"@site/blog/\u524d\u7aef\u5982\u4f55\u67b6\u6784/index.mdx","title":"\u524d\u7aef\u5982\u4f55\u67b6\u6784","description":"\u4ee5\u7535\u5546\u5e73\u53f0\u4e3a\u4f8b\u3002","date":"2021-09-13T10:00:00.000Z","tags":[],"readingTime":1.06,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2021-09-13T10:00"},"unlisted":false,"prevItem":{"title":"\u663e\u5361","permalink":"/blog/\u663e\u5361/\u663e\u5361"},"nextItem":{"title":"\u8bbe\u8ba1\u5e08\u8f6f\u4ef6","permalink":"/blog/\u8bbe\u8ba1\u5e08\u8f6f\u4ef6"}},"content":"\u4ee5\u7535\u5546\u5e73\u53f0\u4e3a\u4f8b\u3002\\n\\n## 1. \u6280\u672f\u9009\u578b\uff1f\\n\\n\u9996\u5148\u6211\u4eec\u53ef\u80fd\u8003\u8651\u4e3b\u6d41\u524d\u6cbf\u6280\u672f\uff0c\u6bd4\u5982 react\uff0cvue\u3002\\n\u7136\u540e\u642d\u5efa\u4e00\u4e2a\u81ea\u52a8\u667a\u80fd\u5de5\u5177\u7684\u5f00\u53d1\u73af\u5883\u3002\\n\\n## \u6211\u4eec\u8003\u8651\u662f\u5426\u8981\u652f\u6301 seo\uff1f\\n\\n\u8fd9\u91cc\u53c8\u6d89\u53ca\u5230\u4ee5\u4e0a\u6280\u672f\u7684\u6280\u672f\u6846\u67b6\u9009\u578b\u3002\u6bd4\u5982 nextjs\uff0cnuxtjs\uff08\u5f53\u7136\u8fd8\u6709\u5f88\u591a\u5176\u4ed6\u53ef\u9009\uff09\u3002\\n\\n## \u8003\u8651\u642d\u5efa\u5e73\u53f0\u7528\u6237\u7aef\u7cfb\u7edf\uff1f\\n\\n\u4ee3\u7801\u6a21\u5757\u5316\u5b9e\u73b0\u4e1a\u52a1\uff0c\u90a3\u4e48\u5f53\u4e1a\u52a1\u72ec\u7acb\u662f\u5426\u8003\u8651\u5fae\u670d\u52a1\u3002\u6bd4\u5982\uff1a\u7528\u6237\u7aef\u5ba2\u670d\u7cfb\u7edf\u3002\u7edf\u4e00\u767b\u5f55\u6ce8\u518c\u4e2d\u5fc3\u7cfb\u7edf\u3002\\n\\n## \u8003\u8651\u642d\u5efa\u5e73\u53f0\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\uff1f\\n\\n\u540e\u7aef\u7ba1\u7406\u6570\u636e\uff0c\u7ba1\u7406\u5458\uff0c\u5ba1\u6838\u7b49\u4e00\u7cfb\u4f8b\u64cd\u4f5c\u7cfb\u7edf\u3002\\n\\n## \u5f00\u53d1\u63d0\u4ea4\u6d4b\u8bd5\uff1f\\n\\n\u6ca1\u6709\u7ecf\u8fc7\u6d4b\u8bd5\u4e0a\u7ebf\u5fc5\u7136\u6302\u6389\uff08100%\u53ef\u80fd\uff09\u3002\u90a3\u4e48\u6d4b\u8bd5\u6280\u672f\u5de5\u5177\u53c8\u5982\u4f55\u9009\u62e9\u3002\u6bd4\u5982 jest\u3002\u8fd8\u662f\u4eba\u5de5\u809d\u3002\\n\\n##"},{"id":"/\u8bbe\u8ba1\u5e08\u8f6f\u4ef6","metadata":{"permalink":"/blog/\u8bbe\u8ba1\u5e08\u8f6f\u4ef6","editUrl":"https://github.com/blog/\u8bbe\u8ba1\u5e08\u8f6f\u4ef6/index.mdx","source":"@site/blog/\u8bbe\u8ba1\u5e08\u8f6f\u4ef6/index.mdx","title":"\u8bbe\u8ba1\u5e08\u8f6f\u4ef6","description":"Figma","date":"2021-09-13T10:00:00.000Z","tags":[],"readingTime":0.295,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2021-09-13T10:00"},"unlisted":false,"prevItem":{"title":"\u524d\u7aef\u5982\u4f55\u67b6\u6784","permalink":"/blog/\u524d\u7aef\u5982\u4f55\u67b6\u6784"},"nextItem":{"title":"\u4e00\u5ea6\u6d41\u91cf\u4e3b\u64ad","permalink":"/blog/\u7f51\u4e0a\u51b2\u6d6a"}},"content":"## Figma\\n\\n\u4e86\u89e3\u8fc7\u7684\uff0c\u9002\u5408 web \u7b49\u5e73\u9762\u8bbe\u8ba1\u5728\u7ebf\u5e73\u53f0\u3002\\n\\n## Blender\\n\\n\u4e86\u89e3\u8fc7\u7684\uff0c\u5efa\u6a21\u8bbe\u8ba1\u5de5\u5177\u3002\\n\\n## PS\\n\\n\u4fee\u56fe\\n\\n## CAD\\n\\n\u753b\u56fe\\n\\n## 3DMAX\\n\\n\u5de5\u4e1a\u5efa\u6a21\\n\\n## Maya\\n\\n\u5de5\u4e1a\u5efa\u6a21\\n\\n## Unity\\n\\n\u6e38\u620f\u5f00\u53d1\u5efa\u6a21\\n\\n## Unrealengine\\n\\n\u6e38\u620f\u5f00\u53d1\u5efa\u6a21"},{"id":"/\u7f51\u4e0a\u51b2\u6d6a","metadata":{"permalink":"/blog/\u7f51\u4e0a\u51b2\u6d6a","editUrl":"https://github.com/blog/\u7f51\u4e0a\u51b2\u6d6a/index.md","source":"@site/blog/\u7f51\u4e0a\u51b2\u6d6a/index.md","title":"\u4e00\u5ea6\u6d41\u91cf\u4e3b\u64ad","description":"35 \u5c81 985 \u54f2\u5b66\u7855\u58eb\uff1a\u4e0a\u5343\u4efd\u7b80\u5386\u65e0\u4eba\u95ee\u6d25 \u505a\u9053\u58eb\u90fd\u8d85\u9f84","date":"1970-09-13T10:00:00.000Z","tags":[],"readingTime":0.12,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"1970-09-13T10:00"},"unlisted":false,"prevItem":{"title":"\u8bbe\u8ba1\u5e08\u8f6f\u4ef6","permalink":"/blog/\u8bbe\u8ba1\u5e08\u8f6f\u4ef6"}},"content":"## 35 \u5c81 985 \u54f2\u5b66\u7855\u58eb\uff1a\u4e0a\u5343\u4efd\u7b80\u5386\u65e0\u4eba\u95ee\u6d25 \u505a\u9053\u58eb\u90fd\u8d85\u9f84\\n\\nhttps://www.bilibili.com/video/BV1yz4y1e72b/?t=387.9"}]}}')}}]);