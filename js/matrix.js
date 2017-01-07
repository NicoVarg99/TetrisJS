
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

  eliminaRighePiene();
  stampaArray(worldMatrix);

}

function blockGen(){
  var num;
  num = Math.floor((Math.random()*7)+1);

  if(num==1){ //I
    return [
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]
    ];
  }
  if(num==2){ //J
    return [
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]
    ];
  }
  if(num==3){ //L
    return [
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,1,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]
    ];
  }
  if(num==4){ //T
    return [
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]
    ];
  }
  if(num==5){ //O
    return [
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0],[0,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]
    ];
  }
  if(num==6){ //S
    return [
      [0,0,0,0,0,1,1,0,0,0],[0,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]
    ];
  }
  if(num==7){ //Z
    return [
      [0,0,0,1,1,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
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
