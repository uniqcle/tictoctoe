import React from 'react';
import './App.css';

class App extends React.Component{
  
  constructor(props){
    super(props); 
    this.state = {
      sq : Array(9).fill(null), 
      count: 0
    }
  }

  clickHandler = (e) => {
     
    let data = e.target.getAttribute('data')
    let currentSq = this.state.sq; 
    if(currentSq[data] === null){
        currentSq[data] = (this.state.count % 2 === 0 ) ? 'X' : '0' 
        this.setState({count:this.state.count+1})
        this.setState({sq:currentSq})
    } else {
        alert('Так нельзя')
    }

    this.isWinner(); 

    console.log( currentSq )
  }

  isWinner = () => {

  }

  render(){
    return(
     
        <div className="tic">
          <div className="grid" data="0" onClick={this.clickHandler}>{this.state.sq[0]}</div>
          <div className="grid" data="1" onClick={this.clickHandler}>{this.state.sq[1]}</div>
          <div className="grid" data="2" onClick={this.clickHandler}>{this.state.sq[2]}</div>
          <div className="grid" data="3" onClick={this.clickHandler}>{this.state.sq[3]}</div>
          <div className="grid" data="4" onClick={this.clickHandler}>{this.state.sq[4]}</div>
          <div className="grid" data="5" onClick={this.clickHandler}>{this.state.sq[5]}</div>
          <div className="grid" data="6" onClick={this.clickHandler}>{this.state.sq[6]}</div>
          <div className="grid" data="7" onClick={this.clickHandler}>{this.state.sq[7]}</div>
          <div className="grid" data="8" onClick={this.clickHandler}>{this.state.sq[8]}</div>
        </div>
      
    )
  }

}

export default App;
