import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	render(){
		return(
			<div>
				SurveyList
			</div>
		);
	}
}

function mapStateToProps(state){
	//reference to global state
	return {surveys: state.surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList)