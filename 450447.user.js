// ==UserScript==
// @name           FlapMMO Trainer
// @version        1.2
// @namespace      Xzl
// @description    Hack FlapMMO
// @include        http://flapmmo.com/
// ==/UserScript==
    var f=window,y=document,R="undefined"!=typeof jQuery?jQuery:null;function fa(){p=[];d=null;z=!1;w=A[typeof window.trainerDisplayServer!=="undefined"?(window.trainerDisplayServer.value-1):~~(A.length*Math.random())];u&&(w=A[ga(u)%A.length]);console.log("Connecting to "+w);v=new WebSocket(w,"flapmmo.com");v.binaryType="arraybuffer";-1==f.location.href.indexOf("http://flapmmo.com/")?f.location="http://flapmmo.com/":f.top!=f&&"http://flapmmo.clay.io"!=f.top.origin&&"http://clickjogos.uol.com.br"!=f.top.origin?f.top.location="http://flapmmo.com/":(v.onopen=function(c){k=[];S=0;null!=d&&(T=d.x);z=!0;console.log("Socket connected");D()},v.onmessage=function(af){af=af.data;switch((new DataView(af)).getUint8(0)){case 0:E=(new DataView(af)).getUint32(1,!0);d=U(E,[],"");p.push(d);u&&ha(u);D();break;case 2:af=new DataView(af);ia=af.getUint32(1,!0);for(var ab=af.getUint32(5,!0),ad=9,ae=0;ae<ab;ae++){for(var j=af.getUint32(ad,!0),ad=ad+4,ag="";;){var e=af.getUint8(ad++);if(0==e){break}ag+=String.fromCharCode(e)}for(var e=[],ac=af.getUint16(ad,!0),ad=ad+2,o=0;o<ac;o++){e.push(af.getUint16(ad,!0)),ad+=2}ac=-1!=r.indexOf(j);(V.checked||W())&&!ac&&10>e.length&&100<p.length+F.length||j==E||X()&&ac||(j=U(j,e,ag),j.isParty=ac,F.push(j))}break;case 3:af=new DataView(af);ab=1;ad=af.getUint32(ab,!0);ab+=4;for(ae=0;ae<ad;ae++){k.push(new ja(k.length,af.getInt32(ab+0,!0),af.getInt32(ab+4,!0))),ab+=8}break;case 4:if(X()){for(af=new DataView(af),ab=af.getUint16(1,!0),ad=3,ae=0;ae<ab;ae++){j=af.getUint32(ad,!0);ad+=4;for(ag="";;){e=af.getUint8(ad++);if(0==e){break}ag+=String.fromCharCode(e)}for(var o=af.getUint16(ad,!0),ad=ad+2,e=af.getUint16(ad,!0),ad=ad+2,ac=[],i=0;i<o;i++){ac.push(af.getUint16(ad,!0)),ad+=2}j!=E&&(L[j]=ag,o=J[j],null==o||o.maxPlayback>e||-1==o.maxPlayback?(null!=o&&(o.maxPlayback=-1),o=U(j,ac,ag),o.maxPlayback=e,o.isParty=!0,J[j]=o,p.push(o)):(o.jumps=o.jumps.concat(ac),o.maxPlayback=e))}}break;case 5:af=new DataView(af);ab=af.getUint16(1,!0);ad=[];for(ae=0;ae<ab;ae++){j=af.getUint32(3+4*ae,!0),ad.push(j)}console.log("got party "+ad);ka(ad);break;case 6:af=new DataView(af),M=af.getUint32(1,!0),G=af.getInt32(5,!0),M==E&&(N="Congratulations, you have set the highscore! You deserve a crown!")}},v.onclose=function(){console.log("Server "+w+" closed the connection");z=!1})}function la(){Y=!0;Z=+new Date;var c=1+Math.ceil(F.length/4);c>F.length&&(c=F.length);for(;c--;){p.push(F.shift())}for(c=0;c<p.length;c++){p[c].think()}}function ma(){0==H&&(H=+new Date);for(var c=0;H<=+new Date;){++c;if(30<=c){break}la();H+=1000/60}30<=c&&(H=+new Date+1000/60)}function na(){loop();ma();if(Y&&0!=h.width){++$;b.font="10px sans-serif";Z=+new Date;b.clearRect(0,0,m.width,m.height);oa.width&&b.drawImage(oa,0,0,1,1,0,0,1,1);var e=null!=d?d.x-100:0;n=0==n?e:Math.round((n+e)/2);for(e=-(Math.floor(n/2)%288);e<m.width;){b.drawImage(h,0,0,288,512,e,0,288,512),e+=288}b.save();b.translate(-n,0);for(e=0;e<k.length;e++){k[e].draw()}b.restore();0!=G&&(b.save(),b.translate(-n,0),b.globalAlpha*=0.75,b.drawImage(h,0,564,34,72,G-34,330,34,72),b.globalAlpha/=0.75,b.textAlign="right",O("Highscore",G,325),b.restore());for(e=-(Math.floor(n)%336);e<m.width;){b.drawImage(h,584,0,336,111,e,401,336,111),e+=336}var i=0;b.save();b.translate(-n,0);28<=aa?(t+=10,1000<t&&(t=1000)):(t-=10,20>t&&(t=20));W()&&20<t&&(t=20);var j=t;V.checked&&(j=20);for(e=0;e<p.length&&(p[e]==d||i>j&&!p[e].isParty||!(p[e].draw()&&++i>j)||!(2>r.length));++e){}null!=d&&d.draw();b.restore();b.save();b.translate(-n,0);for(e=0;e<k.length;e++){k[e].drawOverlay()}b.restore();N&&z&&(b.save(),K||(K=new I),K.setString(N),e=K.width,b.fillStyle="rgba(0,0,0,0.5)",b.fillRect(m.width/2-e/2-4,200,e+8,18),b.textAlign="center",b.fillStyle="#FFF",K.render(m.width/2,212,!0),b.restore());xa();Y=!1}f.requestAnimationFrame(na)}function xa(){function i(c,e){if(!(o>m.width)){b.save();b.translate(o,l);b.fillStyle="rgba(0,0,0,0.5)";c.setString(e);var q=c.width+10;b.fillRect(0,0,q,14);c.render(5,11,!1);b.restore();o+=q+5}}if(0==s.length){for(var j=0;7>j;j++){s.push(new I)}}b.save();var o=5,l=m.height-18-27;b.font="14px sans-serif";(function(){if(z){if(null!=d){b.save();b.translate(o,l);b.fillStyle="rgba(0,0,0,0.5)";s[6].font="14px sans-serif";s[6].setString(d.nick||"You");var c=s[6].width+50;b.fillRect(0,0,c,18);b.drawImage(h,230,762,34,24,0,-4,34,24);s[6].render(40,14,!1);b.restore();o+=c+5}for(var q=0,x=0;x<r.length;x++){if(r[x]!=E){if(c=r[x],L[c]){b.save();b.translate(o,l);b.fillStyle="rgba(0,0,0,0.5)";b.font="14px sans-serif";var e=L[c]||"",c=e?b.measureText(e).width+50:34;b.fillRect(0,0,c,18);b.drawImage(h,174,982,34,24,0,-4,34,24);b.textAlign="left";O(e,40,14);b.restore();o+=c+5;if(o>m.width){return}}else{++q}}}if(0<q&&(b.save(),b.translate(o,l),b.fillStyle="rgba(0,0,0,0.5)",b.font="14px sans-serif",c=(e="x"+q)?b.measureText(e).width+50:34,b.fillRect(0,0,c,18),b.drawImage(h,174,982,34,24,0,-4,34,24),b.textAlign="left",O(e,40,14),b.restore(),o+=c+5,o>m.width)){return}q=ia;q=0==r.length?q-1:q-r.length;0<q&&(b.save(),b.translate(o,l),b.fillStyle="rgba(0,0,0,0.5)",b.font="14px sans-serif",c=(e="x"+q)?b.measureText(e).width+50:34,b.fillRect(0,0,c,18),b.drawImage(h,6,982,34,24,0,-4,34,24),b.textAlign="left",O(e,40,14),b.restore(),o+=c+5)}})();o=5;l=m.height-18-5;b.font="10px sans-serif";z?(i(s[0],"Score: "+(null==d?0:~~(d.x/100))),i(s[1],"Personal Highscore: "+~~(P/100)),0!=G&&i(s[2],"Server Highscore: "+~~(G/100)),u&&i(s[3],"Party: "+u),i(s[4],"Server #"+(A.indexOf(w)+1)),i(s[5],"FPS: "+aa)):i(s[0],"Connecting to server "+w.slice(5)+"...");b.restore()}function pa(){null!=d&&(qa(),d.vx=ra,B=d.vy=0,ba=!1,d.reset(),T=d.x)}function O(e,i,j){b.strokeStyle="#000000";b.lineWidth=1;b.strokeText(e,i,j);b.fillStyle="#FFFFFF";b.fillText(e,i,j)}function sa(e,i,c){this.init(e,i,c)}function ja(g,e,i){this.id=g;this.x=e;this.y=i;this.deathCache=new I;this.percCache=new I}function ka(i){var g=r;r=[];for(var l=0;l<i.length;l++){var j=i[l];r.push(j);j=g.indexOf(j);-1!=j&&g.splice(j,1)}for(l=0;l<g.length;l++){delete L[g[l]],i=J[g[l]],null!=i&&(i.maxPlayback=-1)}}function U(i,g,l){if(0==ca.length){return new sa(i,g,l)}var j=ca.pop();j.init(i,g,l);return j}function ta(e){var c=p.indexOf(e);-1!=c&&(J[e.id]==e&&delete J[e.id],e.destroy(),p.splice(c,1),ca.push(e))}function qa(i,q){var j=+new Date;var i=i||d.jumps;var q=q||d.x;if(null!=d&&0!=i.length){var ab=new ArrayBuffer(2*i.length+7),g=new DataView(ab);g.setUint8(0,2);g.setUint16(1,i.length,!0);for(var l=3,o=0;o<i.length;o++){g.setUint16(l,i[o],!0),l+=2}g.setInt32(l,q,!0);v.send(ab);ua()}}function ua(){if(X()&&null!=d&&!(2>r.length)){var g=d.jumps.length-B;if(0==g&&d.gameOver){if(ba){return}ba=!0}var e=new ArrayBuffer(5+2*g),i=new DataView(e);i.setUint8(0,4);i.setUint16(1,d.playbackTime,!0);i.setUint16(3,g,!0);for(g=5;B<d.jumps.length;++B){i.setUint16(g,d.jumps[B],!0),g+=2}B=d.jumps.length;v.send(e)}}function D(){var j=C.value;ya&&localStorage.setItem("nick",j);var g=new ArrayBuffer(17),q=new DataView(g);q.setUint8(0,5);for(var o=0;o<j.length&&16>o;o++){var i=j.charCodeAt(o);128<=i||q.setUint8(o+1,i)}null!=d&&d.setNick(j);v.send(g)}function va(j,g,ab,q,i,x,o){if(j+ab<q||g+ab<i||j-ab>q+x||g-ab>i+o){return !1}x=q+x;o=i+o;j-=j<q?q:j>x?x:j;g-=g<i?i:g>o?o:g;return j*j+g*g<ab*ab}function ha(i){i=i.toLowerCase();u=i=R.trim(i);ka([]);if(u&&w!=A[ga(i)%A.length]){v.close()}else{if(i){var g=new ArrayBuffer(17),o=new DataView(g);o.setUint8(0,3);for(var j=0;j<i.length&&16>j;j++){var l=i.charCodeAt(j);128<=l||o.setUint8(j+1,l)}}else{var g=new ArrayBuffer(1);(new DataView(g)).setUint8(0,3)}v.send(g)}}function I(){}function ga(i){var g,q,l,o,j;g=i.length&3;q=i.length-g;l=28;for(j=0;j<q;){o=i.charCodeAt(j)&255|(i.charCodeAt(++j)&255)<<8|(i.charCodeAt(++j)&255)<<16|(i.charCodeAt(++j)&255)<<24,++j,o=3432918353*(o&65535)+((3432918353*(o>>>16)&65535)<<16)&4294967295,o=o<<15|o>>>17,o=461845907*(o&65535)+((461845907*(o>>>16)&65535)<<16)&4294967295,l^=o,l=l<<13|l>>>19,l=5*(l&65535)+((5*(l>>>16)&65535)<<16)&4294967295,l=(l&65535)+27492+(((l>>>16)+58964&65535)<<16)}o=0;switch(g){case 3:o^=(i.charCodeAt(j+2)&255)<<16;case 2:o^=(i.charCodeAt(j+1)&255)<<8;case 1:o^=i.charCodeAt(j)&255,o=3432918353*(o&65535)+((3432918353*(o>>>16)&65535)<<16)&4294967295,o=o<<15|o>>>17,l^=461845907*(o&65535)+((461845907*(o>>>16)&65535)<<16)&4294967295}l^=i.length;l^=l>>>16;l=2246822507*(l&65535)+((2246822507*(l>>>16)&65535)<<16)&4294967295;l^=l>>>13;l=3266489909*(l&65535)+((3266489909*(l>>>16)&65535)<<16)&4294967295;return(l^l>>>16)>>>0}function X(){return u&&1<r.length&&15>r.length}function Q(){z&&(N=null,null!=d&&d.gameOver&&389<=d.y?pa():null!=d&&0<d.y&&(da=!0))}function W(){return"ontouchstart" in f||"onmsgesturechange" in f}function load(){C=y.getElementById("nickname");C.onchange=D;C.onkeydown=D;C.onkeyup=D;C.onkeypress=D;C.value=localStorage.getItem("nick");V=y.getElementById("perfomance");m=y.getElementById("canvas");b=m.getContext("2d");wa=m.width;W()?(y.body.onkeydown=Q,y.body.addEventListener(f.navigator.msPointerEnabled?"MSPointerDown":"touchstart",Q,!1)):(y.body.onkeydown=Q,m.onmousedown=Q);pa();fa();la();na();setInterval(ma,1000/60);setInterval(ua,350)}var m,b,V,ea=0,h=new Image;h.src="atlas"+ea+".png";f.setPackId=function(c){ea=c;h.src="atlas"+ea+".png";R("#themeModal").modal("hide")};f.openModalDialog=function(){R("#themeModal").modal("show")};var n=0,p=[],k=[],Z=0,d=null,da=!1,E=null,ia=0,T=100,C,ra=2,v,F=[],$=0,aa=60,t=200,S=0,B=0,ba=!1,J={},r=[],u=null;/^[a-z0-9]+$/.test(f.location.pathname.slice(1))&&(u=f.location.pathname.slice(1));var L={},N="Press any key or click to jump",K=null,H=0,G=0,M=null,P=+localStorage.getItem("myHighscore")||0,Y=!0,wa=800,oa=new Image,s=[];console.log(f.location.origin);var A="ws://69.164.192.211:2828 ws://69.164.192.211:2829 ws://69.164.192.211:2830 ws://96.126.121.68:2828 ws://96.126.121.68:2829 ws://96.126.121.68:2830 ws://198.58.104.108:2828 ws://198.58.104.108:2829 ws://198.58.104.108:2830 ws://198.58.122.72:2828 ws://198.58.122.72:2829 ws://198.58.122.72:2830".split(" "),w=null,z=!1;setInterval(function(){aa=$;$=0},1000);sa.prototype={id:0,x:0,y:0,vx:0,vy:0,seed:0,nick:null,jumps:null,playbackTime:0,gameOver:!1,maxPlayback:-1,isParty:!1,rotation:0,targetRotation:0,passed:0,nickCacher:null,removeTimer:-1,init:function(g,e,i){this.vy=this.vx=this.y=this.x=0;this.gameOver=!1;this.maxPlayback=-1;this.isParty=!1;this.targetRotation=this.rotation=0;this.removeTimer=-1;this.id=g;this.setNick(null);this.reset();this.seed=9999*Math.random();this.setNick(i);this.jumps=e||[];this.playbackTime=0},setNick:function(c){(this.nick=c)&&null!=this.nickCacher&&this.nickCacher.setString(c)},reset:function(){this.x=100;this.y=50;this.vx=ra;this.vy=0;this.jumps=[];this.playbackTime=0;this.gameOver=!1;this.removeTimer=-1;this.passed=0},draw:function(){if(-100>this.x-n||this.x-n>wa+200){return !1}b.save();b.translate(2*Math.floor(this.x/2),2*Math.floor(this.y/2));var c=Math.floor((Z+this.seed)/150)%3;1==c?c=2:2==c&&(c=1);b.rotate(this.rotation);var e=M==this.id;if(this==d){b.beginPath(),b.fillStyle="rgba(255, 255, 255, 0.5)",b.arc(0,0,30,0,2*Math.PI,!1),b.fill(),b.drawImage(h,230,762+52*c,34,24,-17,-12,34,24),e&&(b.rotate(-0.2),b.drawImage(h,0,542,18,12,-9,-20,18,12))}else{e||(b.globalAlpha*=0.5);if(this.isParty){switch(c){case 0:b.drawImage(h,174,982,34,24,-17,-12,34,24);break;case 1:b.drawImage(h,230,658,34,24,-17,-12,34,24);break;case 2:b.drawImage(h,230,710,34,24,-17,-12,34,24)}}else{b.drawImage(h,6+56*c,982,34,24,-17,-12,34,24)}e&&(b.rotate(-0.2),b.drawImage(h,0,542,18,12,-9,-20,18,12));e||(b.globalAlpha/=0.5)}b.restore();b.save();b.translate(2*~~(this.x/2),2*~~(this.y/2));this.nick&&(k.length&&this.x-60>k[0].x||this==d||this.id==M)&&(this.nickCacher||(this.nickCacher=new I,this.nickCacher.setString(this.nick)),this.nickCacher.render(0,-20,!0));b.restore();return !0},think:function(){if(!(-1!=this.maxPlayback&&this.playbackTime>=this.maxPlayback)){++this.playbackTime;for(var i=this.gameOver,g=0;g<k.length;g++){var o=k[g];if(!(o.x+100<this.x||o.x-100>this.x)&&o.collidesWith(this)){if(this==d){this.gameOver=!window.trainerActionWallhack.checked}else{this.gameOver=!0}break}}this==d&&(this.vx=parseInt(window.trainerActionSpeed.value)||ra);this.vy+=0.4;389<=this.y&&(this.vy=this.vx=0,this.gameOver=!0,this==d?null:null==this.id&&ta(this));if(this.gameOver){this.maxPlayback=-1,this.vx=0,389<this.y&&(this.y=389),this!=d&&(0>this.removeTimer&&(this.removeTimer=Math.floor(this.x/10)),this.removeTimer-=1,0==this.removeTimer&&ta(this))}else{for(;this.passed<k.length&&!(this.x-126<=k[this.passed].x);this.passed++){++k[this.passed].passed}this==d?da&&(this.jumps.push(this.playbackTime),da=!1,this.vy=-8):-1!=this.jumps.indexOf(this.playbackTime)&&(this.vy=-8)}this.x+=this.vx;this.y+=this.vy;for(this.targetRotation=Math.atan2(this.vy,this.vx);180<this.targetRotation;){this.targetRotation-=360}for(;-180>this.targetRotation;){this.targetRotation+=360}this.rotation=(this.rotation+this.targetRotation)/2;g=!i&&this.gameOver;this==d&&this.x>P&&(P=this.x);if(g){this==d&&localStorage.setItem("myHighscore",P);++S;for(var i=null,l=0,g=0;g<k.length;g++){var o=k[g],j=Math.abs(o.x-this.x+26);100<j||!(null==i||j<l)||(l=j,i=o)}i&&++i.deaths}}},setPlayback:function(e,c){this!=d&&this.reset();this.jumps=e;c&&this.setNick(c)},destroy:function(){}};ja.prototype={id:0,x:0,y:0,deathCache:null,percCache:null,deaths:0,passed:0,getHeight:function(){return 124},draw:function(){-300>this.x-n||1200<this.x-n||(this.isValid()||(b.globalAlpha*=0.5),b.drawImage(h,112,646,52,320,this.x,this.y-320,52,320),b.drawImage(h,168,646,52,320,this.x,this.y+this.getHeight(),52,320),this.isValid()||(b.globalAlpha/=0.5))},drawOverlay:function(){if(!(-300>this.x-n||1200<this.x-n)&&(this.deathCache.setString(this.deaths.toString()+" "+(this==k[0]?"Casualties":"Deaths")),this.deathCache.render(this.x+26,415,!0),0<this.deaths+this.passed)){for(var g=this.passed,e=1,i=0;g&&0==i;){i=~~(100*e*g/(S+g))/e,e*=10}this.percCache.setString(i+"%");this.percCache.render(this.x+26,432,!0)}},collidesWith:function(c){return this.isValid()?va(c.x,c.y,12,this.x,this.y-320,52,320)||va(c.x,c.y,12,this.x,this.y+this.getHeight(),52,320):!1},isValid:function(){return this.x>T+200}};f.joinParty=ha;var ca=[];I.prototype={font:"10px sans-serif",str:null,width:0,_canvas:null,_ctx:null,setString:function(c){c!=this.str&&(this.str=c,this.invalidate())},invalidate:function(){this._canvas||(this._canvas=y.createElement("canvas"),this._ctx=this._canvas.getContext("2d"));var g=this._canvas,e=this._ctx;e.save();e.font=this.font;var i=e.measureText(this.str).width;this.width=i;g.width=i+20;g.height=20;e.clearRect(0,0,g.width,g.height);e.font=this.font;e.textAlign="left";e.fillStyle="#000000";e.fillText(this.str,9,10);e.fillText(this.str,11,10);e.fillText(this.str,10,9);e.fillText(this.str,10,11);e.fillStyle="#FFFFFF";e.fillText(this.str,10,10);e.restore()},render:function(e,g,i){b.drawImage(this._canvas,0,0,this._canvas.width,this._canvas.height,e+(i?-~~(this._canvas.width/2):-10),g-10,this._canvas.width,this._canvas.height)}};var ya="localStorage" in f&&null!==f.localStorage;f.requestAnimationFrame=f.requestAnimationFrame||f.mozRequestAnimationFrame||f.webkitRequestAnimationFrame||function(c){setTimeout(c,1000/60)};window.acontainer1.innerHTML="";document.getElementsByClassName("tcontainer")[0].remove();document.getElementsByClassName("fcontainer")[1].innerHTML='    <div class="row">        <div class="col-xs-6 col-md-4">            <div class="panel panel-default">                <div class="panel-heading">Bot (Automatically jumps bird)</div>                <div class="panel-body">                    <div class="checkbox">                        <label>                            <input id="trainerActionBot" type="checkbox" value="">                            Enable/disable bot                        </label>                    </div>                </div>            </div>        </div>        <div class="col-xs-6 col-md-4">            <div class="panel panel-default">                <div class="panel-heading">Wallhack (<i>only you</i>)</div>                <div class="panel-body">                    <div class="checkbox">                        <label>                            <input id="trainerActionWallhack" type="checkbox" value="">                            Enable wallhack                        </label>                    </div>                </div>            </div>        </div>        <div class="col-xs-6 col-md-4">            <div class="panel panel-default">                <div class="panel-heading">Speed (<i>only you</i>)</div>                <div class="panel-body">                    <div class="input-group">                        <span class="input-group-addon">Pixel/<i>Frame</i></span>                        <input id="trainerActionSpeed" type="number" min="0.1" max="100" step="0.1" class="form-control" placeholder="Default: 2" value="2">                    </div>                </div>            </div>        </div>    </div>    <div class="row">        <div class="col-xs-6 col-md-4">            <div class="panel panel-default">                <div class="panel-heading">Join a server</div>                <div class="panel-body">                    <div class="input-group">                        <span class="input-group-addon">ID#</span>                        <input type="number" id="trainerDisplayServer" min="1" max="24" value="1" class="form-control">                        <span class="input-group-btn">                            <button class="btn btn-default" id="trainerActionServer" type="button">Go!</button>                        </span>                    </div>                </div>            </div>        </div>        <div class="col-xs-6 col-md-4">            <div class="panel panel-default">                <div class="panel-heading">Maximum player amount</div>                <div class="panel-body">                    <div class="input-group">                        <input type="range" id="trainerActionMaxPlayerAmount" min="1" max="300" value="300" class="form-control">                        <span class="input-group-addon" id="trainerDisplayMaxPlayerAmount">300</span>                    </div>                </div>            </div>        </div>        <div class="col-xs-6 col-md-4">            <div class="panel panel-default">                <div class="panel-heading">Generate highscore <span class="badge">Beta</span></div>                <div class="panel-body">                    <div class="input-group">                        <input type="text" class="form-control" id="trainerDisplayScore" placeHolder="200">                        <span class="input-group-btn">                            <button class="btn btn-default" id="trainerActionScore" type="button">Send!</button>                        </span>                    </div>                </div>            </div>        </div>    </div>    <div class="panel panel-default" style="margin:0px;">        <div class="panel-body">            <center><a href="http://pastebin.com/EpD0fWsW">FlapMMO Trainer 1.2</a> By <a href="xzl.fr">Xzl</a></center>        </div>    </div>';document.getElementsByClassName("fcontainer")[1].id="trainer";document.getElementsByClassName("fcontainer")[1].style.display="none";window.topButtons.innerHTML+='<button class="btn btn-sm btn-danger" id="trainerToggle" style="float: right;">Enable cheats</button>';function loop(){if((a=window.trainerActionBot.checked)&&d){if(k[d.passedbis]&&d.x>k[d.passedbis].x+100&&k[d.passedbis+1]){d.passedbis++}if(!d.gameOver&&k[d.passedbis]&&d.y>=k[d.passedbis].y+99){Q()}else{if(d.gameOver){d.passedbis=0,Q()}}}if(window.trainerActionMaxPlayerAmount.value){p.splice(window.trainerActionMaxPlayerAmount.value,p.length);window.trainerDisplayMaxPlayerAmount&&(window.trainerDisplayMaxPlayerAmount.innerHTML=window.trainerActionMaxPlayerAmount.value)}}window.trainerActionServer.onclick=function(){var c=window.trainerDisplayServer.value;if(isNaN(c)||c<1||c>A.length){return false}v.close();fa()};window.trainerActionScore.onclick=function(){var j=window.trainerDisplayScore.value;if(isNaN(j)||j<1){return false}if(j>1000){alert("Trop de données sont requises afin d'envoyer ce score.\nImpossible d'envoyer");return false}var i={score:--j,x:100,y:50,target:{pipe:0,y:0},jumps:[1],count:0};var g,e;while(~~(i.x/100)<i.score&&i.count<1000){if(k[i.target.pipe+1]&&((i.x>k[i.target.pipe].x&&k[i.target.pipe+1].y>k[i.target.pipe].y)||(i.x>k[i.target.pipe].x+(52/2)))){i.target.pipe++}i.target.y=k[i.target.pipe].y+99;for(var c=20,e=0;c<100;c++){g=i.y+(-8+((0.4*(c-1))/2))*(c);if(e&&e<i.target.y&&g>i.target.y){i.y=g;i.x+=c*2;i.jumps.push(i.jumps[i.jumps.length-1]+c);break}else{if(i.target.y<g){i.y=g;i.x+=c*2;i.jumps.push(i.jumps[i.jumps.length-1]+c);break}}e=g}i.count++}if(i.count>900){alert("Trop de données sont requises ("+i.count+" jumps) afin d'envoyer ce score.\nImpossible d'envoyer");return false}if(p[5]){p[5].isParty=true,p[5].reset(),p[5].jumps=i.jumps}qa(i.jumps,i.x);window.echo=setTimeout(function(){alert("Les données envoyées ont été rejetés par le server. Raisons possibles :\n\n- Le score est peut être trop élevé\n- L'intervale entre le dernier Highscore n'est pas assez grande")},2000)};window.trainerToggle.onclick=function(){var c=window.requestAnimationFrame;window.requestAnimationFrame=null;setTimeout(function(){window.requestAnimationFrame=c;load();window.trainer.style.display="block"},1000)};