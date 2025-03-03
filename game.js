const RandomWord = document.getElementById("guess-word");
const generateWord = document.getElementById("generate-word");
const reveaWord = document.getElementById("reveal-word")
const answerInput = document.querySelector(".answer-input");
const submitBtn = document.getElementById('submit-answer')
const statusMessage = document.getElementById('status')

const words = [
"mirror", "shadow", "violin", "guitar", "castle",
"bridge", "puzzle", "jumble", "forest", "dreamer",
"kingdom", "wizard", "fortune", "lantern", "crystal",
"phantom", "whisper", "twilight", "journey", "horizon"
];

let selectedWord;
let score = 0;
function RandomWords() {
  let randomIndex = Math.floor(Math.random() * words.length);
  selectedWord = words[randomIndex];
  console.log(selectedWord);

  let shuffledWord = selectedWord
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  RandomWord.innerHTML = shuffledWord.toUpperCase();
}



function checkAnswer() {
if (answerInput.value === "") {
statusMessage.innerHTML = `<p>Don't Leave Empty Input</p>`;
} else if (RandomWord.innerHTML === "????") {
statusMessage.innerHTML = `<p>Please Generate Random Word First</p>`;
} else if (answerInput.value === selectedWord) {
statusMessage.innerHTML = `<p class="correct">Correct</p>`;
} else {
statusMessage.innerHTML = `<p class="wrong">Incorrect</p>`;
}
}

generateWord.addEventListener("click", RandomWords);
reveaWord.addEventListener("click", reveal);

submitBtn.addEventListener('click',checkAnswer);
answerInput.addEventListener('keydown',function(event){
  if(event.key === "Enter"){
    checkAnswer()
  }
}); 
function reveal(){
  if(RandomWord.innerHTML === "????"){
    statusMessage.innerHTML = `<p>Please Generate Random Word First</p>`
  }
  else{
    answerInput.value =  selectedWord
  }
}