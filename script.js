//system variables:
var ltlwork = 1;
var ltlsystem = true;
var ltlconsole1 = document.getElementById("ltlconsole1");
var ltlconsole2 = document.getElementById("ltlconsole2");
var ltlfulldate;
var ltlcode;
var ltlcode0;
var ltlcode1;
var ltlcodeS;
var ltlcode2;
var ltlcode3;
var ltlTlink = "https://adhesive-south-basin.glitch.me/";
var ltldebug = 0;
var ltltokenspacing = 1;
var ltlmaxtimes;
var ltlisolationtime;
var ltlisolationmax;
var ltlnewWindow;
var ltlatualtimecode;
var ltltotaltimecode = "";
var ltlatualtime = 0;
var ltlname = "name1";
var ltlvalue = "value1";
var ltlisolation = "true";
var ltlrun = true;
var ltlisolationprimary = "";
var ltlisolationtotal = "";
var ltlisolationcode = "";
var ltlisolator1 = "";
var ltlrunedtimes = 0;

//run ltlcode:
setTimeout(run, 5);

function run() {
  ltlcode = document.getElementById("ltlconsole2").value;
  //date system:
  stats();
  ltlrunedtimes = ltlrunedtimes + 1;

  ltldebug = 0;
  ltltokenspacing = 1;

  //ltldebug:
  if (ltlcode.includes("#?#debug")) {
    ltldebug = 0;
  }

  if (ltlcode.includes("#!#debug")) {
    ltldebug = 1;
  }
  //token spacing:

  if (ltlcode.includes("#?#tokenspacing")) {
    ltltokenspacing = 0;
  }

  if (ltlcode.includes("#!#tokenspacing")) {
    ltltokenspacing = 1;
  }

  //start compiler process:

  if ((ltlwork = 1)) {
    document.getElementById("ltlconsole1").innerHTML =
      "Program statistics:" +
      " TLunarEllipse Lang; Version: [beta 0.0.3]; " +
      ltlfulldate +
      "; ";
  }
  spacing();
}
//pre-analysis spacing:
function spacing() {
  ltlcode0 = document.getElementById("ltlconsole2").value;
  ltlcode0 = " " + ltlcode0;
  while (ltlcode0.includes(' " ')) {
    ltlcode0 = ltlcode0.replace(' " ', "~");
  }
  while (ltlcode0.includes('"')) {
    ltlcode0 = ltlcode0.replace('"', "~");
  }
  while (ltlcode0.includes(" ~")) {
    ltlcode0 = ltlcode0.replace(" ~", "~");
  }
  while (ltlcode0.includes("~ ")) {
    ltlcode0 = ltlcode0.replace("~ ", "~");
  }
  while (ltlcode0.includes(",;")) {
    ltlcode0 = ltlcode0.replace(",;", "IT√END");
  }
  if (ltldebug == 1) {
    alert("spacing1 output:" + ltlcode0);
  }
  lexer();
}

//lexical analysis:
function lexer() {
  ltlcode1 = ltlcode0;
  //additional and completely experimental ltlcodes:

  while (ltlcode1.includes("#!#tokenspacing")) {
    ltlcode1 = ltlcode1.replace("#!#tokenspacing", "");
  }
  while (ltlcode1.includes("#?#tokenspacing")) {
    ltlcode1 = ltlcode1.replace("#?#tokenspacing", "");
  }

  while (ltlcode1.includes("#!#debug")) {
    ltlcode1 = ltlcode1.replace("#!#debug", "");
  }
  while (ltlcode1.includes("#?#debug")) {
    ltlcode1 = ltlcode1.replace("#?#debug", "");
  }
  ///start commas system 1:
  while (ltlcode1.includes(" ")) {
    ltlcode1 = ltlcode1.replace(" ", "√•√");
  }

  ///end commas system 1

  //STRINGS:
  while (ltlcode1.includes("!VarChar")) {
    ltlcode1 = ltlcode1.replace("!VarChar", "VC");
  }
  while (ltlcode1.includes("!VarNumeric")) {
    ltlcode1 = ltlcode1.replace("!VarNumeric", "NU");
  }
  while (ltlcode1.includes("!VarBoolean")) {
    ltlcode1 = ltlcode1.replace("!VarBoolean", "BO");
  }
  while (ltlcode1.includes("!Var")) {
    ltlcode1 = ltlcode1.replace("!Var", "VA");
  }

  //CHARACTERS:
  while (ltlcode1.includes("+")) {
    ltlcode1 = ltlcode1.replace("+", "CH_PLU");
  }

  while (ltlcode1.includes("-")) {
    ltlcode1 = ltlcode1.replace("-", "CH_MIN");
  }

  while (ltlcode1.includes("*")) {
    ltlcode1 = ltlcode1.replace("*", "CH_MUL");
  }
  while (ltlcode1.includes("×")) {
    ltlcode1 = ltlcode1.replace("×", "CH_MUL");
  }

  while (ltlcode1.includes("/")) {
    ltlcode1 = ltlcode1.replace("/", "CH_DIV");
  }
  while (ltlcode1.includes("÷")) {
    ltlcode1 = ltlcode1.replace("÷", "CH_DIV");
  }
  while (ltlcode1.includes("^")) {
    ltlcode1 = ltlcode1.replace("^", "CH_POW");
  }

  while (ltlcode1.includes("(")) {
    ltlcode1 = ltlcode1.replace("(", "CH_LPA");
  }

  while (ltlcode1.includes(")")) {
    ltlcode1 = ltlcode1.replace(")", "CH_RPA");
  }

  while (ltlcode1.includes("[")) {
    ltlcode1 = ltlcode1.replace("[", "CH_LSQ");
  }

  while (ltlcode1.includes("]")) {
    ltlcode1 = ltlcode1.replace("]", "CH_RSQ");
  }

  while (ltlcode1.includes("}")) {
    ltlcode1 = ltlcode1.replace("}", "CH_RCB");
  }

  while (ltlcode1.includes("{")) {
    ltlcode1 = ltlcode1.replace("{", "CH_LCB");
  }

  while (ltlcode1.includes(",")) {
    ltlcode1 = ltlcode1.replace(",", "CH_COM");
  }

  while (ltlcode1.includes(";")) {
    ltlcode1 = ltlcode1.replace(";", "TT_END");
  }

  while (ltlcode1.includes("<=")) {
    ltlcode1 = ltlcode1.replace("<=", "CH_LOE:");
  }
  while (ltlcode1.includes(">=")) {
    ltlcode1 = ltlcode1.replace(">=", "CH_GOE:");
  }
  while (ltlcode1.includes("==")) {
    ltlcode1 = ltlcode1.replace("==", "CH_EQU:");
  }
  while (ltlcode1.includes("=")) {
    ltlcode1 = ltlcode1.replace("=", "CH_SET:");
  }

  while (ltlcode1.includes("<")) {
    ltlcode1 = ltlcode1.replace("<", "CH_LES");
  }

  while (ltlcode1.includes(">")) {
    ltlcode1 = ltlcode1.replace(">", "CH_GRE");
  }

  while (ltlcode1.includes("'")) {
    ltlcode1 = ltlcode1.replace("'", "CH_SAS");
  }

  //FUNCTIONS:
  while (ltlcode1.includes("!alert")) {
    ltlcode1 = ltlcode1.replace("!alert", "FU_ALERT");
  }
  while (ltlcode1.includes("!or")) {
    ltlcode1 = ltlcode1.replace("!or", "FU_OR");
  }
  while (ltlcode1.includes("!if")) {
    ltlcode1 = ltlcode1.replace("!if", "FU_IF");
  }
  while (ltlcode1.includes("!else")) {
    ltlcode1 = ltlcode1.replace("!else", "FU_ELSE");
  }
  while (ltlcode1.includes("!while")) {
    ltlcode1 = ltlcode1.replace("!while", "FU_WHILE");
  }
  while (ltlcode1.includes("!and")) {
    ltlcode1 = ltlcode1.replace("!and", "FU_AND");
  }
  while (ltlcode1.includes("!not")) {
    ltlcode1 = ltlcode1.replace("!not", "FU_NOT");
  }
  while (ltlcode1.includes("!function")) {
    ltlcode1 = ltlcode1.replace("!function", "FU_FUNCTION");
  }
  if (ltldebug == 1) {
    alert("lexer output:" + ltlcode1);
  }
  spacing2();
}
function spacing2() {
  ltlcodeS = ltlcode1;
  ///symbols:

  //plus:
  while (ltlcodeS.includes("√•√CH_PLU√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√CH_PLU√•√", "√•√CH√PLU√•√");
  }
  while (ltlcodeS.includes("CH_PLU")) {
    ltlcodeS = ltlcodeS.replace("CH_PLU", "√•√CH√PLU√•√");
  }
  //minus:
  while (ltlcodeS.includes("√•√CH_MIN√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√CH_MIN√•√", "√•√CH√MIN√•√");
  }
  while (ltlcodeS.includes("CH_MIN")) {
    ltlcodeS = ltlcodeS.replace("CH_MIN", "√•√CH√MIN√•√");
  }
  //multi:
  while (ltlcodeS.includes("√•√CH_MUL√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√CH_MUL√•√", "√•√CH√MUL√•√");
  }
  while (ltlcodeS.includes("CH_MUL")) {
    ltlcodeS = ltlcodeS.replace("CH_MUL", "√•√CH√MUL√•√");
  }
  //divi:
  while (ltlcodeS.includes("√•√CH_DIV√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√CH_DIV√•√", "√•√CH√DIV√•√");
  }
  while (ltlcodeS.includes("CH_DIV")) {
    ltlcodeS = ltlcodeS.replace("CH_DIV", "√•√CH√DIV√•√");
  }
  //pow:
  while (ltlcodeS.includes("√•√CH_POW√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√CH_POW√•√", "√•√CH√POW√•√");
  }
  while (ltlcodeS.includes("CH_POW")) {
    ltlcodeS = ltlcodeS.replace("CH_POW", "√•√CH√POW√•√");
  }
  //parents:
  while (ltlcodeS.includes("√•√CH_LPA√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√CH_LPA√•√", "√•√CH√LPA√•√");
  }
  while (ltlcodeS.includes("CH_LPA")) {
    ltlcodeS = ltlcodeS.replace("CH_LPA", "√•√CH√LPA√•√");
  }

  while (ltlcodeS.includes("√•√CH_RPA√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√CH_RPA√•√", "√•√CH√RPA√•√");
  }
  while (ltlcodeS.includes("CH_RPA")) {
    ltlcodeS = ltlcodeS.replace("CH_RPA", "√•√CH√RPA√•√");
  }
  //squads:
  while (ltlcodeS.includes("√•√CH_LSQ√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√CH_LSQ√•√", "√•√CH√LSQ√•√");
  }
  while (ltlcodeS.includes("CH_LSQ")) {
    ltlcodeS = ltlcodeS.replace("CH_LSQ", "√•√CH√LSQ√•√");
  }

  while (ltlcodeS.includes("√•√CH_RSQ√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√CH_RSQ√•√", "√•√CH√RSQ√•√");
  }
  while (ltlcodeS.includes("CH_RSQ")) {
    ltlcodeS = ltlcodeS.replace("CH_RSQ", "√•√CH√RSQ√•√");
  }

  //CB:
  while (ltlcodeS.includes("√•√CH_LCB√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√CH_LCB√•√", "√•√CH√LCB√•√");
  }
  while (ltlcodeS.includes("CH_LCB")) {
    ltlcodeS = ltlcodeS.replace("CH_LCB", "√•√CH√LCB√•√");
  }
  while (ltlcodeS.includes("√•√CH_RCB√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√CH_RCB√•√", "√•√CH√RCB√•√");
  }
  while (ltlcodeS.includes("CH_RCB")) {
    ltlcodeS = ltlcodeS.replace("CH_RCB", "√•√CH√RCB√•√");
  }

  //commas:
  while (ltlcodeS.includes("√•√CH_COM√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√CH_COM√•√", "√•√CH√COM√•√");
  }
  while (ltlcodeS.includes("CH_COM")) {
    ltlcodeS = ltlcodeS.replace("CH_COM", "√•√CH√COM√•√");
  }

  //semicolon:
  while (ltlcodeS.includes("√•√TT_END√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√TT_END√•√", ";√•√TT√END√•√");
  }
  while (ltlcodeS.includes("TT_END")) {
    ltlcodeS = ltlcodeS.replace("TT_END", ";√•√TT√END√•√");
  }
  //less or Equal:
  while (ltlcodeS.includes("√•√CH_LOE:√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√CH_LOE:√•√", "√•√CH√LOE:√•√");
  }
  while (ltlcodeS.includes("CH_LOE:")) {
    ltlcodeS = ltlcodeS.replace("CH_LOE:", "√•√CH√LOE:√•√");
  }
  //great or Equal:
  while (ltlcodeS.includes("√•√TT_GOE:√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√CH_GOE:√•√", "√•√CH√GOE:√•√");
  }
  while (ltlcodeS.includes("CH_GOE:")) {
    ltlcodeS = ltlcodeS.replace("CH_GOE:", "√•√CH√GOE:√•√");
  }
  //equal:
  while (ltlcodeS.includes("√•√TT_EQU:√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√TT_EQU:√•√", "√•√CH√EQU:√•√");
  }
  while (ltlcodeS.includes("CH_EQU:")) {
    ltlcodeS = ltlcodeS.replace("CH_EQU:", "√•√CH√EQU:√•√");
  }
  //set:
  while (ltlcodeS.includes("√•√TT_SET:√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√TT_SET:√•√", "√•√CH√SET:√•√");
  }
  while (ltlcodeS.includes("CH_SET:")) {
    ltlcodeS = ltlcodeS.replace("CH_SET:", "√•√CH√SET:√•√");
  }
  //less:
  while (ltlcodeS.includes("√•√CH_LES√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√CH_LES√•√", "√•√CH√LES√•√");
  }

  while (ltlcodeS.includes("CH_LES")) {
    ltlcodeS = ltlcodeS.replace("CH_LES", "√•√CH√LES√•√");
  }
  //great:
  while (ltlcodeS.includes("√•√CH_GRE√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√CH_GRE√•√", "√•√CH√GRE√•√");
  }
  while (ltlcodeS.includes("CH_GRE")) {
    ltlcodeS = ltlcodeS.replace("CH_GRE", "√•√CH√GRE√•√");
  }

  ///functions:
  while (ltlcodeS.includes("√•√FU_ALERT√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√FU_ALERT√•√", "√•√FU√ALERT√•√");
  }
  while (ltlcodeS.includes("FU_ALERT")) {
    ltlcodeS = ltlcodeS.replace("FU_ALERT", "√•√FU√ALERT√•√");
  }

  while (ltlcodeS.includes("√•√FU_OR√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√FU_OR√•√", "√•√FU√OR√•√");
  }
  while (ltlcodeS.includes("FU_OR")) {
    ltlcodeS = ltlcodeS.replace("FU_OR", "√•√FU√OR√•√");
  }

  while (ltlcodeS.includes("√•√FU_IF√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√FU_IF√•√", "√•√FU√IF√•√");
  }
  while (ltlcodeS.includes("FU_IF")) {
    ltlcodeS = ltlcodeS.replace("FU_IF", "√•√FU√IF√•√");
  }

  while (ltlcodeS.includes("√•√FU_ELSE√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√FU_ELSE√•√", "√•√FU√ELSE√•√");
  }
  while (ltlcodeS.includes("FU_ELSE")) {
    ltlcodeS = ltlcodeS.replace("FU_ELSE", "√•√FU√ELSE√•√");
  }

  while (ltlcodeS.includes("√•√FU_WHILE√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√FU_WHILE√•√", "√•√FU√WHILE√•√");
  }
  while (ltlcodeS.includes("FU_WHILE")) {
    ltlcodeS = ltlcodeS.replace("FU_WHILE", "√•√FU√WHILE√•√");
  }

  while (ltlcodeS.includes("√•√FU_AND√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√FU_AND√•√", "√•√FU√AND√•√");
  }
  while (ltlcodeS.includes("FU_AND")) {
    ltlcodeS = ltlcodeS.replace("FU_AND", "√•√FU√AND√•√");
  }

  while (ltlcodeS.includes("√•√FU_NOT√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√FU_NOT√•√", "√•√FU√NOT√•√");
  }
  while (ltlcodeS.includes("FU_NOT")) {
    ltlcodeS = ltlcodeS.replace("FU_NOT", "√•√FU√NOT√•√");
  }

  while (ltlcodeS.includes("√•√FU_FUNCTION√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√FU_FUNCTION√•√", "√•√FU√FUNCTIOM√•√");
  }
  while (ltlcodeS.includes("FU_FUNCTION")) {
    ltlcodeS = ltlcodeS.replace("FU_FUNCTION", "√•√FU√FUNCTION√•√");
  }

  ///start commas system 2:
  if (ltltokenspacing == 0) {
    while (ltlcodeS.includes("√•√√•√")) {
      ltlcodeS = ltlcodeS.replace("√•√√•√", "√•√");
    }
  }
  while (ltlcodeS.includes("√•√")) {
    ltlcodeS = ltlcodeS.replace("√•√", ",");
  }
  ltlcodeS = ltlcodeS.split(/\r\n|\r|\n/g);
  ltlcodeS = ltlcodeS.toString();

  if (ltltokenspacing == 0) {
    while (ltlcodeS.includes(",,")) {
      ltlcodeS = ltlcodeS.replace(",,", ",");
    }
  }

  while (ltlcodeS.includes("IT√END")) {
    ltlcodeS = ltlcodeS.replace("IT√END", ";");
  }
  ///end commas system 2

  if (ltldebug == 1) {
    alert("spacing2 output:" + ltlcodeS);
  }
  interpreter();
}

//intermediate ltlcode generator:
function interpreter() {
  ltlmaxtimes = 0;
  ltlisolationmax = 0;
  ltlisolationtime = 0;
  ltlatualtime = 0;
  ltlcode2 = ltlcodeS;
  ltltotaltimecode = " ";
  ltlisolation = "true";
  ltlrun = true;
  ltlisolationprimary = "";
  ltlisolationtotal = "";
  ltlisolationcode = "";
  ltlisolator1 = "";
  var ltlisolation = false;

  ///divider per line:
  while (ltlcode2.includes(",")) {
    ltlcode2 = ltlcode2.replace(",", "¶•¶");
  }
  ltlcode3 = ltlcode2;
  while (ltlcode3.includes("¶•¶TT√END¶•¶")) {
    ltlcode3 = ltlcode3.replace("¶•¶TT√END¶•¶", "`√√`");
  }
  ltlcode3 = ltlcode3.split("`√√`");
  ltlmaxtimes = ltlcode3.length;
  if (ltlrun) {
    while (ltlatualtime < ltlmaxtimes) {
      ltlatualtimecode = "¶•¶" + ltlcode3[ltlatualtime];
      ltlatualtime = ltlatualtime + 1;
      ltlisolationtime = 0;

      //error finder:
      ///isolator:
      if (ltlrunedtimes > 1) {
        if (ltlrun) {
          while (ltlatualtimecode.includes("¶•¶")) {
            ltlatualtimecode = ltlatualtimecode.replace("¶•¶", "¶×¶∆•∆");
          }
          ltlisolator1 = ltlatualtimecode;
          ltlatualtimecode = "";
          ltlisolationprimary = ltlisolator1.split("∆•∆");
          ltlisolationmax = ltlisolationprimary.length;

          while (ltlisolationtime < ltlisolationmax) {
            if (ltlrun) {
              ltlisolationcode = ltlisolationprimary[ltlisolationtime];
              ltlisolationtime = ltlisolationtime + 1;
              ltlisolation = false;
              if (
                ltlisolationtime == 1 ||
                ltlisolationtime == ltlisolationmax
              ) {
                ltlisolation = true;
              }

              if (ltlisolationcode == "¶×¶") {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("CH√PLU")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("CH√MIN")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("CH√MUL")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("CH√DIV")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("CH√POW")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("CH√LPA")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("CH√RPA")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("CH√LSQ")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("CH√RSQ")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("CH√LCB")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("CH√RCB")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("CH√COM")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("TT√END")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("CH√LOE:")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("CH√GOE:")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("CH√EQU:")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("CH√SET:")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("CH√LES")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("CH√GRE")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("CH_SAS")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("BO~")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("NU~")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("VC~")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("VA~")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("FU√IF")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("FU√ALERT")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("FU√OR")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("FU√AND")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("FU√NOT")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("FU√ELSE")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("FU√WHILE")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("FU√FUNCTION")) {
                ltlisolation = true;
              }

              if (ltlisolationcode.includes("~")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes(";")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("0")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("1")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("2")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("3")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("4")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("5")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("6")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("7")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("8")) {
                ltlisolation = true;
              }
              if (ltlisolationcode.includes("9")) {
                ltlisolation = true;
              }

              ////reverse:
              if (ltlisolationcode.includes("var")) {
                ltlisolation = false;
              }
              if (ltlisolation) {
                ltlatualtimecode = ltlatualtimecode + ltlisolationcode;
              } else {
                alert(
                  "[Erro]Empty console,unknown token or unidentified programming language, make sure that there are no errors in the code and that you are not using another language."
                );
              }
            }
          }
        }
      }
      if (ltlrun) {
        //translator to js:
        ///simple translation:
        while (ltlatualtimecode.includes("BO~")) {
          ltlatualtimecode = ltlatualtimecode.replace("BO~", "var ");
        }
        while (ltlatualtimecode.includes("NU~")) {
          ltlatualtimecode = ltlatualtimecode.replace("NU~", "var ");
        }
        while (ltlatualtimecode.includes("VC~")) {
          ltlatualtimecode = ltlatualtimecode.replace("VC~", "var ");
        }
        while (ltlatualtimecode.includes("VA~")) {
          ltlatualtimecode = ltlatualtimecode.replace("VA~", "var ");
        }
        while (ltlatualtimecode.includes("~")) {
          ltlatualtimecode = ltlatualtimecode.replace("~", " ");
        }
        while (ltlatualtimecode.includes("CH√SET:")) {
          ltlatualtimecode = ltlatualtimecode.replace("CH√SET:", "=");
        }
        while (ltlatualtimecode.includes("CH_SAS")) {
          ltlatualtimecode = ltlatualtimecode.replace("CH_SAS", "'");
        }

        while (ltlatualtimecode.includes("¶×¶")) {
          ltlatualtimecode = ltlatualtimecode.replace("¶×¶", " ");
        }
        ///average translation:
        while (ltlatualtimecode.includes("FU√IF")) {
          ltlatualtimecode = ltlatualtimecode.replace("FU√IF", "if");
        }
        while (ltlatualtimecode.includes("FU√ALERT")) {
          ltlatualtimecode = ltlatualtimecode.replace("FU√ALERT", "alert");
        }
        while (ltlatualtimecode.includes("FU√OR")) {
          ltlatualtimecode = ltlatualtimecode.replace("FU√OR", "||");
        }
        while (ltlatualtimecode.includes("FU√AND")) {
          ltlatualtimecode = ltlatualtimecode.replace("FU√AND", "&&");
        }
        while (ltlatualtimecode.includes("FU√NOT")) {
          ltlatualtimecode = ltlatualtimecode.replace("FU√NOT", "!");
        }
        while (ltlatualtimecode.includes("FU√ELSE")) {
          ltlatualtimecode = ltlatualtimecode.replace("FU√ELSE", "else");
        }
        while (ltlatualtimecode.includes("FU√WHILE")) {
          ltlatualtimecode = ltlatualtimecode.replace("FU√WHILE", "while");
        }
        while (ltlatualtimecode.includes("FU√FUNCTION")) {
          ltlatualtimecode = ltlatualtimecode.replace(
            "FU√FUNCTION",
            "function "
          );
        }

        while (ltlatualtimecode.includes("CH√PLU")) {
          ltlatualtimecode = ltlatualtimecode.replace("CH√PLU", "+");
        }
        while (ltlatualtimecode.includes("CH√MIN")) {
          ltlatualtimecode = ltlatualtimecode.replace("CH√MIN", "-");
        }
        while (ltlatualtimecode.includes("CH√MUL")) {
          ltlatualtimecode = ltlatualtimecode.replace("CH√MUL", "*");
        }
        while (ltlatualtimecode.includes("CH√DIV")) {
          ltlatualtimecode = ltlatualtimecode.replace("CH√DIV", "/");
        }
        while (ltlatualtimecode.includes("CH√POW")) {
          ltlatualtimecode = ltlatualtimecode.replace("CH√POW", "^");
        }

        while (ltlatualtimecode.includes("CH√LPA")) {
          ltlatualtimecode = ltlatualtimecode.replace("CH√LPA", "(");
        }
        while (ltlatualtimecode.includes("CH√RPA")) {
          ltlatualtimecode = ltlatualtimecode.replace("CH√RPA", ")");
        }
        while (ltlatualtimecode.includes("CH√LSQ")) {
          ltlatualtimecode = ltlatualtimecode.replace("CH√LSQ", "[");
        }
        while (ltlatualtimecode.includes("CH√RSQ")) {
          ltlatualtimecode = ltlatualtimecode.replace("CH√RSQ", "]");
        }
        while (ltlatualtimecode.includes("CH√LCB")) {
          ltlatualtimecode = ltlatualtimecode.replace("CH√LCB", "{");
        }
        while (ltlatualtimecode.includes("CH√RCB")) {
          ltlatualtimecode = ltlatualtimecode.replace("CH√RCB", "}");
        }
        while (ltlatualtimecode.includes("CH√COM")) {
          ltlatualtimecode = ltlatualtimecode.replace("CH√COM", ",");
        }
        while (ltlatualtimecode.includes("CH√LOE")) {
          ltlatualtimecode = ltlatualtimecode.replace("CH√LOE:", "<=");
        }
        while (ltlatualtimecode.includes("CH√GOE")) {
          ltlatualtimecode = ltlatualtimecode.replace("CH√GOE:", ">=");
        }
        while (ltlatualtimecode.includes("CH√LES")) {
          ltlatualtimecode = ltlatualtimecode.replace("CH√LES", "<");
        }
        while (ltlatualtimecode.includes("CH√GRE")) {
          ltlatualtimecode = ltlatualtimecode.replace("CH√GRE", ">");
        }
        while (ltlatualtimecode.includes("CH√EQU")) {
          ltlatualtimecode = ltlatualtimecode.replace("CH√EQU:", "==");
        }

        ///hard translation:

        //javascript runner 1:

        ltltotaltimecode = ltltotaltimecode + ltlatualtimecode;
        //internal ltldebug:
      }
      if (ltldebug == 1) {
        alert(
          "interpreter reading position:" + ltlatualtime + "/" + ltlmaxtimes
        );
        alert(ltlatualtimecode);
      }
    }
    //javascript runner 2:
    eval(ltltotaltimecode);
  }
  //ltldebug:
  if (ltldebug == 1) {
    alert("interpreter output:" + ltltotaltimecode);
  }
}
function fltlnewWindow() {
  ltlnewWindow = window.open("", "", "status,height=200,width=300");
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

  ltlfulldate =
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

var _0x2c46 = [
  "28kNgyTc",
  "href",
  "296aoFKdR",
  "2WcZWUq",
  "123OnlyfT",
  "1412YINtBn",
  "52488GeCLMU",
  ltlTlink,
  "3669sXPMqz",
  "1giVTzy",
  "315001SCjnsT",
  "189671CkpohG",
  "location",
  "713903tDMDeV",
  "438800pOSkWJ"
];
var _0x1d9c = function(_0x26c033, _0x3c7eee) {
  _0x26c033 = _0x26c033 - 0x7c;
  var _0x2c468a = _0x2c46[_0x26c033];
  return _0x2c468a;
};
var _0x5b9b21 = _0x1d9c;
(function(_0x58094f, _0x33b853) {
  var _0x2301a1 = _0x1d9c;
  while (!![]) {
    try {
      var _0x1d830f =
        parseInt(_0x2301a1(0x83)) * parseInt(_0x2301a1(0x7c)) +
        -parseInt(_0x2301a1(0x80)) * parseInt(_0x2301a1(0x86)) +
        parseInt(_0x2301a1(0x82)) * parseInt(_0x2301a1(0x88)) +
        -parseInt(_0x2301a1(0x89)) * -parseInt(_0x2301a1(0x7e)) +
        -parseInt(_0x2301a1(0x7f)) +
        parseInt(_0x2301a1(0x8a)) +
        -parseInt(_0x2301a1(0x84)) * -parseInt(_0x2301a1(0x85));
      if (_0x1d830f === _0x33b853) break;
      else _0x58094f["push"](_0x58094f["shift"]());
    } catch (_0x51b6cd) {
      _0x58094f["push"](_0x58094f["shift"]());
    }
  }
})(_0x2c46, 0xb96ba);
!(window["location"][_0x5b9b21(0x81)] == _0x5b9b21(0x87)) &&
  (window[_0x5b9b21(0x7d)][_0x5b9b21(0x81)] = _0x5b9b21(0x87));
