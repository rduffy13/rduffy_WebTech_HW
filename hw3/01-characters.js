// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

const c_list = document.getElementById('charList');
        fetch(url)
            .then(response => response.json())
            .then(characters => {
                characters.forEach(character => {
                    const singleChar = document.createElement('div');
                    singleChar.className = 'single_char';
                    const char_pic = document.createElement('img');
                    char_pic.className = 'charPic';
                    char_pic.src = character.imageUrl;
                    const char_stats = document.createElement('div');
                    const char_name = document.createElement('p');
                    char_name.textContent = character.fullName;
                    const char_title = document.createElement('p');
                    char_title.textContent = character.title;
                    char_stats.appendChild(char_name);
                    char_stats.appendChild(char_title);
                    singleChar.appendChild(char_pic);
                    singleChar.appendChild(char_stats);
                    c_list.appendChild(singleChar);
                });
            })
            .catch(error => console.log(error));
