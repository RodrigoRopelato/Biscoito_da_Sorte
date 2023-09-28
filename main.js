//variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const frases = [
    "A sorte é o que acontece quando a preparação encontra a oportunidade.",
    "Não se preocupe com o que você não pode controlar; concentre-se no que você pode.",
    "O otimismo é a chave para superar os obstáculos e alcançar o sucesso.",
    "A persistência e o trabalho árduo são a chave para alcançar seus sonhos.",
    "O respeito pelos outros é o alicerce de relacionamentos saudáveis e duradouros.",
    "A vida é uma jornada, aproveite o passeio e aprecie cada momento.",
    "A verdadeira riqueza está nas experiências e relacionamentos que você constrói.",
    "A gratidão transforma o que temos em mais do que o suficiente.",
    "A simplicidade é a essência da verdadeira felicidade.",
    "A paciência é uma virtude que leva à realização de grandes conquistas.",
    "Grandes sonhos exigem uma grande dose de determinação e esforço.",
    "O amor é a linguagem universal que todos podem entender e apreciar.",
    "A sabedoria é o resultado de aprender com os erros e experiências da vida.",
    "A força interior é o que nos impulsiona a superar os desafios que enfrentamos.",
    "A coragem é a capacidade de enfrentar o medo e seguir em frente com determinação.",
    "Sorria, porque a vida é cheia de oportunidades para a felicidade.",
    "Cada novo dia é uma página em branco; escreva sua própria história com sabedoria.",
    "O conhecimento é o tesouro mais valioso que você pode adquirir na vida.",
    "O sucesso é uma jornada, não um destino; aproveite o caminho para chegar lá.",
    "A amizade é um vínculo precioso que enriquece nossas vidas de maneiras incontáveis.",
    "A alegria está em todos os lugares; você só precisa abrir os olhos para vê-la.",
    "O perdão é o caminho para a liberação do peso do passado.",
    "A compaixão é a chave para construir pontes e promover a paz no mundo.",
    "A humildade é a qualidade que torna as pessoas verdadeiramente grandiosas.",
    "A esperança é a luz que brilha mesmo nas horas mais sombrias.",
    "A gentileza é a linguagem que o coração fala e que todos podem entender.",
    "A honestidade é a base de qualquer relacionamento sólido e confiável.",
    "A vida é uma aventura; aproveite cada momento como se fosse uma descoberta.",
    "A educação é a chave para abrir as portas do conhecimento e da oportunidade.",
    "A perseverança é a qualidade que nos leva ao sucesso, não importa o quão difícil seja.",
    "A felicidade é o destino que todos nós buscamos; o caminho está em nossas escolhas.",
    "O tempo é um recurso precioso; use-o com sabedoria para criar uma vida significativa.",
    "A autoconfiança é a armadura que nos protege das críticas e do julgamento dos outros.",
    "A intuição é o guia interior que muitas vezes nos aponta na direção certa.",
    "A generosidade é o ato de dar que enriquece tanto o doador quanto o receptor.",
    "O sucesso começa com a coragem de dar o primeiro passo em direção aos seus sonhos.",
    "A harmonia está em encontrar equilíbrio em todas as áreas da vida.",
    "O presente é um presente; aproveite-o ao máximo enquanto você o tem.",
    "A vida é cheia de surpresas maravilhosas; mantenha-se aberto a elas.",
    "A resiliência é a capacidade de se recuperar e se adaptar às adversidades.",
    "A autenticidade é a chave para relacionamentos genuínos e significativos.",
    "A fé é a força que nos ajuda a superar desafios aparentemente impossíveis.",
    "A imaginação é o ponto de partida para a criação de um futuro melhor.",
    "A autoaceitação é o primeiro passo para a autoestima e a felicidade duradoura.",
    "A paixão é a energia que nos impulsiona a perseguir nossos interesses mais profundos.",
    "O silêncio é onde encontramos paz e clareza em meio ao caos do mundo.",
    "A simplicidade é a chave para encontrar a beleza nas coisas mais simples da vida.",
    "A verdadeira riqueza está em ser grato pelo que você já tem.",
    "A vida é uma jornada única; aproveite-a ao máximo enquanto dura.",
    "A criatividade é a chama que transforma ideias em realidade.",
    "O amor é a força que une corações e transcende fronteiras.",
    "O sucesso é a recompensa pelo trabalho duro e pela determinação incansável."  
]
const btnLuck = document.querySelector("#btnLuck")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random()*49)

// Eventos
btnLuck.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

//funções callback
function handleTryClick(e) {
    e.preventDefault()

    toggleScreen ()
    
    screen2.querySelector("p").innerText = frases[randomNumber] 
}

function handleResetClick() {

    toggleScreen ()

    randomNumber = Math.round(Math.random()*49)
}

function toggleScreen () {
    screen2.classList.toggle("hide")
    screen1.classList.toggle("hide")
}