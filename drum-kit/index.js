let buttons = document.querySelectorAll(".drum");

let clickEvent = (key) => {
    switch (key.innerHTML) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        default:
            console.log("error");
            break;
    }
}

let keyPress = (currentKey) => {
    switch (currentKey.key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        default:
            console.log("error");
            break;
    }
}

let animateButton = (currentKey) => {
    var pressedButton = document.querySelector("." + currentKey);
    pressedButton.classList.add("pressed");
}

let removeAnimation = () => {
    var animatedButton = document.querySelectorAll(".pressed");
    for (let i = 0; i < animatedButton.length; i++) {
        animatedButton[i].classList.remove("pressed");
    }
}

let clickTracker = () => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            removeAnimation();
            clickEvent(buttons[i]);
            animateButton(buttons[i].classList[0]);
        });
    }
}

let keyTracker = () => {
    document.addEventListener("keydown", function(event) {
        removeAnimation();
        keyPress(event);
        animateButton(event.key);
    });
};

clickTracker();
keyTracker();