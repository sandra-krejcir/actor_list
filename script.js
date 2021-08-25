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
  const theActor = copy.querySelector(".acName");
  theActor.textContent = actor.fullname;
  theActor.setAttribute("id", actor._id);
  copy.querySelector(".details").setAttribute("id", `${actor._id}popup`);
  copy.querySelector(".moName").textContent = `Starrs in: ${actor.movie}`;
  copy.querySelector(".exit").setAttribute("id", `${actor._id}X`);
  const parent = document.querySelector("ul");
  parent.appendChild(copy);
}
