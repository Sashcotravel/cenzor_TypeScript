let text = document.querySelector('.text') as HTMLInputElement
let add = document.querySelector('.add') as HTMLButtonElement
let reset = document.querySelector('.reset') as HTMLButtonElement
let cenzor = document.querySelector('.cenzor') as HTMLButtonElement
let badWords = document.querySelector('.badWords') as HTMLSpanElement
let area = document.querySelector('.area') as HTMLTextAreaElement
let arrWord: Array<string> = []


add.addEventListener('click', function(): void{
    if(text.value.length === 0){
        document.querySelector('.text').placeholder = 'Please, write a text!'
        document.querySelector('.text').style.border = '2px solid red'
    } else{
        badWords.textContent += text.value + ' '
        arrWord.push(text.value) 
        text.value = ''
        document.querySelector('.text').placeholder = 'word here...'
        document.querySelector('.text').style.border = '0.5px solid black'
    }
})

reset.addEventListener('click', function(): void{
    badWords.textContent = ' '
    arrWord = []
})

cenzor.addEventListener('click', function(): void{
    if(area.value.length === 0){
        document.querySelector('.area').placeholder = 'Please, write a text!'
        document.querySelector('.area').style.border = '2px solid red'
    } else{
        let o: any = area.value.split(' ')
        o.forEach(element => {
            for(let j= 0; j<o.length; j++){
                if(element === arrWord[j]){
                    area.value = area.value.replace(element, '*'.repeat(element.length))
                }
            }
        });
        document.querySelector('.area').placeholder = 'text here...'
        document.querySelector('.area').style.border = '0.5px solid black'
    }
})