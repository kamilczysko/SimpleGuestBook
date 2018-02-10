package com.kamil.webapp.webapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WebappApplication {

	public static void main(String[] args) {
		System.out.println("App start...");
		SpringApplication.run(WebappApplication.class, args);
	}
}
