// array holding the first 3 pokemon cards
const pokemon = [
    { name: 'Bulbasaur', id: '001' },
    { name: 'Charmander', id: '004' },
    { name: 'Squirtle', id: '007' },


]

//  array where new pokemon are saved
const userRoster = []

// gets the element with id of container, returns element object
const containerDiv = document.querySelector('#container')
// gets the element with id of new-pokemon-btn, returns the btn object
const newBtn = document.querySelector('#new-pokemon-btn')
const rosterDiv = document.querySelector('#roster')
let rmvBtn = document.querySelector('#remove-new-pokemon')   //adding variable for the remove button


// function fixes user input
const idFixer = (num) => {
    if (num.length == 1) {
        return '00' + num  //if num has 1 digit, puts two 0's in front
    } else if (num.length == 2) {
        return '0' + num    //if num has 2 digits, puts one 0 in front
    } else if (num <= 898) {
        return num   //if num doesn't exceed the total number of pokemon, returns num as is
    } else {
        alert('Invalid Pokemon ID') //if num exceeds total number of pokemon, returns an invalid alert
    }
}

newBtn.addEventListener('click', async () => {                  //listener that adds functionality to 'new pokemon' button
    if (userRoster.length < 6) {                                //stops 'new pokemon' button after 6 are added
        let num = prompt("ENTER A POKEMON NUMBER")

        if (num <= 898) {                             //stops user from adding new pokemon over 898

            let newNum = idFixer(num)                 //variable that fixes user input
            let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${newNum}.png`
            let dataUrl = `https://pokeapi.co/api/v2/pokemon/${num}`
            let req = await fetch(dataUrl)            //requesting data from pokemon API
            let res = await req.json()                //returning the request as a json file
            let name = res.forms[0].name              //pulling the name of the pokemon out of the pokemon API object

            let h3 = document.createElement('h3')
            h3.innerText = name

            let img = document.createElement('img')   //making an image element
            img.setAttribute('src', imgUrl)           //the source of the img is the link located in imgUrl
            img.setAttribute('class', 'roster-img')   //naming the class of each img, set to class='roster-img'
            let position = document.querySelector(`#pokemon-${userRoster.length + 1}`)    //tells which box to place the img in

            let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${name.toLowerCase()}.mp3`     //the link for the audio file
            let audio = document.createElement('audio')      //creates an audio object
            let source = document.createElement('source')    //creates a source for the audio
            source.setAttribute('src', audioUrl)             //specifies where to find the source, at the audioUrl variable
            source.setAttribute('type', 'audio/mpeg')        //specifies the type of source(music, video...)
            audio.append(source)                             //puts the source into the audio file

            const playAudio = () => {                  //variable to play audio
                audio.play()
            }

            position.addEventListener('click', playAudio)       //tells the image to listen for a click to play the audio


            position.append(img, h3)                             //puts the image into its position in the grid
            userRoster.push(num)                                 //saves the pokemon into the roster

            let rDiv = document.getElementById('removeDiv')      //variable targeting the remove button div
            rDiv.innerHTML = ''                                  //erases the remove button
            rmvBtn = document.createElement('button')            //creates a replacement remove button without the baggage
            rmvBtn.innerText = 'REMOVE'                          //puts the text back on the remove button
            rDiv.append(rmvBtn)                                  //appends the rmvBtn to the rDiv


            rmvBtn.addEventListener('click', () => {                       //listener that adds functionality to the 'remove' button
                if (userRoster.length > 0) {
                    let permission = confirm('Are you sure you want to delete your last Pokemon?')
                    if (permission == true) {
                        const deleteDiv = `pokemon-${(userRoster.length)}`     //variable for name of the div
                        const lastMember = document.getElementById(deleteDiv)  //identifies the last roster div
                        lastMember.innerHTML = ''                              //sets the last roster div to blank
                        userRoster.pop()                                       //removes the last item from the array
                        position.removeEventListener('click', playAudio)      //removes the event listener for the audio, references the playAudio variable defined above

                    }

                }
            })


        } else {
            alert('Invalid Pokemon ID')
        }
    } else {
        alert('Your team is full')

    }




})



// DOM = Document Object Model
// loop over every ID
// create and HTML element
// set the html element values
// append the HTML element to the DOM

pokemon.map((element, index) => {               //same functionality as above, for the first 3 pokemon saved as const=pokemon
    console.log(element)
    let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`
    let div = document.createElement('div')
    let h3 = document.createElement('h3')
    h3.innerText = element.name
    div.setAttribute('class', 'pokemon-card')
    let img = document.createElement('img')
    let audioUrl = `https://play.pokemonshowdown.com/audio/cries/${element.name.toLowerCase()}.mp3`

    let audio = document.createElement('audio')
    let source = document.createElement('source')
    source.setAttribute('src', audioUrl)
    source.setAttribute('type', 'audio/mpeg')
    audio.append(source)
    div.addEventListener('click', () => {
        console.log('audio', audioUrl)
        audio.play()
    })

    img.src = imgUrl

    div.append(img, h3, audio)
    containerDiv.append(div)
})


