import React from 'react';
import {Link} from 'react-router';
import Footer from '../components/layout/Footer';
/*jshint esversion: 6 */
import Nav from '../components/layout/Nav';
export default class Layout extends React.Component{
	render() {
		console.log(this.props.children);
		const {location} = this.props;
		const containerStyle={
			marginTop:"60px"
		}
		return (
			<div>
				<Nav />
				<div class="container" style={containerStyle}>
					<div class="row">
						<div class="col-md-12">
							<h1>KillerNews.net</h1>
							{this.props.children}
						</div>
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}