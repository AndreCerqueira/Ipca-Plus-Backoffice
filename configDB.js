

const firebaseConfig = {

    apiKey: "AIzaSyAsDIRsGrJ8h3HWeskqFzJjIEHh21cpqi4",
    authDomain: "alunos-27839.firebaseapp.com",
    projectId: "alunos-27839",
    storageBucket: "alunos-27839.appspot.com",
    messagingSenderId: "871983610806",
    appId: "1:871983610806:web:3b2f1d2b284228c1a09f17"

}

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Get Alunos
db.collection("alunos")
    .get()
    .then((snap) => {
        snap.docs.forEach((doc) => {
            document.querySelector("#list").innerHTML += addAlunoToList(doc);
            //addContactoToList(doc);
        })
    })