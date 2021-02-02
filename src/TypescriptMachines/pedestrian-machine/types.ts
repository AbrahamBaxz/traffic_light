import { AnyEventObject } from "xstate";

export interface IMachineEvents extends AnyEventObject {
    type:"CLICK";
}

export interface IContext {

    pedtimer: number;
    ticker_interval: number
}

export interface IRecord<TEntry> {
  [key: string]: TEntry;
}
