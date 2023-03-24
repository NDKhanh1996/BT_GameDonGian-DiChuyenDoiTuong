class Hero {
    constructor(image, top, left, size, speed) {
        this.image = image
        this.top = top
        this.left = left
        this.size = size
        this.speed = speed
    }
    getHeroElement(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
    moveRight(){
        this.left += this.speed;
    }
    moveBot(){
        this.top += this.speed;
    }
}
let hero = new Hero('images.png', 20, 30, 200, 50);

function startRight(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(startRight, 500)
}
function startBot() {
    if (hero.top < window.innerWidth - hero.size){
        hero.moveBot()
    }
    document.getElementById('game').innerHTML =hero.getHeroElement()
    setTimeout(startBot, 500)
}
startBot();
startRight();