import React, { Component } from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js';

import GivsWeek from './GivsWeek.js';
import GivsMonth from './GivsMonth.js';
import ItemsWeek from './ItemsWeek.js';
import RecipientsWeek from './RecipientsWeek.js';
const cart = "/cart.png"


class AnalyticsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            givsWeekData:{},
            givsMonthData:{},
            itemData:{},
            recipientData:{},
            current: 1,
            error: null
        }
    }

    componentWillMount(){
        this.charts();
        // this.getTransactions();
    }

    charts(){
        this.setState({
            givsWeekData :{
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: 
                [{
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
                    data:[3,7,2,8,9,10,3,7,2,10,3,7,2,8,9,10,3,7,2,8,9,10,3,8,9,7,2,8,9,10,3,7,2,8,9,10],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(255, 206, 86, 0.3)',
                        'rgba(75, 192, 192, 0.3)',
                        'rgba(153, 102, 255, 0.3)',
                        'rgba(153, 192, 192, 0.3)',
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(255, 206, 86, 0.3)',
                        'rgba(75, 192, 192, 0.3)',
                        'rgba(153, 102, 255, 0.3)',
                        'rgba(153, 192, 192, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(255, 206, 86, 0.3)',
                        'rgba(75, 192, 192, 0.3)',
                        'rgba(153, 192, 192, 0.3)',
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(255, 206, 86, 0.3)',
                        'rgba(153, 192, 192, 0.3)',
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(75, 192, 192, 0.3)',
                        'rgba(153, 102, 255, 0.3)',
                        'rgba(153, 192, 192, 0.3)',
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
                    data:[8,8,2,8,2],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(255, 206, 86, 0.3)',
                        'rgba(75, 192, 192, 0.3)',
                        'rgba(153, 102, 255, 0.3)',
                        'rgba(255, 159, 64, 0.3)'
                    ],
                }
            ]},
            recipientData: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: 
                [{
                    label:'Unique recipients',
                    data:[3,3,7,10],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(255, 206, 86, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
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

    toggle(index) {
        this.setState({
            current:index
        })
    }
    render() {
        return (
            <div>
                <Header merchant={this.props.merchant} logout={this.props.logout} />
                <div id='givs-labels'>
                    <div id='givs-heading'>
                        <span > Givs </span>
                    </div>
                    <span className="time-setting"> <a href='#' onClick={this.toggle.bind(this,1)}> Week </a> </span>
                    <span className="time-setting"> <a href='#' onClick={this.toggle.bind(this,2)}> Month </a> </span>
                </div>

                <div id="givs-charts">
                    { this.state.current === 1 ? <GivsWeek givsWeekData={this.state.givsWeekData} /> : <GivsMonth givsMonthData={this.state.givsMonthData} /> }
                    <img id='cartimg' src={cart} alt="cart"/>
                </div>

                <div id='itm-rx-labels'>
                    <span className='itm-rx-label1'> Most Popular </span>
                    <span className='itm-rx-label1'> Week Month </span>
                </div>
                <div id="itm-rx-charts">
                    <ItemsWeek itemData={this.state.itemData} />
                    <RecipientsWeek recipientData={this.state.recipientData} />
                </div>

                <Footer />
                
            </div>
        );
    };

}
export default AnalyticsPage;