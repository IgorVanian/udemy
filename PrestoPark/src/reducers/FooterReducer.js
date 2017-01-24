import { 
	EXPAND_DETAILS,
	HIDE_DETAILS
} from '../actions/types';

const INITIAL_STATE = { 
	expanded: false
};

export default (state = INITIAL_STATE, action) => {
	console.log(action);

	switch (action.type) {
		case EXPAND_DETAILS:
			return { ...state, expanded: true };
		case HIDE_DETAILS:
			return { ...state, ...INITIAL_STATE };
		default:
			return state;
	}
}