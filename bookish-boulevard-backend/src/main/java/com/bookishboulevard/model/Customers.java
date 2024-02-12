package com.bookishboulevard.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/*
    customer_id (Primary Key)
    name
    email
    address
    phone_number 
    etc.
 * 
 * 
 */
@Entity
@Table(name = "customers")
public class Customers {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer customer_id;

    private String customerName;
    private String customerEmail;
    private String customerAddress;
    private String customerPhone_number;

    public Customers() {
    }

    public Customers(String name, String email, String address, String phone_number) {
        this.customerName = name;
        this.customerEmail = email;
        this.customerAddress = address;
        this.customerPhone_number = phone_number;
    }

    public Integer getCustomerId() {
        return this.customer_id;
    }
    public void setCustomerId(Integer id){
        this.customer_id = id;
    }

    public String getCustomerName() {
        return this.customerName;
    }

    public void setCustomerName(String name) {
        this.customerName = name;
    }

    public String getCustomerEmail() {
        return this.customerEmail;
    }
    public void setCustomerEmail(String email){
        this.customerEmail = email;
    }
    public String getCustomerAddress(){
        return this.customerAddress;
    }
    public void setCustomerAddress(String address){
        this.customerAddress = address;
    }

    public String getCustomerPhonenumber(){
        return this.customerPhone_number;
    }
    public void setCustomerPhonenumber(String phoneNumber){
        this.customerPhone_number = phoneNumber;
    }
}
