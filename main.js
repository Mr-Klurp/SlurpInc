function clickBars(x, y) {
    x.classList.toggle("change-bar");
    document.querySelector('.' + y).classList.toggle("change-side-nav")
}
