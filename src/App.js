import React, { Component } from "react";
import Chart from "./components/Chart/Chart";
import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import FetchData from "./api/index";

import "./App.css";

class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const data = await FetchData();

    this.setState({ data: data });
  }

  handleCountryChange = async (country) => {
    const data = await FetchData(country);

    this.setState({ data: data, country: country });
  };
  render() {
    return (
      <div className="container ">
        <Cards data={this.state.data}></Cards>
        <CountryPicker
          handleCountryChange={this.handleCountryChange}
        ></CountryPicker>
        <Chart data={this.state.data} country={this.state.country}></Chart>
        <p className="copy">
          <strong>Copyright © 2020-Till Death Kushagra's Ltd.</strong>
        </p>
      </div>
    );
  }
}

export default App;
