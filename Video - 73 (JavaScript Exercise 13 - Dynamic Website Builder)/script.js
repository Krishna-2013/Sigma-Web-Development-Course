console.log("Hello World!");

// Inputs
const title = document.getElementById("title");
const tags = document.getElementById("tags");
const channel_name = document.getElementById("cName");
const views = document.getElementById("videoViews");
const upload_date = document.getElementById("uploadDate");
const thumbnail = document.getElementById("thumbnail");
const duration = document.getElementById("duration");

// Submit Button
const button = document.getElementById("button");

// Error
const errorBox = document.querySelector(".errorBox");
const errorMessage = document.querySelector("#errorMessage");
const cross = document.querySelector("#cross");

// Main Card
const video_box = document.querySelector(".videoBox");
const main_title = document.querySelector(".main_title");
const main_tags = document.querySelector(".main_tags");
const main_views = document.querySelector(".main_views");
const main_date = document.querySelector(".main_date");
const main_name = document.querySelector(".main_name");
const img_box = document.querySelector(".left");
const duration_box = document.querySelector(".duration");

const container = document.querySelector(".container");
cross.addEventListener("click", (e) => {
  if (errorBox) {
    errorBox.classList.remove("show");
  }
});

function error(err) {
  errorMessage.textContent = err;
  errorBox.classList.add("show");

  setTimeout(() => {
    if (errorBox) {
      errorBox.classList.remove("show");
    }
  }, 5000);
  return;
}

button.addEventListener("click", (e) => {
  e.preventDefault();

  const form = document.querySelector(".form");

  if (!form.checkValidity()) {
    form.reportValidity(); // Shows the browser's validation messages
    return;
  }

  if (!tags.value.startsWith("#")) {
    tags.value = "#" + tags.value;
  }

  const viewCount = views.value.trim();

  if (!/^\d+(\.\d+)?([kKmMbB])?$/.test(viewCount)) {
    error("⚠️ Enter a valid views.");
    return;
  }

  if (!/[KMBkmb]$/.test(viewCount)) {
    let newViews = Number(viewCount);
    if (newViews < 1000) {
      views.value = newViews;
    } else if (newViews < 1000000) {
      views.value = (newViews / 1000).toFixed(1) + "K";
    } else if (newViews < 1000000000) {
      views.value = (newViews / 1000000).toFixed(1) + "M";
    } else {
      views.value = (newViews / 1000000000).toFixed(1) + "B";
    }
  }

  const time = duration.value.trim();

  if (/^\d{1,2}:\d{2}(:\d{2})?$/.test(time)) {
    duration.value = time;
  } else if (/^\d+$/.test(time)) {
    const totalSec = Number(time);

    const hours = Math.floor(totalSec / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = String(totalSec % 60).padStart(2, "0");

    if (hours > 0) {
      duration.value = `${hours}:${String(minutes).padStart(2, "0")}:${seconds}`;
    } else {
      duration.value = `${minutes}:${seconds}`;
    }
  } else {
    error("⚠️ Enter a valid duration (e.g. 6:10 or 620).");
  }

  console.log(title.value);
  console.log(tags.value);
  console.log(channel_name.value);
  console.log(views.value);
  console.log(upload_date.value);
  console.log(duration.value);

  // Main Card
  main_title.innerText = title.value;
  main_tags.innerText = tags.value;
  main_views.innerText = views.value + " views";
  if (upload_date.value) {
    const [year, month, day] = upload_date.value.split("-");
    main_date.innerText = `${month}-${day}-${year}`;
    console.log(`${day}-${month}-${year}`);
  }
  main_name.innerText = `By ${channel_name.value}`;
  console.log(thumbnail.value);

  container.style.height = "90vh";
  video_box.style.opacity = "1";
  duration_box.innerText = duration.value;
});

thumbnail.addEventListener("change", (e) => {
  const file = thumbnail.files[0];

  if (file) {
    const imageURL = URL.createObjectURL(file);
    img_box.style.backgroundImage = `url(${imageURL})`;
  } else {
    error("⚠️ Something went wrong!");
  }
});