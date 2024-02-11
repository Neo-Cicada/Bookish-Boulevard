package com.bookishboulevard.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "categories")
public class Categories {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer categories_id;

    private String category_name;

    private Categories() {
    };

    public Categories(String category_name) {
        this.category_name = category_name;
    }

    public String getCategoryName() {
        return this.category_name;
    }
    public void setCategoryName(String name){
        this.category_name = name; 
    }
    public Integer getCategoryId(){
        return this.categories_id;
    }
}
