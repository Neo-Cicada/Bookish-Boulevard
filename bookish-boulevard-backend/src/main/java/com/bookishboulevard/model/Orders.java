package com.bookishboulevard.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import com.bookishboulevard.model.Customers;
@Entity
@Table(name = "orders")
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer orders_id;

    private String status;

    // Define the relationship with Customers
    @ManyToOne
    @JoinColumn(name = "customer_id") // This will create a foreign key column named "customer_id"
    private Customers customer;

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

    // Getter and setter for customer
    public Integer getCustomer_id() {
        return customer != null ? customer.getCustomerId() : null;
    }

    // Setter for customer_id
    public void setCustomer_id(Integer customerId) {
        if (customer == null) {
            customer = new Customers(); // Ensure customer object is initialized
        }
        customer.setCustomerId(customerId);
    }
}
