function move(event) {
    switch (event.key) {
        case "ArrowLeft":
            location.href = "slide_list.html";
            break;
        case "ArrowRight":
            location.href = "industry.html";
            break;
    }
}

addEventListener("keydown", move);