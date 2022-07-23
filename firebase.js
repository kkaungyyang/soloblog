// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBBMjGBwyKYC3TTbeNGj7KFU_01-Mee6T8',
  authDomain: 'solodiary.firebaseapp.com',
  projectId: 'solodiary',
  storageBucket: 'solodiary.appspot.com',
  messagingSenderId: '1025904568899',
  appId: '1:1025904568899:web:2f823103c3b2ffc5d342f6',
  measurementId: 'G-PM538TDKB1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
