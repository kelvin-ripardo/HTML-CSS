
function contar() {
    let num1 = document.getElementById('nOne')
    let num2 = document.getElementById('nTwo')
    let cont = document.getElementById('nThree')
    let res = document.getElementById('res')

    if(num1.value.length == 0 || num2.value.length == 0 || cont.value.length == 0){
        res.innerHTML = '<strong> Impossivel contar sem dados!</strong>'

    } else {
        res.innerHTML = 'Contando: <br> '
        let n1 = Number(num1.value)
        let n2 = Number(num2.value)
        let ct = Number(cont.value)

        if(ct < 1){
            window.alert('[Erro] passo invalido, consideramos valor um!')
            ct = 1

        } if (n1 < n2) {
            // contagem crescente
            for(let c = n1; c <= n2; c += ct){
                res.innerHTML +=  `${c} \u{1f449}`
            }

        } else {
            for(let c = n1; c >= n2; c -= ct ){
                res.innerHTML += `${c} \u{1f449}`
            }
        }

        res.innerHTML += `\u{2620}`

        const reset = document.querySelector('#reset')

        reset.addEventListener('click', () =>  {
            location.reload()
        })

    }

}















/* function verificar() { incorreto
    var numIni= document.querySelector('input#nOne')
    var numFin = document.querySelector('input#nTwo')
    var con = document.querySelector('input#nThree')
    var res = document.getElementById('res')
    
    var num1 = Number(numIni.value)
    var num2 = Number (numFin.value)
    var cont = Number(con.value)

    for(var num= num1; num <= num2; num++){

        if (num < 1){
            res.textContent = `Impossivel contar sem numero inicial!`
            break;
        } 
        
          else if(cont == 0){
            alert ('[ERRO] Passo 0, vamos a usar passo 1!')

            for(var num = num1; num <= num2; num++){
 
                 res.textContent +=  num + ' , ';
               } 
            break;
          } 
           if ( cont % cont == 0){

            for(var num = num1; num <= num2; num += cont){
    
                res.innerHTML +=  num + ' , ';
              } 
        } else if (cont % cont != 0) {
    
            for(var num = num1; num <= num2; num += cont){
    
                res.innerHTML +=  num + ' , ';
            }
         
        }
            res.style.textAlign = 'center'

    }

}

*/
