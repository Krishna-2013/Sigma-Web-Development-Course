const additem = async (items) => {
  await randomDelay();
  let div = document.createElement("div");
  div.textContent = items;
  document.body.append(div);
};

const randomDelay = () => {
  return new Promise((resolve, reject) => {
    timeout = 1 + 6 * Math.random();
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};

let text = [
  "Initialized Hacking now reading your data",
  "Reading your Files",
  "Password files Detected",
  "Sending all passwords and personal files to server",
  "Cleaning up",
];

let st = setInterval(() => {
  let last = document.body.lastElementChild;
  if (last.textContent.endsWith("...")) {
    last.textContent = last.textContent.replace("...", "");
  } else {
    last.textContent = last.textContent + ".";
  }
}, 500);

async function main() {
  for (const items of text) {
    await additem(items);
  }
  await clearInterval(st);
}

main();
