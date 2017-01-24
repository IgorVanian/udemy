import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DrawerButton = ({ style, onPress }) => {

	const { icon } = styles;

	return (
		<TouchableOpacity 
			onPress={onPress}
			style={style}
		>
			<Icon name="bars" style={icon} />
		</TouchableOpacity>
	);
};

const styles = {
	icon: {
		fontSize: 15
	}
};

export { DrawerButton };