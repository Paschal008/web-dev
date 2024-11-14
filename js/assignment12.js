document.querySelector('#search-word').addEventListener('submit', function(event) {
    
    event.preventDefault();

    const word = document.querySelector('#Inputword').value; 
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Word not found');
            }
            return  response.json();
        })
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            document.querySelector('#result').innerHTML = `<p>${error.message}</p>`;
        });
});

function displayResults(data) {
    const result = document.querySelector('#result');
    result.innerHTML = ''; 

    data.forEach(entry => {
        const word = entry.word;
        const phonetics = entry.phonetics.map(p => p.text).join(', ');
        result.innerHTML += `<h2>${word}</h2><p>Transcription: ${phonetics}</p>`;

        entry.meanings.forEach(meaning => {
            const partOfSpeech = meaning.partOfSpeech;
            const definitions = meaning.definitions.map(def => `<li>${def.definition}</li>`).join('');
            result.innerHTML += `<h3>${partOfSpeech}</h3><ul>${definitions}</ul>`;
        });
    });
}

