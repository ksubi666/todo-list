const body = document.getElementsByTagName("body")[0];
// svg
const circlesvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="white"/>
</svg>
`;
const editsvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_100_41)">
<path d="M11.3333 2.00001C11.5031 1.79936 11.7131 1.63605 11.95 1.52046C12.1869 1.40488 12.4454 1.33956 12.7091 1.32868C12.9728 1.3178 13.2359 1.36159 13.4816 1.45727C13.7273 1.55294 13.9502 1.69839 14.1362 1.88435C14.3222 2.07032 14.4671 2.29272 14.5617 2.53737C14.6563 2.78202 14.6986 3.04356 14.6857 3.30533C14.6729 3.56709 14.6053 3.82333 14.4873 4.05772C14.3692 4.29211 14.2033 4.4995 14 4.66667L5 13.6667L1.33334 14.6667L2.33334 11L11.3333 2.00001Z" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 3.33333L12.6667 5.99999" stroke="#999999" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_100_41">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
`;
const trashsvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 4H14" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3333 14.6667H4.66666C3.99999 14.6667 3.33333 14 3.33333 13.3333V4" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.33333 3.99999V2.66666C5.33333 1.99999 5.99999 1.33333 6.66666 1.33333H9.33333C10 1.33333 10.6667 1.99999 10.6667 2.66666V3.99999" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66667 7.33333V11.3333" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33333 7.33333V11.3333" stroke="#A30000" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
// top button
const topbutton = document.createElement("div");
topbutton.classList.add("topbutton");
const button = document.createElement("button");
// top button
body.appendChild(topbutton);
topbutton.appendChild(button);
button.innerText = "Add Task";
// container
const container = document.createElement("div");
container.classList.add("container");

const titlearr = ["To do", "In progress", "Done", "Blocked"];
for (let index = 0; index < titlearr.length; index++) {}
const colorarr = ["white", "yellow", "green", "red"];
for (let i = 0; i < colorarr.length; i++) {}

const createBoard = (text, countValue, color) => {
  // board
  const board = document.createElement("div");
  board.classList.add("board");
  // list
  const list = document.createElement("div");
  list.classList.add("list");
  // top title
  const title = document.createElement("div");
  title.classList.add("title");
  const tasktitle = document.createElement("div");
  tasktitle.classList.add("tasktitle");
  const titleh = document.createElement("h4");
  const taskp = document.createElement("p");
  const taskbutton = document.createElement("button");
  // task title
  board.appendChild(title);
  title.appendChild(tasktitle);
  tasktitle.appendChild(taskbutton);
  taskbutton.classList.add(color);
  tasktitle.appendChild(titleh);
  titleh.innerText = text;
  title.appendChild(taskp);
  taskp.innerText = countValue;
  container.appendChild(board);
  board.appendChild(list);
  body.appendChild(container);
};
for (let i = 0; i < 4; i++) {
  createBoard(titlearr[i], 1, colorarr[i]);
}
// CreateTask function
const createTask = (describtion, number) => {
  // list
  const list = document.getElementsByClassName("list")[number];
  list.classList.add("list");
  // card
  const card = document.createElement("div");
  card.classList.add("card");
  const cardp = document.createElement("p");
  const circle = document.createElement("div");
  const edit = document.createElement("div");
  const trash = document.createElement("div");
  // card
  card.appendChild(circle);
  circle.innerHTML = circlesvg;
  card.appendChild(cardp);
  cardp.innerText = describtion;
  card.appendChild(edit);
  edit.innerHTML = editsvg;
  card.appendChild(trash);
  trash.innerHTML = trashsvg;
  list.appendChild(card);
};

createTask("Hello world", 0);
createTask("Hello world", 0);
createTask("Hello world2", 1);
createTask("Hello world2", 1);
createTask("Hello world2", 1);
createTask("Hello world3", 2);
createTask("Hello world3", 2);
createTask("Hello world3", 2);
createTask("Hello world3", 2);
createTask("Hello world3", 3);
createTask("Hello world3", 3);
createTask("Hello world3", 3);
createTask("Hello world3", 3);
createTask("Hello world3", 3);
