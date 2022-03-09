//Generate random numbers
const maxNumbers = 11;
let list = [];
for (let i = 0; i < maxNumbers; i++) {
  list[i] = i + 1;
}

let randomNumber;
let tmp;
for (let i = list.length; i;) {
  randomNumber = Math.random() * i-- | 0;
  tmp = list[randomNumber];
  // troca o número aleatório pelo atual
  list[randomNumber] = list[i];
  // troca o atual pelo aleatório
  list[i] = tmp;
}


// Consuming the Question API
const question = document.querySelector('.questions')

fetch('../assets/json/data.json')
  .then(response => response.json())
  .then(data => {

    data.questoes.map((item) => {
      showQuestions(item.questao, item.pergunta, item.alternativaA, item.alternativaB, item.alternativaC, item.alternativaD, item.alternativaE, item.resposta)
    })

    //Disabling all questions
    document.querySelector(`.question-${list[0]}`).style.display = 'block'
    document.querySelector(`.question-${list[1]}`).style.display = 'none'
    document.querySelector(`.question-${list[2]}`).style.display = 'none'
    document.querySelector(`.question-${list[3]}`).style.display = 'none'
    document.querySelector(`.question-${list[4]}`).style.display = 'none'
    document.querySelector(`.question-${list[5]}`).style.display = 'none'
    document.querySelector(`.question-${list[6]}`).style.display = 'none'
    document.querySelector(`.question-${list[7]}`).style.display = 'none'
    document.querySelector(`.question-${list[8]}`).style.display = 'none'
    document.querySelector(`.question-${list[9]}`).style.display = 'none'
    document.querySelector(`.question-${list[10]}`).style.display = 'none'

    function showQuestions(questionNumber, statementValue, a, b, c, d, e, answerValue) {

      let questionBox = document.createElement('div')
      let statement = document.createElement('h1')
      let answer = document.createElement('div')
      let alternativaA = document.createElement('p')
      let alternativaB = document.createElement('p')
      let alternativaC = document.createElement('p')
      let alternativaD = document.createElement('p')
      let alternativaE = document.createElement('p')

      statement.innerHTML = statementValue
      alternativaA.innerHTML = `A) ${a}`
      alternativaB.innerHTML = `B) ${b}`
      alternativaC.innerHTML = `C) ${c}`
      alternativaD.innerHTML = `D) ${d}`
      alternativaE.innerHTML = `E) ${e}`

      questionBox.setAttribute('class', `question-${questionNumber}`)
      answer.setAttribute('id', 'answers')
      statement.setAttribute('class', 'statement')
      alternativaA.setAttribute('class', 'answers-confirm')
      alternativaB.setAttribute('class', 'answers-confirm')
      alternativaC.setAttribute('class', 'answers-confirm')
      alternativaD.setAttribute('class', 'answers-confirm')
      alternativaE.setAttribute('class', 'answers-confirm')

      question.appendChild(questionBox)

      questionBox.appendChild(statement)
      questionBox.append(answer)
      questionBox.appendChild(alternativaA)
      questionBox.appendChild(alternativaB)
      questionBox.appendChild(alternativaC)
      questionBox.appendChild(alternativaD)
      questionBox.appendChild(alternativaE)

      answer.appendChild(alternativaA)
      answer.appendChild(alternativaB)
      answer.appendChild(alternativaC)
      answer.appendChild(alternativaD)
      answer.appendChild(alternativaE)

      alternativaA.addEventListener('click', () => {
        if (a === answerValue) {
          alternativaA.style.background = '#90dd87'
          DisablingQuestions()
          document.querySelector(`.question-${list[0 + 1]}`).style.display = 'block'

        } else {
          alternativaA.style.background = '#dd8787'
        }
      });

      alternativaB.addEventListener('click', () => {
        if (b === answerValue) {
          alternativaB.style.background = '#90dd87'
          DisablingQuestions()
          document.querySelector(`.question-${list[0 + 1]}`).style.display = 'block'
        } else {
          alternativaB.style.background = '#dd8787'
        }
      });

      alternativaC.addEventListener('click', () => {
        if (c === answerValue) {
          alternativaC.style.background = '#90dd87'
          DisablingQuestions()
          document.querySelector(`.question-${list[0 + 1]}`).style.display = 'block'
        } else {
          alternativaC.style.background = '#dd8787'
        }
      });

      alternativaD.addEventListener('click', () => {
        if (d === answerValue) {
          alternativaD.style.background = '#90dd87'
          DisablingQuestions()
          document.querySelector(`.question-${list[0 + 1]}`).style.display = 'block'
        } else {
          alternativaD.style.background = '#dd8787'
        }
      });

      alternativaE.addEventListener('click', () => {
        if (e === answerValue) {
          alternativaE.style.background = '#90dd87'
          DisablingQuestions()
          document.querySelector(`.question-${list[0 + 1]}`).style.display = 'block'
        } else {
          alternativaE.style.background = '#dd8787'
        }
      });
    }




  })

function DisablingQuestions() {
  document.querySelector(`.question-${list[0]}`).style.display = 'none'
  document.querySelector(`.question-${list[1]}`).style.display = 'none'
  document.querySelector(`.question-${list[2]}`).style.display = 'none'
  document.querySelector(`.question-${list[3]}`).style.display = 'none'
  document.querySelector(`.question-${list[4]}`).style.display = 'none'
  document.querySelector(`.question-${list[5]}`).style.display = 'none'
  document.querySelector(`.question-${list[6]}`).style.display = 'none'
  document.querySelector(`.question-${list[7]}`).style.display = 'none'
  document.querySelector(`.question-${list[8]}`).style.display = 'none'
  document.querySelector(`.question-${list[9]}`).style.display = 'none'
  document.querySelector(`.question-${list[10]}`).style.display = 'none'
}

function proximoItem() {
  indiceArray++;
  if (indiceArray == dadosArray.length) {
    indiceArray = 0;
  }
}