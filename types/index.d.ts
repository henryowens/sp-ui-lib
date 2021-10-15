import { Plugin } from "vue";

declare const spUiLib: Exclude<Plugin["install"], undefined>;

export default spUiLib;

