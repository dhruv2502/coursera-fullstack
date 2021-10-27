(function () {
    var names = ["Yaakov", "Jon", "Frank", "Joe", "Jenna", "Mark", "Bill", "Jack", "Jason", "Paul", "Jill"];
    for (var i = 0; i < names.length; i++) {

        var firstletter = names[i].charAt(0).toLowerCase();
        if (firstletter === 'j') {
            goodbye.say(names[i]);
        }
        else {
            hello.say(names[i]);
        }

    }
})();