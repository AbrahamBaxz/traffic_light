import { ConditionPredicate } from "xstate";
import { IContext } from "../types";
import { IRecord } from "../types";

const guards: IRecord<ConditionPredicate<IContext, any>> = {
    isTimesUp: ({ pedtimer }) => {
    return pedtimer === 0;
  },
};

export default guards;
