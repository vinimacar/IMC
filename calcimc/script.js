<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js"></script>
<script>
    const firebaseConfig = {
        apiKey: "SUA-API-KEY",
        authDomain: "seu-projeto.firebaseapp.com",
        databaseURL: "https://seu-projeto.firebaseio.com",
        projectId: "seu-projeto",
        storageBucket: "seu-projeto.appspot.com",
        messagingSenderId: "SENDER-ID",
        appId: "APP-ID"
    };
    
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
</script>
