install-grunttools
==================

前端脚手架

INSTALL-GRUNTTOOLS
│  installTemplate.bat
│  开局说明1.txt
│  
├─apps
│  │  gruntTask.bat
│  │  gruntWatch.bat
│  │  
│  └─node
│                              
└─f2eweb_template
    │  README.md
    │  rename.json
    │  template.js
    │  
    └─root

installTemplate.bat 安装脚本

f2eweb_template简单介绍下里面内容：
template.js 主模板文件，非常重要！里面主要内容有：项目创建时需要回答的问题，项目依赖的Grunt模块（根据这个生成package.json）
rename.json 针对当前模板的目录/文件重命名规则
root/ 这个目录里的文件，通过该模板生成项目结构时，会将root目录下的文件都拷贝到项目中去

apps
gruntTask.bat  打包合并任务脚本
gruntWatch.bat 任务监听脚本

2.创建项目之前，配置node环境变量（${path}\apps\node目录路径配置到Windows环境中）
环境变量 编辑path变量添加安装包中node文件夹路径“${path}\apps\node”

3. 进入实实施
假设我们当前在目录F2EWEBPRO下，f2eweb_template为F2EWEBPRO目录当前仅有的内容。

运行installTemplate.bat脚本根据提示安装

安装结束后可在apps目录下运行（gruntTask.bat、gruntWatch.bat）体验grunt工具实验效果