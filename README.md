# 代码结构

+-- build/                                  ---打包后文件目录
+-- config/                                 ---npm run eject 后的配置文件目录
+-- node_modules/                           ---package.json中所配置组件所有的依赖下载的目录
+-- public/
|   --- index.html							---首页入口html文件
|   --- favicon.ico                         ---网站头像
|   --- manifest.json                       ---应用配置信息包括应用的名称、入口页面地址、版本信息等
|   --- npm.json							---echarts测试数据
|   --- weibo.json							---echarts测试数据
+-- scripts                                 ---执行命令文件
+-- src/                                    ---核心代码目录
|   +-- axios                               ---http请求存放目录
|   |    --- config.js                      ---baseUrl配置，接口地址配置
|   |    --- tools.js                       ---网络请求封装post，get等
|   |    +-- moduleName                     ---对应的模块名称文件夹
|   |    |   --- index.js                   ---对应模块的网络请求处理文件（调用config.js和tools.js，请求拦截器回掉，数据转换等处理）
|   +-- components                          ---各式各样的组件存放目录
|   |    +-- animation                      ---动画组件
|   |    |    --- ...
|   |    +-- charts                         ---图表组件
|   |    |    --- ...
|   |    +-- dashboard                      ---首页组件
|   |    |    --- ...
|   |    +-- forms                          ---表单组件
|   |    |    --- ...
|   |    +-- pages                          ---页面组件
|   |    |    --- ...
|   |    +-- tables                         ---表格组件
|   |    |    --- ...
|   |    +-- ui                             ---ui组件
|   |    |    --- ...
|   |    --- BreadcrumbCustom.jsx           ---面包屑组件
|   |    --- HeaderCustom.jsx               ---顶部导航组件
|   |    --- Page.jsx                       ---页面容器
|   |    --- SiderCustom.jsx                ---左边菜单组件
|   +-- action                              ---redux action目录
|   |    --- moduleNameAction.js            ---各个模块的action处理方法
|   +-- reducer                             ---redux reducer目录
|   |    --- index.js                       ---reducer 统一处理入口
|   |    --- moduleNameAction.js            ---各个模块的reducer处理方法
|   +-- store                               ---redux store目录
|   |    --- ConfigureStore.js              ---管理所有的store
|   +-- constants                           ---常量配置目录（系统常量配置，各个模块的件类型type配置）
|   |    ---constant.js                     ---应用常量配置
|   |    ---moduleNameType.js               ---各个模块的事件类型type配置
|   +-- routes                              ---路由地址的相关配置
|   |    ---config.js                       ---路由地址的配置文件
|   |    ---Bundle.js                       ---按需加载（代码拆分）
|   |    +-- pages                          ---页面存放目录
|   +-- resources                           ---资源文件目录
|   +-- style                               ---项目的样式存放目录，主要采用less编写
|   +-- utils                               ---工具文件存放目录
|   --- App.js                              ---组件入口文件
|   --- index.js                            ---项目的整体js入口文件，包括路由配置等
--- .env                                    ---启动项目自定义端口配置文件
--- .eslintrc                               ---自定义eslint配置文件，包括增加的react jsx语法限制
--- package.json

# ps:
react-router4.0  路由管理 提供了导航功能的组件
react-redux  用来统一管理项目中的数据状态（state）
antd   react组件库
axios  Axios 是一个基于 promise 的 HTTP 库（拦截请求和响应，取消请求，支持 Promise API，执行多个并发请求）
       (Promise最大的好处是在异步执行的流程中，把执行代码和处理结果的代码清晰地分离;有若干个异步任务，需要先做任务1，如果成功后再做任务2，任何任务失败则不再继续并执行错误处理函数)
react-hot-loader  使用 react 编写代码时，能让修改的部分自动刷新
eslint ESLint 是一个语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码
Immutable 防止对元数据的篡改（对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象）

# react-admin作者地址：https://github.com/yezihaohao/react-admin
