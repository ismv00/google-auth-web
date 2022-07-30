import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
 
const firebaseConfig = {
  apiKey: "AIzaSyDt9Dr7N8vr2RpIjYqeIC2EuHqRyJnzbds",
  authDomain: "auth-yt-2cff8.firebaseapp.com",
  projectId: "auth-yt-2cff8",
  storageBucket: "auth-yt-2cff8.appspot.com",
  messagingSenderId: "563484447324",
  appId: "1:563484447324:web:f0de60827153cf1d440c99"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);