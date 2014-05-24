define(function (require, exports, module) {
  var View = require('famous/core/View');
  var Surface = require('famous/core/Surface');
  var Transform = require('famous/core/Transform');
  var StateModifier = require('famous/modifiers/StateModifier');

  function SlideshowView() {
    View.apply(this, arguments)
  }

  SlideshowView.prototype = Object.create(View.prototype);
  SlideshowView.prototype.constructor = SlideshowView;

  SlideshowView.DEFAULT_OPTIONS = {};

  module.exports = SlideshowView;
});
