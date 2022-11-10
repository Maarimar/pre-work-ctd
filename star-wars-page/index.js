const swapiURL = 'https://swapi.dev/api/';
const personOne = 'https://swapi.dev/api/people/1/';
const personTwo = 'https://swapi.dev/api/people/3/';
const personThree = 'https://swapi.dev/api/people/5/';

const allPeople = [personOne, personTwo, personThree]

const filmOne = 'https://swapi.dev/api/films/1/';
const filmTwo = 'https://swapi.dev/api/films/2/';
const filmThree = 'https://swapi.dev/api/films/3/';

const allFilms = [filmOne, filmTwo, filmThree]



async function getData(url) {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('Ooopps did not fetch that')
        }

        return response.json();
    } catch (e) {
        //paste 404 doc
    }

}

async function eachPerson() {
    let all = '';
    allPeople.forEach((person) => {

        let personData;
        getData(person).then(personData => {
            console.log(personData)
            if (personData) {
                let peeep = `
                <div>
                    <h4>Name: ${personData.name}<h4>

                    <h4>Skin Color: ${personData.skin_color}</h4>

                    <h4>Gender: ${personData.gender}</h4>

                    <h4>Hair Color: ${personData.hair_color}</h4>
                    
                    <button type="button" class="btn btn-outline-dark" onclick="window.location.href='films.html';">Films</button>
                </div>
                `;
                all += peeep;
            }
            let final = document.getElementById("person");
            final.innerHTML = all;

        })


    });



}

eachPerson();




async function eachFilm() {
    let everyCommonFilm = '';
    allFilms.forEach((film) => {

        let filmData;
        getData(film).then(filmData => {
            console.log(filmData)
            if (filmData) {
                let theFilms = `
                <div class= "Eachcard">
                    <h4>Title: ${filmData.title}<h4>

                    <h4>Opening Line: ${filmData.opening_crawl}</h4>

                    <h4>Producer: ${filmData.producer}</h4>

                    <h4>Director: ${filmData.director}</h4>

                </div>
                `;
                everyCommonFilm += theFilms;
            }
            let displayCommonFilms = document.getElementById("film");
            displayCommonFilms.innerHTML = everyCommonFilm;

        })


    });



}

eachFilm();









