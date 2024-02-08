package com.bookishboulevard.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import com.bookishboulevard.model.Books;
@Entity
public class Authors {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    
    private Long id;
    private String name;

    @OneToMany(mappedBy = "authors")
    private List<Books> books;
    
    private Authors(){};

    public Authors(Long id, String name){
        this.id = id;
        this.name = name;
    }

    public Long getId(){
        return this.id;
    }
    public String getName(){
        return this.name;
    }

}
