// This tells Java that this file belongs to the "com.glowtime.backend" package.
package com.glowtime.backend;

// JPA annotations to define the entity and its table
//These imports bring in tools from JPA (Java Persistence API) so we can map this Java class to a real database table.

//@Entity is used to define a class as a database table.
import jakarta.persistence.Entity;
//@GeneratedValue allows the database to automatically generate ID values (like 1, 2, 3…).
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

//@Id marks a field as the primary key.
import jakarta.persistence.Id;

// Marks this class as a table in the database
@Entity
//@Entity
// This tells Spring Boot: "This class represents a table in the database."
// When the app starts, it will create a table called 'study_session'.

// This is the Java class
public class StudySession {

    @Id // This marks the primary key

    // This tells the database to automatically generate the value for 'id' (auto-incrementing).
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generates IDs (1, 2, 3, ...)

    // The ID value is of type Long (like 1L, 2L, 3L...).
    private Long id;

    private String subject; // stores the subject being studied(Math or chemistry)
    private int durationMinutes; // Duration of the study session in minutes
    private String mood; // Optional field — user can record how they felt

    // Empty constructor (required by JPA)
    public StudySession() {}

    // Constructor with all fields except ID (since ID is auto-generated)
    public StudySession(String subject, int durationMinutes, String mood) {
        this.subject = subject;
        this.durationMinutes = durationMinutes;
        this.mood = mood;
    }

    // Getters and setters (used by Spring Boot and other frameworks)
    public Long getId() {
        return id;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }
//get and set 'subject' field
    public int getDurationMinutes() {
        return durationMinutes;
    }

    public void setDurationMinutes(int durationMinutes) {
        this.durationMinutes = durationMinutes;
    }
    // Get and set the 'durationMinutes' field.

    public String getMood() {
        return mood;
    }

    public void setMood(String mood) {
        this.mood = mood;
    }
}

// Get and set the 'mood' field.
