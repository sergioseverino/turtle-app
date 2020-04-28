import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from './Button.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: [100, 5, 100]};
    this.handleClick = this.handleClick.bind(this)
  }
  
  componentDidMount() {
    this.applyColor()
  }

//   handleClick() {this.setState() = { color : this.chooseColor()
//   }
// }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

  render() {
    return
    (<div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
Your Color is {this.formatColor(this.state.color)} 
        </h1>
        <Button onClick={this.handleCLick}
          light={this.isLight()} />
        </div> 
      )
    }
    

export default App