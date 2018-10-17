//hamburger menu
      window.fn = {};
    window.fn.open = function() {
      var menu = document.getElementById('menu');
      menu.open();
    };
    window.fn.load = function(page) {
      var content = document.getElementById('content');
      var menu = document.getElementById('menu');
      content
        .load(page)
        .then(menu.close.bind(menu));
    };

    // ここからメニュー表示操作
    document.addEventListener("postchange", function(event) {
        var tab = event.index;  // tab変数にタブindexを格納
        if(tab == 0) {
             console.log("ページ１開かれた");
              document.getElementById("forP1A").style.display ="block";
              document.getElementById("forP1B").style.display ="block";
              //注:ハンバーガーのホームを押したときと同じような見た目になるよう処理しなければならない
        }else if(tab == 1){
             console.log("ページ２開かれた");
             document.getElementById("forP1A").style.display ="none";
             document.getElementById("forP1B").style.display ="none";
        }else if(tab == 2){
              console.log("ページ３開かれた");
              document.getElementById("forP1A").style.display ="none";
              document.getElementById("forP1B").style.display ="none";
        }else{
        };
    });
