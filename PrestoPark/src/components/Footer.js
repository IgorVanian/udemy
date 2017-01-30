import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, LayoutAnimation, ListView, Image } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { expandDetails, hideDetails } from '../actions';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from './common';

class Footer extends Component {

	componentWillMount() {

	}

	componentWillUpdate() {
		LayoutAnimation.easeInEaseOut();

		const { parking } = this.props;
		console.log("parking", parking);
		if(parking) {
			const ds = new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			});
			this.dataSource = ds.cloneWithRows(parking.tarifs);
		}
	}

	expandDetails() {
		const { expanded } = this.props;
		if(expanded) {
			this.props.hideDetails();
		} else {
			this.props.expandDetails(true);
		}
	}

	renderRow(tarif) {
		console.log(tarif);
		return(
			<View style={{flex: 1, borderBottomWidth: 0.2, borderBottomColor: 'white', flexDirection: 'row', paddingTop: 10, justifyContent: 'space-between' }}>
				<Text style={{ color: 'white' }}>
					{tarif.duration}
				</Text>
				<Text style={{ color: 'white' }}>
					{tarif.price}
				</Text>
			</View>
		);
	}

	renderDetails() {
		const { expanded } = this.props;
		if(expanded) {
			return (
				<ScrollView style={styles.detailView}>
					<ListView 
						style={styles.listView}
						dataSource={this.dataSource}
						renderRow={this.renderRow}
					/>
				</ScrollView>
			);
		}
	}

	render() {
		const { parking, expanded, city, country } = this.props;
		console.log(parking);
		if (parking) {

			let icon = null;
			if( parking.type === "onstreet" ){
				icon = "road";
			} else {
				icon = "road";
			}

			return (
				<View style={[ expandedStyle(expanded), styles.container ]}>
					<View style={styles.footer}>
						<View style={{flexDirection: 'row', justifyContent: 'space-between', flex:1}}>
							<View style={{flexDirection: 'row', flex: 6}}>
								<Icon style={styles.parkingIconStyle} name={icon} />
								<View style={{flexDirection: 'column', justifyContent: 'center'}}>
									<Text style={styles.parkingTitle}>
										{parking.title}					
									</Text>
									<Text style={styles.parkingDescription}>
										{parking.description}					
									</Text>
								</View>
							</View>
							<View style={{
								flexDirection: 'row',
								flex: 4
							}}>
								<View
									style={{
										justifyContent: 'center',
										alignItems: 'center',
										borderLeftWidth: 0.5,
										borderLeftColor: 'white',
										flex: 2
								}}>
									<TouchableOpacity 
										style={{
											justifyContent: 'center',
											alignItems: 'center',
											flex: 1
									}}>
										<Image resizeMode="contain" style={[...styles.footerActionButton, {height: 35}]} source={require('../res/icons/gps-guidage.png')} />
									</TouchableOpacity>
								</View>
								<View
									style={{
										justifyContent: 'center',
										alignItems: 'center',
										borderLeftWidth: 0.5,
										borderLeftColor: 'white',
										flex: 2
								}}>
									<TouchableOpacity 
										style={{
											justifyContent: 'center',
											alignItems: 'center',
											flex: 1
										}} 
										onPress={this.expandDetails.bind(this)}
									>
										<Icon style={[...styles.footerActionButton, {fontSize: 20, color: 'white'}]} name="angle-double-up" />
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
					{this.renderDetails()}
				</View>
			);
		} else {
			return (
				<View style={[ styles.footer, expandedStyle(expanded), styles.cityContainer ]}>
					<View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
						<Image source={require('../res/icons/city.png')} style={{ height: 50, width: 50, resizeMode: 'contain' }} />
						<View style={{ flexDirection: 'column' }}>
							<Text style={styles.cityLabel}>
								{city}					
							</Text>
							<Text style={styles.countryLabel}>
								{country}					
							</Text>
						</View>
					</View>
				</View>
			);
		}
	}
};

const expandedStyle = (expanded) => {
	console.log(expanded);
	if(expanded)
		return {
	   		top: 0,
   			backgroundColor: 'rgba(28,47,77,0.75)',
	   		...StyleSheet.absoluteFillObject
		}
	return {
		bottom: 0,
		backgroundColor: 'rgba(28,47,77,0.75)'
	}
}

const styles = StyleSheet.create({
 container: {
 	alignSelf: 'stretch',
 	flexDirection: 'column',
 	justifyContent: 'space-around',
   	position: 'absolute',
   	left: 0,
   	right: 0
 },
 cityContainer: {
 	flexDirection: 'row',
 	justifyContent: 'center',
 	alignItems: 'center',
   	position: 'absolute',
   	left: 0,
   	right: 0
 },
 footer: {
 	height: 85
 },
 actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
	parkingTitle: {
		color: 'white',
		fontSize: 18
	},
	parkingDescription: {
		color: 'white'
	},
	cityLabel: {
		color: 'white',
		fontSize: 18
	},
	countryLabel: {
		color: 'white',
		fontSize: 14
	},
	parkingIconStyle: {
		color: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		marginLeft: 10,
		marginRight: 10,
		fontSize: 50
	},
	footerActionButton: {
		marginLeft: 15,
		marginRight: 15
	},
	detailView: {
		flex: 1
	},
	listView: {
		paddingTop: 10,
		paddingLeft: 30,
		paddingRight: 30
	}
});

const mapStateToProps = (state) => {
	const { parking } = state.map;
	const { city, country, location } = state.auth;
	const { expanded } = state.footer;

	console.log(parking);

	return { parking, city, country, location, expanded };
}

export default connect(mapStateToProps, { expandDetails, hideDetails })(Footer);