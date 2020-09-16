//匀速移动
function myAnimation1(obj, target) {
    var speed
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        var offsetLeft = obj.offsetLeft
        speed = (target - offsetLeft) > 0 ? 50 : -50
        if (Math.abs(offsetLeft - target) < 50) {
            clearInterval(obj.timer)
            obj.style.left = target + 'px'//考虑到有无定位
        } else {
            obj.style.left = (offsetLeft + speed) + 'px'
        }
    }, 50)
}