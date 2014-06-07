// ==UserScript==
// @name        Facebook: Clear Game Activity
// @namespace   oneduality
// @include     http://*.facebook.com/*
// @include     https://*.facebook.com/*
// @require     http://code.jquery.com/jquery-1.3.2.min.js
// ==/UserScript==

//NOTE: This was adapted from the clear recent activity code, I just updated this to suiot my needs.
//      The original can be found at http://userscripts.org/scripts/show/67751

/**
 * Defaulting to jQuery 1.3.2 because of a change in browser sniffing code in jQuery 1.4
 *
 * To get it to work with jQuery-1.4.1 and comment out the appropriate sections.
 * jquery-1.4.1.min.js:
 *    [old]  36: var o=r.createElement("div");n="on"+n;var m=n in o;
 *    [new]  36: var o=r.createElement("div");n="on"+n;var m=true;
 *
 * jquery-1.4.1.js
 *    [old] 934: var isSupported = (eventName in el);
 *    [old] 934: var isSupported = true;
 */
$ = $.noConflict(); // prevent conflicts with other libraries

// Recent activity story ids:
//  69 - Likes
//  21 - Added a friend
//  47 - Became a fan of..
//  20 - Wrote on someone elses wall
//
// new Array(0, digit) should be used if for only one value, since
// new Array(int) creates an empty array
var whitelist   = new Array(0);
var button;

var removeApp = ["cityville" , "farmville" , "frontierville" , "treasure isle" , "mafia war" , "restaurant city" , "cafe world","kingdoms of camelot","mafia wars"];
/**
 * Removes all non-whitelisted activities from minifeed.
 */
function removeActivities()
{
    // Minifeed only exists on your profile page.
    //
    // This uses your ability to change your profile image to determine
    // if you're on the profile page. This is more reliable than parsing
    // the URL since it Facebook does some mangling of the URLs.
    if (!$('div#profileimage[class~=can_edit]'))
    {
        return;
    }
    $('li[class~="uiStreamStory"]').each(    
        function()
        {
        	var found = false;
            var activity = $(this).find('a[class~=uiCloseButton]').each(
            function()
            {
                var entry = $(this);
                
                var app_name = $(this).parent().parent().parent().find('.uiStreamSource a:last').text().toLowerCase(); //.find('.uiStreamSource').attr('class');
                
                unsafeWindow.console.log(app_name);
                
                if (entry)
                {
                    var url         = entry.attr("ajaxify");
                    var story_key   = url.match(/ministory_key=(\d+)&/i)[1];
                    var story_type  = url.match(/story_type=(\d+)&/i)[1];
                    var target_id   = url.match(/profile_fbid=(\d+)&/i)[1];


                    //if ($.inArray(parseInt(story_type), whitelist) < 0)
                    if($.inArray(app_name,removeApp) >= 0)
                    {
                    	found = true;
                    	
                        $.ajax(
                        {
                             type    : "POST"
                            ,url     : "http://www.facebook.com/ajax/minifeed.php"
                            // Bare minimum parameters for the request.
                            // - DOM environment variables via Firebug
                            ,data    : { '__a'                   : 1
                                        ,'profile_fbid'          : unsafeWindow.Env.user
                                        ,'post_form_id'          : unsafeWindow.Env.post_form_id
                                        ,'post_form_id_source'   : "AsyncRequest"
                                        ,'ministory_key'         : story_key
                                        ,'story_type'            : story_type
                                        ,'fb_dtsg'               : unsafeWindow.Env.fb_dtsg
                                       }
                        });                        
                    }
                }
            });
            
            if(found)
            {            
            	$(this).remove();
            }

        }); // end each
} // removeActivities

/**
 * Button for on demand deleting.
 */
function createButton()
{
    if (!button)
    {
        button = document.createElement("div");
        button.innerHTML = "<center><div> \
        <span style='margin-bottom: 10px;padding:3px 8px' class='uiButton uiButtonDefault uiButtonMedium'>Remove GAMES Activity</span></div></center>";
        $(button).click(function()
        {
            removeActivities();
        });
        $(button).insertBefore($('#pagelet_ego_pane'));
    }
}

// Wait for the content to be loaded
if (!window.frameElement)
{
    GM_registerMenuCommand("Remove ALL Activity", function() { removeActivities(); });
    var contentCheck = setInterval(
        function()
        {
            // '==' lacks transivity, use '===' for 0 or null checks
            if (typeof unsafeWindow === 'undefined')
            {
                unsafeWindow = window;
            }
            
            if ($('#content').get(0))
            {
                clearInterval(contentCheck);
            }
            createButton();
        }, 200); // Check every 200ms
} // end frame check