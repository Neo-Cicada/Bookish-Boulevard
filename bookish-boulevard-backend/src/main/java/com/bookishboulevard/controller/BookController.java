package com.bookishboulevard.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class BookController {

    private final String GOOGLE_BOOKS_API_BASE_URL = "https://www.googleapis.com/books/v1/volumes";

    @GetMapping("/book-info")
    public ResponseEntity<?> getBookInfo(@RequestParam String isbn) {
        String apiUrl = String.format("%s?q=isbn:%s", GOOGLE_BOOKS_API_BASE_URL, isbn);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);

        if (response.getStatusCode().is2xxSuccessful()) {
            // Parse the JSON response and extract relevant information
            String responseBody = response.getBody();
            // Add your JSON parsing logic here

            return ResponseEntity.ok(responseBody);
        } else {
            return ResponseEntity.status(response.getStatusCode()).body("Failed to retrieve book information");
        }
    }

}
