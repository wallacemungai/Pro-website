/*function displayAnimal(characters){
    let card= document.createElement('li')
    card.className="card col-2 m-4"
    //after creating the list, we add a card to hold the images and information of each cat
    card.innerHTML= `
        <img src="${characters.image}" class="card-img-top" alt="${characters.name}">
        <div class="card-body">
          <h5 class="card-title">"${characters.name}"</h5>
          <p class="card-text">${characters.votes}</p>
          <a href="#" class="btn">"Like!"</a>
        </div>
    `
    //Append the card to the un-ordered list with class name item-list
    document.querySelector("#item-list").append(card)
    let likes=[];
    for(let i=0; i< count.length; i+=1){
        const addLike= addLike[i]
    }
    addLike.addEventListener("click",()=>{
        alert("You liked this animal!!")
    })
}
console.log(card)
//next we use fetch()
function fetchAnimal(){
    fetch('http://localhost:3000/characters')
    .then(function (response) {
    console.log(response.json());
      })
      .then((data)=>{
        data.forEach((characters)=>{
            displayCats(characters)
        })
      })
}*/

const allCharactersDiv = document.querySelector('#all-animals');
const charactersList = document.querySelector('#animal-list');
const characterDetailsDiv = document.querySelector('#animal-details');
const characterName = document.querySelector('#animal-name');
const characterImg = document.querySelector('#animal-img');
const characterVotes = document.querySelector('#animal-votes');
const voteBtn = document.querySelector('#vote-btn');
const backBtn = document.querySelector('#back-btn');
document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(data => {
      data.forEach(characters => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const a = document.createElement('a');
        img.src = characters.image;
        img.alt = characters.name;
        img.width = 250;
        img.height = 200;
        a.textContent = characters.name;
        a.href = '#';
        a.addEventListener('click', () => showAnimalDetails(characters));
        li.appendChild(img);
        li.appendChild(a);
        charactersList.appendChild(li);
      });
    })
});
function showAnimalDetails(characters) {
  allCharactersDiv.classList.add('hidden');
  characterDetailsDiv.classList.remove('hidden');
  characterName.textContent = characters.name;
  characterImg.src = characters.image;
  characterVotes.textContent = `Votes: ${characters.votes}`;
  voteBtn.addEventListener('click', () => {
    characters.votes +1;
    characterVotes.textContent = `Votes: ${characters.votes}`;
});
// Show the back button
backBtn.classList.remove('hidden');
backBtn.addEventListener('click', () => {
// Hide the details of the selected animal
characterDetailsDiv.classList.add('hidden');
// Show the list of all animals
allCharactersDiv.classList.remove('hidden');
});
}