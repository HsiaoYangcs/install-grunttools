@echo off
echo �Ƿ�������node��������[Y/N]
set /p UserSelection=��ѡ��
if /I "%UserSelection%"=="Y" goto begin
if /I "%UserSelection%"=="N" exit
:begin
echo ��ʼ��װѹ����ѡ��[Y/N]
set /p UserSelection=��ѡ��
if /I "%UserSelection%"=="Y" goto next
if /I "%UserSelection%"=="N" exit
:next
echo ��ʼ���...
start grunt-init --force f2eweb_template/
echo �Ƿ�����ɽ�ѹ��װ����[Y/N]
set /p UserSelection=��ѡ��
if /I "%UserSelection%"=="Y" goto next1
if /I "%UserSelection%"=="N" exit
:next1
echo ��ʼ��װ���߰�...
start npm install
echo ��ɹ��߲���󣬿�������app�ļ�����grunt����
::pause
echo.
echo.
echo ��װ���,���»س�[Enter]����
@pause
goto shanchu
::set /p UserSelection=��ѡ��
::if /I "%UserSelection%"=="Y" goto shanchu
::if /I "%UserSelection%"=="N" exit
:shanchu
del *.txt /f
rd f2eweb_template /s /q
del %0
::rename %0 "installTemplate.bat.bak"
:End