//서비스워커 스크립트가 설치되고 활성화 되었는지 install,activate이벤트로 확인
self.addEventListener("install",function (){
    //self: WorkerGlobalScope인터페이스의 읽기 전용 프로퍼티, WorkerGlobalScope자체의 참조값 반환
    console.log("fcm sw install..");
    self.skipWaiting();
})
self.addEventListener("activate",function(){
    console.log("fcm sw activate")
})

self.addEventListener("push", function (e) {
  console.log("push")
    if (!e.data.json()) return;
  
    const resultData = e.data.json().notification;
    const notificationTitle = resultData.title;
    const notificationOptions = {
      body: resultData.body,
    //   icon: resultData.image, // 웹 푸시 이미지는 icon
      tag: resultData.tag,
      ...resultData,
    };
    
    console.log("push: ",{resultData,notificationTitle,notificationOptions})
    
    self.registration.showNotification(notificationTitle, notificationOptions);
  });

  self.addEventListener("notificationclick", function (event) {
    console.log("notification click");
    const url = "/";
    event.notification.close();
    event.waitUntil(clients.openWindow(url));
  });