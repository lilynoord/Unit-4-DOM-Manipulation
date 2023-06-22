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
	prioritizenewPage();
}

function prioritizenewPage() {
	let taskList = localStorage.getItem("taskList");
	console.log(taskList);
	document.querySelector("ul").innerHTML = taskList;
}
function addTask(t, p) {
	const inhtml = `${t.value}`;

	const task = tools.newElement("li", inhtml, t.value, "todo-li", undefined);
	task.setAttribute(`data-priority`, p.value);
	prioritize(task);
}

/**
 * Reorders the todo list based on their set priority.
 */
function prioritize(task) {
	let qlist = tools.doQuery(".todo-li", function (q) {
		let x = q;
		q.remove();
		return x;
	});
	console.log(qlist, "length", qlist.length);
	let lowestPriority = true;
	for (let i = 0; i < qlist.length; i++) {
		console.log(i);
		if (parseInt(task.dataset.priority) > parseInt(qlist[i].dataset.priority)) {
			qlist.splice(i, 0, task);
			lowestPriority = false;
			break;
		}
	}
	if (lowestPriority) {
		qlist.push(task);
	}

	for (let i of qlist) {
		document.querySelector("#todoul").append(i);
	}

	localStorage.setItem("taskList", document.querySelector("ul").innerHTML);
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
			localStorage.setItem("taskList", document.querySelector("ul").innerHTML);
		}
	});

	todolist.addEventListener("auxclick", function (event) {
		if (event.target.tagName === "LI") {
			event.target.remove();
			localStorage.setItem("taskList", document.querySelector("ul").innerHTML);
		}
	});
}
function main() {
	console.log("Running TODO app");
	console.log("Running TODO app");

	setupTODO();
}

main();
