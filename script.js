//system:

var work = 1;
var system = true;
var console1 = document.getElementById("console1");
var console2 = document.getElementById("console2");
var console3 = document.getElementById("console3");
var fulldate;
var erro = "No Errors Found";
var code0;
var code1;
var code2;
var code3;
var code4;
var num01 = 0;
var name = "name1";
var value = "value1";

//run code:
setTimeout(run, 5);

function run() {
  //date system:
  stats();
  spacing();

  //define whether the code is right or wrong:

  //right:
  if ((work = 1)) {
    document.getElementById("console1").innerHTML =
      "Program statistics:" +
      " TLunarEllipse Lang; Version: 1.0.0; " +
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

//pre-analysis spacing:
function spacing() {
  code0 = document.getElementById("console3").value;

  while (code0.includes("= ")) {
    code0 = code0.replace("= ", "CH_EQU:");
  }

  while (code0.includes(' " ')) {
    code0 = code0.replace(' " ', "~");
  }

  alert(code0);
  lexer();
}

//lexical analysis:
function lexer() {
  code1 = code0;
  //additional and completely experimental commands:

  while (code1.includes('"')) {
    code1 = code1.replace('"', "~");
  }

  ///start commas system 1:
  while (code1.includes(" ")) {
    code1 = code1.replace(" ", "√•√");
  }

  ///end commas system 1

  //STRINGS:
  while (code1.includes("!VarCharacters")) {
    code1 = code1.replace("!VarCharacters", "VC");
  }
  while (code1.includes("!VarNumeric")) {
    code1 = code1.replace("!VarNumeric", "NU");
  }
  while (code1.includes("!VarDecimal")) {
    code1 = code1.replace("!VarDecimal", "DE");
  }
  while (code1.includes("!VarBoolean")) {
    code1 = code1.replace("!VarBoolean", "BO");
  }

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
    code1 = code1.replace(";", "TT_END");
  }
  while (code1.includes("=")) {
    code1 = code1.replace("=", "CH_EQU:");
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

  //FUNCTIONS:
  while (code1.includes("!print")) {
    code1 = code1.replace("!print", "FU_PRINT");
  }

  while (code1.includes("!or")) {
    code1 = code1.replace("!or", "FU_OR");
  }
  while (code1.includes("!if")) {
    code1 = code1.replace("!if", "FU_IF");
  }
  while (code1.includes("!else")) {
    code1 = code1.replace("!else", "FU_ELSE");
  }
  while (code1.includes("!loop")) {
    code1 = code1.replace("!loop", "FU_LOOP");
  }
  while (code1.includes("!and")) {
    code1 = code1.replace("!and", "FU_AND");
  }
  while (code1.includes("!not")) {
    code1 = code1.replace("!not", "FU_NOT");
  }
  ///start commas system 2:

  while (code1.includes("√•√")) {
    code1 = code1.replace("√•√", ",");
  }
  code1 = code1.split(/\r\n|\r|\n/g);
  ///end commas system 2

  alert(code1);
  phaser();
}

//syntax analisys:

function phaser() {
  code2 = code1;

  alert(code2);
  semantics();
}
function semantics() {
  code3 = code2;

  alert(code3);
  intermediatecode();
}
//intermediate code generator:
function intermediatecode() {
  code4 = code3;

  alert(code4);
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
