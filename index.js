const all = ele => document.querySelectorAll(ele)
const one = ele => document.querySelector(ele)
const slide = _ => {
    const wrap = one('.slide')
    const target = wrap.children[0]
    const len = target.children.length
    const liStyle = `
    position:absolute;
    left:0;right:0;top:0;bottom:0;transition:1s;opacity:0
  `
    target.style.cssText = `position:relative;`
    Array.from(target.children)
        .forEach(ele => ele.style.cssText = liStyle)
    target.children[0].style.opacity = 1
    let pos = 0
    setInterval(_ => {
        target.children[pos].style.opacity = 0
        pos = (pos + 1) % len
        target.children[pos].style.opacity = 1
    }, 3000)
}
window.onload = function () {
    slide()
}

function NavBlack() {
    const NavB = document.querySelector("#navB");
    if (NavB.style.width == '0%') {
        NavB.style.width = '100%';
        NavB.style.height = '100%'
    }
    else {
        NavB.style.width = '0%';
        NavB.style.height = '0%'
    }
}

let sliderWrap = document.getElementsByClassName('colorS'),
    sliderContainer = document.getElementsByClassName('Cslider'),
    slidee = document.getElementsByClassName('Cslidee'),
    slideCount = slidee.length,
    curSlide = 0,
    navPre = document.querySelector('#prev'),
    navNext = document.querySelector('#next'),
    HyunJae = document.getElementById('hjm'),
    PauseImg = document.getElementById('paimg');
Pause = new Object();
Pause.mum = true;
Pause.juso = document.getElementById('pause');
for (var i = 0; i < slidee.length; i++) {
    slidee[i].style.left = i * 100 + '%';
}
HyunJae.innerHTML = `1/${slideCount}`;
function gs(idx) {
    sliderContainer[0].style.left = idx * -100 + '%';
    HyunJae.innerHTML = `${idx + 1}` + `/${slideCount}`;
    var id = "imgSP" + (idx + 1);
    var targetElement = document.getElementById(id);
    fadeIn(targetElement);
    curSlide = idx;
}
navPre.addEventListener("click", function (event) {
    event.preventDefault();
    if (curSlide > 0) {
        gs(curSlide - 1);
    } else {
        gs(slideCount - 1);
    }
});
navNext.addEventListener("click", function (event) {
    event.preventDefault();
    if (curSlide < slideCount - 1) {
        gs(curSlide + 1);
    } else {
        gs(0);
    }
});

function autoPlay() {
    if (curSlide < slideCount - 1) {
        gs(curSlide + 1);
    } else {
        gs(0);
    }
}
Pause.juso.addEventListener("click", function (event) {
    event.preventDefault();
    if (Pause.mum) {
        PauseImg.src = "./icon/play1.svg";
        Pause.mum = false;
    }
    else {
        PauseImg.src = "./icon/pause.svg";
        Pause.mum = true;
    }

});
setInterval(function () { if (Pause.mum) autoPlay(); }, 5000);

function fadeIn(target) {
    var level = 0;
    var inTimer = null;
    inTimer = setInterval(function () {
        level = fadeInAction(target, level, inTimer);
    }, 50);
}
function fadeInAction(target, level, inTimer) {
    level = level + 0.1;
    changeOpacity(target, level);
    if (level > 1) clearInterval(inTimer);
    return level;
}
function fadeOut(target) {
    var level = 1;
    var outTimer = null;
    outTimer = setInterval(function () {
        level = fadeOutAction(target, level, outTimer);
    }, 50);
}
function fadeOutAction(target, level, outTimer) {
    level = level - 0.1;
    changeOpacity(target, level);
    if (level < 0) {
        clearInterval(outTimer);
    }
    return level;
}
function changeOpacity(target, level) {
    var obj = target;
    obj.style.opacity = level;
    obj.style.MozOpacity = level;
    obj.style.KhtmlOpacity = level;
    obj.style.MsFilter = "'progid: DXImageTransform.Microsoft.Alpha(Opacity=" + (level * 100) + ")'";
    obj.style.filter = "alpha(opacity=" + (level * 100) + ");";
}
