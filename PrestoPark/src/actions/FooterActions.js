import { Actions } from 'react-native-router-flux';
import { 
	EXPAND_DETAILS,
	HIDE_DETAILS
} from './types';

export const expandDetails = (expanded) => {
	return {
		type: EXPAND_DETAILS,
		payload: { expanded }
	};
};

export const hideDetails = () => {
	return {
		type: HIDE_DETAILS
	};
};