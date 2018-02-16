import React from 'react';
import ReactDOM from 'react-dom';
import SinglePost from './singlePost.js'


class List extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		var list = this.props.posts;
		return(

							list.map(p =>
								{return(
									<SinglePost 
										post = {p}
										callback = {this.props.callback} 
										key = {p.jID}/>
									);
								}
							)				
			);
	}
}

export default List;