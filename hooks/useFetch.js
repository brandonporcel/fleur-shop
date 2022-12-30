import { useEffect, useState } from 'react';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import db from '../firebase/config.js';
export const useFetch = (IdProduct) => {
	console.log(IdProduct, 'asdasdas');
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async (IdProduct) => {
			try {
				if (!IdProduct) return false;
				const docRef = doc(db, 'products', IdProduct);
				const docSnap = await getDoc(docRef);

				const data = docSnap.data();

				setData(data);
			} catch (err) {
				console.log(err);
			}
		};

		getData(IdProduct);
	}, [IdProduct]);

	return [data];
};
