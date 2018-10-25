// This is a JavaScript file

var c_uid;
function chat_click(c_ele) {
  // console.log(c_ele.id);
  c_uid = c_ele.id;
  // setTimeout(ch,500);
}
// function ch(){
//   document.getElementById("enemy").innerHTML = c_user;
// }

document.addEventListener("postchange", function (event) {
  var tab = event.index;  // tab変数にタブindexを格納
  if (tab == 1) {
    var my_uid = firebase.auth().currentUser.uid;
    var c_friendRef = firebase.database().ref("/ChatRoot/" + my_uid + "/friends/")
    var c_friends = document.getElementById('c_friends');
    c_friends.innerHTML = "";
    // console.log("newページ2開かれた");
    c_friendRef.once('value', function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        c_uid = childSnapshot.key;
        var c_name = childSnapshot.val().name;
        var c_comp = childSnapshot.val().CompanyName;
        if (my_uid != childSnapshot.key) {
          c_friends.innerHTML += "<p id=" + c_uid + " class=\"chat_user\" onclick=\"chat_click(this),fn.load('page4.html')\">" + c_name + "</p><small>"+c_comp+"</small><hr>";
        }
      });
    });


  } else {
  };
});