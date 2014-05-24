define(function (require, exports, module) {
  var View = require('famous/core/View');
  var Surface = require('famous/core/Surface');
  var Transform = require('famous/core/Transform');
  var StateModifier = require('famous/modifiers/StateModifier');
  var SlideshowView = require('views/SlideshowView')

  function AppView() {
    View.apply(this, arguments)

    var slideshowView = new SlideshowView({
      data: this.options.data
    });
    this.add(slideshowView);
  }

  AppView.prototype = Object.create(View.prototype);
  AppView.prototype.constructor = AppView;

  AppView.DEFAULT_OPTIONS = {
    data: undefined
  };

  module.exports = AppView;
});
