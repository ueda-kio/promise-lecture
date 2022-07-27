const bad = (x, y) => {
	setTimeout(() => {
		const res = x + y;
		setTimeout(() => {
			console.log(res);
			setTimeout(() => {
				const res2 = x + y;
				setTimeout(() => {
					console.log(res2);
				}, 1000);
			}, 2000);
		}, 1000);
	}, 2000);
};

bad(1, 2);