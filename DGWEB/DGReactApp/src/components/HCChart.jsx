import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import './css/HCChart.css';

export default function HCChart(props) {
	const [titleText, setTitleText] = useState('');
	const [seriesName, setSeriesName] = useState('');
	const [seriesData, setSeriesData] = useState([]);

	useEffect(() => {
		//https://github.com/highcharts/highcharts/issues/2431
		Highcharts.charts.forEach(chart => {
			if (chart !== undefined) {
				chart.reflow();
			}
		});
	}, []);

	useEffect(() => {
		setTitleText(getChartTitle(props.symbol));
		setSeriesName(props.symbol);
		setSeriesData(getHCFormattedSeriesData(props.historicalQuotes));
	}, [props.symbol, props.historicalQuotes]);

	//useEffect(() => {
	//	setSeriesData(getHCFormattedSeriesData(props.historicalQuotes, props.symbol));
	//}, [props.historicalQuotes, props.historicalQuotes[props.symbol]]);

	function getChartTitle(symbol) {
		return symbol.concat(" Live Data");
	}

	function getHCFormattedSeriesData(quotes) {
		var seriesData = [];
		quotes.forEach(quote => {
			seriesData.push([quote.quoteDT.getTime(), quote.price]);
		});
		return seriesData;
	}

	const options = {
		title: {
			text: titleText
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
		series: {
				name: seriesName,
				data: seriesData
		},
		chart: {
			styledMode: true
		}
	};

	return (
		<HighchartsReact
			highcharts={Highcharts}
			constructorType={"stockChart"}
			options={options}
		/>
	);

}
