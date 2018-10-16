/**
 * @author wxh on 2018/9/21
 * @copyright
 * @desc
 */
const async = require('async');


const adminMongodb = require('../../service/mongodb/admin').client;

const Administrator = adminMongodb.model('Administrator');
const Role = adminMongodb.model('Role');
const Perm = adminMongodb.model('Perm');
const RolePerm = adminMongodb.model('RolePerm');


exports.saveAdministrator = function (content,callback) {
    var monInsert = new Administrator(content);
    monInsert.save(callback);
};
exports.saveRole = function (content,callback) {
    var monInsert = new Role(content);
    monInsert.save(callback);
};
exports.savePerm = function (content,callback) {
    var monInsert = new Perm(content);
    monInsert.save(callback);
};
exports.saveRolePerm = function (content,callback) {
    var monInsert = new RolePerm(content);
    monInsert.save(callback);
};

exports.removeAdministrator = function (content,callback) {
    Administrator.remove(content, callback)
};
exports.removeRole = function (content,callback) {
    Role.remove(content, callback)
};
exports.removePerm = function (content,callback) {
    Perm.remove(content, callback)
};
exports.removeRolePerm = function (content,callback) {
    RolePerm.remove(content, callback)
};
