const nome = prompt(`Digite seu nome completo: `);

document.body.innerHTML = `O seu nome é: <strong> ${nome} </strong> <br/>`;

const nomeSemEspacos = nome.replace(/[^a-zA-ZÀ-ÿ]/g, '') ;

document.body.innerHTML += `Seu nome tem <strong>${nomeSemEspacos.length}</strong> letras <br/>`;

document.body.innerHTML += `A segunda letra do seu nome é:<strong> ${nome.charAt(1)}</strong> <br/>`;

document.body.innerHTML += `Qual o primeiro Índice da letra "a" no seu nome?<strong> ${nomeSemEspacos.indexOf('a')}</strong> <br/>`;

document.body.innerHTML += `Qual o útimo índice da letra "a" no seu nome?<strong> ${nomeSemEspacos.lastIndexOf('a')}</strong> <br/>`;

document.body.innerHTML += `As útimas 3 letras do seu nome são:<strong> ${nome.slice(-3)}</strong> <br/>`;

document.body.innerHTML += `As palavras do seu nome são:<strong> ${nome.split(' ')}</strong> <br/>`;

document.body.innerHTML += `Seu nome com letras maiúsculas:<strong> ${nome.toUpperCase()}</strong> <br/>`;

document.body.innerHTML += `Seu nome com letras minúsculas: <strong> ${nome.toLowerCase()}</strong> <br/>`;

