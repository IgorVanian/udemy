import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MapButton = ({ style, onPress, icon }) => {

	const { iconStyle } = styles;

	return (
		<TouchableOpacity 
			onPress={onPress}
			style={style}
		>
			<Icon name={icon} style={iconStyle} />
		</TouchableOpacity>
	);
};

const styles = {
	iconStyle: {
		fontSize: 15
	}
};

export { MapButton };