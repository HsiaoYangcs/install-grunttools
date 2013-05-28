@echo off
echo 是否已配置node环境变量[Y/N]
set /p UserSelection=请选择：
if /I "%UserSelection%"=="Y" goto begin
if /I "%UserSelection%"=="N" exit
:begin
echo 开始安装压缩包选择[Y/N]
set /p UserSelection=请选择：
if /I "%UserSelection%"=="Y" goto next
if /I "%UserSelection%"=="N" exit
:next
echo 开始解包...
start grunt-init --force f2eweb_template/
echo 是否已完成解压安装任务[Y/N]
set /p UserSelection=请选择：
if /I "%UserSelection%"=="Y" goto next1
if /I "%UserSelection%"=="N" exit
:next1
echo 开始安装工具包...
start npm install
echo 完成工具插件后，可以运行app文件夹下grunt命令
::pause
echo.
echo.
echo 安装完成,按下回车[Enter]结束
@pause
goto shanchu
::set /p UserSelection=请选择：
::if /I "%UserSelection%"=="Y" goto shanchu
::if /I "%UserSelection%"=="N" exit
:shanchu
del *.txt /f
rd f2eweb_template /s /q
del %0
::rename %0 "installTemplate.bat.bak"
:End