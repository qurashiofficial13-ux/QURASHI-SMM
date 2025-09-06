// Firebase Config (replace with your keys)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const adminEmails = ["akkiller612@gmail.com"];

document.getElementById('googleBtn').addEventListener('click', async () => {
  try {
    const res = await auth.signInWithPopup(provider);
    const user = res.user;
    if (adminEmails.includes(user.email)) {
      window.location.href = "admin.html";
    } else {
      window.location.href = "dashboard.html";
    }
  } catch (err) {
    alert(err.message);
  }
});
