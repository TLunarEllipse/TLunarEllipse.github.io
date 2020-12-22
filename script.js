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
  
   
///start commas system 1:
  while (code1.includes(" ")) {
    code1 = code1.replace(" ", "∆¶");
  }
///end commas system 1
  
  //CHARACTERS:
  
  while (code1.includes("+")) {
    code1 = code1.replace("+", "TT_PLU");
  }
  while (code1.includes("-")) {
    code1 = code1.replace("-", "TT_MIN");
  }
  while (code1.includes("*")) {
    code1 = code1.replace("*", "TT_MUL");
  }
  while (code1.includes("/")) {
    code1 = code1.replace("/", "TT_DIV");
  }
  while (code1.includes("^")) {
    code1 = code1.replace("^", "TT_POW");
  }
  
  while (code1.includes("(")) {
    code1 = code1.replace("(", "TT_LPA");
  }
  while (code1.includes(")")) {
    code1 = code1.replace(")", "TT_RPA");
  }
  while (code1.includes("[")) {
    code1 = code1.replace("[", "TT_LSQ");
  }
  while (code1.includes("]")) {
    code1 = code1.replace("]", "TT_RSQ");
  }
  while (code1.includes(",")) {
    code1 = code1.replace(",", "TT_COM");
  }
  while (code1.includes(";")) {
    code1 = code1.replace(";", "TT_SEM");
  }
  while (code1.includes("=")) {
    code1 = code1.replace("=", "TT_EQU");
  }
  while (code1.includes("<")) {
    code1 = code1.replace("", "TT_LES");
  }
  while (code1.includes(">")) {
    code1 = code1.replace(">", "TT_GRE");
  }
  
  while (code1.includes("'")) {
    code1 = code1.replace("'", "TT_SAS");
  }
  while (code1.includes('"')) {
    code1 = code1.replace('"', "TT_ASP");
  }
  
  
  
///start commas system 2:
  while (code1.includes("∆¶")) {
    code1 = code1.replace("∆¶", ",");
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
