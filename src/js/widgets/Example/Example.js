/*
 *
 * File name: Example.js.js
 * Author: Lindon Camaj
 * Date: 7/4/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 *
 
$(document).ready(function (){
	 $.getJSON("/casino/data/game_icons_list.json", function( data ) {
	  var items = [];
	  $.each( data, function( key, val ) {
	    items.push(val);
	  });
	  console.log('cao');
	});
});
*/
