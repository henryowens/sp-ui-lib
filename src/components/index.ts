import { App } from "@vue/runtime-core";

import Components from "./lib";

export default {
  install: (app: App): void => {
    app.use(Components);
  },
};
