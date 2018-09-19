window.addEventListener('DOMContentLoaded', function () {
    if (!((/Android|webOS|ipad|iPhone|BlackBerry|IEMobile|Opera Mini/i).test(navigator.userAgent))) {
        document.documentElement.innerHTML = "<div style='font-size:14px;'><p>请使用手机打开此页面哦~</p></div>";
    }
});
// 获取参数
var loginIdNum = "";
var tokenNum = "";
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};
loginIdNum = GetQueryString("loginId");
tokenNum = GetQueryString("token");

var $firstNumber = $("#first-number");
var $thousandNumber = $("#thousand-number");
// var hostUrl = "www.production.com";
var hostUrl = "http://php-api.btcwealth.net";
$(function(){   
    $.post(hostUrl+'/v1/api/task',{"loginId":loginIdNum,"token":tokenNum},function(data){     
        if(data.code == 200){
            var dataNum = data.data;
            $firstNumber.html(dataNum.luckywin1_count);
            $thousandNumber.html(dataNum.luckywin10000_count);
            dataNum.luckywin1_flag == 1 ? $("#first-com").show() : $("#first-com").hide();
            dataNum.luckywin10000_flag == 1 ? $("#masks-com").show() : $("#masks-com").hide();
        }
        
    },"json")
})

function taskRealTime(){
    $.post(hostUrl+'/v1/api/task',{"loginId":loginIdNum,"token":tokenNum},function(data){     
        if(data.code == 200){
            var dataNum = data.data;
            $firstNumber.html(dataNum.luckywin1_count);
            $thousandNumber.html(dataNum.luckywin10000_count);
            dataNum.luckywin1_flag == 1 ? $("#first-com").show() : $("#first-com").hide();
            dataNum.luckywin10000_flag == 1 ? $("#masks-com").show() : $("#masks-com").hide();
        }
        
    },"json")
}
taskRealTime();

var time1;
time1 = window.setInterval(taskRealTime, 3000);


// 星期页面数据
var arr = [
    {week:'一',day:'07月01日',isC:false,isO:true},
    {week:'二',day:'07月01日',isC: true,isO:true},
    {week:'三',day:'07月01日',isC:false,isO:true},
    {week:'四',day:'07月01日',isC:true,isO:true},
    {week:'五',day:'07月01日',isC:false,isO:true},
    {week:'六',day:'07月01日',isC:true,isO:false},
    {week:'日',day:'07月01日',isC:false,isO:false}
]
var $weekTop = $('.js-week-top');   // 上面的星期box
var $weekBot = $('.js-week-bot');   // 下面的星期box
var oHtml = '';
var cHtml = '';

for(var i = 0,len = arr.length;i<len;i++){
    var cur = arr[i];
    var cClass = '';
    var mClass = '';
    var sClass = '';
    if(i<4){
        if(cur.isC){
            cClass = "show-c";
        }
        if(cur.isO){
            cClass += "show-m"
        }
        oHtml += '<li class='+cClass+'>'+
        '<p>星期'+cur.week+'</p>'+
        '<p>'+cur.day+'</p>'+
        '<i class="mask-week"></i>'+
        '<i class="week-title"></i>'+
        '</li>';
    }else{
        if(cur.isC){
            cClass = 'show-c';
        }
        if(cur.isO){
            cClass += 'show-m'
        }
        cHtml += '<li class='+cClass+'>'+
        '<p>星期'+cur.week+'</p>'+
        '<p>'+cur.day+'</p>'+
        '<i class="mask-week"></i>'+
        '<i class="week-title"></i>'+
        '</li>';
    }
}
$weekTop.html(oHtml);
$weekBot.html(cHtml);

function comAjax(u, data, callback) {
                data['xhCode'] = XHCODE;
                data['userCode'] = USERCODE;
                $.ajax({
                    url: u,
                    data: data,
                    type: 'post',
                    dataType: "json",
                    success: function (data) {
                        callback(data);
                    }
                })
            }
            comAjax('/menstrual/getStartDate', {
                date: ymList[swiperIndex + 1],
                menstrualCycle: menstrualCycle,
                menstrualLastDate: menstrualLastDate
            }, function (res) {
                // console.log(res);
                if (res.state == 2) {
                    var sTime = res.time;
                    console.log(res.menstrualListTime.menstrualListDays);
                    
                    $('.js-xh-calendar-view-' + (swiperIndex + 1)).xhInitCalendar({
                        calendarTimeYear: Number(sTime.substring(0, 4)),
                        calendarTimeMonth: Number(sTime.substring(5, 7)),
                        menstrual: res.date.n_day,
                        ovulate: res.date.ovulation,
                        menstrualListTime: res.menstrualListTime.menstrualListDays,
                    });
                }
            });
