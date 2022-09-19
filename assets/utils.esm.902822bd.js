import{r as a}from"./index.ef912f72.js";var s={exports:{}},f={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=a.exports;function S(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var p=typeof Object.is=="function"?Object.is:S,d=o.useState,l=o.useEffect,v=o.useLayoutEffect,x=o.useDebugValue;function y(t,e){var r=e(),u=d({inst:{value:r,getSnapshot:e}}),n=u[0].inst,i=u[1];return v(function(){n.value=r,n.getSnapshot=e,c(n)&&i({inst:n})},[t,r,e]),l(function(){return c(n)&&i({inst:n}),t(function(){c(n)&&i({inst:n})})},[t]),x(r),r}function c(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!p(t,r)}catch{return!0}}function h(t,e){return e()}var m=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?h:y;f.useSyncExternalStore=o.useSyncExternalStore!==void 0?o.useSyncExternalStore:m;(function(t){t.exports=f})(s);const w=s.exports.useSyncExternalStore;function g(t,e){return typeof t=="function"?t(...e):!!t}export{g as s,w as u};
