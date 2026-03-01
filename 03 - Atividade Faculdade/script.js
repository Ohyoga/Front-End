document.addEventListener("DOMContentLoaded", function () {

    const App = {

        tela: document.getElementById("saida"),

        escrever(conteudo) {
            this.tela.innerHTML += conteudo;
        },

        iniciar() {
            this.variaveis();
            this.operadores();
            this.comparacao();
            this.condicionais();
            this.repeticao();
            this.arrays();
            this.funcoes();
            this.objetos();
            console.log("TODAS AS ATIVIDADES CONCLUÍDAS!");
        },

        variaveis() {
            const nome = "Filipe Dantas";
            let idade = 22;

            this.escrever(`
                <h2>1. Variáveis e Tipos</h2>
                <p>Nome: ${nome} | Idade: ${idade}</p>
                <hr>
            `);

            console.log(">> FIM QUESTÃO 1!");
        },

        operadores() {
            let soma = 10 + 5;
            let logica = (true && false);

            this.escrever(`
                <h2>2. Operadores</h2>
                <p>Soma (10+5): ${soma} | Lógica: ${logica}</p>
                <hr>
            `);

            console.log(">> FIM QUESTÃO 2!");
        },

        comparacao() {
            let num = 5;
            let textoNum = "5";

            let igualSimples = (num == textoNum);
            let igualEstrito = (num === textoNum);

            this.escrever(`
                <h2>3. Comparação</h2>
                <p>5 == "5": ${igualSimples}</p>
                <p>5 === "5": ${igualEstrito}</p>
                <hr>
            `);

            console.log(">> FIM QUESTÃO 3!");
        },

        condicionais() {
            let hora = 14;
            let saudacao = "";

            if (hora < 12) {
                saudacao = "Bom dia";
            } else if (hora < 18) {
                saudacao = "Boa tarde";
            } else {
                saudacao = "Boa noite";
            }

            this.escrever(`
                <h2>4. Condicionais</h2>
                <p>Hora: ${hora}h - ${saudacao}</p>
                <hr>
            `);

            console.log(">> FIM QUESTÃO 4!");
        },

        repeticao() {
            let contagem = "";

            for (let i = 1; i <= 5; i++) {
                contagem += i + " ";
            }

            this.escrever(`
                <h2>5. Repetição</h2>
                <p>${contagem}</p>
                <hr>
            `);

            console.log(">> FIM QUESTÃO 5!");
        },

        arrays() {
            let frutas = ["Abacaxi", "Melao","Maça"];
            frutas.push("Laranja");

            let numeros = [1, 2, 3, 4,5];
            let dobrados = numeros.map(n => n * 2);

            this.escrever(`
                <h2>6. Arrays</h2>
                <p>Frutas: ${frutas.join(", ")}</p>
                <p>Dobrados: ${dobrados}</p>
                <hr>
            `);

            console.log(">> FIM QUESTÃO 6!");
        },

        funcoes() {
            function somar(numero1, numero2) { return numero1 + numero2; }
            const subtrair = (numero1, numero2) => numero1 - numero2;

            this.escrever(`
                <h2>7. Funções</h2>
                <p>Soma: ${somar(10, 10)}</p>
                <p>Subtração: ${subtrair(25, 5)}</p>
                <hr>
            `);

            console.log(">> FIM QUESTÃO 7!");
        },

        objetos() {
            const carro = { marca: "ONIX", ano: 2015 };

            class Pessoa {
                constructor(n) {
                    this.nome = n;
                }

                ola() {
                    return "Olá, meu nome é " + this.nome;
                }
            }

            const aluno = new Pessoa("Filipe");

            this.escrever(`
                <h2>8. Orientação a Objetos</h2>
                <p>Carro: ${carro.marca} (${carro.ano})</p>
                <p>${aluno.ola()}</p>
            `);

            console.log(">> FIM QUESTÃO 8!");
        }
    };

    App.iniciar();

});