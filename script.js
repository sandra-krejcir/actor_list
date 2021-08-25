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
  copy.querySelector(".moName").textContent = `Starrs in: "${actor.movie}"`;
  copy.querySelector(".exit").setAttribute("id", `${actor._id}X`);
  copy.getElementById(actor._id).addEventListener("click", PopUp);
  const popUp = copy.getElementById(`${actor._id}popup`);
  const exClose = copy.getElementById(`${actor._id}X`);
  function PopUp() {
    console.log("function PopUp");
    popUp.classList.remove("disapear");
    exClose.addEventListener("click", popClose);
  }
  function popClose() {
    console.log("function popClose()");
    popUp.classList.add("disapear");
  }
  if (actor.movie == "Pulp Fiction") {
    copy.querySelector("h2").classList.add("purple");
  }
  if (actor.movie == "Goodfellas") {
    copy.querySelector("h2").classList.add("blue");
  }
  if (actor.movie == "Fight Club") {
    copy.querySelector("h2").classList.add("red");
  }
  if (actor.movie == "Inception") {
    copy.querySelector("h2").classList.add("yellow");
  }
  const parent = document.querySelector("ul");
  parent.appendChild(copy);
}
