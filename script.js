//system variables:
var work = 1;
var system = true;
var console1 = document.getElementById("console1");
var console2 = document.getElementById("console2");
var console3 = document.getElementById("console3");
var fulldate;
var erro = "No erros founded";
var code;
var code0;
var code1;
var codeS;
var code2;
var code3;
var code4;
var debug = 0;
var num01 = 0;
var name = "name1";
var value = "value1";

//run code:
setTimeout(run, 5);

function run() {
  code = document.getElementById("console3").value;
  //date system:
  stats();

  //debug:
  if (code.includes("#?#debug")) {
    if (debug == 1) {
      debug = 0;
      alert("debug mode disabled");
    }
  }

  if (code.includes("#!#debug")) {
    if (debug == 0) {
      debug = 1;
      alert("debug mode enabled");
    }
  }

  //start compiler process:
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

  while (code0.includes(' " ')) {
    code0 = code0.replace(' " ', "~");
  }
  if (debug == 1) {
    alert(code0);
  }
  lexer();
}

//lexical analysis:
function lexer() {
  code1 = code0;
  //additional and completely experimental codes:

  while (code1.includes('"')) {
    code1 = code1.replace('"', "~");
  }
  while (code1.includes(" ~")) {
    code1 = code1.replace(" ~", "~");
  }
  while (code1.includes("~ ")) {
    code1 = code1.replace("~ ", "~");
  }

  ///start commas system 1:
  while (code1.includes(" ")) {
    code1 = code1.replace(" ", "√•√");
  }

  ///end commas system 1

  //STRINGS:
  while (code1.includes("!VarChar")) {
    code1 = code1.replace("!VarChar", "VC");
  }
  while (code1.includes("!VarInt")) {
    code1 = code1.replace("!VarInt", "IN");
  }
  while (code1.includes("!VarFloat")) {
    code1 = code1.replace("!VarFloat", "FO");
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
  while (code1.includes("×")) {
    code1 = code1.replace("×", "CH_MUL");
  }

  while (code1.includes("/")) {
    code1 = code1.replace("/", "CH_DIV");
  }
  while (code1.includes("÷")) {
    code1 = code1.replace("÷", "CH_DIV");
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

  while (code1.includes("<=")) {
    code1 = code1.replace("<=", "CH_LOE:");
  }
  while (code1.includes(">=")) {
    code1 = code1.replace(">=", "CH_GOE:");
  }
  while (code1.includes("==")) {
    code1 = code1.replace("==", "CH_EQU:");
  }
  while (code1.includes("=")) {
    code1 = code1.replace("=", "CH_SET:");
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
  while (code1.includes("!while")) {
    code1 = code1.replace("!while", "FU_WHILE");
  }
  while (code1.includes("!and")) {
    code1 = code1.replace("!and", "FU_AND");
  }
  while (code1.includes("!not")) {
    code1 = code1.replace("!not", "FU_NOT");
  }
  if (debug == 1) {
    alert(code1);
  }
  spacing2();
}
function spacing2() {
  codeS = code1;
  ///symbols:

  //plus:
  while (codeS.includes("√•√CH_PLU√•√")) {
    codeS = codeS.replace("√•√CH_PLU√•√", "√•√CH√PLU√•√");
  }
  while (codeS.includes("CH_PLU")) {
    codeS = codeS.replace("CH_PLU", "√•√CH√PLU√•√");
  }
  //minus:
  while (codeS.includes("√•√CH_MIN√•√")) {
    codeS = codeS.replace("√•√CH_MIN√•√", "√•√CH√MIN√•√");
  }
  while (codeS.includes("CH_MIN")) {
    codeS = codeS.replace("CH_MIN", "√•√CH√MIN√•√");
  }
  //multi:
  while (codeS.includes("√•√CH_MUL√•√")) {
    codeS = codeS.replace("√•√CH_MUL√•√", "√•√CH√MUL√•√");
  }
  while (codeS.includes("CH_MUL")) {
    codeS = codeS.replace("CH_MUL", "√•√CH√MUL√•√");
  }
  //divi:
  while (codeS.includes("√•√CH_DIV√•√")) {
    codeS = codeS.replace("√•√CH_DIV√•√", "√•√CH√DIV√•√");
  }
  while (codeS.includes("CH_DIV")) {
    codeS = codeS.replace("CH_DIV", "√•√CH√DIV√•√");
  }
  //pow:
  while (codeS.includes("√•√CH_POW√•√")) {
    codeS = codeS.replace("√•√CH_POW√•√", "√•√CH√POW√•√");
  }
  while (codeS.includes("CH_POW")) {
    codeS = codeS.replace("CH_POW", "√•√CH√POW√•√");
  }
  //parents:
  while (codeS.includes("√•√CH_LPA√•√")) {
    codeS = codeS.replace("√•√CH_LPA√•√", "√•√CH√LPA√•√");
  }
  while (codeS.includes("CH_LPA")) {
    codeS = codeS.replace("CH_LPA", "√•√CH√LPA√•√");
  }

  while (codeS.includes("√•√CH_RPA√•√")) {
    codeS = codeS.replace("√•√CH_RPA√•√", "√•√CH√RPA√•√");
  }
  while (codeS.includes("CH_RPA")) {
    codeS = codeS.replace("CH_RPA", "√•√CH√RPA√•√");
  }
  //squads:
  while (codeS.includes("√•√CH_LSQ√•√")) {
    codeS = codeS.replace("√•√CH_LSQ√•√", "√•√CH√LSQ√•√");
  }
  while (codeS.includes("CH_LSQ")) {
    codeS = codeS.replace("CH_LSQ", "√•√CH√LSQ√•√");
  }

  while (codeS.includes("√•√CH_RSQ√•√")) {
    codeS = codeS.replace("√•√CH_RSQ√•√", "√•√CH√RSQ√•√");
  }
  while (codeS.includes("CH_RSQ")) {
    codeS = codeS.replace("CH_RSQ", "√•√CH√RSQ√•√");
  }

  //commas:
  while (codeS.includes("√•√CH_COM√•√")) {
    codeS = codeS.replace("√•√CH_COM√•√", "√•√CH√COM√•√");
  }
  while (codeS.includes("CH_COM")) {
    codeS = codeS.replace("CH_COM", "√•√CH√COM√•√");
  }

  //semicolon:
  while (codeS.includes("√•√TT_END√•√")) {
    codeS = codeS.replace("√•√TT_END√•√", "√•√TT√END√•√");
  }
  while (codeS.includes("TT_END")) {
    codeS = codeS.replace("TT_END", "√•√TT√END√•√");
  }
  //less or Equal:
  while (codeS.includes("√•√CH_LOE:√•√")) {
    codeS = codeS.replace("√•√CH_LOE:√•√", "√•√CH√LOE:√•√");
  }
  while (codeS.includes("CH_LOE:")) {
    codeS = codeS.replace("CH_LOE:", "√•√CH√LOE:√•√");
  }
  //great or Equal:
  while (codeS.includes("√•√TT_GOE:√•√")) {
    codeS = codeS.replace("√•√CH_GOE:√•√", "√•√CH√GOE:√•√");
  }
  while (codeS.includes("CH_GOE:")) {
    codeS = codeS.replace("CH_GOE:", "√•√CH√GOE:√•√");
  }
  //equal:
  while (codeS.includes("√•√TT_EQU:√•√")) {
    codeS = codeS.replace("√•√TT_EQU:√•√", "√•√CH√EQU:√•√");
  }
  while (codeS.includes("CH_EQU:")) {
    codeS = codeS.replace("CH_EQU:", "√•√CH√EQU:√•√");
  }
  //set:
  while (codeS.includes("√•√TT_SET:√•√")) {
    codeS = codeS.replace("√•√TT_SET:√•√", "√•√CH√SET:√•√");
  }
  while (codeS.includes("CH_SET:")) {
    codeS = codeS.replace("CH_SET:", "√•√CH√SET:√•√");
  }
  //great:
  while (codeS.includes("√•√CH_LES√•√")) {
    codeS = codeS.replace("√•√CH_LES√•√", "√•√CH√LES√•√");
  }

  while (codeS.includes("CH_LES")) {
    codeS = codeS.replace("CH_LES", "√•√CH√LES√•√");
  }
  //less:
  while (codeS.includes("√•√CH_GRE√•√")) {
    codeS = codeS.replace("√•√CH_GRE√•√", "√•√CH√GRE√•√");
  }
  while (codeS.includes("CH_GRE")) {
    codeS = codeS.replace("CH_GRE", "√•√CH√GRE√•√");
  }

  //asps:
  while (codeS.includes("√•√CH_SAS√•√")) {
    codeS = codeS.replace("√•√CH_SAS√•√", "√•√CH√SAS√•√");
  }

  while (codeS.includes("CH_SAS")) {
    codeS = codeS.replace("CH_SAS", "√•√CH√SAS√•√");
  }

  ///functions:
  while (codeS.includes("√•√FU_PRINT√•√")) {
    codeS = codeS.replace("√•√FU_PRINT√•√", "√•√FU√PRINT√•√");
  }
  while (codeS.includes("FU_PRINT")) {
    codeS = codeS.replace("FU_PRINT", "√•√FU√PRINT√•√");
  }

  while (codeS.includes("√•√FU_OR√•√")) {
    codeS = codeS.replace("√•√FU_OR√•√", "√•√FU√OR√•√");
  }
  while (codeS.includes("FU_OR")) {
    codeS = codeS.replace("FU_OR", "√•√FU√OR√•√");
  }

  while (codeS.includes("√•√FU_IF√•√")) {
    codeS = codeS.replace("√•√FU_IF√•√", "√•√FU√IF√•√");
  }
  while (codeS.includes("FU_IF")) {
    codeS = codeS.replace("FU_IF", "√•√FU√IF√•√");
  }

  while (codeS.includes("√•√FU_ELSE√•√")) {
    codeS = codeS.replace("√•√FU_ELSE√•√", "√•√FU√ELSE√•√");
  }
  while (codeS.includes("FU_ELSE")) {
    codeS = codeS.replace("FU_ELSE", "√•√FU√ELSE√•√");
  }

  while (codeS.includes("√•√FU_WHILE√•√")) {
    codeS = codeS.replace("√•√FU_WHILE√•√", "√•√FU√WHILE√•√");
  }
  while (codeS.includes("FU_WHILE")) {
    codeS = codeS.replace("FU_WHILE", "√•√FU√WHILE√•√");
  }

  while (codeS.includes("√•√FU_AND√•√")) {
    codeS = codeS.replace("√•√FU_AND√•√", "√•√FU√AND√•√");
  }
  while (codeS.includes("FU_AND")) {
    codeS = codeS.replace("FU_AND", "√•√FU√AND√•√");
  }

  while (codeS.includes("√•√FU_NOT√•√")) {
    codeS = codeS.replace("√•√FU_NOT√•√", "√•√FU√NOT√•√");
  }
  while (codeS.includes("FU_NOT")) {
    codeS = codeS.replace("FU_NOT", "√•√FU√NOT√•√");
  }

  ///start commas system 2:
  while (codeS.includes("√•√√•√")) {
    codeS = codeS.replace("√•√√•√", "√•√");
  }
  while (codeS.includes("√•√")) {
    codeS = codeS.replace("√•√", ",");
  }
  codeS = codeS.split(/\r\n|\r|\n/g);
  while (codeS.includes(",,")) {
    codeS = codeS.replace(",,", ",");
  }
  ///end commas system 2

  if (debug == 1) {
    alert(codeS);
  }
  parser();
}
//syntax analisys:
function parser() {
  code2 = "(" + codeS + ")";
  if (debug == 1) {
    alert(code2);
  }
  semantics();
}
function semantics() {
  code3 = code2;

  if (debug == 1) {
    alert(code3);
  }
  intermediatecode();
}
//intermediate code generator:
function intermediatecode() {
  code4 = code3;
  if (debug == 1) {
    alert(code4);
  }
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
