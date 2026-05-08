//specify the package where this class belongs
package com.glowtime.backend.model;

//Import necessary JPA annotations and constraints

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

//Annotate the class as JPA entity, can be persisted to the database
@entity
public class Todo {
    //Declare the 'id' field as the primary key and enable auto-generation
    @id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //Declare 'task' field with validation and non-null constraint and default value
@NotBlank
@Column(nullable = false)
private String task;

//Declare 'completed' field with non null constraint and defult value
@Column(nullable = false)
private boolean completed = false;

//no argument constructor(required by JPA)
public Todo(){ 
}

//Constructor with 'task' parameter
public Todo(String task){
    this.task = task;
}
//getter for 'id' field
public Long getId(){
    return id;
}
//setter for 'id' field
public void setId(Long id){
    this.id = id;
}
//getter for 'task' field
public String getTask(){
    return task;
}
//setter for 'task' field
public void setTask(String task){
    this.task = task;
}
//Getter for 'completed' field
public boolean iscompleted(){
    return completed;
}

//setter for 'completed' field
public void setCompleted(boolean completed){
    this.completed = completed;
    }

}
