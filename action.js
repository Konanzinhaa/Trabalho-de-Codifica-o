document.addEventListener('DOMContentLoaded', function () {
    // DomContentLoaded: espera a página carregar para rodar o código
    function criarSenha() {
        //Const para nunca mudar o valor
        //Lenght: tamanho da senha 
        const length = document.getElementById('length').value;
        const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
        const numeros = "0123456789";
        const simbolos = "?/~^{}[]!@#$%&*()_-+=.,:;";
        //Para saber se cada item está marcado
        //GetElementById pega o ID do HTML
        //String vazia para adicionar as constantes
        let caracteres = '';
        let alerta = 0;
        //Teste de if: checked verifica quais "caixas" foram marcadas 
        if (document.getElementById('lowercase').checked === true) caracteres += letrasMinusculas, alerta++;
        if (document.getElementById('uppercase').checked === true) caracteres += letrasMaiusculas, alerta++;
        if (document.getElementById('numbers').checked === true) caracteres += numeros, alerta++;
        if (document.getElementById('symbols').checked === true) caracteres += simbolos, alerta++;
        if (alerta === 0 ){
            window.alert("Selecione pelo menos uma das CheckBoxes!");
        };
        //Math random: pega número aleatório entre 0 a 1
        //CharAt: pega o caracter da posição que foi indicado no for
        //Math.floor: arrendonda o valor para o menor número inteiro mais próximo
        let senha = '';
        for (let i = 0; i < length; i++) {
               senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length)); 
        }
        return senha;
    }
     document.getElementById('generate').addEventListener('click', function(){
        const senhaGerada = criarSenha();
        document.getElementById('output').textContent = senhaGerada;
     });

     document.getElementById('copy').addEventListener('click', function(){
        const senhaGerada2 = document.getElementById('output').textContent;
        navigator.clipboard.writeText(senhaGerada2)
        .then(() => {alert('Senha copiada para a área de transferência!');})
     });

});

