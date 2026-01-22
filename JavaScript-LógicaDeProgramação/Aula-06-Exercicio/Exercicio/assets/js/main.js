/* function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultadoIMC');

    function calcularIMC(peso, altura) {
        const imc = peso / (altura ** 2);
        return imc.toFixed(2);
    }

    function receberEventoForm(evento) {
        evento.preventDefault();

        const inputPeso = form.querySelector('#peso');
        const inputAltura = form.querySelector('#altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if (!peso || !altura) {
            resultado.innerHTML = 'Por favor, insira valores válidos.';
            return;
        }

        const imc = calcularIMC(peso, altura);
        let nivel; 

        if (imc < 18.5) {
            nivel = 'Abaixo do peso';
        } else if (imc < 25) {
            nivel = 'Peso normal';
        } else if (imc < 30) {
            nivel = 'Sobrepeso';
        } else if (imc < 35) {
            nivel = 'Obesidade grau 1';
        } else if (imc < 40) {
            nivel = 'Obesidade grau 2';
        } else {
            nivel = 'Obesidade grau 3';
        }
        resultado.innerHTML = `Seu IMC é ${imc} (${nivel})`;

    }

    form.addEventListener('submit', receberEventoForm);
}

meuEscopo(); */

const form = document.querySelector('.form');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso || !altura) {
        setResultado('Por favor, insira valores válidos.', false);
        return;
    }

    const imc = getIMC(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
    
});

function criaParagrafo(className) {
    const p = document.createElement('p');
    return p;
}

function setResultado(menssagem, isValid) {
    const resultado = document.querySelector('.resultadoIMC');
    resultado.innerHTML = '';
    const p = criaParagrafo();

    if (isValid) {
        p.classList.add('resultado-true');
    } else {
        p.classList.add('resultado-false');
    }

    p.innerHTML = menssagem;
    resultado.appendChild(p);
}

function getIMC(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc < 18.5) {
        return nivel[0];
    } else if (imc < 25) {
        return nivel[1];
    } else if (imc < 30) {
        return nivel[2];
    } else if (imc < 35) {
        return nivel[3];
    } else if (imc < 40) {
        return nivel[4];
    } else {
        return nivel[5];
    }
}