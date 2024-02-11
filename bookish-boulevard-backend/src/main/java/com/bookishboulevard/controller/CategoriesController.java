package com.bookishboulevard.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.bookishboulevard.model.Categories;
import com.bookishboulevard.repository.CategoriesRepository;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class CategoriesController {
    private final CategoriesRepository categoriesRepository;

    public CategoriesController(CategoriesRepository categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    @GetMapping("/api/categories")
    public Iterable<Categories> getAllCategories() {
        return this.categoriesRepository.findAll();
    }

    @PostMapping("/api/categories")
    public Categories addCategory(@RequestBody Categories category) {
        return this.categoriesRepository.save(category);
    }

    @DeleteMapping("/api/categories/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable(value = "id") Integer id) {
        try {
            Optional<Categories> optionalCat = categoriesRepository.findById(id);
            if (optionalCat.isPresent()) {
                categoriesRepository.deleteById(id);
                return ResponseEntity.noContent().build();

            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/api/categories/{id}")
    public ResponseEntity<Categories> updateCategory(@PathVariable(value = "id") Integer id,
            @RequestBody Categories updatedCategory) {
        Optional<Categories> optionalCategory = categoriesRepository.findById(id);
        if (optionalCategory.isPresent()) {
            Categories existingCategory = optionalCategory.get();
            existingCategory.setCategoryName(updatedCategory.getCategoryName()); // Update the category name
            final Categories updatedCategoryEntity = categoriesRepository.save(existingCategory);
            return ResponseEntity.ok(updatedCategoryEntity);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Category not found with id " + id);
        }
    }
    
}
