import { FETCH_SURVEYS } from '../actions/types';
//boilerplate for reducer
export default function(state = [], action){
	switch (action.type){
		case FETCH_SURVEYS:
			return action.payload
		default:
			return state;
	}

}