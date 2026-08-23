// Interface that extends the JpaRepository, provides a way to interact with the database
// for performing CRUD (Create, Read, Update, Delete) operations on Todo entities.
// By extending JpaRepository, it inherits common database operations such as
// save(), findById(), findAll(), and deleteById() without implementing them manually.

// Specify the package where the interface belongs
package com.glowtime.backend.repository;

// Import the Todo entity and JpaRepository
import com.glowtime.backend.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

// Import the List class from the java.util package
import java.util.List;

// Define the TodoRepository interface, extending JpaRepository<Todo, Long>
// Provides CRUD operations for Todo entities
public interface TodoRepository extends JpaRepository<Todo, Long> {
    // Custom query method to find todos by their completed status
    List<Todo> findByCompleted(boolean completed);

    // Custom method to find todos that are not completed
    List<Todo> findByCompletedFalse();
}