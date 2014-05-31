define(function (require, exports, module) {
  var View = require('famous/core/View');
  var Surface = require('famous/core/Surface');
  var Transform = require('famous/core/Transform');
  var StateModifier = require('famous/modifiers/StateModifier');
  var SlideshowView = require('views/SlideshowView')
  var ImageSurface = require('famous/surfaces/ImageSurface');
  var ContainerSurface = require('famous/surfaces/ContainerSurface');

  function AppView() {
    View.apply(this, arguments)

    _createCamera.call(this);
    _createSlideshow.call(this);
  }

  function _createCamera() {
    var camera = new ImageSurface({
      size: [this.options.cameraWidth, true],
      content: 'img/camera.png',
      properties: {
        width: '100%'
      }
    });

    var cameraModifier = new StateModifier({
      origin: [0.5, 0],
      align: [0.5, 0],
      transform: Transform.behind
    });

    this.add(cameraModifier).add(camera);
  }

  function _createSlideshow() {
    if (!this.slideshowContainer) {
      _createSlideshowContainer.call(this);
    }

    var slideshowView = new SlideshowView({
      size: [this.options.slideWidth, this.options.slideHeight],
      data: this.options.data
    });

    this.slideshowView = slideshowView;
    this.slideshowContainer.add(slideshowView);
  }

  function _createSlideshowContainer() {
    var slideshowContainer = new ContainerSurface({
      properties: {
        overflow: 'hidden'
      }
    });

    this.slideshowContainer = slideshowContainer;
    slideshowContainer.context.setPerspective(1000);

    var slideshowModifier = new StateModifier({
      origin: [0.5, 0],
      align: [0.5, 0],
      transform: Transform.translate(0, this.options.slidePosition, 0)
    })

    this.add(slideshowModifier).add(slideshowContainer);
  }

  AppView.prototype = Object.create(View.prototype);
  AppView.prototype.constructor = AppView;
  AppView.prototype.reset = function (data) {
    this.slideshowView.hide();

    this.options.data = data;
    _createSlideshow.call(this);
  }

  var cameraWidth = 0.5 * window.innerHeight;
  var slideWidth = 0.8 * cameraWidth

  AppView.DEFAULT_OPTIONS = {
    data: undefined,
    cameraWidth: cameraWidth,
    slideWidth: slideWidth,
    slideHeight: slideWidth + 40,
    slidePosition: 0.77 * cameraWidth
  };

  module.exports = AppView;
});
