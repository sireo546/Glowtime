package com.glowtime.backend.service;

//import todo entity and TodoRepository
import com.glowtime.backend.model.Todo;
import com.glowtime.backend.repository.TodoRepository;

//Import service annotation from Spring Framework
import org.springframework.stereotype.Service;

//import List class from java.util package
import java.util.List

//Annotate class withh @service to indicate thats its a service component

@Service
public class TodoService {
    //inject TodoRepository via constructor injection
    private final TodoRepository todoRepository;

    //constructor to initialize the TodoRepository
    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }
//Method to create a new todo
public Todo createTodo(Todo todo) {
    //set completed status to false for new todos
    todo.setCompleted(false);
    //use repository's findAll() method to retrive all todos
    return todoRepository.findAll()
}

//method to toggle the completed status of todo
public Todo toggleComplete(Long id) {
    //find the tdo by its ID usin the repository
    Todo todo = todoRepository.findById(id)
    //if todo not found, use runtimeexception
    .orElseThrow(() -> new RuntimeException("Todo not found")
  //toggle comleted status
    todo.setCompleted(!todo.iscompleted());

    return todoRepository.save(todo);
}

//method to delete a todo by its ID
public void deleteTodo(long id){
    //use repository's deletebyId() methos to delete the todo
    todoRepository.deleteById(id);
    }
}