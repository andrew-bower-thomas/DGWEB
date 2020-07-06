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
					data: this.getHCFormattedSeriesData(this.props.historicalQuotes, this.props.symbol)
				}]
			}
		});
	}

	componentDidUpdate(prevProps) {
		if (this.props.historicalQuotes !== prevProps.historicalQuotes) {
			this.setState({
				options: {
					series: [{
						data: this.getHCFormattedSeriesData(this.props.historicalQuotes, this.props.symbol)
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
						data: this.getHCFormattedSeriesData(this.props.historicalQuotes, this.props.symbol)
					}]
				}
			});
		}

		if (Highcharts.charts.length > 0) {
			Highcharts.charts[0].reflow();
		}
	}

	getChartTitle(symbol) {
		return symbol.concat(" Live Data");
	}

	getHCFormattedSeriesData(quotes, symbol) {
		var seriesData = [];
		if (symbol in quotes) {
			quotes[symbol].forEach(quote => {
				seriesData.push([quote.quoteDT.getTime(), quote.price]);
			});
		}
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



//const groupingUnits = [
//	[
//		"week", // unit name
//		[1] // allowed multiples
//	],
//	["month", [1, 2, 3, 4, 6]]
//];

//export class HCChart extends Component {
//	constructor(props) {
//		super(props);

//		this.state = {
//			options: {
//				rangeSelector: {
//					selected: 1
//				},
//				title: {
//					text: "AAPL Historical"
//				},
//				yAxis: [
//					{
//						labels: {
//							align: "right",
//							x: -3
//						},
//						title: {
//							text: "OHLC"
//						},
//						height: "60%",
//						lineWidth: 2,
//						resize: {
//							enabled: true
//						}
//					},
//					{
//						labels: {
//							align: "right",
//							x: -3
//						},
//						title: {
//							text: "Volume"
//						},
//						top: "65%",
//						height: "35%",
//						offset: 0,
//						lineWidth: 2
//					}
//				],
				//tooltip: {
				//	split: true
				//},
				//series: [
				//	{
				//		type: "candlestick",
				//		name: "AAPL",
				//		data: this.props.ohlc,
				//		dataGrouping: {
				//			units: groupingUnits
				//		}
				//	},
				//	{
				//		type: "column",
				//		name: "Volume",
				//		data: this.props.volume,
				//		yAxis: 1,
				//		dataGrouping: {
				//			units: groupingUnits
				//		}
				//	}
				//],
				//chart: {
				//	styledMode: true,
				//	events: {
				//		click: this.onClick.bind(this)
				//	}
				//}
//			}
//		};
//	}

//	onClick = (e) => {
//		console.log("date: " + Highcharts.dateFormat("%Y-%m-%d", e.xAxis[0].value));
//	}

//	componentDidUpdate(prevProps) {
//		if ((this.props.ohlc !== prevProps.ohlc) || (this.props.volume !== prevProps.volume)) {
//			this.setState({
//				options: {
//					series: [{
//						data: this.props.ohlc
//					}, {
//						data: this.props.volume
//					}]
//				}
//			});
//		}
//	}

//	render() {
//		return (
//			<HighchartsReact
//				highcharts={Highcharts}
//				constructorType={"stockChart"}
//				options={this.state.options}
//			/>
//		);
//	}
//}