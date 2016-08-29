
/**
 * Extend the clone function to remove the attribute which stores the animator ID so clones get new animators.
 *
 * @return {jQuery}
 */
var cloner = jQuery.fn.clone;

jQuery.fn.clone = function()
{
  var clone = cloner.apply( this, arguments );

  clone.removeAttr( Factories.dom.elementAttribute );

  return clone;
};
