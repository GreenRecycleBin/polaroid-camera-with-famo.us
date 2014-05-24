define(function (require, exports, module) {
  var View = require('famous/core/View');
  var Surface = require('famous/core/Surface');
  var Transform = require('famous/core/Transform');
  var StateModifier = require('famous/modifiers/StateModifier');
  var SlideView = require('views/SlideView');
  var Lightbox = require('famous/views/Lightbox');

  function SlideshowView() {
    View.apply(this, arguments)

    this.rootModifier = new StateModifier({
      size: this.options.size,
      origin: [0.5, 0],
      align: [0.5, 0]
    });

    this.mainNode = this.add(this.rootModifier);

    _createLightbox.call(this);
  }

  SlideshowView.prototype = Object.create(View.prototype);
  SlideshowView.prototype.constructor = SlideshowView;

  SlideshowView.DEFAULT_OPTIONS = {
    size: [450, 500],
    lightboxOptions: {}
  };

  function _createLightbox() {
    this.lightbox = new Lightbox(this.options.lightboxOptions);
    this.mainNode.add(this.lightbox);
  }

  module.exports = SlideshowView;
});
