function move(event) {
    switch (event.key) {
        case "ArrowLeft":
            location.href = "index.html";
            break;
        case "ArrowRight":
            location.href = "about.html";
            break;
    }
}

addEventListener("keydown", move);