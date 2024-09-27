import firebase from 'firebase/compat/app';  //importo il database

import 'firebase/compat/auth'; //importo il servizio di autenticazione

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEZv7JCzqg7hwtv1TkCouJyXlFi5R6qKQ",
  authDomain: "e-commerce-react-99806.firebaseapp.com",
  projectId: "e-commerce-react-99806",
  storageBucket: "e-commerce-react-99806.appspot.com",
  messagingSenderId: "600762150492",
  appId: "1:600762150492:web:6307eaff094263acfc8099"
};

//inizializzo firebase
firebase.initializeApp(firebaseConfig);

//esporto il servizio di autenticazione per richiamarlo tramite destrutturazione dove necessario
export const auth = firebase.auth();

export default firebase