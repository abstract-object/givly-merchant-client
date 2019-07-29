import React, { Component } from 'react';
import Header from '../Header.js';

import GivsWeek from './GivsWeek.js';
import GivsMonth from './GivsMonth.js';
import ItemsWeek from './ItemsWeek.js';
import RecipientsWeek from './RecipientsWeek.js';
import RecipientsMonth from './RecipientsMonth.js';
const cart = "/cart.png"


class AnalyticsPage extends Component {
  constructor(props) {
  super(props);

  this.state = {
    givsWeekData:{},
    givsMonthData:{},
    itemData:{},
    recipientWData:{},
    recipientMData:{},
    currentGivs:1,
    currentRecs:1,
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
      labels: ['Friday', 'Saturday', 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday' ],
      datasets: 
      [{
        data:[3,7,2,1,0,0,0],
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
      labels: [ '3', '4', '5', '6', '7', '8', '9', '10', 
          '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
          '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '1'],
      datasets: 
        [{
        data:[0,0,0,4,5,
          3,7,2,10,3,
          7,2,8,9,10,
          3,7,2,8,9,
          10,3,8,9,7,
          3,7,2,1,0],
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
      recipientWData: {
        labels: ['Friday', 'Saturday', 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        datasets: 
        [{
          label:'Unique recipients',
          data:[1,2,3,5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.3)'
          ],
        }
      ]},
      recipientMData: {
        labels: [ '3', '4', '5', '6', '7', '8', '9', '10', 
          '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
          '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '1'],
      datasets: 
        [{
          label:'Unique recipients',
          data:[
            0,0,0,0,0,
            1,1,1,1,1,
            1,1,1,1,1,
            1,1,1,1,1,
            1,1,1,1,1,
            1,2,3,5],
          backgroundColor: [
            'rgba(255, 206, 86, 0.3)'
            ],
        }
    ]}
  })
  }

  epochDate = (seconds) => {
    var time = new Date (1970, 0, 1);
    time.setSeconds(seconds);
    return time;
  }

  addToThursday = (arr) => {
    arr.forEach( transaction => {
        if ( transaction.time === 5 ) {
            this.setState(prevState => {
                let givsWeekData = Object.assign({}, prevState.givsWeekData);
                givsWeekData.datasets[0].data[6] += transaction.givs;
                let givsMonthData = Object.assign({}, prevState.givsMonthData);
                givsMonthData.datasets[0].data[29] += transaction.givs;
                return {givsWeekData, givsMonthData};
            })
        }
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
        this.addToThursday(data.transactionList.map(datum => {
            return { time:new Date (this.epochDate(datum.createdAt.seconds)).getDay(), givs:datum.totalPrice }
        }))
        
    });
    })
    .catch(err => {this.setState({error: err})}
    )
    .catch(err => console.log(err));
  };

  toggle(index, category) {
    if (category === 'givs') {
      this.setState({
        currentGivs:index
      })
    } else if (category === 'recips') {
      this.setState({
        currentRecs:index
      })
    }
  }

  render() {
    return (
    <div>
      <Header merchant={this.props.merchant} logout={this.props.logout} />
      <div id='analytics-labels'>
          <div id='givs-heading'>
              <span > Givs </span>
          </div>
          <span className="time-setting"> <button onClick={this.toggle.bind(this, 1, 'givs')}> Week </button> </span>
          <span className="time-setting"> <button onClick={this.toggle.bind(this, 2, 'givs')}> Month </button> </span>
      </div>

      <div id="givs-charts">
          { this.state.currentGivs === 1 ? <GivsWeek givsWeekData={this.state.givsWeekData} /> : <GivsMonth givsMonthData={this.state.givsMonthData} /> }
          <img id='cartimg' src={cart} alt="cart"/>
      </div>

      <div id='analytics-labels'>
        <div id='givs-heading'>
          <span > Most Popular </span>
        </div>
        <span className="time2-setting"> <button onClick={this.toggle.bind(this, 1, 'recips')}> Week </button> </span>
        <span className="time2-setting"> <button onClick={this.toggle.bind(this, 2, 'recips')}> Month </button> </span>
      </div>

      <div id="item-charts">
          <ItemsWeek itemData={this.state.itemData} />
          { this.state.currentRecs === 1 ? <RecipientsWeek recipientWData={this.state.recipientWData} /> : <RecipientsMonth recipientMData={this.state.recipientMData} /> }

      </div>

      
      
    </div>
    );
  };

}
export default AnalyticsPage;