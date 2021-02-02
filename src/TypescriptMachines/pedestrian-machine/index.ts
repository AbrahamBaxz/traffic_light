import { Machine } from "xstate";

import config from "./config";
import options from "./options";

export const pedesMachine = Machine(config, options);