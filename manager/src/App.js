import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		const config = {
		    apiKey: 'AIzaSyDA5_G0nYzi08R2SVtxrHtz0H2ZYlYAavU',
		    authDomain: 'manager-16035.firebaseapp.com',
		    databaseURL: 'https://manager-16035.firebaseio.com',
		    storageBucket: 'manager-16035.appspot.com',
		    messagingSenderId: '326686841227'
		};
		firebase.initializeApp(config);
	}
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;