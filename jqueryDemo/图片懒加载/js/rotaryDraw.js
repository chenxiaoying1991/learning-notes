// obj当前这一项 
// jsn传进来的是一个对象

function turntableDraw(obj, jsn) {
	"use strict";
	this.draw = {};
	this.draw.obj = $(obj);
	this.draw.objClass = $(obj).attr("class");
	 this.draw.newClass = "rotary"+"new"+parseInt(Math.random()*1000);
	console.log(Math.random() * 1000)
	// _jiaodu通过当前多少份 得到的角度
	var _jiaodu = parseInt(360 / jsn.share);
	console.log(_jiaodu)
	// weeks有值的话 就是对应的值 没有值的话就是默认的4
	var _yuan = 360 * (jsn.weeks || 4);
	console.log(_yuan)
	var _str = "";
	var _speed = jsn.speed || "2s";
	var _velocityCurve = jsn.velocityCurve || "ease";
	var _this = this;
	// 目前jsn的share是36
	for (var i = 1; i <= jsn.share; i++) {
		_str += "." + this.draw.newClass + i + "{";
		_str += "transform:rotate(" + ((i - 1) * _jiaodu + _yuan) + "deg);";
		_str += "-ms-transform:rotate(" + ((i - 1) * _jiaodu + _yuan) + "deg);";
		_str += "-moz-transform:rotate(" + ((i - 1) * _jiaodu + _yuan) + "deg);";
		_str += "-webkit-transform:rotate(" + ((i - 1) * _jiaodu + _yuan) + "deg);";
		_str += "-o-transform:rotate(" + ((i - 1) * _jiaodu + _yuan) + "deg);";
		_str += "transition: transform " + _speed + " " + _velocityCurve + ";";
		_str += "-moz-transition: -moz-transform " + _speed + " " + _velocityCurve + ";";
		_str += "-webkit-transition: -webkit-transform " + _speed + " " + _velocityCurve + ";";
		_str += "-o-transition: -o-transform " + _speed + " " + _velocityCurve + ";";
		_str += "}";
		_str += "." + this.draw.newClass + i + "stop{";
		_str += "transform:rotate(" + ((i - 1) * _jiaodu) + "deg);";
		_str += "-ms-transform:rotate(" + ((i - 1) * _jiaodu) + "deg);";
		_str += "-moz-transform:rotate(" + ((i - 1) * _jiaodu) + "deg);";
		_str += "-webkit-transform:rotate(" + ((i - 1) * _jiaodu) + "deg);";
		_str += "-o-transform:rotate(" + ((i - 1) * _jiaodu) + "deg);";
		_str += "}";
	};
	$(document.head).append("<style>" + _str + "</style>");
	console.log(_speed)
	_speed = _speed.replace(/s/, "") * 1000;
	console.log(_speed)
	this.draw.startTurningOk = false;
	this.draw.goto = function (ind) {
		if (_this.draw.startTurningOk) {
			return false
		};
		console.log(_this.draw.objClass)
		_this.draw.obj.attr("class", _this.draw.objClass + " " + _this.draw.newClass + ind);
		_this.draw.startTurningOk = true;
		setTimeout(function () {

			console.log(_this.draw.objClass + " " + _this.draw.newClass + ind + "stop")
			_this.draw.obj.attr("class", _this.draw.objClass + " " + _this.draw.newClass + ind + "stop");
			if (jsn.callback) {
				_this.draw.startTurningOk = false;
				jsn.callback(ind);
			};
		}, _speed + 10);
		return _this.draw;
	};
	return this.draw;
	console.log(this.draw)
};
