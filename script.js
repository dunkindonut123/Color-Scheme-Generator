const firstScheme = document.getElementById('scheme-1')
const secondScheme = document.getElementById('scheme-2')
const thirdScheme = document.getElementById('scheme-3')
const forthScheme = document.getElementById('scheme-4')
const fifthScheme = document.getElementById('scheme-5')

const firstHex= document.getElementById('hex-1')
const secondHex= document.getElementById('hex-2')
const thirdHex= document.getElementById('hex-3')
const forthHex= document.getElementById('hex-4')
const fifthHex= document.getElementById('hex-5')

const selectEl = document.getElementById('select-container')
const getColorBtn = document.getElementById('get-color-btn')
const colorEl = document.getElementById('color-input')
const data_array = []

getColorBtn.addEventListener('click', function(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorEl.value.slice(1)}&mode=${selectEl.value}&count=6`)
        .then(response => response.json())
        .then(data => {
            changeColor(firstScheme, data.colors[0].hex.value)
            changeColor(secondScheme, data.colors[1].hex.value)
            changeColor(thirdScheme, data.colors[2].hex.value)
            changeColor(forthScheme, data.colors[3].hex.value)
            changeColor(fifthScheme, data.colors[4].hex.value)

            updateHex(firstHex, data.colors[0].hex.value)
            updateHex(secondHex, data.colors[1].hex.value)
            updateHex(thirdHex, data.colors[2].hex.value)
            updateHex(forthHex, data.colors[3].hex.value)
            updateHex(fifthHex, data.colors[4].hex.value)
        }
    )
})

function changeColor(hex_container, hex){
    hex_container.style.backgroundColor = hex
}

function updateHex(hex_text, hex){
    hex_text.textContent = hex
}