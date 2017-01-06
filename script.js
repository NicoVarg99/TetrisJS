function creaArray2D(ri) {
  var arr = [];

  for (var i=0;i<ri;i++) {
     arr[i] = [];
  }

  return arr;
}

function startGame(){
  //var array = creaArray2D(10);
  worldMatrix = [
    [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]
  ];

  worldMatrix[10][7]=1;
  worldMatrix[11][7]=1;
  worldMatrix[12][6]=1;
  worldMatrix[12][7]=1;


  stampaArray(worldMatrix);
}

function isLineEmpty(oneLineArray){
  //Restituisce true se la riga è vuota
  //Restituisce false se un blocco qualsiasi è occupato
  for(var j=0;j<10;j++)
    if(oneLineArray[j]==1)
      return false;
  return true;
}

function isLineFull(oneLineArray){
  //Restituisce true se la riga è piena
  //Restituisce false se un blocco qualsiasi è vuoto
  for(var j=0;j<10;j++)
    if(oneLineArray[j]==0)
      return false;
  return true;
}

function eliminaRiga(i){
  for(j=i;j>0;j--){
    //console.log("array["+j+"]=array["+(j-1)+"]");
    worldMatrix[j]=worldMatrix[j-1];
  }
  worldMatrix[0]=[0,0,0,0,0,0,0,0,0,0];
}

function eliminaPiene(){
  for(var i=21;i>0;i--){
    if(isLineFull(worldMatrix[i]))
      eliminaRiga(i);
  }
}

function worldFall(){
  //console.log("worldFall()");
  var moved=false;

  //righe 20-0
  //se riga+1 è vuota, cade e blocca la caduta


  for(var i=21;i>=0;i--){

    if(!moved&&isLineEmpty(worldMatrix[i])){
      moved=true;
      eliminaRiga(i);
    }

  }

  eliminaPiene();
  stampaArray(worldMatrix);

}



function stampaArray(array){
  for(var i=0;i<22;i++){
    for(var j=0;j<10;j++){

      document.getElementById("r"+i+"el"+j).innerText=i;

      if(array[i][j]==1){
        document.getElementById("r"+i+"el"+j).style.backgroundColor="green";
      }else{
        document.getElementById("r"+i+"el"+j).style.backgroundColor="gray";
      }

      document.getElementById("r"+i+"el"+j).style.width=25;
      document.getElementById("r"+i+"el"+j).style.height=25;
    }
  }
}
