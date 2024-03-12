const allCharactersDiv = document.querySelector('#all-animals');
const charactersList = document.querySelector('#animal-list');
const characterDetailsDiv = document.querySelector('#animal-details');
const characterName = document.querySelector('#animal-name');
const characterImg = document.querySelector('#animal-img');
const characterVotes = document.querySelector('#animal-votes');
const voteBtn = document.querySelector('#vote-btn');
const backBtn = document.querySelector('#back-btn');

let voteCount = 0;

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
        });
});

function showAnimalDetails(characters) {
    allCharactersDiv.classList.add('hidden');
    characterDetailsDiv.classList.remove('hidden');
    characterName.textContent = characters.name;
    characterImg.src = characters.image;
    characterVotes.textContent = `Votes: ${characters.votes + voteCount}`;
    voteBtn.addEventListener('click', () => {
        voteCount++;
        characterVotes.textContent = `Votes: ${characters.votes + voteCount}`;
    });

    // Show the back button
    backBtn.classList.remove('hidden');
    backBtn.addEventListener('click', () => {
    // Hide the details of the selected animal
    characterDetailsDiv.classList.add('hidden');
    // Reset vote count
    voteCount = 0;
    // Show the list of all animals
    allCharactersDiv.classList.remove('hidden');
  });
}

