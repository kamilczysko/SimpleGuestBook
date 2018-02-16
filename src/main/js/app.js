
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Alert from './alerts.js'
import List from './list.js'

class App extends React.Component{

	constructor(propos){
		super(propos);

		this.state = {
			posts:[],
			alert:0
		};

		this.newPost = {
			nick:'',
			content:''
		};

		this.removePost = this.removePost.bind(this);
	}

	componentDidMount(){
		
		fetch("/api/posts").then(posts => {
			return posts.json();
		}).then(posts => {
			return posts._embedded.posts			
		}).then(list => 
			this.setState({posts: list})
		);			
	}

	addPost(){		
		var nick = this.newPost.nick;
		var content = this.newPost.content;

		if(nick.trim() == '' || content.trim() == ''){
			this.setState({alert: 2});
		}else{
			this.addPostToDB(nick, content);
		}
	}

	addPostToDB(nick, content){
		fetch('/add',{
			method: 'POST',
			headers: {
				'Accept':'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'nick': nick,
				'post': content
			})
		})
		.then(response => {
			return response.json();
		}).then(post => {			
				this.addPostToLocalList(post);
		});
	}



	addPostToLocalList(post){
		this.setState({alert: 1});
		this.state.posts.push(post);
		this.setState({posts: this.state.posts});	
	}


	updateNick(e){
		var nick = e.currentTarget.value;

		this.newPost.nick = nick;
	}

	updateContent(e){
		var content = e.currentTarget.value;

		this.newPost.content = content;
	}

	removePost(e){
		e.preventDefault();

		var id = e.currentTarget.value;
	   	
		this.removeFromList(id);
		this.removeFromDB(id);
	}

	removeFromList(id){

		var tmpList = this.state.posts;
		var newList = tmpList.filter(p => {

			if(p.jID != id)
				return p;

		});

	   	this.setState({posts: newList});
	}

	removeFromDB(id){

		fetch("/remove",{
			method: 'POST',
			headers:{
				'Accept': 'application/json',
   				'Content-Type': 'application/json',
			},
			body:JSON.stringify({'id':id})
		});//*/
	}

	render(){
		
		return(

			<div>
			<div style={{height: "50px"}}>
					<Alert alert = {this.state.alert} />
			</div>
					<div className="form-group">
						<label>Komentarz:</label>
						<textarea className="form-control" rows="5" id="comment" ref="textArea" onChange={this.updateContent.bind(this)}></textarea>
					</div>


					<div className="col-lg-6">
						<div className="input-group">
					
							<input type="text" className="form-control" placeholder="Imię" ref="nameArea" id="ex4" onChange={this.updateNick.bind(this)} ></input>
							
							<div className="float-right">
								<span className="input-group-btn">
									<button className="btn btn-secondary" type="button" onClick={this.addPost.bind(this)}>Wyślij</button>
								</span>
							</div>

						</div>
					</div>

					<hr />
					
					<List 
						posts = {this.state.posts}
						callback = {this.removePost}/>
	
		</div>
			

			);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));


/*
	
	{this.state.posts.map((post) => 
							{return(
															<SinglePost 

																
																post = {post}
																callback = {this.removePost} 
																key = {post.jID}/>
																);}
							)
						}


*/

/*


		<div className="p-3 mb-2 bg-secondary text-white" style={{marginBottom: "30px"}}  key = {post.jID} >
										<div className="form-inline">

											<div className="form-group" >
												<blockquote>
												    <p>{post.post}</p>
												   
												    <footer>{post.nick}</footer>
											  	</blockquote>
										 	</div>

										 	<div className="float-right" style={{marginLeft: "50px"}}>
										 		
													<button type="button" className="close" aria-label="Close"  value={post.jID} onClick={this.removePost.bind(this)} >

													<span aria-hidden="true">&times;</span>
												</button>
											</div>
											
										</div>
									</div>


*/