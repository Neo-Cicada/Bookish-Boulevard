package com.bookishboulevard.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.bookishboulevard.model.Book;
import com.bookishboulevard.model.Employee;
import com.bookishboulevard.repository.BookRepositoy;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class BookController {
    private final BookRepositoy bookRepositoy;

    public BookController(BookRepositoy bookRepositoy) {
        this.bookRepositoy = bookRepositoy;
    }

    @GetMapping("/api/books")
    public Iterable<Book> findAllBooks() {
        return this.bookRepositoy.findAll();
    }

    @PostMapping("/api/books")
    public Book addOneBook(@RequestBody Book book) {
        return this.bookRepositoy.save(book);
    }

    @PutMapping("/api/books/{id}")
    public ResponseEntity<Book> updateOneBook(@PathVariable(value = "id") Integer id,
            @RequestBody Book bookDetails) {
        Optional<Book> optionalBook = bookRepositoy.findById(id);
        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();
            book.setTitle(bookDetails.getTitle());
            book.setDescription(bookDetails.getDescription());
            book.setAuthors(bookDetails.getAuthors());
            book.setPrice(book.getPrice());
            final Book updatedBook = bookRepositoy.save(book);
            return ResponseEntity.ok(updatedBook);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "book not found with id " + id);
        }
    }

    @DeleteMapping("/api/books/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable(value = "id") Integer id) {
        try {
            Optional<Book> optionalBook = bookRepositoy.findById(id);
            if (optionalBook.isPresent()) {
                bookRepositoy.deleteById(id);
                return ResponseEntity.noContent().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
