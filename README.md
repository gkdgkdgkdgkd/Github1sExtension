中文 | [En](https://github.com/2293736867/Github1sExtension/blob/main/README_en.md)

# 1 Github1s扩展

一键在`VSCode`中打开`Github`仓库，灵感基于[github1s](https://github.com/conwnet/github1s)。

效果：

![](./image/1.png)

![](./image/2.png)

支持浏览器：

- `Chrome`/`Chromium`/`Brave`
- `FireFox`（请切换到`FireFox`分支）

# 2 安装

## 2.1 扩展安装

下载`Relase`页面的`Chrome.crx`安装即可（`Brave`由于安全限制原因请下载`Release`中的`Chrome.zip`并解压，并在插件管理界面选择`Load unpacked`安装）。

## 2.2 `CLI`安装

提供了`CLI`接口，下载`Release`页面中的`g1s.sh`放到指定的位置，添加一个别名：
```bash
alias g1s='sh xxxx/g1s.sh'
```
完成后即可通过`g1s`命令使用。

目前包含两种使用方式：

- 在本地仓库根目录直接输入`g1s`即可打开
- 输入`g1s 用户名 仓库名`也可以打开，比如打开本仓库的命令为`g1s 2293736867 Github1sExtension`

# 3 关于上线商店

有上线商店的计划，由于作者本人的原因可能不会上线那么快。

# 4 开源许可证

MIT

# 5 更新日志

# 2/21/2021

- V1.1
- 添加右键菜单以及基本的`CLI`
- 更新图标

# 2/13/2021

- 项目正式启动，V1.0 版本
- 扩展基础功能
