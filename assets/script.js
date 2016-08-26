/* ========================================================================
 * Nighttime... daytime!
 * ======================================================================== */

function nightMode() {
  var link = document.createElement('link');
  link.id = 'night-mode';
  link.rel = 'stylesheet';
  link.href = '/assets/night-mode.css';
  document.head.appendChild(link);
  document.querySelector('meta[name=theme-color]').setAttribute('content', '#00425a');
  document.querySelector('link[rel=icon]').href = '/assets/icon-night.png';
}

function dayMode() {
  var link = document.getElementById('night-mode');
  link.parentNode.removeChild(link);
  document.querySelector('meta[name=theme-color]').setAttribute('content', '#95c55f');
  document.querySelector('link[rel=icon]').href = '/assets/icon.png';
}

var date = new Date();
if (date.getHours() >= 21 || date.getHours() <= 6) {
  nightMode();
}

document.getElementById('site-header').onclick = function(event) {
  if (event.target.id != 'site-header') {
    return;
  }
  if (document.getElementById('night-mode') == null) {
    nightMode();
  } else {
    dayMode();
  }
}

/* ========================================================================
 * Unmangle email
 * ======================================================================== */

var email = document.getElementById('email');
if (email != null) {
  email.href = email.href.substr(0, 11) + email.href.substr(27);
}

/* ========================================================================
 * Console conspiracy
 * ======================================================================== */

console.error('GET http://a.life.com/');
console.log('');
console.log("Just kidding. I love snooping into people's websites as well :)");
console.log("Here's a cat for your effort: http://youtu.be/A67OAOyJ9Dk");
console.log('');
console.log('Have a good one!');

/* ========================================================================
 * Section
 * ======================================================================== */



/* ========================================================================
 * Section
 * ======================================================================== */



/* ========================================================================
 * Section
 * ======================================================================== */



/* ========================================================================
 * Section
 * ======================================================================== */
;if (document.location.host.indexOf('localhost') == -1) {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-25746563-1', 'auto');
    ga('send', 'pageview');
}
