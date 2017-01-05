var canvas, input, content;

(function(){
  //Creo un oggetto 'c'
  var c = {};
    var frame=document.getElementsByTagName("canvas")[0]; //frame è il primo tag canvas all'interno della pagina
    var frameContext = frame.getContext("2d");

    var view = document.createElement("canvas"); //crea un secondo elemento canvas
    var viewContext = view.getContext("2d");

    //Frame Width, Frame height, view width, view height
    var frameWidth;
    var frameHeight;
    var viewWidth;
    var viewHeight;
    var _scale = 1;

    c.frame = frame;
    c.view = view;
    c.ctx = viewContext;

    c.flip = function(){
      frameContext.clearRect(0,0,frameWidth,frameHeight); //Pulisce un area rettangolare da 0,0 alla grandezza della frame
      frameContext.drawImage(this.view, 0,0,frameWidth,frameHeight)
      this.ctx.clearRect(0,0,viewWidth,viewHeight);
    }

    Object.defineProperty(c,"width", {
      set: function(w){
        this.view.width = w;
        this.scale = _scale;
      },
      get: function(){
        return viewWidth;
      }
    });
    Object.defineProperty(c,"height", {
      set: function(h){
        this.view.height = h;
        this.scale = _scale;
      },
      get: function(){
        return viewHeight;
      }
    });
    Object.defineProperty(c,"scale", {
      set: function(s){
        _scale=s;
        frameWidth=this.frame.width*_scale;
        frameHeight=this.frame.width*_scale;
        viewWidth=this.view.width;
        viewHeight=this.view.height;

        frameContext["imageSmoothingEnabled"] = false; //Disattivo imageSmoothingEnabled per un aspetto migliore

        //XXX deprecato?
        /*
        //Disattivo imageSmoothingEnabled anche per i principali browser per una maggiore sicurezza
        ["o","ms","moz","webkit"].forEach(function(eng){
          frameContext[eng+"ImageSmoothingEnabled"] = false;
        })
        */
      },
      get: function(){
        return _scale;
      }
    });

    c.scale=_scale;


    return c;
})();
