// $(document).ready(function(e) { alert('test!'); });
window.onload = function () {
    var hot_strategy = document.querySelector('#hot_strategy')
    //1.读取文件数据（文件数据保存在fileData中）,result是一个object对象，object的值才是要用的
    $.get('js/strategy_js/data.json', function (result) {
      //2.循环遍历读取到的数据，组合数据 ，形成innerHTML字符串
      var strHTML = ''
      for (var i = 0; i < result.length; i++) {
        strHTML += `
                  <li>
                      <a href="#">
                      <div class="hot_img">
                      <img src="${result[i].img}" alt="Image placeholder" class="img-fluid">
                      </div>
                      <div> 
                      <h3>${result[i].title}</h3>
                      <p class="art">${result[i].content}</p>
                        <span class="meta glyphicon glyphicon-eye-open">${result[i].viewCount}</span>
                       
                      </div>
                    </a>
                                  </li>
                              `
      }
      //3.赋值DOM节点
      document.querySelector('#hot_strategy').innerHTML = strHTML
    })
    //攻略概要数据

    var cont_main = document.querySelector('.cont_main')
    //1.读取文件数据（文件数据保存在fileData中）,result是一个object对象，object的值才是要用的
    $.get('js/strategy_js/data_art.json', function (result) {
      //2.循环遍历读取到的数据，组合数据 ，形成innerHTML字符串
      var strHTML = ''
      for (var i = 0; i < result.length; i++) {
        strHTML += `
          <div class="art_content">
          <div class="art_img">
              <img src="${result[i].img}" alt="">
               </div>
                 <div class="art_list">
                  <ul>
                     <li><a href="#"><h4> ${result[i].title}</h4></a></li>
                      <li><em>${result[i].publicDate}</em></li>
                        
                       </ul>
                          <p class="info">${result[i].content}</p>
                          <span>${result[i].userName}</span>
                          <p class="glyphicon glyphicon-eye-open viewCount">${result[i].viewCount}</p>
                          </div>
                          </div>
                      `
      }

      //3.赋值DOM节点
      document.querySelector('.cont_main').innerHTML = strHTML
    })
  }
