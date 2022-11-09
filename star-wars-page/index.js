const swapiURL = 'https://swapi.dev/api/';
const personOne = 'https://swapi.dev/api/people/1/';
const personTwo = 'https://swapi.dev/api/people/3/';
const personThree = 'https://swapi.dev/api/people/5/';

const allPeople = [personOne, personTwo, personThree]

const planetOne = 'https://swapi.dev/api/planets/1/';
const planetTwo = 'https://swapi.dev/api/planets/8/';
const planetThree = 'https://swapi.dev/api/planets/2/';

const allPlanets = [planetOne, planetTwo, planetThree]

const filmOne = 'https://swapi.dev/api/planets/1/';
const filmTwo = 'https://swapi.dev/api/planets/8/';
const filmThree = 'https://swapi.dev/api/planets/2/';

const allFilms = [filmOne, filmTwo, filmThree]



async function getData(url) {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('Ooopps did not fetch that')
        }

        return response.json();
    } catch (e) {
        console.log(e)
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
                <div class= "card">
                    <h4>Name: ${personData.name}<h4>

                    <h4>Skin Color: ${personData.skin_color}</h4>

                    <h4>Gender: ${personData.gender}</h4>

                    <h4>Hair Color: ${personData.hair_color}</h4>

                    <h4> <a href"${personData.homeworld}"></a>Homeworld: </h4>

                    <h4><a href='${personData.films}'></a>Films :</h4>
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


// const eachPlanet = allPlanets.forEach(async (planet) => {
//     return getData(planet);

// });

// const eachFilm = allFilms.forEach(async (film) => {
//     return getData(film);

// });









