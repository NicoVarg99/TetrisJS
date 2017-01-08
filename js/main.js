//TODO:
// - Timer
// - Controllare sconfitta
// - Rotazione
// - Prossimo blocco

var punteggio;
var blockType;
var blockRotation;

function startGame(){
  //var array = creaArray2D(10);
  worldMatrix = makeGameMatrix();
  blockMatrix = blockGen();
  realMatrix = makeGameMatrix();
  punteggio = 0;
  document.getElementById("points").innerText = punteggio;
  autoFallEnabled = true;
  stampaArray();
  document.getElementById("gameover").style.display="none";
}

function stampaArray(){


  for(var i=2;i<22;i++){
    for(var j=0;j<10;j++){

      realMatrix[i][j]=(worldMatrix[i][j]||blockMatrix[i][j]);
      //document.getElementById("r"+i+"el"+j).innerText=i;
      var rm=realMatrix[i][j];

      if(rm>10)
        rm-=10;

      if(rm==0)
        document.getElementById("r"+i+"el"+j).style.backgroundColor="#232323";
      if(rm==1) //I - azzurro
        document.getElementById("r"+i+"el"+j).style.backgroundColor="#00f0f0";
      if(rm==2) //J - blu
        document.getElementById("r"+i+"el"+j).style.backgroundColor="#0000f0";
      if(rm==3) //L - arancione
        document.getElementById("r"+i+"el"+j).style.backgroundColor="#f0a000";
      if(rm==4) //T - viola
        document.getElementById("r"+i+"el"+j).style.backgroundColor="#a000f0";
      if(rm==5) //O - giallo
        document.getElementById("r"+i+"el"+j).style.backgroundColor="#f0f000";
      if(rm==6) //S - verde
        document.getElementById("r"+i+"el"+j).style.backgroundColor="#00f000";
      if(rm==7) //Z - rosso
        document.getElementById("r"+i+"el"+j).style.backgroundColor="#f00000";



      document.getElementById("r"+i+"el"+j).style.width=25;
      document.getElementById("r"+i+"el"+j).style.height=25;
    }
  }
}

function fineGioco(){
  console.log("Fine");
  autoFallEnabled = false;
  document.getElementById("gameover").style.display="block";
}


function fall(){
  worldFall();

  if(!isLineEmpty(worldMatrix[2])){
    fineGioco();
  }else{
    blockFall();
    aggiungiPunti(1);
  }
}

function aggiungiPunti(punti){
  punteggio+=punti;
  document.getElementById("points").innerText=punteggio;
}
