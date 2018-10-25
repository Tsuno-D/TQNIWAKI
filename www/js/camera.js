function shoot() {
  window.navigator.camera.getPicture((imageData) => {
    // JPG 画像を Data URL 形式で受け取るので、Data URL のヘッダを付けて img 要素の src 属性値に設定して画面表示させてみる
    document.getElementById('photo').src = 'data:image/jpeg;base64,' + imageData;
    imageData2 = imageData;
    g_api();
    // imageData2 = document.getElementById('photo').src;
    // console.log(imageData2);
  }, (error) => {
    // カメラを起動後、キャンセルしてカメラ画面を閉じた場合などにもエラーコールバックに入るので、ココでは特にハンドリングしないでおく
    console.log(error);
  }, {
      // 各種設定
      // 画像の取得元
      sourceType: window.navigator.camera.PictureSourceType.CAMERA,
      // 画質 : 0 〜 100 (高画質)
      quality: 80,
      // 撮影後の写真のサイズ指定
      targetWidth: 640,
      targetHeight: 480,
      // JPG でエンコードする
      encodingType: window.navigator.camera.EncodingType.JPEG,
      // 撮影した画像の編集をさせない
      allowEdit: false,
      // 撮影した画像をどんな形式で受け取るか : Data URL で受け取ることにする
      destinationType: window.navigator.camera.DestinationType.DATA_URL
    });
}