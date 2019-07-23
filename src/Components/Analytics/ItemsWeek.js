import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class ItemsWeek extends Component {
    constructor(props){
        super(props);
        this.state ={
            chartData :{
                labels: ['Banana', 'Pants', 'Coffee', 'Gloves', 'Kite'],
                datasets: 
                [{
                    label:'GIVs this week',
                    data:[3,7,2,8,9],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(255, 206, 86, 0.3)',
                        'rgba(75, 192, 192, 0.3)',
                        'rgba(153, 102, 255, 0.3)',
                        'rgba(255, 159, 64, 0.3)'
                    ],
                }
            ]}
        } 
    }
    render () {
        return (
            <div className='chart'>
                < Doughnut 
                    data={this.state.chartData}
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