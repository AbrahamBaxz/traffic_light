import React from "react";
import '../../../App.css'
import { interpret } from "xstate";
import {pedesMachine} from '../index'

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



class PedesComp extends React.Component {
	state = {
	  current2: pedesMachine.initialState,
	  pedtimer: 0,
	};
  
	service2 = interpret(pedesMachine).onTransition((current2) => {
	  const newTime = current2.context.pedtimer;
  
	  return this.setState({ current2, pedtimer: newTime });
	});
  
	componentDidMount() {
	  this.service2.start();
	}
  
	render() {
	  const { current2, pedtimer } = this.state;
	  return (
		<div className="App">
				  <div className="container">
					  <div className="light">
						  <div className="circle" style={current2.matches('stand') ? colors.red : colors.grey}></div>
						  {/* {<div className="circle" style={current.matches('yellow') ? colors.yellow : colors.grey}></div>} */}
						  <div className="circle" style={current2.matches('walk') ? colors.green : colors.grey}></div>
					  </div>
					  <div className="timer">{pedtimer}</div>
				  </div>
		</div> 


	  );
	}
  }

  export default PedesComp;
