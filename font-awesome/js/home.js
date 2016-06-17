$('.btn').click(function(event){

$(this).hide();

})

// $('.a-1').mouseover(function(event){

// $('.a-2').hide();
// $('.a-1').addClass('a-1-after');

// })
// $('.a-2').mouseover(function(event){

// $('.a-1').hide();

// })

$(document).ready(function(){
    $(".a-1").mouseover(function(){
    	$('.a-2').hide();
        $(".a-1").animate({right: '250px'});
    });
});