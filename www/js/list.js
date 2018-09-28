function DbForList() {
  /*** アカウント情報取得 ***/
  var user = firebase.auth().currentUser;
  if (user != null) {
    var useruid = user.uid;
  }else{
    console.log("UserNotLogin");
    var companyName = "UserNotLogin";
    exit();
  }

  /*** 取得処理 ***/
  var database = firebase.database();
  var dataRef = database.ref('/Root3/' + useruid + '/Company');
  dataRef.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var companyName = childSnapshot.val().CompanyName;
      var CID = childSnapshot.key;

      var dataRef = database.ref('/Root3/' + useruid + '/Company/'+ CID + '/Friends');
      var love = 1;
      dataRef.once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          //var companyName = childSnapshot.val().CompanyName;
          var childName = childSnapshot.val().Name;
          var childMail = childSnapshot.val().Mail;

          var contentBlock = document.getElementById('contentBlock');
          contentBlock.innerHTML += '<ons-list-item expandable tappable>' + companyName + '<div class="expandable-content"><div onclick="changeDisplay(' + love + ');"><ons-list-item modifier="tappable chevron">' + childName + '</ons-list-item></div><div id="target' + love + '"><ons-list-item>' + childMail + '</ons-list-item></div></div></ons-list-item>';
          document.getElementById("target" + love).style.display = "none";
          love++;
        });
      });
    });
  });
}

/*** リストの表示制御 ***/
function changeDisplay(int) {
  var str = document.getElementById("target" + int);
  if (str.style.display == "block") {
    str.style.display = "none";
  } else {
    str.style.display = "block";
  }
}