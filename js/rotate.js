function ShapeIrotate(rI,rJ){

  console.log("I="+rI+" J="+rJ);

  if(blockRotation==1){
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
    }else if(blockRotation==2){
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
    }else if (blockRotation==3) {
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
    }else if (blockRotation==4) {
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

}

function ShapeJrotate(rI,rJ){

  if(blockRotation==1){
    if(rI<21){
        if(worldMatrix[rI-1][rJ+1]>0) canRotate=false;
        if(worldMatrix[rI-1][rJ]>0) canRotate=false;
        if(worldMatrix[rI+1][rJ]>0) canRotate=false;

        if(canRotate){
          blockMatrix[rI][rJ+1]=0;
          blockMatrix[rI][rJ-1]=0;
          blockMatrix[rI-1][rJ-1]=0;
          blockMatrix[rI-1][rJ+1]=2;
          blockMatrix[rI-1][rJ]=2;
          blockMatrix[rI+1][rJ]=2;
          blockRotation=2;
        }
      }
    }else if(blockRotation==2){
      if(rJ<9&&rJ>0){
        if(worldMatrix[rI][rJ+1]>0) canRotate=false;
        if(worldMatrix[rI][rJ-1]>0) canRotate=false;
        if(worldMatrix[rI+1][rJ+1]>0) canRotate=false;

        if(canRotate){
          blockMatrix[rI][rJ+1]=2;
          blockMatrix[rI][rJ-1]=2;
          blockMatrix[rI+1][rJ+1]=2;

          blockMatrix[rI-1][rJ+1]=0;
          blockMatrix[rI-1][rJ]=0;
          blockMatrix[rI+1][rJ]=0;
          blockRotation=3;
        }
      }
    }else if (blockRotation==3) {
      if(true){
        if(worldMatrix[rI+1][rJ]>0) canRotate=false;
        if(worldMatrix[rI+1][rJ-1]>0) canRotate=false;
        if(worldMatrix[rI-1][rJ]>0) canRotate=false;

        if(canRotate){
          blockMatrix[rI][rJ+1]=0;
          blockMatrix[rI][rJ-1]=0;
          blockMatrix[rI+1][rJ+1]=0;

          blockMatrix[rI+1][rJ]=2;
          blockMatrix[rI+1][rJ-1]=2;
          blockMatrix[rI-1][rJ]=2;
          blockRotation=4;
        }
      }
    }else if (blockRotation==4) {
      if(rJ<9){
        if(worldMatrix[rI][rJ+1]>0) canRotate=false;
        if(worldMatrix[rI-1][rJ-1]>0) canRotate=false;
        if(worldMatrix[rI-1][rJ-1]>0) canRotate=false;

        if(canRotate){
          blockMatrix[rI][rJ+1]=2;
          blockMatrix[rI][rJ-1]=2;
          blockMatrix[rI-1][rJ-1]=2;
          blockMatrix[rI-1][rJ]=0;
          blockMatrix[rI+1][rJ]=0;
          blockMatrix[rI+1][rJ-1]=0;

          blockRotation=1;
        }
      }
    }

}

function ShapeLrotate(rI,rJ){

  if(blockRotation==1){
    if(rI<21){
        if(worldMatrix[rI+1][rJ]>0) canRotate=false;
        if(worldMatrix[rI+1][rJ+1]>0) canRotate=false;
        if(worldMatrix[rI-1][rJ]>0) canRotate=false;

        if(canRotate){
          blockMatrix[rI][rJ-1]=0;
          blockMatrix[rI][rJ+1]=0;
          blockMatrix[rI-1][rJ+1]=0;

          blockMatrix[rI+1][rJ]=3;
          blockMatrix[rI+1][rJ+1]=3;
          blockMatrix[rI-1][rJ]=3;
          blockRotation=2;
        }
      }
    }else if(blockRotation==2){
      if(rJ<9&&rJ>0){
        if(worldMatrix[rI][rJ+1]>0) canRotate=false;
        if(worldMatrix[rI][rJ-1]>0) canRotate=false;
        if(worldMatrix[rI+1][rJ-1]>0) canRotate=false;

        if(canRotate){
          blockMatrix[rI][rJ+1]=3;
          blockMatrix[rI][rJ-1]=3;
          blockMatrix[rI+1][rJ-1]=3;

          blockMatrix[rI+1][rJ]=0;
          blockMatrix[rI+1][rJ+1]=0;
          blockMatrix[rI-1][rJ]=0;
          blockRotation=3;
        }
      }
    }else if (blockRotation==3) {
      if(true){
        if(worldMatrix[rI-1][rJ-1]>0) canRotate=false;
        if(worldMatrix[rI-1][rJ]>0) canRotate=false;
        if(worldMatrix[rI+1][rJ+1]>0) canRotate=false;

        if(canRotate){
          blockMatrix[rI][rJ+1]=0;
          blockMatrix[rI][rJ-1]=0;
          blockMatrix[rI+1][rJ-1]=0;

          blockMatrix[rI-1][rJ-1]=3;
          blockMatrix[rI-1][rJ]=3;
          blockMatrix[rI+1][rJ]=3;
          blockRotation=4;
        }
      }
    }else if (blockRotation==4) {
      if(rJ<9){
        if(worldMatrix[rI][rJ+1]>0) canRotate=false;
        if(worldMatrix[rI][rJ-1]>0) canRotate=false;
        if(worldMatrix[rI-1][rJ+1]>0) canRotate=false;

        if(canRotate){
          blockMatrix[rI][rJ+1]=3;
          blockMatrix[rI][rJ-1]=3;
          blockMatrix[rI-1][rJ+1]=3;

          blockMatrix[rI-1][rJ]=0;
          blockMatrix[rI+1][rJ]=0;
          blockMatrix[rI-1][rJ-1]=0;

          blockRotation=1;
        }
      }
    }

}

function ShapeTrotate(rI,rJ){

  if(blockRotation==1){
    if(rI<21){
        if(worldMatrix[rI-1][rJ]>0) canRotate=false;//su
        if(worldMatrix[rI+1][rJ]>0) canRotate=false;//giù
        if(worldMatrix[rI][rJ-1]>0) canRotate=false;//sinistra

        if(canRotate){
          blockMatrix[rI+1][rJ]=4;
          blockMatrix[rI-1][rJ]=4;
          blockMatrix[rI][rJ+1]=4;
          blockMatrix[rI][rJ-1]=4;

          blockMatrix[rI][rJ+1]=0;

          blockRotation=2;
        }
      }
    }else if(blockRotation==2){
      if(rJ<9&&rJ>0){
        if(worldMatrix[rI-1][rJ]>0) canRotate=false;//su

        if(worldMatrix[rI][rJ+1]>0) canRotate=false;//destra
        if(worldMatrix[rI][rJ-1]>0) canRotate=false;//sinistra

        if(canRotate){
          blockMatrix[rI+1][rJ]=4;
          blockMatrix[rI-1][rJ]=4;
          blockMatrix[rI][rJ+1]=4;
          blockMatrix[rI][rJ-1]=4;

          blockMatrix[rI+1][rJ]=0;

          blockRotation=3;
        }
      }
    }else if (blockRotation==3) {
      if(true){
        if(worldMatrix[rI-1][rJ]>0) canRotate=false;//su
        if(worldMatrix[rI+1][rJ]>0) canRotate=false;//giù
        if(worldMatrix[rI][rJ+1]>0) canRotate=false;//destra


        if(canRotate){
          blockMatrix[rI+1][rJ]=4;
          blockMatrix[rI-1][rJ]=4;
          blockMatrix[rI][rJ+1]=4;
          blockMatrix[rI][rJ-1]=4;

          blockMatrix[rI][rJ-1]=0;

          blockRotation=4;
        }
      }
    }else if (blockRotation==4) {
      if(rJ<9&&rJ>0){

        if(worldMatrix[rI+1][rJ]>0) canRotate=false;//giù
        if(worldMatrix[rI][rJ+1]>0) canRotate=false;//destra
        if(worldMatrix[rI][rJ-1]>0) canRotate=false;//sinistra

        if(canRotate){
          blockMatrix[rI+1][rJ]=4;
          blockMatrix[rI-1][rJ]=4;
          blockMatrix[rI][rJ+1]=4;
          blockMatrix[rI][rJ-1]=4;

          blockMatrix[rI-1][rJ]=0;

          blockRotation=1;
        }
      }
    }

}

function ShapeSrotate(rI,rJ){

  if(blockRotation==1){
    if(rI<21){
        if(worldMatrix[rI+1][rJ-1]>0) canRotate=false;
        if(worldMatrix[rI][rJ-1]>0) canRotate=false;

        if(canRotate){
          blockMatrix[rI-1][rJ-1]=0;
          blockMatrix[rI-1][rJ]=0;
          blockMatrix[rI-1][rJ+1]=0;
          blockMatrix[rI][rJ-1]=0;
          blockMatrix[rI][rJ+1]=0;
          blockMatrix[rI+1][rJ-1]=0;
          blockMatrix[rI+1][rJ]=0;
          blockMatrix[rI+1][rJ+1]=0;

          blockMatrix[rI+1][rJ]=6;
          blockMatrix[rI][rJ-1]=6;
          blockMatrix[rI-1][rJ-1]=6;

          blockRotation=2;
        }
      }
    }else if(blockRotation==2){
      if(rJ<9&&rJ>0){
        if(worldMatrix[rI-1][rJ]>0) canRotate=false;
        if(worldMatrix[rI-1][rJ+1]>0) canRotate=false;

        if(canRotate){
          blockMatrix[rI-1][rJ-1]=0;
          blockMatrix[rI-1][rJ]=0;
          blockMatrix[rI-1][rJ+1]=0;
          blockMatrix[rI][rJ-1]=0;
          blockMatrix[rI][rJ+1]=0;
          blockMatrix[rI+1][rJ-1]=0;
          blockMatrix[rI+1][rJ]=0;
          blockMatrix[rI+1][rJ+1]=0;

          blockMatrix[rI][rJ-1]=6;
          blockMatrix[rI-1][rJ+1]=6;
          blockMatrix[rI-1][rJ]=6;

          blockRotation=3;
        }
      }
    }else if (blockRotation==3) {
      if(true){
        if(worldMatrix[rI][rJ+1]>0) canRotate=false;
        if(worldMatrix[rI+1][rJ+1]>0) canRotate=false;

        if(canRotate){
          blockMatrix[rI-1][rJ-1]=0;
          blockMatrix[rI-1][rJ]=0;
          blockMatrix[rI-1][rJ+1]=0;
          blockMatrix[rI][rJ-1]=0;
          blockMatrix[rI][rJ+1]=0;
          blockMatrix[rI+1][rJ-1]=0;
          blockMatrix[rI+1][rJ]=0;
          blockMatrix[rI+1][rJ+1]=0;

          blockMatrix[rI][rJ+1]=6;
          blockMatrix[rI+1][rJ+1]=6;
          blockMatrix[rI-1][rJ]=6;

          blockRotation=4;
        }
      }
    }else if (blockRotation==4) {
      if(rJ<9){
        if(worldMatrix[rI+1][rJ]>0) canRotate=false;
        if(worldMatrix[rI+1][rJ-1]>0) canRotate=false;

        if(canRotate){
          blockMatrix[rI-1][rJ-1]=0;
          blockMatrix[rI-1][rJ]=0;
          blockMatrix[rI-1][rJ+1]=0;
          blockMatrix[rI][rJ-1]=0;
          blockMatrix[rI][rJ+1]=0;
          blockMatrix[rI+1][rJ-1]=0;
          blockMatrix[rI+1][rJ]=0;
          blockMatrix[rI+1][rJ+1]=0;

          blockMatrix[rI+1][rJ]=6;
          blockMatrix[rI+1][rJ-1]=6;
          blockMatrix[rI][rJ+1]=6;

          blockRotation=1;
        }
      }
    }

}



function ShapeZrotate(rI,rJ){

  if(blockRotation==1){
    if(rI<21){

        if(worldMatrix[rI-1][rJ+1]>0) canRotate=false;
        if(worldMatrix[rI-1][rJ]>0) canRotate=false;

        if(canRotate){
          blockMatrix[rI-1][rJ-1]=0;
          blockMatrix[rI-1][rJ]=0;
          blockMatrix[rI-1][rJ+1]=0;
          blockMatrix[rI][rJ-1]=0;
          blockMatrix[rI][rJ+1]=0;
          blockMatrix[rI+1][rJ-1]=0;
          blockMatrix[rI+1][rJ]=0;
          blockMatrix[rI+1][rJ+1]=0;

          blockMatrix[rI][rJ+1]=7;
          blockMatrix[rI-1][rJ+1]=7;
          blockMatrix[rI+1][rJ]=7;

          blockRotation=2;
        }
      }
    }else if(blockRotation==2){
      if(rJ<9&&rJ>0){

        if(worldMatrix[rI-1][rJ]>0) canRotate=false;
        if(worldMatrix[rI-1][rJ+1]>0) canRotate=false;

        if(canRotate){
          blockMatrix[rI-1][rJ-1]=0;
          blockMatrix[rI-1][rJ]=0;
          blockMatrix[rI-1][rJ+1]=0;
          blockMatrix[rI][rJ-1]=0;
          blockMatrix[rI][rJ+1]=0;
          blockMatrix[rI+1][rJ-1]=0;
          blockMatrix[rI+1][rJ]=0;
          blockMatrix[rI+1][rJ+1]=0;

          blockMatrix[rI][rJ-1]=7;
          blockMatrix[rI+1][rJ+1]=7;
          blockMatrix[rI+1][rJ]=7;

          blockRotation=3;
        }
      }
    }else if (blockRotation==3) {
      if(true){

        if(worldMatrix[rI-1][rJ]>0) canRotate=false;
        if(worldMatrix[rI][rJ-1]>0) canRotate=false;
        if(worldMatrix[rI+1][rJ-1]>0) canRotate=false;


        if(canRotate){
          blockMatrix[rI-1][rJ-1]=0;
          blockMatrix[rI-1][rJ]=0;
          blockMatrix[rI-1][rJ+1]=0;
          blockMatrix[rI][rJ-1]=0;
          blockMatrix[rI][rJ+1]=0;
          blockMatrix[rI+1][rJ-1]=0;
          blockMatrix[rI+1][rJ]=0;
          blockMatrix[rI+1][rJ+1]=0;

          blockMatrix[rI-1][rJ]=7;
          blockMatrix[rI][rJ-1]=7;
          blockMatrix[rI+1][rJ-1]=7;

          blockRotation=4;
        }
      }
    }else if (blockRotation==4) {
      if(rJ<9){
        if(worldMatrix[rI][rJ-1]>0) canRotate=false;
        if(worldMatrix[rI-1][rJ]>0) canRotate=false;
        if(worldMatrix[rI-1][rJ+1]>0) canRotate=false;

        if(canRotate){
          blockMatrix[rI-1][rJ-1]=0;
          blockMatrix[rI-1][rJ]=0;
          blockMatrix[rI-1][rJ+1]=0;
          blockMatrix[rI][rJ-1]=0;
          blockMatrix[rI][rJ+1]=0;
          blockMatrix[rI+1][rJ-1]=0;
          blockMatrix[rI+1][rJ]=0;
          blockMatrix[rI+1][rJ+1]=0;

          blockMatrix[rI-1][rJ]=7;
          blockMatrix[rI-1][rJ-1]=7;
          blockMatrix[rI][rJ+1]=7;

          blockRotation=1;
        }
      }
    }

}
