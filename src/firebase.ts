import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCgbjknNQSYADIziPPX6lhUOmt69Gjh0Lw',
  authDomain: 'autoglass-68487.firebaseapp.com',
  projectId: 'autoglass-68487',
  storageBucket: 'autoglass-68487.appspot.com',
  messagingSenderId: '88854900432',
  appId: '1:88854900432:web:5f9aeb433520713f5ff8d5',
  measurementId: 'G-SLKKRKK4EZ'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp
