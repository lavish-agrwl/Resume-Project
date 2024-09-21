const API = "https://leetcode-stats-api.herokuapp.com/lavish_agrwl";

document.addEventListener("DOMContentLoaded", () => {
  let easy = document.querySelector(".easy");
  let medium = document.querySelector(".medium");
  let hard = document.querySelector(".hard");
  async function getData() {
    let rawData = await fetch(API);
    return rawData.json();
  }
  getData()
    .then((data) => {
      console.log(data);
      let easySolved = changeScale(data.easySolved, data.totalEasy);
      // console.log(easySolved);
      easy.style.background = `conic-gradient(green 0deg ${easySolved}deg, rgb(17, 255, 0) ${easySolved}deg 360deg)`;
      easy.innerText = `Easy - ${data.easySolved}/${data.totalEasy}`;
      let hardSolved = changeScale(data.hardSolved, data.totalHard);
      // console.log(hardSolved);
      hard.style.background = `conic-gradient(red 0deg ${hardSolved}deg, rgb(255, 62, 62) ${hardSolved}deg 360deg)`;
      hard.innerText = `Hard - ${data.hardSolved}/${data.totalHard}`;
      let mediumSolved = changeScale(data.mediumSolved, data.totalMedium);
      // console.log(mediumSolved);
      medium.style.background = `conic-gradient(orange 0deg ${mediumSolved}deg, yellow ${mediumSolved}deg 360deg)`;
      medium.innerText = `Medium - ${data.mediumSolved}/${data.totalMedium}`;
    })
    .catch((err) => {
      console.error(err);
    });
});

function changeScale(OldValue, OldMax) {
  return (OldValue * 360) / OldMax;
}
