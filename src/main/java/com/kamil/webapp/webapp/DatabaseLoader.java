package com.kamil.webapp.webapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	@Autowired
	private PostRepository repo;
	
	@Override
	public void run(String... arg0) throws Exception {
		System.out.println("adding to db");
//		this.repo.save(new Post("Marianek", "Lubie w pupke. Ktoś ma coś przeciwko?"));
//		this.repo.save(new Post("Pszemek", "Ja też lubie w pupke:)"));
	}

}
