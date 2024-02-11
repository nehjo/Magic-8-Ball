function shake(){
    //alert("Signs Point to Yes")
    var myFortune = getFortune()
    displayFortune(myFortune)
    
}

function displayFortune(fortune){
    document.getElementById('fortune-display').innerHTML=fortune
}
function getFortune(){
    var listOfFortunes = getListOfFortunes()
    var randomNumber = getRandomNumberLessThan(listOfFortunes.length)
    return listOfFortunes[randomNumber]

}
function getListOfFortunes(){
    return ['Yes','Maybe','No','Ask Again Later']
}

function getRandomNumberLessThan(max){
    var randomDecimal = (Math.random()*max)
    return Math.floor(randomDecimal)
}