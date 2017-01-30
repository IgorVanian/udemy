import { Actions } from 'react-native-router-flux';
import { 
	AREA_SELECT
} from './types';

export const areaSelect = (area) => {
	return {
		type: AREA_SELECT,
		payload: { area }
	};
};