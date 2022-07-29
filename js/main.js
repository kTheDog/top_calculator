

const master = document.querySelector('.master'),
      display = document.querySelector('.display')


master.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'small') {
        registerSmall(e)
    }
    if (e.target.classList[0] === 'big') {
        registerBig(e)
    }
})

let lastIsNumber = false;

function evaluate(e) {
    let expression;
    expression = display.textContent.split(' ')
    console.log(expression)
    //PREVENTS OPERATORS BEING ENTERED WITH A NUMBER FIRST
    if (display.textContent === '') return;
    //ALLOWS AUTOSWITCHING OPERATORS
    if (expression[2] === '' ) {
        if(e.target.textContent === '=') return;
        display.textContent = expression[0] + ` ${e.target.textContent} `
        console.log('me')
        return;
    }
    //MAKES IT SO '955 = ' would just come out to '955'
    if (e.target.textContent === '=' && expression.length === 1) return;

    let a = parseFloat(expression[0]),
        b = parseFloat(expression[2])
    switch(expression[1]) {
        case '+': display.textContent = a + b;
        break;
        case '-': display.textContent = a - b;
        break;
        case '/': display.textContent = Math.round((a / b)*1000)/1000;
        break;
        case '*': display.textContent = a * b;
        break;
    }

    if (e.target.textContent !== '=') display.textContent += ` ${e.target.textContent} `
    lastIsNumber = false;

}



function registerSmall(e) { 

    if (e.target.classList[2] === 'operator') {
        
        evaluate(e)
    }
    else if (e.target.textContent === '.') {
        if(lastIsNumber) {
            display.textContent += e.target.textContent
            lastIsNumber = false
        }
    }
    else {
        display.textContent += e.target.textContent
        lastIsNumber = true
    }
}

function registerBig(e) {
    if (e.target.textContent === 'Backspace') {registerBackspace()}
    else {registerClear()}
}

function registerClear() {
    display.textContent = ""
    lastIsNumber = false
}

function registerBackspace() {
    let len = display.textContent.length,
        last = display.textContent[len-1]

    if (last === ' ') {
        display.textContent = display.textContent.slice(0, len - 1 - 3)
        lastIsNumber = true
    }
    else {
        display.textContent = display.textContent.slice(0, len -1)
        lastIsNumber = true
    }

}