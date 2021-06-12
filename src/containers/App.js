import React, {Component} from 'react';
import Cardlist from '../components/cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }


componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState ({robots: users}));
}

onSearchChange = (event) => {
  this.setState({ searchfield:  event.target.value});
}

  render() {
    const {robots, searchfield } = this.state;
    const filterrobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  });
    return !robots.length ?
      <h1 className='tc f1'> Loading </h1>
    :
          !filterrobots.length ?
      <div className='tc'>
    <h1 className='f1'>Robo Friends</h1>
    <Searchbox searchChange={this.onSearchChange}/>
      <h1 className='tc'> No Users Present </h1>
      </div>
    :
    
    <div className='tc'>
    <h1 className='f1'>Robo Friends</h1>
    <Searchbox searchChange={this.onSearchChange}/>
    <Scroll>
    <Cardlist robots={filterrobots}/>
    </Scroll>
    </div>
    ;
  }
}

export default App;