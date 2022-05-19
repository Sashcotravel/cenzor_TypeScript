var text = document.querySelector('.text');
var add = document.querySelector('.add');
var reset = document.querySelector('.reset');
var cenzor = document.querySelector('.cenzor');
var badWords = document.querySelector('.badWords');
var area = document.querySelector('.area');
var arrWord = [];
add.addEventListener('click', function () {
    if (text.value.length === 0) {
        document.querySelector('.text').placeholder = 'Please, write a text!';
        document.querySelector('.text').style.border = '2px solid red';
    }
    else {
        badWords.textContent += text.value + ' ';
        arrWord.push(text.value);
        text.value = '';
        document.querySelector('.text').placeholder = 'word here...';
        document.querySelector('.text').style.border = '0.5px solid black';
    }
});
reset.addEventListener('click', function () {
    badWords.textContent = ' ';
    arrWord = [];
});
cenzor.addEventListener('click', function () {
    if (area.value.length === 0) {
        document.querySelector('.area').placeholder = 'Please, write a text!';
        document.querySelector('.area').style.border = '2px solid red';
    }
    else {
        var o_1 = area.value.split(' ');
        o_1.forEach(function (element) {
            for (var j = 0; j < o_1.length; j++) {
                if (element === arrWord[j]) {
                    area.value = area.value.replace(element, '*'.repeat(element.length));
                }
            }
        });
        document.querySelector('.area').placeholder = 'text here...';
        document.querySelector('.area').style.border = '0.5px solid black';
    }
});
