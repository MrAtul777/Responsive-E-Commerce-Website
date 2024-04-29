

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBAF_0KMsXPQjMDyc-VYso13n0wdZwrFYc",
    authDomain: "auth-form-c0ac2.firebaseapp.com",
    projectId: "auth-form-c0ac2",
    storageBucket: "auth-form-c0ac2.appspot.com",
    messagingSenderId: "142206887002",
    appId: "1:142206887002:web:6ce30d30d84a8aea1a2463"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
        // Signed in 
        console.log(result);
        // Redirect to another page
        window.location.href = "index.html";
    })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
        // Signed in 
        console.log(result);
        // Redirect to another page
        window.location.href = "index.html";
    })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}