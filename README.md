# water-use
一些组件及 hooks


## 快速安装
> 目前不支持打包版

```
$ yarn add @fe6/water-use
```

## 功能

- 组件

  - [X] ***a-layout-default*** 带头部带导航带退出的布局
  - [X] ***a-layout-default-content*** 统一内容样式的封装
  - [X] ***a-layout-simple*** 简单布局
  - [X] ***a-layout-simple-content*** 统一内容样式的封装，自带滚动条
  - [X] ***a-layout-box*** 只有一个 router-view 的封装
  - [X] ***a-forbidden*** 无权限组件
  - [X] ***a-icon*** [字节 icon](https://iconpark.oceanengine.com/official) 的封装
  - [X] ***a-not-page*** 404 的封装

- router

  - [X] 全局路由配置，路由守卫，以及添加路由的方法
  - [X] LAYOUT_DEF 默认布局的导入
  - [X] LAYOUT_SIMPLE  简单布局的导入
  - [X] LAYOUT_BOX  box 布局的导入
  - [X] PAGE_NOT_FOUND_ROUTE 路由的导入

- vuex

  - [X] 全局的 vuex 数据，菜单，账户信息，全局loading状态
  - [X] 通过 setupStore 合并 module 

- axios

  - [X] 暴露的 ***createAxios*** 方法统一 ajax 配置

- hooks

  - [X] ***use-message*** 统一的提示封装
  - [X] ***use-page*** 统一的跳转封装， useGo(当前项目跳转)，siteHref(外链跳转), siteReload(刷新)
  - [X] ***use-scroll-to*** 从某一个元素滚动到某一元素
  - [X] ***error*** 打印
  - [X] ***env*** 获取环境变量，以及当前环境
