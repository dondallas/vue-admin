/**
 * @author wxh on 2018/9/20
 * @copyright
 * @desc
 */

const restoBrandModel = require('../../public/model/restoBrand/index');

exports.getShopDetailLIst = function (req, res, next) {

    let pageSkip = req.query.page_skip,
        pageSize = req.query.page_size;

    let condition = {};

    if(req.query.content){
        condition = {
            $or : [
                {admin_name : {$regex : req.query.content,$options: '$i'}},
                {admin_mobile : {$regex : req.query.content,$options: '$i'}},
            ]
        }
    }
    console.log('======',pageSkip,pageSize)
    restoBrandModel.getShopDetailLIst(condition,pageSkip,pageSize,(err,rlve)=>{
        if(err){
            return next(err);
        }

        res.json({
            flag: 0,
            error: '',
            result: {
                msg: '',
                data:rlve
            }
        });
    })
};