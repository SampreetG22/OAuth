import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0z0dWHHR5F93hdP7g1Htq5kKbGLa7R7s",
  authDomain: "oauth-83c87.firebaseapp.com",
  projectId: "oauth-83c87",
  storageBucket: "oauth-83c87.appspot.com",
  messagingSenderId: "292932864412",
  appId: "1:292932864412:web:17467d983c1a5871856059",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
