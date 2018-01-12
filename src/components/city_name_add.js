import React, { Component } from 'react';

class CityNameAdd extends Component {
  constructor(props){
      super(props);
      this.state = {
        editing: false,
        text: '',
      }
    }

editing = () => {
  this.setState({ editing: false });
}
save = () => {
  this.setState({ editing: true });
}

//
// updateText = (e) => {
//     this.setState({ text: e.target.value });
//   }
// checkIfSend = (e) => {
//     if (e.key === 'Enter') {
//       this.props.getDrinks(this.state.text);
//     }
//   }

renderNormal() {
  return(
    <div className="CityNameAdd">
      <input className="search-bar" placeholder="Wpisz nazwę miasta..."
      value={this.state.text}
      onChange={this.updateText}
      onKeyPress={this.checkIfSend}/>
      <button className="saveCity" onClick={this.save}><img className="icon" src="./style/search.svg"/></button>
    </div>
  );
}

renderForm(){
  return(
    <div className="CityNameAdd">
      <input className="search-bar" placeholder={this.state.text} onClick={this.editing}/>
      <button className="editCity" onClick={this.editing}><img className="icon" src="./style/pencil-edit-button.svg"/></button>
    </div>
  );
}
render() {
    if(this.state.editing){
      return this.renderForm();
    }else{
      return this.renderNormal();
    }
  }
  }

  export default CityNameAdd;
