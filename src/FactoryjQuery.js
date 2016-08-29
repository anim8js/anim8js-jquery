/**
 * A factory for jQuery objects.
 */
function FactoryJQuery()
{
  this.priority = 10;
}

Class.extend( FactoryJQuery, Factory,
{
  /**
   * Determines whether the given subject is valid for this factory to create Animators for.
   *
   * @param  {any} subject
   * @return {boolean}
   */
  is: function(subject)
  {
    return typeof jQuery !== 'undefined' && subject instanceof jQuery;
  },

  /**
   * Returns an animator given a subject.
   *
   * @param  {any} subject
   * @return {anim8.Animator}
   */
  animatorFor: function(subject)
  {
    return Factories.dom.animatorFor( subject[0] );
  },

  /**
   * Destroys the animator by unlinking the animator from the subject.
   *
   * @param  {anim8.Animator} animator
   */
  destroy: function(animator)
  {
    return Factories.dom.destroy( animator );
  },

  /**
   * Explodes the given subject to an array of Animators and adds them to the given array.
   *
   * @param  {any} subject
   * @param  {array} animators
   * @return {void}
   */
  animatorsFor: function(subject, animators)
  {
    subject.each(function()
    {
      var animator = Factories.dom.animatorFor( this );

      if (animator)
      {
        animators.push( animator );
      }
    });
  },

  /**
   * Returns the attribute descriptor for the given attribute.
   *
   * @param  {String} attr
   * @return {Object}
   */
  attribute: function(attr)
  {
    return Factories.dom.attribute( attr );
  }

});
