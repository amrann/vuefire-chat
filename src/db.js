import firebase from "firebase/compat/app";
import "firebase/compat/database";

const config = {
    apiKey: "AIzaSyA23m9SAStq1otZaSqRb_vt0bxli0lN6KM",
    authDomain: "vue-chat-test-2c070.firebaseapp.com",
    projectId: "vue-chat-test-2c070",
    storageBucket: "vue-chat-test-2c070.appspot.com",
    messagingSenderId: "550012291405",
    appId: "1:550012291405:web:889b578ed095eb3aa20f04"
}

const db = firebase.initializeApp(config);
export default db;