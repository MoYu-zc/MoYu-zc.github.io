(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{513:function(t,s,a){"use strict";a.r(s);var n=a(15),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"could-not-autowire-no-beans-of-xxx-type-found"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#could-not-autowire-no-beans-of-xxx-type-found"}},[t._v("#")]),t._v(" Could not autowire. No beans of 'xxx' type found")]),t._v(" "),a("blockquote",[a("p",[t._v("如果是"),a("code",[t._v("Spring Boot")]),t._v(" 项目中  "),a("code",[t._v("Mapper")]),t._v(" 文件注入出现报错，可以尝试启动，如果可以正常启动的话，是不会影响的。")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("首先，检查三点")])]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("导入类是不是导入错了")])]),t._v(" "),a("li",[a("strong",[t._v("依赖是不是导入错了")])]),t._v(" "),a("li",[a("strong",[t._v("引入的类是不是对应依赖的")])])]),t._v(" "),a("p",[t._v("检查完毕，"),a("strong",[t._v("如果还是出现这样的问题")]),t._v("，参考以下解决方法：")])]),t._v(" "),a("h2",{attrs:{id:"遇到的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题"}},[t._v("#")]),t._v(" 遇到的问题")]),t._v(" "),a("p",[a("strong",[t._v("Could not autowire. No beans of 'xxx' type found")])]),t._v(" "),a("p",[t._v("这是我是在使用 "),a("code",[t._v("WebSocket")]),t._v(" 的时候，引入 "),a("code",[t._v("SimpMessagingTemplate")]),t._v(" 类，出现这个问题：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210526002827.png",alt:"1"}})]),t._v(" "),a("p",[t._v("如果启动的话：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210526002912.png",alt:"2"}})]),t._v(" "),a("h2",{attrs:{id:"解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),a("p",[t._v("1.启动类，加入启动注解  "),a("code",[t._v("@SpringBootApplication")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootApplication")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CloudApplication")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CloudApplication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("2.将启动类，移动到一个包下，不要放在根目录")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210526003152.png",alt:"3"}})]),t._v(" "),a("p",[t._v("这是我是新建的一个 "),a("code",[t._v("start")]),t._v(" 包，启动类移入其中，就可以注入了")]),t._v(" "),a("blockquote",[a("p",[t._v("请大家一定注意：")]),t._v(" "),a("p",[t._v("大部分的无法注入问题，都是因为 "),a("strong",[t._v("依赖导入错误、引入错误 或者 直接写错了类")]),t._v(" ，一定先排除这些可能")])])])}),[],!1,null,null,null);s.default=e.exports}}]);