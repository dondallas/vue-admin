#所使用的主要技术
- express.js API框架
- sequelize.js mysql、sqlite在node.js下的ORM框架
- mongoose.js Mongodb在node.js下的ORM框架


#项目结构
- bin 程序的启动入口
- config 配置文件存放地
- controller 控制器
- lib 所有自定义模块
- middlware 全局中间件
- pubblic 公共模块
 |- model 业务模型层
 |- service 底层服务
- resource 资源存放地
- router 路由映射

#####指令说明添加子模块及主程序依赖
> cd public/ & npm install
> cd ../ & npm install

#####数据初始化
- 在public/service/config  文件下配置好  mongodb、redis、qiniu


#程序启动

####NODE_ENV环境变量，控制加载配置
#####参数说明
- NODE_ENV存在三种值，"dev"/"pre"/"pro"
- dev 表示加载开发环境配置，对应的文件是 /config/dev/index.js
- pre 表示加载预发布环境配置，对应的文件是 /config/pre/index.js
- pro 表示加载生产环境配置，对应的文件是 /config/pro/index.js

#####使用方式
> npm run dev #开发环境
> npm run build #打包前端
> npm run pre #测试环境
> npm run pro #生产环境

##如果觉得有用欢迎各位微信赞赏

![Aaron Swartz](weix.png)



