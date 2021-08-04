import * as admin from 'firebase-admin';

admin.initializeApp({
 credential: admin.credential.applicationDefault(),
 databaseURL: 'https://elearningnotification-ef062-default-rtdb.firebaseio.com',
});

export default admin;
