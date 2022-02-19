@echo off
echo "-------Begin-------"
set /p msg=请输入提交注释:
call npm run build
git status
git add .
git commit -m %msg%
git pull origin master
git push origin master
echo 推送成功：【%msg%】
echo "--------End!--------"
pause