import React from "react";
import Countup from "react-countup";

const Cards = (props) => {
  if (!props.data.confirmed) {
    return "....loading";
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-sm">
          <div className="card text-white bg-danger mb-3">
            <div className="card-header">Infected</div>
            <div className="card-body">
              <h5 className="card-title">
                <Countup
                  start={0}
                  end={props.data.confirmed.value}
                  duration={1.5}
                  separator=","
                />
              </h5>
              <p className="card-text">
                {" "}
                {new Date(props.data.lastUpdate).toDateString()}
              </p>
              <p className="card-text">Number of Active cases of COVID-19</p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Recovered</div>
            <div className="card-body">
              <h5 className="card-title">
                <Countup
                  start={0}
                  end={props.data.recovered.value}
                  duration={1.5}
                  separator=","
                />
              </h5>
              <p className="card-text">
                {" "}
                {new Date(props.data.lastUpdate).toDateString()}
              </p>
              <p className="card-text">Number of Recovered cases</p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card text-white bg-secondary mb-3">
            <div className="card-header">Deaths</div>
            <div className="card-body">
              <h5 className="card-title">
                <Countup
                  start={0}
                  end={props.data.deaths.value}
                  duration={1.5}
                  separator=","
                />
              </h5>
              <p className="card-text">
                {new Date(props.data.lastUpdate).toDateString()}
              </p>
              <p className="card-text">Total deaths due to Covid-19</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
