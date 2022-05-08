document.querySelector('#check').addEventListener('click', check)
document.getElementById('picLayers').style.display = 'none'
document.getElementById('picHoodie').style.display = 'none'
document.getElementById('picSummer').style.display = 'none'
document.getElementById('picBlanket').style.display = 'none'

function check() {
  const temp = document.querySelector('#temp').value
  console.log(temp)

if (temp >= 0 && temp <= 31) {
  document.querySelector('h2').innerText = "Wear layers! No, add another one."
  document.querySelector('#picLayers').style.display = 'block'
  document.querySelector('#picFront').style.display = 'none'
}
else if (temp > 32 && temp <= 65) {
  document.querySelector('h2').innerText = "Wear a light jacket!"
  document.querySelector('#picHoodie').style.display = 'block'
  document.querySelector('#picLayers').style.display = 'none'
  document.querySelector('#picFront').style.display = 'none'
}
else if (temp > 66 && temp <= 100) {
  document.querySelector('h2').innerText = "Stay cool! Make sure you drink water."
  document.querySelector('#picSummer').style.display = 'block'
  document.querySelector('#picHoodie').style.display = 'none'
  document.querySelector('#picFront').style.display = 'none'
}
else {
  document.querySelector('h2').innerText = "Why are you going outside!?"
  document.getElementById('#picBlanket').style.display = 'block'
  document.querySelector('#picSummer').style.display = 'none'
  document.querySelector('#picFront').style.display = 'none'
}

}
