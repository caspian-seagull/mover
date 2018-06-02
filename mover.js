(function initMovers() {
  var movers = [].slice.call(document.querySelectorAll('.js-mover'));
  var TweenLite = window.TweenLite;

  var getPositionRatio = function getPositionRatio(event) {
    var CENTER = {x: window.innerWidth/2, y: window.innerHeight/2};
    var kx = (event.clientX - CENTER.x) / CENTER.x;
    var ky = (event.clientY - CENTER.y) / CENTER.y;
    return {
      x: parseFloat(kx.toFixed(3)),
      y: parseFloat(ky.toFixed(3))
    };
  };
  
  var setMoverStyle = function setMoverStyle(mover, ratio) {
    var data = mover.dataset.offset.split(' ');  
    var speed = data[4] || 0.8;
    var params = {
      dx: data[0] * ratio.x,
      dy: data[1] * ratio.y,
      rx: data[2] * ratio.x,
      ry: data[3] * ratio.y
    };
    
    var transformString = 'perspective(1000px) ';
    params.dx !== 0 ? transformString += 'translateX(' + params.dx + 'px) ' : null;
    params.dy !== 0 ? transformString += 'translateY(' + params.dy + 'px) ' : null;
    params.rx !== 0 ? transformString += 'rotateX(' + params.ry + 'deg) ' : null;
    params.ry !== 0 ? transformString += 'rotateY(' + params.rx + 'deg) ' : null;

    window.requestAnimationFrame(function() {
      if (TweenLite) {
        TweenLite.to(mover, speed, { css: { transform: transformString } });
      } else {
        mover.style.transform = transformString;
        mover.style.webkitTransform = transformString;        
      }
    });
  };
  
  window.addEventListener('mousemove', function (e) {
    var mouseRatio = getPositionRatio(e);
    movers.forEach(function(mover) {
      return setMoverStyle(mover, mouseRatio);
    });
  });
}());