/*
 * @Descripttion: 
 * @version: 
 * @Author: khdjj
 * @Date: 2019-08-05 15:44:45
 * @LastEditors: khdjj
 * @LastEditTime: 2019-08-11 11:32:25
 */
exports.format = function(){
    var date = new Date();
    var y = date.getFullYear(),
        m = date.getMonth()+1,
        d = date.getDate(),
        h = date.getHours(),
        s = date.getMinutes();
    return y+"-"+m+"-"+d+" "+h+":"+s;
        
}