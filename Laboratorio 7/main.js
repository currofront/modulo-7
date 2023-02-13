// Validar IBAN

let iban1 = document.getElementById("iban1");
let iban2 = document.getElementById("iban2");
let digitoControl = document.getElementById("dc");

let patternIban = /^[A-Z]{2}\d{22}$/
let patternIban2 = /^[A-Z]{2}\d{2}\s?(\d{4}\s?){4}\d{4}$/


let getDigitoControl = (arr) => {
    let newArr = [];
    for (let i = 0; i < 4; i++) {
        newArr.push(arr[i]);
    }
    return newArr[0] + newArr[1] + newArr[2] + newArr[3];
}


let printDc = () => document.getElementById("dc").innerText = getDigitoControl(iban2.value)


let comprobarIban = () => {
    patternIban.test(iban1.value) ? iban1.classList.remove("red") : iban1.classList.add("red");
    patternIban2.test(iban2.value) ? iban2.classList.remove("red") : iban2.classList.add("red");
    printDc();
}



document.getElementById("submitIban").addEventListener("click", () => comprobarIban());


//Validar matrícula coche

let matricula = document.getElementById("matricula");

let patternMatricula = /^\d{4}(\s?\S?){1}[A-Z]{3}$/  // Esta validación admite más de 3 letras y no sé porque. Se supone que le estoy indicando que tenga 3 letras.

let getNumMatricula = (arr) => {
    let numMatricula = [];
    for (let i = 0; i < 5; i++){
        numMatricula.push(arr[i])
    }
    return numMatricula[0] + numMatricula[1] + numMatricula[2] + numMatricula[3]
};

let getLetterMatricula = (arr) => {
    let letterMatricula = [];
    for (let i = arr.length - 1; i > 3; i--){
        letterMatricula.push(arr[i])
    }
    return letterMatricula[2] + letterMatricula[1] + letterMatricula[0]
};

let printNumMatricula = () => document.getElementById("matriculaNum").innerText = getNumMatricula(matricula.value);
let printLetterMatricula = () => document.getElementById("matriculaLetras").innerText = getLetterMatricula(matricula.value);


let comprobarMatricula = () => {
    patternMatricula.test(matricula.value) ? matricula.classList.remove("red") : matricula.classList.add("red");
    printLetterMatricula();
    printNumMatricula();
};

document.getElementById("submitMatricula").addEventListener("click", () => comprobarMatricula());