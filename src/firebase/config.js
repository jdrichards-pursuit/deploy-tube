import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBrdX6lK55D2Mu2Xoeites2WA5qhPVM38U',
  authDomain: 'pursuit-tube-data.firebaseapp.com',
  projectId: 'pursuit-tube-data',
  storageBucket: 'pursuit-tube-data.appspot.com',
  messagingSenderId: '827808900617',
  appId: '1:827808900617:web:b7077796c62d71a254fad8'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
