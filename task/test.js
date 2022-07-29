const A = (x, y) => {
	console.log('計算中...');
	return new Promise((resolve) => {
		setTimeout(() => {
			const result = x + y;
			resolve(result);
		}, 2000);
	});
};

const B = (number) => {
	console.log('出力中...');
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(number);
			resolve();
		}, 1000);
	})
};

const C = async () => {
	const result = await A(1, 2);
	await B(result);
	return Promise.resolve();
};

(async () => {
	await C();
	C();
})();