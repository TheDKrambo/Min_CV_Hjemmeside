$("#kontakt").click(function() {
    $("html, body").animate({
        scrollTop: $("#page_3_container").offset().top
    }, 800);
});

$("#om").click(function() {
    $("html, body").animate({
        scrollTop: $("#page_2_container").offset().top
    }, 800);
});

$(".img1").hover(function(){
    $(".img1").animate({width: "300px", height: "300px"});
});
$(".img1").mouseout(function(){
    $(".img1").animate({width: "270px", height: "270px"});
});

$(".img2").hover(function(){
    $(".img2").animate({width: "300px", height: "300px"});
});
$(".img2").mouseout(function(){
    $(".img2").animate({width: "270px", height: "270px"});
});

$(".img3").hover(function(){
    $(".img3").animate({width: "300px", height: "300px"});
});
$(".img3").mouseout(function(){
    $(".img3").animate({width: "270px", height: "270px"});
});