//TODO:
// - Timer
// - Controllare sconfitta
// - Rotazione

function startGame(){
  //var array = creaArray2D(10);
  worldMatrix = makeGameMatrix();
  blockMatrix = blockGen();
  realMatrix = makeGameMatrix();

  stampaArray();
}

function stampaArray(){


  for(var i=0;i<22;i++){
    for(var j=0;j<10;j++){

      realMatrix[i][j]=(worldMatrix[i][j]||blockMatrix[i][j]);
      //document.getElementById("r"+i+"el"+j).innerText=i;

      if(realMatrix[i][j]>0)
        document.getElementById("r"+i+"el"+j).style.backgroundColor="green";
      else
        document.getElementById("r"+i+"el"+j).style.backgroundColor="gray";


      document.getElementById("r"+i+"el"+j).style.width=25;
      document.getElementById("r"+i+"el"+j).style.height=25;
    }
  }
}

function controllo(){
  if(!isLineEmpty){
    fineGioco();
  }
}

function fall(){


  worldFall();
  blockFall();
  controllo();

}
