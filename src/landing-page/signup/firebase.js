// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8Lf3u1hbbBKzGJ9CEjtq6rCyr7bXWkdw",
  authDomain: "zerodha-clone-6a690.firebaseapp.com",
  projectId: "zerodha-clone-6a690",
  storageBucket: "zerodha-clone-6a690.appspot.com",
  messagingSenderId: "1054965890546",
  appId: "1:1054965890546:web:05ef445544b0c8ff2dff6b",
  measurementId: "G-XDE0LJHTDX"
};

const app = initializeApp(firebaseConfig);

// ✅ auth ko properly export karo
export const auth = getAuth(app);

