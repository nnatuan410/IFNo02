// fixed scroll when open menu SP
$(document).ready(function(){
    $('#navtoggle').click(function(){
        if($(this).is(":checked")){
            $('body').addClass("fixed");
        }
        else if($(this).is(":not(:checked)")){
            $('body').removeClass("fixed");
        }
    });
})
