var database = firebase.database();
//ここどれくらいいる?
var dataRef = database.ref("Root/UID_" + 0 + "/CompanyID_" + 0);
dataRef.once("value")
  .then(function (snapshot) {
    //document.getElementById("Mail").innerHTML = snapshot.child("/MEN_" + 0 + "/Mail").val();
  });

var dataRef = database.ref("Root/UID_" + 0);
dataRef.once("value")
  .then(function (snapshot) {
    //document.getElementById("Company").innerHTML = snapshot.child("/CompanyID_" + 0 + "/CompanyName").val();
  });

// ここから挿入処理
function rmDb(x) {
  /*** アカウント情報取得 ***/
  var user = firebase.auth().currentUser;
  if (user != null) {
    var useruid = user.uid;
  }else{
    alert("UserNotLogin");
    console.log("UserNotLogin");
    exit();
  }
  /*** 送信用データ準備 ***/

  /*** 入力情報取得 ***/
  var CID = x;

  /*** 送信処理 ***/

  var database = firebase.database();
  dataRef.once("value").then(function (snapshot) {

    var Asaka = 'Root3/' + useruid + '/Company/'

    var commentsRef = firebase.database().ref(Asaka);

    if(CID!=""){
      var updates = {};
      updates['Root3/' + useruid + '/' + 'MyName'] = '仮置きマイネーム';
      updates[Asaka + CID] = null;

      ons.notification.toast('削除しました', {
        timeout: 2000
      });
    }else{
      ons.notification.toast('削除できませんでした', {
        timeout: 2000
      });
    }




    /*** 消さないで ***/
    return firebase.database().ref().update(updates);
  });
}
