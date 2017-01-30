import React from 'react';
import { Navigator } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import MainMap from './components/MainMap';
import StartParkingRightMain from './components/StartParkingRightMain';

const RouterComponent = () => {

	return (
		<Router /* sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight}} */ panHandlers={null}>
			<Scene key="main">
				<Scene 
					key="mainMap"
					component={MainMap}
					hideNavBar
					
				/>
				<Scene 
					key="startParkingRightMain"
					component={StartParkingRightMain}
					hideNavBar
					initial
				/>
			</Scene>
			<Scene key="auth">
				<Scene 
					key="login"
					component={LoginForm}
					title="Please Login"
					hideNavBar
					initial
				/>
			</Scene>
		</Router>
	);
};

export default RouterComponent;