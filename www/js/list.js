/*************************************************
 *  DbForList()はnewpage1に行きました
 *  WaitDbForList()もそこにあります
 *************************************************/

/*** リストの表示制御(開閉) ***/
function changeDisplay(int) {
  var str = document.getElementById("target_" + int);

  if (str.style.display == "block") {
    str.style.display = "none";
  } else {
    str.style.display = "block";
  }
}

/*** リスト全消し ***/
function ResetList() {
     var contentBlock = document.getElementById('contentBlock');
     contentBlock.innerHTML = "";
}

/*** リストの削除制御(表示上のみ) ***/
/*** DB側はremoveFromDB.js ***/
function removeDisplayC(int) {
  console.log('remove_listC:' + int);
  var str = document.getElementById("Clist_" + int);
  str.style.display = "none";
}

/*** 削除ボタン(開閉) ***/
function toggleRemoveBtns() {
  for(var i=1;i<80;i++){
    var str = document.getElementById("removeBtn" + i);
    if (str.style.display == "block") {
        str.style.display = "none";
    } else {
         str.style.display = "block";
    }
  }
}

/*** 削除確認 ***/
function removeCompanyConfirm(str1,str2,str3) {
          ons.notification.confirm({
            title: 'あらあと',
            messageHTML: str2 + ' を削除してもよろしいですか？',
            buttonLabels: ['ええで', 'やだ'],
            animation: 'default',
            cancelable: true,
            callback: function(index) {
                if(index == -1) {
                    console.log('confirm: cancel');
                } else if(index == 0) {
                    console.log('confirm: yes');
                    removeDisplayC(str3);
                    rmDb(str1);
                } else if(index == 1) {
                    console.log('confirm: no');
                }
            }
        })
};