function move(event) {
    switch (event.key) {
        case "ArrowLeft":
            location.href = "uralmash.html";
            break;
        case "ArrowRight":
            location.href = "vis-steel.html";
            break;
    }
}

addEventListener("keydown", move);