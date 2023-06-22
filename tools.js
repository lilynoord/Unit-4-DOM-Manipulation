//Some tools to make tasks I do often slightly easier.

function newElement(tag, html, id, classy, parent) {
	const newEl = document.createElement(tag);
	if (html) {
		newEl.innerHTML = html;
	}
	if (id) {
		newEl.id = id;
	}
	if (classy) {
		newEl.classList.add(classy);
	}
	if (parent) {
		document.querySelector(parent).append(newEl);
	}
	return newEl;
}

/**
 * performs a querySelectorAll on query, then iterates over the resulting list performing action() on each item. The action() function should take the given query items as its only argument.
 * @param {string} query
 * @param {function} action
 */
function doQuery(query, action) {
	let qlist = document.querySelectorAll(query);
	for (let i of qlist) {
		action(i);
	}
	return qlist;
}

export { newElement, doQuery };
