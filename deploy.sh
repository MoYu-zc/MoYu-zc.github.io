
# 确保脚本抛出遇到的错误
set -e


# 部署到自定义域域名
echo 'www.moyuzc.cn' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
#git push -f git@github.com:MoYu-zc/MoYu-zc.github.io.git master

git push -f https://github.com/MoYu-zc/MoYu-zc.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:MoYu-zc/MoYu-zc.github.io.git master:gh-pages

# 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