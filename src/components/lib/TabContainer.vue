<template>
  <div class="tab-container">
    <div :class="tabTitles">
      <div
        v-for="(tab, i) in tabs"
        :key="i"
        :class="tabTitle(i)"
        @click="
          activeIndex = i;
          $emit('tab-change', i);
        "
      >
        <sp-text type="h5" text-align="center" font-weight="300">{{
          tab
        }}</sp-text>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { colors } from "../../styles/common/colors";
import { percent, px } from "csx";
import { style } from "typestyle";
import { Options, prop, Vue } from "vue-class-component";

class Props {
  public tabs: string[] = prop<string[]>({ required: true });
}

@Options({})
export default class TabContainer extends Vue.with(Props) {
  public activeIndex = 0;

  public tabTitle(index: number): string {
    return style({
      width: percent(50),
      borderBottom: "2px solid",
      borderBottomColor:
        index === this.activeIndex ? colors.spBlue : colors.spGrey,
    });
  }

  get tabTitles(): string {
    return style({
      width: px(250),
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    });
  }
}
</script>
