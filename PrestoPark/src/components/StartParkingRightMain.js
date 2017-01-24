import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image,
	LayoutAnimation
} from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { selectParking, deselectParking } from '../actions';
import ActionButton from 'react-native-action-button';
// import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from './common';
import Footer from './Footer';
import axios from 'axios';

class StartParkingRightMain extends Component {

	state = {
		parkings: [{
			latlng: {
				latitude: 47.376558,
				longitude: 8.544738
			},
			title: "Am Central",
			description: "Seilergraben",
			type: "onstreet",
			tarifs: [{
				duration : "1h",
				price: "1 CHF"
			},
			{
				duration : "2h",
				price: "2 CHF"
			},
			{
				duration : "3h",
				price: "3 CHF"
			},
			{
				duration : "4h",
				price: "4 CHF"
			}]
		},
		{
			latlng: {
				latitude: 47.376078,
				longitude: 8.537694
			},
			title: "Globus",
			description: "Löwenstrasse 50",
			type: "onstreet",
			tarifs: [{
				duration : "1h",
				price: "1 CHF"
			},
			{
				duration : "2h",
				price: "2 CHF"
			},
			{
				duration : "3h",
				price: "3 CHF"
			},
			{
				duration : "4h",
				price: "4 CHF"
			}]
		}]
	};

	componentWillMount() {
		axios.get('http://10.0.0.27:3001/api/ParkingFacilities')
			.then(response => console.log(response))
			.catch(err => console.log(err));
	}

	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	onMarkerPress(parking) {
			this.props.selectParking( parking );
	}

	onMarkerDeselect() {
		this.props.deselectParking();
	}

	renderSensors() {
		if(this.state.hasSensors) {
			console.log("rendering");
			return this.state.groups.map((group, i) => {
				if(group.segment_a_latitude) {
					return <MapView.Marker
							key={i}
							coordinate={{
										latitude: parseFloat(group.segment_a_latitude),
										longitude: parseFloat(group.segment_a_longitude)
							}}
							title={group.name}
							image={{uri: 'http://layarimages.s3.amazonaws.com/images/bolognaparkmeter/icon_high.png'}}
						/>;
				}
			}); 
		}
	}

	render() {

console.log(ActionButton.getActionContainerStyle);
		console.log(this.state.groups);
		return (
			<View style={styles.container}>
				<MapView
					showsUserLocation={true}
					showsMyLocationButton={true}
					style={styles.map}
				    initialRegion={{
				      latitude: this.props.location.lat,
				      longitude: this.props.location.lng,
				      latitudeDelta: 0.0922,
				      longitudeDelta: 0.0421,
				    }}
				    onPress={() => this.onMarkerDeselect()}
				    toolbarEnabled={false}
				>

					{this.renderSensors()}

					{this.state.parkings.map((parking, key) => (
					    <MapView.Marker
					    	key={key}
					      	coordinate={parking.latlng}
					      	title={parking.title}
					      	description={parking.description}
					      	onPress={() => this.onMarkerPress(parking)}
					      	image={{uri: 'http://www.freeiconspng.com/uploads/parking-icon-png-17.png'}}
					    />
					  ))}
			  	</MapView>

		        <Footer />
			  	<ActionButton
			  		offsetY={110} 
			  		buttonColor="rgba(255,255,255,1)"
			  		degrees={360}
			  		icon={
			  			<Image source={require('../res/icons/prestopark.png')} style={styles.actionButtonImage} />
			  		}
			  	>
		          <ActionButton.Item buttonColor='#e84628' title="Offstreet" onPress={() => {}}>
		            <Icon name="qrcode" style={styles.actionButtonIcon} />
		          </ActionButton.Item>
		          <ActionButton.Item buttonColor='#cddc39' title="Onstreet" onPress={() => {}}>
		            <Image resizeMode="contain" source={require('../res/icons/onstreet.png')} style={styles.actionButtonItemImage} />
		          </ActionButton.Item>
		        </ActionButton>
			</View>
		);
	}
}
//rgba(8,39,81,1)
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#FFF',
 },
 map: {
   flex: 1
 },
 actionButtonIcon: {
 	fontSize: 20
 },
 actionButtonImage: {
 	height: 45,
 	width: 45
 },
 actionButtonItemImage: {
 	height: 25,
 }
});

const mapStateToProps = (state) => {
	const { parking } = state.map;
	const { city, location } = state.auth;

	return { parking, city, location };
}

export default connect(mapStateToProps, { selectParking, deselectParking })(StartParkingRightMain);