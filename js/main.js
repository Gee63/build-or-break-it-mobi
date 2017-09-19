

$(document).ready(function () {


    $(window).load(function(){
        console.log('window ready');
        $('.loader').fadeOut('slow',function(){$(this).remove();});
    });

console.log('document ready');
    //audio loop
    /*document.getElementById('loop').play();*/
    document.getElementById('loop').volume=0.7;

    //html elements
    var container  = $('.container'),
        statusCity = $('.status-totals-container h1'),
        daysPassed = $('.day-total h2 span'),
        summary = $('.summary-container ul li'),
        body = $('body');



    //todays date
    var currentDay = moment( '2015-07-03' );

    //set dates for each week
    var week1Start = moment('2015-07-01'),
        week1End   = moment('2015-07-07'),
        week2Start = moment('2015-07-08'),
        week2End   = moment('2015-07-15'),
        week3Start = moment('2015-07-16'),
        week3End   = moment('2015-07-23'),
        week4Start = moment('2015-07-24'),
        week4End   = moment('2015-07-30');


    //hide and show backgrounds for each week
    if (currentDay >= week1Start && currentDay <= week1End) {
        console.log('week 1 active');
        container.addClass('week1');
        statusCity.html("silicon city");
        body.css('background-color', '#D68CD9');

        getElapsedWorkDays(currentDay, week1Start);
    }

    if (currentDay >= week2Start && currentDay <= week2End) {
        console.log('week 2 active');
        container.removeClass('week1');
        container.addClass('week2');
        statusCity.html("Boom beach");
        body.css('background-color', '#1984EE');

        getElapsedWorkDays(currentDay, week2Start);
    }

    if (currentDay >= week3Start && currentDay <= week3End) {
        console.log('week 3 active');
        container.removeClass('week2');
        container.addClass('week3');
        statusCity.html("welding woods");
        body.css('background-color', '#8FA8A4');

        getElapsedWorkDays(currentDay, week3Start);
    }

    if (currentDay >= week4Start && currentDay <= week4End) {
        console.log('week 4 active');
        container.removeClass('week3');
        container.addClass('week4');
        statusCity.html("drywall dunes");
        body.css('background-color', '#F7AC35');
        getElapsedWorkDays(currentDay, week4Start);
    }

    //work out how many days have passed for each week
    function getElapsedWorkDays(a, b) {
        var days = a.diff(b, 'days');
        days = days + 1;
        /*console.log(days);*/
        daysPassed.html(days);
        /*return days;*/

        //jquery passes html elements through as arrays. Iterate through li's and add style onto li index that is the same as days
       /* $( summary[ ( days - 1 ) ] ).addClass( 'active-day' );*/
    }

    /*fade toast out*/
    $('#toast').delay(8000).fadeOut();


    /*hide and show levels based*/
    var day   = 7,
        level = 7,
        brokenLevel = $('.broken-level');

    $( '.building-container .inner-content div').addClass( 'disabled' );

    for( var i = 1; i <= level; i++ ) {
        $( '.level' + i ).addClass( 'active').removeClass( 'disabled' );
    }

    /*add/remove destroyrd layer if any days have been missed*/
    if(day > level){
        brokenLevel.addClass('active').removeClass('disabled');
    }
    else if(day == level){
        brokenLevel.addClass('disabled').removeClass('active');
    }

    /*show/hide DAN when level is destroyed / build*/


});

/*var Dan = $('#statusDan');*/


/*function to show dan after a win*/
/*function showNiceDan() {

    Dan.removeClass('rubble-dan disabled');
    Dan.addClass('nice-dan active');

    var times = 3;
    var loop = setInterval(repeat, 550);

    /!*play audio 3 times*!/
    function repeat(){
        times--;
        if(times === 0){
            clearInterval(loop);
        }
        document.getElementById('nice-dan').play();
        document.getElementById('nice-dan').volume=0.5;
    }
    repeat();
}*/


/*function to shows dan after a loss*/
/*function showRubbleDan() {

    Dan.removeClass('nice-dan disabled');
    Dan.addClass('rubble-dan active');

        document.getElementById('rubble-dan').play();
        document.getElementById('rubble-dan').volume=0.3;
}*/


function stopIntro() {
    document.getElementById('loop').pause();
}

//close instructions
$( ".left-instructions button" ).click(function() {
    $(".left-instructions").css("display", "none");
});

//progress popup
$(".progress-popup").click(function(){
    $(".progress-popup").css("display","none");
})

$("#progress").click(function(){
    $(".progress-popup").css("display","block");
})


//built popup close
$('.popup-built-container').click(function(){
    $('.popup-built-container').css("display", "none");
})

//broken popup close
$('.popup-broken-container').click(function(){
    $('.popup-broken-container').css("display", "none");
})

/*open info*/
/*
$('.info-cta').click(function(){
    $('.left-instructions').addClass('active').removeClass('disabled');
})
*/

