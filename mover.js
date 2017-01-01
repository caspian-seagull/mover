(function initMovers() {
  let movers = [].slice.call(document.querySelectorAll(".js-mover"));
  
  function getPositionRatio(event) {
    let Mx = event.clientX;
    let My = event.clientY;

    let kx = (Mx - CENTER.x) / CENTER.x;
    let ky = (My - CENTER.y) / CENTER.y;

    return {
      x: parseFloat( kx.toFixed(3) ),
      y: parseFloat( ky.toFixed(3) )
    }
  }
  
  function setMoverStyle(mover, ratio) {
    let data = mover.dataset.offset.split(" ");

    let params = {
      dx: data[0] * ratio.x,
      dy: data[1] * ratio.y,
      rx: data[2] * ratio.x,
      ry: data[3] * ratio.y 
    };

    let transformString = "perspective(1000px) ";

    params.dx !== 0 ? transformString += `translateX(${params.dx}px) ` : null;
    params.dy !== 0 ? transformString += `translateY(${params.dy}px) ` : null;
    params.rx !== 0 ? transformString += `rotateX(${params.ry}deg) ` : null;
    params.ry !== 0 ? transformString += `rotateY(${params.rx}deg) ` : null;

    if (TweenMax) {
       TweenMax.to(mover, 0.8, {css:{transform: transformString}})
    } else {
       mover.style.transform = transformString;
       mover.style.webkitTransform = transformString;
    }
  }
  
  document.body.addEventListener("mousemove", (e) => {
    let mouseRatio = getPositionRatio(e);
    movers.forEach( mover => setMoverStyle(mover, mouseRatio) );
  });
})();
