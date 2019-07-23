import React, { Component } from 'react';
import Header from '../Header.js';
import GivsWeek from './GivsWeek.js';

class AnalyticsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemData :{
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

    render() {
        return (
            <div>
                <Header merchant={this.props.merchant} logout={this.props.logout} />
                <GivsWeek />
                <ItemsWeek />
                <Footer />
            </div>
        );
    };

}
export default AnalyticsPage;