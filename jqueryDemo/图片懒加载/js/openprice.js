window.addEventListener('DOMContentLoaded', function () {
    if (!((/Android|webOS|ipad|iPhone|BlackBerry|IEMobile|Opera Mini/i).test(navigator.userAgent))) {
        document.documentElement.innerHTML = "<div style='font-size:14px;'><p>请使用手机打开此页面哦~</p></div>";
    }
});

var termNumber;
var loginId;
var token;
// 页面头部的开奖状态
var $prizeState = $(".js-prizeState");
// 页面中开奖的期数
var $prizeNumber = $("#prizeNumber");
$prizeNumber.html(termNumber);
// 下面中奖号码对应的hash
var $digitsNum = $(".js-digits-num li");
// 当前开奖状态
var drawStatusNum = '';

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};
termNumber = GetQueryString("termNumber");
loginId = GetQueryString("loginId");
token = GetQueryString("token");

var $number = $(".js-num");
var u = -65;

function resultPosi(ele, cur, isStop) {
    var eleIndex = ele.index();
    // 停止一个滚动
    if (cur.number) {
        eleIndex == 5 ? ele.addClass('num-red') : ele.addClass('num');
        var y = (parseInt(cur.number) * u);
        ele.css('backgroundPositionY', String(y) + 'px');
        $digitsNum.eq(eleIndex).find('p.number').html(cur.hash);
        $digitsNum.eq(eleIndex).find('a').attr('href', '/award_information?hash=' + cur.hash + '&loginId=' + loginId + '&token=' + token);
    }else{
        eleIndex == 5 ? ele.removeClass('num-red') : ele.removeClass('num');
        $digitsNum.eq(eleIndex).find('p.number').html('---');
        $digitsNum.eq(eleIndex).find('a').attr('href', '###');
        ele.css('backgroundPositionY','0px');
    }
}

// var hostUrl = "http://api.luckywin.io";
 var hostUrl = "http://php-api.btcwealth.net";

var dataq = {
    "code": 200,
    "message": "成功",
    "data": {
        "drawStatus": 0,
        "drawTime": "14:44",
        "drawDetail": [{
            "number": 0,
            "hash": ""
        }, {
            "number": 0,
            "hash": ""
        }, {
            "number": 0,
            "hash": ""
        }, {
            "number": 0,
            "hash": ""
        }, {
            "number": 0,
            "hash": ""
        }, {
            "number": 0,
            "hash": ""
        }]
    }
}

setTimeout(() => {
    dataq = {
        "code": 200,
        "message": "成功",
        "data": {
            "drawStatus": 1,
            "drawTime": "14:44",
            "drawDetail": [{
                "number": 3,
                "hash": "gffddghggf"
            }, {
                "number": 37,
                "hash": "dsada"
            }, {
                "number": 0,
                "hash": ""
            }, {
                "number": 0,
                "hash": ""
            }, {
                "number": 0,
                "hash": ""
            }, {
                "number": 0,
                "hash": ""
            }]
        }
    }
}, 4000);


setTimeout(() => {
    dataq = {
        "code": 200,
        "message": "成功",
        "data": {
            "drawStatus": 2,
            "drawTime": "14:44",
            "drawDetail": [{
                "number": 3,
                "hash": "gffddghggf"
            }, {
                "number": 37,
                "hash": "dsada"
            }, {
                "number": 49,
                "hash": "gffddghggf"
            }, {
                "number": 1,
                "hash": "hjhjhjhjhjhjh"
            }, {
                "number": 4,
                "hash": "hjhjhjhjhjhjhdsadsa"
            }, {
                "number": 9,
                "hash": "fnsklanflskanflka"
            }]
        }
    }
}, 9000);

setTimeout(() => {
    dataq = {
        "code": 200,
        "message": "成功",
        "data": {
            "drawStatus": 0,
            "drawTime": "14:44",
            "drawDetail": [{
                "number": 0,
                "hash": ""
            }, {
                "number": 0,
                "hash": ""
            }, {
                "number": 0,
                "hash": ""
            }, {
                "number": 0,
                "hash": ""
            }, {
                "number": 0,
                "hash": ""
            }, {
                "number": 0,
                "hash": ""
            }]
        }
    }
}, 13000);

setTimeout(() => {
    dataq = {
        "code": 200,
        "message": "成功",
        "data": {
            "drawStatus": 2,
            "drawTime": "14:44",
            "drawDetail": [{
                "number": 3,
                "hash": "gffddghggf"
            }, {
                "number": 37,
                "hash": "dsada"
            }, {
                "number": 49,
                "hash": "gffddghggf"
            }, {
                "number": 1,
                "hash": "hjhjhjhjhjhjh"
            }, {
                "number": 4,
                "hash": "hjhjhjhjhjhjhdsadsa"
            }, {
                "number": 8,
                "hash": "fnsklanflskanflka"
            }]
        }
    }
}, 19000);




countDown()
function countDown() {
    $.post(hostUrl + '/v1/api/draw', {
        "termNumber": '20180016',
        "loginId": loginId,
        "token": token
    }, function (data) {
        data = dataq;    
        console.log(data)   
        if (data.code == 200) {
            //定义dataAll方便后面的操作
            var dataAll = data.data;
            drawStatusNum = dataAll.drawStatus;
            drawStatusNum == 0 ? $prizeState.html('开奖时间' + dataAll.drawTime) : drawStatusNum == 1 ? $prizeState.html('开奖中') : drawStatusNum == 2 ? $prizeState.html('已完成') : $prizeState.html('---');
            if (drawStatusNum == 2) {
                clearInterval(timeoutDown);
            };   

            for (var i = 0, len = dataAll.drawDetail.length; i < len; i++) {
                var cur = dataAll.drawDetail[i];
                if (cur.number > 0) {
                    resultPosi($number.eq(i), cur, 1);
                } else {
                    resultPosi($number.eq(i), cur);
                }
            };
        }
    }, "json");
}

// 30s的倒计时
var start = 5;
var step = -1;
function count() {
    start += step;
    if (start < 0) {
        start = 5;
        if (drawStatusNum == 2) {
            return;
        }
        countDown();
    }
}
var timeoutDown = setInterval("count()", 1000);

function loaded() {
    pullDownEl = document.getElementById('pullDown');
    pullDownOffset = pullDownEl.offsetHeight;
    pullUpEl = document.getElementById('pullUp');
    pullUpOffset = pullUpEl.offsetHeight;

    myScroll = new iScroll('wrapper', {
        scrollbarClass: 'myScrollbar',
        preventDefault: false,
        useTransition: false,
        topOffset: pullDownOffset,
        onRefresh: function () {
            if (pullDownEl.className.match('loading')) {
                pullDownEl.className = '';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
            } else if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '';
            }
        },
        onScrollMove: function () {
            if (this.y > 5 && !pullDownEl.className.match('flip')) {
                pullDownEl.className = 'flip';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '松手开始更新...';
                this.minScrollY = 0;
            } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                pullDownEl.className = '';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '';
                this.minScrollY = -pullDownOffset;
            }
        },
        onScrollEnd: function () {
            if (pullDownEl.className.match('flip')) {
                pullDownEl.className = 'loading';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';
                countDown();
                start = 30;
                myScroll.refresh();
            }
        },
        onTouchEnd: function () {
            pullDownEl.querySelector('.pullDownLabel').innerHTML = '刷新成功...';
        }

    });
    setTimeout(function () {
        document.getElementById('wrapper').style.left = '0';
    }, 800);
}
document.addEventListener('touchmove', function (e) {
    e.preventDefault();
}, false);
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(loaded, 200);
}, false);