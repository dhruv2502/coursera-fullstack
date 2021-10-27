(function (window) {
    var goodbye = {};
    var Word = "Good Bye";

    goodbye.say = function (name) {
        console.log(Word + " " + name);
    }
    window.goodbye = goodbye;
})(window);