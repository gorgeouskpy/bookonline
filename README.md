# bookonline
这是一个前后端分离的网上图书分享/书城应用。

## 前端
Web服务器采用Apache，只提供前端页面。
前端使用Vue构建多页面。不使用node，利用后端api返回的值进行选择渲染。

## 应用层
直接运用python架设。
应用层走在http协议上。利用python开发restful API。

## 数据库
**Redis** 利用Redis进行会话缓存。

**mySql** 利用Mysql RDS 型数据库持久化用户信息。 Table 的设计至少符合第二范式。

本应用中所含的电子书仅用于演示作用，若侵犯了您的权利，请联系删除。
