import React from 'react';
import './App.css';

class App extends React.Component {
  
constructor(props){
  super(props)

  this.state = {
    dataZelda: []
  }

}

 componentDidMount(){
  fetch("https://the-legend-of-zelda.p.rapidapi.com/places?limit=20&page=0&name=Hateno", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "674e487e74msh515def74c692eddp11ca19jsnc873c260e37d",
      "x-rapidapi-host": "the-legend-of-zelda.p.rapidapi.com"
    }
  })
  .then(response => response.json())
  .then(dataZeldaJSON => this.setState({dataZelda: dataZeldaJSON}))
  .catch(err => {
    console.error(err);
  });
 }

  render (){
    return (
    <div className="App">
      <header className="App-header">
        <div>
          Hola este es el API de The legend of Zelda
        </div>
      </header>      
    </div>
    );
  }
}

export default App;
