import React, { Component } from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js';

import GivsWeek from './GivsWeek.js';
import GivsMonth from './GivsMonth.js';
import ItemsWeek from './ItemsWeek.js';


class AnalyticsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            givsWeekData:{},
            givsMonthData:{},
            itemData:{},
            error: null
        }
    }

    componentWillMount(){
        this.charts();
        this.getTransactions();
    }

    charts(){
        this.setState({
            givsWeekData :{
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
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
                        'rgba(153, 192, 192, 0.3)',
                        'rgba(255, 159, 64, 0.3)'
                    ],
                }
            ]},
            givsMonthData :{
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 
                        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
                datasets: 
                [{
                    label:'GIVs this week',
                    data:[3,7,2,8,9,10,3,7,2,8,9,10,3,7,2,8,9,10,3,7,2,8,9,10,3,7,2,8,9,10,3,7,2,8,9,10],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(255, 206, 86, 0.3)',
                        'rgba(75, 192, 192, 0.3)',
                        'rgba(153, 102, 255, 0.3)',
                        'rgba(153, 192, 192, 0.3)',
                        'rgba(255, 159, 64, 0.3)'
                    ],
                }
            ]},
            itemData: {
                labels: ['Banana', 'Pants', 'Coffee', 'Gloves', 'Kite'],
                datasets: 
                [{
                    label:'GIVs this week',
                    data:[3,7,2,8,2],
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

    getTransactions = () => {
        const options = {
            method: "post",
            headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: `merchantUuid=${this.props.merchant.id}`,
            mode:"cors"
        };
        
        fetch(`${this.props.host}/transaction/getTxByMerchant`, options)
        .then((response) => {
        response.json()
        .then(data => {
            console.log(data)
        })
        .catch(err => {this.setState({error: err})});
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Header merchant={this.props.merchant} logout={this.props.logout} />
                <div id="givs-charts">
                    <GivsWeek givsWeekData={this.state.givsWeekData} />
                    <GivsMonth givsMonthData={this.state.givsMonthData} />

                </div>
                <div id="item-chart">
                    <ItemsWeek itemData={this.state.itemData} />
                </div>
                <Footer />
                
            </div>
        );
    };

}
export default AnalyticsPage;