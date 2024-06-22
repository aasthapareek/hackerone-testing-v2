import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyI4IdQ0bcmmFBd817lhdNiY8waBL6iJ5rD',
  authDomain: 'taskflow-prod.firebaseapp.com',
  projectId: 'taskflow-prod-284719',
  storageBucket: 'taskflow-prod.appspot.com',
};

export const firebaseApp = initializeApp(firebaseConfig);
