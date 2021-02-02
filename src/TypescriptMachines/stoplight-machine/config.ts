
import { AnyStateNodeDefinition, MachineConfig } from "xstate";
import { IContext, IMachineEvents } from "./types";

const { REACT_APP_TICKER_MULTIPLIER } = process.env;

const config: MachineConfig<
  IContext,
  AnyStateNodeDefinition,
  IMachineEvents
> = {
  id: "light",
  initial: "idle",
  context: {
    timer: 0,
    ticker_interval: +REACT_APP_TICKER_MULTIPLIER!,
    pedesTimer: 0,
    //clickedOnce: false
    
  },

  states:{

    idle:{

      on:{
        START:{target:'working'}
      }
      
    },
  
  
    working:{

      initial: "red",
      on:{
        END:{target:'idle'}
      },

      invoke: {
        id: "second-ticker",
        src: "secondTicker",
      },
    
      states: {
        red: {
          entry: ["assignRedTimer", "assignGeenPedes"],
    
          on: {
    
            TICK: [
                  {
                    target: "green",
                    cond: "isZero",
                  },
                  { actions: "countdown" },
                  ],
          },
    
        },
        yellow: {
          entry: ["assignYellowTimer", ],
    
          on: {
    
            TICK: [
              {
                target: "red",
                cond: "isZero",
              },
              { actions: "countdown" },],
    
    
    
          },
        },
        green: {
          entry: ["assignGreenTimer", "assignRedPedes"],
          exit:'yesPress',
          initial: 'pressable',
    
          on: {
    
            TICK: [
              {
                target: "yellow",
                cond: "isZero",
              },
    
              {
                cond: 'isLessHalf',
                actions: ["countdown",'timesUp']
              },
    
              { actions: "countdown" },
          
            ],
    
          },
    
          states:{
    
            pressable:{
    
              on:{
    
                CROSS:{         
                  cond: 'isGreaterHalf',
                  actions: ['deductTime', ],
                  target: 'notpressable'
                },
        
                TIMESUP: 'notpressable'
    
              }
    
            },
    
            notpressable:{
              type: 'final'
            }
    
          }
        },
    
      },

    },

  }




};
// GREEN pedes === RED light
// RED pedes === YELLOW and GREEN 
export default config;
