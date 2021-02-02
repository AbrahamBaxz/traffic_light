import { AnyStateNodeDefinition, MachineConfig } from "xstate";
import { IContext,IMachineEvents } from './types'

const { REACT_APP_TICKER_MULTIPLIER } = process.env;

 const config: MachineConfig<
    IContext,AnyStateNodeDefinition,IMachineEvents> ={

        id: "peds",
        initial: "walk",
        context: {
            pedtimer:0,
            ticker_interval: +REACT_APP_TICKER_MULTIPLIER!,
        },
        states:{

            walk:{
                entry:['assignWalkTimer', 'startClicker'],
                invoke:{
                    id: "pedes-clicker",
                    src: "pedesClicker",
                },
                on: {
                    "": {
                      target: "stand",
                      cond: "isTimesUp",
                    },
                    CLICK: { actions: "countdown" },
                  },

            },

            stand:{
                entry:['assignStandTimer', 'startClicker'],
                invoke:{
                    id: "pedes-clicker",
                    src: "pedesClicker",
                },
                on: {
                    "": {
                      target: "walk",
                      cond: "isTimesUp",
                    },
                    CLICK: { actions: "countdown" },
                  },
            }

        },


};

export default config;