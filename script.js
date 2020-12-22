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
var TT_CHARACTERS = [
  "TT_PLU",
  "TT_MIN",
  "TT_MUL",
  "TT_DIV",
  "TT_POW",
  "TT_LPA",
  "TT_RPA",
  "TT_LSQ",
  "TT_RSQ",
  "TT_COM",
  "TT_SEM",
  "TT_EQU",
  "TT_LES",
  "TT_GRE",
  "TT_SAS",
  "TT_ASP"
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

  code1 = code1.replace(",", "TT_COM");

  code1 = code1.replace(/"+"/gi, "TT_PLU");
  
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
