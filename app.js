
fetch("data.json")
  .then((response) => response.json())

  .then((data) => {
    dataJson(data);
  })
  .catch((error) => alert("Erreur : " + error));

function dataJson(data) {
  for (let i = 0; i < data.length; i++) {
    var titre = data[0].title;
    // console.log(titre);

    var title = document.getElementById("title");
    title.innerHTML = titre;
    console.log(data[i]);
  }
}
