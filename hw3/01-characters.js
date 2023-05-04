// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';



const characterList = document.getElementById('character-list');

		fetch(url)
			.then(response => response.json())
			.then(characters => {
				characters.forEach(character => {
					const characterCard = document.createElement('div');
					characterCard.className = 'character-card';

					const characterImage = document.createElement('img');
					characterImage.className = 'character-image';
					characterImage.src = character.imageUrl;

					const characterInfo = document.createElement('div');

					const characterName = document.createElement('p');
					characterName.textContent = character.fullName;

					const characterTitle = document.createElement('p');
					characterTitle.textContent = character.title;

					characterInfo.appendChild(characterName);
					characterInfo.appendChild(characterTitle);

					characterCard.appendChild(characterImage);
					characterCard.appendChild(characterInfo);

					characterList.appendChild(characterCard);
				});
			})
			.catch(error => console.log(error));
