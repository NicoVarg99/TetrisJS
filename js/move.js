function moveLeft(){

  var canMove=true;

  for(i=0;i<22;i++){
    for(j=0;j<10;j++){
      if(j>0){
        //se non ci si trova nello spazio a sinistra
        if(blockMatrix[i][j]==1&&worldMatrix[i][j-1]==1){ //Se lo spazio a sinistra è occupato, NON lascia spostare)
          canMove=false;
        }
      }else {

        if(blockMatrix[i][j]==1)
          canMove=false;
      }

    }
  }

  if(canMove){
    for(i=0;i<22;i++){
      for(j=0;j<9;j++){
        blockMatrix[i][j]=blockMatrix[i][j+1];
      }
      blockMatrix[i][9]=0;
    }
  }

  stampaArray();


}

function moveRight(){

  var canMove=true;

  for(i=0;i<22;i++){
    for(j=0;j<10;j++){
      if(j<9){
        //se non ci si trova nello spazio a destra
        if(blockMatrix[i][j]==1&&worldMatrix[i][j+1]==1){ //Se lo spazio a sinistra è occupato, NON lascia spostare)
          canMove=false;
        }
      }else {
        if(blockMatrix[i][j]==1)
          canMove=false;
        }
    }
  }

  if(canMove){
    for(i=0;i<22;i++){
      for(j=9;j>0;j--){
        blockMatrix[i][j]=blockMatrix[i][j-1];
      }
      blockMatrix[i][0]=0;
    }
  }

  stampaArray();


}
