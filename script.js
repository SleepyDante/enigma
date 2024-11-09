document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const errorMessage = document.getElementById("error-message");
    const deathScreen = document.getElementById("death-screen");

    // Verificar combinações específicas de nome de usuário e senha
    if (username === "joao" && password === "evaristo") {
        //joao/evaristo
        typeErrorMessage("O homem que confiou demais.", errorMessage);  // Chama a função para efeito de digitação
        errorMessage.style.color = "purple";  // Define a cor da fonte
    } else if (username === "elizabeth" && password === "rodrigues"){
        //elizabeth/rodrigues
        typeErrorMessage("Das sombras, plantei; ele floresceu. Agora, é hora de colher.", errorMessage)
        errorMessage.style.color = "#FFF";  // Define a cor da fonte
    } else if (username === "thomas" && password === "navarro") {
        // thomas/navarro
        typeErrorMessage("O primeiro receptáculo.", errorMessage);  // Chama a função para efeito de digitação
        errorMessage.style.color = "yellow";  // Define a cor da fonte
    } else if (username === "carlos" && password === "jose") {
        // carlos/jose
        typeErrorMessage("A vingança é o fogo que consome até a alma do mais justo.", errorMessage);  // Chama a função para efeito de digitação
        errorMessage.style.color = "red";  // Define a cor da fonte
    } else if (username === "sato" && password === "kaito") {
        // sato/kaito
        typeErrorMessage("Ele não escolheu, mas agora não consegue mais viver sem.", errorMessage);  // Chama a função para efeito de digitação
        errorMessage.style.color = "black";  // Define a cor da fonte
    } else if (username === "lidia" && password === "goncalves") {
        // lidia/goncalves
        typeErrorMessage("Para: ████████ - Departamento de Operações Especiais\nAssunto: Relatório de Captura - Lídia Gonçalves\nA captura de Lídia Gonçalves foi realizada com sucesso. A alvos foi interceptada em uma rua isolada durante a madrugada. A operação foi executada sem resistência significativa.\nAtualmente, ela se encontra sob detenção, sem contato com o exterior. Não há sinais de cooperação ou fuga até o momento. Aguardo novas instruções sobre como proceder.\nOperador nº 42", errorMessage);  // Chama a função para efeito de digitação
        errorMessage.style.color = "#FFF";  // Define a cor da fonte
    } else if (username === "thomas" && password === "evaristo") {
        // thomas/evaristo
        typeErrorMessage("Objeto de medo.", errorMessage);  // Chama a função para efeito de digitação
        errorMessage.style.color = "#FFF";  // Define a cor da fonte

    }else  if (username === "deus" && password === "ceo") {
        // Mostrar a imagem de falha
        deathScreen.style.display = "flex"; // Exibir a tela de falha

    } else if (username === "abismo" & password === "medo"){
        // Redirecionar para o link após login
        window.location.href = "https://crisordemparanormal.com/campanha/entrar/2e66a36d-5367";
    } else {
        // Caso a senha e usuário não correspondam
        typeErrorMessage("Usuário ou senha inválidos.", errorMessage);  // Chama a função para efeito de digitação
        errorMessage.style.color = "red";  // Define a cor vermelha para a mensagem de erro
    }
});

// Função para simular o efeito de digitação
function typeErrorMessage(message, element) {
    let i = 0;
    element.textContent = ""; // Limpa qualquer texto anterior
    let interval = setInterval(function() {
        element.textContent += message.charAt(i);  // Adiciona uma letra de cada vez
        i++;
        if (i > message.length - 1) {
            clearInterval(interval);  // Para o intervalo quando a mensagem estiver completa
        }
    }, 100);  // Intervalo de 100ms entre cada letra, você pode ajustar a velocidade
}

// Prevenir clique direito
document.addEventListener('contextmenu', event => event.preventDefault());

// Desabilitar teclas F12 e Ctrl+Shift+I
document.onkeydown = function(e) {
    if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
        return false;
    }
};