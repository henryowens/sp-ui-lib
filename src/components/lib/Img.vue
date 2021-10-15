<template>
  <img :class="style" :src="src" alt="/users/default.png" />
</template>

<script lang="ts">
import { Options, prop, WithDefault, Vue } from "vue-class-component";
import { classes, style } from "typestyle";
import { percent, px } from "csx";

enum ImageType {
  Avatar = "avatar",
  Cover = "cover",
}

class Props {
  public src: WithDefault<string> = prop<string>({
    required: false,
    default: "/users/default.png",
  });
  public type: WithDefault<ImageType> = prop<ImageType>({
    required: false,
    default: ImageType.Avatar,
  });
  public center: WithDefault<boolean> = prop<boolean>({
    required: false,
    default: false,
  });
}

@Options({})
export default class Img extends Vue.with(Props) {
  public avatarImageStyle = style({
    borderRadius: percent(100),
    height: px(125),
    width: px(125),
  });
  public coverImageStyle = style({
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: px(200),
    width: percent(100),
    filter: `blur(${px(10)})`,
  });

  public centerStyle = style({
    margin: "0 auto",
    display: "flex",
  });

  get baseStyle(): string {
    switch (this.type) {
      case ImageType.Cover:
        return this.coverImageStyle;
      case ImageType.Avatar:
      default:
        return this.avatarImageStyle;
    }
  }

  get style(): string {
    return classes(this.baseStyle, this.center && this.centerStyle);
  }
}
</script>
