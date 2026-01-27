const pontuacaoUsuario = 999;

/* if (pontuacaoUsuario >= 1000) {
    console.log(`Usuário Vip`);
} else {
    console.log(`Usuário normal`);
} */

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
