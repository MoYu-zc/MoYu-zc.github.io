(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{500:function(_,v,t){"use strict";t.r(v);var r=t(15),a=Object(r.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"八股文-java基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八股文-java基础"}},[_._v("#")]),_._v(" 八股文 --- Java基础")]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("本篇是常见的Java基础八股文，后续我面试遇到会继续补充的。。。")])])]),_._v(" "),t("h5",{attrs:{id:"_1、java的8种基本类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、java的8种基本类型"}},[_._v("#")]),_._v(" 1、java的8种基本类型")]),_._v(" "),t("blockquote",[t("p",[_._v("布尔型 :      boolean")]),_._v(" "),t("p",[_._v("字符型 :      char")]),_._v(" "),t("p",[_._v("整数型 :      byte, short, int, long")]),_._v(" "),t("p",[_._v("浮点数型 :  float, double")])]),_._v(" "),t("h5",{attrs:{id:"_2、-装箱和拆箱"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、-装箱和拆箱"}},[_._v("#")]),_._v(" 2、 装箱和拆箱")]),_._v(" "),t("blockquote",[t("p",[_._v("自动装箱是 Java 编译器在"),t("code",[_._v("基本数据类型")]),_._v("和对应的"),t("code",[_._v("对象包装类型")]),_._v("之间做的一个转化")]),_._v(" "),t("p",[_._v("比如：把 int 转化成 Integer，double 转化成 Double 等等。反之就是自动拆箱。")]),_._v(" "),t("p",[_._v("原始类型: boolean，char，byte，short，int，long，float，double")]),_._v(" "),t("p",[_._v("封装类型：Boolean，Character，Byte，Short，Integer，Long，Float，Double")])]),_._v(" "),t("h5",{attrs:{id:"_3、string是基本数据类型吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、string是基本数据类型吗"}},[_._v("#")]),_._v(" 3、String是基本数据类型吗?")]),_._v(" "),t("blockquote",[t("p",[_._v("基本数据类型包括byte、short、int、char、long、float、double和boolean。")]),_._v(" "),t("p",[_._v("所以String不是基本数据类型。")])]),_._v(" "),t("h5",{attrs:{id:"_4、string类型可变吗？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、string类型可变吗？"}},[_._v("#")]),_._v(" 4、String类型可变吗？")]),_._v(" "),t("blockquote",[t("p",[_._v("不可变")]),_._v(" "),t("p",[_._v("String类声明为final类，不可被继承")]),_._v(" "),t("p",[_._v("String内部的属性都是私有的，并且没有提供可供修改操作的方法，所以String是不可变的")]),_._v(" "),t("p",[_._v("而对于字符串的操作，每次都是  new String()")])]),_._v(" "),t("h5",{attrs:{id:"_5、string-和-stringbuffer-和-stringbuilder的区别？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、string-和-stringbuffer-和-stringbuilder的区别？"}},[_._v("#")]),_._v(" 5、String 和 StringBuffer 和 StringBuilder的区别？")]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("String 字符串常量\nStringBuffer 字符串变量（线程安全）\nStringBuilder 字符串变量（非线程安全）")])]),_._v(" "),t("p",[_._v("String 是不可变的对象, 因此在每次对 String 类型进行改变的时候其实都等同于生成了一个新的 String 对象，然后将指针指向新的 String 对象，所以经常改变内容的字符串最好不要用 String")]),_._v(" "),t("p",[_._v("StringBuffer 对象会对本身进行操作，而不是生成新的对象，再改变对象引用。所以在一般情况下我们推荐使用 StringBuffer ，特别是字符串对象经常改变的情况下")]),_._v(" "),t("p",[_._v("StringBuilder是一个新增的可变的字符序列，不保证同步，被设计用作 StringBuffer 的一个简易替换，用在字符串缓冲区被"),t("strong",[_._v("单个线程")]),_._v("使用的时候")])]),_._v(" "),t("h5",{attrs:{id:"_6、-比较的是什么？-equals-方法是如何比较的？两者区别？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、-比较的是什么？-equals-方法是如何比较的？两者区别？"}},[_._v("#")]),_._v(" 6、==比较的是什么？ equals()方法是如何比较的？两者区别？")]),_._v(" "),t("blockquote",[t("p",[_._v("”==“ 两边如果是两个"),t("strong",[_._v("对象")]),_._v("基于"),t("strong",[_._v("内存引用")]),_._v("， 两边如果是"),t("strong",[_._v("基本类型")]),_._v("，就是比较"),t("strong",[_._v("数值")]),_._v("是否相等")]),_._v(" "),t("p",[_._v("”equals()“ 比较的是 "),t("strong",[_._v("对象的地址")]),_._v(" ， 可以进行重写")])]),_._v(" "),t("h5",{attrs:{id:"_7、-和-的区别？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、-和-的区别？"}},[_._v("#")]),_._v(" 7、&和&&的区别？")]),_._v(" "),t("blockquote",[t("p",[_._v("&运算符有两种用法：(1)按位与；(2)逻辑与。&&运算符是短路与运算。")]),_._v(" "),t("p",[_._v("二者都要求运算符左右两端的布尔值都是 true 整个表达式的值才是true")]),_._v(" "),t("p",[_._v("&&之所以称为短路运算是因为，如果&&左边的表达式的值是 false，右边的表达式会被直接短路掉，不会进行运算。")]),_._v(" "),t("p",[_._v("而对于 & ： 即使左边的表达式的值是 false ，右边还是会继续运算。")])]),_._v(" "),t("h5",{attrs:{id:"_8、什么是面向对象？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8、什么是面向对象？"}},[_._v("#")]),_._v(" 8、什么是面向对象？")]),_._v(" "),t("blockquote",[t("p",[_._v("简单点的例子来区分面向过程和面向对象")]),_._v(" "),t("p",[_._v("有一天你想吃一道菜，你有两个选择")]),_._v(" "),t("p",[_._v("1、自己买材料、菜、调料等等然后自己开火、洗菜、做饭，最后盛到盘子里。")]),_._v(" "),t("p",[_._v("2、去饭店，张开嘴：来一份xxxx！")]),_._v(" "),t("p",[_._v("这上面，1是面向过程，2是面向对象。")]),_._v(" "),t("p",[_._v("对于面向对象，1、你想吃菜了，你只负责提出想吃和去吃，餐馆才是负责做菜的，你不需要知道怎么做，"),t("strong",[_._v("降低了耦合性")]),_._v("；2、你如果突然想吃别的了，对于面向过程你需要重新出门买菜，而对于面向对象，你只需要让饭店给你换一下菜，"),t("strong",[_._v("提高了可维护性")]),_._v("。")]),_._v(" "),t("p",[t("strong",[_._v("面向过程是具体化的，流程化的，解决一个问题，你需要一步一步的分析，一步一步的实现。")])]),_._v(" "),t("p",[t("strong",[_._v("面向对象是模型化的，需要什么功能，可以进行封装，直接使用就可以了，不必去一步一步的实现，至于这个功能是如何实现的，不需要管，只需要使用")])]),_._v(" "),t("p",[t("strong",[_._v("面向过程")])]),_._v(" "),t("p",[_._v("优点：性能比面向对象好，因为类调用时需要实例化，开销比较大，比较消耗资源。\n缺点：不易维护、不易复用、不易扩展")]),_._v(" "),t("p",[t("strong",[_._v("面向对象")])]),_._v(" "),t("p",[_._v("优点：易维护、易复用、易扩展，可以设计出低耦合的系统，使系统 更加灵活、更加易于维护\n缺点：性能比面向过程差")])]),_._v(" "),t("h5",{attrs:{id:"_9、java的四个基本特性？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9、java的四个基本特性？"}},[_._v("#")]),_._v(" 9、Java的四个基本特性？")]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("封装")]),_._v("：就是把对象的属性和行为（数据）结合为一个独立的整体，并尽可能隐藏对象的内部实现细节，就是把不想告诉或者不该告诉别人的东西隐藏起来，把可以告诉别人的公开，别人只能用我提供的功能实现需求，而不知道是如何实现的。增加安全性。\n"),t("strong",[_._v("继承")]),_._v("：子类继承父类的数据属性和行为，并能根据自己的需求扩展出新的行为，提高了代码的复用性。\n"),t("strong",[_._v("多态")]),_._v("：指允许不同的对象对同一消息做出相应。即同一消息可以根据发送对象的不同而采用多种不同的行为方式（发送消息就是函数调用）。封装和继承几乎都是为多态而准备的，在执行期间判断引用对象的实际类型，根据其实际的类型调用其相应的方法。\n"),t("strong",[_._v("抽象")]),_._v(":表示对问题领域进行分析、设计中得出的抽象的概念，是对一系列看上去不同，但是本质上相同的具体概念的抽象。在Java中抽象用 abstract 关键字来修饰，用 abstract 修饰类时，此类就不能被实例化，抽象类（接口）就是为了继承而存在的。")])]),_._v(" "),t("h5",{attrs:{id:"_10、接口与继承的区别有？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10、接口与继承的区别有？"}},[_._v("#")]),_._v(" 10、接口与继承的区别有？")]),_._v(" "),t("blockquote",[t("p",[_._v("1.不同的关键字，即实现接口（implements），继承（extends）；")]),_._v(" "),t("p",[_._v("2.在面向对象编程的时候只能是单继承，但是实现接口可以有多个，这说明了继承在Java中具有单根性，子类只能去继承一个父类；")]),_._v(" "),t("p",[_._v("3.在接口中只能定义全局变量和抽象方法，而在继承中可以定义属性方法，变量，常量等")]),_._v(" "),t("p",[_._v("4.当某个接口被实现的时候，在类中一定要用接口中的抽象方法，而继承中子类能随意调用父类的属性和方法")])]),_._v(" "),t("h5",{attrs:{id:"_11、重载和重写的区别？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11、重载和重写的区别？"}},[_._v("#")]),_._v(" 11、重载和重写的区别？")]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("方法的重载和重写都是实现多态的方式，区别在于前者实现的是编译时的多态性，而后者实现的是运行时的多态性。")])]),_._v(" "),t("p",[t("strong",[_._v("override（重写）")])]),_._v(" "),t("p",[_._v("1、方法名、参数、返回值相同。")]),_._v(" "),t("p",[_._v("2、子类方法不能缩小父类方法的访问权限。")]),_._v(" "),t("p",[_._v("3、子类方法不能抛出比父类方法更多的异常(但子类方法可以不抛出异常)。")]),_._v(" "),t("p",[_._v("4、存在于父类和子类之间。")]),_._v(" "),t("p",[_._v("5、方法被定义为final不能被重写。")]),_._v(" "),t("p",[t("strong",[_._v("overload（重载）")])]),_._v(" "),t("p",[_._v("1、参数类型、个数、顺序至少有一个不相同。")]),_._v(" "),t("p",[_._v("2、重载不能只根据返回类型进行区分")]),_._v(" "),t("p",[_._v("3、存在于父类和子类、同类中。")])]),_._v(" "),t("h5",{attrs:{id:"_12、abstract-class-和-interface-有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12、abstract-class-和-interface-有什么区别"}},[_._v("#")]),_._v(" 12、abstract class 和 interface 有什么区别?")]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("1.抽象类可以有构造方法，接口中不能有构造方法。")])]),_._v(" "),t("p",[_._v("2.抽象类中可以有普通成员变量，接口中没有普通成员变量")]),_._v(" "),t("p",[t("strong",[_._v("3.抽象类中可以包含非抽象的普通方法，接口中的所有方法必须都是抽象的，不能有非抽象的普通方法。")])]),_._v(" "),t("p",[_._v("4.抽象类中的抽象方法的访问类型可以是public，protected，但接口中的抽象方法只能是public类型的")]),_._v(" "),t("p",[t("strong",[_._v("5.抽象类中可以包含静态方法，接口中不能包含静态方法")])]),_._v(" "),t("p",[t("strong",[_._v("6.抽象类和接口中都可以包含静态成员变量，抽象类中的静态成员变量的访问类型可以任意，但接口中定义的变量只能是public static final类型，并且默认即为public static final类型")])]),_._v(" "),t("p",[t("strong",[_._v("7.一个类可以实现多个接口，但只能继承一个抽象类")])])]),_._v(" "),t("h5",{attrs:{id:"_13、java-中是否可以覆盖-override-一个-private-或者是-static-的方法？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13、java-中是否可以覆盖-override-一个-private-或者是-static-的方法？"}},[_._v("#")]),_._v(" 13、Java 中是否可以覆盖(override)一个 private 或者是 static 的方法？")]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("不可以")])]),_._v(" "),t("ol",[t("li",[t("p",[_._v("override：子类重写父类的方法（返回值，方法名，参数都相同）以实现多态。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("private只能够被自身类访问，子类不能访问private修饰的成员")]),_._v("，所以不能override一个private方法")])]),_._v(" "),t("li",[t("p",[_._v("static方法是与类绑定的与任何实例都无关，随着类的加载而加载， "),t("strong",[_._v("static是编译时静态绑定的，override是运行时动态绑定的。")])])])])]),_._v(" "),t("h5",{attrs:{id:"_14、final、finally、finalize的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14、final、finally、finalize的区别"}},[_._v("#")]),_._v(" 14、final、finally、finalize的区别")]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("final")]),_._v(" 用于声明属性，方法和类，分别表示属性不可变，方法不可覆盖，类不可继承\n"),t("strong",[_._v("finally")]),_._v(" 是异常处理语句结构的一部分，表示总是执行\n"),t("strong",[_._v("finalize")]),_._v("  是Object 类的一个方法，在垃圾收集器执行的时候会调用被回收对象的此方法，可以覆盖此方法提供垃圾收集时的其他资源回收，例如关闭文件等")])]),_._v(" "),t("h5",{attrs:{id:"_15、object-中有哪些方法？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15、object-中有哪些方法？"}},[_._v("#")]),_._v(" 15、Object 中有哪些方法？")]),_._v(" "),t("blockquote",[t("ol",[t("li",[t("strong",[_._v("getClass()")]),_._v(" : final方法，获得运行时类型")]),_._v(" "),t("li",[t("strong",[_._v("hashCode()")]),_._v(" ：该方法用于哈希查找，重写了equals方法一般都要重写hashCode方法。这个方法在一些具有哈希功能的Collection中用到")]),_._v(" "),t("li",[t("strong",[_._v("equals()")]),_._v(" ：该方法是非常重要的一个方法。一般equals和==是不一样的，但是在Object中两者是一样的。子类一般都要重写这个方法。")]),_._v(" "),t("li",[t("strong",[_._v("toString()")]),_._v(" : 转换为String类型")]),_._v(" "),t("li",[t("strong",[_._v("clone()")]),_._v(" : 保护方法，实现对象的浅复制，只有实现了Cloneable接口才可以调用该方法，否则抛出CloneNotSupportedException异常")]),_._v(" "),t("li",[t("strong",[_._v("wait()")]),_._v(" ：wait方法就是使当前线程等待该对象的锁，当前线程必须是该对象的拥有者，也就是具有该对象的锁。wait()方法一直等待，直到获得锁或者被中断。wait(long timeout)设定一个超时间隔，如果在规定时间内没有获得锁就返回")]),_._v(" "),t("li",[t("strong",[_._v("notify()")]),_._v(" ：该方法唤醒在该对象上等待的某个线程")]),_._v(" "),t("li",[t("strong",[_._v("notifyAll()")]),_._v(" ：该方法唤醒在该对象上等待的所有线程")]),_._v(" "),t("li",[t("strong",[_._v("finalize()")]),_._v(" ：该方法用于释放资源。因为无法确定该方法什么时候被调用，很少使用")])])]),_._v(" "),t("h5",{attrs:{id:"_16、怎么实现一个对象的克隆-java如何实现深度克隆？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_16、怎么实现一个对象的克隆-java如何实现深度克隆？"}},[_._v("#")]),_._v(" 16、怎么实现一个对象的克隆,Java如何实现深度克隆？")]),_._v(" "),t("blockquote",[t("p",[t("code",[_._v("clone")]),_._v("是浅拷贝;只克隆了自身对象和对象内实例变量的地址引用,使用它需要实现接口"),t("code",[_._v("Cloneable")]),_._v(";")]),_._v(" "),t("p",[_._v("使用"),t("code",[_._v("ObjectStream")]),_._v("进行深度克隆; 先将对象序列化；然后再反序列化;")])]),_._v(" "),t("p",[t("strong",[_._v("17、sleep() 区间wait()区间有什么区别？")])]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("sleep()")]),_._v(" 是Thread中的方法,线程暂停,让出CPU,但是不释放锁")]),_._v(" "),t("p",[t("strong",[_._v("wait()")]),_._v(" 是Object中的方法, 调用次方法必须让当前线程必须拥有此对象的锁 ,执行之后 线程阻塞,让出CPU, 同时也释放锁; 等待期间不配拥有CPU执行权, 必须调用 "),t("strong",[_._v("notify/notifyAll")]),_._v(" 方法唤醒,(notify是随机唤醒) 唤醒并不意味着里面就会执行,而是还是需要等待分配到CPU才会执行；")])]),_._v(" "),t("h5",{attrs:{id:"_18、-和-的区别？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_18、-和-的区别？"}},[_._v("#")]),_._v(" 18、&和&&的区别？")]),_._v(" "),t("blockquote",[t("p",[_._v("&运算符有两种用法：(1)按位与；(2)逻辑与")]),_._v(" "),t("p",[_._v("&&运算符是短路与运算")]),_._v(" "),t("p",[_._v("逻辑与跟短路与的差别是非常巨大的，虽然二者都要求运算符"),t("strong",[_._v("左右两端的布尔值都是 true 整个表达式的值才是true")]),_._v("。&&之所以称为短路运算是因为，如果&&"),t("strong",[_._v("左边的表达式的值是 false，右边的表达式会被直接短路掉，不会进行运算")]),_._v("。")])]),_._v(" "),t("h5",{attrs:{id:"_19、java-反射"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_19、java-反射"}},[_._v("#")]),_._v(" 19、Java 反射")]),_._v(" "),t("blockquote",[t("p",[_._v("可以动态获取的信息以及动态调用对象的方法的功能，反射机制是在运行时，对于任意一个类， 都能够知道这个类的所有属性和方法；对于任意个对象，都能够调用它的任意一个方法。在java中，只要给定类的名字，就可以通过反射机制来获得类的所有信息。")])]),_._v(" "),t("p",[t("strong",[_._v("20、Java反射创建对象效率高还是通过new创建对象的效率高？")])]),_._v(" "),t("blockquote",[t("p",[_._v("通过new创建对象的效率比较高。通过反射时，先找查找类资源，使用类加载器创建，过程比较繁琐，所以效率较低。")])]),_._v(" "),t("p",[t("strong",[_._v("21、return和finally同时出现时，会怎么样？")])]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("1.在finally中有return,那么结果就返回finally中的")]),_._v(" "),t("strong",[_._v("2.在finally中没有return,那么结果就是try和catch中的")])]),_._v(" "),t("p",[_._v("在实际开发过程中,一般在finally中是没有return的,因为如果finally中有return语句,那么try和catch中的return就没有作用,一般在开发的过程中,finally中一般只写一些关于资源释放,资源回收的代码.")])]),_._v(" "),t("h5",{attrs:{id:"_21、-error-和-exception-区别是什么？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_21、-error-和-exception-区别是什么？"}},[_._v("#")]),_._v(" 21、 Error 和 Exception 区别是什么？")]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("Error")]),_._v(" 类型的错误通常为虚拟机相关错误，如系统崩溃，内存不足，堆栈溢出等，编译器不会对这类错误进行检测，也不应对这类错误进行捕获，"),t("strong",[_._v("一旦这类错误发生，通常应用程序会被终止，仅靠应用程序本身无法恢复；")])]),_._v(" "),t("p",[t("strong",[_._v("Exception")]),_._v(" 类的错误是可以在应用程序中进行捕获并处理的，通常遇到这种错误，"),t("strong",[_._v("应对其进行处理，使应用程序可以继续正常运行。")])])]),_._v(" "),t("p",[t("strong",[_._v("22、throw 和 throws 的区别是什么？")])]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("throw")]),_._v(" 关键字用在方法内部，只能用于抛出一种异常，用来抛出方法或代码块中的异常，受查异常和非受查异常都可以被抛出。\n"),t("strong",[_._v("throws")]),_._v(" 关键字用在方法声明上，可以抛出多个异常，用来标识该方法可能抛出的异常列表。一个方法用 throws 标识了可能抛出的异常列表，调用该方法的方法中必须包含可处理异常的代码，否则也要在方法签名中用 throws 关键字声明相应的异常。")])]),_._v(" "),t("p",[t("strong",[_._v("23、Java常见异常有哪些？")])]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("ArrayIndexOutOfBoundsException")]),_._v("：数组索引越界异常。当对数组的索引值为负数或大于等于数组大小时抛出。")]),_._v(" "),t("p",[t("strong",[_._v("IndexOutOfBoundsException")]),_._v("：索引越界异常。当访问某个序列的索引值小于0或大于等于序列大小时，抛出该异常。")]),_._v(" "),t("p",[t("strong",[_._v("NullPointerException")]),_._v("：空指针异常。当应用试图在要求使用对象的地方使用了null时，抛出该异常。譬如：调用null对象的实例方法、访问null对象的属性、计算null对象的长度、使用throw语句抛出null等等。")]),_._v(" "),t("p",[t("strong",[_._v("StringIndexOutOfBoundsException")]),_._v("：字符串索引越界异常。当使用索引值访问某个字符串中的字符，而该索引值小于0或大于等于序列大小时，抛出该异常。")]),_._v(" "),t("p",[t("strong",[_._v("ClassNotFoundException")]),_._v("：找不到类异常。当应用试图根据字符串形式的类名构造类，而在遍历CLASSPAH之后找不到对应名称的class文件时，抛出该异常。")])]),_._v(" "),t("h5",{attrs:{id:"_24、-值传递与引用传递"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_24、-值传递与引用传递"}},[_._v("#")]),_._v(" 24、 值传递与引用传递")]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("值传递")]),_._v("是对基本型变量而言的,传递的是该变量的一个副本,改变副本不影响原变量")]),_._v(" "),t("p",[t("strong",[_._v("引用传递")]),_._v("一般是对于对象型变量而言的,传递的是该对象地址的一个副本, 并不是原对象本身")]),_._v(" "),t("p",[_._v("一般认为 , "),t("strong",[_._v("java 内的传递都是值传递. java 中实例对象的传递是引用传递")])])]),_._v(" "),t("h5",{attrs:{id:"_25、-什么是泛型？-泛型-？与-t-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_25、-什么是泛型？-泛型-？与-t-的区别"}},[_._v("#")]),_._v(" 25、 什么是泛型？  泛型 ？与 T 的区别")]),_._v(" "),t("blockquote",[t("p",[_._v("”泛型”字面意思就是广泛的类型，类、接口和方法代码可以应用于非常广泛的类型，"),t("strong",[_._v("代码与它们能够操作的数据类型不再绑定在一起，同一套代码，可以用于多种数据类型")]),_._v("，不仅可以"),t("strong",[_._v("复用代码，降低耦合")]),_._v("，同时，还可以"),t("strong",[_._v("提高代码的可读性和安全性")]),_._v("。")]),_._v(" "),t("p",[_._v("使用方法：")]),_._v(" "),t("ol",[t("li",[t("T",[_._v("  ，创建时就指定了数据类型，不可以在此基础上加入不同的数据类型\n")])],1),_._v(" "),t("li",[_._v("\n<?>  ，？可以表示成占位符，表明存放N种数据类型也是可以的，可以开始时不用指定数据类型\n")]),_._v(" "),t("li",[_._v("\n<? extends 数据类型> ，这种写法表示只接收指定的数据类型和它的子类类型\n")]),_._v(" "),t("li",[_._v("\n<? super 数据类型> ，这种写法表示只接收指定的数据类型及它的父类类型\n")])])]),_._v(" "),t("h5",{attrs:{id:"_26、六原则一法则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_26、六原则一法则"}},[_._v("#")]),_._v(" 26、六原则一法则")]),_._v(" "),t("blockquote",[t("ul",[t("li",[t("p",[t("strong",[_._v("单一职责原则")]),_._v("："),t("strong",[_._v("一个类只做它该做的事情")]),_._v("。只让一个类完成它该做的事，而不涉及与它无关的领域就是践行了高内聚的原则，这个类就只有单一职责。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("开闭原则")]),_._v("："),t("strong",[_._v("软件实体应当对扩展开放，对修改关闭")]),_._v("。要做到开闭有两个要点：①抽象是关键，一个系统中如果没有抽象类或接口系统就没有扩展点；②封装可变性，将系统中的各种可变因素封装到一个继承结构中，如果多个可变因素混杂在一起，系统将变得复杂而换乱，")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("依赖倒转原则")]),_._v("：面向接口编程。声明方法的参数类型、方法的返回类型、变量的引用类型时，"),t("strong",[_._v("尽可能使用抽象类型而不用具体类型")]),_._v("，因为抽象类型可以被它的任何一个子类型所替代")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("里氏替换原则")]),_._v("："),t("strong",[_._v("任何时候都可以用子类型替换掉父类型")]),_._v("。里氏替换原则可以检查继承关系是否合理，如果一个继承关系违背了里氏替换原则，那么这个继承关系一定是错误的。例如让猫继承狗，或者让正方形继承长方形，需要注意的是："),t("strong",[_._v("子类一定是增加父类的能力而不是减少父类的能力，因为子类比父类的能力更多，把能力多的对象当成能力少的对象来用当然没有任何问题。")])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("接口隔离原则")]),_._v("："),t("strong",[_._v("接口要小而专，绝不能大而全")]),_._v("。臃肿的接口是对接口的污染，既然接口表示能力，那么一个接口只应该描述一种能力，接口也应该是高度内聚的。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("合成聚合复用原则")]),_._v("："),t("strong",[_._v("优先使用聚合或合成关系复用代码")]),_._v("。类与类之间简单的说有三种关系，分别是"),t("strong",[_._v("继承、关联和依赖")]),_._v("。合成聚合复用原则想表达的是优先考虑 关联 关系而不是 继承 关系复用代码。"),t("strong",[_._v("任何时候都不要继承工具类，工具是可以拥有并可以使用的，而不是拿来继承的。")])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("迪米特法则")]),_._v("：又叫最少知识原则，"),t("strong",[_._v("一个对象应当对其他对象有尽可能少的了解")]),_._v("。再复杂的系统都可以为用户提供一个简单的门面，浏览器对服务器的运作方式一无所知，但是通过前端控制器就能够根据你的请求得到相应的服务，这样就减小了系统的耦合度和复杂度。")])])])]),_._v(" "),t("h5",{attrs:{id:"_27、序列化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_27、序列化"}},[_._v("#")]),_._v(" 27、序列化")]),_._v(" "),t("blockquote",[t("p",[_._v("将那些实现了"),t("strong",[_._v("Seralizable")]),_._v(" 接口的对象特揽成一个字节序列，并能够在以后将这个字节序列完全恢复为原来的对象，序列化可以弥补不同操作系统之间的差异")])]),_._v(" "),t("h5",{attrs:{id:"_28、comparable-接口和-comparator-接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_28、comparable-接口和-comparator-接口"}},[_._v("#")]),_._v(" 28、comparable 接口和 comparator 接口")]),_._v(" "),t("blockquote",[t("p",[_._v("Java 提供了只包含一个 **compareTo()**方法的 Comparable 接口。这个方法可以个给两个对象排序。具体来说，它返回负数，0，正数来表明输入对象小于，等于，大于已经存在的对象。\nJava 提供了包含 **compare()和 equals()**两个方法的 Comparator 接口。compare()方法用来给两个输入参数排序，返回负数，0，正数表明第一个参数是小于，等于，大于第二个参数。equals()方法需要一个对象作为参数，它用来决定输入参数是否和 comparator 相等。只有当输入参数也是一个 comparator 并且输入参数和当前 comparator 的排序结果是相同的时候，这个方法才返回true。")])]),_._v(" "),t("h5",{attrs:{id:"_29、字节流、字符流-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_29、字节流、字符流-区别"}},[_._v("#")]),_._v(" 29、字节流、字符流 区别")]),_._v(" "),t("blockquote",[t("p",[_._v("在程序中所有的数据都是以流的方式进行传输或保存的，程序需要数据的时候要使用输入流读取数据，而当程序需要将一些数据保存起来的时候，就要使用输出流完成。")]),_._v(" "),t("p",[t("strong",[_._v("程序中的输入输出都是以流的形式保存的，流中保存的实际上全都是字节文件。")])]),_._v(" "),t("p",[_._v("在"),t("strong",[_._v("字节流")]),_._v("中输出数据主要是使用OutputStream完成，输入使的是InputStream，")]),_._v(" "),t("p",[_._v("在"),t("strong",[_._v("字符流")]),_._v("中输出主要是使用Writer类完成，输入流主要使用Reader类完成。")])]),_._v(" "),t("h5",{attrs:{id:"_30、comparable-和-comparator-接口是干什么的？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_30、comparable-和-comparator-接口是干什么的？"}},[_._v("#")]),_._v(" 30、Comparable 和 Comparator 接口是干什么的？")]),_._v(" "),t("blockquote",[t("p",[_._v("Java 提供了只包含一个 "),t("strong",[_._v("compareTo()")]),_._v(" 方法的 "),t("strong",[_._v("Comparable")]),_._v(" 接口。这个方法可以个给两个对象排序。它返回 负数，0，正数 来表明输入对象小于，等于，大于已经存在的对象。\nJava 提供了包含 "),t("strong",[_._v("compare()")]),_._v(" 和 "),t("strong",[_._v("equals()")]),_._v(" 两个方法的 "),t("strong",[_._v("Comparator")]),_._v(" 接口。compare()方法用来给两个输入参数排序，返回 负数，0，正数 表明第一个参数是小于，等于，大于第二个参数。equals()方法需要一个对象作为参数，a.equals(b) 它用来决定 b 是否和 a 相等。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);