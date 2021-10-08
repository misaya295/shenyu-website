"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[7187],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,g=m["".concat(o,".").concat(h)]||m[h]||c[h]||u;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,i=new Array(u);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<u;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77437:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),u=(n(67294),n(3905)),i=["components"],l={title:"\u8d21\u732e\u8005\u6307\u5357",sidebar_position:4,description:"Apache ShenYu \u8d21\u732e\u8005\u6307\u5357",author:"xiaoyu",categories:"Apache ShenYu",tags:["Contributor"],date:new Date("2019-04-09T00:00:00.000Z"),cover:"/img/architecture/shenyu-framework.png"},o=void 0,s={unversionedId:"contributor",id:"contributor",isDocsHomePage:!1,title:"\u8d21\u732e\u8005\u6307\u5357",description:"Apache ShenYu \u8d21\u732e\u8005\u6307\u5357",source:"@site/i18n/zh/docusaurus-plugin-content-docs-community/current/3-contributor.md",sourceDirName:".",slug:"/contributor",permalink:"/zh/community/contributor",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/3-contributor.md",version:"current",lastUpdatedBy:"JenniferYin",lastUpdatedAt:1633667091,formattedLastUpdatedAt:"2021/10/8",sidebarPosition:4,frontMatter:{title:"\u8d21\u732e\u8005\u6307\u5357",sidebar_position:4,description:"Apache ShenYu \u8d21\u732e\u8005\u6307\u5357",author:"xiaoyu",categories:"Apache ShenYu",tags:["Contributor"],date:"2019-04-09T00:00:00.000Z",cover:"/img/architecture/shenyu-framework.png"},sidebar:"community",previous:{title:"\u95ee\u9898\u53ca\u63d0\u4ea4\u8bf7\u6c42",permalink:"/zh/community/issue-pr"},next:{title:"\u63d0\u4ea4\u8005\u6307\u5357",permalink:"/zh/community/committer"}},p=[{value:"\u63d0\u4ea4issue",id:"\u63d0\u4ea4issue",children:[]},{value:"\u5f00\u53d1\u6d41\u7a0b",id:"\u5f00\u53d1\u6d41\u7a0b",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,u.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"\u60a8\u53ef\u4ee5\u62a5\u544abug\uff0c\u63d0\u4ea4\u4e00\u4e2a\u65b0\u7684\u529f\u80fd\u589e\u5f3a\u5efa\u8bae\u6216\u8005\u76f4\u63a5\u5bf9\u4ee5\u4e0a\u5185\u5bb9\u63d0\u4ea4\u6539\u8fdb\u8865\u4e01\u3002"),(0,u.kt)("h2",{id:"\u63d0\u4ea4issue"},"\u63d0\u4ea4issue"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u5728\u63d0\u4ea4issue\u4e4b\u524d\uff0c\u8bf7\u7ecf\u8fc7\u5145\u5206\u7684\u641c\u7d22\uff0c\u786e\u5b9a\u8be5issue\u4e0d\u662f\u901a\u8fc7\u7b80\u5355\u7684\u68c0\u7d22\u5373\u53ef\u4ee5\u89e3\u51b3\u7684\u95ee\u9898\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u67e5\u770b",(0,u.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-shenyu/issues"},"issue\u5217\u8868"),"\uff0c\u786e\u5b9a\u8be5issue\u4e0d\u662f\u4e00\u4e2a\u91cd\u590d\u7684\u95ee\u9898\u3002"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-shenyu/issues/new/choose"},"\u65b0\u5efa"),"\u4e00\u4e2aissue\u5e76\u9009\u62e9\u60a8\u7684issue\u7c7b\u578b\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e00\u4e2a\u6e05\u6670\u5e76\u6709\u63cf\u8ff0\u6027\u7684\u6807\u9898\u6765\u5b9a\u4e49issue\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u6839\u636e\u6a21\u677f\u586b\u5199\u5fc5\u8981\u4fe1\u606f\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u5728\u63d0\u4ea4issue\u4e4b\u540e\uff0c\u5bf9\u8be5issue\u5206\u914d\u5408\u9002\u7684\u6807\u7b7e\u3002\u5982\uff1abug\uff0cenhancement\uff0cdiscussion\u7b49\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u8bf7\u5bf9\u81ea\u5df1\u63d0\u4ea4\u7684issue\u4fdd\u6301\u5173\u6ce8\uff0c\u5728\u8ba8\u8bba\u4e2d\u8fdb\u4e00\u6b65\u63d0\u4f9b\u5fc5\u8981\u4fe1\u606f\u3002")),(0,u.kt)("h2",{id:"\u5f00\u53d1\u6d41\u7a0b"},"\u5f00\u53d1\u6d41\u7a0b"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Fork\u5206\u652f\u5230\u672c\u5730")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u4ece ShenYu \u7684repo\u4e0afork\u4e00\u4e2a\u5206\u652f\u5230\u60a8\u81ea\u5df1\u7684repo\u6765\u5f00\u59cb\u5de5\u4f5c\uff0c\u5e76\u8bbe\u7f6eupstream\u4e3a ShenYu \u7684repo\u3002")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},"git remote add upstream https://github.com/apache/incubator-shenyu.git\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u9009\u62e9issue")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u8bf7\u5728\u9009\u62e9\u60a8\u8981\u4fee\u6539\u7684issue\u3002\u5982\u679c\u662f\u60a8\u65b0\u53d1\u73b0\u7684\u95ee\u9898\u6216\u60f3\u63d0\u4f9bissue\u4e2d\u6ca1\u6709\u7684\u529f\u80fd\u589e\u5f3a\uff0c\u8bf7\u5148\u65b0\u5efa\u4e00\u4e2aissue\u5e76\u8bbe\u7f6e\u6b63\u786e\u7684\u6807\u7b7e\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u5728\u9009\u4e2d\u76f8\u5173\u7684issue\u4e4b\u540e\uff0c\u8bf7\u56de\u590d\u4ee5\u8868\u660e\u60a8\u5f53\u524d\u6b63\u5728\u8fd9\u4e2aissue\u4e0a\u5de5\u4f5c\u3002\u5e76\u5728\u56de\u590d\u7684\u65f6\u5019\u4e3a\u81ea\u5df1\u8bbe\u7f6e\u4e00\u4e2adeadline\uff0c\u6dfb\u52a0\u81f3\u56de\u590d\u5185\u5bb9\u4e2d\u3002")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u521b\u5efa\u5206\u652f")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u5207\u6362\u5230fork\u7684master\u5206\u652f\uff0c\u62c9\u53d6\u6700\u65b0\u4ee3\u7801\uff0c\u521b\u5efa\u672c\u6b21\u7684\u5206\u652f\u3002")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout master\ngit pull upstream master\ngit checkout -b issueNo\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff1aPR\u4f1a\u6309\u7167squash\u7684\u65b9\u5f0f\u8fdb\u884cmerge\uff0c\u5982\u679c\u4e0d\u521b\u5efa\u65b0\u5206\u652f\uff0c\u672c\u5730\u548c\u8fdc\u7a0b\u7684\u63d0\u4ea4\u8bb0\u5f55\u5c06\u4e0d\u80fd\u4fdd\u6301\u540c\u6b65\u3002"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u7f16\u7801")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u8bf7\u60a8\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u9075\u5faa ShenYu \u7684 ",(0,u.kt)("a",{parentName:"li",href:"../code-conduct"},"\u5f00\u53d1\u89c4\u8303"),"\u3002\u5e76\u5728\u51c6\u5907\u63d0\u4ea4pull request\u4e4b\u524d\u5b8c\u6210\u76f8\u5e94\u7684\u68c0\u67e5\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u5c06\u4fee\u6539\u7684\u4ee3\u7801push\u5230fork\u5e93\u7684\u5206\u652f\u4e0a\u3002")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},"git add \u4fee\u6539\u4ee3\u7801\ngit commit -m 'commit log'\ngit push origin issueNo\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u63d0\u4ea4PR")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u53d1\u9001\u4e00\u4e2apull request\u5230 ShenYu \u7684master\u5206\u652f\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u63a5\u7740\u5bfc\u5e08\u505aCodeReview\uff0c\u7136\u540e\u4ed6\u4f1a\u4e0e\u60a8\u8ba8\u8bba\u4e00\u4e9b\u7ec6\u8282\uff08\u5305\u62ec\u8bbe\u8ba1\uff0c\u5b9e\u73b0\uff0c\u6027\u80fd\u7b49\uff09\u3002\u5f53\u5bfc\u5e08\u5bf9\u672c\u6b21\u4fee\u6539\u6ee1\u610f\u540e\uff0c\u4f1a\u5c06\u63d0\u4ea4\u5408\u5e76\u5230\u5f53\u524d\u5f00\u53d1\u7248\u672c\u7684\u5206\u652f\u4e2d\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u6700\u540e\uff0c\u606d\u559c\u60a8\u5df2\u7ecf\u6210\u4e3a\u4e86ShenYu\u7684\u8d21\u732e\u8005\uff01")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u5220\u9664\u5206\u652f")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u5728\u5bfc\u5e08\u5c06pull request\u5408\u5e76\u5230 ShenYu \u7684master\u5206\u652f\u4e2d\u4e4b\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u5c06\u8fdc\u7a0b\u7684\u5206\u652f\uff08origin/issueNo\uff09\u53ca\u4e0e\u8fdc\u7a0b\u5206\u652f\uff08origin/issueNo\uff09\u5173\u8054\u7684\u672c\u5730\u5206\u652f\uff08issueNo\uff09\u5220\u9664\u3002")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout master\ngit branch -d issueNo\ngit push origin --delete issueNo\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,u.kt)("p",null,"\u4e3a\u4e86\u8ba9\u60a8\u7684id\u663e\u793a\u5728contributor\u5217\u8868\u4e2d\uff0c\u522b\u5fd8\u4e86\u4ee5\u4e0b\u8bbe\u7f6e\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},'git config --global user.name "username"\ngit config --global user.email "username@mail.com"\n')),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u5e38\u89c1\u95ee\u9898")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u6bcf\u6b21Pull Request(PR)\u540e,\u4f60\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c,\u5426\u5219,\u4e4b\u524dPR\u7684\u63d0\u4ea4\u8bb0\u5f55\u4f1a\u548c\u8fd9\u6b21\u7684\u63d0\u4ea4\u8bb0\u5f55\u6df7\u5728\u4e00\u8d77,\u5177\u4f53\u64cd\u4f5c\u6d41\u7a0b\u5982\u4e0b:")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout master\ngit fetch upstream\ngit reset --hard upstream/master\ngit push -f\n")))}m.isMDXComponent=!0}}]);