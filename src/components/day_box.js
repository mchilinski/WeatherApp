import React, { Component } from 'react';
import CityNameAdd from './city_name_add'

class DayBox extends Component {
  constructor(props){
      super(props);
      this.state = {
        isHidden: true,
      }
    }

remove = (i) => {
  this.setState({ isHidden: false })
}
// currectDay = (query) => {
//   axios.get(`http://www.api.openweathermap.org/data/2.5/weather?q=${query}`)
//     .then((data) => {
//       const { drinks } = data.data;
//       this.setState({ drinks }, () => {
//         this.getCurrentDrink(drinks[0].idDrink);
//       });
//     });
// }
//
// currectDay = (id) => {
//   axios.get(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
//     .then((data) => {
//       const currentDrink = data.data.drinks[0];
//       this.setState({ currentDrink });
//     });
// }

render() {
        if (!this.state.isHidden) {
            return null;
        }else{
        return(
<div className="dayBox">
  <div className="dayName">
    <CityNameAdd/>
    <button className="deleteBox" onClick={this.remove}>X</button>
  </div>
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
}

export default DayBox;
