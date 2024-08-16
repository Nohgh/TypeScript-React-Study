/**브라우저에게 알림 권한을 요청 */
function requestPushPermisson():void{
    console.log("권한 요청중");
    Notification.requestPermission().then((permission)=>{
        if(permission ==="granted") console.log("알림 권한이 허용된");
        else console.log("알림 권한 차단됨"); //차단: denied
        //주의: 프로그래밍 방식으로 다시 오픈하는 방식 금지되어있음(사용자가 브라우저 설정으로 열어야함)
    });
}
export default requestPushPermisson