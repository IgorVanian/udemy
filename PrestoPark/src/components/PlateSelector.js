import React, { Component, StyleSheet } from 'react';
import { View, Text, TouchableOpacity, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class PlateSelector extends Component {

	state = {
		plate: 'DJ-072-GT'
	}


  	render() {
  		return (
			<View style={this.props.style}>
		          <Picker
						style={this.props.style}
						selectedValue={this.state.plate}
						onValueChange={(plate) => this.setState({plate: plate})}
						mode='dropdown'
						itemStyle={this.props.itemStyle}>
						<Picker.Item label="DJ-072-GT" value="dj072gt" />
						<Picker.Item label="EC-422-AB" value="ec422ab" />
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

export { PlateSelector };

