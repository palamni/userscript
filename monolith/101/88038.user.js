﻿// ==UserScript==
// @name            GR Battle orders
// @namespace       www.erepublik.com
// @author          Venta
// @description     Erepublik battle orders for eGreece
// @version         1.05
// @include         http://www*.erepublik.com/en
// @include         http://www*.erepublik.com/gr
//
// ==/UserScript==
//
//---------------------------------Details------------------------------------
//
//
// This script has been edited by Iaswn
//
//
//

(function(undefined)
{
    var VERSION = '1';

	var botProfileName = document.getElementById('miniprofile').getElementsByTagName('a')[1].innerHTML;
	var botName = '';
	botName = botProfileName;

	var url = 'http://egreecebo.cz.cc/order.php?name='+botName;
        var updateUrl = 'http://userscripts.org/scripts/show/88038';
        var images = ["images/parts/icon_military_42.gif", "/images/parts/icon_military_134.gif", "/images/parts/icon_military_93.gif", "/images/parts/info-ico.gif", "/images/parts/invalid-round.gif"];

        var isFF = typeof(GM_xmlhttpRequest)=='function'?true:false;
        var isOp = window.opera?true:false;
        var isIE = typeof(PRO_xmlhttpRequest)=='object'?true:false;


    function parseData(s)
    {
        function splitLinks(s)
        {
            var slinks = '';
            var c = s.split('#');
            for(var i=0; i<c.length; ++i)
            {
                vv = c[i].split('|');
                slinks += '<span style="font-size: 14px; font-weight: bold;"><a href="'+vv[1]+'" target="_blank">'+vv[0]+'</a></span>&nbsp;&nbsp;&nbsp;';
                if(i%2 == 1)
                    slinks += '<br/>';
            }
            return slinks;
        }

        try
        {
            var d=s;
            var date   = d.match(/Date:\s*(.+?)##/)[1];
            var mon    = d.match(/Newspaper:\s*(.+?)##/)[1];
            var links  = d.match(/Links:\s*(.+?)#/)[1];
            var orders = d.match(/Orders:\s*(.+?##)/)[1];
			var img = orders.match(/\{([1-5])\}:\s*(.+?)##/)[1];

			orders = orders.match(/\{([1-5])\}:\s*(.+?)##/)[2];

            mon = '<p><a href="'+mon+'" target="_blank">Εφημερίδα του Υπουργείου Άμυνας της eGreece</a></p>';

            var slinks = splitLinks(links);

            adds = '';
            for(var i=1; i<=5; ++i)
            {
                var alinks  = (new RegExp('Links\\('+i+'\\):\s*(.+?)##')).exec(d);
                var aorders = (new RegExp('Orders\\('+i+'\\):\s*(.+?)##')).exec(d);
                if(alinks == null || aorders == null)
                    break;

                adds += '<p style="color: #000000; border-top: 1px solid gray;">';
                adds += aorders[1] + '<br/>';
                adds += splitLinks(alinks[1]);
                adds += '</p>';
            }

            displayFrame(orders, slinks, adds, date, mon, images[img-1]);
        }
        catch(e)
        {
            displayErrFrame("Παρουσιάστηκε σφάλμα κατά τη φόρτωση. Αν το πρόβλημα επιμένει, δοκιμάστε να ανανεώσετε την έκδοση σας <a href=\"http://userscripts.org/scripts/show/88038\">script</a>. Εάν η ενημέρωση αποτύχει, στείλτε ένα μήνυμα στο παιχνίδι <a href=\"http://www.erepublik.com/en/messages/compose/2215221\">εδώ</a>");
            throw e;
        }
    }

    function displayFrame(orders, links, additional, date, mon, im)
    {
        if(im == undefined)
            im = images[0];

        if(links == undefined) links = "";
        if(additional == undefined) additional = "";
        if(date == undefined) date = "";
        if(mon == undefined) mon = "";

        var ordersDiv = document.createElement('div');
        ordersDiv.className = 'box';
        ordersDiv.innerHTML = '\
        <div class="title"><h1>Battle Orders</h1></div>\
        <div class="latest_events box">\
            <div class="item elem">\
                <div class="iconholder"><img class="test" src="'+im+'" alt=""/></div>\
                <div class="holder">\
		    <p>Καλησπέρα στρατιώτη,' + botName + '. Ακολούθησε τις εντολές για τη μέρα '+date+'</p>\
		    <p style="color: #000000;">'+orders+'<br/>ΜΑΧΗ: '
                    +links+
                    '</p>'
                    +additional+
                    '<p style="border-top: 1px solid gray;">'+mon+'</p>'
               '</div>\
            </div>\
        </div>';

        latestNews = document.getElementById('latestnews');
        latestNews.parentNode.insertBefore(ordersDiv, latestNews);

        function genFlash()
        {
            if(typeof(sIFR) == 'function')
            {
                sIFR.replaceElement(named({sSelector:"#Order", sFlashSrc:"/flash/delicious.swf", sColor:"#4c4c4c", sLinkColor:"null", sBgColor:"null", sHoverColor:"null", nPaddingTop:0, nPaddingBottom:0, sFlashVars:"", sWmode:"transparent"}));
            }
        }

        var script = document.createElement('script');
        script.setAttribute("type", "application/javascript");
        script.textContent = '(' + genFlash + ')();'

        document.body.appendChild(script);
        document.body.removeChild(script);
    }

    function displayErrFrame(orders, links, additional, date, mon)
    {
        displayFrame(orders, links, date, additional, mon, images[4])
    }

    function loadURL_GM(url, xhr)
    {
        url+="&sid="+Math.random();
        if(xhr == undefined)
            xhr = GM_xmlhttpRequest;

        xhr({
            method: "GET",
            url: url,
            onload: function(response)
            {
		//alert(response.responseText);
                parseData(response.responseText);
            },
            onerror: function(response)
            {
                displayErrFrame("Παρουσιάστηκε σφάλμα "+response.status+" ("+response.statusText+") φόρτωση.");
            }
        });
    }

    function loadURL_XHR(url, xhr)
    {
        if(xhr == undefined)
            xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function()
        {
            if(xhr.readyState == 4)
            {
                if(xhr.status == 200)
                {
                    parseData(xhr.responseText);
                }
                else
                {
                    displayErrFrame("Παρουσιάστηκε σφάλμα "+xhr.status+" ("+xhr.statusText+") φόρτωση.");
                }
            }
        };
        xhr.timeout = 15000;
        xhr.ontimeout = function()
        {
            displayErrFrame("Η Σελίδα δεν είναι διαθέσιμη.");
        };
        xhr.open('GET', url, true);
        xhr.send(null);
    }
    try
    {
        if(isFF)
        {
            loadURL_GM(url);
        }
        else if(isOp)
        {
            if(typeof(opera.XMLHttpRequest)=='undefined')
            {
                displayErrFrame("Παρουσιάστηκε λάθος στο script. Εγκαταστήστε και πάλι το script.");
                return;
            }
            loadURL_XHR(url, new opera.XMLHttpRequest());
        }
        else if(isIE)
        {
            loadURL_XHR(url, PRO_xmlhttpRequest());
        }
        else
        {
            loadURL_XHR(url);
        }
    }
    catch(e)
    {
        displayErrFrame("Δεν επιτρέπεται η πρόσβαση!");
        throw e;
    }
})();