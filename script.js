let peso;
let altura;
let imc;
let resultado;


function calcular(event){
    event.preventDefault();
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura * altura);
    resultado= document.getElementById('resultado');
}

    if(peso === "" || altura === ""){
    alert("Preencha os campos !!!")
    return
    }
    if(imc < 17 ){
        resultado.innerHTML = '<br>Seu peso está muito abaixo do ideal: ' + imc.toFixed(2) + ' <br> Procure ajuda !'   
    }if (imc >= 17 && imc <= 18.49){
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc.toFixed(2) + ' Abaixo do peso !'
    }if (imc >= 18.50 && imc <= 24.99){
        resultado.innerHTML = '<br> Seu resultado é esse: ' + imc.toFixed(2) + ' <br> O peso ideal !!!'
    }if (imc >= 25 && imc <= 29.99){
        resultado.innerHTML = '<br> Sua situação está agravando ' + imc.toFixed(2) + ' <br> busque ajuda !'
    }if (imc >= 30){
        resultado.innerHTML = 'OBESIDADE ! ' + imc.toFixed(2) + ' <br> Procure ajuda !'

    document.getElementById('peso').value ='';
    document.getElementById('altura').value ='';

    
}