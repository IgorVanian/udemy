import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
		    apiKey: 'AIzaSyCo41QlYsp5d6HpachXhYmR-axuuzd2yWI',
		    authDomain: 'authentication-707ce.firebaseapp.com',
		    databaseURL: 'https://authentication-707ce.firebaseio.com',
		    storageBucket: 'authentication-707ce.appspot.com',
		    messagingSenderId: '663983522543'
		 });

		firebase.auth().onAuthStateChanged((user) => {
			if(user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {

		switch (this.state.loggedIn){
			case true:
				return (
					<CardSection>
						<Button
							onPress={() => firebase.auth().signOut()}
						>
							Log Out
						</Button>
					</CardSection>
				);
			case false:
				return <LoginForm />;
			default:
				return (
					<CardSection>
						<Spinner size="large" />
					</CardSection>
				);
		}

		if (this.state.loggedIn) {
			return (
				<CardSection>
					<Button>
						Log Out
					</Button>
				</CardSection>
			);
		}

		return <LoginForm />;
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;