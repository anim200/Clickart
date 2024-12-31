// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBll_UcaSW3tgSa3D0NWuMForNrVyOheTw",
  authDomain: "clickart-ab613.firebaseapp.com",
  projectId: "clickart-ab613",
  storageBucket: "clickart-ab613.firebasestorage.app",
  messagingSenderId: "885005586829",
  appId: "1:885005586829:web:efbb62b0ee38409b3cadc4",
  measurementId: "G-W1CJL9MJ50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;