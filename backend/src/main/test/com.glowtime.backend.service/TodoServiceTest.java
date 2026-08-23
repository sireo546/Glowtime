//package strcuture
package com.glowtime.backend.service;

//imports classees for testing
import com.glowtime.backend.model.Todo;
import com.glowtime.backend.repository.TodoRepository;
import org.junit.jupiter.api.BeforeEach;
import junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

//import optional clas from java.util class

import java.util.Optional;

//imort asertions and mockito methods
import static org.junit.jupiter.api.Assertions.*;

import static org.mockito.Mockito.*;
//naming convention is usually [TestedClass] Test
class TodoServiceTest {
//mock tofoReposiotry using Mockito
//this creates a mock object of TodoRepository that is used to stub method behaviour and verify interactions 
@Mock
private TodoRepository todoRepository;

//inject the mocked todorepository into todoservice 
//creates an instance of todoservice and injects the mocked repository into it
@InjectsMocks
private TodoService todoService;

//set up the mockito mocks before each test method
//this initializes the mock objects and their behaviour for each test
@BeforeEach
void setUp(){
    MockitoAnnotations.openMocks(this);
}
//Test the createTodo() method
//this test chacks if the compelted status is set to false when creating a todo
@Test
void createTodo_shouldSetCompletedFalse() {
    // Create a sample todo
    Todo todo = new Todo("Test Todo");

    // Mock the behavior of the repository's save() method
    when(todoRepository.save(any(Todo.class))).thenReturn(todo);

    // Call the createTodo() method
    Todo result = todoService.createTodo(todo);

    // Assert that the todo's completed status is false
    assertFalse(result.isCompleted());

    // Verify that the repository's save() method was called once with the todo object
    verify(todoRepository, times(1)).save(todo);
}

@Test
void getAllTodos_shouldReturnAllTodos() {
    // Call the getAllTodos() method
    todoService.getAllTodos();

    // Verify that the repository's findAll() method was called once
    verify(todoRepository, times(1)).findAll();
}
//Test the toggleComplete()method
@Test
void toggleComplete_shouldToggleCompleted(){
    //create a sample todo

    Todo todo = new Todo("Test Todo");

    //mock the behaviour of the repository's findbyid() and save() methods

    when(todoRepository.findById(1L)).thenReturn(Optional.of(todo));
    when(todoRepository.save(todo)).thenReturn(todo);

    //call the toggle complete method
    Todo result = todoService.toggleComplete(1L);

    //assert that the todo's completed status is true
    assertTrue(result.isCompleted());

    //verify that the repostory's find byId and save() methods were called once

      verify(todoRepository, times(1)).findById(1L);
        verify(todoRepository, times(1)).save(todo);
    }
    // Test the toggleComplete() method when the todo is not found
    @Test
   void toggleComplete_shouldThrowExceptionWhenTodoNotFound(){
     // Mock the behavior of the repository's findById() method to return an empty Optional
        when(todoRepository.findById(1L)).thenReturn(Optional.empty());
     
     // Assert that calling toggleComplete() with a non-existent todo ID throws a RuntimeException
     assertThrows(RuntimeException.class, () -> todoService.toggleComplete(1L));

    //verify that the repository's findById() method was called once
     verify(todoRepository, times(1)).findById(1L);
    // Verify that the repository's save() method was never called
        verify(todoRepository, never()).save(any(Todo.class));
   }
   // Test the deleteTodo() method
    @Test
    void deleteTodo_shouldDeleteTodo() {
        // Call the deleteTodo() method
        todoService.deleteTodo(1L);
       // Verify that the repository's deleteById() method was called once
        verify(todoRepository, times(1)).deleteById(1L);
    }
}
