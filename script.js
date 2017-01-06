//TODO:
// - Separazione worldMatrix, blockMatrix e realMatrix
// - Separazione in più file
// - Catturare tasti


function startGame(){
  //var array = creaArray2D(10);
  worldMatrix = makeGameMatrix();
  blockMatrix = makeGameMatrix();
  realMatrix = makeGameMatrix();

  worldMatrix[10][7]=1;
  worldMatrix[11][7]=1;
  worldMatrix[12][6]=1;
  worldMatrix[12][7]=1;


  stampaArray(worldMatrix);
}

function stampaArray(array){

  for(var i=0;i<22;i++){
    for(var j=0;j<10;j++){
      realMatrix[i][j]=(worldMatrix[i][j]||blockMatrix[i][j]);
    }
  }

  for(var i=0;i<22;i++){
    for(var j=0;j<10;j++){

      document.getElementById("r"+i+"el"+j).innerText=i;

      if(realMatrix[i][j]==1){
        document.getElementById("r"+i+"el"+j).style.backgroundColor="green";
      }else{
        document.getElementById("r"+i+"el"+j).style.backgroundColor="gray";
      }

      document.getElementById("r"+i+"el"+j).style.width=25;
      document.getElementById("r"+i+"el"+j).style.height=25;
    }
  }
}

function fall(){
  worldFall();
  blockFall();
}
