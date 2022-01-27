//imports the css styles you want

import "./styles.css";

//checks if the navigator"browser" allows for service worker, then registers the service worker

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../sw_cached_site.js")
      .then((reg) => console.log("Service Worker : RegisteredX"))
      .catch((err) => console.log(`Service Worker : Error: ${err}`));
  });
}

// code that configures the card on the page to play and change photo on button presses

const cardContainer = document.querySelector(".container-sm"),
  musicImg = cardContainer.querySelector("#cardCover");

window.addEventListener("load", () => {
  setPicture();
});

function setPicture() {
  musicImg.src = "/assests/images/songOne.jpg";
}

let PlayBtn = document
  .querySelector("#playBtn")
  .addEventListener("click", PlayBtnHandler);

function PlayBtnHandler() {
  console.log("Play button pressed");
  new Audio("/assests/songs/SongOne.mp3").play();
}
