function move(event) {
    switch (event.key) {
        case "ArrowLeft":
            location.href = "about.html";
            break;
        case "ArrowRight":
            location.href = "uralmash.html";
            break;
    }
}

addEventListener("keydown", move);