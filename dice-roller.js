window.onload=function() {
    document.getElementById('button').click();
}

var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
function printDice(n) {

    for (var i = 1; i < 6; i++) {
        var d = document.getElementById('dicePH' + i);
        d.innerHTML = n[i];
    }
  }
  var x = document.getElementById('button').autofocus;
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var dyes = [];
    for (var i = 0; i < 6; i++) {
        dye = dice.roll();
        dyes[i] = dye;
    }
    printDice(dyes);
  };


