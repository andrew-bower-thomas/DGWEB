import React, { Component } from 'react';
import { Table } from 'reactstrap';
import './css/TZScreenerRight.css';

export class TZScreenerRight extends Component {
	render() {
		return (
			<div className="screener-column" id="tz-screener-right">
				<Table>
					<thead>
						<tr>
							<th>Symbol</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{this.props.liveQuotes.map((quote) => (
							<tr key={quote.symbol}>
								<th>{quote.symbol}</th>
								<td>{quote.price}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		);
	}
}
