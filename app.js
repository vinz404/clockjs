const hour = document.querySelector(".hr");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const date = new Date();
let getClock = {
  hh: (date.getHours() % 12) * 30 + date.getMinutes() * 0.5,
  mm: date.getMinutes() * 6,
  ss: date.getSeconds() * 6,
};

setInterval(() => {
  const date = new Date();
  let getClock = {
    hh: (date.getHours() % 12) * 30 + date.getMinutes() * 0.5,
    mm: date.getMinutes() * 6,
    ss: date.getSeconds() * 6,
  };
  hour.style.transform = `rotateZ(${getClock.hh}deg)`;
  min.style.transform = `rotateZ(${getClock.mm}deg)`;
  sec.style.transform = `rotateZ(${getClock.ss}deg)`;
});
