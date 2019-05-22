const infoURL = 'https://api.thedogapi.com/v1/breeds/search';
const imageURL = 'https://api.thedogapi.com/v1/images/search';
const apiKey = '17bc0b96-3a71-4a51-be3f-8176f5e4da48';
let url;
let breedId;
let dogImage;
let results;
let searchInput = document.querySelector('.search');
const searchForm = document.querySelector('.form');
let displayImage = document.querySelector('.doggo-img');
let nextImg = document.querySelector('div.image');
// nextImg.addEventListener('onscroll', e => {
//     fetchImage();
// });
let doggoName = document.getElementById('dog-name');
let doggoLifespan = document.getElementById('dog-lifespan');
let doggoWeight = document.getElementById('dog-weight');
let doggoHeight = document.getElementById('dog-height');
let doggoBred = document.getElementById('dog-bred-for');
let doggoGroup = document.getElementById('dog-group');
let doggoTemp = document.getElementById('dog-temperament');
let navigation = document.getElementById('nav');
searchForm.addEventListener('submit', fetchResults);
let place = 0;
let wrapper = document.querySelector('div.wrapper');
let nextPrev = document.getElementById('prev-next-wrap');
nextPrev.style.display = 'none';

function fetchResults(e) {
    e.preventDefault();
    url = `${infoURL}?q=${searchInput.value}`;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json)
            displayResults(json);
        })
    wrapper.style.display = 'flex';
}

function displayResults(json) {
    dogList = json.length - 1;
    if (dogList > 0) {
        nextPrev.style.display = 'flex';
        console.log('INDEX', place)
        console.log('CURRENT', json[place])
        console.log('RESPONSES', dogList)
        breedId = json[place].id;
        doggoName.textContent = json[place].name;
        doggoLifespan.textContent = json[place].life_span;
        doggoWeight.textContent = json[place].weight.imperial;
        doggoHeight.textContent = json[place].height.imperial;
        doggoBred.textContent = json[place].bred_for;
        doggoGroup.textContent = json[place].breed_group;
        doggoTemp.textContent = json[place].temperament;

        let nextButton = document.getElementById('next-button').addEventListener('click', e => {
            if (dogList > place) {
                place++
                console.log(json[place]);
                breedId = json[place].id;
                doggoName.textContent = json[place].name;
                doggoLifespan.textContent = json[place].life_span;
                doggoWeight.textContent = json[place].weight.imperial;
                doggoHeight.textContent = json[place].height.imperial;
                doggoBred.textContent = json[place].bred_for;
                doggoGroup.textContent = json[place].breed_group;
                doggoTemp.textContent = json[place].temperament;
                fetchImage(breedId);
            } else {
                nextButton = document.getElementById('next-button').addEventListener('click', e => {
                    e.preventDefault();
                })
            }

            return place;
        })
        let prevButton = document.getElementById('prev-button').addEventListener('click', e => {
            if (place > 0) {
                place--
                console.log(json[place]);
                breedId = json[place].id;
                doggoName.textContent = json[place].name;
                doggoLifespan.textContent = json[place].life_span;
                doggoWeight.textContent = json[place].weight.imperial;
                doggoHeight.textContent = json[place].height.imperial;
                doggoBred.textContent = json[place].bred_for;
                doggoGroup.textContent = json[place].breed_group;
                doggoTemp.textContent = json[place].temperament;
                fetchImage(breedId);
            } else if (place < 2) {
                prevButton = document.getElementById('prev-button').addEventListener('click', e => {
                    e.preventDefault();
                })
            }
            return place;
        })
    } else {
        breedId = json[0].id;
        doggoName.textContent = json[0].name;
        doggoLifespan.textContent = json[0].life_span;
        doggoWeight.textContent = json[0].weight.imperial;
        doggoHeight.textContent = json[0].height.imperial;
        doggoBred.textContent = json[0].bred_for;
        doggoGroup.textContent = json[0].breed_group;
        doggoTemp.textContent = json[0].temperament;
    }
    fetchImage(breedId);
}

function fetchImage(x) {
    newUrl = `${imageURL}?breed_ids=${x}`;
    fetch(newUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            for (vals of json) {
                dogImage = vals.url;
                displayImage.src = dogImage;
            }
        })
}


// function dogCard(data) {
//     let wrapper = document.createElement('div.wrapper');
//     let background = document.createElement('div.background');
//     let image = document.createElement('div.image');
//     let dogImg = document.createElement('div.doggo-img');
//     let nameWrap = document.createElement('div');
//     nameWrap.id = 'name-wrap';
//     let dogName = document.createElement('div');
//     dogName.id = 'dog-name';
//     let infoWrapper = document.createElement('div');
//     infoWrapper.id = 'info-wrapper';
//     let colWrap = document.createElement('div.col-wrapper');
//     let col = document.createElement('div.col');
//     let dataBox = document.createElement('div.data-box');
//     let dogGroup = document.createElement('div.dog-group');
//     let dg = document.createElement('div');
//     dg.id = 'dog-group';
//     dataBox
//     // let nameDiv = document.createElement('div.name-wrap');
//     // nameDiv.appendChild = document.createElement('div.dog-name').textContent = vals.name;
// }
////////////////////////////////////
// vals.url ? vals.url: 'placeholder'
////////////////////////////////////