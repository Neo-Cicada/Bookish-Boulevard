package com.bookishboulevard.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.bookishboulevard.model.Customers;
import com.bookishboulevard.repository.CustomerRepository;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class CustomerController {
    private final CustomerRepository customerRepository;

    public CustomerController(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @GetMapping("/api/customers")
    public Iterable<Customers> getAllCustomers() {
        return this.customerRepository.findAll();
    }

    @PostMapping("/api/customers")
    public Customers addCustomer(@RequestBody Customers customer) {
        return this.customerRepository.save(customer);
    }

    @PutMapping("/api/customers/{id}")
    public ResponseEntity<Customers> updateCustomer(@PathVariable(value = "id") Integer id,
            @RequestBody Customers updatedCustomers) {
        Optional<Customers> optionalCustomers = customerRepository.findById(id);
        if (optionalCustomers.isPresent()) {
            Customers existingCustomers = optionalCustomers.get();
            existingCustomers.setCustomerEmail(updatedCustomers.getCustomerEmail());
            existingCustomers.setCustomerName(updatedCustomers.getCustomerName());
            existingCustomers.setCustomerAddress(updatedCustomers.getCustomerAddress());
            existingCustomers.setCustomerPhonenumber(updatedCustomers.getCustomerPhonenumber());
            final Customers updatedCustomersEntity = customerRepository.save(existingCustomers);
            return ResponseEntity.ok(updatedCustomersEntity);

        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Customer not found by id" + id);
        }
    }

    @DeleteMapping("api/customers/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable(value = "id") Integer id) {
        try {
            Optional<Customers> optionalCustomers = customerRepository.findById(id);
            if (optionalCustomers.isPresent()) {
                customerRepository.deleteById(id);
                return ResponseEntity.noContent().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
