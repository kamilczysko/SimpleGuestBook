import React from 'react';
import ReactDOM from 'react-dom';


class List extends React.Component{

	constructor(props){
		super(props);

		this.state = {posts: {}};

	}

	/*componentWillReceiveProps(nextProps){
		console.log("props received");
		
		this.setState({posts: nextProps.posts});
    }
//*/
	list(){
		var list = this.props.posts
		if(list === null){
			return <p>Brak komentarzy...</p>
		}

		return (

			list.map((post) => 

					<div className="form-inline" key = {post.jID}>
						<div className="form-group" >
							<blockquote>
						    <p>{post.post}</p>
						    <p>{post.jID}</p>
						    <footer>{post.nick}</footer>
						  </blockquote>
					 	</div>
					 	<div className="float-right" >
						<button type="button" className="btn float-right" aria-label="Close"  value={post.jID} onClick={this.props.callback.bind(this)}>
							<span aria-hidden="true">&times;</span>
						</button>
						</div>
					</div>
				)
		);
	}


	render(){

		var list = this.list();
		return(
				<div>
					{list}
				</div>
			);
	}
}

export default List;