import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDXgn_mZbc022jHh-l240qASzs7ColAKVM",
    authDomain: "discount-tinder.firebaseapp.com",
    databaseURL: "https://discount-tinder.firebaseio.com",
    projectId: "discount-tinder",
    storageBucket: "discount-tinder.appspot.com",
    messagingSenderId: "601911245594",
    appId: "1:601911245594:web:5f964457370dfd39990aa3",
    measurementId: "G-PPSBF55ZFB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;