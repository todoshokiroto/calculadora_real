const tela = document.getElementById("tela");
const equal = document.getElementById("equal");
let concatNumb = (but) =>{
    let value = document.getElementById(but).innerText;
    tela.innerText += value;
}
let findOp = () =>{
    let telaLenght = tela.innerText.length;
    for(let i = 0; i<telaLenght; i++){
        if(tela.innerText[i] === "x" || tela.innerText[i] === "+" || tela.innerText[i] === "/" ||tela.innerText[i] === "-"){
            return tela.innerText[i];
        }
    }
    return 'error';
}
let ac = () =>{
    tela.innerText = "";
}
function sepNumb1(){
    let val = tela.innerText;
    let val1 = "";
    for(let i = 0; i <val.length; i++){
        if(val[i] !== "x" && val[i] !== "-" && val[i] !== "+" && val[i] !== "/" ){
            val1 += val[i]
        }
        else{
            break;
        }
    }
    return Number(val1);
}
function sepNumb2(){
    let fullValue = tela.innerText;
    let firstVal = String(sepNumb1());
    let val2 = fullValue.replace(firstVal + findOp(),"");
    return Number(val2);
}
let conta = () =>{
    let op = findOp();
    let num1 = sepNumb1();
    let num2 = sepNumb2();
    switch (op){
        case '+' :
             return num1 + num2;
        case '/' :
            return num1 / num2;
        case 'x':
            return num1 * num2;
        case '-': 
            return num1  -  num2;
        default:
            return "op"
    }
}
let displayCont = () =>{
    tela.innerText = conta();
}
equal.addEventListener('click',displayCont);
