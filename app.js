fetch("data.json")
  .then((response) => response.json())

  .then((data) => {
    dataJson(data);
  })
  .catch((error) => alert("Erreur : " + error));

/* recuperation des differents button pour afficher les bonnes 
  les bonnes information du data */
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const buttons = document.querySelectorAll("button");
// console.log(this.buttons.style.color='red');





/* récuperation des different element html pour afficher les bonnes données du data.json */
const cards = document.querySelectorAll(".card");
const titls = document.querySelectorAll(".title");
const currents = document.querySelectorAll(".current");
const previous = document.querySelectorAll(".previous");

const work = document.getElementById("work");
work.style.backgroundImage = "url('images/icon-work.svg')";

const play = document.getElementById("play");
play.style.backgroundImage = "url('images/icon-play.svg')";

const study = document.getElementById("study");
study.style.backgroundImage = "url('images/icon-study.svg')";

const exercise = document.getElementById("exercise");
exercise.style.backgroundImage = "url('images/icon-exercise.svg')";

const social = document.getElementById("social");
social.style.backgroundImage = "url('images/icon-social.svg')";

const selfCare = document.getElementById("self-care");
selfCare.style.backgroundImage = "url('images/icon-self-care.svg')";

function dataJson(data) {
  for (let i = 0; i < data.length; i++) {
    // récuperation des données lié au fichier data.json
    const dataTitle = data[i].title;
    const dataCurrentDailly = data[i].timeframes.daily.current;
    const dataPreviousDailly = data[i].timeframes.daily.previous;
    const dataCurrentWeekly = data[i].timeframes.weekly.current;
    const dataPreviousWeekly = data[i].timeframes.weekly.previous;
    const dataCurrentMonthly = data[i].timeframes.monthly.current;
    const dataPreviousMonthly = data[i].timeframes.monthly.previous;

    //

    titls[i].innerHTML = dataTitle;
    previous[i].innerHTML = "Last Week - " + " " + "hrs";

    //

    daily.addEventListener("click", function () {
      currents[i].innerHTML = dataCurrentDailly + "hrs";
      previous[i].innerHTML = "Last Week - " + dataPreviousDailly + "hrs";
    });

    weekly.addEventListener("click", function () {
      currents[i].innerHTML = dataCurrentWeekly + "hrs";
      previous[i].innerHTML = "Last Week - " + dataPreviousWeekly + "hrs";
    });

    monthly.addEventListener("click", function () {
      currents[i].innerHTML = dataCurrentMonthly + "hrs";
      previous[i].innerHTML = "Last Week - " + dataPreviousMonthly + "hrs";
    });
  }
}

