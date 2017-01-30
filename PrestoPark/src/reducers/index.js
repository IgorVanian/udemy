import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MapReducer from './MapReducer';
import FooterReducer from './FooterReducer';
import StartParkingRightReducer from './StartParkingRightReducer';

export default combineReducers({
	auth: AuthReducer,
	map: MapReducer,
	footer: FooterReducer,
	startParkingRight: StartParkingRightReducer
});