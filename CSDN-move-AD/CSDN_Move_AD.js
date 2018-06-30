// ==UserScript==
// @name        CSDN去除广告侧边栏收起
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  去除CSDN中讨厌的广告
// @author       Logicr
// @match        https://blog.csdn.net/
// @match        *://blog.csdn.net/*


// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //阅读全文
    $('#btn-readmore').click();
    //右下
    $("#asideFooter").remove();
    $(".section").remove();//
    //
    $(".left_wrap").remove();
    //搜索框下面的大堆推荐
    $(".recommend-item-box*").next().remove();
    $(".recommend-item-box.csdn-tracking-statistics").remove();

    //底部广告
    $(".ad").remove();
    //顶部广告
    $(".advert-bg.advert-cur").remove();

    //右侧上广告
    $(".csdn-tracking-statistics.mb8.box-shadow").remove();
    //左边小工具竖条
    $(".meau-list").remove();

    //去掉整个右边
   // $("aside").remove();

    //悬浮举报按钮
    $(".meau-gotop-box").remove();
    //右边悬浮广告
    $(".box-box-default").remove();
    //文章底部的随机出现文章
    $(".edu-promotion.4paradigm_target").remove();
    //文章底部的没有更多提示
    $(".recommend-end-box").remove();
    //文章底部的广告
    $(".p4course_target").remove();

    //默认隐藏侧边栏
       $("aside").hide();
    //定义按钮
        var bur = "<button id='hideMe'>隐藏侧边栏</button>";
        var burshow = "<button id='showMe'>显示侧边栏</button>";
    //在侧边栏前前面追加按钮
       //blog-content-box
      // $(".blog-content-box").before(burshow);
       $("aside").before(bur);
    //点击事件捕获
       $("#hideMe").click(function(){
           //隐藏侧边栏
            $("aside").hide();
           //按钮转换->“显示侧边栏”
            $("#showMe").show();
            $("#hideMe").hide();
       });
    //显示侧边栏
       $("aside").before(burshow);
       $("#hideMe").hide()
       $("#showMe").click(function(){
           // $("aside").show();
                  $("aside").show(function() {
                   //底部广告
	              $('iframe').remove();
                  $(".ad").remove();
	               });
            $("#hideMe").show();
            $("#showMe").hide();
            $(".ad").remove();
       });
       //捕获点击出现的问题
       $("button").click(function() {
        //底部广告
	    $('iframe').remove();
        $(".ad").remove();
	});
      //按钮样式
       $("button").css({
      "width":"300px",
      "color":"white",
      "background-color":"#233864",
      "font-family":"Arial",
      "font-size":"20px",
      "padding":"5px"
    });
    //捕获后面load的广告 addEventListener() 方法用于向指定元素添加事件句柄。
    window.addEventListener ("load", removeIframe, false);
	function removeIframe () {
        //底部广告
	    $('iframe').remove();
        $(".ad").remove();
	}
    // Your code here...
    //meau-list
    //csdn-tracking-statistics mb8 box-shadow
    //recommend-end-box
    //recommend-item-box csdn-tracking-statistics
    //class="recommend-item-box csdn-tracking-statistics"
    //left_wrap
    //asideFooter
    //section
})();