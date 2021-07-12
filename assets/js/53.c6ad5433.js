(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{473:function(s,t,a){"use strict";a.r(t);var e=a(15),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"redis主从复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis主从复制"}},[s._v("#")]),s._v(" Redis主从复制")]),s._v(" "),a("h2",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),a("p",[s._v("主从复制，"),a("strong",[s._v("是指将一台Redis服务器的数据，复制到其他的Redis服务器")]),s._v("。前者称为"),a("code",[s._v("主节点")]),s._v("（master/leader），后者称为"),a("code",[s._v("从节点")]),s._v("（slave/follower）；数据的复制是"),a("code",[s._v("单向")]),s._v("的，只能由主节点到从节点。==Master以写为主，Slave以读为主==")]),s._v(" "),a("blockquote",[a("p",[s._v("默认情况下，每台Redis服务器都是主节点；'")]),s._v(" "),a("p",[s._v("'且一个主节点可以有多个从节点（或没有从节点），但一个从节点只能有一个主节点主从复制的作用主要包括：")])]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("数据冗余")]),s._v("：主从复制实现了数据的热备份，是持久化之外的一种数据冗余方式。")]),s._v(" "),a("li",[a("strong",[s._v("故障恢复")]),s._v("：当主节点出现问题时，可以由从节点提供服务，实现快速的故障恢复；实际上是一种服务的冗余。")]),s._v(" "),a("li",[a("strong",[s._v("负载均衡")]),s._v("：在主从复制的基础上，配合读写分离，可以由主节点提供写服务，由从节点提供读服务（即写Redis数据时应用连接主节点，读Redis数据时应用连接从节点），分担服务器负载；尤其是在写少读多的场景下，通过多个从节点分担读负载，可以大大提高Redis服务器的并发量。")]),s._v(" "),a("li",[a("strong",[s._v("高可用基石")]),s._v("：除了上述作用以外，主从复制还是哨兵和集群能够实施的基础，因此说主从复制是Redis高可用的基础。")])]),s._v(" "),a("p",[s._v("一般来说，要将Redis运用于工程项目中，"),a("strong",[s._v("只使用一台Redis是万万不能的")]),s._v("，原因如下：")]),s._v(" "),a("ol",[a("li",[s._v("从结构上，单个Redis服务器会发生单点故障，并且一台服务器需要处理所有的请求负载，压力较大；")]),s._v(" "),a("li",[s._v("从容量上，单个Redis服务器内存容量有限，就算一台Redis服务器内存容量为256G，也不能将所有内存用作Redis存储内存一般来说，单台Redis最大使用内存不应该超过20G.")])]),s._v(" "),a("p",[s._v("对于这种场景，我们可以使用如下这种架构：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210426225256.png",alt:"5"}})]),s._v(" "),a("p",[s._v("主从复制，读写分离，80%的情况下都是在进行读操作，减缓服务器的压力，架构中经常使用 "),a("strong",[s._v("一主二从")])]),s._v(" "),a("h2",{attrs:{id:"环境配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境配置"}},[s._v("#")]),s._v(" 环境配置")]),s._v(" "),a("h3",{attrs:{id:"查看当前库信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看当前库信息"}},[s._v("#")]),s._v(" 查看当前库信息")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" info replication    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看当前库信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Replication")]),s._v("\nrole:master       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#角色 master")]),s._v("\nconnected_slaves:0   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#当前没有从机")]),s._v("\nmaster_replid:61514856c42d15d54f537eafadc2597c453f24b9\nmaster_replid2:0000000000000000000000000000000000000000\nmaster_repl_offset:0\nsecond_repl_offset:-1\nrepl_backlog_active:0\nrepl_backlog_size:1048576\nrepl_backlog_first_byte_offset:0\nrepl_backlog_histlen:0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"开始配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始配置"}},[s._v("#")]),s._v(" 开始配置")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("只配置从库，不用配置主库")])])]),s._v(" "),a("p",[a("strong",[s._v("先将配置文件复制，更改端口号")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\nredis.conf\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp redis.conf redis79.conf    #进行复制")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp redis.conf redis80.conf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp redis.conf redis81.conf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\nredis79.conf  redis80.conf  redis81.conf  redis.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[a("strong",[s._v("更改端口号")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" redis79.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("需要修改的地方：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("logfile "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6379.log"')]),s._v("    \n\ndbfilename dump6379.rdb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("对于 剩余两个文件，需要修改地方为：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6380")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6381")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#分别改为6380、6381")]),s._v("\n\npidfile /var/run/redis_6380/6381.pid   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#同上")]),s._v("\n\nlogfile "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6380.log/6381.log"')]),s._v("     \n\ndbfilename dump6380/6381.rdb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[a("strong",[s._v("用不同的conf文件启动redis")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("redis-server config/redis79/80/81.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210426232355.png",alt:"6"}})]),s._v(" "),a("p",[s._v("图中可以看出，三个redis服务器已经开启了")]),s._v(" "),a("h2",{attrs:{id:"一主两从"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一主两从"}},[s._v("#")]),s._v(" 一主两从")]),s._v(" "),a("p",[s._v("==默认情况下，每一个redis服务器都是主机== , 一般只需要配置从机")]),s._v(" "),a("p",[s._v("一主 ( 79 )  两从 ( 80、81 )")]),s._v(" "),a("p",[a("strong",[s._v("启动三个客户端")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("redis-cli -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("/80/81\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("认主机")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("SLAVEOF "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#认79为主机")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("在6379主机查看信息")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210426234212.png",alt:"7"}})]),s._v(" "),a("p",[s._v("图中，可以看出主机已经有了 80、81 两个从机")]),s._v(" "),a("h3",{attrs:{id:"解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析"}},[s._v("#")]),s._v(" 解析")]),s._v(" "),a("blockquote",[a("p",[s._v("**主机可以写，从机不能写只能读 **")]),s._v(" "),a("p",[a("strong",[s._v("主机中的所有信息和数据，都会自动被从机保存")])])]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("测试一")]),s._v("：主机数据，从机同步；从机只可读、不可写")])]),s._v(" "),a("p",[a("strong",[s._v("在主机中进行存入数据")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210426235643.png",alt:"8"}})]),s._v(" "),a("p",[a("strong",[s._v("在从机中，可以直接获取数据，但是在从机中无法保存数据：")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210426235752.png",alt:"9"}})]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("测试二")]),s._v("：主机突然断掉，从机还是从机 ； 主机重新连接，依旧获得从机")])]),s._v(" "),a("p",[a("strong",[s._v("主机直接关闭")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210427000524.png",alt:"10"}})]),s._v(" "),a("p",[a("strong",[s._v("查看从机状态")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210427000517.png",alt:"11"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210427000607.png",alt:"12"}})]),s._v(" "),a("p",[s._v("上图可以看出，主机突然断掉，在这种情况下，"),a("strong",[s._v("从机依旧还是从机，并且保持着不可写的状态")]),s._v("。")]),s._v(" "),a("p",[a("strong",[s._v("恢复主机，并存入数据")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210427000815.png",alt:"13"}})]),s._v(" "),a("p",[a("strong",[s._v("测试从机是否可以获取主机数据")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210427000855.png",alt:"14"}})]),s._v(" "),a("blockquote",[a("p",[s._v("**测试三：**从机重启，恢复成主机 ； 重新成为从机，可以获取主机中已有的数据")])]),s._v(" "),a("p",[a("strong",[s._v("从机重启，会成为主机")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210427001243.png",alt:"15"}})]),s._v(" "),a("p",[a("strong",[s._v("重新成为从机 ，主机数据直接可以获取")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210427001349.png",alt:"16"}})]),s._v(" "),a("h3",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),a("p",[s._v("Slave启动成功连接到master后会发送一个"),a("code",[s._v("sync同步命令")]),s._v("，Master接到命令，启动后台的存盘进程，同时收集所有接收到的用于修改数据集命令，在后台进程执行完毕之后，master将传送整个数据文件到slave，并完成一次"),a("code",[s._v("完全同步")]),s._v("。")]),s._v(" "),a("p",[a("strong",[s._v("全量复制")]),s._v("：而slave服务在接收到数据库文件数据后，将其存盘并加载到内存中   -----\x3e "),a("strong",[s._v("即为获取主机中已经有的全部数据")])]),s._v(" "),a("p",[a("strong",[s._v("增量复制")]),s._v("：Master继续将新的所有收集到的修改命令依次传给slave，完成同步  ------\x3e"),a("strong",[s._v("即为每次主机新写入的数据，从机也会对应获得")])]),s._v(" "),a("p",[s._v("但是只要是重新连接master，"),a("strong",[s._v("一次完全同步（全量复制）将被自动执行")]),s._v("，我们的数据一定可以在从机中看到")]),s._v(" "),a("h3",{attrs:{id:"层层关联"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#层层关联"}},[s._v("#")]),s._v(" 层层关联")]),s._v(" "),a("p",[s._v("我们如果让 79 成为 80 的主机  、 而 80 成为 81 的主机")]),s._v(" "),a("p",[s._v("即80运行命令：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("SLAVEOF "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("81 运行命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("SLAVEOF "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6380")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("这样三个端口号就关联起来了")])]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("怎么让一台从机  ， 变成主机")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("SLAVEOF no one        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#摆脱从机身份")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("在上面的操作中，如果任何一个主机断了，他的从机还是从机，只能等待主机重新连接，不然就什么都做不了")]),s._v(" "),a("p",[s._v("这显然是不可以的，所以需要实现，如果主机消失，可以自动在从机中找一个新的主机，也就是 "),a("strong",[s._v("哨兵模式")])])]),s._v(" "),a("h2",{attrs:{id:"哨兵模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哨兵模式"}},[s._v("#")]),s._v(" 哨兵模式")]),s._v(" "),a("h3",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),a("p",[s._v("主从切换技术的方法是：当主服务器宕机后，需要手动把一台从服务器切换为主服务器，这就需要人工干预，费事费力，还会造成一段时间内服务不可用。这不是一种推荐的方式，更多时候，我们优先考虑"),a("code",[s._v("哨兵模式")]),s._v("。Redis从2.8开始正式提供了 "),a("code",[s._v("Sentinel（哨兵）")]),s._v("架构来解决这个问题。")]),s._v(" "),a("p",[s._v("自动选择一个新主机，能够后台监控主机是否故障，如果故障了根据投票数 "),a("strong",[s._v("自动将从库转换为主库")])]),s._v(" "),a("p",[s._v("哨兵模式是一种特殊的模式，首先Redis提供了哨兵的命令，哨兵是一个独立的进程，作为进程，它会独立运行。其原理是："),a("strong",[s._v("哨兵通过发送命令，等待Redis服务器响应，从而监控运行的多个Redis实例。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210427144205.png",alt:"13"}})]),s._v(" "),a("blockquote",[a("p",[s._v("哨兵的作用：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("通过发送命令，让Redis服务器返回监控其运行状态，包括主服务器和从服务器。")])]),s._v(" "),a("li",[a("p",[s._v("当哨兵监测到master宕机，会自动将slave切换成master，然后通过发布订阅模式通知其他的从服务器，修改配置文件，让它们切换主机。")])])])]),s._v(" "),a("p",[s._v("但是只有一个哨兵的话，肯定是不安全的，所以可以使用多个哨兵进行监控。也就是"),a("code",[s._v("多哨兵模式")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210427144407.png",alt:"14"}})]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("工作原理")])]),s._v(" "),a("p",[s._v("图中可以看出，每个哨兵都监控服务器并且哨兵之间也进行相互监控。")]),s._v(" "),a("p",[s._v("如果主服务器不可用， 但仅仅是哨兵1 检测到主服务器不可用时，并不会立刻进行选出新主机的行为，这只是哨兵1主观认为主机不可用，被称为 "),a("strong",[s._v("主观下线")]),s._v("；而是需要等到其他的哨兵也检测到主服务器不可用，但数量达到一定值时，由其中一个哨兵发起投票，进行 failover(故障转移) 操作。成功之后，通过发布订阅模式，让各个哨兵将自己监控的从服务器切换为主机，过程成为 "),a("strong",[s._v("客观下线")])])]),s._v(" "),a("h3",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),a("blockquote",[a("p",[s._v("首先最低需要有 4 台机器，一主二从、一台哨兵")])]),s._v(" "),a("h4",{attrs:{id:"_1-哨兵配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-哨兵配置文件"}},[s._v("#")]),s._v(" 1.哨兵配置文件")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("config")]),s._v(" 文件夹下，创建新文件 "),a("code",[s._v("sentinel.conf")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" sentinel.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("内容为：")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#sentinel monitor 被监控的名称 host port  1")]),s._v("\nsentinel monitor myredis "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[a("strong",[s._v("最后 "),a("code",[s._v("1")]),s._v(" 代表，如果主机挂了，进行哨兵投票，让从机选出主机")])])]),s._v(" "),a("h4",{attrs:{id:"_2-启动哨兵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动哨兵"}},[s._v("#")]),s._v(" 2.启动哨兵")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("redis-sentinel config/sentinel.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210427150247.png",alt:"15"}})]),s._v(" "),a("h4",{attrs:{id:"_3-测试主机断开"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-测试主机断开"}},[s._v("#")]),s._v(" 3.测试主机断开")]),s._v(" "),a("blockquote",[a("p",[s._v("现在的情况是，79主机，80、81为79的从机，一台哨兵监控他们")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210427150524.png",alt:"16"}})]),s._v(" "),a("p",[s._v("这时候，等待一会，哨兵检测到主机已经断开，进行投票，我这里是81成为了新主机 (可以查看最后一行)")]),s._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210427150647.png",alt:"17"}}),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210427150714.png",alt:"18"}})]),s._v(" "),a("h4",{attrs:{id:"_4-测试主机恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-测试主机恢复"}},[s._v("#")]),s._v(" 4.测试主机恢复")]),s._v(" "),a("p",[s._v("主机恢复连接，哨兵还是会进行检测，但是并不会还是成为主机，而是成为新主机的从机")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210427151019.png",alt:"19"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210427151023.png",alt:"20"}})]),s._v(" "),a("h3",{attrs:{id:"优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[s._v("#")]),s._v(" 优缺点")]),s._v(" "),a("p",[a("strong",[s._v("优点：")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("哨兵集群，基于主从复制模式，所有的主从配置优点，它全有")])]),s._v(" "),a("li",[a("p",[s._v("主从可以切换，故障可以转移，系统的可用性就会更好3、哨兵模式就是主从模式的升级，手动到自动，更加健壮")])])]),s._v(" "),a("p",[a("strong",[s._v("缺点：")])]),s._v(" "),a("ol",[a("li",[s._v("Redis不好啊在线扩容的，集群容量一旦到达上限，在线扩容就十分麻烦")]),s._v(" "),a("li",[s._v("实现哨兵模式的配置其实是很麻烦的，里面有很多选择")])])])}),[],!1,null,null,null);t.default=r.exports}}]);