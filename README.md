### 先行配置

```
git config --global user.name 你的英文名
git config --global user.email 你的邮箱
git config --global push.default simple
git config --global core.quotepath false
git config --global core.editor "code --wait"
git config --global core.autocrlf input
```

查看是否配置成功`git config --global --list`
![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1637408442082-1a3a1171-a9bb-4452-a565-bd524567ac2b.png)

### git init

1. 进入想要初始化的仓库，然后`git init`
   1. ![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1637408551185-6aa44472-afa5-469d-b8e3-2706bb6f91e9.png)
   1. `ls -a`看见 `.git`文件夹
      1. ![image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1637461152811-34832340-3a5c-4862-a931-b9561df63064.png)
      1. `.git`文件夹就是当前文件夹的本地仓库，容纳代码提交的代码
      1. 在电脑中设置显示隐藏文件后，就能看到`.git`文件夹了![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1637409208495-6dcd876d-c6d6-4336-8a07-7d6cc149a1ac.png)
      1. 搜索文件资讯管理器后设置即可

### git add

1. 把文件提交到暂存区（即将要提交到本地仓库的地方）
2. 提交方式
   1. 提交当前文件夹的所有内容到暂存区`git add .`
   1. 提交指定内容到暂存区，例如`git index.html`
   1. 在 vscode 中，是否 add 能够显示（A 为已提交，U 为未提交）
      1. ![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1637408859568-248a857c-6884-41ce-991a-a28d218168ca.png)
      1. ![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1637408864530-e0a97495-99a9-4ba2-82d5-cb6fea9fb91e.png)
3. 设置不被 add 的方法，创建`.gitignore`文件
   1. 注意，这个文件夹中是`git init` 过的
   2. 将不想被 add 的内容放入其中，这样 add .时也不会被放入暂存区了
      1. ![Image.png](https://cdn.nlark.com/yuque/0/2021/png)
   3. 常见的不需要提交的内容 node_modules
   4. 如果没有生效![image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1637636221487-dc65fee0-ffe1-4300-9097-ba7daaefb7bb.png)
   5. 拓展阅读[.gitignore](https://www.cnblogs.com/kevingrace/p/5690241.html)

### git commit -m ""

1. `git commit -m "理由" `会把已经标记为要提交的文件给提交到本地仓库，并给出理由（从暂存区放入本地仓库）
1. `git commit -v `也是提交，会自动打开编辑器，输入提交内容后，关闭编辑器即可
   1. 可以帮助我们回顾做了什么，也可以将提交理由写得更详细
   1. ![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1637457850278-48814af1-d45d-4937-afce-6267fd9b2d77.png)
   1. ![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1637457837767-5046c7c4-f8d3-406b-b190-93c819de5a93.png)
   1. ![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1637457857044-bf17a02b-1bb7-4e50-a491-9ed802b71c3b.png)

### 切换版本

1. `git reset --hard 版本号`
   1. 是 commit 的号码，可以是 6 位，也可以是 4 位，也可以是 7 位，只要是惟一的即可
   1. 运行 reset 命令前，一定要确保重要代码已经提交（commit）了，其他的会被删除
2. `git log` 查看提交的记录(退出只需要英文状态的 q 键)
   1. ![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1637457936889-a402fcb2-bb51-4027-840f-69e23808a7bb.png)
3. `git reflog`查看所有提交的版本，包括重置前的版本
   1. ![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1637458197536-ff775181-79cc-409d-9f62-54154fcccd76.png)
4. [让 log 更美观，更容易观看](https://coderwall.com/p/euwpig/a-better-git-log)

```bash
在命令行输入下面的命令(做一个alias)
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

- 查看`git lg`

![image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1639902663535-c3fa7995-db12-40d4-bb94-2aae9f3b0d6a.png)

- 查看每一行的变化`git lg -p`

![image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1639902787794-b9804036-229f-4995-9401-fea4b1017b35.png)

### 分支的创建、切换

1. `git branch x`创建分支 x （基于当前 commit 树枝长出的新树枝）
   1. ![image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1637458575453-4331fb0a-44c1-46c2-b484-545923113b68.png#clientId=ucfa6b177-44d4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=26&id=u9fe68f52&margin=%5Bobject%20Object%5D&name=image.png&originHeight=51&originWidth=520&originalType=binary&ratio=1&rotation=0&showTitle=false&size=21921&status=done&style=none&taskId=uedff9e86-5e38-4b3c-8d68-34b32f27627&title=&width=260)
2. `git branch`它会告诉你目前是在哪个分支（星号标记）
   1. ![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1637458334380-10d8fcfa-7f29-4c18-85e5-930069961db7.png)
3. `git checkout x`切换到 x 分支
   1. 切换分支，改变内容并提交后，跟原来的分支内容就不同了
   1. ![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1637459030637-d6992623-86ae-4b05-81c7-86bfcdd2126c.png#clientId=ucfa6b177-44d4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=372&id=ud99ced2e&margin=%5Bobject%20Object%5D&name=Image.png&originHeight=743&originWidth=775&originalType=binary&ratio=1&rotation=0&showTitle=false&size=152815&status=done&style=none&taskId=u994ba0a3-eed5-4391-aaaf-3a16d0bc46d&title=&width=387.5)

### 分支的合并、删除

1. `git merge 分支`
   1. 首先是进入想要保留的分支，然后选择要合并哪个分支
   1. ![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1637459343011-da5a8769-1864-46f5-b66f-7b15994d0fe5.png#clientId=ucfa6b177-44d4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=51&id=U92VQ&margin=%5Bobject%20Object%5D&name=Image.png&originHeight=101&originWidth=631&originalType=binary&ratio=1&rotation=0&showTitle=false&size=7393&status=done&style=none&taskId=ud2f0d040-4b93-4337-aea3-c69a5cd0613&title=&width=315.5)
2. 发现冲突
   1. ![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1637459426962-ceeae72c-0c84-41f7-ab70-5dfd983b0c6f.png#clientId=ucfa6b177-44d4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=249&id=otJdZ&margin=%5Bobject%20Object%5D&name=Image.png&originHeight=497&originWidth=644&originalType=binary&ratio=1&rotation=0&showTitle=false&size=23854&status=done&style=none&taskId=u6067c542-980e-4633-a5f3-485adf44c8e&title=&width=322)
3. 解决冲突
   1. 依次打开文件
   2. 搜索====
   3. 在上下两个部分中选择要保留的代码
   4. 删除不用的代码和==== >>>> <<<<这些标记
      1. ![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1637460926757-aff95baa-3c95-42b6-86f3-6169639e910d.png#clientId=ucfa6b177-44d4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=212&id=u4a957c9d&margin=%5Bobject%20Object%5D&name=Image.png&originHeight=424&originWidth=620&originalType=binary&ratio=1&rotation=0&showTitle=false&size=16628&status=done&style=none&taskId=u9c1d97cb-9e82-425f-9926-222e383de4c&title=&width=310)
   5. `git add`对应文件
   6. `git status -sb`解决下一个文件的冲突
   7. 直到没有冲突，运行`git commit`（不需要选项）
4. `git branch -d 分支`删除分支
   1. 可以同时删除多个分支
   1. ![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1637459111631-c04d4616-22ee-4a69-9c16-75801094b1a0.png#clientId=ucfa6b177-44d4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=46&id=LCpRZ&margin=%5Bobject%20Object%5D&name=Image.png&originHeight=92&originWidth=441&originalType=binary&ratio=1&rotation=0&showTitle=false&size=12207&status=done&style=none&taskId=uf7d8181d-45b8-444c-b39d-c3fcfd250e8&title=&width=220.5)
5. 查看操作历史`history`
   1. ![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1637460753841-e4d930e2-b9de-4dee-8cb5-bf4c3d63ec76.png#clientId=ucfa6b177-44d4-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=63&id=iZy1t&margin=%5Bobject%20Object%5D&name=Image.png&originHeight=125&originWidth=328&originalType=binary&ratio=1&rotation=0&showTitle=false&size=7239&status=done&style=none&taskId=ud5da4929-c29e-4f25-a2d8-8e68c1fbaf3&title=&width=164)
