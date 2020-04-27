import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAAWxenN54c9GCJbY4BMGbx1O3Y7Lysmsk",
    authDomain: "ctp-project-e10d6.firebaseapp.com",
    databaseURL: "https://ctp-project-e10d6.firebaseio.com",
    projectId: "ctp-project-e10d6",
    storageBucket: "ctp-project-e10d6.appspot.com",
    messagingSenderId: "982658446825",
    appId: "1:982658446825:web:6620a5f6ed63ce95ff4778",
    measurementId: "G-4Q7L6VQW3R"
  };

  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;