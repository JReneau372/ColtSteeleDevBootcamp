window.setTimeout(function() {
  // put all of your JS code from the lecture here

var todos =["Buy Groceries"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
  if (input === "list"){
    listTodos();
  }else if (input === "new"){
    addTodo();
  }else if (input === "delete") {
    deleteTodo();
  }
  input = prompt("What would you like to do?");
}
console.log("Ok, you quit the app");

function listTodos(){
  console.log("**********");
  todos.forEach(function(todo, i){
  console.log(i + ": " + todo);
  });
  console.log("**********");

}

function addTodo(){
  //ask for new todo, add to array
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);
  console.log("Added ToDo");
}

function deleteTodo(){
  // ask for index of todo
  var index = prompt("Enter index of ToDo to delete");
  todos.splice(index,1);
  console.log("Deleted ToDo");
}


}, 500);
