import React from 'react';
import ReactDOM from 'react-dom';

class SinglePost extends React.Component{

	constructor(props){
		super(props);

	}

	render(){
		var post = this.props.post;
		var callback = this.props.callback;
		return(

							<div className="p-3 mb-2 bg-secondary text-white" style={{marginBottom: "30px"}}>
										<div className="form-inline">

											<div className="form-group" >
												<blockquote>
												    <p>{post.post}</p>
												   
												    <footer>{post.nick}</footer>
											  	</blockquote>
										 	</div>

										 	<div className="float-right" style={{marginLeft: "50px"}}>
										 		
													<button type="button" className="close" aria-label="Close"  value={post.jID} onClick={callback} >

													<span aria-hidden="true">&times;</span>
												</button>
											</div>
											
										</div>
									</div>


			);
	}

}
export default SinglePost;


