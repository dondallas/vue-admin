/**
 * @author wxh on 2018/9/25
 * @copyright
 * @desc
 */

const resto_brand_mysql = require('../../service/mysql/resto_brand').RESTO_BRAND_CLIENT;

const shop_detail_model = resto_brand_mysql.import('../../service/mysql/resto_brand/schema/shop_detail.js');


exports.getShopDetailLIst = function (condition,pageSkip,pageSize,callback) {
    shop_detail_model.findAndCountAll({
        where: condition,
        raw:true,
        limit:pageSize,
        offset:pageSkip,
    }).then(function (result) {
        callback(null, result);
    }).catch(function (err) {
        callback(err);
    });
};
