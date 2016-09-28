/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Notfound from "./pages/Notfound";
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

const app=document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory} >
		<Route path="/" component={Layout}>
			<IndexRoute component={Featured}></IndexRoute>
			<Route path="archives(/:article)" component={Archives}></Route>
			<Route path="settings"  component={Settings}></Route>
			<Route path="*"  component={Notfound}></Route>
		</Route>
	</Router>,
	app);