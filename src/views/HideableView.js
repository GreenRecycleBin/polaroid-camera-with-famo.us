define(function (require, exports, module) {
  var View = require('famous/core/View');

  function HideableView() {
    View.apply(this, arguments)
  }

  HideableView.prototype = Object.create(View.prototype);
  HideableView.prototype.constructor = HideableView;
  HideableView.prototype.hide = function () {
    this.options.visible = false;
  }
  HideableView.prototype.render = function () {
    return this.options.visible ? this._node.render() : undefined;
  }

  module.exports = HideableView;
});
