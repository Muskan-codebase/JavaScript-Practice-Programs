// Write a function that accepts a name and a callback, then executes the callback with that name.

function myfunc(name, callback) {

    callback(name);
}

function display(name) {
    console.log(`Name: ${name}`);
}

myfunc("Muskan Mujavar", display);

