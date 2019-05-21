const infoURL = 'https://api.thedogapi.com/v1/breeds/search';
const imageURL = 'https://api.thedogapi.com/v1/images/search';
const apiKey = '17bc0b96-3a71-4a51-be3f-8176f5e4da48';
let url;
let breedId;
let dogImage;
let results;
let searchInput = document.querySelector('.search')
const searchForm = document.querySelector('.form');
let displayImage = document.querySelector('.doggo-img');
let doggoName = document.getElementById('dog-name');
let doggoLifespan = document.getElementById('dog-lifespan');
let doggoWeight = document.getElementById('dog-weight');
let doggoHeight = document.getElementById('dog-height');
let doggoBred = document.getElementById('dog-bred-for');
let doggoGroup = document.getElementById('dog-group');
let doggoTemp = document.getElementById('dog-temperament');
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('previous');
let navigation = document.getElementById('nav');
searchForm.addEventListener('submit', fetchResults);
// nextButton.addEventListener('click', nextResult);
// prevButton.addEventListener('click', prevResult);
// let pageNum = 0;
nav.style.display = 'none';

function fetchResults(e) {
    e.preventDefault();
    url = `${infoURL}?q=${searchInput.value}`;
    console.log(url)
    // ?api_key=${apiKey}
    // &page=${pageNum}
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            displayResults(json);
        })

}

function displayResults(json) {
    results = json.length;
    for (vals of json) {
        breedId = vals.id;
        doggoName.textContent = vals.name;
        doggoLifespan.textContent = vals.life_span;
        doggoWeight.textContent = vals.weight.imperial;
        doggoHeight.textContent = vals.height.imperial;
        doggoBred.textContent = vals.bred_for;
        doggoGroup.textContent = vals.breed_group;
        doggoTemp.textContent = vals.temperament;
    }
    // if (results >= 2) {
    //     nav.style.display = 'block';
    // } else {
    //     nav.style.display = 'none';
    // }
    fetchImage(breedId);
}

function fetchImage(x) {
    newUrl = `${imageURL}?breed_ids=${x}`;
    fetch(newUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            for (vals of json) {
                console.log(vals);
                dogImage = vals.url;
                displayImage.src = dogImage;
            }
        })
}

// function nextResult(e) {
//     pageNum++
//     fetchResults(e);
// }

// function prevResult(e) {
//     pageNum--
//     fetchResults(e);
// }