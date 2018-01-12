import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DayBox from './components/day_box';
import CityNameAdd from './components/city_name_add';

const API_KEY = 'be4aa34862555ef16308a788d69c8575';

class App extends Component {
constructor(props) {
    super(props);
       this.state = {boxList: []};
       this.addClick = this.addClick.bind(this);
      }
addClick(event) {
    const boxList = this.state.boxList;
    this.setState({boxList: boxList.concat(<DayBox key={boxList.length} />)});
  }


  render() {
    return(
      <div className="container">
        <div className="logo"><h1>twoja<font color="#ede21b">POGODA</font></h1></div>
         {this.state.boxList}
         <button className="add_button" onClick={this.addClick} type="submit"> <img className="icon" src="./style/add.svg"/> </button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));
