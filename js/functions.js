
var hWin = $(window).height();
var wWin = $(window).width();
var og_hLogo = $('.logo').height();
var og_wLogo = $('.logo').width();
var movelogo = true;

var tLogo = hWin/2 ;
if(hWin>600){
    var tLogo = 600/2 ;
}
  
var lLogo = wWin/2 ;

console.log(hWin)
console.log(wWin)
console.log(tLogo)
console.log(lLogo)

// run when load //
$(window).bind("load", function() { 

    if(hWin > 700){

        $('.logo').css({'top':'300px'});

    }


});

// run when resize //
$( window ).resize(function() {
    
    hWin = $(window).height();
    wWin = $(window).width();
    tLogo = hWin/2 ;  
    lLogo = wWin/2 ;

    if(hWin>600){
        var tLogo = 600/2 ;
    }
    if($('.logo').top > 200){
        $('.logo').animate({
            top: hWin/2,
            left: wWin/2,
            width: og_wLogo,
            height: og_hLogo
        },1000);
    }

});


//
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
//  set up for on click logo

$('#clickme').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    while ($(this).scrollTop() > 0) {
        
    }
    setTimeout(function(){
        location.reload();
    },1600);
    return false;
 });

//set up on click for DIRECTION

$('.contact-us').click(function(){

    $('.contact-us .direction').css({'height':'33vh'});
    $('.contact-us .direction .addr').css({'height':'33vh'});
    document.getElementById("addr-text-h").innerHTML = "Hall <br> Empire Banquet, 12 Timestar House, S V Rd, Goregaon West, Mumbai"
    document.getElementById("addr-text-u").innerHTML = "Utaro  <br> Spanish Villa, Patel Estate Rd, Momin Nagar, Jogeshwari West, Mumbai"
    document.getElementById("addr-text-r").innerHTML = "Reception <br> FM Banquet, 8/B Udyog Nagar, Kamath Lane, Goregaon West, Mumbai"



});




//
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
//      Scroll  

$(window).scroll(function(){

    var wScroll = $(this).scrollTop();
    console.log(wScroll)

    //  ------ Moving Logo -------

    if(wScroll>200 && movelogo){

        // $('.logo').css({'position':'absolute'});
        // for smaller screen change the position of corner position
        var x = 150 
        var y = 100
        if(wWin < 600){
            x = 75
            y = 50 
        }

        $('.logo').animate({
            top: x,
            left: y,
            
            width: ($('.logo').width()/3),
            height: ($('.logo').height()/3)
        },1000);

        $('.logo').css({'position':'fixed'});
        movelogo = false;
        //console.log('in if')
        //console.log(movelogo)


    }else if(wScroll<200 && !movelogo){
        //console.log('in else if')

        //console.log(tLogo)
        //console.log(lLogo)
     

        $('.logo').animate({
            top: tLogo,
            left: lLogo,
            width: og_wLogo,
            height: og_hLogo
        },1000);

        console.log(hWin)
        console.log(wWin)
        console.log(tLogo)
        console.log(lLogo)

        $('.logo').css({'position':'fixed'});
        movelogo = true;

    }else{ 
        //console.log('in else')

    }
    // ------------------------- //

    // ------ border ---------//

    $('.blobs').css({
        'transform' : 'translate('+ wScroll/35+'%,'+ wScroll/6+'%)'
    });

    $('.humans').css({
        'transform' : 'translate(0px,'+ wScroll/5+'%)'
    });

    $('.border').css({
        'transform' : 'translate(-'+ wScroll/35+'%,'+ wScroll/6+'%)'
    });

    // -------------------------//


//-------- try inro animation --------//
if(wScroll > 950){

$('.intro .jeni .jimage').css({
        'transform' : 'translate(0px,0px)',
        'opacity':'1'
    });

$('.intro .jeni #jname').css({
        'transform' : 'translate(0px,0px)',
        'opacity':'0.4'
    });    

$('.intro .bhau .bimage').css({
        'transform' : 'translate(0px,0px)',
        'opacity':'1'
    });    

$('.intro .bhau #bname').css({
        'transform' : 'translate(0px,0px)',
        'opacity':'0.4'
    });

}

// ----- short intro stuff ----- //
if(wScroll > 1050){

$('.intro .jeni .jtext').css({
        'transform' : 'translate(0px,0px)',
        'opacity':'1'
    });
$('.intro .jeni .jtext-writing').css({
        'transform' : 'translate(0px,0px)',
        'opacity':'1'
    });
setTimeout(function(){
    $('.intro .bhau .btext').css({
        'transform' : 'translate(0px,0px)',
        'opacity':'1'
    });
    $('.intro .bhau .btext-writing').css({
        'transform' : 'translate(0px,0px)',
        'opacity':'1'
    });
},500);





}


// --- invite card stuff --- //

if(wScroll < $('.intro').offset().top + 700 - ($(window).height()*0.65)) {
    console.log("if")
    $(".invite-cover").css({"position":"relative"})
    $(".invite-cover").css("top",0)

    console.log($(".invite-cover").top)

    //$(".invite-cover").css("margin-top",0)
}
else if(wScroll > $('.intro').offset().top + 700 - ($(window).height()*0.65) && wScroll < ($('.invite-page-4').offset().top+350)-($(window).height()*0.65) ){
    //console.log($('.intro').offset().top + 600)
    //console.log($(window).height()*0.65)
    console.log("top")
    console.log($('.invite-cover').offset().top)
    $(".invite-cover").css({"position":"fixed"})
    $(".invite-cover").css("top",Math.max(($(window).height()*0.65)-100,0));
    //$(".invite-cover").css({"left":50%})
    //$(".invite-cover").css({"opacity":"1"})
}else if(wScroll > ($('.invite-page-4').offset().top+350)-($(window).height()*0.65) ){
    console.log("else")
    console.log($('.invite-pages').offset().bottom)
    $(".invite-cover").css({"position":"relative"})
    $(".invite-cover").css("margin-top",100)
    $(".invite-cover").css("top",1700);
    //$(".invite-cover").css("top",Math.min($(window).height(),hWin+1720-$(this).scrollTop()));
    //$(".invite-cover").css({"position":"relative"})
}

});

//
////////////////////////////////////////////////////

// ---------------- timer ------------------- //
// Set the date we're counting down to
var countDownDate = new Date("Nov 21, 2017 19:30:00").getTime();

var i = 0;
window.onload = function start() {
    slide();
}
function slide() {
    var num = 0;;
    colorsg = ['#cbcace', '#a4a2a9', '#cbcace'];
    colorsb = ['#008ae6', '#006bb3', '#008ae6'];
    window.setInterval(function () {
        console.log("for")
        console.log(i)
        console.log(colorsg[i])   
    
    if(i == 0){
        $('.intro .bhau .btext-writing .btext-writing-doc0').css({'background' : colorsb[0],});
        $('.intro .bhau .btext-writing .btext-writing-doc1').css({'background' : colorsb[1],});
        $('.intro .bhau .btext-writing .btext-writing-doc2').css({'background' : colorsb[2],});
        $('.intro .jeni .jtext-writing .jtext-writing-doc0').css({'background' : colorsg[0],});
        $('.intro .jeni .jtext-writing .jtext-writing-doc1').css({'background' : colorsg[1],});
        $('.intro .jeni .jtext-writing .jtext-writing-doc2').css({'background' : colorsg[2],});
    }
    if(i == 1){
        $('.intro .bhau .btext-writing .btext-writing-doc0').css({'background' : colorsb[1],});
        $('.intro .bhau .btext-writing .btext-writing-doc1').css({'background' : colorsb[2],});
        $('.intro .bhau .btext-writing .btext-writing-doc2').css({'background' : colorsb[0],});
        $('.intro .jeni .jtext-writing .jtext-writing-doc0').css({'background' : colorsg[1],});
        $('.intro .jeni .jtext-writing .jtext-writing-doc1').css({'background' : colorsg[2],});
        $('.intro .jeni .jtext-writing .jtext-writing-doc2').css({'background' : colorsg[0],});
    }
    if(i == 2){
        $('.intro .bhau .btext-writing .btext-writing-doc0').css({'background' : colorsb[2],});
        $('.intro .bhau .btext-writing .btext-writing-doc1').css({'background' : colorsb[0],});
        $('.intro .bhau .btext-writing .btext-writing-doc2').css({'background' : colorsb[1],});
        $('.intro .jeni .jtext-writing .jtext-writing-doc0').css({'background' : colorsg[2],});
        $('.intro .jeni .jtext-writing .jtext-writing-doc1').css({'background' : colorsg[0],});
        $('.intro .jeni .jtext-writing .jtext-writing-doc2').css({'background' : colorsg[1],});
    }



        i=i+1
        if(i>2){
            i=0;
        }
        
    }, 300); // repeat forever, polling every 3 seconds
}


// Update the count down every 1 second
var x = setInterval(function() {

    

    

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("time").innerHTML = " • " + days + " • " + hours + " • "
  + minutes + " • " + seconds + " • " ;
  document.getElementById("subtime").innerHTML = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp days &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp hours &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp mintues &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp seconds &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);



// -------------------------------------------- //


