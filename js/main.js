var todoWrapper = document.getElementById("todo-app");
var dataInput = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById("menu-list");
var spans = document.getElementsByTagName("span");
var saveBtn = document.getElementById("save");
var clearBtn = document.getElementById("clear");
var data = new Date();
var time =
  " Дата добовления: " +
  data.getMonth() +
  " " +
  data.getFullYear() +
  " Время " +
  data.getHours() +
  ":" +
  data.getMinutes();

function deleteTodo() {
  for (let span of spans) {
    span.addEventListener("click", function() {
      span.parentElement.remove(); // Удаления радительского элементь
      event.stopPropagation(); // перехват События
    });
  }
}

function loadTodo() {
  if (localStorage.getItem("TodoApp")) {
    ulSpisok.innerHTML = localStorage.getItem("TodoApp");
  }
  deleteTodo();
}

// Добовления елемента

dataInput.addEventListener("keypress", function(keypressed) {
  if (keypressed.which === 13) {
    var check = this.value.trim();
    if (check != "") {
      var newLi = document.createElement("li");
      var newSpan = document.createElement("span");
      newSpan.innerHTML = "Delete ";
      var timeSpan = document.createElement("a");
      timeSpan.innerHTML = time;
      var newItem = this.value;
      var newItemTag = document.createElement("p");
      newItemTag.innerHTML = newItem;
      this.value = " ";

      ulSpisok.appendChild(newLi).append(timeSpan, newItemTag, newSpan);
      newItemTag.addEventListener("click", function() {
        newItemTag.style.textDecoration = "line-through";
      }); //нет сохронения нужно сделать функцию
    }
    deleteTodo();
  }
});

//Кнопки "save","clear","info"

saveBtn.addEventListener("click", function() {
  localStorage.setItem("TodoApp", ulSpisok.innerHTML);
});

clearBtn.addEventListener("click", function() {
  ulSpisok.innerHTML = " ";
  localStorage.setItem("TodoApp", ulSpisok.innerHTML);
});

function information() {
  var boxDiv = document.createElement("div");
  var boxText = document.createElement("p");
  var boxA = document.createElement("a");
  boxText.innerHTML = "Mikulich Fedor";
  boxA.innerHTML = "X";
  todoWrapper.append(boxDiv),
    boxDiv.appendChild(boxText),
    boxDiv.appendChild(boxA);
  boxA.addEventListener("click", function() {
    boxDiv.remove();
  });
}

deleteTodo();
loadTodo();
