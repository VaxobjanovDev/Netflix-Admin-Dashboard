import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "netflixclone-a1a43.firebaseapp.com",
  projectId: "netflixclone-a1a43",
  storageBucket: "netflixclone-a1a43.appspot.com",
  messagingSenderId: "81549405163",
  appId: process.env.APP_ID,
  measurementId: "G-HDL5DZQX47",
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export default storage

