"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[46103,96058],{99257:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(67294),l=a(86010),r=a(64926),s=a(36742);const i="sidebar_SrOn",o="sidebarItemTitle_jISh",c="categoryHeader_Xx2W",m="sidebarItemList_UfcF",d="sidebarItem_v502",g="sidebarItemLink_yJnx",u="sidebarItemLinkActive_Aygi";var p=a(24973);function h(e){let{sidebar:t}=e;if(0===t.items.length)return null;let a={};return t.items[0].permalink.indexOf("/blog/")>-1?t.items.forEach((e=>{if(e.permalink.indexOf("-")>-1){let t=e.permalink.split("-")[0].split("/blog/")[1];a[t]?a[t].push(e):a[t]=[e]}})):a={"":t.items},n.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),n.createElement("ul",{className:m},Object.keys(a).map(((e,t)=>n.createElement(n.Fragment,null,e.length>0&&n.createElement("h4",{key:t,className:c},e),a[e].map((e=>n.createElement("li",{key:e.permalink,className:d},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:u},e.title)))))))))}var E=a(571);const v=function(e){const{sidebar:t,toc:a,children:s,...i}=e,o=t&&t.items.length>0;return n.createElement(r.Z,i,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},o&&n.createElement("aside",{className:"col col--3"},n.createElement(h,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o})},s),a&&n.createElement("div",{className:"col col--2"},n.createElement(E.Z,{toc:a})))))}},43146:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),l=a(86010),r=a(3905),s=a(24973),i=a(36742),o=a(13018),c=a(96845),m=a(41217),d=a(86146);const g="blogPostTitle_d4p0",u="blogPostData_-Im+",p="blogPostDetailsFull_xD8n";const h=function(e){const t=function(){const{selectMessage:e}=(0,o.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:h,metadata:E,truncated:v,isBlogPostPage:b=!1}=e,{date:_,formattedDate:f,permalink:N,tags:k,readingTime:Z,title:w,editUrl:I}=E,{author:T,image:x,keywords:y}=h,L=h.author_url||h.authorURL,P=h.author_title||h.authorTitle,C=h.author_image_url||h.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(m.Z,{keywords:y,image:x}),n.createElement("article",{className:b?void 0:"margin-bottom--xl"},(()=>{const e=b?"h1":"h2";return n.createElement("header",null,n.createElement(e,{className:g},b?w:n.createElement(i.Z,{to:N},w)),n.createElement("div",{className:(0,l.Z)(u,"margin-vert--md")},n.createElement("time",{dateTime:_},f),Z&&n.createElement(n.Fragment,null," \xb7 ",t(Z))),n.createElement("div",{className:"avatar margin-vert--md"},C&&n.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:L},n.createElement("img",{src:C,alt:T})),n.createElement("div",{className:"avatar__intro"},T&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(i.Z,{href:L},T)),n.createElement("small",{className:"avatar__subtitle"},P)))))})(),n.createElement("div",{className:"markdown"},n.createElement(r.Zo,{components:c.Z},a)),(k.length>0||v)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",{[p]:b})},k.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((e=>{let{label:t,permalink:a}=e;return n.createElement(i.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),b&&I&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:I})),!b&&v&&n.createElement("div",{className:"col text--right"},n.createElement(i.Z,{to:E.permalink,"aria-label":"Read more about "+w},n.createElement("b",null,n.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},84147:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var n=a(67294),l=a(99257),r=a(43146),s=a(24973),i=a(36742);const o=function(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(i.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};var c=a(13018);const m=function(e){const{content:t,sidebar:a}=e,{frontMatter:s,metadata:i}=t,{title:m,description:d,nextItem:g,prevItem:u}=i,{hide_table_of_contents:p}=s;return n.createElement(l.Z,{title:m,description:d,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogPostPage,sidebar:a,toc:!p&&t.toc?t.toc:void 0},n.createElement(r.Z,{frontMatter:s,metadata:i,isBlogPostPage:!0},n.createElement(t,null)),(g||u)&&n.createElement(o,{nextItem:g,prevItem:u}))}},86146:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),l=a(24973),r=a(87462),s=a(86010);const i="iconEdit_mS5F",o=e=>{let{className:t,...a}=e;return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function c(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(o,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:(e,t,a)=>{a.d(t,{r:()=>o,Z:()=>c});var n=a(67294),l=a(86010);const r=function(e,t,a){const[l,r]=(0,n.useState)(void 0);(0,n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){const a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(n){let a=0,s=!1;const i=document.getElementsByClassName(e);for(;a<i.length&&!s;){const e=i[a],{href:o}=e,c=decodeURIComponent(o.substring(o.indexOf("#")+1));n.id===c&&(l&&l.classList.remove(t),e.classList.add(t),r(e),s=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},s="tableOfContents_vrFS",i="table-of-contents__link";function o(e){let{toc:t,isChild:a}=e;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:i,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))))):null}const c=function(e){let{toc:t}=e;return r(i,"table-of-contents__link--active",100),n.createElement("div",{className:(0,l.Z)(s,"thin-scrollbar")},n.createElement(o,{toc:t}))}},42086:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(87462),l=a(67294);const r=e=>{let{width:t=40,height:a=20,...r}=e;return l.createElement("svg",(0,n.Z)({t:"1631348384596",className:"icon",viewBox:"0 0 1024 1024",version:"1.1"},r,{"p-id":"557",width:"20",height:"20"}),l.createElement("path",{d:"M547.797333 638.208l-104.405333-103.168 1.237333-1.28a720.170667 720.170667 0 0 0 152.490667-268.373333h120.448V183.082667h-287.744V100.906667H347.605333v82.218666H59.818667V265.386667h459.178666a648.234667 648.234667 0 0 1-130.304 219.946666 643.242667 643.242667 0 0 1-94.976-137.728H211.541333a722.048 722.048 0 0 0 122.453334 187.434667l-209.194667 206.378667 58.368 58.368 205.525333-205.525334 127.872 127.829334 31.232-83.84m231.424-208.426667h-82.218666l-184.96 493.312h82.218666l46.037334-123.306667h195.242666l46.464 123.306667h82.218667l-185.002667-493.312m-107.690666 287.744l66.56-178.005333 66.602666 178.005333z",fill:"currentColor","p-id":"558"}))}}}]);