import { ActionFunctionMap } from "xstate";
import { IContext } from "../types";

const loggers: ActionFunctionMap<IContext, any> = {};

export default loggers;
