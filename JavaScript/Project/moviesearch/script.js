const mainDiv=document.getElementById('main')
const inputElement=document.getElementById('inp')
const searchButton=document.getElementById('btn')
function fetchData()
{
    fetch(`https://www.omdbapi.com/?s=${inputElement.value}&apikey=e735494c`)
    .then(function(res){console.log(res);return res.json()})
    .then(function(data)
{
    console.log(data.Search);
    inputElement.value='';displayData(data.Search)
})
.catch(function(err){
    console.log(err)
})
}
searchButton.addEventListener('click',fetchData)
function displayData(movies)
{
    mainDiv.textContent=''
    movies.forEach(function(m)
{
  const moviediv=document.createElement('div');
  moviediv.classList.add('movie')
  const movieImg=document.createElement('img');
  movieImg.src=m.poster;
  movieImg.alt=m.Title;
  const movieLink=document.createElement('a');
  movieLink.href=`https://www.imdb.com/title/${m.imdbID}`
  movieLink.target="_blank"
  movieLink.textContent="see the movie"
  const movieTitle=document.createElement('h2')
  movieTitle.textContent=m.Title;
  moviediv.append(movieImg,movieTitle,movieLink);
  mainDiv.appendChild(moviediv)
})
}