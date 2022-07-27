/**
 * 抽選番号を受け取り宝くじ（Promise）を返す
 * @param {number} num 抽選番号
 * @returns {Promise<number>} 宝くじの結果
 */
const getTAKARAKUJI = (num) => {
	return new Promise((resolve, reject) => {
		// 当選したらresolve()を実行
		// はずれたらreject()を実行
	});
};

const number = 0;
const promise = getTAKARAKUJI(number);