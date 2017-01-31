$('#grid-icon').on('click',function(e){
    $('section ul').removeClass('list-view').addClass('grid-view');
    $(this).css('color','#000');
    $('#list-icon').css('color','#aaa');
    $('.grid-head').css('display','block');
    $('.list-head').css('display','none');
});
$('#list-icon').on('click',function(e){
    $('section ul').removeClass('grid-view').addClass('list-view');
    $(this).css('color','#000');
    $('#grid-icon').css('color','#aaa');
    $('.list-head').css('display','block');
    $('.grid-head').css('display','none');
});