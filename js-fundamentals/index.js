const num1 = document.getElementById("i1");
const num2 = document.getElementById("i2");
const result = document.getElementById("result");
const btn1 = document.getElementById("b1");

btn1.addEventListener("click", () => {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let n3 = Number(n1 + n2);
    result.innerHTML = `${n1} + ${n2} = ${n3}`
})