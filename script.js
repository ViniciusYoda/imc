const calcular = document.getElementById('calcular')

function imc() {
    const nome = String(document.querySelector('#nome').value)
    const altura = Number(document.querySelector('#altura').value)
    const peso = Number(document.querySelector('#peso').value)
    const resultado = document.querySelector('#resultado')

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.'
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!'
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso'
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade nível 1'
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade nível 2'
        } else {
            classificacao = 'com obesidade nível 3. Cuidado!!!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
    } else {
        resultado.textContent = 'Preencha todos os campos!';
    }
}

calcular.addEventListener('click', imc);


