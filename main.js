const pokemon = ['charmander', 'bulbasaur', 'squirtle']
const pokemonIDs = ['001', '004', '007']
const containerDiv = document.querySelector('#container')

// DOM = Document Object Model
// loop over every ID
// create and HTML element
// set the html element values
// append the HTML element to the DOM

pokemonIDs.map((id) => {
    let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
    console.log('img url', imgUrl)

    let div = document.createElement('div')
    div.setAttribute('class', 'pokemon-card')

    let img = document.createElement('img')
    img.src = imgUrl
    div.append(img)
    containerDiv.append(div)
})