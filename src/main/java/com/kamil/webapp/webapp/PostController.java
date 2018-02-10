package com.kamil.webapp.webapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.node.ObjectNode;

@RestController
public class PostController {

	@Autowired
	private PostRepository repo;
	
//	@RequestMapping(value = "/")
//	public String index() {
//		return "index";
//	}
	
	@RequestMapping(headers="Content-Type=application/json", method = RequestMethod.POST, value="/add")
	public void addPost(@RequestBody Post post) {
		repo.save(post);
	}
	
	@RequestMapping(headers="Content-Type=application/json", method = RequestMethod.POST, value="/remove")
	public void removePost(@RequestBody ObjectNode json) {
		long id = json.get("id").asLong();
		repo.delete(id);
	}

}
