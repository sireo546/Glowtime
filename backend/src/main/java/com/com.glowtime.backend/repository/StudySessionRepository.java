package com.glowtime.backend;

// This import lets us use Spring's JPA features like .save(), .findAll(), .deleteById(), etc.
import org.springframework.data.jpa.repository.JpaRepository;

// This interface gives us built-in methods to interact with the database.
// It tells Spring Boot: "Please manage StudySession objects with Long-type IDs."

public interface StudySessionRepository extends JpaRepository<StudySession,Long> {
}    // This interface connects the StudySession class to the database.
// - StudySession → is your entity/table
// - Long → the type of your primary key (id)
// No need to write anything yet — JpaRepository gives us everything we need for basic CRUD

//now I have access to methods like:
//
//repository.save(session) → save a study session
//
//repository.findAll() → get all study sessions
//
//repository.deleteById(id) → delete a session


