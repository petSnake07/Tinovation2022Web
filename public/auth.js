const button = document.querySelector("#auth-button");
button.addEventListener("click", e => {
    signInOnClick();
});

const config = {
    apiKey: "AIzaSyDl2uFhvZ3i7qiP2OS1WPax12lRrrITqi0",
    authDomain: "campus-map-2022.firebaseapp.com",
    projectId: "campus-map-2022",
    storageBucket: "campus-map-2022.appspot.com",
    messagingSenderId: "854998946250",
    appId: "1:854998946250:web:a3dd176bb207a47d5d7f33",
    measurementId: "G-WZ8WX3BXWW"
};
firebase.initializeApp(config);


const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');



// const auth = getAuth();
// auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

provider.setCustomParameters({
    'login_hint': 'user@example.com'
});



const auth = firebase.auth();
function signInOnClick() {
    auth.signInWithPopup(provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = firebase.auth.GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}


auth.getRedirectResult()
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = firebase.auth.GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = firebase.auth.GoogleAuthProvider.credentialFromError(error);
        // ...
    });
