const App = (function (Drag, Tasks) {
  const createElement = (element) => document.createElement(element);

  const createTask = (task) => {
    const content = createElement("div");
    content.classList.add("content");
    content.innerHTML = task.content;
    const card = createElement("div");
    card.setAttribute("draggable", true);
    card.classList.add("card");
    card.appendChild(content);
    return card;
  };

  const initTasks = (tasks) => {
    return new Promise((resolve, reject) => {
      const cont1 = document.querySelector(".cont1 .dropzone");
      tasks.cont1.forEach((item) => {
        cont1.appendChild(createTask(item));
      });
      resolve();
    });
  };

  initTasks(Tasks).then(() => new Drag(".card", ".dropzone"));
})(Drag, Tasks);
const restore = () => {
  const cont1 = document.querySelector(".cont1 .dropzone");
  const cont2 = document.querySelector(".cont2 .dropzone");
  while (cont2.firstChild) {
    cont1.appendChild(cont2.firstChild);
  }

  // Clear the source div by removing all its child nodes
  while (cont2.firstChild) {
    cont2.removeChild(cont2.firstChild);
  }
};
