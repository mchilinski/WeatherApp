import React, { Component } from 'react';
import _ from 'lodash';

const CurrectDay = ({currectDay}) => {
  if(currectDay == false){
    return (
      <div className="dayInfo">
        <div clasNames="todayName"></div>
        <div className="todayDate"></div>
        <div className="todayIcon"></div>
        <div className="todayTemperature"></div>
        <div className="todayMoreInfo"></div>
      </div>
    )
  };
  console.log({currectDay});
  return(
    <div className="dayInfo">
      <div clasNames="todayName"></div>
      <div className="todayDate"></div>
      <div className="todayIcon">
    <img className="" src={`https://openweathermap.org/img/w/${currectDay.weather[0].icon}.png`} /></div>
      <div className="todayTemperature">{currectDay.main.temp}°</div>
      <div className="todayMoreInfo">
          {currectDay.weather[0].description}
         <br/>Country: {currectDay.sys.country}</div>
    </div>
  )
  console.log({currectDay});
};
export default CurrectDay;
