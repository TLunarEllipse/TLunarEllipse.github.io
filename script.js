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

//functions:
var FUNCTIONS = ["print", "var", "or", "if", "else", "loop", "and", "not"];

var FU_PRINT = new Object();

var FU_VAR = new Object();

var FU_OR = new Object();

var FU_IF = new Object();

var FU_ELSE = new Object();

var FU_LOOP = new Object();

var FU_AND = new Object();

var FU_NOT = new Object();

//characters:

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

var CH_PLU = new Object();

var CH_MIN = new Object();

var CH_MUL = new Object();

var CH_DIV = new Object();

var CH_POW = new Object();

var CH_LPA = new Object();

var CH_RPA = new Object();

var CH_LSQ = new Object();

var CH_RSQ = new Object();

var CH_COM = new Object();

var CH_SEM = new Object();

var CH_EQU = new Object();

var CH_LES = new Object();

var CH_GRE = new Object();

var CH_SAS = new Object();

var CH_ASP = new Object();

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

  //FUNCTIONS:

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
