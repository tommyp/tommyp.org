const loadSvg = async (url) => {
	return fetch(url)
		.then(function (response) {
			return response.text();
		})
		.then(function (raw) {
			return new window.DOMParser().parseFromString(raw, 'image/svg+xml');
		});
};

const select = (root, selector) => {
	return Array.prototype.slice.call(root.querySelectorAll(selector));
};

export { loadSvg, select };
