import { useEffect, useState } from 'react';
import {
	doc,
	getDoc,
	setDoc,
	onSnapshot,
	query,
	where,
	collection,
} from 'firebase/firestore';
import db from '../firebase/config.js';
export const useFetch = (IdProduct, type) => {
	const [loader, setLoader] = useState([]);
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async (IdProduct) => {
			setLoader(true);
			try {
				if (!IdProduct) return false;
				const docRef = doc(db, 'products', IdProduct);
				const docSnap = await getDoc(docRef);
				const data = docSnap.data();
				setData(data);
			} catch (err) {
				console.log(err);
			} finally {
				setLoader(false);
			}
		};

		getData(IdProduct);
	}, [IdProduct]);

	return [data, loader];
};
