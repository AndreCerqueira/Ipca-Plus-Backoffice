

const firebaseConfig = {

    apiKey: "AIzaSyDZF70GwG11FSEs8PeOmdOb44RkNtSnJFY",
    authDomain: "ipcaplus.firebaseapp.com",
    projectId: "ipcaplus",
    storageBucket: "ipcaplus.appspot.com",
    messagingSenderId: "209455028652",
    appId: "1:209455028652:web:0fb8ae7e3b3f07bf7f4209",
    measurementId: "G-5KNGLDZ30R"

}

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Get Alunos
db.collection("event")
    .get()
    .then((snap) => {
        snap.docs.forEach((doc) => {
            console.log(doc.data())
            document.querySelector("#list").innerHTML += addEventToList(doc);
            //addContactoToList(doc);
        })
    })


