define(function(require, exports, module) {
	var Engine  = require('famous/core/Engine');
	var Utility = require('famous/utilities/Utility');
	var AppView = require('views/AppView');
	var SlideData = require('data/SlideData');

	var mainContext = Engine.createContext();
	var appView;

	Utility.loadURL(SlideData.getUrl(), function (data) {
		var data = SlideData.parse(data);
		initApp(data);
	});
	document.getElementById('files').addEventListener('change', handleFileSelect, false);

	function initApp(data) {
		appView = new AppView({ data: data });
		mainContext.add(appView);
	}

	function handleFileSelect(event) {
		var files = event.target.files;
		var dataUrls = [];
		var numFileRead = 0;

		Array.prototype.slice.call(files).forEach(function (f, index, array) {
			var reader = new FileReader();
			reader.onloadend = function (event) {
				if (event.target.readyState == FileReader.DONE) {
					dataUrls.push(this.result);
					++numFileRead;

					if (numFileRead == files.length) {
						appView.reset(dataUrls);
					}
				}
			};

			reader.readAsDataURL(f);
		});
	}
});
