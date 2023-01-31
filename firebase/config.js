import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: 'fleur-shop.firebaseapp.com',
	projectId: 'fleur-shop',
	storageBucket: 'fleur-shop.appspot.com',
	messagingSenderId: '593276135632',
	appId: '1:593276135632:web:ab8106485154bef11f16d5',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
