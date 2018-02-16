import React from 'react';
import ReactDOM from 'react-dom';


class Alerts extends React.Component{

	constructor(props){
		super(props);

		this.state = {alert: 0};
	}

	componentWillReceiveProps(nextProps){
		this.setState({alert: nextProps.alert});
	}

	render(){
		if(this.state.alert === 1){
			return(	<div className="alert alert-success">
						  <strong>Sukces!</strong> Dodano komentarz!
						</div>);
		}else if(this.state.alert === 2){
					return (<div className="alert alert-warning">
								  <strong>Błąd!</strong> Uzupełnij wszystkie pola! Ciulu.
								</div>);
		}
		return(
			<p></p>
			);

	}


}

export default Alerts;