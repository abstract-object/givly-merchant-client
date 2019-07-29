import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class ItemsWeek extends Component {
	render () {
		return (
			<div className='chart'>
				<Doughnut 
					data={this.props.itemData}
					width={100}
					height={500}
					options={{
							maintainAspectRatio:false
					}}
				/>
			</div>
		)
	}
}

export default ItemsWeek;