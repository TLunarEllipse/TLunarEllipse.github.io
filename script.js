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

//species:
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
  }
  //wrong:
  if ((work = 0)) {
    document.getElementById("console1").innerHTML = "Program statistics:" + "";
    document.getElementById("console2").innerHTML = "Console Output:" + "";
    alert("[i]error");
  }
}

//syntax analisys:
function phaser() {}

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
    code1 = code1.replace("<", "CH_LES");
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

  //FUNCTIONS:
  while (code1.includes("print")) {
    code1 = code1.replace("print", "FU_PRINT");
  }
  while (code1.includes("var")) {
    code1 = code1.replace("var", "FU_VAR");
  }
  while (code1.includes("or")) {
    code1 = code1.replace("or", "FU_OR");
  }
  while (code1.includes("if")) {
    code1 = code1.replace("if", "FU_IF");
  }
  while (code1.includes("else")) {
    code1 = code1.replace("else", "FU_ELSE");
  }
  while (code1.includes("loop")) {
    code1 = code1.replace("loop", "FU_LOOP");
  }
  while (code1.includes("and")) {
    code1 = code1.replace("and", "FU_AND");
  }
  while (code1.includes("not")) {
    code1 = code1.replace("not", "FU_NOT");
  }
  //STRINGS:

  ///start commas system 2:
  while (code1.includes("√•√")) {
    code1 = code1.replace("√•√", ",");
  }
  ///end commas system 2

  alert(code1);
  phaser();
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
