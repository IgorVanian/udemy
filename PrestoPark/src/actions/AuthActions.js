import { Actions } from 'react-native-router-flux';
import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER,
	LOGIN_WITHOUT_ACCOUNT
} from './types';
import axios from 'axios';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });
	};
};

export const loginWithoutAccount = () => {
	return (dispatch) => {
		dispatch({
			type: LOGIN_WITHOUT_ACCOUNT
		});

		axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=Zurich`)
			.then(res => {
				const data = res.data.results[0];
				console.log(data);
				loginUserSuccess(dispatch, null, data.address_components[0].long_name, data.address_components[3].long_name, data.geometry.location);
		});
	};
}

const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL, payload: 'Authentication Failed' });
}

const loginUserSuccess = (dispatch, user, city, country, location) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: { user, city, country, location }
	});

	Actions.main();
};