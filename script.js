const URL = "https://kea21s-6eb0.restdb.io/rest/actorlist";

load();

function load() {
  fetch(URL, {
    method: "GET",
    headers: {
      "x-apikey": "606d606af55350043100752e",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      listProducts(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

function listProducts(data) {
  data.forEach(showProduct);
}

function showProduct(actor) {
  console.log(actor);
  const template = document.querySelector(".theList").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".acName").textContent = actor.fullname;
  copy.querySelector(".details").setAttribute("id", "1");
  copy.querySelector(".moName").textContent = actor.movie;
  copy.querySelector(".exit").setAttribute("id", "exit1");
  const parent = document.querySelector("ul");
  parent.appendChild(copy);
}
