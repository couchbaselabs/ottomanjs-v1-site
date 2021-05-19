(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{374:function(t,a,e){"use strict";e.r(a);var s=e(25),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ottoman"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ottoman"}},[t._v("#")]),t._v(" Ottoman")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/couchbaselabs/node-ottoman/workflows/CI/badge.svg",alt:"CI"}}),t._v(" "),e("a",{attrs:{href:"https://codecov.io/gh/couchbaselabs/node-ottoman",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://codecov.io/gh/couchbaselabs/node-ottoman/branch/master/graph/badge.svg",alt:"codecov"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://badge.fury.io/js/ottoman",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://badge.fury.io/js/ottoman.svg",alt:"npm version"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"http://commitizen.github.io/cz-cli/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/commitizen-friendly-brightgreen.svg",alt:"Commitizen friendly"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://opensource.org/licenses/Apache-2.0",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/License-Apache%202.0-blue.svg",alt:"License"}}),e("OutboundLink")],1)]),t._v(" "),e("h1",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("Ottoman is an ODM built for Couchbase and Node.js.")]),t._v(" "),e("p",[t._v("Ottoman's goal is to provide a better development experience while using Couchbase,\nbringing to developers a reliable tool to build systems that are easy to design, maintain, and scale.")]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm install ottoman\n")])])]),e("p",[t._v("That's it, you are ready to use Ottoman.")]),t._v(" "),e("h3",{attrs:{id:"dependencies-matrix"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dependencies-matrix"}},[t._v("#")]),t._v(" Dependencies Matrix")]),t._v(" "),e("p",[t._v("Supported version are:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Ottoman")]),t._v(" "),e("th",[t._v("Nodejs")]),t._v(" "),e("th",[t._v("Couchbase SDK")]),t._v(" "),e("th",[t._v("Couchbase Server")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("^2.0.0")]),t._v(" "),e("td",[t._v("^8.0.0")]),t._v(" "),e("td",[t._v("^3.0.0")]),t._v(" "),e("td",[t._v("^6.5.0")])])])]),t._v(" "),e("p",[e("em",[e("strong",[t._v("Notice: make sure you are using supported versions")])])]),t._v(" "),e("h2",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting started")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" connect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" model"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" close "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ottoman'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"couchbase://localhost/travel-sample@admin:password"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("model")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" user "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Jane Doe'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nuser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Nice Job!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("finally")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("You should see results similar to the following:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Nice Job!\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("If you are using legacy database must check out this "),e("a",{attrs:{href:"https://ottomanjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ottomanjs.com"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"ottoman-v2-main-goals"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ottoman-v2-main-goals"}},[t._v("#")]),t._v(" Ottoman v2 main goals")]),t._v(" "),e("ul",[e("li",[t._v("To add support to Couchbase SDK 3.")]),t._v(" "),e("li",[t._v("To add typescript support.")]),t._v(" "),e("li",[t._v("To have a powerful query builder built-in.")]),t._v(" "),e("li",[t._v("To allow adding indexes to improve queries performance.")]),t._v(" "),e("li",[t._v("To have extendable Schemas using statics, methods, hooks.")]),t._v(" "),e("li",[t._v("To have Pluggable Schemas.")])]),t._v(" "),e("h2",{attrs:{id:"documentation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[t._v("#")]),t._v(" Documentation")]),t._v(" "),e("p",[t._v("Checkout our "),e("a",{attrs:{href:"https://v2.ottomanjs.com/guides/first-app.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("examples"),e("OutboundLink")],1),t._v("  and "),e("a",{attrs:{href:"https://v2.ottomanjs.com/guides/quick-start.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("docs"),e("OutboundLink")],1),t._v(" for typescript and javascript implementation.")]),t._v(" "),e("h2",{attrs:{id:"questions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#questions"}},[t._v("#")]),t._v(" Questions")]),t._v(" "),e("p",[t._v("For questions and support please use "),e("a",{attrs:{href:"https://forums.couchbase.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("the official forum"),e("OutboundLink")],1),t._v(" or "),e("a",{attrs:{href:"http://couchbase.com/communities/nodejs",target:"_blank",rel:"noopener noreferrer"}},[t._v("contact community"),e("OutboundLink")],1),t._v(".\nPlease make sure to read the "),e("a",{attrs:{href:"https://github.com/couchbaselabs/node-ottoman/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("Issue Reporting Checklist"),e("OutboundLink")],1),t._v(" before opening an issue.")]),t._v(" "),e("h2",{attrs:{id:"changelog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[t._v("#")]),t._v(" Changelog")]),t._v(" "),e("p",[t._v("Detailed changes for each release are documented in the "),e("a",{attrs:{href:"https://github.com/couchbaselabs/node-ottoman/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("release notes"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"stay-in-touch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stay-in-touch"}},[t._v("#")]),t._v(" Stay In Touch")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.couchbase.com/?s=ottoman",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blog"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"contributions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contributions"}},[t._v("#")]),t._v(" Contributions")]),t._v(" "),e("p",[t._v("Thank you to all the people who already contributed to Couchbase Ottoman!")]),t._v(" "),e("h3",{attrs:{id:"guide-for-developers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#guide-for-developers"}},[t._v("#")]),t._v(" Guide for Developers")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://docs.couchbase.com/server/current/install/getting-started-docker.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install Couchbase Server Using Docker"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("Check results on "),e("a",{attrs:{href:"http://localhost:8091/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8091/"),e("OutboundLink")],1),t._v(" couchbase web client.")])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Get the repo and install dependencies")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ git clone https://github.com/couchbaselabs/node-ottoman.git\n$ cd node-ottoman\n$ yarn install\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Available scripts")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ yarn dev\n$ yarn build\n$ yarn lint\n$ yarn test\n$ yarn test --coverage\n$ yarn docs\n$ yarn docs:dev\n")])])]),e("h2",{attrs:{id:"deploying-ottoman-to-npm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploying-ottoman-to-npm"}},[t._v("#")]),t._v(" Deploying Ottoman to NPM")]),t._v(" "),e("ul",[e("li",[t._v("Pull master branch from repo")]),t._v(" "),e("li",[t._v("yarn install")]),t._v(" "),e("li",[t._v("ensure version number is bumped")]),t._v(" "),e("li",[t._v("yarn build")]),t._v(" "),e("li",[t._v("yarn is:ready")])]),t._v(" "),e("h2",{attrs:{id:"publishing-to-npm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#publishing-to-npm"}},[t._v("#")]),t._v(" Publishing to NPM")]),t._v(" "),e("p",[t._v("When publishing a new package to NPM, please follow the following steps:")]),t._v(" "),e("ul",[e("li",[t._v("git pull (master branch)")]),t._v(" "),e("li",[t._v("yarn install && yarn build")]),t._v(" "),e("li",[t._v("update the "),e("code",[t._v("package.json")]),t._v(" file w/ new version")]),t._v(" "),e("li",[t._v("yarn test:legacy (Use "),e("code",[t._v("test:legacy")]),t._v(" Until CB 7 Release)")]),t._v(" "),e("li",[t._v("yarn pack (ensure package is packing as intended)")]),t._v(" "),e("li",[t._v("npm publish (--tag alpha or --tag beta)")]),t._v(" "),e("li",[t._v("push changes to "),e("code",[t._v("package.json")]),t._v(" file w/ new version")]),t._v(" "),e("li",[t._v("deploy docs *if required")])]),t._v(" "),e("p",[t._v("Once package is published, *update the docs:")]),t._v(" "),e("ul",[e("li",[t._v("yarn docs:dev (preview site)")]),t._v(" "),e("li",[t._v("yarn docs (generate docs directory)")]),t._v(" "),e("li",[t._v("copy files in "),e("code",[t._v("docs/.vuepress/dist")]),t._v(" to ottomanjs-site")]),t._v(" "),e("li",[t._v("ensure CNAME file is correct")]),t._v(" "),e("li",[t._v("git push changes to ottomanjs-site")])]),t._v(" "),e("h2",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),e("p",[t._v("© Copyright 2021 Couchbase Inc.")]),t._v(" "),e("p",[t._v("Licensed under the Apache License, Version 2.0.\nSee "),e("a",{attrs:{href:"http://www.apache.org/licenses/LICENSE-2.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("the Apache 2.0 license"),e("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);