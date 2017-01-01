(function initMovers() {
    var movers = [].slice.call(document.querySelectorAll('.js-mover'));
    var getPositionRatio = function getPositionRatio(event) {
        var W_WIDTH  = window.innerWidth;
        var W_HEIGHT = window.innerHeight;

        var CENTER = {x: W_WIDTH/2, y: W_HEIGHT/2};
        
        var Mx = event.clientX;
        var My = event.clientY;
        var kx = (Mx - CENTER.x) / CENTER.x;
        var ky = (My - CENTER.y) / CENTER.y;
        return {
            x: parseFloat(kx.toFixed(3)),
            y: parseFloat(ky.toFixed(3))
        };
    };
    var setMoverStyle = function setMoverStyle(mover, ratio) {
        var data = mover.dataset.offset.split(' ');
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
        if (TweenMax) {
            TweenMax.to(mover, 0.8, { css: { transform: transformString } });
        } else {
            mover.style.transform = transformString;
            mover.style.webkitTransform = transformString;
        }
    };
    var _this = this;
    window.addEventListener('mousemove', function (e) {
        var mouseRatio = getPositionRatio(e);
        movers.forEach(function (mover) {
            return setMoverStyle(mover, mouseRatio);
        });
    });
}());
