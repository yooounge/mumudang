// submenu
$(".submenu").hide();
$(".gnb li").mouseenter(function(){
    $(".submenu").stop().slideDown()
});
$("nav").mouseleave(function(){
    $(".submenu").stop().slideUp()
});

// submenu_ani
$("nav").mouseenter(function(){
    $(".border").addClass("border1")
});
$("nav").mouseleave(function(){
    $(".border").removeClass("border1")
});

// talk _popup
$(".talk_popup").hide();
$(".talk_btn").click(function(){
    $(".talk_popup").fadeIn()
});
$(".x_btn").click(function(){
    $(".talk_popup").fadeOut()
});

// top_btn
$(".top_btn").click(function(){
    $("body,html").animate({
        scrollTop: 0
    },1000)
});

//tab
function openBoard(evt, boardName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("board");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" opacity", "");
    }
    document.getElementById(boardName).style.display = "block";
    evt.currentTarget.className += " opacity";
}

