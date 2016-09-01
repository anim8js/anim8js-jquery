# anim8js-jquery

[anim8](https://github.com/ClickerMonkey/anim8js) your HTML elements with [jQuery](https://jquery.com/)

### Installation

- Bower: `bower install anim8js-jquery`
- Node: `npm install anim8js-jquery`
- Download: [anim8js-jquery](https://raw.githubusercontent.com/ClickerMonkey/anim8js-jquery/master/build/anim8js-jquery.js)

### jQuery Functions

A few functions are available for jQuery which will help you animate jQuery objects:  
- `m8/anim8/animator`: returns an animator instance for the first element in the jQuery object.
- `m8s/anim8s/animators`: returns animators for all elements in the jQuery object.
- `dataPlay`: plays the animation specified in the `data-...` attribute for all elements in the jQuery object and returns a jQuery object which contains only elements that had a valid animation to play.
- `dataQueue`: queues the animation specified in the `data-...` attribute for all elements in the jQuery object and returns a jQuery object which contains only elements that had a valid animation to queue.
- `dataTransition`: transitions into the animation specified in the `data-...` attribute for all elements in the jQuery object and returns a jQuery object which contains only elements that had a valid animation to transition into.

For example if you have the following HTML:

```html
<div id="box" data-intro="fadeIn ~5s" data-outro="flipOutX 0.5s">Hello World!</div>
```

You can play the specified animations with...

```javascript
$('#box').dataPlay('intro').dataQueue('outro');
```
