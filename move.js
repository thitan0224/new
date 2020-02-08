$(document).ready(function(){
    $('.right').click(function(){
        $('#box').css(
            { left: '+=10px'}
        );
    })
})
$(document).ready(function(){
    $('.left').click(function(){
        $('#box').css(
            { left: '-=10px'}
        );
    })
})
$(document).ready(function(){
    $('.up').click(function(){
        $('#box').css(
            { top: '-=10px'}
        );
    })
})
$(document).ready(function(){
    $('.down').click(function(){
        $('#box').css(
            { top: '+=10px'}
        );
    })
})
$(document).keydown(function(e){
    var key = e.which;
    var left_key = [37, 65, 100];
    if(left_key.includes(key)) {
        $('.left').click();
    }
});
$(document).keydown(function(e){
    var key = e.which;
    var right_key = [39, 68, 102];
    if(right_key.includes(key)) {
        $('.right').click();
    }
});
$(document).keydown(function(e){
    var key = e.which;
    var up_key = [38, 87, 104];
    if(up_key.includes(key)) {
        $('.up').click();
    }
});
$(document).keydown(function(e){
    var key = e.which;
    var down_key = [40, 83, 98];
    if(down_key.includes(key)) {
        $('.down').click();
    }
});
