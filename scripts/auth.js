// ================= FIREBASE CONFIG =================
const firebaseConfig = {
  apiKey: "AIzaSyCqaLp0H7dGVDWB8kFPMDNnbeYCcs4LufI",
  authDomain: "bitlinux-419e6.firebaseapp.com",
  projectId: "bitlinux-419e6",
  storageBucket: "bitlinux-419e6.firebasestorage.app",
  messagingSenderId: "177680359131",
  appId: "1:177680359131:web:7822d4063d3da2037c76fe"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ================= SIGN IN / SIGN UP HANDLERS =================
// Example: Google Sign-In
function googleSignIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => {
      // Redirect after login
      const params = new URLSearchParams(window.location.search);
      const redirect = params.get("redirect") || "../index.html";
      window.location.href = redirect;
    })
    .catch(error => {
      console.error("Error signing in:", error.message);
      alert("Failed to sign in. Try again!");
    });
}

// ================= SIGN OUT =================
function signOutUser() {
  auth.signOut().then(() => {
    window.location.href = "../index.html";
  });
}

// ================= PROTECTED LINKS =================
document.querySelectorAll('.protected-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetPage = link.getAttribute('data-target');

    auth.onAuthStateChanged(user => {
      if (user) {
        // Already logged in → navigate
        if (window.location.pathname.endsWith(targetPage)) {
          window.location.reload(); // optional
        } else {
          window.location.href = targetPage;
        }
      } else {
        // Not logged in → redirect to sign-up
        window.location.href = `../pages/sign-up.html?redirect=${encodeURIComponent(targetPage)}`;
      }
    });
  });
});

// ================= PAGE PROTECTION (OPTIONAL) =================
function protectPage() {
  auth.onAuthStateChanged(user => {
    if (!user) {
      // Redirect if user not logged in
      window.location.href = "../pages/sign-up.html?redirect=" + encodeURIComponent(window.location.pathname);
    }
  });
        }
