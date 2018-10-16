/**
 * @author wxh on 2018/9/20
 * @copyright
 * @desc
 */

const restoBrand = require('../../controller/restoBrand');

exports.map = function(app){
    app.get('/resto/brand/shop/detail/list',  restoBrand.getShopDetailLIst);
};