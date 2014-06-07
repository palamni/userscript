// ==UserScript==
// @name         HackForums.net - Image Resizer
// @namespace    spafic/imgsize
// @description  Resizes images posted by users on HackForums.net
// @match        *://*.hackforums.net/
// @match        *://*.hackforums.net/showthread.php*
// @match        *://*.hackforums.net/usercp.php?action=imgsize
// @match		 *://*.hackforums.net/usercp.php*
// @match        *://*.hackforums.net/private.php*
// @version      1.1.1
// @downloadURL  https://userscripts.org/scripts/source/128447.user.js
// @updateURL    https://userscripts.org/scripts/source/128447.meta.js
//
// Copyright 2012 Spafic
// @licence        GNU General Public License
// This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. For a copy, see <http://www.gnu.org/licenses/>. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.use
// ==/UserScript==

(function(){if(-1!=document.location.toString().indexOf("usercp.php")|-1!=document.location.toString().indexOf("private.php")&&-1==document.location.toString().indexOf("action=imgsize")){var a=document.getElementById("usercpprofile_e"),b=document.createElement("tr");b.innerHTML='<td class="trow1 smalltext"><a href="usercp.php?action=imgsize" class="usercp_nav_item usercp_nav_avatar">Image Resizer</a></td>';a.appendChild(b)}else if(-1!=document.location.toString().indexOf("usercp.php?action=imgsize"))a=document.createElement("html"),a.innerHTML='<head>\t<title>Hack Forums - Edit Image Resizer</title>\t<script type="text/javascript" src="http://cdn2.hackforums.net/jscripts/prototype.js?ver=1603"><\/script>\t<script type="text/javascript" src="http://cdn2.hackforums.net/jscripts/general.js?ver=1603"><\/script>\t<script type="text/javascript" src="http://cdn2.hackforums.net/jscripts/popup_menu.js?ver=1600"><\/script>\t<link type="text/css" rel="stylesheet" href="http://cdn2.hackforums.net/cache/themes/theme3/global.css" />\t<link type="text/css" rel="stylesheet" href="http://cdn2.hackforums.net/cache/themes/theme3/usercp.css" />\t<script type="text/javascript">\t<\!--\t\tvar cookieDomain = ".hackforums.net";\t\tvar cookiePath = "/";\t\tvar cookiePrefix = "";\t\tvar deleteevent_confirm = "Are you sure you want to delete this event?";\t\tvar removeattach_confirm = "Are you sure you want to remove the selected attachment from this post?";\t\tvar loading_text = "Loading. <br />Please Wait..";\t\tvar saving_changes = "Saving changes..";\t\tvar use_xmlhttprequest = "1";\t\tvar imagepath = "http://cdn2.hackforums.net/images/blackreign";\t// --\>\t<\/script></head><body>\t<div id="container" style="background-color:black;background-image:none;">\t\t<a name="top" id="top"></a>\t\t<div id="header">\t\t\t<div class="logo"><a href="http://www.hackforums.net/"><img src="http://cdn2.hackforums.net/images/blackreign/logo.jpg" alt="Hack Forums" title="Hack Forums" /></a></div>\t\t\t<div class="menu">\t\t\t\t<ul>\t\t\t\t\t<li><a href="http://www.hackforums.net/"><img src="http://cdn2.hackforums.net/images/blackreign/toplinks/home.gif" alt="Home Page" title="Hack Forums" />Home</a></li>\t\t\t\t\t<li><a href="http://www.hackforums.net/upgrade.php"><img src="http://cdn2.hackforums.net/images/blackreign/toplinks/subscribe.gif" alt="" title="upgrade your account" />Upgrade</a></li>\t\t\t\t\t<li><a href="http://www.hackforums.net/search.php"><img src="http://cdn2.hackforums.net/images/blackreign/toplinks/search.gif" alt="" title="" />Search</a></li>\t\t\t\t\t<li><a href="http://www.hackforums.net/memberlist.php"><img src="http://cdn2.hackforums.net/images/blackreign/toplinks/memberlist.gif" alt="" title="" />Member List</a></li>\t\t\t\t\t<li><a href="http://www.hackforums.net/misc.php?action=help"><img src="http://cdn2.hackforums.net/images/blackreign/toplinks/help.gif" alt="" title="" />Help</a></li>\t\t\t\t\t<li><a href="http://twitter.com/hackforumsnet"><img src="http://cdn2.hackforums.net/images/blackreign/toplinks/twitter.gif" alt="contact" title="twitter" />Follow</a></li>\t\t\t\t\t<li><a href="contact.php"><img src="http://cdn2.hackforums.net/images/blackreign/toplinks/contact.gif" alt="contact" title="contact" />Contact</a></li>\t\t\t\t</ul>\t\t\t</div>\t\t\t<hr class="hidden" />\t\t\t<div id="panel">\t\t\t\t<strong>Script created by Spafic</strong>\t\t\t</div>\t\t</div>\t\t<div id="content">\t\t\t<div class="navigation">\t\t\t\t<a href="http://www.hackforums.net/index.php">Hack Forums</a> / <a href="usercp.php">User Control Panel</a> / <span class="active">Edit Image Resizer</span>\t\t\t</div>\t\t\t<div class="quick_keys">\t\t\t\t<form action="" method="post" onsubmit="return false;">\t\t\t\t\t<input type="hidden" name="my_post_key" value="482cec3cef4ffe53e5d2d04c3fb5652e" />\t\t\t\t\t<table width="100%" border="0" align="center">\t\t\t\t\t<tr>\t\t\t\t\t\t<td width="180" valign="top">\t\t\t\t\t\t\t<table border="0" cellspacing="1" cellpadding="4" class="tborder">\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t<td class="thead"><strong>Menu</strong></td>\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t<td class="trow1 smalltext"><a href="usercp.php" class="usercp_nav_item usercp_nav_home">User CP Home</a></td>\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t<td class="tcat">\t\t\t\t\t\t\t\t\t<div class="expcolimage"><img src="http://cdn2.hackforums.net/images/blackreign/collapse.gif" id="usercpprofile_img" class="expander" alt="[-]" title="[-]" /></div>\t\t\t\t\t\t\t\t\t<div><span class="smalltext"><strong>Your Profile</strong></span></div>\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t<tbody style="" id="usercpprofile_e">\t\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t\t<td class="trow1 smalltext">\t\t\t\t\t\t\t\t\t\t<div><a href="usercp.php?action=profile" class="usercp_nav_item usercp_nav_profile">Edit Profile</a></div>\t\t\t\t\t\t\t\t\t\t<div><a href="usercp.php?action=changename" class="usercp_nav_item usercp_nav_username">Change Username</a></div>\t\t\t\t\t\t\t\t\t\t<div><a href="usercp.php?action=password" class="usercp_nav_item usercp_nav_password">Change Password</a></div>\t\t\t\t\t\t\t\t\t\t<div><a href="usercp.php?action=email" class="usercp_nav_item usercp_nav_email">Change Email</a></div>\t\t\t\t\t\t\t\t\t\t<div><a href="usercp.php?action=avatar" class="usercp_nav_item usercp_nav_avatar">Change Avatar</a></div>\t\t\t\t\t\t\t\t\t\t<div><a href="usercp.php?action=editsig" class="usercp_nav_item usercp_nav_editsig">Change Signature</a></div>\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t\t<td class="trow1 smalltext">\t\t\t\t\t\t\t\t\t\t<a href="usercp.php?action=options" class="usercp_nav_item usercp_nav_options">Edit Options</a>\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t\t<td class="trow1 smalltext"><a href="usercp.php?action=imgsize" class="usercp_nav_item usercp_nav_avatar">Image Resizer</a></td>\t\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t</tbody>\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t<td class="tcat">\t\t\t\t\t\t\t\t\t<div class="expcolimage">\t\t\t\t\t\t\t\t\t\t<img src="http://cdn2.hackforums.net/images/blackreign/collapse.gif" id="usercpmisc_img" class="expander" alt="[-]" title="[-]" />\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t<div>\t\t\t\t\t\t\t\t\t\t<span class="smalltext"><strong>Miscellaneous</strong></span>\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t<tbody style="" id="usercpmisc_e">\t\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t\t<td class="trow1 smalltext">\t\t\t\t\t\t\t\t\t\t<a href="usercp.php?action=usergroups" class="usercp_nav_item usercp_nav_usergroups">Group Memberships</a>\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t\t<td class="trow1 smalltext">\t\t\t\t\t\t\t\t\t\t<a href="usercp.php?action=editlists" class="usercp_nav_item usercp_nav_editlists">Buddy/Ignore List</a>\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t\t<td class="trow1 smalltext">\t\t\t\t\t\t\t\t\t\t<a href="usercp.php?action=attachments" class="usercp_nav_item usercp_nav_attachments">Manage Attachments</a>\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t\t<td class="trow1 smalltext">\t\t\t\t\t\t\t\t\t\t<a href="usercp.php?action=drafts" class="usercp_nav_item usercp_nav_drafts">Saved Drafts </a>\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t\t<td class="trow1 smalltext">\t\t\t\t\t\t\t\t\t\t<a href="usercp.php?action=subscriptions" class="usercp_nav_item usercp_nav_subscriptions">Subscribed Threads</a>\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t\t<td class="trow1 smalltext">\t\t\t\t\t\t\t\t\t\t<a href="usercp.php?action=forumsubscriptions" class="usercp_nav_item usercp_nav_fsubscriptions">Forum Subscriptions</a>\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t\t<td class="trow1 smalltext">\t\t\t\t\t\t\t\t\t\t<a href="member.php?action=profile&amp;uid=47962" class="usercp_nav_item usercp_nav_viewprofile">View Profile</a>\t\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t</tbody>\t\t\t\t\t\t</table>\t\t\t\t\t</td>\t\t\t\t\t<td valign="top">\t\t\t\t\t\t<table border="0" cellspacing="1" cellpadding="4" class="tborder">\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t<td class="thead" colspan="2">\t\t\t\t\t\t\t\t\t<strong>Preview Image Size</strong>\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t<td class="trow1" width="100%">\t\t\t\t\t\t\t\t\t<img src="http://dl.dropbox.com/u/7870266/Extentions/HackForums.net/Image%20Resize/Resize-This.png" width="'+localStorage.getItem("hf_imagesize_width")+'" height="'+localStorage.getItem("hf_imagesize_height")+'" id="image_size" />\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t</table>\t\t\t\t\t\t<br />\t\t\t\t\t\t<table border="0" cellspacing="1" cellpadding="4" class="tborder">\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t<td class="thead" colspan="2">\t\t\t\t\t\t\t\t\t<strong>Edit Image Size</strong>\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t<td class="trow1" width="20%">\t\t\t\t\t\t\t\t\tNote, you must keep "px" in the textareas, otherwise this will not work!\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t\t<td class="trow1" width="80%">\t\t\t\t\t\t\t\t\t<input id="width" type="text" length="4" value="'+localStorage.getItem("hf_imagesize_width")+'"> x <input id="height" type="text" length="4" value="'+localStorage.getItem("hf_imagesize_height")+'" >\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t</table>\t\t\t\t\t\t<br />\t\t\t\t\t\t<table border="0" cellspacing="1" cellpadding="4" class="tborder">\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t<td class="thead" colspan="2">\t\t\t\t\t\t\t\t\t<strong>Options</strong>\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t\t<tr>\t\t\t\t\t\t\t\t<td class="trow1" colspan="3">\t\t\t\t\t\t\t\t\t<div align="center">\t\t\t\t\t\t\t\t\t\t<input type="submit" class="button" value="Save Image Size" name="me_button" id="me_button" onclick="if (typeof(localStorage) == \'undefined\' ) { alert(\'Your browser does not support HTML5 localStorage. Try upgrading.\');\t} else { try { localStorage.setItem(\'hf_imagesize_width\',document.getElementById(\'width\').value);localStorage.setItem(\'hf_imagesize_height\',document.getElementById(\'height\').value) } catch (e) { if (e == QUOTA_EXCEEDED_ERR) { alert(\'Quota exceeded!\'); } } } document.location = \'./usercp.php\';" />\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t</td>\t\t\t\t\t\t\t</tr>\t\t\t\t\t\t</table>\t\t\t\t\t</td>\t\t\t\t</form>\t\t\t</div>\t\t\t<br />\t\t</div>\t\t<br />\t</div>\t<br class="clear" /></body>',document.body.appendChild(a),document.getElementById("image_size").style.width=localStorage.getItem("hf_imagesize_width"),document.getElementById("image_size").style.height=localStorage.getItem("hf_imagesize_height");else{a=document.getElementsByClassName("post_body")[0];a=a.getElementsByTagName("img");for(i=0;i<a.length;i++)a[i].style.maxWidth=localStorage.getItem("hf_imagesize_width"),a[i].style.maxHeight=localStorage.getItem("hf_imagesize_height")}})();