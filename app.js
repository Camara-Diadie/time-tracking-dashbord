
// Décommenter pour voir le résultat
//On crée un objet XMLHttpRequest
let dataTime = new XMLHttpRequest();

//On initialise notre requête avec open()
dataTime.open("GET", "data.json");

//On veut une réponse au format JSON
dataTime.responseType = "json";

//On envoie la requête
dataTime.send();
console.log(dataTime);
