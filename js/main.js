function move(event) {
    switch (event.key) {
        case "ArrowLeft":
            alert("Вы на первом слайде");
            break;
        case "ArrowRight":
            location.href = "slide_list.html";
            break;
    }
}

addEventListener("keydown", move);
	
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
$(function() {
    $('.text-bg').each(function() {
        let dbg = $(this).attr('data-bg');
        $(this).wrap('<div class="text-bg-wrap" style="background: '+ dbg +';"></div>');
        let dtext = $(this).attr('data-text');
        let dheight = $(this).attr('data-height');
        let minfont = Number($(this).attr('data-minfont'));
        let maxfont = Number($(this).attr('data-maxfont'));        
        let dimage = $(this).attr('data-image');
        let repeat = $(this).attr('data-repeat');
        let dall = '';
        for (step = 0; step < repeat; step++) {
            dall += '<span style="font-size: '+ getRandomInRange(minfont, maxfont) +'px">'+ dtext +'</span> ';
        }
        $(this).html(dall);
        $(this).css('height', dheight);    
        $(this).css('background-image', 'url(' + dimage + ')');    
    }); 
});    