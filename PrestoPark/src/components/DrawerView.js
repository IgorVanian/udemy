import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image,
	LayoutAnimation
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MapButton } from './MapButton';
import axios from 'axios';

class DrawerView extends Component {

	render() {

		return (
			<View style={{
				backgroundColor: 'white',
				flex: 1
			}}>
				<View style={styles.logoContainer}>
					<Image style={styles.logo} source={require('../res/icons/prestopark-full.png')} />
				</View>
				<View style={styles.profileContainer}>
					<Image style={styles.profileIcon} source={require('../res/icons/profile.png')} />
					<Text style={{color: 'white'}}>Igor VANIAN</Text>
					<Text style={{color: 'white'}}>DJ-072-GT</Text>
				</View>
				<View style={styles.menuItemsContainer}>
					<TouchableOpacity style={styles.menuItem}>
						<Image style={styles.menuItemIcon} source={require('../res/icons/subscription.png')} />
						<Text style={styles.menuItemText}>Mes abonnements</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.menuItem}>
						<Image style={styles.menuItemIcon} source={require('../res/icons/parking-right.png')} />
						<Text style={styles.menuItemText}>Mes tickets</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.menuItem}>
						<Image style={styles.menuItemIcon} source={require('../res/icons/history.png')} />
						<Text style={styles.menuItemText}>Historique de stationnement</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.menuItem}>
						<Image style={styles.menuItemIcon} source={require('../res/icons/fps.png')} />
						<Text style={styles.menuItemText}>Mes contraventions</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#FFF',
 },
 logoContainer: {
 	flex: 1,
 	justifyContent: 'center',
    alignItems: 'center'
},
profileContainer: {
	flex: 3,
 	justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.25,
    backgroundColor: 'rgba(8,39,81,1)'
},
menuItemsContainer: {
	flex: 6,
	justifyContent: 'space-around'
},
menuItem: {
	flexDirection: 'row',
	justifyContent: 'flex-start',
	alignItems: 'center',
	paddingLeft: 20
},
menuItemText: {
	paddingLeft: 10
},
 logo: {
 	height: 55,
 	resizeMode: 'contain'
 },
 profileIcon: {
 	height: 80,
 	resizeMode: 'contain'
 },
 menuItemIcon: {
 	width: 50,
 	height: 50
 }
});

export default DrawerView;