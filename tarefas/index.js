//UTILIZANDO O INQUIRER
const {select} = require('@inquirer/prompts')//estamos precissando de um modulo/biblioteca/dependencias que vem de fora, ele retorna um objeto

//O INQUIRER É UMA BIBLIOTECA DE PROMPTS INTERATIVOS.

//FUNCAO QUE INICIA A APLICACAO
const start = async () => {
    
    while(true){

    const opcao = await select({
        message: 'Menu >',
        choices: [
            {
                name: 'Cadastrar meta',
                value: 'cadastrar'
            },
            {
                name: 'Listar metas',
                value: 'listar'
            },
            {
                name: 'Sair',
                value: 'sair'
            }
        ]
    })

    switch(opcao){
        case "cadastrar":
            console.log("VAMOS CADASTRAR:");
            break
        case "listar":
            console.log("LISTA DE METAS: ");
            break
        case "sair":
            console.log("ATÉ LOGO! VOCÊ SAIU");
            return //o return termina qualquer função
        }
    }
}
//CHAMANDO A FUNÇÃO - TODA FUNCAO CRIADA DEVE SER CHAMADA PRA QUE ELA SEJA INICIALIZADA
start()