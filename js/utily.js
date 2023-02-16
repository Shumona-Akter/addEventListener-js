document.getElementById('first-btn').addEventListener('click', function(){
    const cardOne = document.getElementById('card-1');
    cardOne.style.display = 'none'
})
function displayNone(inputId){
    const cardOne = document.getElementById(inputId);
    cardOne.style.display = 'none'

}
document.getElementById('second-btn').addEventListener('click', function(){
    displayNone('card-2')
})
document.getElementById('third-btn').addEventListener('click', function(){
    displayNone('card-3')
})
document.getElementById('fourth-btn').addEventListener('click', function(){
    displayNone('card-4')
})
