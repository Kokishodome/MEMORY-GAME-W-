let playButton = document.getElementById('playButton')
let triangleButton = document.getElementById('triangleButton')
let playNow = document.getElementById('playNow')
let game = document.getElementById('game')
let pattern = []
let isPlayNow = false
let isPlayButton = true

playButton.onclick = function () {
    triangleButton.style.transform = 'scale(0.9)'
    setTimeout(function () {
        triangleButton.style.transform = 'scale(1)'
    }, 200)
    setTimeout(function () {
        playButton.style.transform = 'translateX(100%)'
        pattern.push(Math.floor(Math.random()*4))
        console.log(pattern);
        
    }, 400)
}

playNow.onclick = function () {
    game.style.opacity = '1' 
    game.style.pointerEvents = 'auto'
}

if (isPlayButton) {
    isPlayNow = false
}

else {
    isPlayNow = true
}

// add heading for the number of times you completed a pattern


