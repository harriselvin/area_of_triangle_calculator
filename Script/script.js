const inputHeight = document.querySelector('input')
const inputBase = document.querySelectorAll('input')[1]
const areaCalc = document.querySelector('[data-calc]')
const btn = document.querySelector('button')
const resetBtn = document.querySelectorAll('button')[1]

function calculate() {
    if (inputHeight.value !== "" || inputBase.value !== "") {
        areaCalc.innerText = parseFloat(0.5 * inputHeight.value * inputBase.value)
    } else {
        areaCalc.innerText = "Enter values"
    }
}

btn.addEventListener('click', calculate)

function reset() {
    inputHeight.value = ''
    inputBase.value = ''
    areaCalc.innerText = ''
}

resetBtn.addEventListener('click', reset)