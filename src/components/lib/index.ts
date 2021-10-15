import { App } from "@vue/runtime-core";

import Tab from "./Tab.vue";
import TabContainer from "./TabContainer.vue";
import DragDrop from "./DragDrop.vue";
import Icon from "./Icon.vue";
import Img from "./Img.vue";
import Qr from "./Qr.vue";
import SocialButton from "./SocialButton.vue";
import Text from "./Text.vue";

export default {
  install: (app: App): void => {
    app.component("sp-tab", Tab);
    app.component("sp-tab-container", TabContainer);
    app.component("sp-drag-drop", DragDrop);
    app.component("sp-icon", Icon);
    app.component("sp-img", Img);
    app.component("sp-qr", Qr);
    app.component("sp-social-button", SocialButton);
    app.component("sp-text", Text);
  },
};
