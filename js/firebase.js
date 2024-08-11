const firebaseConfig = {
    apiKey: "AIzaSyAFfF_aAVyTB_Xdp86HihR1pCG3RURPWCI",
    authDomain: "anilmultiservice-afefa.firebaseapp.com",
    databaseURL: "https://anilmultiservice-afefa-default-rtdb.firebaseio.com",
    projectId: "anilmultiservice-afefa",
    storageBucket: "anilmultiservice-afefa.appspot.com",
    messagingSenderId: "871449352407",
    appId: "1:871449352407:web:4f96cf3868274a4cf17892"
    };
        // Initialize Firebase
       if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }else {
    firebase.app(); // if already initialized, use that one
    }