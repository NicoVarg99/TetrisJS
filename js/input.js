document.onkeydown = function(evt) {
    evt = evt || window.event;

    console.log(evt.keyCode);
    /*
    if (evt.keyCode == 32) {
        console.log("Spazio");
    }
   */
   if(autoFallEnabled){
      if (evt.keyCode == 37) {
        moveLeft();
        stampaArray();
      }

      if (evt.keyCode == 40) {
          fall();
          stampaArray();
      }

      if (evt.keyCode == 39) {
        moveRight();
        stampaArray();
      }

      if (evt.keyCode == 38) {
          //console.log("Su");
        rotateOnce();
      }
    }

    if (evt.keyCode == 82) {
        //console.log("r");
        fineGioco();
        startGame();
    }

    if (evt.keyCode == 80) {
        //console.log("p");
        changeAutoFall();
    }

};
