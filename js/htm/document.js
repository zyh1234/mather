/*
 * Copyright by zzllrr. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */
    
$(function () {
	var o=H_o(),tp=o['type']||'HTML', t=L['document'];


    $('#oHTML').html(replaceNodeInner(t,'MD', md2html));
    $(ZLR(Mele+' '+Mele2).join(',')).each(function(){
        all2html(this.nodeName,$(this).text(),this);
    });


});