"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8441],{3881:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var a=n(8101);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}},7716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"\u524d\u7aef/React/HelloWorld/\u751f\u6001/Redux","title":"\u83dc\u5355","description":"\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50","source":"@site/docs/\u524d\u7aef/React/HelloWorld/\u751f\u6001/Redux.md","sourceDirName":"\u524d\u7aef/React/HelloWorld/\u751f\u6001","slug":"/\u524d\u7aef/React/HelloWorld/\u751f\u6001/Redux","permalink":"/docs/\u524d\u7aef/React/HelloWorld/\u751f\u6001/Redux","draft":false,"unlisted":false,"editUrl":"https://github.com/docs/\u524d\u7aef/React/HelloWorld/\u751f\u6001/Redux.md","tags":[],"version":"current","frontMatter":{"outline":"deep"},"sidebar":"\u524d\u7aef","previous":{"title":"\u83dc\u5355","permalink":"/docs/\u524d\u7aef/React/HelloWorld/\u751f\u6001/React Router"},"next":{"title":"\u8be6\u60c5","permalink":"/docs/\u524d\u7aef/React/\u535a\u5ba2/\u5982\u4f55\u68c0\u6d4bReact\u7ec4\u4ef6\u5916\u7684\u70b9\u51fb/\u8be6\u60c5"}}');var r=n(5105),s=n(3881);const o={outline:"deep"},c="\u83dc\u5355",i={},u=[{value:"\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50",id:"\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\u83dc\u5355",children:"\u83dc\u5355"})}),"\n",(0,r.jsx)(t.h2,{id:"\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50",children:"\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import { createStore } from "redux";\n\n/**\n * This is a reducer - a function that takes a current state value and an\n * action object describing "what happened", and returns a new state value.\n * A reducer\'s function signature is: (state, action) => newState\n *\n * The Redux state should contain only plain JS objects, arrays, and primitives.\n * The root state value is usually an object. It\'s important that you should\n * not mutate the state object, but return a new object if the state changes.\n *\n * You can use any conditional logic you want in a reducer. In this example,\n * we use a switch statement, but it\'s not required.\n */\nfunction counterReducer(state = { value: 0 }, action) {\n  switch (action.type) {\n    case "counter/incremented":\n      return { value: state.value + 1 };\n    case "counter/decremented":\n      return { value: state.value - 1 };\n    default:\n      return state;\n  }\n}\n\n// Create a Redux store holding the state of your app.\n// Its API is { subscribe, dispatch, getState }.\nlet store = createStore(counterReducer);\n\n// You can use subscribe() to update the UI in response to state changes.\n// Normally you\'d use a view binding library (e.g. React Redux) rather than subscribe() directly.\n// There may be additional use cases where it\'s helpful to subscribe as well.\n\nstore.subscribe(() => console.log(store.getState()));\n\n// The only way to mutate the internal state is to dispatch an action.\n// The actions can be serialized, logged or stored and later replayed.\nstore.dispatch({ type: "counter/incremented" });\n// {value: 1}\nstore.dispatch({ type: "counter/incremented" });\n// {value: 2}\nstore.dispatch({ type: "counter/decremented" });\n// {value: 1}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://redux.js.org/",children:"https://redux.js.org/"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);