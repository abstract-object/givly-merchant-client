import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class GivsMonth extends Component {
    render () {
        return (
            <div className='charts'>
                < Bar 
                    data={this.props.givsMonthData}
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