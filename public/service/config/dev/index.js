/**
 * @author wxh on 2017/11/16
 * @copyright
 * @desc
 */

module.exports = {
    mysql: {    //测试数据库
        resto_brand: {
            host: '',
            port: 3306,
            username: 'root',
            password: '',
            database: '',
        }
    },
    mongodb: {
        admin: {
            // url: 'mongodb://newpos.docker.restoplus.cn:27017/backend',
            url: 'mongodb://﻿www.logoxh.cn:27017/backend',
            password: '',
            db: ''
        },
    },

    redis: {
        restoplus: {
            host: '',
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