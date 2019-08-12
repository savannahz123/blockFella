import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    apiData: []
  }

  // a demo function to get data from server api
  async getDataFromAPI() {
    console.log("scraping...");
    
    axios.get("http://localhost:3001/api/scrape")
    .then((res) => (this.setState({apiData : res})))
    .catch(function(err) {
      console.log(err);
    })
  }

  // call API when the component is mounted
  componentDidMount() {
    this.getDataFromAPI();
  }

  render() {
    // get the API data for rendering
    let dataList = this.state.apiData.data;
    return (
      <div>
        hello, reactJS!
        {
          JSON.stringify(dataList)    // stringify the API JSON data
        }
      </div>
    )
  }
}

export default App;
