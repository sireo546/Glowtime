package com.glowtime.backend.service;

// Import the Todo entity and TodoRepository
import com.glowtime.backend.model.Todo;
import com.glowtime.backend.repository.TodoRepository;

// Import the Service annotation from the Spring Framework
import org.springframework.stereotype.Service;

// Import the List class from the java.util package
import java.util.List;

// Annotate the class with @Service to indicate that it's a service component
@Service
public class TodoService {
    // Inject the TodoRepository via constructor injection
    private final TodoRepository todoRepository;

    // Constructor to initialize the TodoRepository
    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    // Method to create a new todo
    public Todo createTodo(Todo todo) {
        // Set the completed status to false for new todos
        todo.setCompleted(false);
        // Use the repository's save() method to save the todo and return it
        return todoRepository.save(todo);
    }

    // Method to retrieve all todos
    public List<Todo> getAllTodos() {
        // Use the repository's findAll() method to retrieve all todos
        return todoRepository.findAll();
    }

    // Method to toggle the completed status of a todo
    public Todo toggleComplete(Long id) {
        // Find the todo by its ID using the repository
        Todo todo = todoRepository.findById(id)
                // If the todo is not found, throw a RuntimeException
                .orElseThrow(() -> new RuntimeException("Todo not found"));
        // Toggle the completed status
        todo.setCompleted(!todo.isCompleted());
        // Save the updated todo using the repository and return it
        return todoRepository.save(todo);
    }

    // Method to delete a todo by its ID
    public void deleteTodo(Long id) {
        todoRepository.deleteById(id);
    }
}