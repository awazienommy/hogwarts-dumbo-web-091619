import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList'
import FilterComponent from './FilterComponent'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      filtered: false,
      sortCriteria: ""
    }

    this.toggleFilter = this.toggleFilter.bind(this)
  }
  
  // state = {
     
  //   }
  
  
    

   

  toggleFilter(){
    // console.log('clicked')
    this.setState({
      filtered: !this.state.filtered
    })
  }

  filtered(hogs){
    if(this.state.filtered){
      return hogs.filter(hog => hog.greased)
    } else{
      return hogs
    }
  }

  handleSort(event){
    this.setState({
      sortCriteria: event.target.value
    })
  }

  sortHogs(){
      if (this.state.sortCriteria === 'name'){
      return [...hogs].sort((a,b) => a.name.localeCompare(b.name))
    } else {
      return hogs
    }
  }

  render() {
    // console.log(hogs)
    return (
      <div className="App">
          < Nav />
          <FilterComponent handleSort={this.handleSort} toggleFilter={this.toggleFilter}/>
          < HogList hogs={this.filtered(hogs)}/>
        </div>
    )
  }
}

export default App;
