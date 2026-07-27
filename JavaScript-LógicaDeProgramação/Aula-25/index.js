/* try {
    // É executado quando não há erros
} catch (e) {
    // É executado quando há erros
} finally {
    // Sempre
} */

/*     try {
        console.log('Abri um arquivo');
        console.log('Manipulei um arquivo e gerou erro');
        console.log('Fechei o arquivo');
        
    } catch (erros) {
        console.log('Tratando o erros');
        
    } finally {
        console.log('FINALLY: Sempre sou executado fechei o arquivo');
        
    } */

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const data = new Date("01-01-1970 12:58:12");
  const hora = retornaHora(11);
  console.log(hora);
} catch (e) {
    console.log(`Erro: ${e}`);
    
}finally{
    console.log('Tenha um bom dia');
    
}
