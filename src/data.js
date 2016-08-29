

/**
 * Plays the animation specified in the given data attribute.
 *
 * The returned jQuery object is reduced to the elements that had a valid animation attribute.
 *
 * @param  {string} animationAttribute
 * @param  [boolean] all
 * @param  [boolean] cache
 * @return {this}
 * @see anim8.Animator.play
 */
jQuery.fn.dataPlay = function( animationAttribute, all, cache )
{
  var options = {};

	return this.filter(function()
  {
		var animationText = jQuery(this).data( animationAttribute );

		if ( animationText )
		{
      var animation = $animation( animationText, options, cache );

      if ( animation !== false )
      {
        anim8( this ).play( animation, options, all );

        return true;
      }
		}

		return false;
	});
};

/**
 * Queues the animation specified in the given data attribute.
 *
 * The returned jQuery object is reduced to the elements that had a valid animation attribute.
 *
 * @param  {string} animationAttribute
 * @param  [boolean] cache
 * @return {this}
 * @see anim8.Animator.queue
 */
jQuery.fn.dataQueue = function( animationAttribute, cache )
{
  var options = {};

	return this.filter(function()
  {
		var animationText = jQuery(this).data( animationAttribute );

		if ( animationText )
		{
      var animation = $animation( animationText, options, cache );

      if ( animation !== false )
      {
        anim8( this ).queue( animation );

        return true;
      }
		}

		return false;
  });
};

/**
 * Transitions into the animation specified in the given data attribute.
 *
 * The returned jQuery object is reduced to the elements that had a valid animation attribute.
 *
 * @param  {string} animationAttribute
 * @param  {number} transitionTime
 * @param  {number} transitionDelta
 * @param  {string|function} transitionEasing
 * @param  {boolean} cache
 * @return {this}
 */
jQuery.fn.dataTransition = function( animationAttribute, transition, all, cache )
{
  var options = {};

  return this.filter(function()
  {
    var animationText = jQuery(this).data( animationAttribute );

    if ( animationText )
    {
      var animation = $animation( animationText, options, cache );

      if ( animation !== false )
      {
        anim8( this ).transition( transition, animation, options, all );

        return true;
      }
    }

    return false;
  });
};
