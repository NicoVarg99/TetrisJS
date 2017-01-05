function creaArray2D(ri) {
  var arr = [];

  for (var i=0;i<ri;i++) {
     arr[i] = [];
  }

  return arr;
}

function startGame(){
  array = creaArray2D(10);

  stampaArray(array);
}

function stampaArray(array){

  for(var i=0;i<22;i++){
    for(var j=0;j<10;j++){
      document.getElementById("r"+i+"el"+j).innerText="r"+i+"el"+j;
      document.getElementById("r"+i+"el"+j).style.backgroundColor="lime";
    }
  }

  alert(array[0][0]);

}
