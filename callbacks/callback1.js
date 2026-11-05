// Write a function that accepts another function as a callback and executes it.

function Greet(callback) {

    setTimeout(() => {
        console.log("Hello World! 🌎")
        callback();
    }, 2000);
}

function Introduce() {
    setTimeout(function () {
        console.log("My name is Muskan Mujavar 👩");
        console.log("I am a software developer");
        console.log("My hobbies are Art/Sketching 🎨, playing sports 🎾 and coding 👩‍💻")
    }, 3000);
}

Greet(() => {
    Introduce();
})