package com.bookishboulevard.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import com.bookishboulevard.model.Orders;
import com.bookishboulevard.repository.OrderRepository;

import java.util.Optional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
public class OrderController {
    private final OrderRepository orderRepository;

    public OrderController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @GetMapping("/api/orders")
    public Iterable<Orders> getAllOrders() {
        return this.orderRepository.findAll();
    }

    @PostMapping("/api/orders")
    public Orders addOrder(@RequestBody Orders order) {
        return this.orderRepository.save(order);
    }

    @PutMapping("/api/orders/{id}")
    public ResponseEntity<Orders> updateOrder(@PathVariable(value = "id") Integer id,
            @RequestBody Orders updatedOrder) {
        Optional<Orders> optionalOrder = orderRepository.findById(id);
        if (optionalOrder.isPresent()) {
            Orders existingOrder = optionalOrder.get();
            existingOrder.setOrderDate(updatedOrder.getOrderDate());
            existingOrder.setTotalAmount(updatedOrder.getTotalAmount());
            existingOrder.setStatus(updatedOrder.getStatus());
            final Orders updatedOrderEntity = orderRepository.save(existingOrder);
            return ResponseEntity.ok(updatedOrderEntity);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Order not found by id: " + id);
        }
    }

    @DeleteMapping("/api/orders/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable(value = "id") Integer id) {
        try {
            Optional<Orders> optionalOrder = orderRepository.findById(id);
            if (optionalOrder.isPresent()) {
                orderRepository.deleteById(id);
                return ResponseEntity.noContent().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
