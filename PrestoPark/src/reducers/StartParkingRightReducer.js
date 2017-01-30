import { 
	AREA_SELECT
} from '../actions/types';

const INITIAL_STATE = { 
	area: null
};

export default (state = INITIAL_STATE, action) => {
	console.log(action);

	switch (action.type) {
		case AREA_SELECT:
			return { ...state, area: action.payload.area };
		default:
			return state;
	}
}