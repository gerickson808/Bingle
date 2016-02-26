$(document).ready(function(){
	$('#logo>img').after('<img src="'+chrome.extension.getURL('binglegoogle.png')+'">').remove();
});