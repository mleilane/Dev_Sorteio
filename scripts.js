function generateNumber(){

    //console.log("me chamou?")
    const min = Math.ceil(document.querySelector('.input-min').value) //ceil arredonda o numero para cima ex: 4,2 seria 5
    const max = Math.floor(document.querySelector('.input-max').value) //floor arredonda o numero para baixp ex: 4,8 seria 4
    const result = Math.floor(Math.random()*(max-min+1)) + min; 

    //alert(result)
    const resultElement = document.querySelector('.result');
    resultElement.textContent = result; // ou resultElement.innerHTML = result;


}