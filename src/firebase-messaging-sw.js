// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId:import.meta.env.VITE_PROJECTID ,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET ,
  messagingSenderId:import.meta.env.VITE_MESSAGEING_SENDERID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging=getMessaging(app);

// const analytics = getAnalytics(app);
// console.log(analytics)
async function requestPermission(){
    console.log("권한 요청중");

    //권한 요청
    const permission = await Notification.requestPermission();
    if (permission === "denied") {
      console.log("알림 권한 허용 안됨");
      return;
    }
    //else
    console.log("알림 권한이 허용됨");

    const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
      });
      
    if(token)console.log("token is here ");
    else console.log("Can not get Token");

    onMessage(messaging,(payload)=>{
        console.log("메세지가 도착함",payload);
    });
}
requestPermission();