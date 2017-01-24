import React from 'react';
import { Navigator } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import MainMap from './components/MainMap';
import StartParkingRightMain from './components/StartParkingRightMain';

const RouterComponent = () => {

	return (
		<Router /* sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight}} */ panHandlers={null}>
			<Scene key="auth">
				<Scene 
					key="login"
					component={LoginForm}
					title="Please Login"
					hideNavBar
					initial
				/>
			</Scene>
			<Scene key="main">
				<Scene 
					key="mainMap"
					component={MainMap}
					hideNavBar
					initial
				/>
				<Scene 
					key="startParkingRightMain"
					component={StartParkingRightMain}
					hideNavBar
				/>
			</Scene>
		</Router>
	);
};

export default RouterComponent;