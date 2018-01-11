import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import AllDays from './components/all_days';

class App extends Component {

  render() {
    return(
      <div>
       <SearchBar/>
       <AllDays />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));
