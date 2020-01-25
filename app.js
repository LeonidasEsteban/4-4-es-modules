// import Draw from './draw.js'
import { getPokemon, renderPokemon, draw as pokemonDraw } from './pokemon.js'
// import './custom-properties.js'
// import './paint-modules.js'

form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()
  const data = new FormData(form)
  const id = data.get('id')
  const pokemon = await getPokemon(id)
  const pokemonDrawed = await renderPokemon(pokemon)
  const colors = pokemonDrawed.colorPalette(90)
  updateProperties(colors)
}



function updateProperties(colors) {
  document.body.style.setProperty('--primary', `rgb(${colors[0].red}, ${colors[0].green}, ${colors[0].blue})`)
  document.body.style.setProperty('--secondary', `rgb(${colors[1].red}, ${colors[1].green}, ${colors[1].blue})`)
  document.body.style.setProperty('--tertiary', `rgb(${colors[2].red}, ${colors[2].green}, ${colors[2].blue})`)
}