let factorial_input = document.getElementById('factorial');
let fac_button = document.getElementById('factorial-calc');
let factorial_result = document.getElementById("factorial-result");

fac_button.addEventListener("click", () => {
    let inputValue = parseInt(factorial_input.value); // Parse the input value to an integer
    let res = factorial(inputValue);
    factorial_result.innerHTML = res;
});

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

let power_a = document.getElementById('power-a');
let power_b = document.getElementById('power-b');
let power_result = document.getElementById('power-result');
let power_calc = document.getElementById('power-calc');

power_calc.addEventListener('click', ()=> {
    let a = parseFloat(power_a.value);
    let b = parseFloat(power_b.value);
    power_result.innerHTML = a ** b;
});

let trig_a = document.getElementById('trig-a');
let trig_b = document.getElementById('trig-b');
let trig_c = document.getElementById('trig-c');
let trig_result = document.getElementById('trig-result');
let trig_calc = document.getElementById('trig-calc');

trig_calc.addEventListener('click', ()=> {
    console.log(1);
    let a = parseFloat(trig_a.value);
    let b = parseFloat(trig_b.value);
    let c = parseFloat(trig_c.value);
    
    trig_result.innerHTML = isValidTriangle(a, b, c)? "Đây là các cạnh của một tam giác":"Đây không là các cạnh của một tam giác";
});

function isValidTriangle(a, b, c){
    return (a+b > c && a+c > b && b+c > a);
}

let trig_a1 = document.getElementById('trig-a1');
let trig_b1 = document.getElementById('trig-b1');
let trig_c1 = document.getElementById('trig-c1');
let trig_result1 = document.getElementById('trig-result1');
let trig_calc1 = document.getElementById('trig-calc1');

trig_calc1.addEventListener('click', ()=> {
    console.log(1);
    let a = parseFloat(trig_a1.value);
    let b = parseFloat(trig_b1.value);
    let c = parseFloat(trig_c1.value);
    
    if (isValidTriangle(a, b, c)){
        let s = (a+b+c) / 2;
        trig_result1.innerHTML = Math.sqrt(s*(s - a)*(s - b)*(s - c));
    } else {
        trig_result1.innerHTML = "Đây không phải các cạnh của một tam giác";
    }
    
});