
function makeGameMatrix(){
  return [
    [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]
  ];
}

function isLineEmpty(oneLineArray){
  //Restituisce true se la riga è vuota
  //Restituisce false se un blocco qualsiasi è occupato
  for(var j=0;j<10;j++)
    if(oneLineArray[j]>0)
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


function eliminaRigaBlockMatrix(){
  for(j=21;j>0;j--){
    //console.log("array["+j+"]=array["+(j-1)+"]");
    blockMatrix[j]=blockMatrix[j-1];
  }
  blockMatrix[0]=[0,0,0,0,0,0,0,0,0,0]; //Svuota la prima riga per sicurrezza
}

function eliminaRighePiene(){
  for(var i=21;i>0;i--){
    if(isLineFull(worldMatrix[i])){
      eliminaRiga(i);
      aggiungiPunti(50);
    }

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

  eliminaRighePiene();
  stampaArray(worldMatrix);

}

function blockGen(){
  var num;
  num = Math.floor((Math.random()*7)+1);
  aggiungiPunti(5);

  if(num==1){ //I
    blockType="I";
    blockRotation=1;
    return [
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,1,11,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]
    ];
  }
  if(num==2){ //J
    blockType="J";
    blockRotation=1;
    return [
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,2,0,0,0,0,0],[0,0,0,0,2,12,2,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]
    ];
  }
  if(num==3){ //L
    blockType="L";
    blockRotation=1;
    return [
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,3,13,3,0,0,0],[0,0,0,0,0,0,3,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]
    ];
  }
  if(num==4){ //T
    blockType="T";
    blockRotation=1;
    return [
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,4,14,4,0,0,0],[0,0,0,0,0,4,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]
    ];
  }
  if(num==5){ //O
    blockType="O";
    blockRotation=1;
    return [
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,5,5,0,0,0,0],[0,0,0,0,5,5,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]
    ];
  }
  if(num==6){ //S
    blockType="S";
    blockRotation=1;
    return [
      [0,0,0,0,0,6,6,0,0,0],[0,0,0,0,16,6,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]
    ];
  }
  if(num==7){ //Z
    blockType="Z";
    blockRotation=1;
    return [
      [0,0,0,7,7,0,0,0,0,0],[0,0,0,0,17,7,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]
    ];
  }
}

function blockFall(){

  var block = false;

  for(var i=0;i<21;i++){
    for(var j=0;j<10;j++){
        //Ad ogni elemento di blockMatrix deve corrispondere un pixel vuoto
        //nella riga sottostante di worldMatrix per consentire la caduta
        //Altrimenti unisce blockMatrix e worldMatrix in worldMatrix
        if(
          (blockMatrix[i][j]>0&&worldMatrix[i+1][j]>0) //se l'elemento corrente è pieno e nell'altro è pieno
          ||                                             //o
          (!isLineEmpty(blockMatrix[21]))                //se l'ultima riga non è vuota
        )
          block=true;

    }
  }

  if(block){
    //unisce blockMatrix e worldMatrix

    for(var i=0;i<22;i++){
      for(var j=0;j<10;j++){
        worldMatrix[i][j]=(worldMatrix[i][j]||blockMatrix[i][j]);
      }
    }

    blockMatrix = blockGen();
    stampaArray(worldMatrix);

  }else{
    //fa scorrere blockMatrix
    eliminaRigaBlockMatrix();
  }
}

function rotateOnce(){
  //console.log("rotate");
  //Controlla pixel per pixel e prende le coordinate del punto intorno a quale
  //verrà fatta la rotazione
  var rI,rJ;

  for(var i=0;i<22;i++){
    for(var j=0;j<10;j++){
      if(blockMatrix[i][j]>10)
      {
        rI=i;
        rJ=j;
      }
    }
  }
  var canRotate=true;
  console.log("I="+rI+" J="+rJ);

  if(blockType=="I"&&blockRotation==1){
    if(rI<19){
        if(worldMatrix[rI-1][rJ]>0) canRotate=false;
        if(worldMatrix[rI+1][rJ]>0) canRotate=false;
        if(worldMatrix[rI+2][rJ]>0) canRotate=false;
        if(canRotate){
          blockMatrix[rI][rJ-1]=0;
          blockMatrix[rI][rJ+1]=0;
          blockMatrix[rI][rJ+2]=0;
          blockMatrix[rI-1][rJ]=1;
          blockMatrix[rI+1][rJ]=1;
          blockMatrix[rI+2][rJ]=1;
          blockRotation=2;
        }
      }
    }else if (blockType=="I"&&blockRotation==2){
      if(rJ-2>=0){
        if(worldMatrix[rI][rJ+1]>0) canRotate=false;
        if(worldMatrix[rI][rJ-1]>0) canRotate=false;
        if(worldMatrix[rI+1][rJ-2]>0) canRotate=false;

        if(canRotate){
          blockMatrix[rI][rJ+1]=1;
          blockMatrix[rI][rJ-1]=1;
          blockMatrix[rI][rJ-2]=1;
          blockMatrix[rI-1][rJ]=0;
          blockMatrix[rI+1][rJ]=0;
          blockMatrix[rI+2][rJ]=0;
          blockRotation=3;
        }
      }
    }else if (blockType=="I"&&blockRotation==3) {
      if(rI<21){
        if(worldMatrix[rI-2][rJ]>0) canRotate=false;
        if(worldMatrix[rI-1][rJ]>0) canRotate=false;
        if(worldMatrix[rI+1][rJ]>0) canRotate=false;

        if(canRotate){
          blockMatrix[rI-2][rJ]=1;
          blockMatrix[rI-1][rJ]=1;
          blockMatrix[rI+1][rJ]=1;
          blockMatrix[rI][rJ+1]=0;
          blockMatrix[rI][rJ-1]=0;
          blockMatrix[rI][rJ-2]=0;
          blockRotation=4;
        }
      }
    }else if (blockType=="I"&&blockRotation==4) {
      if(rJ<=7){
        if(worldMatrix[rI][rJ-1]>0) canRotate=false;
        if(worldMatrix[rI][rJ+1]>0) canRotate=false;
        if(worldMatrix[rI][rJ+2]>0) canRotate=false;

        if(canRotate){
          blockMatrix[rI-2][rJ]=0;
          blockMatrix[rI-1][rJ]=0;
          blockMatrix[rI+1][rJ]=0;
          blockMatrix[rI][rJ-1]=1;
          blockMatrix[rI][rJ+1]=1;
          blockMatrix[rI][rJ+2]=1;
          blockRotation=1;
        }
      }
    }




    stampaArray();
}
