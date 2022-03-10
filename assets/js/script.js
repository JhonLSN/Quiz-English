// Array index
let indexArray = 1;

// Score Variable
let score = 0
let scoreTotal = document.querySelector('.--change-score')

// Generate random numbers
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
    EnableFirstQuestions()


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
          Score()
          DisablingQuestions()
          document.querySelector(`.question-${list[indexArray]}`).style.display = 'block'
          console.log(list[indexArray])
          indexArray++

          if (indexArray == list.length) {
            indexArray = 0
          }
        } else {
          alternativaA.style.background = '#dd8787'
        }
      });

      alternativaB.addEventListener('click', () => {
        if (b === answerValue) {
          Score()
          DisablingQuestions()
          document.querySelector(`.question-${list[indexArray]}`).style.display = 'block'
          console.log(list[indexArray])
          indexArray++

          if (indexArray == list.length) {
            indexArray = 0
          }
        } else {
          alternativaB.style.background = '#dd8787'
        }
      });

      alternativaC.addEventListener('click', () => {
        if (c === answerValue) {
          Score()
          DisablingQuestions()
          document.querySelector(`.question-${list[indexArray]}`).style.display = 'block'
          console.log(list[indexArray])
          indexArray++

          if (indexArray == list.length) {
            indexArray = 0
          }
        } else {
          alternativaC.style.background = '#dd8787'
        }
      });

      alternativaD.addEventListener('click', () => {
        if (d === answerValue) {
          Score()
          DisablingQuestions()
          document.querySelector(`.question-${list[indexArray]}`).style.display = 'block'
          console.log(list[indexArray])
          indexArray++

          if (indexArray == list.length) {
            indexArray = 0
          }
        } else {
          alternativaD.style.background = '#dd8787'
        }
      });

      alternativaE.addEventListener('click', () => {
        if (e === answerValue) {
          Score()
          DisablingQuestions()
          document.querySelector(`.question-${list[indexArray]}`).style.display = 'block'
          console.log(list[indexArray])
          indexArray++

          if (indexArray == list.length) {
            indexArray = 0
          }
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

function EnableFirstQuestions() {
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
}

function Score() {
  score += Math.floor(Math.random() * 10 + 1)
  scoreTotal.innerHTML = score
}