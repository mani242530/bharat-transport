export const environment = {
  production: true,
  firebaseConfig : {
    apiKey: "AIzaSyCwryKwaf_MDuvOWE4aHdZzI6zLf0cDcto",
    authDomain: "bharat-transport-2022.firebaseapp.com",
    projectId: "bharat-transport-2022",
    storageBucket: "bharat-transport-2022.appspot.com",
    messagingSenderId: "304908517281",
    appId: "1:304908517281:web:1b2b25f6b0a5456a0795e0",
    measurementId: "G-3QW3JJQ94Z"
  },
};

// DEFAULT RULES
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }

// service cloud.firestore {
//   match /databases/{database}/documents {
//     // Allow public read access, but only content owners can write
//     match /some_collection/{document} {
//       allow read: if true
//       allow create: if request.auth.uid == request.resource.data.author_uid;
//       allow update, delete: if request.auth.uid == resource.data.author_uid;
//     }
//   }
// }