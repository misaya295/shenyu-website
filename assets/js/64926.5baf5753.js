"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[64926],{20830:(e,t,n)=>{n.d(t,{W:()=>r});var a=n(67294);function r(){return a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},89754:(e,t,n)=>{n.d(t,{Z:()=>L});var a=n(87462),r=n(67294),l=n(73935),o=n(52263),c=n(5977),s=n(44996),i=n(36742),u=n(99105),m=n(2644);function d(){return r.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var h=n(20830),f=["translations"];function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g="Ctrl";var E=r.forwardRef((function(e,t){var n=e.translations,a=void 0===n?{}:n,l=b(e,f),o=a.buttonText,c=void 0===o?"Search":o,s=a.buttonAriaLabel,i=void 0===s?"Search":s,u=(0,r.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":g:null}),[]);return r.createElement("button",v({type:"button",className:"DocSearch DocSearch-Button","aria-label":i},l,{ref:t}),r.createElement("span",{className:"DocSearch-Button-Container"},r.createElement(h.W,null),r.createElement("span",{className:"DocSearch-Button-Placeholder"},c)),r.createElement("span",{className:"DocSearch-Button-Keys"},null!==u&&r.createElement(r.Fragment,null,r.createElement("kbd",{className:"DocSearch-Button-Key"},u===g?r.createElement(d,null):u),r.createElement("kbd",{className:"DocSearch-Button-Key"},"K"))))})),p=n(96730),k=n(13018);function Z(){const{locale:e,tags:t}=function(){const{i18n:e}=(0,o.Z)(),t=(0,p.useAllDocsData)(),n=(0,p.useActivePluginAndVersion)(),a=(0,k.Oh)(),r=[k.HX,...Object.keys(t).map((function(e){var r,l;const o=(null==n||null==(r=n.activePlugin)?void 0:r.pluginId)===e?n.activeVersion:void 0,c=a[e],s=t[e].versions.find((e=>e.isLast)),i=null!=(l=null!=o?o:c)?l:s;return(0,k.os)(e,i.name)}))];return{locale:e.currentLocale,tags:r}}();return["language:"+e,t.map((e=>"docusaurus_tag:"+e))]}var _=n(24973);const y="searchBox_Bc3W";let C=null;function w(e){let{hit:t,children:n}=e;return r.createElement(i.Z,{to:t.url},n)}function N(e){let{state:t,onClose:n}=e;const{generateSearchPageLink:a}=(0,m.Z)();return r.createElement(i.Z,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function S(e){var t,i;let{contextualSearch:m,...d}=e;const{siteMetadata:h}=(0,o.Z)(),f=Z(),v=null!=(t=null==(i=d.searchParameters)?void 0:i.facetFilters)?t:[],b=m?[...f,...v]:v,g={...d.searchParameters,facetFilters:b},{withBaseUrl:p}=(0,s.C)(),k=(0,c.k6)(),S=(0,r.useRef)(null),L=(0,r.useRef)(null),[D,I]=(0,r.useState)(!1),[T,B]=(0,r.useState)(null),A=(0,r.useCallback)((()=>C?Promise.resolve():Promise.all([n.e(12431).then(n.bind(n,12431)),Promise.all([n.e(40532),n.e(46945)]).then(n.bind(n,46945)),Promise.all([n.e(40532),n.e(55040)]).then(n.bind(n,55040))]).then((e=>{let[{DocSearchModal:t}]=e;C=t}))),[]),x=(0,r.useCallback)((()=>{A().then((()=>{S.current=document.createElement("div"),document.body.insertBefore(S.current,document.body.firstChild),I(!0)}))}),[A,I]),M=(0,r.useCallback)((()=>{I(!1),S.current.remove()}),[I]),P=(0,r.useCallback)((e=>{A().then((()=>{I(!0),B(e.key)}))}),[A,I,B]),R=(0,r.useRef)({navigate(e){let{itemUrl:t}=e;k.push(t)}}).current,O=(0,r.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:p(""+t.pathname+t.hash)}})))).current,U=(0,r.useMemo)((()=>e=>r.createElement(N,(0,a.Z)({},e,{onClose:M}))),[M]),V=(0,r.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",h.docusaurusVersion),e)),[h.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,l=e.onInput,o=e.searchButtonRef;r.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&l&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&l(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,l,o])}({isOpen:D,onOpen:x,onClose:M,onInput:P,searchButtonRef:L});const H=(0,_.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.createElement(r.Fragment,null,r.createElement(u.Z,null,r.createElement("link",{rel:"preconnect",href:"https://"+d.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.createElement("div",{className:y},r.createElement(E,{onTouchStart:A,onFocus:A,onMouseOver:A,onClick:x,ref:L,translations:{buttonText:H,buttonAriaLabel:H}})),D&&(0,l.createPortal)(r.createElement(C,(0,a.Z)({onClose:M,initialScrollY:window.scrollY,initialQuery:T,navigator:R,transformItems:O,hitComponent:w,resultsFooterComponent:U,transformSearchClient:V},d,{searchParameters:g})),S.current))}const L=function(){const{siteConfig:e}=(0,o.Z)();return r.createElement(S,e.themeConfig.algolia)}},2644:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(5977),r=n(10412),l=n(52263);const o=function(){const e=(0,a.k6)(),t=(0,a.TH)(),{siteConfig:{baseUrl:n}={}}=(0,l.Z)();return{searchValue:r.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>n+"search?q="+encodeURIComponent(e)}}},18617:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294);const r="iconExternalLink_wgqa",l=e=>{let{width:t=13.5,height:n=13.5}=e;return a.createElement("svg",{width:t,height:n,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},64926:(e,t,n)=>{n.d(t,{Z:()=>be});var a=n(67294),r=n(86010),l=n(5977),o=n(24973),c=n(13018);const s="skipToContent_OuoZ";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const u=function(){const e=(0,a.useRef)(null),{action:t}=(0,l.k6)();return(0,c.SL)((n=>{let{location:a}=n;e.current&&!a.hash&&"PUSH"===t&&i(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:s,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},a.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m="announcementBar_axC9",d="announcementBarClose_A3A1",h="announcementBarContent_6uhP",f="announcementBarCloseable_y4cp";const v=function(){const{isClosed:e,close:t}=(0,c.nT)(),{announcementBar:n}=(0,c.LU)();if(!n)return null;const{content:l,backgroundColor:s,textColor:i,isCloseable:u}=n;return!l||u&&e?null:a.createElement("div",{className:m,style:{backgroundColor:s,color:i},role:"banner"},a.createElement("div",{className:(0,r.Z)(h,{[f]:u}),dangerouslySetInnerHTML:{__html:l}}),u?a.createElement("button",{type:"button",className:(0,r.Z)(d,"clean-btn"),onClick:t,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)};var b=n(87462),g=n(89754),E=n(52263);const p={toggle:"toggle_iYfV"},k=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(p.toggle,p.dark),style:n},t)},Z=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(p.toggle,p.light),style:n},t)},_=(0,a.memo)((e=>{let{className:t,icons:n,checked:l,disabled:o,onChange:c}=e;const[s,i]=(0,a.useState)(l),[u,m]=(0,a.useState)(!1),d=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":u,"react-toggle--disabled":o})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:()=>{var e;return null==(e=d.current)?void 0:e.click()}},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:d,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:()=>i(!s),onFocus:()=>m(!0),onBlur:()=>m(!1)}))}));function y(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:r,lightIconStyle:l}}}=(0,c.LU)(),{isClient:o}=(0,E.Z)();return a.createElement(_,(0,b.Z)({disabled:!o,icons:{checked:a.createElement(k,{icon:t,style:n}),unchecked:a.createElement(Z,{icon:r,style:l})}},e))}var C=n(85350),w=n(77898);const N=e=>{const t=(0,l.TH)(),[n,r]=(0,a.useState)(e),o=(0,a.useRef)(!1),[s,i]=(0,a.useState)(0),u=(0,a.useCallback)((e=>{null!==e&&i(e.getBoundingClientRect().height)}),[]);return(0,w.Z)(((t,n)=>{const a=t.scrollY,l=null==n?void 0:n.scrollY;if(!e)return;if(a<s)return void r(!0);if(o.current)return o.current=!1,void r(!1);l&&0===a&&r(!0);const c=document.documentElement.scrollHeight-s,i=window.innerHeight;l&&a>=l?r(!1):a+i<c&&r(!0)}),[s,o]),(0,c.SL)((t=>{e&&!t.location.hash&&r(!0)})),(0,a.useEffect)((()=>{e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:u,isNavbarVisible:n}};const S=function(e){void 0===e&&(e=!0),(0,a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])};var L=n(93783),D=n(17193),I=n(55537);const T=e=>{let{width:t=30,height:n=30,className:r,...l}=e;return a.createElement("svg",(0,b.Z)({className:r,width:t,height:n,viewBox:"0 0 30 30","aria-hidden":"true"},l),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},B="toggle_2i4l",A="navbarHideable_RReh",x="navbarHidden_FBwS",M="right";function P(){return(0,c.LU)().navbar.items}function R(){const{colorMode:{disableSwitch:e}}=(0,c.LU)(),{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=(0,C.Z)();return{isDarkTheme:t,toggle:(0,a.useCallback)((e=>e.target.checked?r():n()),[n,r]),disabled:e}}function O(e){let{sidebarShown:t,toggleSidebar:n}=e;S(t);const l=P(),s=R(),i=function(e){var t;let{sidebarShown:n,toggleSidebar:r}=e;const l=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:r}),o=(0,c.D9)(l),[s,i]=(0,a.useState)((()=>!1));(0,a.useEffect)((()=>{l&&!o&&i(!0)}),[l,o]);const u=!!l;return(0,a.useEffect)((()=>{u?n||i(!0):i(!1)}),[n,u]),{shown:s,hide:(0,a.useCallback)((()=>{i(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(I.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&t&&a.createElement(y,{checked:s.isDarkTheme,onChange:s.toggle})),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":i.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},l.map(((e,t)=>a.createElement(D.Z,(0,b.Z)({mobile:!0},e,{onClick:n,key:t})))))),a.createElement("div",{className:"navbar-sidebar__item navbar-sidebar__item--secondary menu"},a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:i.hide},a.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),i.content)))}const U=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,c.LU)(),n=function(){const e=(0,L.Z)(),t="mobile"===e,[n,r]=(0,a.useState)(!1),l=(0,a.useCallback)((()=>{r((e=>!e))}),[]);return(0,a.useEffect)((()=>{"desktop"===e&&r(!1)}),[e]),{shouldRender:t,toggle:l,shown:n}}(),l=R(),{navbarRef:o,isNavbarVisible:s}=N(e),i=P(),u=i.some((e=>"search"===e.type)),{leftItems:m,rightItems:d}=function(e){return{leftItems:e.filter((e=>{var t;return"left"===(null!=(t=e.position)?t:M)})),rightItems:e.filter((e=>{var t;return"right"===(null!=(t=e.position)?t:M)}))}}(i);return a.createElement("nav",{ref:o,className:(0,r.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":n.shown,[A]:e,[x]:e&&!s})},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},(null==i?void 0:i.length)>0&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:n.toggle,onKeyDown:n.toggle},a.createElement(T,null)),a.createElement(I.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),m.map(((e,t)=>a.createElement(D.Z,(0,b.Z)({},e,{key:t}))))),a.createElement("div",{className:"navbar__items navbar__items--right"},d.map(((e,t)=>a.createElement(D.Z,(0,b.Z)({},e,{key:t})))),!l.disabled&&a.createElement(y,{className:B,checked:l.isDarkTheme,onChange:l.toggle}),!u&&a.createElement(g.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:n.toggle}),n.shouldRender&&a.createElement(O,{sidebarShown:n.shown,toggleSidebar:n.toggle}))};var V=n(36742),H=n(44996),F=n(13919);const W="footerLogoLink_SRtH";var j=n(98465),q=n(18617);function K(e){let{to:t,href:n,label:r,prependBaseUrlToHref:l,...o}=e;const c=(0,H.Z)(t),s=(0,H.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(V.Z,(0,b.Z)({className:"footer__link-item"},n?{href:l?s:n}:{to:c},o),n&&!(0,F.Z)(n)?a.createElement("span",null,r,a.createElement(q.Z,null)):r)}const z=e=>{let{sources:t,alt:n}=e;return a.createElement(j.Z,{className:"footer__logo",alt:n,sources:t})};const Y=function(){const{footer:e}=(0,c.LU)(),{copyright:t,links:n=[],logo:l={}}=e||{},o={light:(0,H.Z)(l.src),dark:(0,H.Z)(l.srcDark||l.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},n&&n.length>0&&a.createElement("div",{className:"row footer__links"},n.map(((e,t)=>a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(K,e))))):null)))),(l||t)&&a.createElement("div",{className:"footer__bottom text--center"},l&&(l.src||l.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},l.href?a.createElement(V.Z,{href:l.href,className:W},a.createElement(z,{alt:l.alt,sources:o})):a.createElement(z,{alt:l.alt,sources:o})),t?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null};var G=n(10412);const X=(0,c.WA)("theme"),Q="light",J="dark",$=e=>e===J?J:Q,ee=e=>{(0,c.WA)("theme").set($(e))},te=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:n}}=(0,c.LU)(),[r,l]=(0,a.useState)((e=>G.Z.canUseDOM?$(document.documentElement.getAttribute("data-theme")):$(e))(e)),o=(0,a.useCallback)((()=>{l(Q),ee(Q)}),[]),s=(0,a.useCallback)((()=>{l(J),ee(J)}),[]);return(0,a.useEffect)((()=>{document.documentElement.setAttribute("data-theme",$(r))}),[r]),(0,a.useEffect)((()=>{if(!t)try{const e=X.get();null!==e&&l($(e))}catch(e){console.error(e)}}),[l]),(0,a.useEffect)((()=>{t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{let{matches:t}=e;l(t?J:Q)}))}),[]),{isDarkTheme:r===J,setLightTheme:o,setDarkTheme:s}};var ne=n(82924);const ae=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=te();return a.createElement(ne.Z.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)},re="docusaurus.tab.",le=()=>{const[e,t]=(0,a.useState)({}),n=(0,a.useCallback)(((e,t)=>{(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,a.useEffect)((()=>{try{const e={};(0,c._f)().forEach((t=>{if(t.startsWith(re)){const n=t.substring(re.length);e[n]=(0,c.WA)(t).get()}})),t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}},oe=(0,a.createContext)(void 0);const ce=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=le();return a.createElement(oe.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)};function se(e){let{children:t}=e;return a.createElement(ae,null,a.createElement(c.pl,null,a.createElement(ce,null,a.createElement(c.L5,null,a.createElement(c.Cn,null,t)))))}var ie=n(99105);function ue(e){let{locale:t,version:n,tag:r}=e;const l=t;return a.createElement(ie.Z,null,l&&a.createElement("meta",{name:"docsearch:language",content:l}),n&&a.createElement("meta",{name:"docsearch:version",content:n}),r&&a.createElement("meta",{name:"docsearch:docusaurus_tag",content:r}))}var me=n(41217);function de(){const{i18n:{defaultLocale:e,locales:t}}=(0,E.Z)(),n=(0,c.l5)();return a.createElement(ie.Z,null,t.map((e=>a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),a.createElement("link",{rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function he(e){let{permalink:t}=e;const{siteConfig:{url:n}}=(0,E.Z)(),r=function(){const{siteConfig:{url:e}}=(0,E.Z)(),{pathname:t}=(0,l.TH)();return e+(0,H.Z)(t)}(),o=t?""+n+t:r;return a.createElement(ie.Z,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function fe(e){const{siteConfig:{favicon:t,themeConfig:{metadatas:n,image:r}},i18n:{currentLocale:l,localeConfigs:o}}=(0,E.Z)(),{title:s,description:i,image:u,keywords:m,searchMetadatas:d}=e,h=(0,H.Z)(t),f=(0,c.pe)(s),v=l,g=o[l].direction;return a.createElement(a.Fragment,null,a.createElement(ie.Z,null,a.createElement("html",{lang:v,dir:g}),t&&a.createElement("link",{rel:"shortcut icon",href:h}),a.createElement("title",null,f),a.createElement("meta",{property:"og:title",content:f}),u||r&&a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),a.createElement(me.Z,{description:i,keywords:m,image:u}),a.createElement(he,null),a.createElement(de,null),a.createElement(ue,(0,b.Z)({tag:c.HX,locale:l},d)),a.createElement(ie.Z,null,n.map(((e,t)=>a.createElement("meta",(0,b.Z)({key:"metadata_"+t},e))))))}const ve=function(){(0,a.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const be=function(e){const{children:t,noFooter:n,wrapperClassName:l,pageClassName:o}=e;return ve(),a.createElement(se,null,a.createElement(fe,e),a.createElement(u,null),a.createElement(v,null),a.createElement(U,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,l,o)},t),!n&&a.createElement(Y,null))}},55537:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(87462),r=n(67294),l=n(36742),o=n(98465),c=n(44996),s=n(52263);const i=e=>{const{siteConfig:{title:t,themeConfig:{navbar:{title:n,logo:i={src:""}}}},isClient:u}=(0,s.Z)(),{imageClassName:m,titleClassName:d,...h}=e,f=(0,c.Z)(i.href||"/"),v={light:(0,c.Z)(i.src),dark:(0,c.Z)(i.srcDark||i.src)};return r.createElement(l.Z,(0,a.Z)({to:f},h,i.target&&{target:i.target}),i.src&&r.createElement(o.Z,{key:u,className:m,sources:v,alt:i.alt||n||t}),null!=n&&r.createElement("b",{className:d},n))}},5525:(e,t,n)=>{n.d(t,{O:()=>u,Z:()=>h});var a=n(87462),r=n(67294),l=n(86010),o=n(36742),c=n(44996),s=n(18617),i=n(13919);function u(e){let{activeBasePath:t,activeBaseRegex:n,to:l,href:u,label:m,activeClassName:d="navbar__link--active",prependBaseUrlToHref:h,...f}=e;const v=(0,c.Z)(l),b=(0,c.Z)(t),g=(0,c.Z)(u,{forcePrependBaseUrl:!0}),E=m&&u&&!(0,i.Z)(u),p="dropdown__link--active"===d;return r.createElement(o.Z,(0,a.Z)({},u?{href:h?g:u}:{isNavLink:!0,activeClassName:d,to:v,...t||n?{isActive:(e,t)=>n?new RegExp(n).test(t.pathname):t.pathname.startsWith(b)}:null},f),E?r.createElement("span",null,m,r.createElement(s.Z,p&&{width:12,height:12})):m)}function m(e){let{className:t,isDropdownItem:n=!1,...o}=e;const c=r.createElement(u,(0,a.Z)({className:(0,l.Z)(n?"dropdown__link":"navbar__item navbar__link",t)},o));return n?r.createElement("li",null,c):c}function d(e){let{className:t,isDropdownItem:n,...o}=e;return r.createElement("li",{className:"menu__list-item"},r.createElement(u,(0,a.Z)({className:(0,l.Z)("menu__link",t)},o)))}const h=function(e){let{mobile:t=!1,position:n,...a}=e;const l=t?d:m;return r.createElement(l,a)}},76400:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(87462),r=n(67294),l=n(5525),o=n(96730),c=n(86010),s=n(13018),i=n(18780);function u(e){let{docId:t,activeSidebarClassName:n,label:u,docsPluginId:m,...d}=e;const{activeVersion:h,activeDoc:f}=(0,o.useActiveDocContext)(m),{preferredVersion:v}=(0,s.J)(m),b=(0,o.useLatestVersion)(m),g=function(e,t){const n=e.flatMap((e=>e.docs)),a=n.find((e=>e.id===t));if(!a){const a=n.map((e=>e.id)).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((e=>e.name)).join(", ")+'".\nAvailable doc ids are:\n- '+a)}return a}((0,i.uniq)([h,v,b].filter(Boolean)),t);return r.createElement(l.Z,(0,a.Z)({exact:!0},d,{className:(0,c.Z)(d.className,{[n]:f&&f.sidebar===g.sidebar}),label:null!=u?u:g.id,to:g.path}))}},59308:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(87462),r=n(67294),l=n(5525),o=n(23154),c=n(96730),s=n(13018);const i=e=>e.docs.find((t=>t.id===e.mainDocId));function u(e){var t,n;let{mobile:u,docsPluginId:m,dropdownActiveClassDisabled:d,dropdownItemsBefore:h,dropdownItemsAfter:f,...v}=e;const b=(0,c.useActiveDocContext)(m),g=(0,c.useVersions)(m),E=(0,c.useLatestVersion)(m),{preferredVersion:p,savePreferredVersionName:k}=(0,s.J)(m);const Z=function(){const e=g.map((e=>{const t=(null==b?void 0:b.alternateDocVersions[e.name])||i(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==b?void 0:b.activeVersion),onClick:()=>{k(e.name)}}}));return[...h,...e,...f]}(),_=null!=(t=null!=(n=b.activeVersion)?n:p)?t:E,y=u&&Z?"Versions":_.label,C=u&&Z?void 0:i(_).path;return Z.length<=1?r.createElement(l.Z,(0,a.Z)({},v,{mobile:u,label:y,to:C,isActive:d?()=>!1:void 0})):r.createElement(o.Z,(0,a.Z)({},v,{mobile:u,label:y,to:C,items:Z,isActive:d?()=>!1:void 0}))}},47250:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(87462),r=n(67294),l=n(5525),o=n(96730),c=n(13018);function s(e){var t;let{label:n,to:s,docsPluginId:i,...u}=e;const m=(0,o.useActiveVersion)(i),{preferredVersion:d}=(0,c.J)(i),h=(0,o.useLatestVersion)(i),f=null!=(t=null!=m?m:d)?t:h,v=null!=n?n:f.label,b=null!=s?s:(e=>e.docs.find((t=>t.id===e.mainDocId)))(f).path;return r.createElement(l.Z,(0,a.Z)({},u,{label:v,to:b}))}},23154:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),l=n(86010),o=n(13018),c=n(5525),s=n(17193);function i(e,t){return e.some((e=>function(e,t){return!!(0,o.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function u(e){var t;let{items:n,position:o,className:i,...u}=e;const m=(0,r.useRef)(null),d=(0,r.useRef)(null),[h,f]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=e=>{m.current&&!m.current.contains(e.target)&&f(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[m]),r.createElement("div",{ref:m,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===o,"dropdown--show":h})},r.createElement(c.O,(0,a.Z)({className:(0,l.Z)("navbar__item navbar__link",i)},u,{onClick:u.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),f(!h))}}),null!=(t=u.children)?t:u.label),r.createElement("ul",{ref:d,className:"dropdown__menu"},n.map(((e,t)=>r.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:e=>{if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),f(!1);const t=m.current.nextElementSibling;t&&t.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))))))}function m(e){var t;let{items:n,className:u,position:m,...d}=e;const h=(0,o.be)(),f=i(n,h),{collapsed:v,toggleCollapsed:b,setCollapsed:g}=(0,o.uR)({initialState:()=>!f});return(0,r.useEffect)((()=>{f&&g(!f)}),[h,f]),r.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":v})},r.createElement(c.O,(0,a.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",u)},d,{onClick:e=>{e.preventDefault(),b()}}),null!=(t=d.children)?t:d.label),r.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:v},n.map(((e,t)=>r.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}const d=function(e){let{mobile:t=!1,...n}=e;const a=t?m:u;return r.createElement(a,n)}},17193:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(67294),r=n(5525),l=n(23154),o=n(87462),c=n(42086),s=n(52263),i=n(13018);function u(e){let{mobile:t,dropdownItemsBefore:n,dropdownItemsAfter:r,...u}=e;const{i18n:{currentLocale:m,locales:d,localeConfigs:h}}=(0,s.Z)(),f=(0,i.l5)();function v(e){return h[e].label}const b=[...n,...d.map((e=>{const t="pathname://"+f.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:v(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===m?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...r],g=t?"Languages":v(m);return a.createElement(l.Z,(0,o.Z)({},u,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(c.Z,{style:{verticalAlign:"text-bottom",marginRight:5}}),a.createElement("span",null,g)),items:b}))}var m=n(89754);function d(e){let{mobile:t}=e;return t?null:a.createElement(m.Z,null)}const h={default:()=>r.Z,localeDropdown:()=>u,search:()=>d,dropdown:()=>l.Z,docsVersion:()=>n(47250).Z,docsVersionDropdown:()=>n(59308).Z,doc:()=>n(76400).Z};function f(e){let{type:t,...n}=e;const r=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),l=(e=>{const t=h[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()})(r);return a.createElement(l,n)}},82924:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(67294).createContext(void 0)},98465:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(87462),r=n(67294),l=n(86010),o=n(52263),c=n(85350);const s={themedImage:"themedImage_TMUO","themedImage--light":"themedImage--light_4Vu1","themedImage--dark":"themedImage--dark_uzRr"},i=e=>{const{isClient:t}=(0,o.Z)(),{isDarkTheme:n}=(0,c.Z)(),{sources:i,className:u,alt:m="",...d}=e,h=t?n?["dark"]:["light"]:["light","dark"];return r.createElement(r.Fragment,null,h.map((e=>r.createElement("img",(0,a.Z)({key:e,src:i[e],alt:m,className:(0,l.Z)(s.themedImage,s["themedImage--"+e],u)},d)))))}},77898:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(10412);const l=()=>r.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null,o=function(e,t){void 0===t&&(t=[]);const n=(0,a.useRef)(l()),r=()=>{const t=l();e&&e(t,n.current),n.current=t};(0,a.useEffect)((()=>{const e={passive:!0};return r(),window.addEventListener("scroll",r,e),()=>window.removeEventListener("scroll",r,e)}),t)}},85350:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(82924);const l=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}}}]);