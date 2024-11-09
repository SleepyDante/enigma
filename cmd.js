const outputElement = document.getElementById("output");
const cmdInput = document.getElementById("cmdInput");

cmdInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const input = cmdInput.value.trim();
        displayCommand(input);
        executeCommand(input);
        cmdInput.value = "";
    }
});

function displayCommand(command) {
    const commandElement = document.createElement("div");
    commandElement.innerHTML = `<span class="prompt">C:\\Users\\user&gt;</span> ${command}`;
    outputElement.appendChild(commandElement);
}

function executeCommand(command) {
    let response;
    switch (command.toLowerCase()) {
        case "help":
            response = "Comandos disponíveis: help, dir, cls, echo [mensagem]";
            break;
        case "dir":
            response = "Arquivos:\n - experiment_results.bin\n - hopeyoulikeit.mp3";
            break;
        case "cls":
            outputElement.innerHTML = "Microsoft Windows [Versão 10.0.19042.985]<br>(c) Microsoft Corporation. Todos os direitos reservados.<br><br>";
            return;
        case command.startsWith("echo") ? command : "":
            response = command.substring(5); // Exibe o texto após "echo"
            break;
        case "experiment_results.bin":
            response = "Ȣɤ҉ѪϞ₪Ǆʓӎԍ\n▓▒░████████▒░ђƈƄϾʩѧҖҘɷϠɸʒ҂ҌꂟʫᚴԂξϖҹ҉ԒФ\n▓▒░████████▒░Ҩ͢ѣ𐍈Ϟ֍ʮ≈𝛘۝₠𝜧∱𐌑𐍈Ѭ҈𐍇₪Ɇ✺𐤊𐌐𐌈ⱾƵ҂∿ɁӇȞⱷ⌾⧰\n▓▒░████████▒░ξ𐍈҄Ӑщ𐍇Ӑ𐌋𐌊ϠԧђϞ"
            break;
        case "thomas.navarro":
            response = "Resultados dos Experimentos de Thomas Navarro:\n\nProva de Resistência Física - Teste de Suporte ao Estresse\nResultado: Nota: 9/10\nObservação: Thomas conseguiu superar a média dos outros participantes, demonstrando grande resistência. No entanto, ele apresentou sinais de desgaste mental após o teste.\n\nProva de Estabilidade Mental - Descompressão Psicológica\nResultado: Nota: 6/10\nObservação: Apesar de inicialmente parecer estável, Thomas exibiu sinais de distúrbios emocionais em momentos de estresse elevado. Seu comportamento ficou mais imprevisível conforme o experimento avançava.\n\nExperimento de Controle de Temperamento - Interação com Substâncias Psicoativas\nResultado: Nota: 8/10\nObservação: Ele conseguiu manter algum controle sobre suas reações, mas os efeitos colaterais variaram de alucinações leves a comportamentos erráticos. A capacidade de racionalização foi severamente afetada após doses elevadas.\n\nProva de Resistência à Dor - Imersão em Ambientes Hostis\nResultado: Nota: 7/10\nObservação: Apesar da dor extrema, Thomas conseguiu resistir por um tempo considerável, mas foi necessário um monitoramento intensivo devido ao risco de colapso nervoso.\n\nTestes de Manipulação Neural - Monitoramento de Atividade Cerebral\nResultado: Nota: 9/10\nObservação: O monitoramento revelou uma alteração significativa nas ondas cerebrais, sugerindo que o experimento estava gerando reações incontroláveis em seu sistema nervoso.\n\nProva de Integridade Física - Teste de Combate Simulado\nResultado: Nota: 8/10\nObservação: Thomas mostrou habilidades de combate notáveis, mas com uma tendência a usar sua força bruta ao invés de estratégias mais sofisticadas.\n\nExperimento de Imunidade - Exposição a Patógenos Modificados\nResultado: Nota: 10/10\nObservação: O sistema imunológico de Thomas demonstrou uma resistência excepcional, superando as expectativas do experimento.\n\nProva de Lealdade - Teste de Decisão Sob Pressão\nResultado: Nota: 5/10\nObservação: Durante o teste, Thomas demonstrou inconsistências em suas escolhas. Em algumas situações, agiu de forma altruísta, enquanto em outras, suas decisões foram puramente egoístas."
            break;
        case "sato.kaito":
            response = "[NONE] Testes Encontrados."
            break;
        case "joao.evaristo":
                response = "[NONE] Testes Encontrados."
                break;
        case "carlos.jose":
            response = "[NONE] Testes Encontrados."
            break;
        case "hopeyoulikeit.mp3":
                const audio = new Audio("hopeyoulikeit.mp3"); // Assumindo que o arquivo está na mesma pasta
                audio.play();
                response = "Reproduzindo áudio...";
                break;
        default:
            response = `'${command}' não é reconhecido como um comando interno ou externo,\num programa operável ou um arquivo em lotes.`;
    }

    const responseElement = document.createElement("div");
    responseElement.textContent = response;
    outputElement.appendChild(responseElement);

    // Rolar para o final da página
    outputElement.scrollTop = outputElement.scrollHeight;
}
