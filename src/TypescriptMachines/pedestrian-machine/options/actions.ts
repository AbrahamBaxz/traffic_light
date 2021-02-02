import { ActionFunctionMap, assign, send } from "xstate";
import { IContext } from "../types";


const {
  REACT_APP_WALK_TIME,
  
  REACT_APP_STAND_TIME,
} = process.env;


const actions: ActionFunctionMap<IContext, any> = {

    countdown: assign({
      pedtimer: ({ pedtimer }) => {
          return pedtimer - 1;
        },
      }),

      assignWalkTimer: assign({
        pedtimer: (context) => {
          return +REACT_APP_WALK_TIME!;
        },
      }),

      assignStandTimer: assign({
        pedtimer: (context) => {
          return +REACT_APP_STAND_TIME!;
        },
      }),

      startClicker: send((_, event) => event, { to: "pedes-clicker" }),


  }

  export default actions;