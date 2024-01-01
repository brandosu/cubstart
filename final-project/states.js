const input = document.getElementById('textInput')
const button = document.getElementById('button')
number = document.getElementById('number')


async function casesByState() {
    const response = await fetch("https://disease.sh/v3/covid-19/states")
    const data = await response.json()
    const stateName = input.value
    var output = ""
    for (const state of data) {
        if (stateName === state.state) {
            output = state.cases
        }
        console.log(state)
    }
    if (output != "") {
        number.innerHTML = output.toLocaleString()
    } else {
        number.innerHTML = "Invalid Input"
    }

}

button.addEventListener("click", casesByState)