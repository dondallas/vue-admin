/**
 * @author wxh on 2017/11/16
 * @copyright
 * @desc
 */

module.exports = {
    sqlite: {
        test: {
            host: 'sqlite/test-dev.db',
            port: 1433,
            user: '',
            password: '',
            database: 'test-dev.db'
        }
    },
    mysql: {     //测试数据库
        resto_brand: {
            host: '',               //地址
            port: 3306,
            username: 'root',
            password: '',
            database: '',
        }
    },
    mongodb: {
        admin: {
            url: '',            //地址
            password: '',       //可以不配置
            db: ''              //可以不配置
        },
    },

    redis: {
        restoplus: {
            host: '',           //地址
            port: 6379,
            password: null,
            db: 0
        }
    },

    /**
     * 七牛云配置
     * */
    qiniu: {
        accessKey: '',
        secretKey: '',
        oss: {
            bucket: '',
            host: ''
        }
    }
};