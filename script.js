const storyData = {
    start: {
        text: "Victor está no último ano do ensino médio e chegou o momento da inscrição do vestibular. Ele gosta muito de tecnologia e exatas, mas está dividido entre duas áreas principais.",
        options: [
            { text: "Inscrever-se para Engenharia Elétrica", next: "eletrica_1" },
            { text: "Inscrever-se para Engenharia Mecânica", next: "mecanica_1" }
        ]
    },

    // --- CAMINHO ELETRICA ---
    eletrica_1: {
        text: "Victor entrou em Engenharia Elétrica. No primeiro ano, surge a oportunidade de entrar em um grupo de extensão.",
        options: [
            { text: "Entrar na equipe de Robótica e Programação", next: "eletrica_2a" },
            { text: "Entrar na equipe de Sistemas de Energia Solar", next: "eletrica_2b" }
        ]
    },
    eletrica_2a: {
        text: "Na equipe de Robótica, Victor desenvolve interesse por sistemas embarcados e automação. Chega a hora do estágio de férias.",
        options: [
            { text: "Buscar estágio em uma multinacional de Automação", next: "eletrica_3a" },
            { text: "Desenvolver uma Startup de Internet das Coisas (IoT)", next: "eletrica_3b" }
        ]
    },
    eletrica_2b: {
        text: "Trabalhando com Energia Solar, Victor aprende muito sobre fontes renováveis. Um professor o convida para escolher um foco final.",
        options: [
            { text: "Focar em Pesquisa Acadêmica de Redes Elétricas", next: "eletrica_3c" },
            { text: "Focar em Gestão de Projetos de Energia Eólica", next: "eletrica_3d" }
        ]
    },

    // Finais Elétrica
    eletrica_3a: {
        text: "Fim da Jornada: Victor formou-se em Engenharia Elétrica, tornou-se Engenheiro de Automação sênior e viaja o mundo implementando fábricas inteligentes!",
        options: []
    },
    eletrica_3b: {
        text: "Fim da Jornada: A startup do Victor foi comprada por uma grande empresa de tecnologia e ele virou Diretor de Inovação!",
        options: []
    },
    eletrica_3c: {
        text: "Fim da Jornada: Victor concluiu o mestrado e hoje é um pesquisador renomado no setor elétrico sustentável!",
        options: []
    },
    eletrica_3d: {
        text: "Fim da Jornada: Victor gerencia grandes parques eólicos e lidera a transição energética do país!",
        options: []
    },

    // --- CAMINHO MECANICA ---
    mecanica_1: {
        text: "Victor entrou em Engenharia Mecânica. No primeiro ano, ele precisa escolher qual projeto extracurricular vai seguir.",
        options: [
            { text: "Entrar no projeto Fórmula SAE (Carros de Corrida)", next: "mecanica_2a" },
            { text: "Entrar no laboratório de Usinagem e Materiais", next: "mecanica_2b" }
        ]
    },
    mecanica_2a: {
        text: "No Fórmula SAE, Victor trabalha na aerodinâmica e estrutura do veículo. No último ano, ele precisa decidir seu TCC.",
        options: [
            { text: "Projetar um carro de corrida elétrico", next: "mecanica_3a" },
            { text: "Focar em simulação fluiddinâmica no setor automobilístico", next: "mecanica_3b" }
        ]
    },
    mecanica_2b: {
        text: "No laboratório, Victor se apaixona pelo estudo de novos materiais e fabricação. Surge uma oportunidade internacional.",
        options: [
            { text: "Aceitar um intercâmbio de pesquisa na Alemanha", next: "mecanica_3c" },
            { text: "Fazer estágio em uma grande indústria Aeroespacial", next: "mecanica_3d" }
        ]
    },

    // Finais Mecânica
    mecanica_3a: {
        text: "Fim da Jornada: Victor se formou em Engenharia Mecânica e foi contratado por uma equipe internacional de esportes a motor!",
        options: []
    },
    mecanica_3b: {
        text: "Fim da Jornada: Victor tornou-se especialista em simulação computacional em uma montadora de veículos!",
        options: []
    },
    mecanica_3c: {
        text: "Fim da Jornada: Victor concluiu a dupla diplomação na Europa e trabalha com materiais avançados para a indústria!",
        options: []
    },
    mecanica_3d: {
        text: "Fim da Jornada: Victor tornou-se Engenheiro Mecânico no setor aeronáutico, projetando estruturas de jatos e foguetes!",
        options: []
    }
};

const storyTextNode = document.getElementById("story-text");
const optionsContainerNode = document.getElementById("options-container");
const restartBtn = document.getElementById("restart-btn");

function showNode(nodeKey) {
    const currentNode = storyData[nodeKey];
    storyTextNode.innerText = currentNode.text;
    optionsContainerNode.innerHTML = "";

    if (currentNode.options.length > 0) {
        currentNode.options.forEach(option => {
            const button = document.createElement("button");
            button.innerText = option.text;
            button.addEventListener("click", () => showNode(option.next));
            optionsContainerNode.appendChild(button);
        });
        restartBtn.classList.add("hidden");
    } else {
        restartBtn.classList.remove("hidden");
    }
}

restartBtn.addEventListener("click", () => {
    showNode("start");
});

// Inicializar
showNode("start");
