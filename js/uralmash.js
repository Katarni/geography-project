function move(event) {
    switch (event.key) {
        case "ArrowLeft":
            location.href = "industry.html";
            break;
        case "ArrowRight":
            location.href = "uomz.html";
            break;
    }
}

addEventListener("keydown", move);