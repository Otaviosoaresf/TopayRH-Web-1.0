//botoes para aparecer todas as semanas de cada mes 

const btnNovembro = document.getElementById("btn__novembro")
const btnDezembro = document.getElementById("btn__dezembro")

// elemento html contendo as semanas de cada mês

const semanasNovembro = document.getElementById("semanas__novembro")
const semanasDezembro = document.getElementById("semanas__dezembro")

//lista de botoes e de semanas.

const listaDeSemanas = document.querySelectorAll('[data-contexto="semanas"]')
const listaDeBotoes = document.querySelectorAll('[data-contexto="botoes__semanas"]')



btnNovembro.addEventListener('click', () => {
    semanasNovembro.classList.remove('hidden')
    semanasDezembro.classList.add('hidden')
    
})

btnDezembro.addEventListener('click', () => {
    semanasDezembro.classList.remove('hidden')
    semanasNovembro.classList.add('hidden')
})

listaDeBotoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const idDoBotao = botao.id
        exibeSemana(idDoBotao)
    })
})


function exibeSemana(idBotao) {
    listaDeSemanas.forEach(semana => {

        if (semana.id === idBotao) {
            semana.classList.remove("hidden")
        } else {
            semana.classList.add("hidden")
        }
        
    })
}

