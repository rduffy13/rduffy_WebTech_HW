

//input.addEventListener('keydown', handleKeyDown);

//const elem = document.getElementById('word_find');
//elem.addEventListener('keydown', get_word);

//elem.addEventListener('input', get_word);

const origin = document.getElementById("paragraph").innerHTML;

function get_word(word){
    const words = document.getElementById("paragraph").innerHTML;
    const reg = new RegExp(`\\b${word}\\b`, 'gi');
    const highlightedText = words.replace(reg, `<span style="background-color: yellow">${word}</span>`);
    document.getElementById("paragraph").innerHTML = highlightedText;
    if(!word){
        document.getElementById("paragraph").innerHTML = origin;
    }
   
}