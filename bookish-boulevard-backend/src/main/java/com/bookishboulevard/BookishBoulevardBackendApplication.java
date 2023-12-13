package com.bookishboulevard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "http://127.0.0.1:5173")
public class BookishBoulevardBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookishBoulevardBackendApplication.class, args);
	}

	@GetMapping("/")
	public String getHello() {
		return "Hello World";
	}

}
