const startBtn = document.querySelector("#start");
const clickM = new Audio("click.mp3");
const bgm = new Audio("hacking.mp3");
const msgs = document.querySelectorAll(".msgBox p");

let i = 0;

async function delay() {
  const sec = Math.floor(Math.random() * 7) + 1;
  console.log("delay is working");
  return sec;
}

async function loadMsg() {
  for (let t = 0; t <= 5; t++) {
    const sec = await delay();
    console.log(sec, "sec return working");
    await new Promise((resolve) => {
      setTimeout(() => {
        msgs[i].style.display = "flex";
        console.log("final transition is working");
        i++
        resolve();
      }, sec * 1000);
    });
  }
  bgm.pause
}

startBtn.addEventListener("click", async () => {
  clickM.play();
  setTimeout(() => {
    clickM.pause();
  }, 350);
  document.documentElement.requestFullscreen();
  startBtn.style.display = "none";
  bgm.play();
  await loadMsg();
  console.log("Load msg is working");
});
