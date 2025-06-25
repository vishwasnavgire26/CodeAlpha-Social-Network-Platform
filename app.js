// Firebase Config - replace with your own
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Register Function
function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      db.collection("users").doc(user.uid).set({
        email: user.email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      showUser(user);
    })
    .catch((error) => alert(error.message));
}

// Login Function
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      showUser(userCredential.user);
    })
    .catch((error) => alert(error.message));
}

// Logout Function
function logout() {
  auth.signOut().then(() => {
    document.getElementById("auth-form").style.display = "block";
    document.getElementById("user-info").style.display = "none";
  });
}

// Show User
function showUser(user) {
  document.getElementById("auth-form").style.display = "none";
  document.getElementById("user-info").style.display = "block";
  document.getElementById("user-email").innerText = user.email;
}

// Auto-login on refresh
auth.onAuthStateChanged((user) => {
  if (user) {
    showUser(user);
  }
});
