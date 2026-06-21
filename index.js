const inputEl= document.getElementById("input-el")
const lengthEl= document.getElementById("length-el")
const volumeEl= document.getElementById("volume-el")
const massEl= document.getElementById("mass-el")
lengthEl.innerHTML = "1 meters = 3.281 feet || 1 feet = 0.305 meters"
volumeEl.innerHTML = "1 liters = 0.264 gallons || 1 gallons = 3.788 liters"
massEl.innerHTML="1 kilos = 2.204 pounds || 1 pounds = 0.454 kilos"

function conversion(){
    let num= inputEl.value
    length(num)
    volume(num)
    mass(num)
}

function length(a){
    let meter= a * 3.281
    console.log(meter.toFixed(3))
    feet= a / 3.281
    console.log(feet.toFixed(3))
    lengthEl.innerHTML = `${a} meters = ${meter.toFixed(3)} feet || ${a} feet = ${feet.toFixed(3)} meters`
}

function volume(a){
    let liter= a * 0.264
    console.log(liter.toFixed(3)) 
    let gallons= a / 0.264
    console.log(gallons.toFixed(3)) 
    volumeEl.innerHTML = `${a} liters = ${liter.toFixed(3)} gallons || ${a} gallons = ${gallons.toFixed(3)} liters`

}

function mass(a){
    let kilos= a * 2.204
    console.log(kilos.toFixed(3))
    let pounds= a/ 2.204
    console.log(pounds.toFixed(3))
    massEl.innerHTML=`${a} kilos = ${kilos.toFixed(3)} pounds || ${a} pounds = ${pounds.toFixed(3)} kilos`
}
