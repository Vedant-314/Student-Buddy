// console.log(name1);

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
import { getFirestore,collection,addDoc,getDocs,doc } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import { getStorage, ref,uploadBytes,listAll,getDownloadURL } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-storage.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAjwVauPOx_wHysb_YX7_CpQA4SoNlQ6zw",
authDomain: "dscproject-a22c7.firebaseapp.com",
databaseURL: "https://dscproject-a22c7-default-rtdb.firebaseio.com",
projectId: "dscproject-a22c7",
storageBucket: "dscproject-a22c7.appspot.com",
messagingSenderId: "920190771857",
appId: "1:920190771857:web:0b88a50521c1a3e56fd530",
measurementId: "G-REWM6FXEEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage=getStorage()

const analytics = getAnalytics(app);

const db = getFirestore(app);
document.getElementById('uploadbtn').onclick=async function(){  
const check=document.getElementById('content').value;
if(check!="")
{
    const docRef = await addDoc(collection(db, "users"), {
    message:document.getElementById('content').value                    
    });
    document.getElementById('content').value="";
}
else{
    alert("Please enter something!!!");
}
}

document.getElementById('file').addEventListener('change',(event)=>{
    const file=event.target.files[0];
    const storageRef = ref(storage,'pdf/'+file.name);
    document.getElementById('upload').onclick=function(){                  //Uploading the pdf file  
    uploadBytes(storageRef, file).then((snapshot) => {
    alert('Uploaded the file!');    
    });
}
})

const noticeRef = await getDocs(collection(db,"users"));
noticeRef.forEach((doc)=>{
const notice=document.createElement('li');
notice.innerHTML=doc.data().message;
document.getElementById('notice').appendChild(notice);

})

