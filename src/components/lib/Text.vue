<template>
  <component :is="type" :class="style"><slot /></component>
</template>

<script lang="ts">
import { px } from "csx";
import { classes, style } from "typestyle";
import { Options, prop, Vue, WithDefault } from "vue-class-component";

enum TextTypes {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
}

enum TextAlign {
  Left = "left",
  Right = "right",
  Center = "center",
}

enum FontWeight {
  Light = 300,
  Regular = 400,
  Medium = 500,
  SemiBold = 600,
  Bold = 700,
}

type TextStyles = {
  [key in TextTypes]: string;
};

class Props {
  type: TextTypes = prop<TextTypes>({
    required: true,
  });
  textAlign: WithDefault<TextAlign> = prop<TextAlign>({
    required: false,
    default: TextAlign.Left,
  });
  fontWeight: WithDefault<FontWeight> = prop<FontWeight>({
    required: false,
    default: FontWeight.Regular,
  });
}

@Options({})
export default class Text extends Vue.with(Props) {
  private textStyle(size: number, margin: number) {
    return style({
      fontSize: px(size),
      margin: `${px(margin)} 0`,
    });
  }

  public styles: TextStyles = {
    h1: this.textStyle(35, 15),
    h2: this.textStyle(30, 15),
    h3: this.textStyle(25, 15),
    h4: this.textStyle(20, 10),
    h5: this.textStyle(18, 10),
    h6: this.textStyle(14, 10),
    p: this.textStyle(12, 10),
  };

  get style(): string {
    return classes(
      this.styles[this.type],
      style({
        textAlign: this.textAlign,
        fontWeight: this.fontWeight,
      })
    );
  }
}
</script>
