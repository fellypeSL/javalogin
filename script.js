//Lista de usuarios
let listaDados = []

//criando a base (construtor)

function campos(campo1,campo2){
    this.campo1 = campo1
    this.campo2 = campo2
}



//disparar botão com o dom
const btnEnviar = document.querySelector('#btnSubmit')

//evento do click

btnEnviar.addEventListener('click',()=>{
    const inputCampo1 = document.querySelector('#campo1');
    const inputCampo2 = document.querySelector('#campo2');

    //instanciando o objeto para receber no campo
    let info = new campos(inputCampo1.value, inputCampo2.value)
    

    //pega o que estiver dentro do lista dados
    listaDados.push(info);

    //armazena tudo que for adcionado no lista dados convertido com json
    localStorage.setItem("dados",JSON.stringify(listaDados))
})



