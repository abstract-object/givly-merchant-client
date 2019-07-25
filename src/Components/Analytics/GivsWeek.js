import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class GivsWeek extends Component {
    constructor(props){
        super(props);
        this.state ={
            givsWeekData : props.givsWeekData
        } 
    }
    render () {
        return (
            <div className='chart'>
                <Bar 
                    data={this.state.givsWeekData}
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

export default GivsWeek;