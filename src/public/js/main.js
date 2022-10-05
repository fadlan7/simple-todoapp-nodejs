//updating a todo
function updateTodo(todoId) {
  //contact server
  return $.ajax({
    method: 'PUT',
    url: `/todos/${todoId}`,
    contentType: 'application/json',
    cache: false,
    error: (error) => {
      console.error(error);
    },
  });
}

//deleting a todo
function deleteTodo(todoId) {
  //contact server
  return $.ajax({
    method: 'DELETE',
    url: `/todos/${todoId}`,
    contentType: 'application/json',
    cache: false,
    success: () => {
      location.reload;
    },
    error: (error) => {
      console.error(error);
    },
  });
}
