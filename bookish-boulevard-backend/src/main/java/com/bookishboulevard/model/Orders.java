package com.bookishboulevard.model;

import java.math.BigDecimal;

import org.hibernate.annotations.ManyToAny;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

/**
 * Orders
 */
@Entity
public class Orders {
    @Id
    @GeneratedValue
    private Long id;

    // @ManyToOne
    // @JoinColumn(name = "order_id", nullable = false)
    private Orders orders;

    // @ManyToOne
    // @JoinColumn(name = "book_id", nullable = false)
    private Books books;

    private int quatity;

    private BigDecimal price;
}