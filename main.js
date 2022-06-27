const pokemon = ['charmander', 'bulbasaur', 'squirtle']
const pokemonIDs = ['001', '004', '007']

// DOM = Document Object Model
// loop over every ID
// create and HTML element
// set the html element values
// append the HTML element to the DOM

pokemonIDs.map((id) => {
    let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
    console.log('img url', imgUrl)
    let img = document.createElement('img')
    img.src = imgUrl
    img.setAttribute('height', '100px')
    img.setAttribute('width', '100px')
    document.body.append(img)
})