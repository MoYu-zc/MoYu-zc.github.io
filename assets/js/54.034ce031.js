(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{476:function(t,_,a){"use strict";a.r(_);var s=a(15),r=Object(s.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"redis缓存穿透和雪崩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis缓存穿透和雪崩"}},[t._v("#")]),t._v(" Redis缓存穿透和雪崩")]),t._v(" "),a("h2",{attrs:{id:"缓存穿透"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透"}},[t._v("#")]),t._v(" 缓存穿透")]),t._v(" "),a("h3",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("p",[a("strong",[t._v("用户如果想查询一个数据，会先在redis内存数据库中进行查询，redis中没有，再向持久层数据库中查询。")])]),t._v(" "),a("p",[t._v("缓存穿透的概念很简单，"),a("strong",[t._v("用户想要查询一个数据")]),t._v("，发现redis内存数据库没有，也就是"),a("strong",[t._v("缓存没有命中")]),t._v("，于是向持久层数据库查询。发现也没有，于是"),a("strong",[t._v("本次查询失败")]),t._v("。当"),a("strong",[t._v("用户很多")]),t._v("的时候，缓存都没有命中，于是都去请求了持久层数据库。这会给持久层数据库造成很大的压力，甚至直接导致崩溃。这时候就相当于出现了"),a("code",[t._v("缓存穿透")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),a("h4",{attrs:{id:"_1-布隆过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-布隆过滤器"}},[t._v("#")]),t._v(" 1.布隆过滤器")]),t._v(" "),a("blockquote",[a("p",[t._v("布隆过滤器是一种数据结构，对所有可能查询的参数以hash形式存储，在控制层先进行"),a("code",[t._v("校验")]),t._v(" ，"),a("strong",[t._v("不符合则丢弃")]),t._v("，从而避免了对底层存储系统的查询压力；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210427152652.png",alt:"1"}})]),t._v(" "),a("h4",{attrs:{id:"_2-缓存空对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-缓存空对象"}},[t._v("#")]),t._v(" 2.缓存空对象")]),t._v(" "),a("blockquote",[a("p",[t._v("当存储层不命中后，即使返回的"),a("code",[t._v("空对象")]),t._v("也将其缓存起来，同时会设置一个"),a("code",[t._v("过期时间")]),t._v("，之后再访问这个数据将会从缓存中获取，保护了后端数据源；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210427152802.png",alt:"2"}})]),t._v(" "),a("p",[a("strong",[t._v("但是这种方法会存在两个问题：")])]),t._v(" "),a("ol",[a("li",[t._v("如果空值能够被缓存起来，这就意味着缓存需要更多的空间存储更多的键，因为这当中可能会有很多的空值的键；")]),t._v(" "),a("li",[t._v("即使对空值设置了过期时间，还是会存在缓存层和存储层的数据会有一段时间窗口的不一致，这对于需要保持一致性的业务会有影响。")])]),t._v(" "),a("h2",{attrs:{id:"缓存击穿"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿"}},[t._v("#")]),t._v(" 缓存击穿")]),t._v(" "),a("h3",{attrs:{id:"概念-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念-2"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("p",[t._v("这里需要注意和"),a("code",[t._v("缓存穿透")]),t._v("的区别:")]),t._v(" "),a("p",[t._v("缓存击穿，是指一个key非常热点，大并发集中对这一个点进行访问，当这个key在失效的瞬间，持续的大并发就穿破缓存，直接请求数据库，就像在一个屏障上凿开了一个洞。由于缓存过期，会同时访问数据库来查询最新数据，并且回写缓存，会导使数据库瞬间压力过大。")]),t._v(" "),a("h3",{attrs:{id:"解决方案-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案-2"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),a("h4",{attrs:{id:"_1-设置热点数据永不过期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-设置热点数据永不过期"}},[t._v("#")]),t._v(" 1.设置热点数据永不过期")]),t._v(" "),a("p",[t._v("从缓存层面来看，没有设置过期时间，所以不会出现热点key过期后产生的问题。")]),t._v(" "),a("h4",{attrs:{id:"_2-加互斥锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-加互斥锁"}},[t._v("#")]),t._v(" 2.加互斥锁")]),t._v(" "),a("p",[t._v("分布式锁：使用分布式锁，保证对于每个key"),a("strong",[t._v("同时只有一个线程")]),t._v("去查询后端服务，其他线程没有获得分布式锁的权限，因此只需要等待即可。这种方式将高并发的压力转移到了分布式锁，因此对分布式锁的考验很大。")]),t._v(" "),a("h2",{attrs:{id:"缓存雪崩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩"}},[t._v("#")]),t._v(" 缓存雪崩")]),t._v(" "),a("h3",{attrs:{id:"概念-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念-3"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("p",[t._v("缓存雪崩，是指在某一个时间段，缓存集中过期失效。")]),t._v(" "),a("p",[t._v("产生雪崩的原因之一，有一部分东西在redis中"),a("strong",[t._v("集中过期")]),t._v("了，而对这些东西的访问查询，都落到了数据库上，对于数据库而言，就会产生"),a("strong",[t._v("周期性的压力波峰")]),t._v("。于是所有的请求都会达到存储层，"),a("strong",[t._v("存储层的调用量会暴增，造成存储层也会挂掉的情况")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210427160257.png",alt:"3"}})]),t._v(" "),a("p",[t._v("其实集中过期，倒不是非常致命，比较致命的缓存雪崩，是"),a("strong",[t._v("缓存服务器某个节点容机或断网")]),t._v("。")]),t._v(" "),a("p",[t._v("因为"),a("strong",[t._v("自然形成的缓存雪崩")]),t._v("，一定是在某个时间段集中创建缓存，这个时候，数据库也是可以顶住压力的。无非就是对数据库产生周期性的压力而已。")]),t._v(" "),a("p",[t._v("而"),a("strong",[t._v("缓存服务节点的宕机")]),t._v("，对数据库服务器造成的压力是不可预知的，很有可能瞬间就把数据库压垮。")]),t._v(" "),a("h3",{attrs:{id:"解决方案-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案-3"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),a("h4",{attrs:{id:"_1-redis高可用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-redis高可用"}},[t._v("#")]),t._v(" 1.redis高可用")]),t._v(" "),a("p",[t._v("这个思想的含义是，既然redis有可能挂掉，那可以"),a("strong",[t._v("多增设几台redis，这样一台挂掉之后其他的还可以继续工作，其实就是搭建的集群")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"_2-限流降级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-限流降级"}},[t._v("#")]),t._v(" 2.限流降级")]),t._v(" "),a("p",[t._v("这个解决方案的思想是，在缓存失效后，通过"),a("strong",[t._v("加锁或者队列")]),t._v("来控制读数据库写缓存的线程数量。比如对某个key只允许一个线程查询数据和写缓存，其他线程等待。")]),t._v(" "),a("h4",{attrs:{id:"_3-数据预热"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据预热"}},[t._v("#")]),t._v(" 3.数据预热")]),t._v(" "),a("p",[t._v("数据加热的含义就是在正式部署之前，我先把可能的数据先"),a("strong",[t._v("预先访问一遍")]),t._v("，这样部分可能大量访问的数据就会加载到缓存中。在即将发生大并发访问前手动触发加载缓存不同的key，"),a("strong",[t._v("设置不同的过期时间")]),t._v("，让缓存失效的时间点尽量均匀。")])])}),[],!1,null,null,null);_.default=r.exports}}]);