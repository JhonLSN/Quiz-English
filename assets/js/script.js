// Box game Over 
let boxGameOver = document.querySelector('.game-over')

// Restart game 
let restart = document.querySelector('.restart')

restart.addEventListener('click', () => {
  location.reload();
})

// Array index
let indexArray = 1;

// Score Variable
let score = 0
let scoreTotal = document.querySelector('.--change-score')
let scoreGameOver = document.querySelector('.final-score')

// Time Variable 
let time = 10
let timeTotal = document.querySelector('.--change-time')
TimeCount()

// Generate random numbers
const maxNumbers = 50;
let list = [];
for (let i = 0; i < maxNumbers; i++) {
  list[i] = i + 1;
}

let randomNumber;
let tmp;
for (let i = list.length; i;) {
  randomNumber = Math.random() * i-- | 0;
  tmp = list[randomNumber];
  list[randomNumber] = list[i];
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
          time = 10
          DisablingQuestions()
          document.querySelector(`.question-${list[indexArray]}`).style.display = 'block'
          console.log(list[indexArray])
          indexArray++

          if (indexArray == list.length) {
            indexArray = 0
          }
        } else {
          alternativaA.style.background = '#dd8787'
          boxGameOver.style.visibility = 'visible'
          boxGameOver.style.transform = 'scale(1)'
          time = 0
        }
      });

      alternativaB.addEventListener('click', () => {
        if (b === answerValue) {
          Score()
          time = 10
          DisablingQuestions()
          document.querySelector(`.question-${list[indexArray]}`).style.display = 'block'
          console.log(list[indexArray])
          indexArray++

          if (indexArray == list.length) {
            indexArray = 0
          }
        } else {
          alternativaB.style.background = '#dd8787'
          boxGameOver.style.visibility = 'visible'
          boxGameOver.style.transform = 'scale(1)'
          time = 0
        }
      });

      alternativaC.addEventListener('click', () => {
        if (c === answerValue) {
          Score()
          time = 10
          DisablingQuestions()
          document.querySelector(`.question-${list[indexArray]}`).style.display = 'block'
          console.log(list[indexArray])
          indexArray++

          if (indexArray == list.length) {
            indexArray = 0
          }
        } else {
          alternativaC.style.background = '#dd8787'
          boxGameOver.style.visibility = 'visible'
          boxGameOver.style.transform = 'scale(1)'
          time = 0
        }
      });

      alternativaD.addEventListener('click', () => {
        if (d === answerValue) {
          Score()
          time = 10
          DisablingQuestions()
          document.querySelector(`.question-${list[indexArray]}`).style.display = 'block'
          console.log(list[indexArray])
          indexArray++

          if (indexArray == list.length) {
            indexArray = 0
          }
        } else {
          alternativaD.style.background = '#dd8787'
          boxGameOver.style.visibility = 'visible' 
          boxGameOver.style.transform = 'scale(1)'
          time = 0
        }
      });

      alternativaE.addEventListener('click', () => {
        if (e === answerValue) {
          Score()
          time = 10
          DisablingQuestions()
          document.querySelector(`.question-${list[indexArray]}`).style.display = 'block'
          console.log(list[indexArray])
          indexArray++

          if (indexArray == list.length) {
            indexArray = 0
          }
        } else {
          alternativaE.style.background = '#dd8787'
          boxGameOver.style.visibility = 'visible' 
          boxGameOver.style.transform = 'scale(1)'
          time = 0
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
  document.querySelector(`.question-${list[11]}`).style.display = 'none'
  document.querySelector(`.question-${list[12]}`).style.display = 'none'
  document.querySelector(`.question-${list[13]}`).style.display = 'none'
  document.querySelector(`.question-${list[14]}`).style.display = 'none'
  document.querySelector(`.question-${list[15]}`).style.display = 'none'
  document.querySelector(`.question-${list[16]}`).style.display = 'none'
  document.querySelector(`.question-${list[17]}`).style.display = 'none'
  document.querySelector(`.question-${list[18]}`).style.display = 'none'
  document.querySelector(`.question-${list[19]}`).style.display = 'none'
  document.querySelector(`.question-${list[20]}`).style.display = 'none'
  document.querySelector(`.question-${list[21]}`).style.display = 'none'
  document.querySelector(`.question-${list[22]}`).style.display = 'none'
  document.querySelector(`.question-${list[23]}`).style.display = 'none'
  document.querySelector(`.question-${list[24]}`).style.display = 'none'
  document.querySelector(`.question-${list[25]}`).style.display = 'none'
  document.querySelector(`.question-${list[26]}`).style.display = 'none'
  document.querySelector(`.question-${list[27]}`).style.display = 'none'
  document.querySelector(`.question-${list[28]}`).style.display = 'none'
  document.querySelector(`.question-${list[29]}`).style.display = 'none'
  document.querySelector(`.question-${list[30]}`).style.display = 'none'
  document.querySelector(`.question-${list[31]}`).style.display = 'none'
  document.querySelector(`.question-${list[32]}`).style.display = 'none'
  document.querySelector(`.question-${list[33]}`).style.display = 'none'
  document.querySelector(`.question-${list[34]}`).style.display = 'none'
  document.querySelector(`.question-${list[35]}`).style.display = 'none'
  document.querySelector(`.question-${list[36]}`).style.display = 'none'
  document.querySelector(`.question-${list[37]}`).style.display = 'none'
  document.querySelector(`.question-${list[38]}`).style.display = 'none'
  document.querySelector(`.question-${list[39]}`).style.display = 'none'
  document.querySelector(`.question-${list[40]}`).style.display = 'none'
  document.querySelector(`.question-${list[41]}`).style.display = 'none'
  document.querySelector(`.question-${list[42]}`).style.display = 'none'
  document.querySelector(`.question-${list[43]}`).style.display = 'none'
  document.querySelector(`.question-${list[44]}`).style.display = 'none'
  document.querySelector(`.question-${list[45]}`).style.display = 'none'
  document.querySelector(`.question-${list[46]}`).style.display = 'none'
  document.querySelector(`.question-${list[47]}`).style.display = 'none'
  document.querySelector(`.question-${list[48]}`).style.display = 'none'
  document.querySelector(`.question-${list[49]}`).style.display = 'none'
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
  document.querySelector(`.question-${list[11]}`).style.display = 'none'
  document.querySelector(`.question-${list[12]}`).style.display = 'none'
  document.querySelector(`.question-${list[13]}`).style.display = 'none'
  document.querySelector(`.question-${list[14]}`).style.display = 'none'
  document.querySelector(`.question-${list[15]}`).style.display = 'none'
  document.querySelector(`.question-${list[16]}`).style.display = 'none'
  document.querySelector(`.question-${list[17]}`).style.display = 'none'
  document.querySelector(`.question-${list[18]}`).style.display = 'none'
  document.querySelector(`.question-${list[19]}`).style.display = 'none'
  document.querySelector(`.question-${list[20]}`).style.display = 'none'
  document.querySelector(`.question-${list[21]}`).style.display = 'none'
  document.querySelector(`.question-${list[22]}`).style.display = 'none'
  document.querySelector(`.question-${list[23]}`).style.display = 'none'
  document.querySelector(`.question-${list[24]}`).style.display = 'none'
  document.querySelector(`.question-${list[25]}`).style.display = 'none'
  document.querySelector(`.question-${list[26]}`).style.display = 'none'
  document.querySelector(`.question-${list[27]}`).style.display = 'none'
  document.querySelector(`.question-${list[28]}`).style.display = 'none'
  document.querySelector(`.question-${list[29]}`).style.display = 'none'
  document.querySelector(`.question-${list[30]}`).style.display = 'none'
  document.querySelector(`.question-${list[31]}`).style.display = 'none'
  document.querySelector(`.question-${list[32]}`).style.display = 'none'
  document.querySelector(`.question-${list[33]}`).style.display = 'none'
  document.querySelector(`.question-${list[34]}`).style.display = 'none'
  document.querySelector(`.question-${list[35]}`).style.display = 'none'
  document.querySelector(`.question-${list[36]}`).style.display = 'none'
  document.querySelector(`.question-${list[37]}`).style.display = 'none'
  document.querySelector(`.question-${list[38]}`).style.display = 'none'
  document.querySelector(`.question-${list[39]}`).style.display = 'none'
  document.querySelector(`.question-${list[40]}`).style.display = 'none'
  document.querySelector(`.question-${list[41]}`).style.display = 'none'
  document.querySelector(`.question-${list[42]}`).style.display = 'none'
  document.querySelector(`.question-${list[43]}`).style.display = 'none'
  document.querySelector(`.question-${list[44]}`).style.display = 'none'
  document.querySelector(`.question-${list[45]}`).style.display = 'none'
  document.querySelector(`.question-${list[46]}`).style.display = 'none'
  document.querySelector(`.question-${list[47]}`).style.display = 'none'
  document.querySelector(`.question-${list[48]}`).style.display = 'none'
  document.querySelector(`.question-${list[49]}`).style.display = 'none'
}

function Score() {
  score += Math.floor(Math.random() * 10 + 1)
  scoreTotal.innerHTML = score
  scoreGameOver.innerHTML = `Score: ${score}`;
}

function TimeCount() {
  window.setInterval(function () {
    timeTotal.innerHTML = time;
    time--;
    if (time < 0) {
      time = 0
      boxGameOver.style.visibility = 'visible' 
      boxGameOver.style.transform = 'scale(1)'
    }
  }, 1000);
}


