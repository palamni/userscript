// ==UserScript==
// @author         Power Feliz
// @name           SouBueFixe
// @namespace      damegeErep
// @description    FU
// @version        1.222
// @include        http://www.erepublik.com/*/citizen/profile/*
// @include        http://www.erepublik.com/*/military/battlefield/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// @require        http://jquery-json.googlecode.com/files/jquery.json-2.2.min.js

// ==/UserScript==

// Changelog:
// =============================================================================
// v1.0
// - Work :D

// Chrome :D
// =============================================================================
var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

if (is_chrome) {
	unsafeWindow = window;

	function GM_addStyle(css) {
		var style = document.createElement('style');
		style.textContent = css;
		document.getElementsByTagName('head')[0].appendChild(style);
	}

	function GM_deleteValue(name) {
		localStorage.removeItem(name);
	}

	function GM_getValue(name, defaultValue) {
		var value = localStorage.getItem(name);
		if (value == 'false')
			return false;
		return value || defaultValue;
	}

	function GM_log(message) {
		console.log(message);
	}

	function GM_registerMenuCommand(name, funk) {
	//todo
	}

	function GM_setValue(name, value) {
		localStorage.setItem(name, value);
	}
}

// Css :D
// =============================================================================
GM_addStyle(
  '#DI_options { float: left; margin-top: 10px; }' +
  '#DI_opt_content { float: left; background-color: #eee; padding: 10px 5px; width: 85px; -moz-border-radius: 5px 5px 5px 5px }'+
  '#DI_opt_content h2 { font-size: 12px; margin-bottom: 4px; text-shadow: #fff 0.2em 0.2em; text-align: center; } '+
  '#DI_show_hide { display: block; width: 99%; margin-top: 4px; text-align: center; }' +
  '#DI_opt_content small { display: block; width: 100%; margin-top: 10px; text-align: center; }'+
  '.DI_option { display: none; font-size: 10px; -moz-border-radius: 5px 5px 5px 5px; border-top: 1px solid #E5E5E5; background: none repeat scroll 0 0 #FFFFFF; border bottom: 1px solid #F0F0F0; float: left; padding: 0 3px; width: 79px; }' +
  '.DI_option input { width: 58px; font-size: 10px; margin: 2px; } '+
  '.DI_option li { width: 73px; } '+
  '.DI_option input[type=checkbox] { margin: 0; width: 35px; }'+
  '.info_message { left: 600px; top: 540px; width: 200px; z-index: 2001; position: absolute; }'+
  '.info_message td { text-align: center; padding: 10px 10px 10px 70px !important; }'+
  '#BHTable { width: 100%; border: 0; } ' +
  '#BHTable tr { height: 20px; line-height: 18px; }'
);

// Global vars
// =============================================================================
var version   = '1.1 NE';

var rank = new Array();

rank['Recruit'] = 1;
rank['Private'] = 2;
rank['Private*'] = 3;
rank['Private**'] = 4;
rank['Private***'] = 5;
rank['Corporal'] = 6;
rank['Corporal*'] = 7;
rank['Corporal**'] = 8;
rank['Corporal***'] = 9;
rank['Sergeant'] = 10;
rank['Sergeant*'] = 11;
rank['Sergeant**'] = 12;
rank['Sergeant***'] = 13;
rank['Lieutenant'] = 14;
rank['Lieutenant*'] = 15;
rank['Lieutenant**'] = 16;
rank['Lieutenant***'] = 17;
rank['Captain'] = 18;
rank['Captain*'] = 19;
rank['Captain**'] = 20;
rank['Captain***'] = 21;
rank['Major'] = 22;
rank['Major*'] = 23;
rank['Major**'] = 24;
rank['Major***'] = 25;
rank['Commander'] = 26;
rank['Commander*'] = 27;
rank['Commander**'] = 28;
rank['Commander***'] = 29;
rank['Lt Colonel'] = 30;
rank['Lt Colonel*'] = 31;
rank['Lt Colonel**'] = 32;
rank['Lt Colonel***'] = 33;
rank['Colonel'] = 34;
rank['Colonel*'] = 35;
rank['Colonel**'] = 36;
rank['Colonel***'] = 37;
rank['General'] = 38;
rank['General*'] = 39;
rank['General**'] = 40;
rank['General***'] = 41;
rank['Field Marshal'] = 42;
rank['Field Marshal*'] = 43;
rank['Field Marshal**'] = 44;
rank['Field Marshal***'] = 45;
rank['Supreme Marshal'] = 46;
rank['Supreme Marshal*'] = 47;
rank['Supreme Marshal**'] = 48;
rank['Supreme Marshal***'] = 49;
rank['National Force'] = 50;
rank['National Force*'] = 51;
rank['National Force**'] = 52;
rank['National Force***'] = 53;
rank['World Class Force'] = 54;
rank['World Class Force*'] = 55;
rank['World Class Force**'] = 56;
rank['World Class Force***'] = 57;
rank['Legendary Force'] = 58;
rank['Legendary Force*'] = 59;
rank['Legendary Force**'] = 60;
rank['Legendary Force***'] = 61;
rank['God of War'] = 62;

var str     = new Array();
    str[0]  = 0;
    str[1]  = 0;
var wAtt    = new Array();
    wAtt[0] = 0;
    wAtt[1] = 0;

var eHealth = 100;

var MIN_FIGHTER_HEALTH = 20;
var CURRENT_HEALTH     = 100;
var HEALT_LIMIT        = 300;
var NINJA_PUNCH        = 0;
var NINJA_EAT          = 0;

// Functions
// =============================================================================
function str_replace(haystack, needle, replacement) {
	var temp = haystack.split(needle);
	return temp.join(replacement);
}

function getStatus() {
	CURRENT_HEALTH = unsafeWindow.SERVER_DATA.health;
	HEALT_LIMIT    = unsafeWindow.food_remaining;
}

function calcInf(r, s, a) {
  var rankKoef   = (r - 1)/20 + 0.3;
  var strKoef    = (s / 10) + 40;
  var weaponKoef = 1 + a/100;
  
  return Math.floor(rankKoef * strKoef * weaponKoef);
}

function calcDamage(mystr, estr, a) {
  var dmg        = 60 + (mystr - estr) / 10;
  var koefweapon = 1 + (a[0] - a[1]) / 400;

  return Math.floor(dmg * koefweapon);
}

function accView(box, info) {
  var str = $('.citizen_military:eq(0) h4').text().trim();
  
  if (str.length > 0)
    var nstr = parseInt( str_replace(str, ',', '') );
   
  var mRank = $('.citizen_military:eq(1) h4').text().trim();
    
  if ( mRank.length > 0 ) {
    var Influence = new Array();
    Influence[0] = calcInf(rank[mRank], nstr, 0);
    Influence[1] = calcInf(rank[mRank], nstr, 20);
    Influence[2] = calcInf(rank[mRank], nstr, 40);
    Influence[3] = calcInf(rank[mRank], nstr, 60);
    Influence[4] = calcInf(rank[mRank], nstr, 80);
    Influence[5] = calcInf(rank[mRank], nstr, 100);
      
    var tStr = nstr + info['DI_str_per_day'];
      
    Influence[6]  = calcInf(rank[mRank], tStr, 0);
    Influence[7]  = calcInf(rank[mRank], tStr, 20);
    Influence[8]  = calcInf(rank[mRank], tStr, 40);
    Influence[9]  = calcInf(rank[mRank], tStr, 60);
    Influence[10] = calcInf(rank[mRank], tStr, 80);
    Influence[11] = calcInf(rank[mRank], tStr, 100);
    
    var nextDay = '<div class="stat"><small>Tomorrow (+'+info['DI_str_per_day']+'str):</small><small><strong>'+Influence[6]+'</strong></small></div>';
  
    box.append('<h3>Influence per fight</h3>');
    box.append('<div class="citizen_military" style="margin-bottom: 2px;"><strong>Q0</strong> <h4>'+Influence[0]+'</h4>'+nextDay+'</div>');
     
    if ( info['DI_weapon_Q1'] != false ) {
      nextDay = '<div class="stat"><small>Tomorrow (+'+info['DI_str_per_day']+'str):</small><small><strong>'+Influence[7]+'</strong></small></div>';
      box.append('<div class="citizen_military" style="margin-bottom: 2px;"><strong>Q1</strong> <h4>'+Influence[1]+'</h4>'+nextDay+'</div>');
    }
    
    if ( info['DI_weapon_Q2'] != false ) {
      nextDay = '<div class="stat"><small>Tomorrow (+'+info['DI_str_per_day']+'str):</small><small><strong>'+Influence[8]+'</strong></small></div>';
      box.append('<div class="citizen_military" style="margin-bottom: 2px;"><strong>Q2</strong> <h4>'+Influence[2]+'</h4>'+nextDay+'</div>');
    }
    
    if ( info['DI_weapon_Q3'] != false ) {
      nextDay = '<div class="stat"><small>Tomorrow (+'+info['DI_str_per_day']+'str):</small><small><strong>'+Influence[9]+'</strong></small></div>';
      box.append('<div class="citizen_military" style="margin-bottom: 2px;"><strong>Q3</strong> <h4>'+Influence[3]+'</h4>'+nextDay+'</div>');
    }
    
    if ( info['DI_weapon_Q4'] != false ) {
      nextDay = '<div class="stat"><small>Tomorrow (+'+info['DI_str_per_day']+'str):</small><small><strong>'+Influence[10]+'</strong></small></div>';
      box.append('<div class="citizen_military" style="margin-bottom: 2px;"><strong>Q4</strong> <h4>'+Influence[4]+'</h4>'+nextDay+'</div>');
    }
    
    if ( info['DI_weapon_Q5'] != false ) {
      nextDay = '<div class="stat"><small>Tomorrow (+'+info['DI_str_per_day']+'str):</small><small><strong>'+Influence[11]+'</strong></small></div>';
      box.append('<div class="citizen_military" style="margin-bottom: 2px;"><strong>Q5</strong> <h4>'+Influence[5]+'</h4>'+nextDay+'</div>');
    }

    if ( info['DI_mod_weapon'] > 0 ) { 
      var modInf = new Array();
      modInf[0] = calcInf(rank[mRank], nstr, info['DI_mod_weapon']);
      modInf[1] = calcInf(rank[mRank], tStr, info['DI_mod_weapon']);
      nextDay = '<div class="stat"><small>Tomorrow (+'+info['DI_str_per_day']+'str):</small><small><strong>'+modInf[1]+'</strong></small></div>';
      box.append('<div class="citizen_military" style="margin-bottom: 2px;"><strong>Mod. weapon</strong> <h4>'+modInf[0]+'</h4>'+nextDay+'</div>');
    }

    if ( info['DI_influence_Q5'] != false ) {
      box.append('<br clear="all"/><h3 style="margin-top: 15px;">Influence - Q5 weapon (100/50)</h3>');
      box.append('<div class="citizen_military" style="margin-bottom: 2px;"><strong>Influence 30 fights</strong> <h4>Q5: '+(30 * Influence[5])+'</h4> <div class="stat"><small>Tomorrow (+'+info['DI_str_per_day']+'str):</small><small><strong>300 health with Q5: '+(30 * Influence[11])+'</strong></small></div></div>');
      box.append('<div class="clear"></div>');
      box.append('<div class="citizen_military"><strong>Max Influence</strong> <h4>Q5: '+(38 * Influence[5])+'</h4> <div class="stat"><small>Tomorrow (+'+info['DI_str_per_day']+'str):</small><small><strong>380 health with Q5: '+(38 * Influence[11])+'</strong></small></div></div>');
    }
         
    if ( info['DI_influence_Q0'] != false ) { 
      box.append('<h3>Influence - Q0 weapon</h3>');
      box.append('<div class="citizen_military" style="margin-bottom: 2px;"><strong>Influence 30 fights</strong> <h4>Q0: '+(30 * Influence[0])+'</h4> <div class="stat"><small>Tomorrow (+'+info['DI_str_per_day']+'str):</small><small><strong>Q0: '+(30 * Influence[6])+'</strong></small></div></div>');
      box.append('<div class="clear"></div>');
      box.append('<div class="citizen_military"><strong>Max Influence</strong> <h4>Q0: '+(38 * Influence[0])+'</h4> <div class="stat"><small>Tomorrow (+'+info['DI_str_per_day']+'str):</small><small><strong>Q0: '+(38 * Influence[6])+'</strong></small></div></div>');
    }
  }
}

function setLink2BH(a, d, att, def) {
  $('#attackerHero').html(a);
  $('#defenderHero').html(d);

  $('#myStatBox').val('Att Top5: '+att+' vs Def Top5: '+def);
}

function kill(str, att, wellness) {
  var koefStr    = 60 + ( str[0] - str[1] ) / 10;
  var koefWeapon = 1 + (att[0] - (att[1]*20) ) / 400;
  var dmg        =  koefStr * koefWeapon;

  var hit = Math.ceil( wellness/dmg );
  
  $('#myKillBox').html('<h4>KILL: '+hit+' fight!!! Possibly: D</h4>');
} 

function getOptions() {
  var info = new Array();
  
  info['DI_str_per_day'] = GM_getValue('DI_str_per_day');
  if ( typeof info['DI_str_per_day'] == 'undefined' )
    info['DI_str_per_day'] = 0;
    
  info['DI_weapon_Q1'] = GM_getValue('DI_weapon_Q1');
  if ( typeof info['DI_weapon_Q1'] == 'undefined' )
    info['DI_weapon_Q1'] = false;
    
  info['DI_weapon_Q2'] = GM_getValue('DI_weapon_Q2');
  if ( typeof info['DI_weapon_Q2'] == 'undefined' )
    info['DI_weapon_Q2'] = false;
    
  info['DI_weapon_Q3'] = GM_getValue('DI_weapon_Q3');
  if ( typeof info['DI_weapon_Q3'] == 'undefined' )
    info['DI_weapon_Q3'] = false;
    
  info['DI_weapon_Q4'] = GM_getValue('DI_weapon_Q4');
  if ( typeof info['DI_weapon_Q4'] == 'undefined' )
    info['DI_weapon_Q4'] = false;
    
  info['DI_weapon_Q5'] = GM_getValue('DI_weapon_Q5');
  if ( typeof info['DI_weapon_Q5'] == 'undefined' )
    info['DI_weapon_Q5'] = false;
    
  info['DI_influence_Q5'] = GM_getValue('DI_influence_Q5');
  if ( typeof info['DI_influence_Q5'] == 'undefined' )
    info['DI_influence_Q5'] = false;
    
  info['DI_influence_Q0'] = GM_getValue('DI_influence_Q0');
  if ( typeof info['DI_influence_Q0'] == 'undefined' )
    info['DI_influence_Q0'] = false;

  info['DI_mod_weapon'] = GM_getValue('DI_mod_weapon');
  if ( typeof info['DI_mod_weapon'] == 'undefined' )
    info['DI_mod_weapon'] = 0;
    
  info['DI_offerID'] = GM_getValue('DI_offerID');
  if ( typeof info['DI_offerID'] == 'undefined' )
    info['DI_offerID'] = 0;
    
  info['DI_amount'] = GM_getValue('DI_amount');
  if ( typeof info['DI_amount'] == 'undefined' )
    info['DI_amount'] = 0;
        
  return info;
}

function CreateMenu(info) {
  $('#sidebar').append('<div id="DI_options"><div id="DI_opt_content"><h2>D&I Options</h2>'+
                          '<div class="DI_option"><strong>Str per day:</strong> <input type="text" id="DI_str_per_day" value="'+info['DI_str_per_day']+'" /></div>'+
                          '<div class="DI_option"><strong>Weapons:</strong><br /><ul>'+
                          '<li>Q1 <input type="checkbox" id="DI_weapon_Q1" value="1" '+(info['DI_weapon_Q1'] == true ? 'checked="checked"' : '')+' /></li>'+
                          '<li>Q2 <input type="checkbox" id="DI_weapon_Q2" value="2" '+(info['DI_weapon_Q2'] == true ? 'checked="checked"' : '')+' /></li>'+
                          '<li>Q3 <input type="checkbox" id="DI_weapon_Q3" value="3" '+(info['DI_weapon_Q3'] == true ? 'checked="checked"' : '')+' /></li>'+
                          '<li>Q4 <input type="checkbox" id="DI_weapon_Q4" value="4" '+(info['DI_weapon_Q4'] == true ? 'checked="checked"' : '')+' /></li>'+
                          '<li>Q5 <input type="checkbox" id="DI_weapon_Q5" value="5" '+(info['DI_weapon_Q5'] == true ? 'checked="checked"' : '')+' /></li></ul></div>'+
                          '<div class="DI_option"><strong>Weapon:</strong><br />'+
                          '<input type="text" id="DI_mod_weapon" value="'+info['DI_mod_weapon']+'" /></div>'+
                          '<div class="DI_option"><strong>Influence:</strong><br /><ul>'+
                          '<li>Q5 <input type="checkbox" id="DI_influence_Q5" value="1" '+(info['DI_influence_Q5'] == true ? 'checked="checked"' : '')+' /></li>'+
                          '<li>Q0 <input type="checkbox" id="DI_influence_Q0" value="5" '+(info['DI_influence_Q0'] == true ? 'checked="checked"' : '')+' /></li></ul></div>'+
                          '<a href="javascript: void(0);" id="DI_show_hide">Show/Hide</a>'+
                          '<small>V: '+version+'</small></div>'+
                          '</div>');
    
  $('#DI_str_per_day').live('keyup', function() {
    var val = parseInt( $('#DI_str_per_day').val() );
    GM_setValue('DI_str_per_day', val );
  });
    
  $('#DI_weapon_Q1').live('change', function() {
    var val = $('#DI_weapon_Q1').attr('checked');
    GM_setValue('DI_weapon_Q1', val );
  });
    
  $('#DI_weapon_Q2').live('change', function() {
    var val = $('#DI_weapon_Q2').attr('checked');
    GM_setValue('DI_weapon_Q2', val );
  });
    
  $('#DI_weapon_Q3').live('change', function() {
    var val = $('#DI_weapon_Q3').attr('checked');
    GM_setValue('DI_weapon_Q3', val );
  });
    
  $('#DI_weapon_Q4').live('change', function() {
    var val = $('#DI_weapon_Q4').attr('checked');
    GM_setValue('DI_weapon_Q4', val );
  });
    
  $('#DI_weapon_Q5').live('change', function() {
    var val = $('#DI_weapon_Q5').attr('checked');
    GM_setValue('DI_weapon_Q5', val );
  });
    
  $('#DI_influence_Q5').live('change', function() {
    var val = $('#DI_influence_Q5').attr('checked');
    GM_setValue('DI_influence_Q5', val );
  });
    
  $('#DI_influence_Q0').live('change', function() {
    var val = $('#DI_influence_Q0').attr('checked');
    GM_setValue('DI_influence_Q0', val );
  });
    
  $('#DI_mod_weapon').live('keyup', function() {
    var val = parseInt( $('#DI_mod_weapon').val() );
		GM_setValue('DI_mod_weapon', val );
  });

  $('#DI_show_hide').live('click', function() {
    var ch = $('.DI_option');
      
    if ( ch.css('display') == 'none' )
      ch.css('display', 'block');
    else
      ch.css('display', 'none');
  }); 
}

function BHStats(att, def) {
  $('#BHTable').remove();
  $('#content').append('<table id="BHTable"><tr><td>Type</td><td>Citizen</td><td>Kills</td><td>War influence</td></tr>'+att+def+'</table>');
}

jQuery.fn.cssChange = function(callback) {
	var element = jQuery(this);
	element.each(
		function(e) {
			var elmnt = jQuery(this);
			elmnt.data("lastStyle", elmnt.css('width'));
			window.watchStyleChange = window.watchStyleChange ? window.watchStyleChange : [];
			window.watchStyleChange.push({"element": elmnt, "callback": callback});
		}
	)
	return element;
}


// MAIN function
// =============================================================================
function main() {
  if (typeof unsafeWindow.$j == 'undefined')
    window.setTimeout(main, 1000);
  else {
    var info = getOptions();                                                                
    CreateMenu(info);

    var box = $('.citizen_content');
    if ( box.html() != null )
      accView(box, info);
    else {
    
      //show exact percentages
      $('.progress').each(function() {
        $(this).css({'text-align': 'center', 'overflow': 'visible'});
      });

      $('#blue_domination').css('opacity', '1');
      $('#red_domination').css('opacity', '1');
  
      var exactDomination = parseFloat($('#domination_bar').css('width'));
      $('#blue_domination').text(exactDomination.toFixed(4) + '%');
      $('#red_domination').text( (100 - exactDomination).toFixed(4) + '%');

      setInterval(function() {
      	if(window.watchStyleChange) {
      		for(e in window.watchStyleChange) {
      			if(window.watchStyleChange[e].element.data("lastStyle") != window.watchStyleChange[e].element.css('width')) {
      				window.watchStyleChange[e].callback.apply(window.watchStyleChange[e].element);
      				window.watchStyleChange[e].element.data("lastStyle", window.watchStyleChange[e].element.css('width'))
      			};
      		}
      	}
      },500);
      	
      $('#domination_bar').cssChange(function(){
        exactDomination = parseFloat($('#domination_bar').css('width'));
        $('#blue_domination').animate({'opacity': '0'}, 'fast').text(exactDomination.toFixed(4) + '%');
        $('#red_domination').animate({'opacity': '0'}, 'fast').text((100 - exactDomination).toFixed(4) + '%');
        setTimeout(function() { $('#blue_domination, #red_domination').animate({'opacity': '1'}, 'fast'); }, 1000);
      });	
      
      unsafeWindow.$j("body").ajaxSuccess(function(e, res, opt) { 
        getStatus();
        
        if (opt.url.indexOf('/battle-stats/') > -1) {
          var att  = unsafeWindow.SERVER_DATA.invaderId;
      	  var def  = unsafeWindow.SERVER_DATA.defenderId;

          if( unsafeWindow.SERVER_DATA.mustInvert) {
				    att = unsafeWindow.SERVER_DATA.defenderId;
				    def = unsafeWindow.SERVER_DATA.invaderId;
          }

      	  var zone = unsafeWindow.SERVER_DATA.zoneId;

	        var bh = eval("("+res.responseText+")");
          
          var aBH = '';
          var dBH = '';

          //attacker
          var attID = bh['current'][zone][att][0];
          var defID = bh['current'][zone][def][0];
          
          if ( attID.citizen_id > 0 )
             aBH = '<a target="_blank" href="http://www.erepublik.com/en/citizen/profile/'+bh.fightersData[attID.citizen_id].id+'"><div class="crown"></div><img width="25" height="25" alt="" src="'+bh.fightersData[attID.citizen_id].avatar+'"><small>'+bh.fightersData[attID.citizen_id].name+'</small><strong>'+attID.damage+'</strong></a>';
            
          if ( defID.citizen_id > 0 )
             dBH = '<a target="_blank" href="http://www.erepublik.com/en/citizen/profile/'+bh.fightersData[defID.citizen_id].id+'"><div class="crown"></div><img width="25" height="25" alt="" src="'+bh.fightersData[defID.citizen_id].avatar+'"><small>'+bh.fightersData[defID.citizen_id].name+'</small><strong>'+defID.damage+'</strong></a>';
           
          var top5ABH = ''; 
  	      var top5Att = 0;
          for ( var i = 0; i < bh['current'][zone][att].length; i++ ) {
  	       top5ABH = top5ABH+'<tr><td>Attacker</td><td><a target="_blank" href="http://www.erepublik.com/en/citizen/profile/'+bh.fightersData[bh['current'][zone][att][i].citizen_id].id+'">'+bh.fightersData[bh['current'][zone][att][i].citizen_id].name+'</a></td><td>'+bh['current'][zone][att][i].kills+'</td><td><strong>'+bh['current'][zone][att][i].damage+'</strong></td></tr>';
           
           '<a target="_blank" href="http://www.erepublik.com/en/citizen/profile/'+bh.fightersData[bh['current'][zone][att][i].citizen_id].id+'"><div class="crown"></div><img width="25" height="25" alt="" src="'+bh.fightersData[attID.citizen_id].avatar+'"><small>'+bh.fightersData[attID.citizen_id].name+'</small><strong>'+bh['current'][zone][att][i].damage+'</strong></a>';
           top5Att = top5Att + parseInt(bh['current'][zone][att][i].damage);
          }
  
          var top5DBH = '';
  	      var top5Def = 0;
      	  for ( var i = 0; i < bh['current'][zone][def].length; i++ ) {
      	    top5DBH = top5DBH+'<tr><td>Defender</td><td><a target="_blank" href="http://www.erepublik.com/en/citizen/profile/'+bh.fightersData[bh['current'][zone][def][i].citizen_id].id+'">'+bh.fightersData[bh['current'][zone][def][i].citizen_id].name+'</a></td><td>'+bh['current'][zone][def][i].kills+'</td><td><strong>'+bh['current'][zone][def][i].damage+'</strong></td></tr>';
            top5Def = top5Def + parseInt(bh['current'][zone][def][i].damage);
      	  }          
          
          //BH && Stats
          setLink2BH(aBH, dBH, top5Att, top5Def);
          
          //BH candidats :)
          BHStats(top5ABH, top5DBH);
        }//end BH
        else if (opt.url.indexOf('change-weapon') != -1) {
            var nw = eval("("+res.responseText+")");
            wAtt[0] = nw.weaponDamage;
            kill(str, wAtt, eHealth);
        }//end Weapon Change
      });
            
      if ( unsafeWindow.SERVER_DATA.onlySpectator != 0 )
        return false;

      str[0] = $('#fighter_skill').html();
      str[0] = parseInt( str_replace(str[0], ',', '') );
      
      str[1] = $('#enemy_skill').html();
      str[1] = parseInt( str_replace(str[1], ',', '') );  

      wAtt[0] = $('.weapon_attributes p strong').html();
      wAtt[1] = $('.weapon img').attr('src');
      wAtt[1] = wAtt[1].match(/\d/g);

      eHealth = $('#enemy_life').attr('title');
      eHealth = str_replace(eHealth, 'Opponent health: ', '');
      
      var content = $('#player_rank');
      content.append('<textarea id="myStatBox" style="position: absolute; top: -126px; left: 27px; width: 330px; height: 15px;"></textarea>');      
      content.append('<div id="myKillBox" style="position: absolute; top: -200px; left: 100px; width: 170px;"></div>');
      
      kill(str, wAtt, eHealth);
      
      //bonus Fight button :D
      getStatus(); 
$('.beta_notice').remove();
      $('<a class="beta_notice" href="javascript: void(0);" title="Ninja Attack"></a>').appendTo('#pvp');
      var fb = $('.beta_notice');
          
      fb.css('background', 'url(data:image/gif;base64,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%3D%3D) no-repeat');
      fb.css('display', 'block');
      fb.css('width', '50px');
      fb.css('height', '50px');
        
      fb.bind('click', function() {  
        NINJA_PUNCH = 1;
        fight();
      });
      
      $('.help_button').remove();
      $('<a id="ninjaEat" href="javascript: void(0);" title="Ninja Eat"></a>').appendTo('#pvp');
      var eb = $('#ninjaEat');
      eb.css('background', 'url(data:image/gif;base64,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%3D%3D) no-repeat');
      eb.css('display', 'block');
      eb.css('width', '50px');
      eb.css('height', '50px');
      eb.css('position', 'absolute');
      eb.css('right', '7px');
      eb.css('bottom', '7px');
      
      eb.bind('click', function() {  
        NINJA_EAT = 1;
        eat();
      });        	  
    }
  }//end $j init ;)
}



var version = "0.7";
var health = 100;
var jatah = 300;
var tank = 0;

// common functions
function compareVersion(newVersion){
 var arrNow = version.split('.');
 var arrNew = newVersion.split('.');
 while (arrNow.length < arrNew.length) arrNow.push("0");
 for (var i=0 ; i < arrNow.length ; i++){
 if (parseInt(arrNow[i]) < parseInt(arrNew[i])) return true;
 }
 return false;
}

function checkLastestVersion(){
 GM_xmlhttpRequest({
 method: 'GET',
 url: 'http://erep.in/page/monyet_tempur.version',
 onload: function (res) {
 if (compareVersion(res.responseText)){
 $('div#hinfo div#clock').prepend('<span id="monyet_tempur_update"><a href="http://erep.in/page/monyet_tempur.user.js" title="Klik untuk update Monyet Tempur"><span>Monyet Tempur Versi ' + res.responseText + ' telah tersedia</span></a></span>');
 $('#monyet_tempur_update a').click(function(){
 $('#monyet_tempur_update').remove();
 });
 } else {
 GM_setValue('last_update_check', new Date().getTime().toString());
 }
 }, onerror: function(res){
 $('div#hinfo div#clock').prepend('<span id="monyet_tempur_update">Error check update monyet perang.</span>');
 }
 });
}

function numRound(x, y){
 return Math.round(x * Math.pow(10,y))/Math.pow(10,y);
}

function makan(jumlah){
 if (!jumlah) jumlah = 1;
 for (var x=0;x<jumlah;x++) unsafeWindow.$j('#hospital_btn').click();
}

function perang(jumlah){
 if (!jumlah) jumlah = 1;
 for (var x=0;x<jumlah;x++) unsafeWindow.$j('#fight_btn').click();
}

function kotaksehat(jumlah){
 if (!jumlah) jumlah = 1;
 for (var x=0;x<jumlah;x++) unsafeWindow.$j('#health_kit_btn').click();
}

function bacaStatus(){
 health = unsafeWindow.SERVER_DATA.health;
 jatah = unsafeWindow.food_remaining;
}

function tombolNyala(nyala){
 if (nyala){
 $('input#btnGattling').removeAttr('disabled');
 $('input#btnWebe').removeAttr('disabled');
 } else {
 $('input#btnGattling').attr('disabled','disabled');
 $('input#btnWebe').attr('disabled','disabled');
 }
}

function mulai(){
 if (typeof unsafeWindow.$j == 'undefined')
 window.setTimeout(mulai, 1000);
 else {
 if (unsafeWindow.SERVER_DATA.onlySpectator != 0) return;
 bacaStatus();
 var textAsli = $('div[id="pvp_header"] h2').html();
 $('div#sidebar').append('<br/><input id="btnGattling" type="button" value="Gattling Gun" />');
 $('input#btnGattling').click(function(e){
 tombolNyala(false);
 var tmp = health;
 while (tmp > 20){ tmp -= 10; perang(); }
 tombolNyala(true);
 $('input#btnUpdateBar').click();
 });
 $('div#sidebar').append('<br/><input id="btnWebe" type="button" value="Wellness Box" />');
 $('input#btnWebe').click(function(e){
 tombolNyala(false);
 var tmp = health;
 while (tmp <= 90){ tmp += 10; kotaksehat(); }
 tombolNyala(true);
 });
 $('div#sidebar').append('<br/><input id="btnUpdateBar" type="button" value="Update Bar" />');
 $('input#btnUpdateBar').click(function(e){
 $('input#btnUpdateBar').attr('disabled','disabled');
 while (unsafeWindow.battleData['attackers'].length >= 10) unsafeWindow.battleData['attackers'].pop();
 while (unsafeWindow.battleData['defenders'].length >= 10) unsafeWindow.battleData['defenders'].pop();
 unsafeWindow.getFighters(unsafeWindow.SERVER_DATA.battleId);
 });
 unsafeWindow.$j("body").ajaxSuccess(function(ev, res, opt) {
 if (opt.url.indexOf('/battle-heroes/') != -1) {
 return;
 }
 bacaStatus();
 if (opt.url.indexOf('/battle-log/') > -1) {
 var isi = eval('(' + res.responseText + ')');
 var kiri = numRound(isi.domination, 4); var kanan = numRound(100-isi.domination, 4);
 if (unsafeWindow.SERVER_DATA.mustInvert){
 kanan = numRound(isi.domination, 4); kiri = numRound(100-isi.domination, 4);
 }
 $('div[id="pvp_header"] h2').html(kiri + '%&nbsp;&nbsp;&nbsp;&nbsp;' + textAsli + '&nbsp;&nbsp;&nbsp;&nbsp;' + kanan + '%');
 $('input#btnUpdateBar').removeAttr('disabled');
 } else if (opt.url.indexOf('/military/fight-shoot') != -1) {
// GM_log('Menembak:\n' + res.responseText);
 } else if (opt.url.indexOf('/eat?') != -1) {
// GM_log('Makan:\n' + res.responseText);
 var hasil = res.responseText;
 hasil = eval(hasil.substring(hasil.indexOf('(')));
 if (hasil.has_food_in_inventory > 0 && health<=90 && jatah>0) makan();
 } else if (opt.url.indexOf('/military/buy-health') != -1) {
// GM_log('Wellness Box:\n' + res.responseText);
 } else if (opt.url.indexOf('/military/fight-heal') != -1) {
 // GM_log('Rumah Sakit:\n' + res.responseText);
 } else {
 GM_log('url: ' + opt.url);
 }
 });
 }
}


// Start action :D
// =============================================================================
$ = jQuery.noConflict();
jQuery(document).ready(function () {  
mulai();
  main();
});