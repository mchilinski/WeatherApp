import React, { Component } from 'react';


class DayBox extends Component {
  render() {
    return (
<div className="dayBox">
  <div className="dayName"></div>
  <div className="dayInfo">
    <div clasNames="todayName"></div>
    <div className="todayDate"></div>
    <div className="todayIcon"></div>
    <div className="todayTemperature"></div>
    <div className="todayMoreInfo"></div>
  </div>
  <div className="dayGraph"> </div>
  <div className="nextDays">
    <div className="day1">1</div>
    <div className="day2">2</div>
    <div className="day3">3</div>
    <div className="day4">4</div>
  </div>
</div>
);
}
}

export default DayBox;
