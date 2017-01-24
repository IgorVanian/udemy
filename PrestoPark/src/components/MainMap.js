import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image,
	LayoutAnimation, BackAndroid
} from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { selectParking, deselectParking, expandDetails } from '../actions';
import ActionButton from 'react-native-action-button';
// import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from './common';
import Footer from './Footer';
import DrawerView from './DrawerView';
import { MapButton } from './MapButton';
import { PositionButton } from './PositionButton';
import axios from 'axios';
import Drawer from 'react-native-drawer';

class MainMap extends Component {

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
		}],
		drawerOpen: false
	};

	_handleBackPressInDrawer = () => {
	    if (this.state.drawerOpen) {
	        this.closeDrawer();
	        return true;
	    }
	    return false;
	}

	closeDrawer() {
	    this.setState({
	        drawerOpen: false
	    });
		this._drawer.close();
		BackAndroid.removeEventListener('hardwareBackPress', this._handleBackPressInDrawer);
	};
	openDrawer() {
		this.setState({
	        drawerOpen: true
	    });
		this._drawer.open();
	    BackAndroid.addEventListener('hardwareBackPress', this._handleBackPressInDrawer);
	};

	componentWillMount() {
		axios.get('http://10.0.0.27:3001/api/ParkingFacilities')
			.then(response => console.log(response))
			.catch(err => console.log(err));
	}

	componentWillUpdate() {
		LayoutAnimation.linear();
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

	renderDrawerButton() {
		if(!this.props.expanded) {
			return (
				<MapButton
				  		onPress={this.openDrawer.bind(this)}
				  		style={[styles.mapButton, {
					  			top: 10,
								width: 50,
								height: 50,
								borderBottomRightRadius: 5,
								borderTopRightRadius: 5
			  			}]}
				  		icon="bars"
				  	>
			  	</MapButton>
			);
		}
	}

	renderPositionButton() {
		if(!this.props.expanded) {
			return (
				<MapButton
				  		onPress={this.openDrawer.bind(this)}
				  		style={[styles.mapButton, {
					  			top: 10,
					  			right: 0,
								width: 50,
								height: 50,
								borderBottomLeftRadius: 5,
								borderTopLeftRadius: 5,
			  			}]}
				  		icon="map-marker"
				  	>
			  	</MapButton>
			);
		}
	}

	renderFilterButton() {
		console.log(this.props.expanded);
		if(!this.props.expanded) {
			return (
				<MapButton
				  		style={[styles.mapButton, {
					  			top: 80,
					  			right: 0,
								width: 50,
								height: 50,
								borderBottomLeftRadius: 5,
								borderTopLeftRadius: 5
			  			}]}
				  		icon="filter"
				  	>
			  	</MapButton>
			);
		}
	}

	render() {

		console.log(this.state.groups);
		return (
			<Drawer
				ref={(ref) => this._drawer = ref}
				type="overlay"
				content={
					<DrawerView />
				}
				tapToClose={true}
				  openDrawerOffset={0.15} // 20% gap on the right side of drawer
				  panCloseMask={0.2}
				  closedDrawerOffset={-3}
				  styles={drawerStyles}
				  tweenHandler={ratio => ({
					main: {
					opacity: 1,
					},
					mainOverlay: {
					opacity: ratio / 2,
					backgroundColor: 'black',
					},
					})}
		  	>
			<View style={styles.container}>
				<MapView
					showsUserLocation={true}
					showsMyLocationButton={false}
					loadingEnabled={true}
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
			  	{this.renderDrawerButton()}
			  	{this.renderPositionButton()}
			  	{this.renderFilterButton()}
			  	<ActionButton
			  		offsetY={110} 
			  		buttonColor="rgba(8,39,81,1)"
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
		        <Footer />
			</View>
			</Drawer>
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
 	height: 55,
 	resizeMode: 'contain'
 },
 actionButtonItemImage: {
 	height: 25,
 },
 mapButton: {
	position: 'absolute',
	backgroundColor: '#fff',
	elevation: 5,
	justifyContent: 'center',
	alignItems: 'center'
 }
});

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3, elevation: 5},
  main: {paddingLeft: 0}
}

const mapStateToProps = (state) => {
	const { parking } = state.map;
	const { city, location } = state.auth;
	const { expanded } = state.footer;

	return { parking, city, location, expanded };
}

export default connect(mapStateToProps, { selectParking, deselectParking, expandDetails })(MainMap);