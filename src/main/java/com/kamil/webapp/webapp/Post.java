package com.kamil.webapp.webapp;


import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@Entity
public class Post {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private String nick;
	private String post;
	private Date date;
	@JsonProperty("id")
	private Long jId;
	
	public Long getjID() {
		return this.id;
	}

	public Post() {	this.date = new Date();}
	
	public Post(String nick, String post) {
		this.nick = nick;
		this.post = post;
		this.date = new Date();
	}
	
}
