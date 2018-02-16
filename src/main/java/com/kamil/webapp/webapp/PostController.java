package com.kamil.webapp.webapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.node.ObjectNode;

@Controller
public class PostController {

	@Autowired
	private PostRepository repo;

	@RequestMapping(value = "/main")
	public String index() {
		return "index";
	}

	@RequestMapping(headers = "Content-Type=application/json", method = RequestMethod.POST, value = "/add")
	@ResponseBody
	public ResponseEntity<Post> addPost(@RequestBody Post post) {
		Post resp = repo.save(post);
		
		return  new ResponseEntity<Post>(resp, HttpStatus.OK);

	}

	@RequestMapping(headers = "Content-Type=application/json", method = RequestMethod.POST, value = "/remove")
	@ResponseBody
	public ResponseEntity<Iterable<Post>> removePost(@RequestBody ObjectNode json) {
		long id = json.get("id").asLong();
		repo.delete(id);
		
		return new ResponseEntity<Iterable<Post>>(repo.findAll(), HttpStatus.OK);
	}

}
