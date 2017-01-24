import { 
	SELECT_PARKING,
	DESELECT_PARKING
} from '../actions/types';

const INITIAL_STATE = { 
	parking: null
};

export default (state = INITIAL_STATE, action) => {
	console.log(action);

	switch (action.type) {
		case SELECT_PARKING:
			return { ...state, parking: action.payload.parking };
		case DESELECT_PARKING:
			return { ...state, ...INITIAL_STATE };
		default:
			return state;
	}
}