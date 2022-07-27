/**
 * 1秒後に100万円くれる関数
 * @returns {Promise<number>}
 */
const returnPromise = () => {
	// 時間のかかる処理をPromiseで包んで返す！
	return new Promise();
};

const promise = returnPromise(); // 抽選前の宝くじが渡される
promise.then();