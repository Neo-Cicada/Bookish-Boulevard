package com.bookishboulevard.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * Orders
 */
@Entity
@Table(name = "orders")
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer orders_id;

    private String status;

    private Date orderDate;

    private Double totalAmount;

    private Orders() {
    }

    public Orders(String status, Date orderDate, Double totalAmount) {
        this.status = status;
        this.orderDate = orderDate;
        this.totalAmount = totalAmount;
    }

    public Integer getOrderId() {
        return this.orders_id;
    }

    public String getStatus() {
        return this.status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getOrderDate() {
        return this.orderDate;
    }

    public void setOrderDate(Date date) {
        this.orderDate = date;
    }

    public Double getTotalAmount() {
        return this.totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

}