import React from 'react';
import { Text, View } from 'react-native';

const Hr = ({ weight, children }) => {

	const { hrStyle, textStyle } = styles;
	const hrWeight = {
		height: weight || 0.25
	};

	return (
		<View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
			<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 13}}>
				<View
					style={[hrStyle, hrWeight]}
				>
				</View>
			</View>

			<Text style={textStyle}>
					{children}
			</Text>
		</View>
	);
};

const styles = {
	textStyle: {
		color: 'grey',
		fontSize: 16,
		fontWeight: '600',
		backgroundColor: 'white',
		paddingLeft: 5,
		paddingRight: 5
	},
	hrStyle: {
		flex: 1,
		height: 0.25,
		backgroundColor: 'grey',

	}
};

export { Hr };