var autoFallEnabled = false;
var autofallID = setInterval(function(){loop();},1000);

function loop(){
  if(autoFallEnabled){
    fall();
    stampaArray();
  }else {
    //clearInterval(autofallID);
  }
}

function changeAutofall(){
  //alert("pazzesco");
  if(autoFallEnabled){
    //disattiva autofall
    autoFallEnabled=false;
    document.getElementById('btnAutoFall').innerText="Autofall: OFF";
  }else{
    //attiva autofall
    //autofallID = setInterval(function(){loop();},1000);
    autoFallEnabled=true;
    document.getElementById('btnAutoFall').innerText="Autofall: ON";
  }
}
