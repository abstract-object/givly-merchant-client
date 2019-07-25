import React, { Component } from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js';

import GivsWeek from './GivsWeek.js';
import ItemsWeek from './ItemsWeek.js';

class AnalyticsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            givsWeekData:{},
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
                <GivsWeek givsWeekData={this.state.givsWeekData} />
                <ItemsWeek itemData={this.state.itemData}/>
                <Footer />
            </div>
        );
    };

}
export default AnalyticsPage;