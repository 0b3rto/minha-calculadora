
function igual(){

   switch (resultado) { //usa o que a função do botão retornou
        case "soma":
            let numSoma1 = document.getElementById('num1')
            let numSoma2 = document.getElementById('num2')
            let numberSoma1 = Number(numSoma1.value)
            let numberSoma2 = Number(numSoma2.value)           
            let soma = document.getElementById('res')
            soma.innerHTML = ``
            soma.innerHTML += `<p>${numberSoma1 + numberSoma2}</p>`

            break
        
        case "subtrair":
            let numSubtrai1 = document.getElementById('num1')
            let numSubtrai2 = document.getElementById('num2')
            let numberSubtrai1 = Number(numSubtrai1.value)
            let numberSubtrai2 = Number(numSubtrai2.value)           
            let subtrair = document.getElementById('res')
            subtrair.innerHTML = ``
            subtrair.innerHTML += `<p>${numberSubtrai1 - numberSubtrai2}</p>`

            break
        
        case "multiplicar":
            let numMulti1 = document.getElementById('num1')
            let numMulti2 = document.getElementById('num2')
            let numberMulti1 = Number(numMulti1.value)
            let numberMulti2 = Number(numMulti2.value)           
            let multi = document.getElementById('res')
            multi.innerHTML = ``
            multi.innerHTML += `<p>${numberMulti1 * numberMulti2}</p>`
            break
        
        case "divisao":
            let numDivisao1 = document.getElementById('num1')
            let numDivisao2 = document.getElementById('num2')
            let numberDivisao1 = Number(numDivisao1.value)
            let numberDivisao2 = Number(numDivisao2.value)
            let divisao = document.getElementById('res')
            if (numberDivisao2 == 0 || (numberDivisao1 == 0 && numberDivisao2==0)){
                window.alert("Valor(es) inválido!!")
            } else{
                divisao.innerHTML = ``
                divisao.innerHTML += `<p>${numberDivisao1/numberDivisao2}</p>`
                }
            break

        case "potenciacao":
            let num1 = document.getElementById('num1')
            let num2 = document.getElementById('num2')
            let number1 = Number(num1.value)
            let number2 = Number(num2.value)
            let pont = document.getElementById('res')
            let resultado = 1
            while(number2 > 0){
                resultado *= number1
                number2--
            }
            pont.innerHTML = ``
            pont.innerHTML += `${resultado}`
            break
        
        case "radiciacao":
            let rad = document.getElementById('num1')
            let radicando = Number(rad.value)
            
            if(radicando == 0 ) { //devido o cálculo partir de calcular as casas decimais o resultado de ²√(0) acabba sendo -0.1111... Para evitar isso foi preciso a clausula IF.
                res.innerHTML =``
                res.innerHTML +=`<p>0</p>`
            } else {
            let res = document.getElementById('res')
            let fat
            fat = 0
            while(fat*fat < radicando){
                fat++
            }
            if(fat*fat > radicando){
                fat--
                fat+=0.1
                while(fat*fat<radicando){
                    fat+=0.1
                }
            }
            fat-=0.1
            if(fat*fat < radicando){
                fat+=0.01
                while(fat*fat < radicando){
                    fat+=0.01
                }
            }
            fat-=0.01
            if(fat*fat<radicando){
                fat+=0.001
                while(fat*fat<radicando){
                fat+=0.001
                }
            }
            fat-=0.001
            if(fat*fat<radicando){
                fat+=0.0001
                while(fat*fat<radicando){
                fat+=0.0001
                }  
            }    
            fat-=0.0001
            if(fat*fat<radicando){
                fat+=0.00001
                while(fat*fat<radicando){
                fat+=0.00001
                }
            }
            fat-=0.00001
            if(fat*fat<radicando){
                fat+=0.000001
                while(fat*fat<radicando){
                fat+=0.000001
                }
            }
            fat-=0.000001
            if(fat*fat<radicando){
                fat+=0.0000001
                while(fat*fat<radicando){
                    fat+=0.0000001
                }
            }
            fat-=0.0000001
            if(fat*fat<radicando){
                fat+=0.00000001
                while(fat*fat<radicando){
                fat+=0.00000001
                }
            }
            fat-=0.00000001
            if(fat*fat<radicando){
                fat+=0.000000001
                while(fat*fat<radicando){
                    fat+=0.000000001
                }
            }
            fat-=0.000000001
            if(fat*fat<radicando){
                fat+=0.0000000001
                while(fat*fat<radicando){
                    fat+=0.0000000001
                }
            }
            fat-=0.0000000001
            res.innerHTML =``
            res.innerHTML +=`<p>${fat.toFixed(10)}</p>`
            break
        }
        }
    }

function somar(){ 
    let apagarRad = document.getElementById('radiciacao')
    apagarRad.innerHTML = `` // Faz o INPUT NUM2 aparecer ou reaparecer devido a função RADICIACAO esconder esse input
    let mostrar = document.getElementById('num2')
    mostrar.style.display = 'block'
    var operador = document.getElementById('operador')
    operador.innerHTML = ``
    operador.innerHTML = `+`
    return resultado = "soma";
   
}

function subtrair(){
    let apagarRad = document.getElementById('radiciacao')
    apagarRad.innerHTML = ``
    let mostrar = document.getElementById('num2')
    mostrar.style.display = 'block'
    var operador = document.getElementById('operador')
    operador.innerHTML = ``
    operador.innerHTML = `-`
    return resultado = "subtrair";

}

function multiplicar(){
    let apagarRad = document.getElementById('radiciacao')
    apagarRad.innerHTML = ``
    let mostrar = document.getElementById('num2')
    mostrar.style.display = 'block'
    var operador = document.getElementById('operador')
    operador.innerHTML = ``
    operador.innerHTML = `*`
    return resultado = "multiplicar";

}

function divisao(){
    let apagarRad = document.getElementById('radiciacao')
    apagarRad.innerHTML = ``
    let mostrar = document.getElementById('num2')
    mostrar.style.display = 'block'
    var operador = document.getElementById('operador')
    operador.innerHTML = ``
    operador.innerHTML = `/`
    return resultado = "divisao";

}

function potenciacao(){
    let apagarRad = document.getElementById('radiciacao')
    apagarRad.innerHTML = ``
    let mostrar = document.getElementById('num2')
    mostrar.style.display = 'block'
    var operador = document.getElementById('operador')
    operador.innerHTML = ``
    operador.innerHTML = `^`
    return resultado = "potenciacao";
}

function radiciacao(){
    var esconder = document.getElementById('num2')
    esconder.style.display = 'none' //faz o INPUT NUMBER NUM2 desaparecer para ser usado apenas o INPUT NUM1 para calcular raiz quadradada
    var apagarOperador = document.getElementById('operador')
    apagarOperador.innerHTML = ``
    var operador = document.getElementById('radiciacao')
    operador.innerHTML = ``
    operador.innerHTML = `²√(x)`
    return resultado = "radiciacao";
}



//esconder.style.display = 'block' **** faz aparecer o bloco INPUT NUM2 para fazer outras operações