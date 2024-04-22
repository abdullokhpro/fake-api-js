import { DATA_IMAGES } from "./data.js";

const API_URL = "https://jsonplaceholder.typicode.com/users";
const cardGeneral = document.querySelector(".cards");

async function getData(url) {
  let data = await fetch(url);

  data
    .json()
    .then((response) => mapData(response))
    .catch((response) => console.log(response));
}

getData(API_URL);

function mapData(data) {
  let card = "";
  data.forEach((element) => {
    card += `
        <div class="card">
            <div class="card__img">
                <img src="${DATA_IMAGES[element.id - 1]}" alt="">
            </div>
            <div class="card__content">
              <p class="card__username">${element.username}</p>
              <h3 class="card__title">${element.name}</h3>
              <p class="card__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, officia.
              </p>
              <a class="card__email" href="#">${element.email}</a>
              <p class="card__address">${
                element.address.street +
                element.address.suite +
                element.address.city
              }</p>
              <p class="card__company">${
                element.company.name + element.company.catchPhrase
              }</p>
              <p class="card__phone">${element.phone}</p>
              <a href="${
                element.website
              }" class="card__website" target="_blank">Website</a>
            </div>
          </div>
        `;
  });

  cardGeneral.innerHTML = card;
}
