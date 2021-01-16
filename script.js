//system variables:
var work = 1;
var system = true;
var console1 = document.getElementById("console1");
var console2 = document.getElementById("console2");
var fulldate;
var erro = "No erros found";
var code;
var code0;
var code1;
var codeS;
var code2;
var code3;
var debug = 0;
var maxtimes;
var newWindow;
var atualtimecode;
var totaltimecode;
var atualtime = 0;
var name = "name1";
var value = "value1";

//run code:
setTimeout(run, 5);

function run() {
  code = document.getElementById("console2").value;
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
  if ((work = 1)) {
    document.getElementById("console1").innerHTML =
      "Program statistics:" +
      " TLunarEllipse Lang; Version: [beta 1.0.0]; " +
      fulldate +
      "; " +
      "(" +
      erro +
      ");";
  }
}

//pre-analysis spacing:
function spacing() {
  code0 = document.getElementById("console2").value;

  while (code0.includes(' " ')) {
    code0 = code0.replace(' " ', "~");
  }
  if (debug == 1) {
    alert("spacing1 output:" + code0);
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
  while (code1.includes(",;")) {
    code1 = code1.replace(",;", "IT√END");
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

  while (code1.includes("}")) {
    code1 = code1.replace("}", "CH_RCB");
  }

  while (code1.includes("{")) {
    code1 = code1.replace("{", "CH_LCB");
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
  while (code1.includes("!alert")) {
    code1 = code1.replace("!alert", "FU_ALERT");
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
  while (code1.includes("!function")) {
    code1 = code1.replace("!function", "FU_FUNCTION");
  }
  if (debug == 1) {
    alert("lexer output:" + code1);
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

  //CB:
  while (codeS.includes("√•√CH_LCB√•√")) {
    codeS = codeS.replace("√•√CH_LCB√•√", "√•√CH√LCB√•√");
  }
  while (codeS.includes("CH_LCB")) {
    codeS = codeS.replace("CH_LCB", "√•√CH√LCB√•√");
  }
  while (codeS.includes("√•√CH_RCB√•√")) {
    codeS = codeS.replace("√•√CH_RCB√•√", "√•√CH√RCB√•√");
  }
  while (codeS.includes("CH_RCB")) {
    codeS = codeS.replace("CH_RCB", "√•√CH√RCB√•√");
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
    codeS = codeS.replace("√•√TT_END√•√", ";√•√TT√END√•√");
  }
  while (codeS.includes("TT_END")) {
    codeS = codeS.replace("TT_END", ";√•√TT√END√•√");
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
  //less:
  while (codeS.includes("√•√CH_LES√•√")) {
    codeS = codeS.replace("√•√CH_LES√•√", "√•√CH√LES√•√");
  }

  while (codeS.includes("CH_LES")) {
    codeS = codeS.replace("CH_LES", "√•√CH√LES√•√");
  }
  //great:
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
  while (codeS.includes("√•√FU_ALERT√•√")) {
    codeS = codeS.replace("√•√FU_ALERT√•√", "√•√FU√ALERT√•√");
  }
  while (codeS.includes("FU_ALERT")) {
    codeS = codeS.replace("FU_ALERT", "√•√FU√ALERT√•√");
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

  while (codeS.includes("√•√FU_FUNCTION√•√")) {
    codeS = codeS.replace("√•√FU_FUNCTION√•√", "√•√FU√FUNCTIOM√•√");
  }
  while (codeS.includes("FU_FUNCTION")) {
    codeS = codeS.replace("FU_FUNCTION", "√•√FU√FUNCTION√•√");
  }

  ///start commas system 2:
  while (codeS.includes("√•√√•√")) {
    codeS = codeS.replace("√•√√•√", "√•√");
  }
  while (codeS.includes("√•√")) {
    codeS = codeS.replace("√•√", ",");
  }
  codeS = codeS.split(/\r\n|\r|\n/g);
  codeS = codeS.toString();

  while (codeS.includes(",,")) {
    codeS = codeS.replace(",,", ",");
  }
  while (codeS.includes("IT√END")) {
    codeS = codeS.replace("IT√END", ";");
  }
  ///end commas system 2

  if (debug == 1) {
    alert("spacing2 output:" + codeS);
  }
  interpreter();
}

//intermediate code generator:
function interpreter() {
  maxtimes = 0;
  atualtime = 0;
  code2 = codeS;

  ///divider per line:
  while (code2.includes(",")) {
    code2 = code2.replace(",", "¶•¶");
  }
  code3 = code2;
  while (code3.includes("¶•¶TT√END¶•¶")) {
    code3 = code3.replace("¶•¶TT√END¶•¶", "`√√`");
  }
  code3 = code3.split("`√√`");
  maxtimes = code3.length;

  while (atualtime < maxtimes) {
    atualtimecode = code3[atualtime];
    atualtime = atualtime + 1;
    ///error finder:

    ///translator and interpreter per line:

    //translator to js:

    ///simple translation:
    while (atualtimecode.includes("BO~")) {
      atualtimecode = atualtimecode.replace("BO~", "var ");
    }
    while (atualtimecode.includes("FO~")) {
      atualtimecode = atualtimecode.replace("FO~", "var ");
    }
    while (atualtimecode.includes("IN~")) {
      atualtimecode = atualtimecode.replace("IN~", "var ");
    }
    while (atualtimecode.includes("VC~")) {
      atualtimecode = atualtimecode.replace("VC~", "var ");
    }
    while (atualtimecode.includes("~")) {
      atualtimecode = atualtimecode.replace("~", " ");
    }
    while (atualtimecode.includes("CH√SET:")) {
      atualtimecode = atualtimecode.replace("CH√SET:", "=");
    }
    while (atualtimecode.includes("CH√SAS")) {
      atualtimecode = atualtimecode.replace("CH√SAS", "'");
    }

    while (atualtimecode.includes("¶•¶")) {
      atualtimecode = atualtimecode.replace("¶•¶", "");
    }
    ///average translation:
    while (atualtimecode.includes("FU√IF")) {
      atualtimecode = atualtimecode.replace("FU√IF", "if");
    }
    while (atualtimecode.includes("FU√ALERT")) {
      atualtimecode = atualtimecode.replace("FU√ALERT", "alert");
    }
    while (atualtimecode.includes("FU√OR")) {
      atualtimecode = atualtimecode.replace("FU√OR", "||");
    }
    while (atualtimecode.includes("FU√AND")) {
      atualtimecode = atualtimecode.replace("FU√AND", "&&");
    }
    while (atualtimecode.includes("FU√NOT")) {
      atualtimecode = atualtimecode.replace("FU√NOT", "!");
    }
    while (atualtimecode.includes("FU√ELSE")) {
      atualtimecode = atualtimecode.replace("FU√ELSE", "else");
    }
    while (atualtimecode.includes("FU√WHILE")) {
      atualtimecode = atualtimecode.replace("FU√WHILE", "while");
    }
    while (atualtimecode.includes("FU√FUNCTION")) {
      atualtimecode = atualtimecode.replace("FU√FUNCTION", "function ");
    }

    while (atualtimecode.includes("CH√PLU")) {
      atualtimecode = atualtimecode.replace("CH√PLU", "+");
    }
    while (atualtimecode.includes("CH√MIN")) {
      atualtimecode = atualtimecode.replace("CH√MIN", "-");
    }
    while (atualtimecode.includes("CH√MUL")) {
      atualtimecode = atualtimecode.replace("CH√MUL", "*");
    }
    while (atualtimecode.includes("CH√DIV")) {
      atualtimecode = atualtimecode.replace("CH√DIV", "/");
    }
    while (atualtimecode.includes("CH√POW")) {
      atualtimecode = atualtimecode.replace("CH√POW", "^");
    }

    while (atualtimecode.includes("CH√LPA")) {
      atualtimecode = atualtimecode.replace("CH√LPA", "(");
    }
    while (atualtimecode.includes("CH√RPA")) {
      atualtimecode = atualtimecode.replace("CH√RPA", ")");
    }
    while (atualtimecode.includes("CH√LSQ")) {
      atualtimecode = atualtimecode.replace("CH√LSQ", "[");
    }
    while (atualtimecode.includes("CH√RSQ")) {
      atualtimecode = atualtimecode.replace("CH√RSQ", "]");
    }
    while (atualtimecode.includes("CH√LCB")) {
      atualtimecode = atualtimecode.replace("CH√LCB", "{");
    }
    while (atualtimecode.includes("CH√RCB")) {
      atualtimecode = atualtimecode.replace("CH√RCB", "}");
    }
    while (atualtimecode.includes("CH√COM")) {
      atualtimecode = atualtimecode.replace("CH√COM", ",");
    }
    while (atualtimecode.includes("CH√LOE")) {
      atualtimecode = atualtimecode.replace("CH√LOE:", "<=");
    }
    while (atualtimecode.includes("CH√GOE")) {
      atualtimecode = atualtimecode.replace("CH√GOE:", ">=");
    }
    while (atualtimecode.includes("CH√LES")) {
      atualtimecode = atualtimecode.replace("CH√LES", "<");
    }
    while (atualtimecode.includes("CH√GRE")) {
      atualtimecode = atualtimecode.replace("CH√GRE", ">");
    }
    while (atualtimecode.includes("CH√EQU")) {
      atualtimecode = atualtimecode.replace("CH√EQU:", "==");
    }

    ///hard translation:

    //javascript runner:
    eval(atualtimecode);
    //internal debug:
    if (debug == 1) {
      alert("interpreter reading position:" + atualtime + "/" + maxtimes);
      alert(atualtimecode);
    }
  }

  //debug:
  if (debug == 1) {
    alert("interpreter output:" + totaltimecode);
  }
}
function fnewwindow() {
  newWindow = window.open("", "", "status,height=200,width=300");
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
