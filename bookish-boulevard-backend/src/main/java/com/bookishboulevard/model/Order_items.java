package com.bookishboulevard.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "order_Items")
public class Order_items {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Integer orderItemId;
    // orderId from orders
    // book id from orders
    private Integer quantity;
    private Double pricePerUnits;
    private Double total;

    public Order_items() {
    }

    public Order_items(Integer quantity, Double pricePerunits, Double total) {
        this.quantity = quantity;
        this.pricePerUnits = pricePerunits;
        this.total = total;
    }

    public Integer getQuantity() {
        return this.quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double getPricePerUnits() {
        return this.pricePerUnits;
    }

    public void setPricePerUnits(Double pricePerUnit) {
        this.pricePerUnits = pricePerUnit;
    }

    public Double getTotal() {
        return this.total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }
}
