(async () => {
	const returnPromise = () => {
		console.log('抽選中...');
		return new Promise((resolve) => {
			setTimeout(() => {
				const prize = 1_000_000;
				resolve(prize);
			}, 1000);
		});
	};

	const prize = await returnPromise(); // ここで抽選結果を待つ
	console.log(prize);
})();

// async awaitでのrejectの拾い方
(async () => {
	const returnPromise = () => {
		console.log('抽選中...');
		return new Promise((_, reject) => {
			setTimeout(() => {
				reject('ハズレ');
			}, 1000);
		});
	};

	try {
		const prize = await returnPromise(); // ここで抽選結果を待つ
	} catch (e) {
		console.log(e);
	}
})();
