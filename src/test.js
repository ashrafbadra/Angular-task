
$(function(){

    $('.click-one').click(function(){
        $('.show-one').slideToggle( 500 , function(){
            $('.show-two').slideUp();
            $('.show-there').slideUp();
            $('.show-four').slideUp();
            $('.show-five').slideUp()
            
        });
    });

    $('.click-two').click(function(){
        $('.show-two').slideToggle(500 , function(){
            $('.show-one').slideUp();
            $('.show-there').slideUp();
            $('.show-four').slideUp();
            $('.show-five').slideUp();
        });
    });

    $('.click-there').click(function(){
        $('.show-there').slideToggle(500 , function(){
            $('.show-two').slideUp();
            $('.show-one').slideUp();
            $('.show-four').slideUp();
            $('.show-five').slideUp();
        });
    });

    $('.click-four').click(function(){
        $('.show-four').slideToggle(500, function(){
            $('.show-two').slideUp();
            $('.show-there').slideUp();
            $('.show-one').slideUp();
            $('.show-five').slideUp();
        });
    });

    $('.click-five').click(function(){
        $('.show-five').slideToggle(500 , function(){
            $('.show-two').slideUp();
            $('.show-there').slideUp();
            $('.show-four').slideUp();
            $('.show-one').slideUp();
        });
    });

    $('.click-one , .click-two , .click-there , .click-four , .click-five ').click(function(){
        $(".finish").show()
    })
    
});


//js 
function apper(event) {
    var target = event.target;
    document.getElementById("demo").innerHTML = event.target.innerHTML;
}


