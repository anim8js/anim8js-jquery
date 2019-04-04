// UMD (Universal Module Definition)
(function (root, factory)
{
  if (typeof define === 'function' && define.amd) // jshint ignore:line
  {
    // AMD. Register as an anonymous module.
    define(['anim8js', 'jquery'], function(anim8, jQuery) { // jshint ignore:line
      return factory(anim8, jQuery, root);
    });
  }
  else if (typeof module === 'object' && module.exports)  // jshint ignore:line
  {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('anim8js'), require('jquery'), global);  // jshint ignore:line
  }
  else
  {
    // Browser globals (root is window)
    factory(root.anim8, root.jQuery, root);
  }
}(this, function(anim8, jQuery, window)
{

  var anim8s = anim8.anim8s;
  var Factory = anim8.Factory;
  var Class = anim8.Class;
  var Factories = anim8.Factories;

  var $animation = anim8.animation;
