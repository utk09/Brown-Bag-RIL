// get the app items
var theList = document.getElementById('theList'),
    form = document.querySelector('form'),
    input = form.querySelector('input'),
    cache = {};

// on submit
form.addEventListener('submit', function (ev) {
    // "use strict"; //ECMAScript version 5 compliant
    ev.preventDefault();

    // add item to the list
    var value = input.value;

    if (!cache[value] && !(value == "")) {
        // cache the users input
        cache[value] = true;
        theList.innerHTML += '<li>' + value + '</li>';

        //store using localstorage
        localStorage.myToDo = theList.innerHTML;
    }
});

theList.addEventListener('click', function (ev) {
    //"use strict";
    var t = ev.target;

    if (!t.classList.contains('done')) {
        t.classList.add('done');
    } else {
        t.parentNode.removeChild(t);
    }
    localStorage.myToDo = theList.innerHTML;
});

//load local storage on first load
if (localStorage.myToDo !== undefined) {
    theList.innerHTML = localStorage.myToDo;
    console.log(localStorage)
}
