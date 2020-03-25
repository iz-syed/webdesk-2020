// log functio with color
function consoleLog(message, color) {

    color = color || "black";

    switch (color) {
        case "success":
            color = "#28a745";
            break;
        case "info":
            color = "DodgerBlue";
            break;
        case "error":
            color = "#dc3545";
            break;
        case "warning":
            color = "#ffc107";
            break;
        default:
            color = color;
    }

    console.log("%c" + message, "color:" + color);
}

// $(function () {
//     console.log('%c Ready to Launch! ', 'background: #222; color: #bada55');
// });