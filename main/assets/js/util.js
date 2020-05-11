// util js


var os = [
    'iphone',
    'ipad',
    'windows',
    'mac',
    'linux'];

var match = navigator.appVersion.toLowerCase().match(
    new RegExp(os.join('|'))
);

var classes = match[0] + ' ' + $.browser.name + ' Version-' + $.browser.version;
if (match) {
    $('body').addClass(classes);
};



consoleLog(classes, 'success');

consoleLog("hello-succes", "success");
consoleLog("hello-dblue", "DodgerBlue");
consoleLog("hello-error", "error");
consoleLog("hello-warn", "warning");

//$('.single-item').slick();



$(".single-item").slick({
	dots: true
});


