(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{471:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"redis发布订阅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis发布订阅"}},[s._v("#")]),s._v(" Redis发布订阅")]),s._v(" "),a("h2",{attrs:{id:"什么是发布订阅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是发布订阅"}},[s._v("#")]),s._v(" 什么是发布订阅")]),s._v(" "),a("p",[s._v("所谓发布订阅，就是 "),a("code",[s._v("消息发布者发布消息")]),s._v(" 及 "),a("code",[s._v("消息订阅者接收消息")]),s._v(" ，二者通过某种媒介关联起来。")]),s._v(" "),a("p",[s._v("这类似以前的『订报』，当我们订阅了某种报纸后（比如财经报），每当报纸有新的期刊出版后，就会有邮递员给我们送过来。即，只有定了这种报纸才会收到出版社发布的这种新报纸。")]),s._v(" "),a("h2",{attrs:{id:"发布订阅解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅解析"}},[s._v("#")]),s._v(" 发布订阅解析")]),s._v(" "),a("p",[s._v("Redis发布订阅（pub/sub）是一种 "),a("code",[s._v("消息通信模式")]),s._v(" ：发送者（pub）发送消息，订阅者（sub）接收消息。")]),s._v(" "),a("p",[s._v("Redis客户端可以订阅任意数量的频道。")]),s._v(" "),a("p",[s._v("订阅/发布消息图：")]),s._v(" "),a("blockquote",[a("p",[s._v("图中可以看出，所需：")]),s._v(" "),a("ol",[a("li",[s._v("消息发送者   、 2. 频道    、  3. 消息订阅者")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210426154148.png",alt:"1"}})]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("发布和订阅机制")])]),s._v(" "),a("p",[s._v("当一个客户端通过 "),a("code",[s._v("PUBLISH")]),s._v(" 命令向订阅者发送信息的时候，我们称这个客户端为"),a("code",[s._v("发布者(publisher)")])]),s._v(" "),a("p",[s._v("而当一个客户端使用 "),a("code",[s._v("SUBSCRIBE")]),s._v(" 或者 "),a("code",[s._v("PSUBSCRIBE")]),s._v(" 命令接收信息的时候，我们称这个客户端为 "),a("code",[s._v("订阅者(subscriber)")])]),s._v(" "),a("p",[s._v("为了解耦 发布者(publisher) 和 订阅者(subscriber) 之间的关系，Redis 使用了 "),a("code",[s._v("channel (频道)")]),s._v(" 作为两者的中介—— 发布者将信息直接发布给 channel ，而 channel 负责将信息发送给适当的订阅者，"),a("strong",[s._v("发布者和订阅者之间没有相互关系，也不知道对方的存在")])])]),s._v(" "),a("p",[s._v("频道 "),a("code",[s._v("channel1")]),s._v(" ，以及订阅这个频道的三个客户端----"),a("code",[s._v("client2")]),s._v("、"),a("code",[s._v("client5")]),s._v(" 和 "),a("code",[s._v("client1")]),s._v(" 之间的关系：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210426161539.png",alt:"2"}})]),s._v(" "),a("p",[s._v("当有新消息通过 "),a("code",[s._v("PUBLISH")]),s._v(" 命令发送给频道 "),a("code",[s._v("channel1")]),s._v(" 时，这个消息就会被发送给订阅它的三个客户端：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210426161647.png",alt:"3"}})]),s._v(" "),a("h2",{attrs:{id:"redis-发布订阅命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-发布订阅命令"}},[s._v("#")]),s._v(" Redis 发布订阅命令")]),s._v(" "),a("p",[s._v("下表列出了 redis 发布订阅常用命令：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210426192940.png",alt:"4"}})]),s._v(" "),a("blockquote",[a("p",[s._v("测试")])]),s._v(" "),a("ul",[a("li",[s._v("订阅端：进行订阅")]),s._v(" "),a("li",[s._v("发送端：发送信息")]),s._v(" "),a("li",[s._v("查看是否收到")])]),s._v(" "),a("p",[a("strong",[s._v("订阅端")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" SUBSCRIBE MoYu     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#订阅MoYu，等待发送方发送信息")]),s._v("\nReading messages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("press Ctrl-C to quit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"subscribe"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MoYu"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("发送端")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" PUBLISH MoYu "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#发送test")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" PUBLISH MoYu "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test1"')]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#发送test1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("因为发送端向被订阅的频道发送了信息，这时候订阅端立刻会收到信息")]),s._v(" "),a("p",[a("strong",[s._v("订阅端")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" SUBSCRIBE MoYu\nReading messages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("press Ctrl-C to quit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"subscribe"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MoYu"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"message"')]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MoYu"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#收到的信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"message"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MoYu"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test1"')]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#收到的信息")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"发送订阅原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发送订阅原理"}},[s._v("#")]),s._v(" 发送订阅原理")]),s._v(" "),a("p",[s._v("Redis是使用C实现的，通过分析Redis源码里的pubsub.c文件，了解发布和订阅机制的底层实现，籍此加深对Redis的理解。")]),s._v(" "),a("p",[s._v("Redis通过PUBLISH，SUBSCRIBE和PSUBSCRIBE等命令实现发布和订阅功能。")]),s._v(" "),a("p",[s._v("通过SUBSCRIBE命令订阅某频道后，redis-server里维护了一个字典，字典的键就是一个个channel，而字典的值则是一个链表，链表中保存了所有订阅这个channel的客户端。SUBSCRIBE命令的关键，就是将客户端添加到给定channel的订阅链表中。")]),s._v(" "),a("p",[s._v("通过PUBLISH命令向订阅者发送消息，redis-server会使用给定的频道作为键，在它所维护的channel字典中查找记录了订阅这个频道的所有客户端的链表，遍历这个链表，将消息发布给所有订阅者。")]),s._v(" "),a("p",[s._v("Pub/Sub从字面上理解就是发布（Publish）与订阅（Subscribe），在Redis中，你可以设定对某一个key值进行消息发布及消息订阅，当一个key值上进行了消息发布后，所有订阅它的客户端都会收到相应的消息。这一功能最明显的用法就是用作实时消息系统，比如普通的即时聊天，群聊等功能。")])])}),[],!1,null,null,null);t.default=e.exports}}]);