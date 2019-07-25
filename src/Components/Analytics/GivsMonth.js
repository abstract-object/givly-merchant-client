import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class GivsMonth extends Component {
    render () {
        return (
            <div className='chart'>
                < Bar 
                    data={this.props.givsMonthData}
                    width={50}
                    height={400}
                    options={{ 
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

export default GivsMonth;