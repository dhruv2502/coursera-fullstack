(function (window) {
    var hello = {};
    var Word = "Hello";

    hello.say = function (name) {
        console.log(Word + " " + name);
    }
    window.hello = hello;
})(window);