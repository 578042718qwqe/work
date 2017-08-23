/**
 * Created by wuzebo on 2017/8/22.
 */
define(["jquery","cookie"],function ($){
    var add = function (x,y){
        return x+y;
    };
    function youk() {
       $("body").append("敢爱敢恨敢失去")
    }
    function sssj() {
        $.cookie("like","12345")
    }
    return {
        add: add,
        youk:youk(),
        sssj:sssj()
    };
});