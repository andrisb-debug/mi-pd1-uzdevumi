'use strict';

// Atslēga, ar kuru dati tiek glabāti localStorage
const STORAGE_KEY = 'pd1-uzdevumi';

// Lapas elementi
const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('task-list');
const counter = document.getElementById('counter');
const filterButtons = document.querySelectorAll('[data-filter]');

// Lietotnes stāvoklis
let tasks = loadTasks();
let currentFilter = 'all';
let editingId = null; // Pašlaik rediģējamā uzdevuma id vai null

// Nolasa uzdevumus no localStorage; bojātu datu gadījumā atgriež tukšu masīvu
function loadTasks() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(data)) {
      return [];
    }
    return data.filter((t) => t && typeof t.text === 'string');
  } catch (err) {
    return [];
  }
}

// Saglabā uzdevumus localStorage JSON formātā
function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (err) {
    // Ja krātuve nav pieejama, lietotne turpina strādāt bez saglabāšanas
  }
}

// Izveido unikālu id: Date.now(), palielinot, ja tāds jau eksistē
function createId() {
  let id = Date.now();
  while (tasks.some((t) => t.id === id)) {
    id++;
  }
  return id;
}

// Pievieno jaunu uzdevumu no ievades lauka
function addTask() {
  const text = input.value.trim();
  input.value = '';
  input.focus();
  if (text === '') {
    return;
  }
  tasks.push({ id: createId(), text: text, done: false });
  saveTasks();
  render();
}

// Pārslēdz uzdevuma izpildes statusu
function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.done = !task.done;
    saveTasks();
    render();
  }
}

// Dzēš uzdevumu pēc id
function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks();
  render();
}

// Atgriež uzdevumus atbilstoši izvēlētajam filtram
function getVisibleTasks() {
  if (currentFilter === 'active') {
    return tasks.filter((t) => !t.done);
  }
  if (currentFilter === 'done') {
    return tasks.filter((t) => t.done);
  }
  return tasks;
}

// Izveido vienas saraksta rindas elementu
function createTaskElement(task) {
  const li = document.createElement('li');
  li.className = task.done ? 'task-item done' : 'task-item';
  li.dataset.id = String(task.id);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.done;
  checkbox.setAttribute('aria-label', 'Atzīmēt kā izpildītu');

  const span = createTextElement(task.text);

  const delBtn = document.createElement('button');
  delBtn.type = 'button';
  delBtn.className = 'delete-btn';
  delBtn.textContent = 'Dzēst';

  li.append(checkbox, span, delBtn);
  return li;
}

// Izveido paziņojumu, ja sarakstā nav ko rādīt
function createEmptyElement() {
  const li = document.createElement('li');
  li.className = 'empty';
  li.textContent = 'Nav uzdevumu';
  return li;
}

// Atjauno saraksta, skaitītāja un filtru attēlojumu
function render() {
  const visible = getVisibleTasks();
  list.textContent = '';
  if (visible.length === 0) {
    list.appendChild(createEmptyElement());
  }
  visible.forEach((task) => list.appendChild(createTaskElement(task)));

  const remaining = tasks.filter((t) => !t.done).length;
  counter.textContent = 'Atlikuši ' + remaining + ' uzdevumi';

  filterButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.filter === currentFilter);
  });
}

// Nosaka uzdevuma id no elementa, uz kura notika darbība
function getTaskId(element) {
  const li = element.closest('.task-item');
  return li ? Number(li.dataset.id) : null;
}

// Izveido uzdevuma teksta elementu (dubultklikšķis uz tā sāk rediģēšanu)
function createTextElement(text) {
  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = text;
  span.title = 'Dubultklikšķis, lai rediģētu';
  return span;
}

// Aizstāj uzdevuma tekstu ar ievades lauku rediģēšanai
function startEdit(span) {
  const id = getTaskId(span);
  const task = tasks.find((t) => t.id === id);
  if (!task || editingId !== null) {
    return;
  }
  editingId = id;

  const field = document.createElement('input');
  field.type = 'text';
  field.className = 'edit-input';
  field.value = task.text;
  field.setAttribute('aria-label', 'Rediģēt uzdevumu');

  span.replaceWith(field);
  field.focus();
  field.select();
}

// Pabeidz rediģēšanu: save=true saglabā, save=false atceļ izmaiņas
function finishEdit(field, save) {
  if (editingId === null) {
    return;
  }
  const task = tasks.find((t) => t.id === editingId);
  editingId = null;
  if (!task) {
    return;
  }
  const text = field.value.trim();
  // Tukšu tekstu nesaglabā: tad paliek iepriekšējais teksts
  if (save && text !== '' && text !== task.text) {
    task.text = text;
    saveTasks();
  }
  field.replaceWith(createTextElement(task.text));
}

// Apstrādā taustiņus rediģēšanas laukā: Enter saglabā, Esc atceļ
function handleEditKey(event) {
  if (event.isComposing) {
    return;
  }
  if (event.key === 'Enter') {
    finishEdit(event.target, true);
  } else if (event.key === 'Escape') {
    finishEdit(event.target, false);
  }
}

// Notikumu apstrāde
addBtn.addEventListener('click', addTask);

list.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('task-text')) {
    startEdit(event.target);
  }
});

list.addEventListener('keydown', (event) => {
  if (event.target.classList.contains('edit-input')) {
    handleEditKey(event);
  }
});

// Ja fokuss pamet rediģēšanas lauku, izmaiņas tiek saglabātas
list.addEventListener('focusout', (event) => {
  if (event.target.classList.contains('edit-input')) {
    finishEdit(event.target, true);
  }
});

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.isComposing) {
    addTask();
  }
});

list.addEventListener('change', (event) => {
  if (event.target.type === 'checkbox') {
    toggleTask(getTaskId(event.target));
  }
});

list.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    deleteTask(getTaskId(event.target));
  }
});

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    currentFilter = btn.dataset.filter;
    render();
  });
});

// Sākotnējā attēlošana
render();
