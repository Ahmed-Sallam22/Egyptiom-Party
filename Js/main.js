$(function(){
   //--SIde BAr --//
   const sidebar=$(".siderbar").innerWidth();
   $(".siderbar").animate({left:-sidebar},1)

   //--Loding Screen --//
   $(".spinner").fadeOut(1000,function(){
      $("#loding").fadeOut(1000,function(){
         $("body").css('overflow','auto')
         $("#loding").remove();
      })
   })
   //--SIde Bar Open && Close --/ //
$(".closeBtn").click(function () {
   const sidebar=$(".siderbar").innerWidth();
   $(".siderbar").animate({left:-sidebar},850)
   $("#mainText").animate({paddingLeft:0},850)
})
$("#openSideBar").click(function () {
   const sidebar=$(".siderbar").innerWidth();
   if($(".siderbar").css('left')=="0px"){
      $(".siderbar").animate({left:-sidebar},850)
      $("#mainText").animate({paddingLeft:15},850)
   }
   else{
      $(".siderbar").animate({left:0},850)
      $("#mainText").animate({paddingLeft:sidebar+20},850)
      $("#mainText").css('overflowX','hidden')
   }
})

//--Details Singers--//
$("#singers div:first").css("display", "block");
    $("#singers h4").click(function () {
        $(this).next().slideToggle(500);
        $("#singers div").not($(this).next()).slideUp(500);
    });
 
//--Link Smoothe scroll --//
$(".links a[href^='#']").click(function (eventInfo) {
   let aHref =eventInfo.target.getAttribute('href');
   console.log(aHref);
      let hrefOffset = $(aHref).offset().top;
      $("html , body").animate({scrollTop: hrefOffset}, 1000);
      
})

$(window).scroll(function(){
   let sectionOffest=$("#singers").offset().top
   let wScroll=$(window).scrollTop()
   if (wScroll>sectionOffest-400){
       $("#btnUp").fadeIn(500);
   }
   else{
       $("#btnUp").fadeOut(500);
   }
});

//--counter Time--//
let eventDAte=new Date("Mar 21,2023 23:59:59").getTime();
let counter= setInterval(()=>{
   let dateNow= new Date().getTime();
   let dateCounterDiff= eventDAte - dateNow;

   let days =Math.floor(dateCounterDiff/(1000*60*60*24));
   let hours =Math.floor(dateCounterDiff%(1000*60*60*24)/(1000*60*60));
   let minutes =Math.floor(dateCounterDiff%(1000*60*60)/(1000*60));
   let seconds =Math.floor(dateCounterDiff%(1000*60)/1000);
   hours = (hours < 10) ? "0" + hours : hours;
   minutes = (minutes < 10) ? "0" + minutes : minutes;
   seconds = (seconds < 10) ? "0" + seconds : seconds;


   document.querySelector(".days").innerHTML="<h3>" + days + " D" + "</h3>";
   document.querySelector(".hours").innerHTML="<h3>" + hours + " h" + "</h3>";
   document.querySelector(".minutes").innerHTML= "<h3>" + minutes + " m" + "</h3>";
   document.querySelector(".seconds").innerHTML= "<h3>" + seconds  + " S" + "</h3>";

   if(dateCounterDiff<0)
   {
      clearInterval(counter)
   }
},1000)





//--Count Char --//
var max = 200;
$("textarea").keyup(function () {
    let charLength = $("textarea").val().length;
    console.log(charLength);
    var character = max - charLength;
    console.log(character)
    if (character <= 0) {
        $("#char").text("your available character finished");
        $("#change").fadeOut(10)
    } else {
        $("#char").text(character);
        $("#change").fadeIn(10)
    }
});
})


