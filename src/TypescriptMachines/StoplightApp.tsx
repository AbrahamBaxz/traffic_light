import React from "react";
import '../App.css';
import { interpret } from "xstate";
import { lightMachine } from "./stoplight-machine";


const colors = {
	red: {
		backgroundColor: '#cc3232',
	},
	yellow: {
		backgroundColor: '#e7b416',
	},
	green: {
		backgroundColor: '#2dc937',
	},
	grey: {
		backgroundColor: 'grey',
	},
};

class StoplightApp extends React.Component {
  state = {
    current: lightMachine.initialState,
	timer: 0,
	pedesTimer: 0,
	clickedOnce:false
  };


  

  service = interpret(lightMachine).onTransition((current) => {
	const newTime = current.context.timer;
	const newPedesTimer = current.context.pedesTimer;

  return this.setState({ current, timer: newTime, pedesTimer:newPedesTimer, /*clickedOnce:clickStatus*/ });
  });


  componentDidMount() {
	this.service.start();

  }

   whatColor=(current:any) => {
 
	if(current.matches('working.red'))
		return 'timerRed'
	
	else if(current.matches('working.yellow'))
		return 'timerYellow'
	
	else if(current.matches('working.green'))
		return 'timerGreen'
	
	else
	return 'timer'
  }

  whatColorPedes=(current:any) => {
 
	if(current.matches('working.red'))
		return 'timerGreen'
	
	else if(current.matches('working.yellow'))
		return 'timerRed'
	
	else if(current.matches('working.green'))
		return 'timerRed'
	
	else
	return 'timer'
  }

  render() {
	const { current, timer,pedesTimer } = this.state;

    return (
      <div className="App">
				<div className="container">
					<div className="light">
						<div className="circle" style={current.matches('working.red') ? colors.red : colors.grey}></div>
						<div className="circle" style={current.matches('working.yellow') ? colors.yellow : colors.grey}></div>
						<div className="circle" style={current.matches('working.green') ? colors.green : colors.grey}></div>
					</div>
					<div className={this.whatColor(current)}>{timer}</div>
				</div>
				{/* <PedesComp/> */}

        <button
            className="myButton"
            style={ current.matches('working.green.pressable') ? colors.green : colors.grey}
            onClick={()=> this.service.send("CROSS") }>
            Cross
          </button>

        <div className="icons">

          {/* <div className="light"> */}
          <i
            className="fas fa-male icon"
            style={
              current.matches("working.red")
                ? { color: "green" }
                : { color: "grey" }
            }
          ></i>
          <i
            className="fas fa-male icon"
            style={
              (
				current.matches("working.yellow") ||
                current.matches("working.green")
              )
                ? { color: "red" }
                : { color: "grey" }
            }
          ></i>
          {/* </div> */}
          <div className={this.whatColorPedes(current)}>
            {pedesTimer}
          </div>

        </div>

        {current.matches("idle") && <button className="myButton"
                                        onClick={ ()=> this.service.send("START") }
                                      >ON</button>}
          {current.matches("working") && <button className="myButton"
                              onClick={ ()=> this.service.send("END") }
                            >OFF</button>}

      </div>
	  

    );
  }
}
/**/


export default StoplightApp;
