import * as tools from "../tools.js";

function setupTODO() {
	// Get all the form stuff
	const newTask = document.querySelector("form");
	const taskInput = document.querySelector('input[name="task"]');
	const taskPriority = document.querySelector('input[name="priority"]');
	newTask.addEventListener("submit", function (event) {
		event.preventDefault();
		addTask(taskInput, taskPriority);
	});
	manageEventListeners();
}

function addTask(t, p) {
	const inhtml = `${t.value}`;

	const task = tools.newElement("li", inhtml, undefined, "todo-li", "#todoul");
}

function manageEventListeners() {
	const todolist = document.querySelector("#todoul");
	todolist.addEventListener("click", function (event) {
		if (event.target.tagName === "LI") {
			if (!event.target.classList.contains("completed")) {
				event.target.classList.add("completed");
			} else {
				event.target.classList.remove("completed");
			}
		}
	});

	todolist.addEventListener("auxclick", function (event) {
		if (event.target.tagName === "LI") {
			event.target.remove();
		}
	});
}
function main() {
	console.log("Running TODO app");
	console.log("Running TODO app");

	setupTODO();
}

main();
