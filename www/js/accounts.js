// アカウント関連処理
var _this;
ons.bootstrap()
  .controller('HelloController', function ($timeout) {
    _this = this;
    this.newMail;
    this.newPassword;
    this.mail;
    this.password;
    this.isLoggedIn;
    this.$timeout = $timeout;

    // 新規ユーザ登録
    this.regi = function () {
      // 新規ユーザーの登録機能
      firebase.auth().createUserWithEmailAndPassword(this.newMail, this.newPassword).catch(function (error) {
        alert(error.message);
      });
    }

    // ログイン
    this.login = function () {
      // 新規ユーザーの登録機能
      firebase.auth().signInWithEmailAndPassword(this.mail, this.password).catch(function (error) {
        alert(error.message);
      });
    }

    // ログアウト
    this.logout = function () {
      pushDialog('login.html');
      firebase.auth().signOut();
    }
  });

ons.ready(function () {
  // 認証状態変更検知
  firebase.auth().onAuthStateChanged(function (user) {
    _this.$timeout(function () {
      if (user) {
        // ログイン状態
        _this.isLoggedIn = true;
        ResetList();
        hideDialog();
        DbForList();
        document.getElementById("start").style.display = "none";

      } else {
        // ログアウト状態
        _this.isLoggedIn = false;
        document.getElementById("start").style.display = "block";
        
      }
    })
  });
});

