
window.addEventListener("scroll",function(){
    var target = document.getElementsByClassName('first-bg');
    var target1 = document.getElementsByClassName('first-img');
    var target2 = document.getElementsByClassName('first-text');

    var target3 = document.getElementsByClassName('second-bg');
    var target4 = document.getElementsByClassName('second-img');
    var target5 = document.getElementsByClassName('second-text');

    var target6 = document.getElementsByClassName('paris-opacity');
    var target7 = document.getElementsByClassName('london-opacity');
    var target8 = document.getElementsByClassName('milano-opacity');
    var target9 = document.getElementsByClassName('moskva-opacity');

    var menu = document.getElementsByClassName('menu-opacity');

    if(screen.width > 700) {

        if(window.pageYOffset < 400){
            menu[0].style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        }   
        if(window.pageYOffset > 450){
            target[0].style.opacity = "1";
            menu[0].style.backgroundColor = "#191919"
        }
        if(window.pageYOffset > 950){
            target1[0].style.marginLeft = "1px";
        }
        if(window.pageYOffset > 1000){
            target2[0].style.opacity = "1";
        }
        if(window.pageYOffset > 1600){
            target3[0].style.opacity = "1";
        }
        if(window.pageYOffset > 1800){
            target4[0].style.opacity = "1";
            target5[0].style.opacity = "1";
        }
    
        if(window.pageYOffset > 3150){
            target6[0].style.opacity = "1";
        }
        if(window.pageYOffset > 3350){
            target7[0].style.opacity = "1";
        }
        if(window.pageYOffset > 3550){
            target8[0].style.opacity = "1";
        }
        if(window.pageYOffset > 3750){
            target9[0].style.opacity = "1";
        }

    }

    else if(screen.width < 699) {

            target[0].style.opacity = "1";
            target1[0].style.marginLeft = "1px";
    
    
            target2[0].style.opacity = "1";
        
       
            target3[0].style.opacity = "1";
       
            target4[0].style.opacity = "1";
            target5[0].style.opacity = "1";
        
            target6[0].style.opacity = "1";
       
            target7[0].style.opacity = "1";
        
            target8[0].style.opacity = "1";
        
            target9[0].style.opacity = "1";

    }

},false);

var imeZg = document.querySelector(".zagreb");
var dateZg = document.querySelector(".dateZg");
var timeZg = document.querySelector(".timeZg");
var locationZg = document.querySelector(".locationZg");
var textZg = document.querySelector(".info-textZg");

var imeSt = document.querySelector(".split");
var dateSt = document.querySelector(".dateSt");
var timeSt = document.querySelector(".timeSt");
var locationSt = document.querySelector(".locationSt");
var textSt = document.querySelector(".info-textSt");
dateSt.style.display = "none";
timeSt.style.display = "none";
locationSt.style.display = "none";
textSt.style.display = "none";

var imePu = document.querySelector(".pula");
var datePu = document.querySelector(".datePu");
var timePu = document.querySelector(".timePu");
var locationPu = document.querySelector(".locationPu");
var textPu = document.querySelector(".info-textPu");
datePu.style.display = "none";
timePu.style.display = "none";
locationPu.style.display = "none";
textPu.style.display = "none";

var imeOs = document.querySelector(".osijek");
var dateOs = document.querySelector(".dateOs");
var timeOs = document.querySelector(".timeOs");
var locationOs = document.querySelector(".locationOs");
var textOs = document.querySelector(".info-textOs");
dateOs.style.display = "none";
timeOs.style.display = "none";
locationOs.style.display = "none";
textOs.style.display = "none";

imeZg.addEventListener("click", function(){
    dateZg.style.display = "block";
    dateSt.style.display = "none";
    datePu.style.display = "none";
    dateOs.style.display = "none";

    timeZg.style.display = "block";
    timeSt.style.display = "none";
    timePu.style.display = "none";
    timeOs.style.display = "none";

    locationZg.style.display = "block";
    locationSt.style.display = "none";
    locationPu.style.display = "none";
    locationOs.style.display = "none";

    textZg.style.display = "block";
    textSt.style.display = "none";
    textPu.style.display = "none";
    textOs.style.display = "none";
});

imeSt.addEventListener("click", function(){
    dateZg.style.display = "none";
    dateSt.style.display = "block";
    datePu.style.display = "none";
    dateOs.style.display = "none";

    timeZg.style.display = "none";
    timeSt.style.display = "block";
    timePu.style.display = "none";
    timeOs.style.display = "none";

    locationZg.style.display = "none";
    locationSt.style.display = "block";
    locationPu.style.display = "none";
    locationOs.style.display = "none";

    textZg.style.display = "none";
    textSt.style.display = "block";
    textPu.style.display = "none";
    textOs.style.display = "none";
});

imePu.addEventListener("click", function(){
    dateZg.style.display = "none";
    dateSt.style.display = "none";
    datePu.style.display = "block";
    dateOs.style.display = "none";

    timeZg.style.display = "none";
    timeSt.style.display = "none";
    timePu.style.display = "block";
    timeOs.style.display = "none";

    locationZg.style.display = "none";
    locationSt.style.display = "none";
    locationPu.style.display = "block";
    locationOs.style.display = "none";

    textZg.style.display = "none";
    textSt.style.display = "none";
    textPu.style.display = "block";
    textOs.style.display = "none";
});

imeOs.addEventListener("click", function(){
    dateZg.style.display = "none";
    dateSt.style.display = "none";
    datePu.style.display = "none";
    dateOs.style.display = "block";

    timeZg.style.display = "none";
    timeSt.style.display = "none";
    timePu.style.display = "none";
    timeOs.style.display = "block";

    locationZg.style.display = "none";
    locationSt.style.display = "none";
    locationPu.style.display = "none";
    locationOs.style.display = "block";

    textZg.style.display = "none";
    textSt.style.display = "none";
    textPu.style.display = "none";
    textOs.style.display = "block";
});