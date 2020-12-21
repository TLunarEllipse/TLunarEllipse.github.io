var work = 1;
var system = true;
var console1 = document.getElementById("console1");
var console2 = document.getElementById("console2");
var console3 = document.getElementById("console3");

function run() {
  lexer();

  //define whether the code is right or wrong:

  //right:
  if ((work = 1)) {
    document.getElementById("console1").innerHTML = "Program statistics:" + "";
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
function lexer() {}
