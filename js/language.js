var language = fa_IR;

t = function (str) {
	if (typeof(language[str]) !== 'undefined') {
		return language[str];
	} else {
		return str;
	}
}