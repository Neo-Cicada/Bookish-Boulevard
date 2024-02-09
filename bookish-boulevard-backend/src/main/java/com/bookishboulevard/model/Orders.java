package com.bookishboulevard.model;

import java.math.BigDecimal;

import java.util.List;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

/**
 * Orders
 */
@Entity
public class Orders {
    @Id
    @GeneratedValue
    private Long id;

    // private Orders orders;
    @ManyToMany
    private List<Books> books;

    private int quatity;

    private BigDecimal price;
}