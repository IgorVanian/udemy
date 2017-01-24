import { Actions } from 'react-native-router-flux';
import { 
	SELECT_PARKING,
	DESELECT_PARKING
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