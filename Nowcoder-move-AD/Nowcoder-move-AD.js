// ==UserScript==
// @name         牛客网布局优化去广告
// @namespace    www.logicr.club
// @version      2.1
// @description   牛客网布局优化去广告、添加了几个按钮
// @author       Logicr
// @match        https://www.nowcoder.com/*
// ==/UserScript==

(function() {
    'use strict';
    //去除反馈
      $(".fixed-menu").remove();
    //顶栏优化icon-mobile-phone
    //$(".icon-mobile-phone").remove();

    $("li>a").remove(".icon-mobile-phone");
    $("li").remove(".nav-msg");
    //顶栏收起
    $(".header-main.clearfix").hide();
    //按钮样式改不了啊，算了
    var showHeadButton = "<button class='' id='SHB' style='display: block;'>点我展开</button>";
    var hideHeadButton = "<button class='clearfix' id='HHB'>点我隐藏</button>";
    $(".header-main.clearfix").before(showHeadButton);
    $(".header-main.clearfix").before(hideHeadButton);
    $("#HHB").hide();
    $("#SHB").click(function(){
        $(".header-main.clearfix").show();
        $("#SHB").hide();
        $("#HHB").show();
    })
    $("#HHB").click(function(){
        $(".header-main.clearfix").hide();
        $("#HHB").hide();
        $("#SHB").show();
    })

     //问题信息收起
    $(".question-info").hide()
    var showQuestionButton = "<button class='tag-label' id = 'SQB' >点我展开</button>";
    var hideQuestionButton = "<button class='tag-label' id = 'HQB'>点我隐藏</button>";
    $(".question-info").before(showQuestionButton);
    $(".question-info").before(hideQuestionButton);
    $("#HQB").hide();
    $("#SQB").click(function(){
        $("#SQB").hide();
        $("#HQB").show();
        $(".question-info").show();
    })
    $("#HQB").click(function(){
        $("#SQB").show();
        $("#HQB").hide();
        $(".question-info").hide();
    })
    $("#SQB,#HQB").css({
    "margin":"22px"
    })



    //试题头部的导航去掉
    $(".crumbs-path").remove();
    //马上挑战下面的条条去除
    //$(".subject-action.clearfix").remove();
    $(".subject-menu").remove();
    //
    $("#jsSideTopicList.module-box.side-topic-box").remove();
    $(".module-headclearfix").remove();
    //module-body
    //$(".module-body").remove();
    //侧边广告
    $(".side-topic-list").remove();
    //去除挑战通过的具体名单
    $(".list-mod").remove();

    //收起牛友的回答
    $("#jsComment.module-body.answer-mod").hide();
    //添加展开按钮
    var responseButton = "<button class='tag-label' id='responseShowButton'>点我展开</button>";
    var responseButtonHide = "<button class='tag-label' id='responseHideButton'>点我隐藏</button>";
   // $(".module-box.js-discussion").before(responseButton);
   // $(".module-box.js-discussion").before(responseButtonHide);
    $("#jsComment.module-body.answer-mod").before(responseButton);
    $("#jsComment.module-body.answer-mod").before(responseButtonHide);
    $("#responseHideButton").hide();
    $("#responseShowButton").click(function(){
        $("#jsComment.module-body.answer-mod").show();
        $("#responseShowButton").hide();
        $("#responseHideButton").show();

    })
    $("#responseHideButton").click(function(){
        $("#jsComment.module-body.answer-mod").hide();
        $("#responseHideButton").hide();
        $("#responseShowButton").show();

    })
    $("#responseShowButton,#responseHideButton").css({
        "margin-left":"22px",
        "margin-top": "10px;",
        "margin-bottom":"10px"
    })

    //回答按钮的样式
    $("#jsDealAnswer.btn.btn-primary.float-right.nc-req-auth").css({
        "margin-left":"22px",
        "margin-top": "0px;",
        "margin-bottom":"10px",

        "padding":"0px",
    })






    //收起回复框框
    $("#jsEditorModuleBody.module-body").hide();
    //添加点击打开回复框框到“添加回答”
    $("#jsDealAnswer.btn.btn-primary.float-right.nc-req-auth").click(function(){
         $("#jsEditorModuleBody.module-body").show();
                                })

    //相关试题收起
    $(".list-module").hide();
    //提示
    //var abutton = "<a class='tag-label id='showButton' href='#'>点我展开</a>";
    //"<button id='hideMe'>隐藏侧边栏</button>";
    var abutton = "<button class='tag-label' id='showButton'>点我展开</button>";
    var abuttonHide = "<button class='tag-label' id='hideButton'>点我隐藏</button>";
    //点击展开
    $(".list-module").before(abutton);
    $(".list-module").before(abuttonHide);
    $("#hideButton").hide();

    $("#showButton").click(function(){
        $(".list-module").show();
        $("#showButton").hide();
        $("#hideButton").show();
    })
    //点击隐藏
    $("#hideButton").click(function(){
        $(".list-module").hide();
        $("#showButton").show();
        $("#hideButton").hide();
    })

    //修改右侧“查看代码的样式”
    // document.getElementById("mod-head-link").className = "tag-label";

    //oprt-tool clearfix 解答收藏按钮
    $(".oprt-tool.clearfix").hide();

    //foot
    $(".ft-wrap").remove();


    //module-head clearfix
    // Your code here...
})();