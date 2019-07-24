import React, { Component } from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js';

import GivsWeek from './GivsWeek.js';
import ItemsWeek from './ItemsWeek.js';

class AnalyticsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            givsWeekData:{}
        }
    }

    componentWillMount(){
        this.getGivsWeekData();
    }

    getGivsWeekData(){
        this.setState({
            givsWeekData :{
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
                }
            ]}
        })
    }
    render() {
        return (
            <div>
                <Header merchant={this.props.merchant} logout={this.props.logout} />
                <GivsWeek givsWeekdata={this.state.givsWeekdata} />
                <ItemsWeek />
                <Footer />
            </div>
        );
    };

}
export default AnalyticsPage;