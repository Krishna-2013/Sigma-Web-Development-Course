let songs;
let currentSong = new Audio();
let currFolder;
let proggress = null;

// Play Btn
const cardCont = document.querySelector(".cardContainer");
const card = document.querySelectorAll(".card");

const songBtn = document.querySelector(".songBtns");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

// List of songs

async function getSongs(folder) {
  currFolder = folder;
  localStorage.setItem("folder", currFolder);

  let a = await fetch(`http://127.0.0.1:3000/${currFolder}/`);
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  songs = [];

  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split(`${folder.replace("songs/", "")}%5C`)[1]);
    }
  }
  return songs;
}

async function loadSongs(songs) {
  let songUL = document
    .querySelector(".songList")
    .getElementsByTagName("ul")[0];
  songUL.innerHTML = "";
  for (const song of songs) {
    songUL.innerHTML =
      songUL.innerHTML +
      `<li> <img class="invert-w" src="img/music.svg" alt="" />
                <div class="info">
                  <div>${song.replaceAll("%20", " ")}</div>
                  <div class="font-norc">Author - Krishna</div>
                </div>
                <div class="playNow">
                  <img class="invert-w" src="img/play.svg" alt="">
                </div></li>`;
  }

  // Attach add event listener to all songs
  Array.from(
    document.querySelector(".songList").getElementsByTagName("li"),
  ).forEach((e) => {
    e.addEventListener("click", (song) => {
      playMusic(e.querySelector(".info").firstElementChild.innerText);
    });
  });
}

function playMusic(track) {
  document.querySelector(".songInfo").innerText = track;

  currentSong.src = `${currFolder}/` + track;
  currentSong.play();

  play.src = "img/pauseBtn.svg";
  play.classList.add("ext");
  songBtn.style.gap = "28px";

  proggress = setInterval(() => {
    document.querySelector(".line").style.width =
      `${(currentSong.currentTime / currentSong.duration) * 100}%`;
  }, 1000);

  localStorage.setItem("lastSong", track);
}

function loadhis(track) {
  document.querySelector(".songInfo").innerText = track;
  currentSong.src = `${currFolder}/` + track;
}

function loadPrevFolder() {
  currFolder = localStorage.getItem("folder");
  document.querySelector(".heading p").innerText =
    `Your Library - ${currFolder.split("/").pop().toUpperCase()}`;
  return currFolder;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

async function displayAlbums() {
  let a = await fetch(`http://127.0.0.1:3000/songs/`);
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let anchors = div.getElementsByTagName("a");

  Array.from(anchors).forEach(async (e) => {
    if (e.href.includes("songs")) {
      let folder = e.href.replace("%5Csongs%5C", "").split("/").slice(-2)[0];

      // Get the metadate
      let a = await fetch(`http://127.0.0.1:3000/songs/${folder}/info.json`);
      let response = await a.json();
      console.log(response);
      cardCont.innerHTML =
        cardCont.innerHTML +
        `<div data-folder="${response.folder}" class="card hover rounded">
          <div class="play cursor">
              <img src="img/play.svg" alt="" />
          </div>
          <img src="/songs/${folder}/cover.jpg" alt=""/>
          <div class="div">
            <h2>${response.title}</h2>
            <p class="font-norc">${response.author}</p>
          </div>
        </div>`;
    }
  });

  cardCont.addEventListener("click", async (e) => {
    const card = e.target.closest(".card");

    if (!card) return;

    const folder = card.dataset.folder;

    document.querySelector(".heading p").innerText =
      `Your Library - ${folder.toUpperCase()}`;

    songs = await getSongs(`songs/${folder}`);
    loadSongs(songs);
  });


  cardCont.addEventListener("mouseover", (e) => {

    const card = e.target.closest(".card");
    const playBtn = card.querySelector(".play");
    
    if (window.innerWidth > 1400) {
      card.addEventListener("mouseover", () => {
        playBtn.style.opacity = "1";
        playBtn.style.bottom = "120px";
      });
      
      card.addEventListener("mouseout", () => {
        playBtn.style.bottom = "105px";
        playBtn.style.opacity = "0";
      });
    } else if (window.innerWidth <= 1400) {
      card.addEventListener("mouseover", () => {
        playBtn.style.opacity = "1";
        playBtn.style.bottom = "20px";
        // playBtn.style.right = "35px";
      });
      
      card.addEventListener("mouseout", () => {
        playBtn.style.bottom = "-10px";
        playBtn.style.opacity = "0";
      });
    }
  })
  };
  
  async function main() {
    // Display all the albums
    displayAlbums();

  let lastSong = localStorage.getItem("lastSong");
  if (lastSong) {
    document.querySelector(".songInfo").innerText = lastSong;
  }

  // Show all the songs in the playlist
  loadSongs(await getSongs(loadPrevFolder()));

  // Attach event listener to prev,play,next button
  const play = document.querySelector("#play");

  if (!currentSong.src && lastSong) {
    loadhis(lastSong);
  }

  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "img/pauseBtn.svg";
      play.classList.add("ext");
      songBtn.style.gap = "28px";
    } else {
      currentSong.pause();
      play.src = "img/playBtn.png";
      play.classList.remove("ext");
      songBtn.style.gap = "32px";

      if (proggress) {
        clearInterval(proggress);
      }
    }
  });

  // Listen for time updarte event
  currentSong.addEventListener("timeupdate", () => {
    // console.log(formatTime(currentSong.currentTime));
    document.querySelector(".songTime").innerText =
      `${formatTime(currentSong.currentTime)} / ${formatTime(currentSong.duration)}`;
  });

  // add event listener to seekbar
  const seekBar = document.querySelector(".seekBar");
  const line = document.querySelector(".line");

  seekBar.addEventListener("click", (e) => {
    const rect = seekBar.getBoundingClientRect();

    const percent = ((e.clientX - rect.left) / rect.width) * 100;

    line.style.width = `${percent}%`;

    if (currentSong.duration) {
      currentSong.currentTime = (currentSong.duration * percent) / 100;
    }
  });

  // Add a event listner for hamburger
  if (window.innerWidth > 1400) {
    document.querySelector(".hamburger").addEventListener("click", () => {
      if (left.style.left === "-150%") {
        left.style.left = 0;
        left.style.position = "relative";
        right.style.width = "75vw";
        left.style.width = "25vw";
        document.querySelector(".songBtns").style.position = "fixed";
        right.style.margin = "22px 5px";
      } else {
        left.style.position = "absolute";
        left.style.left = "-150%";
        right.style.width = "100%";
        document.querySelector(".songBtns").style.position = "static";
        right.style.margin = "0 25px";
        document.querySelector(".playlists").style.borderRadius = "15px";
      }
    });
  } else if (window.innerWidth <= 1400) {
    // Add a event listner for hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
      document.querySelector(".left").style.left = 0;
    });

    // Add a event listner for close btn
    document.querySelector(".close").addEventListener("click", () => {
      document.querySelector(".left").style.left = "-150%";
    });
  }

  // Add a event listner to prev and next btn
  document.querySelector("#prev").addEventListener("click", () => {
    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
    if (index - 1 >= 0) {
      playMusic(songs[index - 1].replaceAll("%20", " "));
    } else {
      playMusic(songs[songs.length - 1].replaceAll("%20", " "));
    }
  });

  document.querySelector("#next").addEventListener("click", () => {
    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
    if (index + 1 < songs.length) {
      playMusic(songs[index + 1].replaceAll("%20", " "));
    } else {
      playMusic(songs[0].replaceAll("%20", " "));
    }
  });

  // Add an event listener to volume
  document
    .querySelector(".range")
    .getElementsByTagName("input")[0]
    .addEventListener("input", (e) => {
      currentSong.volume = e.target.value / 100;
    });
}

main();
