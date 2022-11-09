const swapiURL = 'https://swapi.dev/api/';
const planetOne = 'https://swapi.dev/api/planets/1/';
const planetTwo = 'https://swapi.dev/api/planets/8/';
const planetThree = 'https://swapi.dev/api/planets/2/';

const allPlanets = [planetOne, planetTwo, planetThree]

async function getData(url) {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('Ooopps did not fetch that')
        }
        return response.json;
    } catch (e) {
        console.log(e)
    }

}


async function getAllPlanets() {

    let eachPlanet = allPlanets.forEach((planet) => {
        return getData(planet);

    });
    return eachPlanet;

}

getAllPlanets();