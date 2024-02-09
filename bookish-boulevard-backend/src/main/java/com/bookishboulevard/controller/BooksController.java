package com.bookishboulevard.controller;

import org.springframework.web.bind.annotation.RestController;

import com.bookishboulevard.repository.BookRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional; // Import Optional
import com.bookishboulevard.model.Books;

/**
 * BookController
 */
@RestController
@RequestMapping("/api/books")
public class BooksController {

    private final BookRepository bookRepository;

    public BooksController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public List<Books> getAllBooks() {
        return bookRepository.findAll();
    }

    @GetMapping("/{id}")
    public Books getBookById(@PathVariable Integer id) {
        Optional<Books> optionalBook = bookRepository.findById(id);
        return optionalBook.orElse(null);
    }

    @PostMapping
    public Books addBook(@RequestBody Books book) {
        return bookRepository.save(book);
    }

    @PutMapping("/{id}")
    public Books updateBook(@PathVariable Integer id, @RequestBody Books book) {
        book.setId(id); // Ensure the correct ID is set
        return bookRepository.save(book);
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Integer id) {
        bookRepository.deleteById(id);
    }
}
