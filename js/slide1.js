function move(event) {
    switch (event.key) {
        case "ArrowLeft":
            location.href = "index.html";
            break;
        case "ArrowRight":
            location.href = "#";
            break;
    }
}

addEventListener("keydown", move);