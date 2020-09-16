window.onload = function () {
    
    var question = document.querySelector('#question')
    $.get('js/data.json', function (result) {
        //2.循环遍历读取到的数据，组合数据 ，形成innerHTML字符串
        var strHTML = ''
        for (var i = 0; i < result.length; i++) {
            strHTML += `<h3>${result[i].question}</h3>
                        <div class="dian col-lg-12" id="">
                            <div class="ques1"><img src="img/shijian.png" alt=""><Span>${result[i].data}</span></div>
                            <div  class="ques2"><img src="img/xinxi.png" alt=""><span>${result[i].inform}</span></div>
                            <div  class="ques3"><img src="img/1.png" alt=""><span>${result[i].look}</span></div>
                            <div  class="ques4"><img src="img/dian1.png" onclick = "tu(this)" alt=""><span class='dian3'>${result[i].good}</span></div>
                            
                        </div>
                        <div class="ping col-lg-12" id="" >
                                <h4>${result[i].user} </h4>
                                <p>${result[i].content}</p>
                            </div>
                        `
        }
        //3.赋值DOM节点
        question.innerHTML = strHTML
    })
    var hot = document.querySelector('.hot')
    $.get('js/data.json', function (result) {
        //2.循环遍历读取到的数据，组合数据 ，形成innerHTML字符串
        var strHTML1 = ''
        for (var i = 0; i < result.length; i++) {
            strHTML1 += ` <ul>
                            <li  class="a3"><img src="img/question.png" alt="">${result[i].question}</li>
                            <li  class="a1"><img src="img/shijian.png" alt=""><Span>${result[i].data}</Span></li>
                            <li class="a2"><img src="img/dian1.png" alt="" ><span>${result[i].good}</span></li>
                            <hr>
                          </ul>
                        `
        }
        //3.赋值DOM节点
        hot.innerHTML = strHTML1
    })
}

function tu(obj) {
    if ($(obj).attr('src') == 'img/community_img/dian1.png') {
        $(obj).attr("src", "img/community_img/dian.png")
        num = parseInt(obj.nextElementSibling.innerHTML)
        num++
        obj.nextElementSibling.innerHTML = num
    }
    else if ($(obj).attr('src') == 'img/community_img/dian.png') {
        $(obj).attr("src", "img/community_img/dian1.png")
        num = parseInt(obj.nextElementSibling.innerHTML)
        num--
        obj.nextElementSibling.innerHTML = num
    }
}
