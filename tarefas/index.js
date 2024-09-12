//UTILIZANDO O INQUIRER
const {select, input, checkbox} = require('@inquirer/prompts')//estamos precissando de um modulo/biblioteca/dependencias que vem de fora, ele retorna um objeto

//O INQUIRER É UMA BIBLIOTECA DE PROMPTS INTERATIVOS.

//CRIANDO O MODELO DE METAS
let meta = {
    value: 'Tomar 3L de água todos os dias',
    checked: false
}

//CRIANDO A LISTA DE METAS
let metas = [meta]


//FUNCAO DE CADASTRAR METAS
const cadastrarMeta = async() =>{
    const meta = await input({ //meta que o usuario vai escrever
        message: "Digite a sua meta:" }) 

    if(meta.length === 0){
        console.log("A meta não pode ser vazia!");
        //return cadastrarMeta() - chama ela infinitamente até escrever
        return //encerra a funcao e volta para o menu
    }

    metas.push({//ADICONANDO A META NA LISTA DE METAS
        name: meta,
        checked: false //toda meta comeca falsa
    }) 
}

//FUNCAO DE LISTAR METAS
const listarMetas = async () => {
    const resposta = await checkbox({
      message:
        "Use as SETAS para mudar de meta, o ESPAÇO para marcar ou desmarcar e o ENTER para finalizar essa etapa",
      choices: [...metas], // Fazendo cópia do array de metas
      instructions: false,
    });
  
    if (resposta.length == 0) {
      console.log("Nenhuma meta selecionada.");
      return;
    }
  
    metas.map((item)=>{
      item.checked = false
    })

    // Marcando as metas selecionadas
    resposta.map((item) => {
      const metaq = metas.find((m) => {
        return m.value == item;
      });
  
      metaq.checked = true
    });
  
    console.log("Meta(s) marcadas como concluída(s)!");
  };
  

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
            await cadastrarMeta() //SEMPRE QUE UTILIZAR UMA FUNCAO ASSINCRONAR UTILIZAR O AWAIT NA CHAMADA DELA
            break
        case "listar":
            //console.log(metas);
            await listarMetas()
            break
        case "sair":
            console.log("ATÉ LOGO! VOCÊ SAIU");
            return //o return termina qualquer função
        }
    }
}
//CHAMANDO A FUNÇÃO - TODA FUNCAO CRIADA DEVE SER CHAMADA PRA QUE ELA SEJA INICIALIZADA
start()