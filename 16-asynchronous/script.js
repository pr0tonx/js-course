'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className) {
  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

    return response.json();
  });
};

/**
 * First AJAX Call: XMLHttpRequest
 */
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    const html = `<article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('brazil');
getCountryData('portugal');
*/

/**
 * Welcome to Callback Hell
 */
/*
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getCountryAndNeighbour = function (country) {

  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    // Render country
    renderCountry(data);

    // Get neighbour country
    const [neighbour] = data.borders;

    if(!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('portugal');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
 */

/**
 * Promises and the Fetch API
 */
/*
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
// request.send();

const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
console.log(request);
 */

/**
 * Consuming Promises
 */
/*
const getCountryData = function(country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(response => {
    return response.json();
  }).then(data => {
    renderCountry(data[0]);
  });
};

getCountryData('portugal');
 */

/**
 * Chaining Promises
 */
/*
const getCountryData = function(country) {
  // Country 1
  fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(response => {
    return response.json();
  }).then(data => {
    renderCountry(data[0]);
    const neighbour = data[0].borders[0];

    if(!neighbour) return;

    // Country 2
    fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`).then(response => {
      return response.json().then(data => {
        renderCountry(data, ('neighbour'));
      });
    });
  });
};

getCountryData('portugal');
 */

/**
 * Handling Rejected Promises
 */
/*
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

    return response.json();
  });
};
// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(response => {
//     console.log(response);
//
//     if (!response.ok) throw new Error(`Country not found ${response.status}`);
//
//     return response.json();
//   }).then(data => {
//     renderCountry(data[0]);
//     // const neighbour = data[0].borders[0];
//
//     const neighbour = 'dasdsa';
//
//     if (!neighbour) return;
//
//     // Country 2
//     fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`).then(response => {
//
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//
//       return response.json().then(data => {
//         renderCountry(data, ('neighbour'));
//       });
//     });
//   }).catch(err => {
//     console.error(`${err}`);
//     renderError(`Something went wrong: ${err.message}. Try again!`);
//   }).finally(() => {
//     countriesContainer.style.opacity = 1;
//   });
// };

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.eu/rest/v2/name/${country}`, 'Country not found').then(data => {

    renderCountry(data[0]);
    const neighbour = data[0].borders[0];

    if (!neighbour) throw new Error('No neighbour found');

    // Country 2
    getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`, 'Country not found');
    fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`).then(data => {
      renderCountry(data, ('neighbour'));
    });
  }).catch(err => {
    console.error(`${err}`);
    renderError(`Something went wrong: ${err.message}. Try again!`);
  }).finally(() => {
    countriesContainer.style.opacity = 1;
  });
};

btn.addEventListener('click', function () {
  getCountryData('australia');
});
 */

/**
 * The Event Loop in Practice
 */
/*
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 100000000; i++) {
  }
  console.log(res);
});
console.log('Test end');
 */

/**
 * Building a Simple Promise
 */
/*
const lotteryPromise = new Promise(function (resolve, reject) {

  console.log('Lotter draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You won!');
    } else {
      reject(new Error('You lost your money.'));
    }
  }, 2000)
});

lotteryPromise.then((res) => {
  console.log(res);
}).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1).then(() => {
  console.log('1 second passed');
  return wait(1);
}).then(() => {
  console.log('2 seconds passed');
  return wait(1);
}).then(() => {
  console.log('3 seconds passed');
  return wait(1);
}).then(() => {
  console.log('4 seconds passed');
});

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('abc')).catch(x => console.error(x));
 */

/**
 * Promisifying the Geolocation API
 */
/*
// navigator.geolocation.getCurrentPosition(position => console.log(position), err => console.error(err));

console.log('Getting position');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

// from the coding challenge

const whereAmI = function () {
  getPosition().then(pos => {
    const {latitude: lat, longitude: lng} = pos.coords;
    console.log(pos.coords);

    return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=938996479820780770284x26003`);
  })
    .then(res => {
      console.log(res);
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);

      return res.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`)
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found ${res.status}`);

      return res.json();
    }).then(data => {
    renderCountry(data[0]);
  })
    .catch(err => {
      console.error(`${err.message}`);
    })
};

btn.addEventListener('click', whereAmI);
*/

/**
 * Consuming Promises with Async/Await
 */
/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  const pos = await getPosition();
  const {latitude: lat, longitude: lng} = pos.coords;

  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=938996479820780770284x26003`);
  const dataGeo = await resGeo.json();

  const res = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);
  const data = await res.json();

  renderCountry(data[0]);
};

whereAmI();
 */

/**
 * Error Handling With try...catch
 */
/*
// Simple example
//   try {
//     let y = 1;
//     const x = 2;
//     y = 3;
//   } catch(err) {
//     console.log(err.message);
//   }

// Handling errors from last lesson
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const {latitude: lat, longitude: lng} = pos.coords;

    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=938996479820780770284x26003`);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    const res = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();

    renderCountry(data[0]);
  } catch (err) {
    renderError(`${err.message}`);
  }
};

whereAmI();
 */

/**
 * Returning values from Async Functions
 */
/*
// Improving function from last lesson
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const {latitude: lat, longitude: lng} = pos.coords;

    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=938996479820780770284x26003`);
    if (!resGeo.ok) new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    const res = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);
    if (!res.ok) new Error('Problem getting country');

    const data = await res.json();

    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    renderError(`${err.message}`);
    throw err;
  }
};

console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log('3: Finished getting location');
})();
 */

/**
 * Returning values from Async Functions
 */
/*
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.eu/rest/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.eu/rest/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.eu/rest/v2/name/${c3}`);

    const data = await Promise.all([ // returns an array of promises if every of them is fulfilled
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`)
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.log(err);
  }
};

get3Countries('portugal', 'canada', 'tanzania');
 */

/**
 * Returning values from Async Functions
 */

// Promise.race // returns the first completed promise
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/mexico`)
  ]);

  console.log(res[0]);
})();

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, s * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
  timeout(5)
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled // similar to Promise.all but it returns all promises, either fulfilled or rejected, in a new array
Promise.allSettled([
  Promise.resolve('Sucess'),
  Promise.reject('ERROR'),
  Promise.resolve('Another sucess'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any // similar to Promise.race but it returns the first fulfilled promise
Promise.any([
  Promise.reject('ERROR'),
  Promise.resolve('Sucess'),
  Promise.resolve('Another sucess'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
