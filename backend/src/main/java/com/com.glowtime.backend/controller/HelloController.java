package com.glowtime.backend;

// This import allows you to use @GetMapping, which maps HTTP GET requests (like visiting a URL).
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;
// This import allows you to use @RestController, which tells Spring that this class will handle web requests.


// Marks this class as a REST controller so Spring knows to treat it like a web endpoint handler.
@RestController

public class HelloController {

    @GetMapping("/hello")
    // This maps the URL path "/hello" to the method below.
    // When someone visits http://localhost:8080/hello, this method will be called.

    public String sayHello(){
        // This method returns a String when someone accesses the endpoint.

        return "Hello from Glowtime! 🎉";
    }
}
