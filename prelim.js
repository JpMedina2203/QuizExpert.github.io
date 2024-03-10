
// Click Event
const startButton = document.querySelector('.start-btn');
const startDiv = document.querySelector('.Intro');
const form = document.querySelector('.form1');
startButton.addEventListener('click', e => {
  e.preventDefault(); 
  startDiv.classList.add('d-none');
  MusicChoice.classList.remove('d-none')
});

const MusicChoice = document.querySelector('.MusicChoice')
const MusicChoice1 = document.querySelector('.MusicChoice1')

MusicChoice1.addEventListener('click', e => {
  MusicChoice.classList.add('d-none')
  form.classList.remove('d-none');
  form2.classList.remove('d-none');
})
const MusicChoice2 = document.querySelector('.MusicChoice2');
const music = document.getElementById('music');

//Double Click Event
MusicChoice2.addEventListener('dblclick', e => {
  music.play();
  MusicChoice.classList.add('d-none');
  form.classList.remove('d-none');
  form2.classList.remove('d-none');
});


//KeyUp Event
const form2 = document.querySelector('.form2')
const EmailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const NamePattern = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
form2.addEventListener('keyup', e => {
const email = form2.email1.value;
const name = form2.fname.value;
  if (EmailPattern.test(email)) {
    form2.email1.classList.remove('error');
    form2.email1.classList.add('success');
    
  } else {
    form2.email1.classList.remove('success');
    form2.email1.classList.add('error');
  }

  if (NamePattern.test(name)){
    form2.fname.classList.remove('error');
    form2.fname.classList.add('success');
    
  }else{
    form2.fname.classList.add('error');
    form2.fname.classList.remove('sucess');

  }
});

//Submit Event
const StudentName = document.querySelector('.StudentName')
const StudentEmail = document.querySelector('.StudentEmail')
const warning = document.querySelector('.warning')
const MathQuiz = document.querySelector('.MathQuiz')
const OpenVideo = document.querySelector('.OpenVideo')
const MathVideo = document.querySelector('.MathVideo')
form2.addEventListener('submit', e => {
  e.preventDefault();
  const email = form2.email1.value;
  const name = form2.fname.value;
  
  if (EmailPattern.test(email) & NamePattern.test(name)){
  form.classList.add('d-none')
  form2.classList.add('d-none');
  MathQuiz.classList.remove('d-none');
  StudentName.textContent = 'Student Name: ' + name;
  StudentEmail.textContent = 'Student Email: ' + email;
  OpenVideo.classList.add('d-none')
  OpenVideo.pause();
  MathVideo.classList.remove('d-none')
  MathVideo.play();
  }else{
    warning.textContent = 'Invalid name format or email!';
    warning.classList.remove('d-none');
  }
})
const Quiz1 = document.querySelectorAll('.question')
Quiz1.forEach(question =>{
  //MouseOver Event
    question.addEventListener('mouseover', e => {
    question.classList.remove('text-light','h5' )
    question.classList.add('text-warning', 'h2')
  });
  
  //MouseOut Event
    question.addEventListener('mouseout', e => {
    console.log('Mouseout event triggered');
    question.classList.remove('text-warning','h2')
    question.classList.add('text-light', 'h5')
  });
})

//Scroll Event
const Hide = document.querySelector('.hide')
window.addEventListener('scroll', e => {
  let scroll = window.scrollY;
  if(scroll >= window.innerHeight){
    window.scrollTo(0);
  }else{
    Hide.style.marginRight = scroll * 2.5  + 'px';
  }
})

const CorrectAnswerMathQuiz = ['D', 'C', 'D', 'D', 'A', 'B', 'D', 'C', 'D', 'D'];
const MathQuiz1 = document.querySelector('.quiz1')
const StudentScore = document.querySelector('.StudentScore')
const ScoreResult = document.querySelector('.ScoreResult')
const Response1 = document.querySelector('.Response')
MathQuiz1.addEventListener('submit', e => {
  e.preventDefault();
  let score = 0;
   const StudentAnswers = [MathQuiz1.q1.value, MathQuiz1.q2.value, MathQuiz1.q3.value, MathQuiz1.q4.value, MathQuiz1.q5.value, 
    MathQuiz1.q6.value, MathQuiz1.q7.value, MathQuiz1.q8.value, MathQuiz1.q9.value, MathQuiz1.q10.value]
    StudentAnswers.forEach((answer, index) => {
      if(answer === CorrectAnswerMathQuiz[index]){
        score += 10;
      }
    });
    StudentScore.querySelector('span').textContent = score + '%';
    ScoreResult.classList.remove('d-none');
    MathQuiz.classList.add('d-none');
    if(score < 60){
      NextQuiz.disabled = true;
      Response1.querySelector('span').classList.add('alert', 'alert-danger')
      Response1.querySelector('span').textContent = 'Sorry, you are not qualified to answer the next quiz';
    }else{
      NextQuiz.disabled = false;
      Home.disabled = true;
      Response1.querySelector('span').classList.add('alert', 'alert-success')
      Response1.querySelector('span').textContent = 'Congratulations!, you qualified to answer the next quiz';
    }
});

const Home = document.querySelector('.Home')
Home.addEventListener('click', e =>{
ScoreResult.classList.add('d-none');
startDiv.classList.remove('d-none');
OpenVideo.classList.remove('d-none');
OpenVideo.play();
MathVideo.classList.add('d-none');
MathVideo.pause();
form2.name.value = '';
form2.email1.value = '';
warning.classList.add('d-none');
form2.reset();
MathQuiz1.reset();
form2.email1.classList.remove('error', 'success');
form2.fname.classList.remove('error', 'success');
music.pause();
Response1.querySelector('span').classList.remove('alert', 'alert-success', 'alert-success')
Response1.querySelector('span').textContent = '';
});

const NextQuiz = document.querySelector('.NextQuiz');
const ScienceQuiz = document.querySelector('.ScienceQuiz');
const ScienceVideo = document.querySelector('.ScienceVideo')
const StudentName1 = document.querySelector('.StudentName1')
const StudentEmail1 = document.querySelector('.StudentEmail1')
NextQuiz.addEventListener('click', e => {
  Home.disabled = false;
  const name1 = form2.fname.value;
  const email1 = form2.email1.value;
  MathVideo.classList.add('d-none');
  MathVideo.pause();
  ScienceVideo.classList.remove('d-none');
  ScienceVideo.play();
  ScoreResult.classList.add('d-none');
  ScienceQuiz.classList.remove('d-none');
  StudentName1.textContent = 'Student Name: ' + name1;
  StudentEmail1.textContent = 'Student Email: ' + email1;
  Response1.querySelector('span').classList.remove('alert', 'alert-success', 'alert-success')
  Response1.querySelector('span').textContent = '';
});


const CorrectAnswerSciQuiz = ['C', 'A', 'B', 'D', 'D', 'C', 'D', 'B', 'C', 'C'];
const ScienceQuiz2 = document.querySelector('.quiz2')
const StudentScoreSci = document.querySelector('.StudentScoreSci')
const ScoreResultSci = document.querySelector('.ScoreResultSci')
const Response2 = document.querySelector('.Response2')
ScienceQuiz2.addEventListener('submit', e =>{
  e.preventDefault()
  let score1 = 0;
  const StudentSciAnswers = [ScienceQuiz2.qS1.value, ScienceQuiz2.qS2.value, ScienceQuiz2.qS3.value, ScienceQuiz2.qS4.value, ScienceQuiz2.qS5.value,
    ScienceQuiz2.qS6.value, ScienceQuiz2.qS7.value, ScienceQuiz2.qS8.value, ScienceQuiz2.qS9.value, ScienceQuiz2.qS10.value,]
    StudentSciAnswers.forEach((answers, index) => {
      if(answers === CorrectAnswerSciQuiz[index]){
        score1 += 10;
      }
    });
    StudentScoreSci.querySelector('span').textContent = score1 + '%';
    ScoreResultSci.classList.remove('d-none');
    ScienceQuiz.classList.add('d-none');
    if(score1 < 60){
      Response2.querySelector('span').classList.add('alert', 'alert-danger')
      Response2.querySelector('span').textContent = 'You passed at Math Quiz but you failed in Science Quiz';
    }else{
      Response2.querySelector('span').classList.add('alert', 'alert-success')
      Response2.querySelector('span').textContent = 'Congratulations!, you passed both Math and Science Quiz';
    }
})

const Home1 = document.querySelector('.Home1')
Home1.addEventListener('click', e =>{
  ScoreResultSci.classList.add('d-none');
  startDiv.classList.remove('d-none');
  OpenVideo.classList.remove('d-none');
  OpenVideo.play();
  ScienceVideo.classList.add('d-none');
  ScienceVideo.pause();
  form2.name.value = '';
  form2.email1.value = '';
  warning.classList.add('d-none');
  form2.reset();
  MathQuiz1.reset();
  form2.email1.classList.remove('error', 'success');
  form2.fname.classList.remove('error', 'success');
  music.pause();  
  ScienceQuiz2.reset();
})
