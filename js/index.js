$(function(){
    var curDateTime = new Date();
var nowYear = curDateTime.getFullYear(); //年
var nowMonth = curDateTime.getMonth(); //月（从0开始）
var nowDay = curDateTime.getDate(); //日
var nowDayOfWeek = curDateTime.getDay(); //星期几 (0 ~ 6)
var datamap = [1, 2, 3]; //签到的日期(默认从0开始)     
var monthFirst = new Date(nowYear, nowMonth, 1).getDay(); //获取当月的第一天是星期几

var lastmonthfianlday = new Date(nowYear, nowMonth, 0).getDate(); //获取上个月的最后一天是几号
var d = new Date(nowYear, (nowMonth + 1), 0) //当月最后一天
var totalDay = d.getDate(); //获取当前月的天数
var span = $(".calendarList li span");

for (var i = 0; i < totalDay; i++) {
    span.eq(i + monthFirst).html(i + 1);
    /*  for (var j = 0; j < datamap.length; j++) {
        if (i == datamap[j]) {
           
            li.eq(i + monthFirst).addClass('checked');
        }
    } */


}

/* for (var m = monthFirst - 1; m >= 0; m--, lastmonthfianlday--) {
    span.eq(m).html(lastmonthfianlday).css("color", "#f00");
} */
var dd = 1;
var allday = totalDay + monthFirst;
for (var n = allday; n < span.length; n++, dd++) {
    span.eq(n).html(dd).css("color", "#f00");
}

$("#now_month").html(nowMonth + 1);

$('#btn').click(function () {
    for (var i = 0; i < totalDay; i++) {
        if (i === nowDay) {
            li.eq(i + monthFirst - 1).addClass('checked');
            return;
        }
    }
})
//var d=new Date(2017,4,1) ==> Mon May 01 2017 00:00:00 GMT+0800 (中国标准时间) 2017年的5月1号
//var a=new Date(2017,4,0) ==> Sun Apr 30 2017 00:00:00 GMT+0800 (中国标准时间) 2017年4月30号
//c = new Date(2017, 5, 0) ==>Wed May 31 2017 00:00:00 GMT+0800 (中国标准时间)   2017年5月31号
})