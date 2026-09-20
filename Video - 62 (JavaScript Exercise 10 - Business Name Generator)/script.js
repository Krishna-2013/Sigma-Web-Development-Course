let adj;
let shop_name;
let another_word;

let resultAdj;
let resultB;
let resultC;

function select_adj() {
  let random = Math.floor(Math.random() * 3) + 1;
  let a = "Crazy";
  let b = "Amazing";
  let c = "Fire";
  if (random === 1) {
    adj = a;
  } else if (random === 2) {
    adj = b;
  } else if (random === 3) {
    adj = c;
  } else {
    adj = "";
  }
}

function select_shop_name() {
  let random = Math.floor(Math.random() * 3) + 1;
  let a = "Engine";
  let b = "Foods";
  let c = "Garments";
  if (random === 1) {
    shop_name = a;
  } else if (random === 2) {
    shop_name = b;
  } else if (random === 3) {
    shop_name = c;
  } else {
    shop_name = "";
  }
}

function select_another_word() {
  let random = Math.floor(Math.random() * 3) + 1;
  let a = "Bros";
  let b = "Limited";
  let c = "Hub";
  if (random === 1) {
    another_word = a;
  } else if (random === 2) {
    another_word = b;
  } else if (random === 3) {
    another_word = c;
  } else {
    another_word = "";
  }
}

select_adj();
select_shop_name();
select_another_word();

function result() {
  resultAdj = adj;
  result_shop_name = shop_name;
  result_another_word = another_word;
  console.log(`Your new business name is: ${resultAdj} ${result_shop_name} ${result_another_word}`);
}

result();