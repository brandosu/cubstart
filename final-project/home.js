/**
 * 1) Grab https://disease.sh/v3/covid-19/states
 * 2) Sum all states from .cases
 * 3) Output answer to #number
 */

number = document.getElementById('number');
async function numberTotal() {
    const response = await fetch("https://disease.sh/v3/covid-19/states")
    const data = await response.json()
    var total = 0
    for (const state of data) {
        total = state.cases + total
    }
    console.log(total)
    var stringNum = total.toLocaleString()
    // console.log(stringNum)
    number.innerHTML = stringNum
    }

numberTotal()