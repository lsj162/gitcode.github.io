"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5761],{3881:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var a=n(8101);const s={},r=a.createContext(s);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:t},e.children)}},8047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>i});const a=JSON.parse('{"id":"\u524d\u7aef/React/Redux/index","title":"Redux","description":"\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50","source":"@site/docs/\u524d\u7aef/React/Redux/index.mdx","sourceDirName":"\u524d\u7aef/React/Redux","slug":"/\u524d\u7aef/React/Redux/","permalink":"/docs/\u524d\u7aef/React/Redux/","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u524d\u7aef/React/Redux/index.mdx","tags":[],"version":"current","frontMatter":{"outline":"deep"},"sidebar":"\u524d\u7aef","previous":{"title":"React Router","permalink":"/docs/\u524d\u7aef/React/React Router/"},"next":{"title":"Zustand","permalink":"/docs/\u524d\u7aef/React/Zustand/"}}');var s=n(5105),r=n(3881);const o={outline:"deep"},c="Redux",u={},i=[{value:"\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50",id:"\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"redux",children:"Redux"})}),"\n",(0,s.jsx)(t.h2,{id:"\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50",children:"\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import { createStore } from "redux";\n\n/**\n * This is a reducer - a function that takes a current state value and an\n * action object describing "what happened", and returns a new state value.\n * A reducer\'s function signature is: (state, action) => newState\n *\n * The Redux state should contain only plain JS objects, arrays, and primitives.\n * The root state value is usually an object. It\'s important that you should\n * not mutate the state object, but return a new object if the state changes.\n *\n * You can use any conditional logic you want in a reducer. In this example,\n * we use a switch statement, but it\'s not required.\n */\nfunction counterReducer(state = { value: 0 }, action) {\n  switch (action.type) {\n    case "counter/incremented":\n      return { value: state.value + 1 };\n    case "counter/decremented":\n      return { value: state.value - 1 };\n    default:\n      return state;\n  }\n}\n\n// Create a Redux store holding the state of your app.\n// Its API is { subscribe, dispatch, getState }.\nlet store = createStore(counterReducer);\n\n// You can use subscribe() to update the UI in response to state changes.\n// Normally you\'d use a view binding library (e.g. React Redux) rather than subscribe() directly.\n// There may be additional use cases where it\'s helpful to subscribe as well.\n\nstore.subscribe(() => console.log(store.getState()));\n\n// The only way to mutate the internal state is to dispatch an action.\n// The actions can be serialized, logged or stored and later replayed.\nstore.dispatch({ type: "counter/incremented" });\n// {value: 1}\nstore.dispatch({ type: "counter/incremented" });\n// {value: 2}\nstore.dispatch({ type: "counter/decremented" });\n// {value: 1}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://redux.js.org/",children:"https://redux.js.org/"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);