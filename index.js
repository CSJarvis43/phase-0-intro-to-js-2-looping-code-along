names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, messages){
    let cards = []
    for(let i= 0; i < names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful ${messages} gift!`)
    }
    return cards
}

function countDown(i){
    for(let i = 10; i >= 0; i--){
        console.log(i)
    }
}