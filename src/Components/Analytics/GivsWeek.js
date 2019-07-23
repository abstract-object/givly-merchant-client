import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class GivsWeek extends Component {
    constructor(props){
        super(props);
        this.state ={
            chartData :{
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                datasets: 
                [{
                    label:'GIVs this week',
                    data:[3,7,2,8,9,10],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(255, 206, 86, 0.3)',
                        'rgba(75, 192, 192, 0.3)',
                        'rgba(153, 102, 255, 0.3)',
                        'rgba(255, 159, 64, 0.3)'
                    ],
                },
                {
                    type:'line',
                    label:'Number of unique recipients',
                    data:[2,3,1,4,5,6]
                    
                }
            ]}
        } 
    }
    render () {
        return (
            <div className='chart'>
                <Bar 
                    data={this.state.chartData}
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