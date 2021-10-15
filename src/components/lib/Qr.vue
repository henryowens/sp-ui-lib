<template>
  <img
    :class="qrStyle"
    :src="`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${url}&bgcolor=000&color=71777B&ecc=H`"
  />
</template>

<script lang="ts">
import { style } from "typestyle";
import { Options, prop, Vue } from "vue-class-component";

class Props {
  public url: string = prop<string>({ required: true });
}

@Options({})
export default class Qr extends Vue.with(Props) {
  get qrStyle(): string {
    return style({
      display: "flex",
      margin: "20px auto",
    });
  }
}
</script>
