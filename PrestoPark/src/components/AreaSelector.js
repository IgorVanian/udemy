import React, { Component, StyleSheet } from 'react';
import { View, Text, TouchableOpacity, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class AreaSelector extends Component {

	state = {
		area: 'Verte'
	}


  	render() {
  		return (
			<View style={this.props.style}>
		          <Picker
						style={this.props.style}
						selectedValue={this.state.area}
						onValueChange={(area) => this.setState({area: area})}
						mode='dropdown'
						itemStyle={this.props.itemStyle}>
						<Picker.Item label="Verte" value="green" />
						<Picker.Item label="Orange" value="orange" />
						<Picker.Item label="Rouge" value="rouge" />
					</Picker>
		      </View>
		);
  	}
	
};

const styles = {
	container: {
		fontSize: 20
	}
};

export { AreaSelector };

