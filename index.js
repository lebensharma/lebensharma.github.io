$(document).ready(function () {
    setTimeout(function () {
        $('body').addClass('loaded');
    }, 3000);
});


setInterval(() => {
    var one_day = 1000 * 60 * 60 * 24;
    var date_target = new Date(2021, 3, 1);
    var date_today = new Date();
    resultd = Math.round((date_target.getTime() - date_today.getTime()) / (one_day));
    h = resultd * 24 + (23 - date_today.getHours())
    m = (59 - date_today.getMinutes())
    s = (60 - date_today.getSeconds())
    document.getElementById("d").innerHTML = resultd + "d";
    document.title = "Live after " + h + "h " + m + "m " + s + "s"
}, 1000);

// if resultd > 30



setInterval(() => {
    d = new Date();
    h = 23 - (new Date().getHours());
    m = 59 - (new Date().getMinutes());
    s = 60 - (new Date().getSeconds());

    hrotation = 30 * h + m / 2;
    mrotation = 6 * m;
    srotation = 6 * s;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}, 1000);