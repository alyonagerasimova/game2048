export class Tile {
    constructor(gridElement) {
        this.tileElem = document.createElement("div");
        // this.tileElem.classList.add("tile");
        gridElement.append(this.tileElem);
        this.setValue(Math.random() > 0.5 ? 2 : 4);
    }

    setXY(x, y) {
        this.x = x;
        this.y = y;
        this.tileElem.style.setProperty("--x", x);
        this.tileElem.style.setProperty("--y", y);
    }

    setValue(value) {
        this.value = value;
        this.tileElem.textContent = value;
        this.tileElem.classList = "tile";
        this.tileElem.classList.add(`x${value}`);
        if (value == 2048) {
            alert("You win!");
        }
        // const bgLightness = 100 - Math.log2(value) * 9;
        // this.tileElem.style.setProperty("--bg-lightness", `${bgLightness}%`);
        // this.tileElem.style.setProperty("--text-lightness", `${bgLightness < 50 ? 90 : 10}%`);
    }

    removeFromDOM() {
        this.tileElem.remove();
    }

    waitForTransitionEnd() {
        return new Promise(resolve => {
            this.tileElem.addEventListener("transitionend", resolve, {once: true});
        });
    }

    waitForAnimationEnd() {
        return new Promise(resolve => {
            this.tileElem.addEventListener("animationend", resolve, {once: true});
        });
    }

}