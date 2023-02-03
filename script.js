const encodeInput = document.getElementById("encode-input")
const decodeInput = document.getElementById("decode-input")
const encodedText = document.getElementById("encoded-text")
const decodedText = document.getElementById("decoded-text")

function reverseStr(str) {
  return str.split("").reverse().join("");
}

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


function encode(text) {
  let encodedArray = []
  let arrayText = text.trim().split(" ")
  arrayText.forEach(word => {
    let arrayWord = word.split("")
    let firstChar = arrayWord.shift()
    let str2 = arrayWord.join("") + firstChar
    let str1 = generateString(2)
    let str3 = generateString(2)
    let oneText = str1.concat(str2)+str3
    encodedArray.push(oneText)
    let encodedString = encodedArray.join(" ");
    encodedText.innerHTML = encodedString;
    encodeInput.value = "";
  });
}

encodeInput.addEventListener("keyup", function(e) {
  if (e.key == "Enter") {
    if (encodeInput.value == '') {
      alert("Please enter a text");
    } else {
      encode(encodeInput.value)
    }
  }
})

function decode(text) {
  let decodedArray = []
  let arrayText = text.trim().split(" ")
  arrayText.forEach(word => {
    let arrayWord = word.split("")
    let str2 = arrayWord.slice(2, -2).join("")
    let last = str2.slice(-1)
    str2 = last + str2.slice(0, -1)
    decodedArray.push(str2)
    let decodedString = decodedArray.join(" ");
    decodedText.innerHTML = decodedString;
    decodeInput.value = "";
  });
}

decodeInput.addEventListener("keyup", function(e) {
  if (e.key == "Enter") {
    decode(decodeInput.value)
  }
})

function copyEncode() {
  let copyText = document.getElementById("encoded-text");
  navigator.clipboard.writeText(copyText.innerText);
  
}

function copyDecode() {
  let copyText = document.getElementById("decoded-text");
  navigator.clipboard.writeText(copyText.innerText);
}
