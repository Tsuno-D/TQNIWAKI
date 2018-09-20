//ここからデータ取得
  var database = firebase.database();
  var dataRef = database.ref("Root/UID_" + 0 + "/CompanyID_" + 0);
  dataRef.once("value")
  .then(function(snapshot) {
    document.getElementById("Mail").innerHTML = snapshot.child("/MEN_"+ 0 + "/Mail").val();
  });


// ここから挿入処理
  function db() {
        /*** アカウント情報取得 ***/
        var user = firebase.auth().currentUser;
        if (user != null) {
            var useruid = user.uid;
        }
        /*** 送信用データ準備 ***/

        /*** 入力情報取得 ***/
        var FromInputA = document.getElementById("InputA").value
        var FromInputB = document.getElementById("InputB").value

        /*** 送信処理 ***/
        //var commentsRef = firebase.database().ref('product');
        //commentsRef.push({uid: useruid, A:FromInputA, B:FromInputB});

        var database = firebase.database();
        dataRef.once("value").then(function (snapshot) {
        var CID = 'CompanyID(test)';
        var updates = {};
        updates['/Root2/' + useruid + '/MyName'] = 'テスト文字列';    
        updates['/Root2/' + useruid + '/' + CID + '/CompanyName'] = FromInputA;
        updates['/Root2/' + useruid + '/' + CID + '/Jyusho'] = FromInputB;    
        return firebase.database().ref().update(updates);
        });
  }



