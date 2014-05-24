define(function (require, exports, module) {
  var View = require('famous/core/View');
  var Surface = require('famous/core/Surface');
  var Transform = require('famous/core/Transform');
  var StateModifier = require('famous/modifiers/StateModifier');

  function SlideView() {
    View.apply(this, arguments)

    this.rootModifier = new StateModifier({
      size: this.options.size
    });

    this.mainNode = this.add(this.rootModifier);

    _createBackground.call(this);
  }

  SlideView.prototype = Object.create(View.prototype);
  SlideView.prototype.constructor = SlideView;

  SlideView.DEFAULT_OPTIONS = {
    size: [400, 450]
  };

  function _createBackground() {
    var background = new Surface({
      properties: {
        backgroundColor: '#FFFFF5',
        boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.5)'
      }
    });

    this.mainNode.add(background);
  }

  module.exports = SlideView;
});
