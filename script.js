function getResult() {
    var result = document.getElementById('result');
    var n = String(document.getElementById('minTicketNum').value);  
    var nn = Number(n);      
    var m = String(document.getElementById('maxTicketNum').value); 
    var mm = Number(m);   
    var count = 0;
    for (; nn <= mm; nn++) {
        if (Number(n[0]) + Number(n[1]) + Number(n[2]) == Number(n[3]) + Number(n[4]) + Number(n[5])) {
            count++;
        }
        n = String(Number(n)+1);
        while (n.length < 6) {
            n = "0" + n;
        }
    }
    result.innerHTML = count;    
}

function randomInteger (min, max) {
    var rand = min - 0.5 + Math.random()*(max-min+1);
    return Math.round(rand);
}


var words = ["пони", "единорог", "лошадь", "мама", "папа"];
var alfa = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var word = "";
var key = randomInteger(1000,9999);
key = String(key);

function findIndex(letter) {
    for (var i = 0; i < alfa.length; i++) {
        if (alfa[i] == letter) {
            return alfa.indexOf(letter);
        }
    }
}

function setVars() {
    var result = document.getElementById('key');
    var cipher = document.getElementById('cipher');
    result.innerHTML = "Key " + key;

    var cipherString = "";
    word = String(words[randomInteger(0, words.length - 1)]);
    for (var i = 0; i < word.length; i++) {
        if (i > 3) {
            key = key + key[i-4];
        }
        if (findIndex(word[i]) - key[i] >= 0) {
            var cipheredLetter = alfa[findIndex(word[i])-key[i]];
            cipherString += cipheredLetter;
        }
        else {
            var cipheredLetter = alfa[key[i]-findIndex(word[i])];
            cipherString += cipheredLetter; 
        }
    }

    cipher.innerHTML = "Cipher " + cipherString;
}

function checkDeCipher() {
    if (document.getElementById('de-cipher').value == word) {
        document.getElementById('second-part').style.background = "green";
    }
    else {
        document.getElementById('second-part').style.background = "red";
    }
}


