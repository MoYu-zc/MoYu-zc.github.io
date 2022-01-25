(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{494:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"hexo之更换背景及透明度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hexo之更换背景及透明度"}},[s._v("#")]),s._v(" Hexo之更换背景及透明度")]),s._v(" "),a("h2",{attrs:{id:"引入方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入方式"}},[s._v("#")]),s._v(" 引入方式")]),s._v(" "),a("p",[s._v("首先，介绍一下"),a("code",[s._v("引入方式")]),s._v("，外部导入"),a("code",[s._v("css文件")]),s._v("，不影响内部配置。")]),s._v(" "),a("h3",{attrs:{id:"_1-创建css文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建css文件"}},[s._v("#")]),s._v(" 1.创建css文件")]),s._v(" "),a("p",[s._v("创建一个"),a("code",[s._v("css文件")]),s._v("移动到"),a("code",[s._v("\\themes\\butterfly\\source\\css")]),s._v("目录下。")]),s._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210207003133.png",alt:"1"}}),s._v(" "),a("h3",{attrs:{id:"_2-引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-引入"}},[s._v("#")]),s._v(" 2.引入")]),s._v(" "),a("p",[a("code",[s._v("inject")]),s._v("在"),a("code",[s._v("\\source\\_data")]),s._v("的"),a("code",[s._v("butterfly.yml")]),s._v("中：")]),s._v(" "),a("p",[s._v("（如果没有，可以创建一个_data文件夹，将"),a("code",[s._v("\\themes\\butterfly")]),s._v("中的"),a("code",[s._v("_config.yml")]),s._v("复制过去，重命名为"),a("code",[s._v("butterfly.yml")]),s._v("）")]),s._v(" "),a("p",[s._v("按以下方式引入"),a("code",[s._v("css文件")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[s._v('<link rel="stylesheet" href="/css/mycss.css"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210207003216.png",alt:"2"}}),s._v(" "),a("h2",{attrs:{id:"修改透明度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改透明度"}},[s._v("#")]),s._v(" 修改透明度")]),s._v(" "),a("p",[s._v("将以下代码复制到你所创建的"),a("code",[s._v("css文件")]),s._v(",引入即可。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 文章页背景 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".layout_post>#post")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 以下代表透明度为0.5 可以自行修改*/")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgba")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(".5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 所有页面背景 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#aside_content .card-widget, #recent-posts>.recent-post-item, .layout_page>div:first-child:not(.recent-posts), .layout_post>#page, .layout_post>#post, .read-mode .layout_post>#post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 以下代表透明度为0.5 */")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgba")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(".5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"_1-透明度为0-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-透明度为0-1"}},[s._v("#")]),s._v(" 1.透明度为0.1")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".layout_post>#post")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgba")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(".1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210207003233.png",alt:"3"}}),s._v(" "),a("h3",{attrs:{id:"_2-透明度为0-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-透明度为0-5"}},[s._v("#")]),s._v(" 2.透明度为0.5")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".layout_post>#post")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgba")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(".5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210207003306.png",alt:"4"}}),s._v(" "),a("h3",{attrs:{id:"_3-0-全透明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-全透明"}},[s._v("#")]),s._v(" 3.  0  全透明")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".layout_post>#post")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgba")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210207003316.png",alt:"5"}}),s._v(" "),a("h2",{attrs:{id:"更换博客背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更换博客背景"}},[s._v("#")]),s._v(" 更换博客背景")]),s._v(" "),a("h3",{attrs:{id:"_1-背景div"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景div"}},[s._v("#")]),s._v(" 1.背景div")]),s._v(" "),a("p",[a("code",[s._v("butterfly")]),s._v("主题的背景div的id为"),a("code",[s._v("web_bg")]),s._v("，因此我们只需要重新定义这个样式即可。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#web_bg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-图片背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-图片背景"}},[s._v("#")]),s._v(" 2.图片背景")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#web_bg")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 背景图像的地址（url括号里）  */")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 背景图像不重复 */")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" no-repeat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 背景图像大小 */")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cover"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_3-背景渐变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-背景渐变"}},[s._v("#")]),s._v(" 3.背景渐变")]),s._v(" "),a("h4",{attrs:{id:"_1-博客同款"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-博客同款"}},[s._v("#")]),s._v(" 1.博客同款")]),s._v(" "),a("p",[s._v("本博客"),a("code",[s._v("同款")]),s._v(",在创建的"),a("code",[s._v("css文件")]),s._v("中复制以下代码:")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#web_bg")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("linear-gradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("to top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" #fff1eb 0%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" #ace0f9 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"_2-动态渐变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-动态渐变"}},[s._v("#")]),s._v(" 2.动态渐变")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@keyframes")]),s._v(" gradientBG")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("0%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0% 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("50%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100% 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("100%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0% 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#web_bg")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("linear-gradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-45deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" #ee7752"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" #e73c7e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" #23a6d5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" #23d5ab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 400% 400%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("animation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gradientBG 15s ease infinite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h4",{attrs:{id:"_3-紫蓝色渐变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-紫蓝色渐变"}},[s._v("#")]),s._v(" 3.紫蓝色渐变")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#web_bg")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("linear-gradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("to right bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 240"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("92"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 159"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 247"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 40%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("211"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 34"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 80%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"_4-图片渐变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-图片渐变"}},[s._v("#")]),s._v(" 4.图片渐变")]),s._v(" "),a("p",[s._v("第二个"),a("code",[s._v("url")]),s._v("中是"),a("code",[s._v("图片地址")]),s._v("，可以"),a("code",[s._v("自行修改")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#web_bg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string url"}},[s._v('"https://ae01.alicdn.com/kf/H18a4b998752a4ae68b8e85d432a5aef0l.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("linear-gradient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("60deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgba")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 165"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 150"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 0.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 5%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgba")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 228"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 0.35"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string url"}},[s._v('"https://upimage.alexhchu.com/2020/10/19/34446d0d37dde.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"_5-自行选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-自行选择"}},[s._v("#")]),s._v(" 5.自行选择")]),s._v(" "),a("p",[s._v("大家可以选择上述渐变，当然也可以"),a("code",[s._v("自行选择")]),s._v("：")]),s._v(" "),a("p",[s._v("以下是两款"),a("code",[s._v("渐变色")]),s._v("网站：")]),s._v(" "),a("p",[s._v("https://webgradients.com/")]),s._v(" "),a("p",[s._v("https://uigradients.com/#EveningNight")]),s._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210207003342.png",alt:"6"}}),s._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210207003346.png",alt:"7"}}),s._v(" "),a("p",[s._v("将复制的"),a("code",[s._v("css代码")]),s._v("放入"),a("code",[s._v("css文件")]),s._v("中即可。")]),s._v(" "),a("p",[s._v("（注：复制的"),a("code",[s._v("css代码")]),s._v("需要放在"),a("code",[s._v("#web_bg{}")]),s._v("中）")]),s._v(" "),a("h2",{attrs:{id:"背景不生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景不生效"}},[s._v("#")]),s._v(" 背景不生效")]),s._v(" "),a("p",[s._v("1.确保你能成功引入这个"),a("code",[s._v("css")])]),s._v(" "),a("p",[s._v("2.请尝试"),a("code",[s._v("关闭js动态背景")]),s._v("后再次尝试")]),s._v(" "),a("p",[s._v("3.将"),a("code",[s._v("butterfly.yml")]),s._v("的"),a("code",[s._v("background")]),s._v("改为"),a("code",[s._v('"#efefef"')])]),s._v(" "),a("p",[s._v("4.确保你写的"),a("code",[s._v("内容正确")]),s._v("且"),a("code",[s._v("符合css的语法规则")])])])}),[],!1,null,null,null);t.default=e.exports}}]);