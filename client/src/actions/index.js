import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = ()=>{		
	return function(dispatch) {		
		//server/routes/authRoutes.js
		axios.get('api/current_user')
			.then(res => dispatch({type: FETCH_USER, payload:res}));
	}
};