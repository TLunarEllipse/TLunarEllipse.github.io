//system:

var work = 1;
var system = true;
var console1 = document.getElementById("console1");
var console2 = document.getElementById("console2");
var console3 = document.getElementById("console3");
var fulldate;
var erro = "No Errors Found";
var code1;
var code2;

//specifyions:

var FUNCTIONS = ["print", "var", "or", "if", "else", "loop", "and", "not"];

var CHARACTERS = [
  "+",
  "-",
  "*",
  "/",
  "^",
  "(",
  ")",
  "[",
  "]",
  ",",
  ";",
  "=",
  "<",
  ">",
  "'",
  '"'
];
var CH_CHARACTERS = [
  "CH_PLU",
  "CH_MIN",
  "CH_MUL",
  "CH_DIV",
  "CH_POW",
  "CH_LPA",
  "CH_RPA",
  "CH_LSQ",
  "CH_RSQ",
  "CH_COM",
  "CH_SEM",
  "CH_EQU",
  "CH_LES",
  "CH_GRE",
  "CH_SAS",
  "CH_ASP"
];

var INT_NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var NU_INT_NUMBERS = [
  "NU_INT_ZERO∆",
  "NU_INT_ONE∆",
  "NU_INT_TWO∆",
  "NU_INT_THREE∆",
  "NU_INT_FOUR∆",
  "NU_INT_FIVE∆",
  "NU_INT_SIX∆",
  "NU_INT_SEVEN∆",
  "NU_INT_EIGHT∆",
  "NU_INT_NINE∆"
];

//run code:

if (system) {
  setTimeout(run, 5);
}

function run() {
  //date system:
  stats();
  lexer();

  //define whether the code is right or wrong:

  //right:
  if ((work = 1)) {
    document.getElementById("console1").innerHTML =
      "Program statistics:" +
      " TLunarElipse Lang; Version: 1.0.0; " +
      fulldate +
      "; " +
      "(" +
      erro +
      ");";
    document.getElementById("console2").innerHTML = "Console Output:" + "";
    execute();
  }
  //wrong:
  if ((work = 0)) {
    document.getElementById("console1").innerHTML = "Program statistics:" + "";
    document.getElementById("console2").innerHTML = "Console Output:" + "";
    alert("[i]error");
  }
}

//execute code:
function execute() {}

//lexical analysis:
function lexer() {
  code1 = document.getElementById("console3").value;

  ///start commas system 1:
  while (code1.includes(" ")) {
    code1 = code1.replace(" ", "√•√");
  }
  ///end commas system 1

  //CHARACTERS:

  while (code1.includes("+")) {
    code1 = code1.replace("+", "CH_PLU");
  }

  while (code1.includes("-")) {
    code1 = code1.replace("-", "CH_MIN");
  }

  while (code1.includes("*")) {
    code1 = code1.replace("*", "CH_MUL");
  }

  while (code1.includes("/")) {
    code1 = code1.replace("/", "CH_DIV");
  }

  while (code1.includes("^")) {
    code1 = code1.replace("^", "CH_POW");
  }

  while (code1.includes("(")) {
    code1 = code1.replace("(", "CH_LPA");
  }

  while (code1.includes(")")) {
    code1 = code1.replace(")", "CH_RPA");
  }

  while (code1.includes("[")) {
    code1 = code1.replace("[", "CH_LSQ");
  }

  while (code1.includes("]")) {
    code1 = code1.replace("]", "CH_RSQ");
  }

  while (code1.includes(",")) {
    code1 = code1.replace(",", "CH_COM");
  }

  while (code1.includes(";")) {
    code1 = code1.replace(";", "CH_SEM");
  }

  while (code1.includes("=")) {
    code1 = code1.replace("=", "CH_EQU");
  }

  while (code1.includes("<")) {
    code1 = code1.replace("", "CH_LES");
  }

  while (code1.includes(">")) {
    code1 = code1.replace(">", "CH_GRE");
  }

  while (code1.includes("'")) {
    code1 = code1.replace("'", "CH_SAS");
  }

  while (code1.includes('"')) {
    code1 = code1.replace('"', "CH_ASP");
  }

  while (code1.includes(".")) {
    code1 = code1.replace(".", "¶");
  }
  //FUNCTIONS:

  //STRINGS:

  //NUMBERS:

  ////FLOAT:

  while (code1.includes("0")) {
    if (code1.includes(".")) {
      code1 = code1.replace("0.", "NU_FLO_/");
    }
  }

  ////INT:
  while (code1.includes("0")) {
    code1 = code1.replace("0", "NU_ZERO∆");
  }
  while (code1.includes("1")) {
    code1 = code1.replace("1", "NU_ONE∆");
  }
  while (code1.includes("2")) {
    code1 = code1.replace("2", "NU_TWO∆");
  }
  while (code1.includes("3")) {
    code1 = code1.replace("3", "NU_THREE∆");
  }
  while (code1.includes("4")) {
    code1 = code1.replace("4", "NU_FOUR∆");
  }
  while (code1.includes("5")) {
    code1 = code1.replace("5", "NU_FIVE∆");
  }
  while (code1.includes("6")) {
    code1 = code1.replace("6", "NU_SIX∆");
  }
  while (code1.includes("7")) {
    code1 = code1.replace("7", "NU_SEVEN∆");
  }
  while (code1.includes("8")) {
    code1 = code1.replace("8", "NU_EIGHT∆");
  }
  while (code1.includes("9")) {
    code1 = code1.replace("9", "NU_NINE∆");
  }
  ///start commas system 2:
  while (code1.includes("√•√")) {
    code1 = code1.replace("√•√", ",");
  }
  ///end commas system 2

  alert(code1);
}

//statistics:
function stats() {
  var dataAtual = new Date();

  var dia = (dataAtual.getDate() < 10 ? "0" : "") + dataAtual.getDate();

  var mes =
    (dataAtual.getMonth() + 1 < 10 ? "0" : "") + (dataAtual.getMonth() + 1);

  var ano = dataAtual.getFullYear();

  var hora = (dataAtual.getHours() < 10 ? "0" : "") + dataAtual.getHours();

  var minuto =
    (dataAtual.getMinutes() < 10 ? "0" : "") + dataAtual.getMinutes();

  var segundo =
    (dataAtual.getSeconds() < 10 ? "0" : "") + dataAtual.getSeconds();

  fulldate =
    mes +
    "/" +
    dia +
    "/" +
    ano +
    "(" +
    hora +
    ":" +
    minuto +
    ":" +
    segundo +
    ")";
}
