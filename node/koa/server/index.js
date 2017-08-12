
var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(a){
    //获取第一页分页列表
    this.pagesList = function(pages,searchKey, token){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/project/lists/' + pages + '/8?searchKey='+searchKey,
            headers : {
                token : token
            }
        };
        return request(options);
    };
    //获取图片流
    this.captcha = function(argvs){
        var options = {
            method : 'get',
            timeout : 3000,
            uri : config()['rurl'] + 'project/' + argvs + '/logo',
            headers : {}
        };
        return request(options);
    };

    //分页列表
    this.pageSizes = function(token,searchKey, page){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/project/lists/' + page + '/8?searchKey='+searchKey,
            headers : {
                token : token
            }
        };
        return request(options);
    };
    //总页数
    this.sizes = function(searchKey,token){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/project/count?searchKey='+searchKey,
            headers : {
                token : token
            }
        };
        return request(options);
    };
    //是否关注
    this.addFollow = function(argvs,token){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/project/follow',
            form : argvs,
            headers : {
                token : token
            }
        };
        return request(options);
    };
    this.deleteFollow = function(delFollow,token){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/project/delFollow',
            form : delFollow,
            headers : {
                token : token
            }
        };
        return request(options);
    };
    this.followList = function(token){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/user/follows',

            headers : {
                token : token
            }
        };
        return request(options);
    };
    this.sortList = function(argvs,token){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/user/follows/sortAndDel',
            form:argvs,
            headers : {
                token : token
            }
        };
        return request(options);
    };

    return this;
}
