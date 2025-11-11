let playButton = document.getElementById('playButton')
let triangleButton = document.getElementById('triangleButton')
let playNow = document.getElementById('playNow')
let game = document.getElementById('game')
// array 4
let pattern = []
let isPlayNow = false
let isPlayButton = true
let cats = document.getElementsByClassName('cats')
let level = document.getElementById('level')

playButton.onclick = function () {
    // cat animation
    setTimeout(() => {
        
        cats[pattern[0]].style.transform = 'scaleX(0)'
        setTimeout(() => {
            cats[pattern[0]].style.transform = 'scaleX(1)'
            
        }, 300);
    }, 1000);
    
    // traingle animation
    triangleButton.style.transform = 'scale(0.9)'
    setTimeout(function () {
        triangleButton.style.transform = 'scale(1)'
    }, 200)
    setTimeout(function () {
        playButton.style.transform = 'translateX(100%)'
        let catRandom = Math.floor(Math.random() * 4)
        pattern.push(catRandom)
        console.log(pattern);
        
    }, 400)
}

playNow.onclick = function () {
    game.style.opacity = '1'
    game.style.pointerEvents = 'auto'
}

for (let i = 0; i < 4; i = i + 1) {
    
    cats[i].onclick = function () {
        cats[i].style.transform = 'scaleX(0)'
        setTimeout(() => {
            cats[i].style.transform = 'scale(1)'
            
        }, 300);

        // check if player chooses the right cat, if so then the level increases (now two cats are shown) if not then game over.
        if (pattern[0]==i){
        console.log('level+1');
        level.innerHTML = '2'
        }

        else {
            console.log('gameOver');
            
        }

    }

    
}





