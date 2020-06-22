var number1 = document.getElementById('inputNum');
var btnsave = document.getElementById('save');
var btnDisplay = document.getElementById('display');
var max = document.getElementById('max');
var min = document.getElementById('min');
var arr = []

number1.addEventListener('change', function(){
    var x = number1.value;
    if(x < 0 || x >= 10){
        alert('invaled data')
        return;
    }    
})

btnsave.addEventListener('click', function() {
    arr.push(number1.value);
    max.innerHTML = Math.max(...arr);
    min.innerHTML = Math.min(...arr);
    
})
btnDisplay.addEventListener('click', function() {
    // arr.forEach(function(item){
    //     // console.log(item);
    // })
    alert(arr.join(','))
})

