$('.switch-checkbox').each(function(){
    var $input = $('input', this);
    $input.hide().wrap('<span class="switch">');
    $input.after('<span class="switch-container"><span class="on"></span><span class="mid"></span><span class="off"></span></span>');
});