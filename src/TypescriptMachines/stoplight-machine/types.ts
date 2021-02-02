import { AnyEventObject } from "xstate";

export interface IMachineEvents extends AnyEventObject {
  type: "TICK" | "CROSS" | 'TIMESUP'| 'START' | 'END';

}

export interface IContext {
  timer: number;
  ticker_interval: number;
  pedesTimer: number;

}

export interface IRecord<TEntry> {
  [key: string]: TEntry;
}
