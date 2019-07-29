import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class GivsWeek extends Component {
	render () {
		return (
			<div className='chart'>
				< Bar                    
					data={this.props.givsWeekData}
					width={50}
					height={400}
					options={{ 
						legend: false,
						scales: {
							yAxes: [{
								ticks: {
									beginAtZero:true
								}
							}]},
						maintainAspectRatio:false
					}}
				/>
			</div>
		)
	}
}

export default GivsWeek;