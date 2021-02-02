import { ConditionPredicate } from "xstate";
import { IContext } from "../types";
import { IRecord } from "../types";

const {

  REACT_APP_GREEN_TIME,
} = process.env;

const guards: IRecord<ConditionPredicate<IContext, any>> = {
  isZero: ({ timer }) => {
    return timer === 0;
  },

  isGreaterHalf: ({ timer }) => {
    return timer >=  (+REACT_APP_GREEN_TIME!/2);
  },

  isLessHalf: ({ timer }) => {
    return timer <=  (+REACT_APP_GREEN_TIME!/2);
  },

 

};

export default guards;
