//interface that extends the JPARepository, provides a way to interact with the database for performing CRUD(create, read, update, Delete) operation on to entities. By extending JpaRepository, it inherits common database operaiton such as save(), findById(), findAll(), an deleteByid() without implementing myself

//specify the package where interface belongs

package com.glowtime.backend.repository;

//import the todo entity and jpa repository
import com.glowtime.backend.model.Todo;
import org.springframework.data.jpa.repostory.JpaRepository;

//import the List class from java.util package
import java.util.List;

//define TodoRepository interface, extend JpaRepository<Todo, Long>
//provides crud operations for Todo entities

public interface TodoRepository extends JpaRepository<Todo, Long> {
  //custom query method to find todos by their completed status
  List<todo> findbyCompleted(boolean completed);

  //custom methos to find todos that are not completed
  List<Todo> findbyCompletedFalse();  
}