import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class RecipientsMonth extends Component {
	render () {
		return (
			<div className='chart'>
				<Line 
					data={this.props.recipientMData}
					width={50}
					height={400}
					options={{ 
						scales: {
							yAxes: [{
								ticks: {
									beginAtZero:true,
									max:10
								}
							}]},
						maintainAspectRatio:false
					}}
				/>
			</div>
		)
	}
}

export default RecipientsMonth;