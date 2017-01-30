import { Actions } from 'react-native-router-flux';
import { 
	SELECT_PARKING,
	DESELECT_PARKING,
	START_PARKING_RIGHT
} from './types';

export const selectParking = (parking) => {
	return {
		type: SELECT_PARKING,
		payload: { parking }
	};
};

export const deselectParking = () => {
	return {
		type: DESELECT_PARKING
	};
};

export const startParkingRight = () => {
	return (dispatch) => {
		dispatch({
			type: START_PARKING_RIGHT
		});
		console.log("startParkingRight");
		Actions.startParkingRightMain();
	};
}