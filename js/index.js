let games = [];
async function getData(query = "") {
  try {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "5aeb0e51c7msh664dc5e070e64fcp17cdf1jsna6c8d7331a47",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    let api = await fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      options
    );
    let data = await api.json();
    let filterGames = data.filter((game) => {
      return game.genre.toLowerCase().includes(query.toLowerCase());
    });

    games = filterGames;
    display();
  } catch (error) {
    document.getElementById(
      "row"
    ).innerHTML = `<div class="vh-100 d-flex justify-content-center align-items-center"><h1 class="alert alert-danger">No Internet Connition</h1></div>`;
  }
}

function display() {
  var cartona = "";
  for (let i = 0; i < games.length; i++) {
    cartona += `<div id="gameElement-${i}" class="card col-md-3  pt-2 m-3 " style="width: 15rem;" onclick="displayGameDetails(${i})">
    <img src="${games[i].thumbnail}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${games[i].title.split(" ").slice(0, 3).join(" ")}
      </h5>
      <p class="card-text">${games[i].short_description}.</p>
    </div>
    <div class="card-body d-flex">
      <span class="h6">${games[i].genre}</span>
      <span class="ms-auto h6">${games[i].platform}</span>
    </div>
  </div>`;
  }

  document.getElementById("row").innerHTML = cartona;
}

getData();
shooter.addEventListener("click", () => getData("shooter"));
MMORPG.addEventListener("click", () => getData("MMORPG"));
SAILING.addEventListener("click", () => getData("SAILING"));
PERMADEATH.addEventListener("click", () => getData("PERMADEATH"));
SUPERHERO.addEventListener("click", () => getData("SUPERHERO"));
PIXEL.addEventListener("click", () => getData("PIXEL"));
function displayGameDetails(index) {
  sessionStorage.setItem("selectedGame", JSON.stringify(games[index]));

  window.location.href = "gameDetails.html";
}
