function move(event) {
    switch (event.key) {
        case "ArrowLeft":
            location.href = "about.html";
            break;
        case "ArrowRight":
            location.href = "#";
            break;
    }
}

addEventListener("keydown", move);