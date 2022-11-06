let $ = (x) => document.getElementById(x)

let hunger = $('hunger')
let love = $('love')
let feedButt = $('feedButt')
let message = $('message')
let patButt = $('patButt')
let questButt = $('questButt')
let quest = $('quest')


let hungerMax = 12
let hungerStat = 0
let loveMax = 20
let loveStat = 0
let questMax = 1000
let questStat = 0

hunger.innerHTML = ("Hunger: " + hungerStat + "/" + hungerMax)
love.innerHTML = ("Love: " + loveStat + "/" + loveMax)
quest.innerHTML = ("???: " + questStat + "/" + questMax)

feedButt.onclick = () => {
    message.innerHTML = ''
    if (hungerStat < hungerMax) {
        hungerStat += 1
    }

    else {
        message.innerHTML = 'Fleep is full!'
    }

    hunger.innerHTML = ("Hunger: " + hungerStat + "/" + hungerMax)
}

patButt.onclick = () => {
    message.innerHTML = ''
    if (loveStat < loveMax) {
        loveStat += 1
    }

    else {
        message.innerHTML = 'Fleep is smothered!'
    }

    love.innerHTML = ("Love: " + loveStat + "/" + loveMax)
}

questButt.onclick = () => {
    message.innerHTML = ''
    if (questStat < questMax) {
        questStat += 1
    }

    else {
        message.innerHTML = '?????????????????????????????????????'
    }

    quest.innerHTML = ("???: " + questStat + "/" + questMax)
}