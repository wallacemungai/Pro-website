//animal script
document.addEventListener('DOMContentLoaded', () => {
    const animalForm = document.getElementById('animalForm');
    const animalTableBody = document.getElementById('animalTableBody');

    animalForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const image = document.getElementById('image').value;
        const votes = document.getElementById('votes').value;

        try {
            const response = await fetch('http://localhost:3000/characters', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, image, votes })
            });

            if (!response.ok) {
                throw new Error('Failed to add animal');
            }

            const newAnimal = await response.json();
            addAnimalToTable(newAnimal);
            animalForm.reset();
        } catch (error) {
            console.error(error);
            alert('Failed to add animal. Please try again.');
        }
    });

    // Fetch animals from the database and populate the table
    fetchAnimals();

    async function fetchAnimals() {
        try {
            const response = await fetch('http://localhost:3000/characters');
            const characters = await response.json();
            characters.forEach(characters => addAnimalToTable(characters));
        } catch (error) {
            console.error(error);
            alert('Failed to fetch animals from the database.');
        }
    }

    function addAnimalToTable(characters) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${characters.name}</th>
            <td>${characters.name}</td>
            <td><img src="${characters.image}" alt="${characters.name}" width="100"></td>
            <td> ${characters.votes}</td>
        `;
        animalTableBody.appendChild(row);
    }
});
