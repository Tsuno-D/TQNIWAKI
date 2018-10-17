//ここからデータ取得
var database = firebase.database();
var dataRef = database.ref("Root/UID_" + 0 + "/CompanyID_" + 0);
dataRef.once("value")
  .then(function (snapshot) {
    document.getElementById("Mail").innerHTML = snapshot.child("/MEN_" + 0 + "/Mail").val();
  });

var dataRef = database.ref("Root/UID_" + 0);
dataRef.once("value")
  .then(function (snapshot) {
    document.getElementById("Company").innerHTML = snapshot.child("/CompanyID_" + 0 + "/CompanyName").val();
  });


// ここから挿入処理
function db() {
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
  var FromInputA = document.getElementById("InputA").value
  var FromInputB = document.getElementById("InputB").value
  var FromInputC = document.getElementById("InputC").value
  var FromInputD = document.getElementById("InputD").value

  /*** 送信処理 ***/

  var database = firebase.database();
  dataRef.once("value").then(function (snapshot) {

    var Asaka = 'Root3/' + useruid + '/Company/'

    var commentsRef = firebase.database().ref(Asaka);
    var preCID = commentsRef.push().key;
    var preMID = commentsRef.push().key;
    var CID = "COM" + preCID;
    var MID = "HUMAN" + preMID;

    if(FromInputA!=""&&FromInputB!=""&&FromInputC!=""&&FromInputD!=""){
      var updates = {};
      updates['Root3/' + useruid + '/' + 'MyName'] = '仮置きマイネーム';
      updates[Asaka + CID + '/CompanyName'] = FromInputA;
      updates[Asaka + CID + '/Jyusho'] = FromInputB;
      updates[Asaka + CID + '/Friends/' + MID + '/Name'] = FromInputC;
      updates[Asaka + CID + '/Friends/' + MID + '/Mail'] = FromInputD;
      alert("登録しました");
    }else{
      alert("なんか足んねぇよなぁ？");
    }




    /*** 消さないで ***/
    return firebase.database().ref().update(updates);
  });
}