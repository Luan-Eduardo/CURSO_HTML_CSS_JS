const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de marcação",
      "Uma linguagem de programação interpretada",
      "Um banco de dados",
    ],
    correta: 1
  },
  {
    pergunta: "Qual palavra-chave é usada para declarar uma variável que pode mudar de valor?",
    respostas: [
      "const",
      "var",
      "let",
    ],
    correta: 2
  },
  {
    pergunta: "Qual destes tipos de dados NÃO existe em JavaScript?",
    respostas: [
      "boolean",
      "integer",
      "undefined",
    ],
    correta: 1
  },
  {
    pergunta: "Como se escreve um comentário de uma linha em JavaScript?",
    respostas: [
      "<!-- comentário -->",
      "// comentário",
      "/* comentário */",
    ],
    correta: 1
  },
  {
    pergunta: "Qual operador é usado para comparação de valor E tipo?",
    respostas: [
      "==",
      "=",
      "===",
    ],
    correta: 2
  },
  {
    pergunta: "Qual método converte uma string em número inteiro?",
    respostas: [
      "parseInt()",
      "toString()",
      "Number.toInt()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual estrutura é usada para repetição enquanto uma condição for verdadeira?",
    respostas: [
      "if",
      "for",
      "while",
    ],
    correta: 2
  },
  {
    pergunta: "Como acessar o primeiro elemento de um array?",
    respostas: [
      "array[1]",
      "array[0]",
      "array.first()",
    ],
    correta: 1
  },
  {
    pergunta: "Qual função é usada para exibir mensagens no console?",
    respostas: [
      "alert()",
      "console.log()",
      "print()",
    ],
    correta: 1
  },
  {
    pergunta: "Qual evento é disparado ao clicar em um elemento HTML?",
    respostas: [
      "onload",
      "onchange",
      "onclick",
    ],
    correta: 2
  },
];
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta;
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)

    dt.querySelector('span').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('span').value = item.respostas.indexOf(resposta)
    
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      //alert(corretas.size)
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    
    dt.querySelector('span').addEventListener('click', (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      //alert(item.correta)
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      
      dt.querySelector('input[name="'+ 'pergunta-' + perguntas.indexOf(item)+'"][value="'+item.respostas.indexOf(resposta)+'"]').checked = true;
    })
    
    
    quizItem.querySelector('dl').appendChild(dt)
  }
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
}