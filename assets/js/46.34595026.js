(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{466:function(s,a,e){"use strict";e.r(a);var t=e(15),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"redis入门命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis入门命令"}},[s._v("#")]),s._v(" Redis入门命令")]),s._v(" "),e("h2",{attrs:{id:"redis基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis基础"}},[s._v("#")]),s._v(" Redis基础")]),s._v(" "),e("blockquote",[e("p",[s._v("从配置文件中可以看出：")]),s._v(" "),e("p",[s._v("Redis有 "),e("code",[s._v("16")]),s._v(" 个数据库，默认使用的是第 "),e("code",[s._v("0")]),s._v(" 个")])]),s._v(" "),e("h4",{attrs:{id:"切换数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#切换数据库"}},[s._v("#")]),s._v(" "),e("strong",[s._v("切换数据库")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" x   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换数据库 0-15")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"查看数据库容量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看数据库容量"}},[s._v("#")]),s._v(" "),e("strong",[s._v("查看数据库容量")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("DBSIZE \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210420173205.png",alt:"1"}})]),s._v(" "),e("blockquote",[e("p",[s._v("数据库之间存取的数据一般是不连通的")]),s._v(" "),e("p",[s._v("如果你在 3 号数据库存了信息 ，不会影响其他数据库的 "),e("code",[s._v("DBSIZE")])])]),s._v(" "),e("h4",{attrs:{id:"存取数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存取数据"}},[s._v("#")]),s._v(" "),e("strong",[s._v("存取数据")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("ser key value   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 存入 k:v")]),s._v("\n\nget key         "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 得到 对应k的v")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h4",{attrs:{id:"查看所有key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看所有key"}},[s._v("#")]),s._v(" "),e("strong",[s._v("查看所有key")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("keys *          \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210420173907.png",alt:"2"}})]),s._v(" "),e("h4",{attrs:{id:"清空当前数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清空当前数据库"}},[s._v("#")]),s._v(" "),e("strong",[s._v("清空当前数据库")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("flushdb\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210420174225.png",alt:"3"}})]),s._v(" "),e("h4",{attrs:{id:"清空所有数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清空所有数据库"}},[s._v("#")]),s._v(" "),e("strong",[s._v("清空所有数据库")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("FLUSHALL\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",[e("li",[s._v("在 "),e("code",[s._v("0")]),s._v(" 号数据库中存入数据，查看容量")]),s._v(" "),e("li",[s._v("在 "),e("code",[s._v("3")]),s._v(" 号数据库中存入数据，查看容量")]),s._v(" "),e("li",[s._v("使用该语句")]),s._v(" "),e("li",[s._v("查看两个数据库中的容量，都为 0")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210420174654.png",alt:"4"}})]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("Redis是单线程的")])])]),s._v(" "),e("p",[s._v("官方表示，Redis是基于"),e("code",[s._v("内存")]),s._v("操作")]),s._v(" "),e("p",[s._v("CPU不是Redis性能瓶颈，Redis的瓶颈是根据机器的"),e("code",[s._v("内存")]),s._v("和"),e("code",[s._v("网络带宽")]),s._v("，既然可以使用单线程来实现，就使用单线程了")]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("Redis为什么单线程还这么快")])])]),s._v(" "),e("p",[s._v("误区1：高性能的服务器不一定是多线程的\n误区2：多线程中CPU上下文会切换，不一定比单线程效率高\n先去CPU>内存>硬盘的速度要有所了解！")]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("核心")])])]),s._v(" "),e("p",[s._v("redis是将所有的数据全部放在"),e("code",[s._v("内存")]),s._v("中的，所以说使用单线程去操作效率就是最高的")]),s._v(" "),e("p",[s._v("在多线程中，CPU上下文会切换，这是一个耗时的操作，对于内存系统来说，如果没有上下文切换效率就是最高的，多次读写都是在一个CPU上的，在内存情况下，这个就是最佳的方案")]),s._v(" "),e("h2",{attrs:{id:"redis基本命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis基本命令"}},[s._v("#")]),s._v(" Redis基本命令")]),s._v(" "),e("p",[s._v("可以在官网查看命令：http://www.redis.cn/commands.html")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210420181210.png",alt:"9"}})]),s._v(" "),e("h4",{attrs:{id:"判断是否存在"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#判断是否存在"}},[s._v("#")]),s._v(" "),e("strong",[s._v("判断是否存在")])]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("存在返回 1 ，不存在返回 0")])])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("EXISTS XXX\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("我提前存入了 "),e("code",[s._v("K:V")]),s._v(" 和 "),e("code",[s._v("K1:V1")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210420175621.png",alt:"5"}})]),s._v(" "),e("h4",{attrs:{id:"移动数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移动数据"}},[s._v("#")]),s._v(" "),e("strong",[s._v("移动数据")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("move xxx 数据库号\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("例子为：将上面的 "),e("code",[s._v("K1:V1")]),s._v(" 移动到 "),e("code",[s._v("1")]),s._v(" 号数据库")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210420175907.png",alt:"6"}})]),s._v(" "),e("h4",{attrs:{id:"设置过期时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置过期时间"}},[s._v("#")]),s._v(" "),e("strong",[s._v("设置过期时间")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("EXPIRE XXX 时间"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"查看过期时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看过期时间"}},[s._v("#")]),s._v(" "),e("strong",[s._v("查看过期时间")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("ttl xxx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210420180249.png",alt:"7"}})]),s._v(" "),e("h4",{attrs:{id:"查看对应类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看对应类型"}},[s._v("#")]),s._v(" "),e("strong",[s._v("查看对应类型")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" xxx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210420180914.png",alt:"8"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);