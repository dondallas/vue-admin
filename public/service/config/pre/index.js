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
    mysql: {
        test: {
            host: 'newpos.docker.restoplus.cn',
            port: 3306,
            username: 'root',
            password: '123456',
            database: 'pos-admin',
        }
    },
    mongodb: {
        test: {
            url: 'mongodb://newpos.docker.restoplus.cn:27017/test',
            password: '',
            db: ''
        },
        admin: {
            url: 'mongodb://newpos.docker.restoplus.cn:27017/backend',
            password: '',
            db: ''
        },
    },

    redis: {
        restoplus: {
            host: 'newpos.docker.restoplus.cn',
            port: 6379,
            password: null,
            db: 0
        }
    },
};