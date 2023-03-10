const formatPrice = (price) =>
	new Intl.NumberFormat('es-AR', {
		style: 'currency',
		currency: 'ARS',
	}).format(parseFloat(price).toFixed(2));

const capitalizeEachWord = (sentence) => {
	const arr = typeof sentence === 'string' && sentence.split(' ');
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	const str2 = typeof sentence === 'string' && arr.join(' ');
	return str2;
};
const getRandomEmoji = () => {
	const string =
		'π³π¨π€πββοΈπΈπ΄π¬π₯°π¬π­ππ₯Ίπ€ππβ€πΈππ€­πΌπ₯°β π©π§ββοΈπ§ββοΈπ§ββοΈπ§ββοΈπ¨βπ¦―ππ€πππππππππ';
	const emojis = string.split(/.*?/u);

	return emojis[~~(Math.random() * emojis.length)];
};
export { formatPrice, capitalizeEachWord, getRandomEmoji };
