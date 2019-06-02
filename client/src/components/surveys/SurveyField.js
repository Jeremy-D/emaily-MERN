//SurveyField contains logic to render a single
//label and text input
import React from 'react'

export default ({input, label}) => {
//{input} is es6 destructuring for props.input
	return (
		<div>
			<label>{label}</label>
			<input {...input}/>
		</div>
	);
};