//SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './surveyFormReview';

class SurveyNew extends Component{
	//don't need constructor with create react app
	state = { showFormReview: false};

	renderContent(){
		if(this.state.showFormReview){
			return <SurveyFormReview
				onCancel={()=> this.setState({showFormReview:false})}
			/>
		} else {
			return <SurveyForm onSurveySubmit={()=>this.setState({ showFormReview:true })}/>
		}
	}

	render(){
		return(
			<div>
				{this.renderContent()}
			</div>
		)
	}
}

export default reduxForm({
	form: 'surveyForm'
})(SurveyNew);