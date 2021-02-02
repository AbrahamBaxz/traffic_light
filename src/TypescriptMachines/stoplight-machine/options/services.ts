import { ServiceConfig } from "xstate";
import { IRecord, IContext } from "../types";

const services: IRecord<ServiceConfig<IContext, any>> = {
  secondTicker: ({ ticker_interval, timer }, event) => (callback, onEvent) => {
    const interval = setInterval(() => {
      callback("TICK");
    }, 1000 * ticker_interval);

    return () => {
      clearInterval(interval);
    };
  },
};

export default services;
