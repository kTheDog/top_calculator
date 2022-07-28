

const numPad = document.querySelector('.num-pad')

const numBox = document.createElement('button')

const bottomBar = document.querySelector('.bottom-bar')

const sideBar = document.querySelector('.side-bar')

const bigButtons = document.querySelector('.big-buttons')
function buildNumPad () {
    

    for (let i = 0; i < 9; i++) {
        let clone = numBox.cloneNode()
        clone.textContent = i
        numPad.appendChild(clone)
    }
}



function buildBottomBar () {

    let dot = numBox.cloneNode()
        nine = numBox.cloneNode()
        equals = numBox.cloneNode()


    dot.textContent = '.',
    nine.textContent= '9',
    equals.textContent = '='

    
    bottomBar.appendChild(dot)
    bottomBar.appendChild(nine)
    bottomBar.appendChild(equals)
}

function buildSideBar () {
    let plus = numBox.cloneNode(),
        minus = numBox.cloneNode(),
        multipy = numBox.cloneNode(),
        divide = numBox.cloneNode()

    divide.textContent = '/'
    plus.textContent = '+'
    minus.textContent = '-'
    multipy.textContent = '*'

    sideBar.appendChild(divide)
    sideBar.appendChild(multipy)
    sideBar.appendChild(minus)
    sideBar.appendChild(plus)
    
}




buildNumPad()
buildBottomBar()
buildSideBar()

const allButtons = document.querySelectorAll('button')