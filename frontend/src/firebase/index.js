import firebase from 'firebase';
import 'firebase/storage';

const Config = {
 apiKey: 'AIzaSyCNqsXJUUqlmddblS3EsoiXKffV0g83CEc',
 authDomain: 'elearningnotification-ef062.firebaseapp.com',
 projectId: 'elearningnotification-ef062',
 storageBucket: 'elearningnotification-ef062.appspot.com',
 messagingSenderId: '513809942484',
 appId: '1:513809942484:web:826b1f64cb3332f7d3f841',
};
// Initialize Firebase
const initailApp = firebase.initializeApp(Config);
const db = initailApp.firestore(initailApp);
export const storageRef = firebase.storage().ref();

export const auth = firebase.auth();
export default db;
