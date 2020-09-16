window.onload=function(){
    let ul = document.querySelector("#nav-ul")
    var navBox = document.querySelector("#nav-box")
    let currentIndex = 0

    let dotLis = document.querySelectorAll(".dotLi")
    let dotLen = dotLis.length

    //小圆点
    function dotStyle(currentIndex) {
        for (var i = 0; i < dotLen; i++) {
            dotLis[i].className = "dotLi"
        }
        dotLis[currentIndex].className = "dotLi current"
    }

    //自动轮播
    var timer = null
    clearInterval(timer)
    timer = setInterval(function () {
        currentIndex++
        if (currentIndex == 4) {
            ul.style.left = 0 + 'px'
            currentIndex = 1
        }
        if (currentIndex == 3) {
            dotStyle(0)
        } else {
            dotStyle(currentIndex)
        }
        myAnimation1(ul, -260 * currentIndex)
    }, 2000)

    //鼠标移入，停止自动轮播
    navBox.addEventListener("mouseover", function () {
        clearInterval(timer)
    })

    //鼠标离开 继续轮播
    navBox.addEventListener("mouseout", function () {
        clearInterval(timer)
        timer = setInterval(function () {
            currentIndex++
            if (currentIndex == 4) {
                ul.style.left = 0 + 'px'
                currentIndex = 1
            }
            if (currentIndex == 3) {
                dotStyle(0)
            } else {
                dotStyle(currentIndex)
            }
            myAnimation1(ul, -260 * currentIndex)
        }, 2000)
    })
    //點下拉
    var num
    var la = document.querySelectorAll('.la img')
    var right = document.querySelector('.right p')
    for(var i = 0 ; i < la.length ; i++){
        la[i].onclick = function () {
            if(this.parentNode.parentNode.firstElementChild.offsetHeight ==100){
                
            this.parentNode.parentNode.firstElementChild.style.height = '200px'
            }else if(this.parentNode.parentNode.firstElementChild.offsetHeight ==200){
                this.parentNode.parentNode.firstElementChild.style.height = '100px'
            }
          
        }
    }
    
// 父文本框
var E = window.wangEditor
editor2 = new E('#divEditor')  
//使用web服务器接收图片
//原理：
//1.把图片上传到服务器指定的目录中
//2.把图片在服务器上的路径返回
//3.在wangeditor编辑器中插入图片（把返回的图片路径设置到img标签的src中，自动执行）
//4.上传到服务器
editor2.customConfig.uploadImgServer = 'http://localhost:3000/uploadImg'     //upload是服务器接口
editor2.create()
}
function upload(){
alert(editor2.txt.html())
// $.ajax({
//     url:'/commit',
//     data:{},
//     type:'post',
//     success:function(results){

//     }
// })
$.post('/commit',{data:editor2.txt.html()},function(results){
    alert('上传成功！')
})
}