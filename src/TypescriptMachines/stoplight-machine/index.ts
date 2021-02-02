import { Machine } from "xstate";

import config from "./config";
import options from "./options";

export const lightMachine = Machine(config, options);
