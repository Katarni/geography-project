function move(event) {
    switch (event.key) {
        case "ArrowLeft":
            alert("Вы на первом слайде");
            break;
        case "ArrowRight":
            location.href = "slide1.html";
            break;
    }
}

addEventListener("keydown", move);