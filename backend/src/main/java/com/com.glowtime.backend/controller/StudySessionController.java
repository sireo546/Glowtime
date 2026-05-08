package com.glowtime.backend;
// This file is part of the com.glowtime.backend package (my backend project folder)

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
// Importing Spring Boot tools to define API routes and use built-in web functionality
// - @RestController and @RequestMapping let me handle HTTP requests
// - @GetMapping and @PostMapping define the URL paths
// - List is used to return multiple items from the database

@CrossOrigin(origins = "http://localhost:3000")
@RestController
// Marks this class as a REST controller so Spring Boot knows to use it to handle API requests

@RequestMapping("/sessions")
// All routes in this controller will start with /sessions (e.g. /sessions for GET and POST)

public class StudySessionController {

    private final StudySessionRepository repository;
    // This is my connection to the database table (StudySession).
    // It lets me perform actions like save, findAll, delete, etc.

    @Autowired
    public StudySessionController(StudySessionRepository repository) {
        this.repository = repository;
    }
    // Spring Boot automatically provides the repository when the app starts.
    // This constructor sets it up so I can use it in my methods below.

    @GetMapping
    public List<StudySession> getAllSessions() {
        return repository.findAll();
    }
    // This method handles GET requests to /sessions.
    // It returns a list of all study sessions from the database.

    @PostMapping
    public StudySession createSession(@RequestBody StudySession session) {
        return repository.save(session);
    }
    // This method handles POST requests to /sessions.
    // It takes a StudySession object from the request body and saves it to the database.
    // The saved session (with its generated ID) is returned in the response.
}

