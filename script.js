
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjwVauPOx_wHysb_YX7_CpQA4SoNlQ6zw",
  authDomain: "dscproject-a22c7.firebaseapp.com",
  projectId: "dscproject-a22c7",
  storageBucket: "dscproject-a22c7.appspot.com",
  messagingSenderId: "920190771857",
  appId: "1:920190771857:web:0b88a50521c1a3e56fd530",
  measurementId: "G-REWM6FXEEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider(app);

signin.addEventListener('click', (e) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // alert(user.displayName)
      var name1=user.displayName;
      if (user) {
        window.location = "https://vedant-314.github.io/Student-Buddy/StudentP.html";
        alert("Welcome " + user.displayName)

      }

      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert(errorMessage)
      // ...
    });

})
