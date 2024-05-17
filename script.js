const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions');
const suggestionsList = suggestions.querySelector('ul');

const fruit = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Date', 'Tomato', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
    let results = [];
    if (str.length > 0) {
        results = fruit.filter(item => item.toLowerCase().includes(str.toLowerCase()));
    }
    return results;
}

function searchHandler(e) {
    const inputVal = e.target.value;
    const results = search(inputVal);
    showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
    suggestionsList.innerHTML = '';
    if (results.length > 0) {
        results.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            li.addEventListener('click', useSuggestion);
            suggestionsList.appendChild(li);
        });
        suggestions.classList.add('has-suggestions');
    } else {
        suggestions.classList.remove('has-suggestions');
    }
}

function useSuggestion(e) {
    input.value = e.target.textContent;
    suggestionsList.innerHTML = '';
    suggestions.classList.remove('has-suggestions');
}

input.addEventListener('keyup', searchHandler);
