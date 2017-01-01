# mover.js
Moves and rotates elements in window depend on cursor's position
<br />
[Demo on Codepen](http://codepen.io/dead_seagull/pen/bgbYmX "demo")

## usage
```HTML
<script src="move.min.js"></script>

<span class="js-mover" data-offset="30 20 5 5">
  Content
<span>
```

## data-offset value format
```
"dx dy rx ry"
```

* dx - limit offset on x axis
* dy - limit offset on y axis
* rx - limit x-rotation value
* ry - limit y-rotation value

Use 0 to disable offset
```
data-offset="20 0 0 0"
```
