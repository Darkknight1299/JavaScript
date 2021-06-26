$(function () {
    let newTodoBox= $('#newtodo') //# is use to use the id of items in the html file
    let addtodoBtn= $('#addtodo')
    let todoList=$('#todolist')

    addtodoBtn.click(function(){
        let newTodo = newTodoBox.val()

        $.post(
            '/todos/',
            {task:newTodo},
            function (data){
                todoList.empty();
                for(todo of data){
                    todoList.append("<li>" + todo.task + "</li>")
                }
            }
        )
    })
})