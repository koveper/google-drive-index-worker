var homeClassList = 'item';
var page = window.location.pathname.split('/').pop();
switch (page) {
    default:
        homeClassList = 'active item';
        break;
}
document.getElementById('mobile-tablet-menu').innerHTML = '<div class="ui container"><a class="item" onclick="toggleSidebar();"><i class="bars icon"></i>Menu</a></div>';
document.getElementById('computer-menu').innerHTML = '<div class="ui container"><a href="/" class="' + homeClassList + '"><i class="home icon"></i>Home</a><div class="right menu"><a id="darkmode-button2" onclick="toggleDarkmode();" class="item"></a><a href="https://app.keeweb.info/" class="item"><i class="key icon"></i>DeineMomF</a></div></div>';
document.getElementById('sidebar').innerHTML = '<a href="/" class="' + homeClassList + '"><i class="home icon"></i>Home</a><a id="darkmode-button1" onclick="toggleDarkmode();" class="item"></a><a href="https://app.keeweb.info/" class="item"><i class="key icon"></i>DeineMomF</a>';
