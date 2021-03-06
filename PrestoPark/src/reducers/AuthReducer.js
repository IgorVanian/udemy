import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	LOGIN_WITHOUT_ACCOUNT
} from '../actions/types';

const INITIAL_STATE = { 
	email: '', 
	password: '',
	user: null,
	error: '',
	loading: false,
	city: '',
	country: '',
	location: null
};

export default (state = INITIAL_STATE, action) => {
	console.log(action);

	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload.user, city: action.payload.city, country: action.payload.country, location: action.payload.location };
		case LOGIN_USER_FAIL:
			return { ...state, error: action.payload, password: '', loading: false };
		case LOGIN_USER:
			return { ...state, loading: true, error: '' };
		case LOGIN_WITHOUT_ACCOUNT:
			return state;
		default:
			return state;
	}
}