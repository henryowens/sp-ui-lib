<template>
  <button :class="style" @click.prevent="$emit('button-clicked')">
    <sp-icon :name="type" />
    <sp-text v-if="!edit" type="h5" font-weight="300"><slot /></sp-text>
    <input v-else type="text" :class="editStyle" />
  </button>
</template>

<script lang="ts">
import { percent, px } from "csx";
import { classes, style } from "typestyle";
import { Options, prop, Vue, WithDefault } from "vue-class-component";

import { brandColors } from "../../styles/brands/colors";
import { colors } from "../../styles/common/colors";

export enum SocialTypes {
  WhatsApp = "whatsapp",
  Facebook = "facebook",
  Twitter = "twitter",
  Instagram = "instagram",
  Snapchat = "snapchat",
}

type SocialStyles = {
  [key in SocialTypes]: string;
};

class Props {
  public type: SocialTypes = prop<SocialTypes>({
    required: true,
  });
  public edit: WithDefault<boolean> = prop<boolean>({
    required: false,
    default: false,
  });
}

@Options({})
export default class SocialButton extends Vue.with(Props) {
  private socialStyle(backgroundColor: string): string {
    return style({
      backgroundColor,
      color: colors.spWhite,
    });
  }

  public styles: SocialStyles = {
    whatsapp: this.socialStyle(brandColors.whatsapp.primary),
    facebook: this.socialStyle(brandColors.facebook.primary),
    twitter: this.socialStyle(brandColors.twitter.primary),
    instagram: this.socialStyle(brandColors.instagram.primary),
    snapchat: this.socialStyle(brandColors.snapchat.primary),
  };

  get baseStyle(): string {
    return style({
      padding: px(20),
      width: px(300),
      margin: `${px(20)} auto`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      border: "none",
      $nest: {
        "&:hover": {
          cursor: "pointer",
        },
      },
    });
  }

  get editingStyle(): string {
    const dimention = 24;
    return this.edit
      ? style({
          position: "relative",
          $nest: {
            "&::after": {
              content: "''",
              position: "absolute",
              width: px(dimention),
              height: px(dimention),
              background: "#AFCED5",
              right: px(-dimention / 2),
              top: px(-dimention / 2),
              borderRadius: percent(100),
            },
          },
        })
      : "";
  }

  get editStyle(): string {
    return style({
      margin: 0,
      border: "none",
      background: "transparent",
      fontSize: px(18),
      textAlign: "right",
      color: "white",
      $nest: {
        "&:focus": {
          outline: "none",
        },
      },
    });
  }

  get style(): string {
    return classes(this.baseStyle, this.styles[this.type], this.editingStyle);
  }
}
</script>
