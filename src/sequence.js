
/**
 * Wraps every character with a span and the class sequenced and returns a jquery
 * element containing all wrapped characters.
 *
 * @return {jQuery}
 */
jQuery.fn.sequence = function()
{
  this.each(function()
  {
    jQuery(this).html( jQuery(this).wrapCharacters('div', 'class="sequenced"') );
  });

  return this.find('.sequenced');
};

/**
 * Wraps every character in ever element in the jQuery object with a tag.
 * If an element already only has one character it remains untouched.
 *
 * @param  {string} tagName
 * @param  {string} attributes
 * @return {string} attributes
 */
jQuery.fn.wrapCharacters = function(tagName, attributes)
{
  var tagBegin = '<' + tagName + (typeof attributes === 'string' ? ' ' + attributes : '') + '>';
  var tagEnd = '</' + tagName + '>';
  var html = '';

  jQuery(this).contents().each(function()
  {
    // Is this a text node?
    if (this.nodeType === 3)
    {
      // Break up node wrapping each character
      var text = this.data;

      if (text.length > 1)
      {
        // Collapse whitespaces
        var previousSpace = false;
        for (var i = 0; i < text.length; i++)
        {
          var space = text[i] <= ' ';
          if (!space || !previousSpace)
          {
            html += tagBegin + text[i] + tagEnd;
          }
          previousSpace = space;
        }
      }
      else
      {
        html += text;
      }
    }
    else
    {
      // Not a text node!
      var outer = this.outerHTML;
      // If there are children, we need to recursively break them down
      if (this.firstChild)
      {
        // Grab the element tag and attributes manually.
        var start = 0;
        var quotes = false;
        while (start < outer.length)
        {
          var c = outer[start++];
          if (c === '"' || c === "'")
          {
            quotes = !quotes;
          }
          else if (c === '\\')
          {
            start++;
          }
          else if (c === '>' && !quotes)
          {
            break;
          }
        }
        html += outer.substring(0, start) + jQuery(this).wrapCharacters(tagName) + '</' + this.tagName.toLowerCase() + '>';
      }
      // No child nodes, just append outer HTML.
      else
      {
        html += outer;
      }
    }
  });

  return html;
};
