$(document).ready(function(){
	$('#sb_form').after('<form method="get" action="https://www.google.com/search" class="sw_box"><div class="b_searchboxForm" data-bm="22"><input class="b_searchbox" id="sb_form_q" name="q" title="Enter your search term" type="search" value="" maxlength="1000" autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="both" aria-expanded="false" aria-owns="sa_ul"><input type="submit" class="b_searchboxSubmit" id="sb_form_go" title="Search" tabindex="0" name="go"><input id="sa_qs" name="qs" value="bs" type="hidden"><input type="hidden" value="QBLH" name="form"><div id="sw_as" style="display: block; margin-left: -1px; margin-right: 1px;"><div class="sa_as" data-bm="26"></div></div></div></form>').remove();
	$('.hp_sw_logo').after('<img src='+chrome.extension.getURL('bingbingle.png')+'>').remove();
});