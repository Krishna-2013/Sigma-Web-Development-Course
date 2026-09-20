const main = (pass) => {
  lengthCheck(pass);
};

const lengthCheck = (pass) => {
  if (pass.length >= 8) {
    capCheck(pass);
  } else {
    console.log("Your password is less than 8 characters!");
  }
};

const capCheck = (pass) => {
  let cap = false;
  let arr = [];

  for (let i = 0; i < pass.length; i++) {
    arr.push(pass[i]);
  }

  arr.forEach((el) => {
    let code = el.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      cap = true;
    }
  });

  if (cap) {
    smCheck(pass);
  } else {
    console.log("Your password does not contain a uppercase letter!");
  }
};

const smCheck = (pass) => {
  let sm = false;
  let arr = [];

  for (let i = 0; i < pass.length; i++) {
    arr.push(pass[i]);
  }

  arr.forEach((el) => {
    let code = el.charCodeAt(0);
    if (code >= 97 && code <= 122) {
      sm = true;
    }
  });

  if (sm) {
    numCheck(pass);
  } else {
    console.log("Your password does not contain a lowercase letter!");
  }
};

const numCheck = (pass) => {
  let num = false;
  let arr = [];

  for (let i = 0; i < pass.length; i++) {
    arr.push(pass[i]);
  }

  arr.forEach((el) => {
    let code = el.charCodeAt(0);
    if (code >= 48 && code <= 57) {
      num = true;
    }
  });

  if (num) {
    console.log("Your password is valid.");
  } else {
    console.log("Your password does not contain a number!");
  }
};
main("KRWEdEWRE23432");
