import React, { Component } from 'react';
import './css/Ticker.css';

export class Ticker extends Component {
	static displayName = Ticker.name;

	constructor(props) {
		super(props);
		this.state = { marketData: [] };
	}

	componentDidMount() {
		this.populateWeatherData();
		this.interval = setInterval(() => { this.populateWeatherData(); }, 3000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	async populateWeatherData() {
		const response = await fetch('https://localhost:44392/api/marketdata');
		console.log(response);
		const data = await response.json();
		console.log(data);
		//this.setState({ marketData: data });
	}

	render() {
		return (
			<div className="" id="ticker">
			<table className='table table-striped' aria-labelledby="tabelLabel">
					<thead>
						<tr>
							<th>Date</th>
							<th>Temp. (C)</th>
							<th>Temp. (F)</th>
							<th>Summary</th>
						</tr>
					</thead>
					<tbody>
						{this.state.marketData.map(marketData =>
							<tr key={marketData.date}>
								<td>{marketData.date}</td>
								<td>{marketData.temperatureC}</td>
								<td>{marketData.temperatureF}</td>
								<td>{marketData.summary}</td>
							</tr>
						)}
					</tbody>
				</table>
				</div>
		);
	}
}
