import React, { Component } from 'react';
import CityNameSearch  from './city_name_add';
import NextDays from './next_days';
import CurrectDay from './currect_day';
import axios from 'axios';

class DayBox extends Component {
  constructor(props){
      super(props);
      this.state = {
        isHidden: true,
        currectDay: false,
      }
    }

remove = (i) => {
  this.setState({ isHidden: false })
}


// getCity = (newText) => {
//   this.setState({ city: newText });
// }
getCity = (name) => {
  axios.get(`http://api.openweathermap.org/data/2.5/find?q=${name}&units=metric&appid=be4aa34862555ef16308a788d69c8575`)
    .then((data) => {
      const currectDay = data.data.list[0];
      this.setState({ currectDay });
    })
  };

render() {
        if (!this.state.isHidden) {
            return null;
        }else{
        return(
<div className="dayBox">
  <div className="dayName">
    <CityNameSearch  getCity={this.getCity} onKeyPress={this.checkIfSend} />
    <button className="deleteBox" onClick={this.remove}>X</button>
  </div>
  <CurrectDay currectDay={this.state.currectDay}/>
  <div className="dayGraph"> </div>
  <NextDays />
</div>
);
}
}
}

export default DayBox;
