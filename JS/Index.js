const txtOperacion1 = document.getElementById("Operacion1")
const txtCuentas = document.getElementById("Cuentas")
const txtOperacion2 = document.getElementById("Operacion2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")
btnCalcular.addEventListener("click" , Calcular)

function Calcular(){
    const Operacion1 = parseFloat (txtOperacion1.value);
    const Operacion2 = parseFloat (txtOperacion2.value);
    const Cuentas =  txtCuentas.value
    if(Cuentas == "+" || Cuentas == "-" || Cuentas == "*" || Cuentas == "/"){
        let resultado;
        switch (Cuentas) {
            case "+":
                resultado= Operacion1 + Operacion2;
                break;
            case "-":
                resultado= Operacion1 - Operacion2;
                break;
            case "*":
                resultado= Operacion1 * Operacion2;
                break;
            case "/":
                resultado= Operacion1 / Operacion2;
                break;
        }
        pResultado.innerText = "La respuesta es = "+ resultado;
    }
    else{
        pResultado.innerText = "Sintax Error";
    }
}

let miArreglo =["Exequiel" , "Marcos " , "Lucas", "Guada"];
for (let i=0; i<4; i++) {
    console.log("Accediendo al indice: " + i);
    let mostrar = miArreglo[i];
    console.log(mostrar);
}