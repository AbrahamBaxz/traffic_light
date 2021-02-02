import { ActionFunctionMap, assign, send } from "xstate";
import { IContext } from "../types";

const {
  REACT_APP_RED_TIME,
  REACT_APP_YELLOW_TIME,
  REACT_APP_GREEN_TIME,
} = process.env;

const actions: ActionFunctionMap<IContext, any> = {
  countdown: assign({
    timer: ({ timer }) => {
      return timer - 1;
    },

    pedesTimer: ({ pedesTimer }) => {
      return pedesTimer - 1;
    },

  }),


  assignRedTimer: assign({
    timer: (context) => {
      return +REACT_APP_RED_TIME!;
    },
  }),

  assignGeenPedes:assign({
    pedesTimer: (context) => {
      return +REACT_APP_RED_TIME!;
    },
  }),

  assignYellowTimer: assign({
    timer: (context) => {
      return +REACT_APP_YELLOW_TIME!;
    },
  }),
  assignGreenTimer: assign({
    timer: (context) => {
      return +REACT_APP_GREEN_TIME!;
    },
  }),

  assignRedPedes: assign({
    pedesTimer: (context) => {
      //console.log((+REACT_APP_GREEN_TIME!) + (+REACT_APP_YELLOW_TIME!))
      return ((+REACT_APP_GREEN_TIME!) + (+REACT_APP_YELLOW_TIME!));
    },
  }),
  startTicker: send((_, event) => event, { to: "second-ticker" }),

  goToPress: send('PRESS'),

  timesUp: send('TIMESUP'),

  deductTime: assign({

    timer: ({ timer }) => {
      return timer - 10;
    },

    pedesTimer: ({ pedesTimer }) => {
      return pedesTimer - 10;
    },

  }),


};

export default actions;
