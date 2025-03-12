"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5308],{1150:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>a});var t=s(9886),i=s(5105),r=s(3881);const o={date:"2021-09-13T10:00"},d="\u6587\u6863\u5de5\u5177",c={authorsImageUrls:[]},a=[{value:"vitepress",id:"vitepress",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:3},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"\u542f\u52a8\u4e0e\u7f16\u8bd1",id:"\u542f\u52a8\u4e0e\u7f16\u8bd1",level:3},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u4e3b\u9898",id:"\u4e3b\u9898",level:3},{value:"\u6dfb\u52a0\u8bc4\u8bba",id:"\u6dfb\u52a0\u8bc4\u8bba",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:4},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:4},{value:"\u6dfb\u52a0\u5230\u5168\u5c40",id:"\u6dfb\u52a0\u5230\u5168\u5c40",level:4},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:3},{value:"nextra",id:"nextra",level:2},{value:"docusaurus",id:"docusaurus",level:2},{value:"pmnd",id:"pmnd",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"vitepress",children:"vitepress"}),"\n",(0,i.jsx)(n.h3,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u6765\u5199 markdown \u6587\u6863\uff0c\u975e\u5e38\u65b9\u4fbf\uff1b"}),"\n",(0,i.jsx)(n.h3,{id:"\u521d\u59cb\u5316",children:"\u521d\u59cb\u5316"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npm init\n\npnpm add -D vitepress\n\nnpx vitepress init\n\n# \u8fd9\u91cc\u6309\u7167\u5b98\u65b9\u5efa\u8bae\uff0c\u653e\u5728docs\u76ee\u5f55\n1. Where should VitePress initialize the config?\n  ./docs\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u542f\u52a8\u4e0e\u7f16\u8bd1",children:"\u542f\u52a8\u4e0e\u7f16\u8bd1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'// \u81ea\u5b9a\u4e49\u542f\u52a8\u65b9\u5f0f\n{\n  "scripts": {\n    "start": "vitepress dev docs",\n    "build": "vitepress build docs"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u76ee\u5f55\u7ed3\u6784",children:"\u76ee\u5f55\u7ed3\u6784"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:"...\n\n- .vitepress\n  # \u4e3b\u9898\n  - theme\n    - index.ts\n  # \u914d\u7f6e\u6587\u4ef6\n  - config.mts\n    ...\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u914d\u7f6e\u6587\u4ef6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import { defineConfig } from "vitepress";\n\n// https://vitepress.dev/reference/site-config\nexport default defineConfig({\n  // \u9875\u9762\u7684\u6807\u9898\n  title: "",\n  // \u81ea\u5b9a\u4e49title\u683c\u5f0f\n  titleTemplate: ":title",\n  // \u9875\u9762\u7684\u63cf\u8ff0\n  description: "",\n  // \u6dfb\u52a0\u7f51\u7ad9\u56fe\u6807\n  head: [["link", { rel: "icon", href: "/favicon.png" }]],\n  // \u542f\u7528\u6697\u9ed1\u6a21\u5f0f\n  appearance: undefined, // dark\n  // \u66f4\u65b0\u65f6\u95f4\n  lastUpdated: true,\n\n  // \u9879\u76ee\u7684\u6784\u5efa\u8f93\u51fa\u4f4d\u7f6e\n  outDir: "./dist",\n\n  themeConfig: {\n    // \u7f51\u7ad9\u6807\u9898\n    siteTitle: "",\n    // \u5fbd\u6807\u6587\u4ef6\n    logo: "/favicon.png",\n    // \u793e\u4ea4\u94fe\u63a5\n    socialLinks: [{ icon: "github", link: "https://github.com" }],\n    // \u9875\u811a\n    footer: {\n      message: "",\n      copyright: "Copyright \xa9 2023",\n    },\n    // \u641c\u7d22\n    search: {\n      provider: "algolia",\n      options: {\n        appId: "...",\n        apiKey: "...",\n        indexName: "...",\n      },\n    },\n    // \u4e0b\u4e00\u4e2a\n    docFooter: {\n      prev: "\u4e0a\u4e00\u9875",\n      next: "\u4e0b\u4e00\u9875",\n    },\n    // \u6700\u540e\u66f4\u65b0\u65f6\u95f4\n    lastUpdated: {\n      text: "\u6700\u540e\u66f4\u65b0\u4e8e",\n      formatOptions: {\n        dateStyle: "short",\n        timeStyle: "short",\n      },\n    },\n\n    // \u5bfc\u822a\n    nav: [],\n\n    // \u4fa7\u8fb9\u680f\n    sidebar: {},\n  },\n});\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u4e3b\u9898",children:"\u4e3b\u9898"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'// https://vitepress.dev/guide/custom-theme\nimport Theme from "vitepress/theme";\nimport { h } from "vue";\nimport Comments from "../components/Comments.vue";\nimport "./style.css";\n\nexport default {\n  extends: Theme,\n\n  Layout: () => {\n    return h(Theme.Layout, null, {\n      // \u8fd9\u91cc\u52a0\u8f7d\u8bc4\u8bba\u6a21\u5757\n      "doc-after": () => h(Comments),\n    });\n  },\n};\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u6dfb\u52a0\u8bc4\u8bba",children:"\u6dfb\u52a0\u8bc4\u8bba"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 giscus \u5b9e\u73b0\u8bc4\u8bba\u529f\u80fd\u3002",(0,i.jsx)(n.a,{href:"https://giscus.app",children:"https://giscus.app"}),"\n",(0,i.jsx)(n.img,{src:s(6175).A+"",width:"2878",height:"1742"}),"\n\u5b8c\u6210\u4e0a\u9762\u4e09\u6b65\u9aa4\uff0c\u5373\u53ef\u9a8c\u8bc1\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"pnpm add @giscus/vue\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-vue",children:'\x3c!-- /components/Comments.vue --\x3e\n\n<template>\n  <Giscus\n    v-if="showComment"\n    :repo="giscusConfig.repo"\n    :repo-id="giscusConfig.repo_id"\n    :category="giscusConfig.category"\n    :category-id="giscusConfig.category_id"\n    mapping="title"\n    strict="0"\n    reactions-enabled="1"\n    emit-metadata="0"\n    input-position="top"\n    theme="light"\n    lang="zh-CN"\n    loading="lazy"\n    crossorigin="anonymous"\n    async\n  />\n</template>\n\n<script lang="ts" setup>\nimport Giscus from "@giscus/vue";\nimport { useRoute } from "vitepress";\nimport { reactive, ref, watch } from "vue";\nconst route = useRoute();\n\nconst giscusConfig = reactive({\n  repo: "...", // # \u8fd9\u91cc\u5c31\u662fgiscus\u5b98\u65b9\u63d0\u4f9b\u7684\n  repo_id: "...", // # \u8fd9\u91cc\u5c31\u662fgiscus\u5b98\u65b9\u63d0\u4f9b\u7684\n  category: "...", // # \u8fd9\u91cc\u5c31\u662fgiscus\u5b98\u65b9\u63d0\u4f9b\u7684\n  category_id: "...", // # \u8fd9\u91cc\u5c31\u662fgiscus\u5b98\u65b9\u63d0\u4f9b\u7684\n});\n\nconst showComment = ref(true);\n\nwatch(\n  () => route.path,\n  () => {\n    showComment.value = false;\n\n    setTimeout(() => {\n      showComment.value = true;\n    }, 200);\n  },\n  {\n    immediate: true,\n  }\n);\n<\/script>\n'})}),"\n",(0,i.jsx)(n.h4,{id:"\u6dfb\u52a0\u5230\u5168\u5c40",children:"\u6dfb\u52a0\u5230\u5168\u5c40"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'// https://vitepress.dev/guide/custom-theme\nimport Theme from "vitepress/theme";\nimport { h } from "vue";\nimport Comments from "../components/Comments.vue";\n\nexport default {\n  extends: Theme,\n\n  Layout: () => {\n    return h(Theme.Layout, null, {\n      // https://vitepress.dev/guide/extending-default-theme#layout-slots\n      "doc-after": () => h(Comments),\n    });\n  },\n};\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/giscus/giscus-component/blob/main/demo/vue/src/App.vue",children:"giscus-component vue demo"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://justin3go.com/s?u=269dc86edff",children:"https://justin3go.com/"})}),"\n",(0,i.jsx)(n.h2,{id:"nextra",children:"nextra"}),"\n",(0,i.jsx)(n.p,{children:"\u989d\uff0c\u4e00\u822c"}),"\n",(0,i.jsx)(n.h2,{id:"docusaurus",children:"docusaurus"}),"\n",(0,i.jsx)(n.p,{children:"\u597d\u7528"}),"\n",(0,i.jsx)(n.h2,{id:"pmnd",children:"pmnd"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://docs.pmnd.rs/",children:"mdx \u9759\u6001\u6587\u6863\u751f\u6210\u5668"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},3881:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var t=s(8101);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}},6175:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/image-65079fe082a5f9c0f9aceed2a6e87bac.png"},9886:e=>{e.exports=JSON.parse('{"permalink":"/blog/\u6587\u6863\u5de5\u5177","editUrl":"https://github.com/blog/\u6587\u6863\u5de5\u5177/index.mdx","source":"@site/blog/\u6587\u6863\u5de5\u5177/index.mdx","title":"\u6587\u6863\u5de5\u5177","description":"vitepress","date":"2021-09-13T10:00:00.000Z","tags":[],"readingTime":2.995,"hasTruncateMarker":false,"authors":[],"frontMatter":{"date":"2021-09-13T10:00"},"unlisted":false,"prevItem":{"title":"\u540e\u7aef\u5982\u4f55\u67b6\u6784","permalink":"/blog/\u540e\u7aef\u5982\u4f55\u67b6\u6784"},"nextItem":{"title":"\u8bbe\u8ba1\u5e08\u8f6f\u4ef6","permalink":"/blog/\u8bbe\u8ba1\u5e08\u8f6f\u4ef6"}}')}}]);