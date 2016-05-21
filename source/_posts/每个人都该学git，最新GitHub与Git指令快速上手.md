---
title: 每个人都该学git，最新GitHub与Git指令快速上手
date: 2016-5-7 20:10:33
tags: 爬虫
categories: 随笔房间
---

{% cq %}
技术教育是手工劳动的升华，它能把手工劳动的效率提高到最高程度。
——威·格拉德斯通
{% endcq %}

<!--more-->

---

# 2016/5/17更新

github这个磨人的小妖精，又更新了页面布局，我下面的文章又得改了，以下内容更新到当前时间。


# 为什么要学github

- 如果你想要快速建立自己博客，学git。
- 如果你是程序猿，请务必学git，并习惯把自己的代码同步到github上（你想说，不嘛，我自己的代码，不想给别人看。喂喂！有点开源精神好不好）。
- 如果你是文案工作者，你得到处跑，在不同的电脑上同步文章，学git（涉秘内容你可以选择私有仓库）。
- 如果你要在不同平台上发文章，觉得图片同步是个麻烦事，学git。
……
只要你有任何同步的需求（太大的内容除外），学git真没错。

# 什么是git
*Git*是一款免费、开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。

Git 不等于 github大家注意了！git和github就是球和球场的关系！

github是一个平台网站，建立在git之上的。国内外还有很多这样的代码托管平台比如bitbucket（我之前一直在这上面弄，有免费的私有仓库）。

github的优势在与用户群大，而且十分活跃，能在上面找到很多好玩的东西，加上上面建站方便（以后再写）。反正，如果你在找一个托管平台，选github没错！

# **创建账户**

之前做代码版本控制都是在bitbucket上面的私有仓库。现在开源社区挺火的，想在github找些开源的工程学习一下，于是加入了github，这里记录一下入门的经历。

首先创建账户的过程在这里就省略一万字了…

[点这里进github官网](http://www.github.com)


创建完账户，你就可以开始建立自己的第一个仓库了。你会在你奇奇怪怪的默认头像旁边看见一个很大的“+”号，点下去，可以看到2个选项，第一个就是新建个代码仓库。

![](http://o7bk1ffzo.bkt.clouddn.com/1463729066845.png)
填好仓库名，然后点上创建一个README，最好也填点说明。



![](http://o7bk1ffzo.bkt.clouddn.com/1463729073495.png)

然后你就能看到下面的界面了，现在里面只有一个ReadMe，注意红框的位置，这就是你的仓库地址，如果要克隆仓库，就是这个地址。


![](http://o7bk1ffzo.bkt.clouddn.com/1463729104345.png)

接下来就可以添加你的工程文件了，你可以用网站上的功能按钮新建文件或者上传文件，但是推荐还是在本地用命令行操作。



# 本地操作方案

那本地怎么操作呢？有2个方案：

1.直接下载github的桌面程序，是可视化的，很容易上手。
https://desktop.github.com/

![](http://o7bk1ffzo.bkt.clouddn.com/1463729112193.png)

2.使用命令行，这里【推荐】使用命令行，一来效率高，二来以后你到不同的平台上，能很快的上手，再者如果你以后用的服务器没有图形界面，只能用命令行。所以还是熟悉的好。


首先你需要安装git

# **Linux上安装Git**

红帽系列

	$ sudo yum install git
	
Ubuntu系，请尝试用 apt-get：

	$ sudo apt-get install git
# **Mac上安装Git**

在 Mac 上安装 Git 有多种方式。 最简单的方法是安装 Xcode Command Line Tools。 Mavericks （10.9） 或更高版本的系统中，在 Terminal 里尝试首次运行 git 命令即可。 如果没有安装过命令行开发者工具，将会提示你安装。

如果你想安装更新的版本，可以使用二进制安装程序。 官方维护的 OSX Git 安装程序可以在 Git 官方网站下载，网址为 http://git-scm.com/download/mac。

# **Windows上安装Git**

windows用户用2个选择：
1. 如果命令已经熟悉的建议用msysGit可以去官网下载：
https://git-for-windows.github.io/ 
2. 如果安装了github桌面版，自动会有个git shell （我在这里展示用的这个，比较好看，方便介绍命令。**但是后续使用，我基本只用git bash，虽然丑点，但是方便啊，直接到仓库对应目录下点击右键就可以打开bash**） 
https://desktop.github.com/

安装就一路下一步就好了。由于我是windows环境，这里重点就讲windows上git的使用，不过命令都是通用的。（**不管你用什么git工具，在命令行下的命令基本是一致的，所以不需要特别跟我用一样的git工具**）

# **Windows上git使用**

安装完msysgit后，会有Git Bash的图标，安装完github桌面版会有个git shell，不管哪个都一样的。我这里用的git shell，比较友好（但是命令都是通用的）。Git shell里面，windows和linux的常用命令都可以用！是不是很赞。


![](http://o7bk1ffzo.bkt.clouddn.com/1463729120653.png)

打开后是一个控制台，然后就可以输入命令了



![](http://o7bk1ffzo.bkt.clouddn.com/1463729135221.png)
一开始什么都不会的时候，可以使用

	 git help
查看可用命令。下面先记录一些刚开始可能会用到的命令，剩下的命令以后再记录。

# **Git常用命令**

一般人，如果不是做协同开发，真的只要知道这些命令就好了！**如果懒癌发作连这些命令也不想看，直接跳到最后！！立马上手！！**

## **获取仓库**

可以用

	git init
初始化一个仓库，这个一般在什么时候用呢？一般就是你本地目录已经准备就绪了，然后想直接在github上新建一个“空”仓库（连README.d也不要）把东西全丢进去的时候用这个。这个命令一般和`remote`命令配合使用，效果更佳。（下面会介绍别急哦）

      git remote add



我们一般常用的都是克隆现有的仓库，这里还是用刚才创建的helloworld仓库（**这里我用https地址，但是推荐大家使用ssh，ssh使用方法后面也会提，大家少安毋躁**）

	git clone https://github.com/hk029/hello-world.git
	
url后面可以用一个新的路径名`https://github.com/username/reponame.git`，让它保存到特定的目录下，默认就是当前路径下创建一个和仓库名一样的目录。

**注意**：这个命令是克隆了一个仓库而不是简单的拷贝了文件下来，还保存了有关仓库的信息，基本就是克隆出了一个小的本地仓库。(有个.git目录)

然后可以cd进去看看


![](http://o7bk1ffzo.bkt.clouddn.com/1463729130183.png)



这里有个比较有意思的地方，你会发现目录名后一个`[master]`这个表示目前这是一个master分支。当前目录有个`.git`目录，它会记录仓库的信息，所以你能看到`[master]`这个标签。之后你对当前目录的文件做的操作，都会被记录。

如果你是用的git bash，也能看到后面有个小括号写的`master`


![](http://o7bk1ffzo.bkt.clouddn.com/1463729140972.png)

## **状态与暂存**

检查目前仓库的状态是挺重要的一个环节，以免你提交代码的时候提交的不是最新代码。 
一般来说，你目前目录下的文件就两种状态

-  跟踪
- 未跟踪

我们可以先输入命令看看当前仓库的状态

	 git status
 


![](http://o7bk1ffzo.bkt.clouddn.com/1463729144864.png)
可以发现目前目录下很干净，一切都和当初克隆下来一样，所以状态显示也是很干净。

我们新键一个文件，或者从别的地方移动一个文件到当前目录下，看看有什么变化。


![](http://o7bk1ffzo.bkt.clouddn.com/1463729148314.png)

我们可以看见，‘[master]’之后多了几个东西。

>+1 表示目前有1个新文件 
~0 表示0个修改的文件 
-0 表示0个删除的文件 
! 表示未保存

我们再输入status命令看看




![](http://o7bk1ffzo.bkt.clouddn.com/1463729152001.png)
发现目前有个未跟踪的文件了。

我们把它暂存到暂存区

	 git add NewFile
	 
这个命令会把这个文件放到暂存区（还是在本地）到时候提交的时候就会把暂存区的东西提交到网上。



![](http://o7bk1ffzo.bkt.clouddn.com/1463729157280.png)





这个时候，我们发现红色的字变成了绿色，感叹号也没有了，说明目前修改都已经保存了。

再输入satus命令看看
![](http://o7bk1ffzo.bkt.clouddn.com/1463729160760.png)
这个时候已经是跟踪状态了。

如果我们这时候修改NewFile会发生什么呢？


![](http://o7bk1ffzo.bkt.clouddn.com/1463729164470.png)

可以发现，又变红了，这时候出先了~1,说明有一个修改文件。使用status命令看看

![](http://o7bk1ffzo.bkt.clouddn.com/1463729171044.png)

果然，出现了一个NewFile在未跟踪里面。这不是很奇怪吗，一个文件既是跟踪又是未跟踪？其实这很好理解，你可以理解为暂存区还有一个NewFile拷贝，就是原来那个我们add的**“空”**的NewFile。修改的这个不在暂存区，如果这时候我们把所有修改提交，那么提交的是**“空”**的NewFile。 

**所以当我们提交前，一定要`git status`看是不是还有红字？是不是还有什么修改没有更新到暂存区！**

最后，还说下，其实git status有个简化输出的形式。

	git status -s
	
![](http://o7bk1ffzo.bkt.clouddn.com/1463729178958.png)

这里我为了让所有状态都出现，删除了README.md，可以发现这个简化版输出其实更直观。




![](http://o7bk1ffzo.bkt.clouddn.com/1463729183547.png)

我们把所有的修改更新到暂存区吧：

	git add NewFile
	git rm README.md
	

现在所有的更新都更新到暂存区了，可以提交了！

## **提交到本地仓库**

这里的commit只是保存到了本地。如果你只需要一个本地仓库，那么现在也就够了。

	git commit -m "my first commit"
	

![](http://o7bk1ffzo.bkt.clouddn.com/1463729187742.png)
**注意：**一定要带-m加上说明

推送到远程仓库

因为你是直接从远程仓库拷贝的，所以你输入

	git remote
	
会发现已经有个orignal了 
这个时候你直接git push就行了

	git push




![](http://o7bk1ffzo.bkt.clouddn.com/1463729191492.png)


![](http://o7bk1ffzo.bkt.clouddn.com/1463729194380.png)

## **用SSH连接并推送到远程仓库**

**如果大家是在自己的电脑上，墙裂建立大家使用这种模式！！**

下面说下ssh的模式怎么用，首先你要创建一个私钥，就是在自己电脑里的钥匙。

	ssh-keygen -t rsa -C "your email addr"
	
第

![](http://o7bk1ffzo.bkt.clouddn.com/1463729199121.png)一个是问你改不改目录，回车就好。然后输入密码，确认（这个密码是生成这个密钥的密码，**也可以为空**（为空有多方便以后你就知道了），这样你下次push就不用输入密码了)。

然后你就可以去那个目录下找id_rsa.pub文件，打开（随便用什么打开），把里面的东西复制。




![](http://o7bk1ffzo.bkt.clouddn.com/1463729203623.png)
然后去网站上把自己私钥输入进去，头像——settings





![](http://o7bk1ffzo.bkt.clouddn.com/1463729206824.png)
根据图片点New SSH key




![](http://o7bk1ffzo.bkt.clouddn.com/1463729210911.png)

然后输入一个随便什么title自己知道就好，和你刚才复制的东西在key里




![](http://o7bk1ffzo.bkt.clouddn.com/1463729214974.png)
这时候，就算在github上注册了你的私钥，然后在输入

	ssh -T git@github.com
	
看看是不是能ssh连上github

![](http://o7bk1ffzo.bkt.clouddn.com/1463729223168.png)
好了一切准备就绪。 
我们先把远程仓库加上：



![](http://o7bk1ffzo.bkt.clouddn.com/1463729225838.png)

选择ssh，然后复制后面的地址。

（因为之前有一个original的，我们这里方便测试先删了它）

	git remote rm origin
	
输入

	git remote 
	
发现没东西了，可以添加新的远程仓库了。（如果你是`init`创建的仓库，就要用下面的命令添加远程仓库啦！）

	git remote add origin git@github.com:hk029/hello-world.git



![](http://o7bk1ffzo.bkt.clouddn.com/1463729229851.png)
然后输入

	git push -u origin master
	
master是你的分支，origin是你的远程仓库

第一次`git push -u origin master`后，就可以用直接用git push指令了

---

# One more things
现在，走完整个流程，你应该大概对git有一个认识了，熟练的掌握git命令能成倍提升你的工作效率（特别是如果你经常要在多台电脑上工作，同步数据）。

这里最后说一下，如果你不想记忆那么多命令（至少把这上面的那个ssh配置看一下），那么请至少记住以下5条：
首先是

    git clone ……

不管什么情况，你都可以先用git clone 把仓库弄下来，然后再把文件复制进去。然后！就是下面的我称为无脑四重奏的命令。

- 如果你有更新了该怎么办？？记住下面的四条命令：
```
git pull
git add * /rm
git commit -m "add"
git push
```

以后你在不同地方同步自己的更新，无脑敲4条命令就好了。（前提是你本地有仓库了呀！）

你可以把这4条命令写在.bat文件里（就是新建一个文件，把4条命令输进去，后缀改成.bat，linux就.sh）



![](http://o7bk1ffzo.bkt.clouddn.com/1463729235568.png)

然后每次只用输入1条命令就好了！

    d:/gitpush.bat


![](http://o7bk1ffzo.bkt.clouddn.com/1463729238143.png)

# 遇到问题怎么办
对于小白来说，如果遇到了问题怎么办？？这里有个无敌小窍门（重启啊！）：
- 如果你实在不知道发生了什么，你又确定你自己的本地目录是最新的。你可以把本地的.git删除，然后新建一个仓库，`git remote add ……`然后使用上面的无闹四重奏，重新push上去。

- 如果你确定网上的是最新的，你本地被你毁的面目全非了，也不要怕，把这个本地目录整个删除，重新git clone就好了。
