// Import the required Firebase functions
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getFirestore, collection, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';

// Initialize Firebase using the global config
const app = initializeApp(window.firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  try {
    await addDoc(collection(db, 'users'), {
      name,
      email,
      createdAt: serverTimestamp(),
    });
    
    alert('Thank you for signing up!');
    document.getElementById('signup-form').reset();
  } catch (error) {
    console.error('Error saving data:', error);
    alert('Error saving data. Please try again.');
  }
});
