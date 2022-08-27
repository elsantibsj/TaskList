const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

const tasksContainer = document.getElementById('tasksContainer');

let num = 0;

const setDate = () => {
	const date = new Date();
	dateNumber.textContent = date.toLocaleString('en', { day: 'numeric' });
	dateText.textContent = date.toLocaleString('en', { weekday: 'long' });
	dateMonth.textContent = date.toLocaleString('en', { month: 'short' });
	dateYear.textContent = date.toLocaleString('en', { year: 'numeric' });
};

const addNewTask = event => {
	num++;
	event.preventDefault();
	const { value } = event.target.taskText;
	if(!value) return;
	const task = document.createElement('div');
	task.classList.add('task', 'roundBorder');
	task.setAttribute('id', num);
	task.addEventListener('click', changeTaskState);
	task.textContent = value;
	tasksContainer.prepend(task);
	event.target.reset();
};

const changeTaskState = event => {
	event.target.classList.toggle('done');
};

const order = () => {
	const done = [];
	const toDo = [];
	tasksContainer.childNodes.forEach( el => {
		el.classList.contains('done') ? done.push(el) : toDo.push(el)
	})
	return [...toDo, ...done];
}

const renderOrderedTasks = () => {
	order().forEach(el => tasksContainer.appendChild(el))
}

const del = () => {
	const done = [];
	const toDo = [];
	tasksContainer.childNodes.forEach( el => {
		el.classList.contains('done') ? done.push(el) : toDo.splice(el)
	})
	return [...toDo, ...done];
}

const delTask = () => {
	del().forEach(el => tasksContainer.removeChild(el))
} 

const changeTheme = () => {
	const body = document.getElementById('body')
	body.classList.contains('bodyDark') ? body.classList.remove('bodyDark') : body.classList.add('bodyDark')
	
	const h2 = document.getElementById('h2')
	h2.classList.contains('textDark') ? h2.classList.remove('textDark') : h2.classList.add('textDark')

	const darkText = document.getElementById('darkText')
	darkText.classList.contains('textDark') ? darkText.classList.remove('textDark') : darkText.classList.add('textDark')
	
	const theme = document.getElementById('theme')
	if (theme.classList.contains('textDark') && theme.classList.contains('bodyDark')){
		theme.classList.remove('textDark');
		theme.classList.remove('bodyDark');
	}
	else {
		theme.classList.add('textDark');
		theme.classList.add('bodyDark');
	}

	const main = document.getElementById('main')
	main.classList.contains('listDark') ? main.classList.remove('listDark') : main.classList.add('listDark')

	const date = document.getElementById('date')
	date.classList.contains('textDark') ? date.classList.remove('textDark') : date.classList.add('textDark')

	const input = document.getElementById('input')
	if (input.classList.contains('inputDark') && input.classList.contains('textDark')){
		input.classList.remove('textDark');
		input.classList.remove('inputDark');
	}
	else {
		input.classList.add('textDark');
		input.classList.add('inputDark');
	}

	const addTask = document.getElementById('addTaskButton');
	addTask.classList.contains('taskDark') ? addTask.classList.remove('taskDark') : addTask.classList.add('taskDark');

	const moon = document.getElementById('moon');
	moon.classList.contains('darkMoon') ? moon.classList.remove('darkMoon') : moon.classList.add('darkMoon');

	if (moon.getAttribute('src') == "dark.png") {
   		document.getElementById("moon").src="light.png";
	}
	else{
		document.getElementById("moon").src="dark.png"
	}
	
}

setDate();