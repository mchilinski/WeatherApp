import React, { Component } from 'react';

class CityNameSearch extends Component {
  constructor(props){
      super(props);
      this.state = {
        // editing: false,
        text: '',
      }
    }

// editing = () => {
//   this.setState({ editing: false });
// }
save = () => {
  // this.setState({ editing: true });
  this.props.getCity(this.state.text);
}

updateText = (e) => {
  this.setState({ text: e.target.value });
}

checkIfSend = (e) => {
  if (e.key === 'Enter') {
    this.props.getCity(this.state.text);
    // this.setState({ editing: true });
  }
}

// renderNormal() {
//   return(
//     <div className="CityNameAdd">
//       <input className="search-bar" placeholder="Wpisz nazwę miasta..."
//       type="text"
//       value={this.state.text}
//       onChange={this.updateText}
//       onKeyPress={this.checkIfSend}/>
//       <button className="saveCity" onClick={this.save}><img className="icon" src="./style/search.svg"/></button>
//     </div>
//   );
// }
//
// renderForm(){
//   return(
//     <div className="CityNameAdd">
//       <input className="search-bar"
//       placeholder={this.state.text}
//       value={this.state.text}
//       onClick={this.editing}/>
//       <button className="editCity" onClick={this.editing}><img className="icon" src="./style/pencil-edit-button.svg"/></button>
//     </div>
//   );
// }
render() {
  return(
    <div className="CityNameAdd">
      <input className="search-bar" placeholder="Find your city..."
      type="text"
      value={this.state.text}
      onChange={this.updateText}
      onKeyPress={this.checkIfSend}/>
      <button className="saveCity" onClick={this.save}><img className="icon" src="./style/search.svg"/></button>
    </div>
  );
  }
}

  export default CityNameSearch;
