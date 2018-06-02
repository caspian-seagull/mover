# mover.js
Moves and rotates elements in window depend on cursor's position
<br />
[Demo on Codepen](http://codepen.io/dead_seagull/pen/bgbYmX "demo")

## usage
```HTML
<!-- Use gsap TweenLite with css plugin for smooth movement -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenLite.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/plugins/CSSPlugin.min.js"></script>

<script src="mover.min.js"></script>

<span class="js-mover" data-offset="30 20 5 5 0.8">
  Content
<span>
```

## data-offset value format
```
"dx dy rx ry speed"
```

* dx - limit offset on x axis
* dy - limit offset on y axis
* rx - limit x-rotation value
* ry - limit y-rotation value
* sp - speed of easeing (default 0.8)

Use 0 to disable offset or easing
```
data-offset="20 0 0 0 0"
```
