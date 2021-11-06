(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{480:function(s,a,t){"use strict";t.r(a);var e=t(15),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"rabbitmq-安装与界面管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-安装与界面管理"}},[s._v("#")]),s._v(" RabbitMQ 安装与界面管理")]),s._v(" "),t("h2",{attrs:{id:"rabbitmq概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq概述"}},[s._v("#")]),s._v(" RabbitMQ概述")]),s._v(" "),t("blockquote",[t("p",[s._v("官网：https://www.rabbitmq.com/")])]),s._v(" "),t("p",[t("strong",[s._v("RabbitMQ")]),s._v("是部署最广泛的开源消息代理。")]),s._v(" "),t("p",[t("strong",[s._v("RabbitMQ")]),s._v("拥有成千上万的用户，是最流行的开源消息代理之一。从T-Mobile到Runtastic, RabbitMQ在全球范围内广泛应用于小型初创企业和大型企业。")]),s._v(" "),t("p",[t("strong",[s._v("RabbitMQ")]),s._v("是轻量级的，易于部署在premises和云中。它支持多种消息传递协议。RabbitMQ可以以分布式和联合的方式部署，以满足高规模、高可用性的需求。")]),s._v(" "),t("p",[t("strong",[s._v("RabbitMQ")]),s._v("运行在许多操作系统和云环境上，并为最流行的语言提供了广泛的开发工具。")]),s._v(" "),t("h2",{attrs:{id:"安装准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装准备"}},[s._v("#")]),s._v(" 安装准备")]),s._v(" "),t("h3",{attrs:{id:"下载rabbit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载rabbit"}},[s._v("#")]),s._v(" 下载Rabbit")]),s._v(" "),t("blockquote",[t("p",[s._v("下载地址：https://www.rabbitmq.com/download.html")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210508235757.png",alt:"1"}})]),s._v(" "),t("p",[s._v("这里以"),t("code",[s._v("Linux")]),s._v("系统进行举例，我使用的是CentOS7的镜像，可以选择对应版本")]),s._v(" "),t("h3",{attrs:{id:"下载erlang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载erlang"}},[s._v("#")]),s._v(" 下载Erlang")]),s._v(" "),t("p",[s._v("RabbitMQ是基于Erlang开发，所以想要使用RabbitMQ，需要安装Erlang")]),s._v(" "),t("blockquote",[t("p",[s._v("查看对应版本的Erlang")]),s._v(" "),t("p",[s._v("网址：https://www.rabbitmq.com/which-erlang.html")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210509000820.png",alt:"2"}})]),s._v(" "),t("p",[t("strong",[s._v("该处是对应的，不可以让Erlang版本超出范围")])]),s._v(" "),t("blockquote",[t("p",[s._v("下载地址：https://www.erlang-solutions.com/")])]),s._v(" "),t("h2",{attrs:{id:"linux安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux安装"}},[s._v("#")]),s._v(" Linux安装")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir -p /usr/rabbitmq     # 在/usr文件夹下创建rabbitmq文件夹")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /usr/rabbitmq           # 进入/usr/rabbitmq 文件夹下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost rabbitmq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("使用"),t("code",[s._v("X-ftp")]),s._v(" 将下载的文件移动到该文件下")])]),s._v(" "),t("h3",{attrs:{id:"安装erlang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装erlang"}},[s._v("#")]),s._v(" 安装Erlang")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -Uvh erlang-23.3.1-1.el7.x86_64.rpm    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 后面的文件名改为下载的文件名")]),s._v("\n\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y erlang     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装erlang  ， 这里可能会报错")]),s._v("\n\nyum list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" erlang    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询erlang在系统中安装包的名字 ， 如果显示installed 不用执行上面的安装")]),s._v("\n\nerl -v    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看erlang版本")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210509004618.png",alt:"3"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210509010552.png",alt:"4"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210509010554.png",alt:"5"}})]),s._v(" "),t("h3",{attrs:{id:"安装socat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装socat"}},[s._v("#")]),s._v(" 安装socat")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y socat\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210509012518.png",alt:"6"}})]),s._v(" "),t("h3",{attrs:{id:"安装rabbitmq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装rabbitmq"}},[s._v("#")]),s._v(" 安装RabbitMQ")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -Uvh rabbitmq-server-3.8.14-1.el7.noarch.rpm\n\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" rabbitmq-server -y\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210509012521.png",alt:"7"}})]),s._v(" "),t("h3",{attrs:{id:"测试是否安装成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试是否安装成功"}},[s._v("#")]),s._v(" 测试是否安装成功")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动服务")]),s._v("\nsystemctl start rabbitmq-server\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看服务状态，如图")]),s._v("\nsystemctl status rabbitmq-server.service\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机自启动")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" rabbitmq-server\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止服务")]),s._v("\nsystemctl stop rabbitmq-server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210509012524.png",alt:"8"}})]),s._v(" "),t("h2",{attrs:{id:"docker安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker安装"}},[s._v("#")]),s._v(" Docker安装")]),s._v(" "),t("h3",{attrs:{id:"更新yum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新yum"}},[s._v("#")]),s._v(" 更新yum")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum update               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#yum 更新到最新")]),s._v("\n\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils device-mapper-persistent-data lvm2    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装需要的软件包")]),s._v("\n\nyum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置yum源为阿里云")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[s._v("#")]),s._v(" 安装Docker")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce -y        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装docker")]),s._v("\n\ndocker -v      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看docker版本")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("配置Docker镜像")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost rabbitmq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir -p /etc/docker")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost rabbitmq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tee /etc/docker/daemon.json <<-'EOF'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"registry-mirrors"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://9vqg1xqp.mirror.aliyuncs.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" EOF\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("strong",[s._v("重启、查看docker状态")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl daemon-reload \n\nsystemctl restart docker       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启docker")]),s._v("\n\nsystemctl status daocker       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看docker状态")]),s._v("\n\ndocker images                  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看docker镜像")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"docker常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker常用命令"}},[s._v("#")]),s._v(" Docker常用命令")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动docker：")]),s._v("\nsystemctl start docker\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止docker：")]),s._v("\nsystemctl stop docker\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启docker：")]),s._v("\nsystemctl restart docker\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看docker状态")]),s._v("\nsystemctl status docker\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开机启动")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" docker\nsystemctl unenable docker\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看docker概要信息")]),s._v("\ndocker info\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看docker帮助文档")]),s._v("\ndocker --help\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h3",{attrs:{id:"开始安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始安装"}},[s._v("#")]),s._v(" 开始安装")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("获取rabbit镜像")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker pull rabbitmq:management\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("创建并运行容器")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker run -di --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("myrabbit -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15672")]),s._v(":15672 rabbitmq:management\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"启动服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[s._v("#")]),s._v(" 启动服务")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看容器")]),s._v("\n\ndocker images          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看镜像")]),s._v("\n\ndocker start 3da6ff4c1cd4   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动，最后的一串和容器中名字对应")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210509145121.png",alt:"16"}})]),s._v(" "),t("p",[t("strong",[s._v("这时候，访问路径： 你的IP地址:15672       （账号密码：guest）")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210509145219.png",alt:"17"}})]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("小提示")])]),s._v(" "),t("p",[s._v("如果你关机时，docker中rabbitmq容器没有关闭，再次开启时可能出现端口错误  ，记得关闭容器")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看容器")]),s._v("\n\ndocker stop xxx    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭容器")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("h2",{attrs:{id:"rabbitmq界面管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq界面管理"}},[s._v("#")]),s._v(" RabbitMQ界面管理")]),s._v(" "),t("blockquote",[t("p",[s._v("默认情况下，rabbitmq是没有安装web端的客户端插件，需要安装才可以生效")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("rabbitmq-plugins "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" rabbitmq_management\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210509012820.png",alt:"9"}})]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("之后重启服务")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl restart rabbitmq-server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("之后可以进入网址：你的ip地址:15672  （例如："),t("code",[s._v("192.168.57.129:15672")]),s._v(" ）")]),s._v(" "),t("blockquote",[t("p",[s._v("linux  ip地址查看方法：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210509013523.png",alt:"10"}})])]),s._v(" "),t("p",[s._v("正常进入的页面为：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210509013555.png",alt:"11"}})]),s._v(" "),t("blockquote",[t("p",[s._v("说明：rabbitmq有一个默认账号和密码是："),t("code",[s._v("guest")]),s._v(" , 默认情况只能在本机( "),t("code",[s._v("localhost")]),s._v(" )下访问，所以需要添加一个远程登录的用户")])]),s._v(" "),t("p",[s._v("首先关闭防火墙，依次输入即可")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("systemctl disable firewalld\nRemoved symlink /etc/systemd/system/multi-user.target.wants/firewalld.service.\nRemoved symlink /etc/systemd/system/dbus-org.fedoraproject.FirewallD1.service.\nsystemctl stop firewalld \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("blockquote",[t("p",[t("strong",[s._v("授权账号和密码")])]),s._v(" "),t("p",[s._v("用户级别 ( 设置操作权限时使用 )：")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("administrator")]),s._v("：可以登录控制台、查看所有信息、可以对 rabbitmq进行管理")]),s._v(" "),t("li",[t("strong",[s._v("monitoring")]),s._v("：监控者 登录控制台，查看所有信息")]),s._v(" "),t("li",[t("strong",[s._v("policymaker")]),s._v("：策略制定者 登录控制台，指定策略")]),s._v(" "),t("li",[t("strong",[s._v("managment")]),s._v(" 普通管理员 登录控制台")])]),s._v(" "),t("p",[t("strong",[s._v("最后会进行解析以上级别")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("rabbitmqctl add_user admin admin              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#新增 admin 用户")]),s._v("\n\nrabbitmqctl set_user_tags admin administrator "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置用户操作权限")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210509014955.png",alt:"13"}})]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("rabbitmqctl set_permissions -p / admin "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*"')]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#为用户添加资源权限")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210509015005.png",alt:"14、"}})]),s._v(" "),t("p",[s._v("这时候使用 "),t("code",[s._v("admin")]),s._v(" 用户 就可以登陆成功了")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210509015121.png",alt:"15"}})]),s._v(" "),t("h3",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("rabbitmqctl add_user 账号 密码       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加新用户")]),s._v("\nrabbitmqctl set_user_tags 账号 administrator   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置用户操作权限 ,administrator可更改")]),s._v("\nrabbitmqctl change_password Username Newpassword   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改密码")]),s._v("\nrabbitmqctl delete_user Username      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除用户")]),s._v("\nrabbitmqctl list_users          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看用户清单")]),s._v("\nrabbitmqctl.bat set_permissions -p /用户名 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"."')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*"')]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#为用户添加资源权限")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"rabbitmq用户级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq用户级别"}},[s._v("#")]),s._v(" RabbitMQ用户级别")]),s._v(" "),t("h3",{attrs:{id:"_1-nono"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-nono"}},[s._v("#")]),s._v(" 1.nono")]),s._v(" "),t("ul",[t("li",[s._v("不能访问 "),t("code",[s._v("management plugin")])])]),s._v(" "),t("h3",{attrs:{id:"_2-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-management"}},[s._v("#")]),s._v(" 2.management")]),s._v(" "),t("ul",[t("li",[s._v("查看自己相关节点信息")]),s._v(" "),t("li",[s._v("列出自己可以通过"),t("code",[s._v("AMQP")]),s._v("登入的虚拟机")]),s._v(" "),t("li",[s._v("查看自己的虚拟机节点"),t("code",[s._v("virtual hosts")]),s._v("的"),t("code",[s._v("queues")]),s._v("，"),t("code",[s._v("exchanges")]),s._v("和"),t("code",[s._v("bindings")]),s._v("信息")]),s._v(" "),t("li",[s._v("查看和关闭自己的 "),t("code",[s._v("channels")]),s._v(" 和"),t("code",[s._v("connections")])]),s._v(" "),t("li",[s._v("查看有关自己的虚拟机节点 "),t("code",[s._v("virtual hosts")]),s._v(" 的统计信息，包括其他用户在这个节点 "),t("code",[s._v("virtual hosts")]),s._v(" 中的活动信息，")])]),s._v(" "),t("h3",{attrs:{id:"_3-policymaker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-policymaker"}},[s._v("#")]),s._v(" 3.Policymaker")]),s._v(" "),t("ul",[t("li",[s._v("包含"),t("code",[s._v("management")]),s._v("所有权限")]),s._v(" "),t("li",[s._v("查看和创建和删除自己的"),t("code",[s._v("virtual hosts")]),s._v("所属的"),t("code",[s._v("policies")]),s._v("和"),t("code",[s._v("parameters")]),s._v("信息.")])]),s._v(" "),t("h3",{attrs:{id:"_4-monitoring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-monitoring"}},[s._v("#")]),s._v(" 4.Monitoring")]),s._v(" "),t("ul",[t("li",[s._v("包含 "),t("code",[s._v("management")]),s._v(" 所有权限")]),s._v(" "),t("li",[s._v("罗列出所有的"),t("code",[s._v("virtual hosts")]),s._v("，包括不能登录的 "),t("code",[s._v("virtual hosts")]),s._v(".")]),s._v(" "),t("li",[s._v("查看其他用户的"),t("code",[s._v("connections")]),s._v("和"),t("code",[s._v("channels")]),s._v("信息")]),s._v(" "),t("li",[s._v("查看节点级别的数据如"),t("code",[s._v("clustering")]),s._v("和"),t("code",[s._v("memory")]),s._v("使用情况")]),s._v(" "),t("li",[s._v("查看所有的"),t("code",[s._v("virtual hosts")]),s._v("的全局统计信息")])]),s._v(" "),t("h3",{attrs:{id:"_5-administrator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-administrator"}},[s._v("#")]),s._v(" 5.Administrator")]),s._v(" "),t("ul",[t("li",[s._v("最高权限")]),s._v(" "),t("li",[s._v("可以创建和删除"),t("code",[s._v("virtual hosts")])]),s._v(" "),t("li",[s._v("可以查看创建和删除"),t("code",[s._v("users")])]),s._v(" "),t("li",[s._v("查看创建"),t("code",[s._v("permisssions")])]),s._v(" "),t("li",[s._v("关闭所有用户的"),t("code",[s._v("connections")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);