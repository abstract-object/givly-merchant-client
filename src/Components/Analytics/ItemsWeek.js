import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class ItemsWeek extends Component {
    constructor(props){
        super(props);
        this.state ={
            itemData:props.itemData
        } 
    }
    render () {
        return (
            <div className='chart'>
                < Doughnut 
                    data={this.state.itemData}
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