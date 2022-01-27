function  pegar(valor) {//função principal

    let valorDinheiro = document.getElementById('valor').value //valor "bill"
    let numPessoas = document.querySelector('input#people').value// total de pessoas
    let totalDiv = valorDinheiro/numPessoas*valor //calculo tip amount
    let valorTotal = valorDinheiro/numPessoas+totalDiv //valor total
 
    //documents
    document.getElementById('res').innerHTML = `<p>$${totalDiv.toFixed(2)}</p>` //tip amount
    document.getElementById('total').innerHTML = `<p>$${valorTotal.toFixed(2)}</p>`//total
    
    
        //ifs de controle de dados
       //para se o cliente não for especifico
        if(valorDinheiro == ''){ 
            document.getElementById('validar').className = 'small' // troca as classes caso o input esteja vazio
        } 
        if (numPessoas == ''){
            document.getElementById('people').style.background = 'red' // troca as classes caso o numero de pessoas seja igual a zero
        }


    console.log(totalDiv.toFixed(2)) // teste
    console.log(valorTotal.toFixed(2))//teste
}

//função chamada no button custom
function custom() {
    let aqui = document.getElementById('inp')//div criada abaixo do button custom
    let buto = document.getElementById('btn')//button gerado aqui
    let adicionar = document.createElement('input') // objeto criado
    let adicionarButton = document.createElement('input')// objeto button criado
 
    //input criada para o cliente customizar
    adicionar.type = 'number' 
    adicionar.name = 'custom'
    adicionar.id = 'custo'
    adicionar.placeholder='valor desejado'
    aqui.appendChild(adicionar)//comando para criar o input

    //objeto button criado para facilitar a vida do programador
    adicionarButton.type = 'button'
    adicionarButton.name = 'clique'
    adicionarButton.value= 'clique'
    adicionarButton.onclick = function teste() { //função criada para calculos do button custom

        let valorDinheiro = document.getElementById('valor').value //bill
        let numPessoas = document.querySelector('input#people').value//number people
        let a = document.getElementById('custo').value// valor capturado do nput criado
        let b = parseInt(a)/100 // calculo para transformar o valor digitado em %
        let c = valorDinheiro/numPessoas*b // calculo para 'gorjeta'
        let d = valorDinheiro/numPessoas+c//calculo para valor geral
        
        document.getElementById('res').innerHTML = `<p>$${c.toFixed(2)}</p>` //tip amount
        document.getElementById('total').innerHTML = `<p>$${d.toFixed(2)}</p>`//total


        
        
        
    }

    buto.appendChild(adicionarButton) // comando para criar button
    
}
//function do button reset
function reset() {
    location.reload() // comando para reiniciar a página
}