const list1 = document.getElementById('list-1')
let li = document.createElement('li')
li.textContent = 'Apple'
list1.append(li)


li = document.createElement('li')
li.textContent = "Asparagus"
list1.append(li)


li = document.createElement('li')
li.textContent = "Saxaphone"
list1.append(li)

let Btn = document.createElement('button')
Btn.textContent = 'Click Me!'
document.body.append(Btn)
Btn.addEventListener('click', () => {
    let p = document.getElementById('para')
    p.textContent = 'Button was clicked!'
})


let input = document.createElement('input')
input.setAttribute('id', 'text-input')
let Btn2 = document.createElement('button')
Btn2.textContent = 'Submit'
Btn2.id = 'text-inpt-btn'
document.body.append(input, Btn2)


Btn2.addEventListener('click', () => {
    let elementType = input.value
    let htmlContent = input2.value
    let newElement = document.createElement(elementType)
    newElement.innerHTML = htmlContent
    document.body.append(newElement)
})


let input2 = document.createElement('input')
input2.id = 'html-content'
document.body.append(input2)