
/**
 * Adds the m8, anim8, and animator functions to jQuery. An instance of anim8.Animator will be returned.
 *
 * @return {anim8.Animator}
 */
jQuery.fn.m8 = jQuery.fn.anim8 = jQuery.fn.animator = function()
{
  return anim8( this[0] );
};

/**
 * Adds the m8s, anim8s, animators functions to jQuery. An instance of anim8.Animators will be returned.
 *
 * @return {anim8.Animators}
 */
jQuery.fn.m8s = jQuery.fn.anim8s = jQuery.fn.animators = function()
{
  return anim8s( this.get() );
};
