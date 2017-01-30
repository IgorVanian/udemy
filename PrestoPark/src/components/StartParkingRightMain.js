import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image,
	LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { selectParking, deselectParking } from '../actions';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import Slider from 'react-native-slider';
import { PlateSelector } from './PlateSelector';
import { AreaSelector } from './AreaSelector';
import { Hr } from './common';
import CircularSlider from 'react-native-circular-slider';

class StartParkingRightMain extends Component {

	state = {
	    startAngle: Math.PI * 10/6,
	    angleLength: Math.PI * 7/6,
	  }

	componentWillMount() {

	}


	render() {
		console.log("rendering StartParkingRightMain");
		console.log(this.state.area);
		return (
			<View style={styles.container}>
				<Hr>
					Voiture
				</Hr>
				<View style={styles.platePickerContainer}>
					<Icon name="car" style={{ fontSize: 20, paddingLeft: 20, paddingRight: 20 }} />
					<PlateSelector style={ styles.platePicker } />
				</View>
				<Hr>
					Zone
				</Hr>
				<View style={[styles.platePickerContainer]}>
					<Icon name="product-hunt" style={{ fontSize: 20, paddingLeft: 20, paddingRight: 20 }} />
					<AreaSelector style={ styles.platePicker } />
				</View>
				
				
				<Hr>
					Durée
				</Hr>
				<View style={[styles.platePickerContainer]}>
					 <CircularSlider
					  startAngle={this.state.startAngle}
					  angleLength={this.state.angleLength}
					  onUpdate={({ startAngle, angleLength }) => this.setState({ startAngle, angleLength })}
					  segments={5}
					  strokeWidth={40}
					  radius={145}
					  gradientColorFrom="#ff9800"
					  gradientColorTo="#ffcf00"
					  showClockFace
					  clockFaceColor="#9d9d9d"
					  bgCircleColor="#171717"
					/>
				</View>


				<Hr>
					Récapitulatif
				</Hr>

			</View>
		);
	}
}

const areaColor = (color) => {
	console.log(color);
	return {
		backgroundColor: color
	}
}

//rgba(8,39,81,1)
const styles = StyleSheet.create({
 container: {
   flex: 1,
   flexDirection: 'column',
   padding:50,
   backgroundColor: '#FFF'
 },
 platePickerContainer: {
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   paddingBottom: 15,
   paddingTop: 15
 },
 platePicker: {
 	flex: 1
 },
 plateItemStyle: {
 	justifyContent: 'center',
 	alignItems: 'center',
 },
 areaPicker: {
 	flex: 1
 }
});

export default StartParkingRightMain;

