import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, loginWithoutAccount } from '../actions';

class LoginForm extends Component {

	onEmailChange(text) {
		this.props.emailChanged(text);
	}
	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}
	onButtonPress(text) {
		const { email, password } = this.props;

		this.props.loginUser({ email, password });
	}

	renderButton() {
		if(this.props.loading) {
			return <Spinner />;
		}
		return (
			<Button
				onPress={this.onButtonPress.bind(this)}
			>
				Login
			</Button>
		);
	}

	onNoAccountPress() {
		this.props.loginWithoutAccount();
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="email@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>
				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="password"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>
					{this.props.error}
				</Text>
				
				<CardSection>
					{this.renderButton()}
				</CardSection>

				<CardSection>
					<Button
						onPress={this.onNoAccountPress.bind(this)}
					>
						Continue without an account
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading } = auth;

	return { email, password, error, loading };
};

export default connect(mapStateToProps, { 
	emailChanged, 
	passwordChanged, 
	loginUser,
	loginWithoutAccount
})(LoginForm);