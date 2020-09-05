function mouseUp(new_page) {
    window.location.href = new_page;
}
exports.mouseUp = mouseUp;

function goBack() {
    window.history.back();
}
exports.goBack = goBack;

function mouseOver(idTag) {
    document.getElementById(idTag).style.visibility = "visible";
}
exports.mouseOver = mouseOver;

function mouseOut(idTag) {
    document.getElementById(idTag).style.visibility = "hidden";
}
exports.mouseOut = mouseOut;

function mouseOut_MenuItem(idTag) {
    document.getElementById(idTag).style.visibility = "hidden";
    document.getElementById(idTag).style.backgroundColor = "rgba(100, 100, 255, 0.5)";
}
exports.mouseOut_MenuItem = mouseOut_MenuItem;

function mouseOver_MenuItem(idTag) {
    document.getElementById(idTag).style.visibility = "visible";
}
exports.mouseOver_MenuItem = mouseOver_MenuItem;

function mouseDown_MenuItem(idTag) {
    document.getElementById(idTag).style.backgroundColor = "rgba(255, 100, 255, 0.5)";
}
exports.mouseDown_MenuItem = mouseDown_MenuItem;

function mouseOver_5pxBorder(idTag) {
    document.getElementById(idTag).style.border = "5px solid white";
}
exports.mouseOver_5pxBorder = mouseOver_5pxBorder;

function mouseOut_5pxBorder(idTag) {
    document.getElementById(idTag).style.border = "0px solid white";
}
exports.mouseOut_5pxBorder = mouseOut_5pxBorder;

function determineHeight(classTag, ratio) {
    var obj = document.getElementsByClassName(classTag)[0].offsetWidth;
    document.getElementsByClassName(classTag)[0].style.height = obj * ratio + 'px';
}
exports.determineHeight = determineHeight;

function scaleTextByScreenWidth(classTag, scale) {
    document.getElementsByClassName(classTag)[0].style.fontSize = scale * (window.innerWidth / 1920) + 'px';
}
exports.scaleTextByScreenWidth = scaleTextByScreenWidth;