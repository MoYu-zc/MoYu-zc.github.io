(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{510:function(s,a,t){"use strict";t.r(a);var e=t(15),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"使用-yum-出现-loaded-plugins-fastestmirror"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-yum-出现-loaded-plugins-fastestmirror"}},[s._v("#")]),s._v(" 使用 yum 出现 Loaded plugins: fastestmirror")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("Loaded plugins: fastestmirror")])]),s._v(" "),t("p",[s._v("意思为："),t("strong",[s._v("插件不可用")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum –y install xxx")]),s._v("\nLoaded plugins: fastestmirror\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"解决办法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[s._v("#")]),s._v(" 解决办法")]),s._v(" "),t("h4",{attrs:{id:"_1-修改fastestmirror配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-修改fastestmirror配置文件"}},[s._v("#")]),s._v(" 1.修改fastestmirror配置文件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/yum/pluginconf.d/fastestmirror.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("将 "),t("code",[s._v("enable=1")]),s._v(" 改为 "),t("code",[s._v("enable=0")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210509011133.png",alt:"1"}})]),s._v(" "),t("h4",{attrs:{id:"_2-修改yum配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改yum配置文件"}},[s._v("#")]),s._v(" 2.修改yum配置文件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/yum,conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210509011313.png",alt:"2"}})]),s._v(" "),t("h4",{attrs:{id:"_3-重新构建yum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-重新构建yum"}},[s._v("#")]),s._v(" 3.重新构建yum")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum clean all\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/cache/yum\n\nyum makecache\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("清除缓存并重新构建 "),t("strong",[s._v("yum")]),s._v(" 源")]),s._v(" "),t("p",[s._v("这样就可以解决这个问题了")])])}),[],!1,null,null,null);a.default=r.exports}}]);