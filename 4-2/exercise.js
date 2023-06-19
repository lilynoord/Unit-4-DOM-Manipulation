/**
 * Write the code necessary to do the following:
 * 1. Select the section with an id of container without using querySelector.\
 * 2. Select the section with an id of container using querySelector.
 * 3. Select all of the list items with a class of “second”.
 * 4. Select a list item with a class of third, but only the list item inside of the ol tag.
 * 5. Give the section with an id of container the text “Hello!”.
 * 6. Add the class main to the div with a class of footer.
 * 7. Remove the class main on the div with a class of footer.
 * 8. Create a new li element.
 * 9. Give the li the text “four”.
 * 10. Append the li to the ul element.
 * 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
 * 12. Remove the div with a class of footer
 */

function updateElementText(tag, id, text) {
	let tags = document.querySelectorAll(tag);

	for (let i of tags) {
		if (i.id === id) {
			const newText = document.createElement("p");
			newText.id = "New Text";
			newText.innerText = text;
			i.append(newText);
		}
	}
}

function updateClass(tag, classy, nuClassy, kind = "add") {
	let tags = document.querySelectorAll(`${tag}.${classy}`);
	for (let i of tags) {
		if (kind === "add") {
			i.classList.add(nuClassy);
		} else if (kind === "remove") {
			i.classList.remove(nuClassy);
		} else {
			throw new Error(
				`${kind} is not a valid operation for this function, use either "add" or "remove"`
			);
		}
	}
}

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

function updateBackgroundColor(tag, color) {
	let tags = document.querySelectorAll(tag);
	console.log(tags);
	for (let i of tags) {
		i.style.backgroundColor = color;
	}
}
function run() {
	let containerByID = document.getElementById("container");
	let containerByQuery = document.querySelector("container");

	console.log(containerByID, containerByQuery);

	let secondList = document.querySelectorAll(".second");
	console.log(secondList);

	let olthirds = document.querySelectorAll("ol .third");
	console.log(olthirds);

	updateElementText("section", "container", "Hello!");
	updateClass("div", "footer", "main");
	updateClass("div", "footer", "main", "remove");

	newElement("li", "four", "", "", "ul");

	updateBackgroundColor("ol > li", "green");

	let footer = document.querySelector("div.footer");
	footer.remove();
}

export { run };
