import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cardlist from '../components/cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import {setSearchField, requestRobots} from './actions.js';
import './App.css';
import ErrorBoundary from '../components/ErrorBound.js';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    ispending: state.requestRobots.ispending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => {
      dispatch(setSearchField(event.target.value))
  },
    onRequestRobots: () => {
      dispatch(requestRobots());
    }
  }
}

class App extends Component {

componentDidMount() {
  this.props.onRequestRobots();
}


  render() {
    const {searchField, robots, ispending, onSearchChange} = this.props;
    const filterrobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  });
    return ispending ?
      <h1 className='tc f1'> Loading </h1>
    :
          !filterrobots.length ?
      <div className='tc'>
    <h1 className='f1'>Robo Friends</h1>
    <Searchbox searchChange={onSearchChange}/>
      <h1 className='tc'> No Users Present </h1>
      </div>
    :
    <div className='tc'>
    <h1 className='f1'>Robo Friends</h1>
    <Searchbox searchChange={onSearchChange}/>
    <Scroll>
      <ErrorBoundary>
        <Cardlist robots={filterrobots}/>
      </ErrorBoundary>
    </Scroll>
    </div>
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);