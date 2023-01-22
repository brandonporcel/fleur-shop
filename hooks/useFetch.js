import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
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
				// this way to get id
				const dataWithId = { ...data, id: docSnap.id };
				setData(dataWithId);
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
