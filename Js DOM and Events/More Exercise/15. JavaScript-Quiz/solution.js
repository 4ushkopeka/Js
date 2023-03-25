function solve() {
  let correctCount = 0;
  let firstSectionCorrectBtn = document.querySelector('#quizzie > section:nth-child(2) > ul > li.quiz-answer.low-value > div');
  let firstSectionWrongBtn = document.querySelector('#quizzie > section:nth-child(2) > ul > li.quiz-answer.high-value > div');
  firstSectionCorrectBtn.addEventListener('click', (e)=>{
    correctCount++;
    e.currentTarget.parentElement.parentElement.parentElement.style = 'display: none;';
    document.querySelector('section.hidden').style = 'display: block';
  });
  firstSectionWrongBtn.addEventListener('click', (e)=>{
    e.currentTarget.parentElement.parentElement.parentElement.style = 'display: none;';
    document.querySelector('section.hidden').style = 'display: block';
  });
  let secondSectionCorrectBtn = document.querySelector('#quizzie > section:nth-child(3) > ul > li.quiz-answer.high-value > div');
  let secondSectionWrongBtn = document.querySelector('#quizzie > section:nth-child(3) > ul > li.quiz-answer.low-value > div');
  secondSectionCorrectBtn.addEventListener('click', (e)=>{
    correctCount++;
    e.currentTarget.parentElement.parentElement.parentElement.style = 'display: none;';
    document.querySelector('section:nth-child(4)').style = 'display: block';
  });
  secondSectionWrongBtn.addEventListener('click', (e)=>{
    e.currentTarget.parentElement.parentElement.parentElement.style = 'display: none;';
    document.querySelector('section:nth-child(4)').style = 'display: block';
  });
  let thirdSectionCorrectBtn = document.querySelector('#quizzie > section:nth-child(4) > ul > li.quiz-answer.low-value > div');
  let thirdSectionWrongBtn = document.querySelector('#quizzie > section:nth-child(4) > ul > li.quiz-answer.high-value > div');
  thirdSectionCorrectBtn.addEventListener('click', (e)=>{
    correctCount++;
    e.currentTarget.parentElement.parentElement.parentElement.style = 'display: none;';
    let ul = document.getElementById('results');
    ul.style = 'display: block';
    ul.firstElementChild.style = 'display: block';
    if(correctCount === 3){
      ul.firstElementChild.firstElementChild.textContent = `You are recognized as top JavaScript fan!`;
    }
    else{
      ul.firstElementChild.firstElementChild.textContent = `You have ${correctCount} right answers`;
    }  
  });
  thirdSectionWrongBtn.addEventListener('click', (e)=>{
    e.currentTarget.parentElement.parentElement.parentElement.style = 'display: none;';
    let ul = document.getElementById('results');
    ul.style = 'display: block';
    ul.firstElementChild.style = 'display: block';
    ul.firstElementChild.firstElementChild.textContent = `You have ${correctCount} right answers`;
  });
}