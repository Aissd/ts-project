/**
 * 保留两位小数
 * @param {*} x
 */
 export const toDecimal2 = (x: any) => {
	let f = parseFloat(x);
	if (isNaN(f)) {
		return false;
	}
	f = Math.round(x * 100) / 100;
	let s = f.toString();
	let rs = s.indexOf('.');
	if (rs < 0) {
		rs = s.length;
		s += '.';
	}
	while (s.length <= rs + 2) {
		s += '0';
	}
	return s;
};