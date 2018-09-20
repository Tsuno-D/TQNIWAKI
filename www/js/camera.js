//camera :page2
function shoot(){
    /* var option = {
        saveToPhotoAlbum: true //撮影後端末に保存
    };*/

    //カメラを起動
    navigator.camera.getPicture(onSuccess, onError);
    /* navigator.camera.getPicture(onSuccess, onError, option); */
        
    //成功時に呼び出されるコールバック関数
    function onSuccess(imageURI){
        document.querySelector("#photo").src = imageURI;
    }
        
    //失敗時に呼び出されるコールバック関数
    function onError(message){
        alert("Error:" + message);
    }
}