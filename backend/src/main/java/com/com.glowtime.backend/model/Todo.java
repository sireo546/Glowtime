// Specify the package where this class belongs
package com.glowtime.backend.model;

// Import necessary JPA annotations and validation constraints
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

// Annotate the class as a JPA entity that can be persisted to the database
@Entity
public class Todo {
    // Declare the 'id' field as the primary key and enable auto-generation
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Declare the 'task' field with validation and non-null constraint
    @NotBlank
    @Column(nullable = false)
    private String task;

    // Declare the 'completed' field with non-null constraint and default value
    @Column(nullable = false)
    private boolean completed = false;

    // No-argument constructor (required by JPA)
    public Todo() {
    }

    // Constructor with 'task' parameter
    public Todo(String task) {
        this.task = task;
    }

    // Getter for 'id' field
    public Long getId() {
        return id;
    }

    // Setter for 'id' field
    public void setId(Long id) {
        this.id = id;
    }

    // Getter for 'task' field
    public String getTask() {
        return task;
    }

    // Setter for 'task' field
    public void setTask(String task) {
        this.task = task;
    }

    // Getter for 'completed' field
    public boolean isCompleted() {
        return completed;
    }

    // Setter for 'completed' field
    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}