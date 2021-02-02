import { ServiceConfig } from "xstate";
import { IRecord, IContext } from "../types";

const services: IRecord<ServiceConfig<IContext, any>> = {
  pedesClicker: ({ ticker_interval, pedtimer }, event) => (callback, onEvent) => {
    const interval = setInterval(() => {
      callback("CLICK");
    }, 1000 * ticker_interval);

    return () => {
      clearInterval(interval);
    };
  },
};

export default services;
