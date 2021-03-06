/**
 * @author wxh on 2017/11/20
 * @copyright
 * @desc
 */

const mongoose = require('mongoose');

const config = require('../../config');

mongoose.Promise = global.Promise;

if(!config && !config.mongodb && !config.mongodb.admin){
    throw new Error('please provide mongodb config');
}

const ADMIN_CONFIG = config.mongodb.admin;


const client = mongoose.createConnection(ADMIN_CONFIG.url, {useNewUrlParser:true});

client.on('connected',function(err){
    if(err){
        console.log('连接数据库失败：'+err);
    }else{
        console.log('数据库成功连接到：'+ADMIN_CONFIG.url);
    }
});

client.on('error', function(err){
    console.error(err.stack);
});

const administrator         = require('./schema/administrator');
const rolePerm              = require('./schema/rolePerm');

client.model('Administrator', administrator.AdministratorSchema, 'administrator');
client.model('Role', rolePerm.RoleSchema, 'role');
client.model('Perm', rolePerm.PermSchema, 'perm');
client.model('RolePerm', rolePerm.RolePermSchema, 'role_perm');

exports.client = client;
exports.mongoose = mongoose;
exports.ObjectId = mongoose.Types.ObjectId;