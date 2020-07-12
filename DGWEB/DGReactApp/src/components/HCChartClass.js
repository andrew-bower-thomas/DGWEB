import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import './css/HCChart.css';

export class HCChart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			options: {
				title: {
					text: ''
				},
				time: {
					useUTC: false
				},
				rangeSelector: {
					buttons: [{
						count: 5,
						type: 'second',
						text: '5S'
					}, {
						count: 20,
						type: 'second',
						text: '20S'
					}, {
						count: 1,
						type: 'minute',
						text: '1M'
					}, {
						count: 5,
						type: 'minute',
						text: '5M'
					}, {
						type: 'all',
						text: 'All'
					}],
					inputEnabled: false,
					selected: 4 // all
				},
				yAxis: {
					labels: {
						align: "right",
						x: -3
					},
					title: {
						text: "Price"
					},
					resize: {
						enabled: false
					}
				},
				exporting: {
					enabled: false
				},
				tooltip: {
					split: false
				},
				series: [
					{
						name: '',
						data: []
					}
				],
				chart: {
					styledMode: true
				}
			}
		};
	}

	componentDidMount() {
		this.setState({
			options: {
				title: {
					text: this.getChartTitle(this.props.symbol)
				},
				series: [{
					name: this.props.symbol,
					data: this.getHCFormattedSeriesData(this.props.historicalQuotes)
				}]
			}
		});
	}

	componentDidUpdate(prevProps) {
		if (this.props.historicalQuotes !== prevProps.historicalQuotes) {
			this.setState({
				options: {
					series: [{
						data: this.getHCFormattedSeriesData(this.props.historicalQuotes)
					}]
				}
			});
		}
		if (this.props.symbol !== prevProps.symbol) {
			this.setState({
				options: {
					title: {
						text: this.getChartTitle(this.props.symbol)
					},
					series: [{
						name: this.props.symbol,
						data: this.getHCFormattedSeriesData(this.props.historicalQuotes)
					}]
				}
			});
		}
		
		//https://github.com/highcharts/highcharts/issues/2431
		Highcharts.charts.forEach(chart => {
			if (chart !== undefined) {
				chart.reflow();
            }
		});
	}

	getChartTitle(symbol) {
		return symbol.concat(" Live Data");
	}

	getHCFormattedSeriesData(quotes) {
		var seriesData = [];
		quotes.forEach(quote => {
			seriesData.push([quote.quoteDT.getTime(), quote.price]);
		});
		return seriesData;
	}

	render() {
		return (
			<HighchartsReact
				highcharts={Highcharts}
				constructorType={"stockChart"}
				options={this.state.options}
			/>
		);
	}
}
