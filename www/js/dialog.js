var _dialog;
  ons.ready(function () {
    ons.createAlertDialog('login.html').then(function(alertDialog) {
      _dialog = alertDialog;
      alertDialog.show();
    });
  });
  function hideDialog() {
      _dialog.hide();
  };

  function pushDialog(String) {
    ons.createAlertDialog(String).then(function(alertDialog) {
      _dialog = alertDialog;
      alertDialog.show();
    });
  };

  var createAlertDialog = function() {
  var dialog = document.getElementById('logoutDialog');
  if (dialog) {
    dialog.show();
  } else {
    ons.createElement('logout.html', { append: true })
      .then(function(dialog) {
        dialog.show();
      });
  }
};
  var hideAlertDialog = function() {
  document
    .getElementById('logoutDialog')
    .hide();
};        
