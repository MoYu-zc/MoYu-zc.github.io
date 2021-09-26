(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{517:function(t,s,a){"use strict";a.r(s);var e=a(15),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-上传项目到-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-上传项目到-github"}},[t._v("#")]),t._v(" Git 上传项目到 Github")]),t._v(" "),a("blockquote",[a("p",[t._v("该文章主要讲解Git 上传项目到 Github，Gitee同理")])]),t._v(" "),a("h2",{attrs:{id:"配置git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置git"}},[t._v("#")]),t._v(" 配置Git")]),t._v(" "),a("p",[a("strong",[t._v("下载、安装"),a("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("下载后一路（傻瓜式安装）直接安装即可")]),t._v(" "),a("p",[t._v("如果第一次使用git的话，需要设置用户名和邮箱:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),t._v("\ngit config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("同理，username对应你的github用户名，email对应你的github邮箱")])]),t._v(" "),a("p",[t._v("可以用以下两条，检查一下你有没有输对:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git config user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\ngit config user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210206203504.png",alt:"12"}})]),t._v(" "),a("h2",{attrs:{id:"生成公钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成公钥"}},[t._v("#")]),t._v(" 生成公钥")]),t._v(" "),a("p",[t._v("执行以下命令，然后连续"),a("code",[t._v("三次回车")]),t._v(",生成公钥:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ssh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("keygen "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("t rsa\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210206203515.png",alt:"14"}})]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("C盘/用户/用户名/.ssh")]),t._v("目录下找到"),a("code",[t._v("id_rsa.pub")]),t._v("文件,用文本编辑工具打开，并复制所有文本内容。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210206203527.png",alt:""}})]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("Github")]),t._v("页面右上角，点击用户头像-"),a("code",[t._v("Settings")]),t._v("-"),a("code",[t._v("SSH and GPG keys")]),t._v("-"),a("code",[t._v("New SSH key")])]),t._v(" "),a("p",[t._v('![](https://gitee.com/MoYu-zc/picgo/raw/master/img/20210217190430.jpeg" style="zoom:80%;" )')]),t._v(" "),a("p",[a("code",[t._v("Title")]),t._v("可以随意填写，"),a("code",[t._v("Key")]),t._v("需要填写刚才"),a("code",[t._v("复制的公钥文本内容")]),t._v(",然后"),a("code",[t._v("Add SSH key")]),t._v("。")]),t._v(" "),a("p",[t._v("添加完成后，在控制台输入:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ssh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" git@github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("code",[t._v("这里注意")]),t._v("，这里在输入框需要第一次回车后，输入"),a("code",[t._v("yes")])]),t._v(" "),a("p",[t._v("如果配置成功，可以看到成功的回复。")]),t._v(" "),a("h2",{attrs:{id:"前置准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置准备"}},[t._v("#")]),t._v(" 前置准备")]),t._v(" "),a("p",[t._v("1.首先你需要一个github账号，所以还没有的话先去注册吧！")]),t._v(" "),a("p",[t._v("https://github.com/")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("2.登陆后，进入Github首页，点击 "),a("strong",[t._v("New repository")]),t._v(" 新建一个项目")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210217194612.png"}}),t._v(" "),a("hr"),t._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210217194644.png",alt:"2"}}),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Repository name")]),t._v(" 选择自己喜欢的名称就好")]),t._v(" "),a("li",[t._v("最好选择"),a("strong",[t._v("README file")]),t._v("，以免后面更麻烦")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("3.创建成功之后的页面，可以记住下面的这个网址，以后会常用")]),t._v(" "),a("img",{staticStyle:{zoom:"70%"},attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210217200010.png",alt:"3"}}),t._v(" "),a("h2",{attrs:{id:"上传项目到-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传项目到-github"}},[t._v("#")]),t._v(" 上传项目到 Github")]),t._v(" "),a("h3",{attrs:{id:"_1-第一种方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-第一种方法"}},[t._v("#")]),t._v(" 1.第一种方法")]),t._v(" "),a("p",[t._v("第一步："),a("strong",[t._v("创建一个文件夹")]),t._v("，右键"),a("strong",[t._v("Git Bash Here")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("第二步：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git clone https://github.com/MoYu-zc/ADDD.git\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("后面的网址换成你创建的仓库的网址")])]),t._v(" "),a("img",{staticStyle:{zoom:"90%"},attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210217203418.png",alt:"4"}}),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("第三步：")]),t._v(" "),a("p",[t._v("这个步骤以后你的本地项目文件夹下面就会多出个文件夹，"),a("strong",[t._v("该文件夹名即为你github上面的项目名")]),t._v("，如图我多出了个"),a("code",[t._v("ADDD")]),t._v("文件夹：")]),t._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210217213339.png",alt:"5"}}),t._v(" "),a("p",[t._v("然后把你想上传的文件复制到这个文件夹（这就等于复制到了Github的仓库中）")]),t._v(" "),a("p",[t._v("这里为了方便，我直接在文件夹中创建了一个"),a("strong",[t._v("Test.txt")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("第四步：之后进入这个文件夹，可以：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd ADDD\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("或者"),a("strong",[t._v("直接右键这个文件夹，选择Git Bash Here")])]),t._v(" "),a("img",{staticStyle:{zoom:"90%"},attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210217214012.png",alt:"6"}}),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("第五步：")]),t._v(" "),a("p",[t._v("接下来依次输入以下代码即可完成其他剩余操作：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git add .    （注：别忘记后面的.，此操作是把Test文件夹下面的文件都添加进来）\n\ngit commit  -m  "提交信息"  （注：“提交信息”里面换成你需要,会成为你上传文件的描述信息）\n\ngit push -u origin xxx   （注：此处的xxx是你的分支名称(下图红框中)，该操作目的是把本地仓库push到github上面，此步骤需要你输入帐号和密码）\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("如果在github的remote上已经有了文件，会出现错误。此时应当先pull一下，即：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git pull origin xxx        此处的xxx是你的分支名称(下图红框中)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("之后再：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git push -u origin xxx      此处的xxx是你的分支名称(下图红框中)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210217215547.png",alt:"8"}}),t._v(" "),a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210217215141.png",alt:"7"}}),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210217215854.png",alt:"9"}}),t._v(" "),a("h3",{attrs:{id:"_2-第二种方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-第二种方法"}},[t._v("#")]),t._v(" 2.第二种方法")]),t._v(" "),a("p",[t._v("第一步："),a("strong",[t._v("新建一个文件夹")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("第二步：")]),t._v(" "),a("p",[t._v("通过命令 "),a("strong",[t._v("git init")]),t._v(" 把这个文件夹变成Git可管理的仓库 ：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210217223003.png",alt:"10"}})]),t._v(" "),a("p",[t._v("这时你会发现文件夹里面多了个"),a("code",[t._v(".git")]),t._v("文件夹，它是Git用来跟踪和管理版本库的。如果你看不到，是因为它默认是隐藏文件，那你就需要设置一下让隐藏文件可见。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210217223145.png",alt:"11"}})]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("第三步：更改分支(可选)")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210218115816.png",alt:"18"}})]),t._v(" "),a("p",[t._v("红框中的分支名称和你创建的仓库分支名称不同：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git checkout xxx\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210218120033.png",alt:"19"}})]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("第三步：")]),t._v(" "),a("p",[t._v("这时候可以把你的项目粘贴到这个文件夹里面（为了方便放入了一个"),a("strong",[t._v("Test1.txt")]),t._v("，粘贴后你可以通过 "),a("strong",[t._v("git status")]),t._v(" 来查看你当前的状态），然后通过**git add "),a("strong",[t._v("把项目添加到仓库（或")]),t._v("git add .**把该目录下的所有文件添加到仓库，注意点是用空格隔开的）")]),t._v(" "),a("img",{staticStyle:{zoom:"90%"},attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210218112610.png",alt:"12"}}),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210218112658.png",alt:"13"}})]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("第四步：用 "),a("strong",[t._v("git commit")]),t._v(" 把项目提交到仓库。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git commit -m "xxx"\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210218110838.png",alt:"14"}})]),t._v(" "),a("p",[t._v("-m后面引号里面是本次提交的注释内容")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("第五步：")]),t._v(" "),a("p",[t._v("在Github上创建好Git仓库之后我们就可以和本地仓库进行关联了，根据创建好的Git仓库页面的提示，可以在命令行输入("),a("strong",[t._v("一般这一步一次就行了")]),t._v(")：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git remote add origin https://github.com/MoYu-zc/ADDD.git\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210218111623.png",alt:"15"}})]),t._v(" "),a("blockquote",[a("p",[t._v("如果出现以下问题：fatal: remote origin already exists.（报错远程起源已经存在。）")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1、先输入 git remote rm origin\n2、再输入 git remote add origin  xxxx\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("第六步：关联好之后我们就可以把本地库的所有内容推送到远程仓库（也就是Github）上了，通过：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git push -u origin xxxx\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("由于新建的远程仓库是空的，所以要加上-u这个参数，等远程仓库里面有了内容之后，下次再从本地库上传内容的时候只需下面这样就可以了：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git push origin xxxx\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("此处的xxx是你的分支名称")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210218112257.png",alt:"16"}})]),t._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://gitee.com/MoYu-zc/picgo/raw/master/img/20210218120535.png",alt:"17"}})])}),[],!1,null,null,null);s.default=r.exports}}]);