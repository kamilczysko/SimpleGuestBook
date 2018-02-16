
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Alert from './alerts.js'

class App extends React.Component{

	constructor(propos){
		super(propos);

		this.state = {
			posts:[
				{jID: 1,
					nick: 'beniz',
				post: 'twoja stara śmieerdzi'},
				{jID:2,
					nick: 'kutopenot',
				post: 'A twoja śmierdzi'},
			],
			alert:0
		};

		this.newPost = {
			nick:'',
			content:''
		};
	}

	componentDidMount(){
		
			fetch("/api/posts").then(posts => {
				return posts.json();
			}).then(posts => {
				return posts._embedded.posts			
				}).then(list => 
						this.setState({posts: list})
				);			
	}//*/

	addPost(){

		
		var nick = this.newPost.nick;
		var content = this.newPost.content;

		if(nick.trim() == '' || content.trim() == ''){
			console.log("puste gowno");
			this.setState({alert: 2});
		}else{
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
			}).then(body => 
			{			
				this.setState({alert: 1});
				this.state.posts.push(body);
				this.setState({posts: this.state.posts});	
				}		
			);	//*/
		}
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
		var id = e.currentTarget.value;
	   	console.log("do usunueca : "+id);

	  	fetch("/remove",{
			method: 'POST',
			headers:{
				'Accept': 'application/json',
   				'Content-Type': 'application/json',
			},
			body:JSON.stringify({'id':id})
		});//*/
		
	   	var tmpList = this.state.posts;
		var newList = tmpList.filter(p => {

			if(p.jID != id)
				return p;

		});

	   	this.setState({posts: newList});
	   	
	}

	render(){
		
		return(

<div>
					<Alert alert = {this.state.alert} />
				
					<div className="form-group">
						<label>Komentarz:</label>
						<textarea className="form-control" rows="5" id="comment"  onChange={this.updateContent.bind(this)}></textarea>
					</div>


					<div className="col-lg-6">
						<div className="input-group">
					
							<input type="text" className="form-control" placeholder="Imię" id="ex4" onChange={this.updateNick.bind(this)} ></input>
							
							<div className="float-right">
								<span className="input-group-btn">
									<button className="btn btn-secondary" type="button" onClick={this.addPost.bind(this)}>Wyślij</button>
								</span>
							</div>

						</div>
					</div>

					<hr />
					
					
						{this.state.posts.map((post) => 
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
									)
							}


					
	</div>
			

			);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
