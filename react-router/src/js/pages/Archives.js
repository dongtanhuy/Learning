/*jshint esversion: 6 */
import React from 'react';
import Article from '../components/Article';
export default class Achives extends React.Component{
	render() {
		const {query}=this.props.location;
		const {params}=this.props;
		const {article}=params;
		const {date,filter}=query;
		
		const Articles=[
			"Article 1",
			"Article 2",
			"Article 3",
			"Article 4",
			"Article 5",
		].map((title,i)=><Article key={i} title={title}/>);
		return (
			<div>
				<h1>Achives {this.props.params.article}</h1>
				article:{article},date:{date},filter:{filter}
				<div class="row">{Articles}</div>
			</div>
		);
	}
}