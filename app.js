const url = 'https://opentdb.com/api.php?amount=10';

//fetch request
async function getTrivia () {
  let response = await fetch(url);
  let data = await response.json() ;
  return data;
}

//callback to render data
getTrivia().then((data) => {
  const results = data.results[0];
  console.log(results);
  document.getElementById('question').innerHTML = results.question;
  document.getElementById('category').innerHTML = results.category;
  document.getElementById('answer').innerHTML = results.correct_answer;
  document.getElementById('answer').style.visibility = "hidden";
});

//make answer visible
showAnswer = () => {
  let unhide = document.getElementById('answer');
  if (unhide.style.visibility === 'hidden') {
    unhide.style.visibility = 'visible';
  }};
