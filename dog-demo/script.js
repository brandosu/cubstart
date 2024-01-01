const selectEl = document.getElementById('select-breed')
const imageEl = document.getElementById('dog-pic')
const buttonEl = document.getElementById('load')

async function setup() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()

    const breeds = Object.keys(data.message)

    for (const breed of breeds) {
        // something to do with breed
        const optionEl = document.createElement('option')

        optionEl.textContent = breed
        optionEl.value = breed
        
        selectEl.appendChild(optionEl)
    }
}

async function loadImage() {
    const selectedBreed = selectEl.value
    const response = await fetch ("https://dog.ceo/api/breed/" + selectedBreed + "/images/random")
    const data = await response.json()

    imageEl.src = data.message;
}

buttonEl.addEventListener("click", loadImage)

setup()