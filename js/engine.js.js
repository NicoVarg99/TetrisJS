var canvas;
var input;
var content;

(function() {

	canvas = (function() {
		//Creo un oggetto 'c' (ossia il canvas)
		var c = {};

			var frame = document.getElementsByTagName("canvas")[0],
			frameContext = frame.getContext("2d"),

			view = document.createElement("canvas"),
			viewContext = view.getContext("2d"),

			frameWidth, frameHeight, viewWidth, viewHeight, _scale = 1;


		c.frame = frame;
		c.view = view;
		c.viewContext = viewContext;

		c.flip = function() {
			frameContext.clearRect(0, 0, frameWidth, frameHeight);
			frameContext.drawImage(this.view, 0, 0, frameWidth, frameHeight);

			this.viewContext.clearRect(0, 0, viewWidth, viewHeight);
		}

		Object.defineProperty(c, "width", {
			set: function(w) {
				this.view.width = w;
				this.scale = _scale;
			},
			get: function() {
				return viewWidth;
			}
		});
		Object.defineProperty(c, "height", {
			set: function(h) {
				this.view.height = h;
				this.scale = _scale;
			},
			get: function() {
				return viewHeight;
			}
		});

		Object.defineProperty(c, "scale", {
			set: function(s) {
				_scale = s;
				frameWidth = this.frame.width = viewWidth * _scale;
				frameHeight = this.frame.height = viewHeight * _scale;
				viewWidth = this.view.width;
				viewHeight = this.view.height;


				frameContext["imageSmoothingEnabled"] = false;

			},
			get: function() {
				return _scale;
			}
		});

		c.scale = _scale;

		return c;
	})();





})();
