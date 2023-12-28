const firebaseConfig = {
    apiKey: "AIzaSyDyoTTfIHIKRg7mMFF85xC-hOvLbN6GyC4",
    authDomain: "photo-social-mern-de603.firebaseapp.com",
    projectId: "photo-social-mern-de603",
    storageBucket: "photo-social-mern-de603.appspot.com",
    messagingSenderId: "31142422280",
    appId: "1:31142422280:web:958c22f8be19e16fc42ebd",
    measurementId: "G-MXTSJLWY06"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
export { db, auth, storage }