<template>
  <div class="tab">
    <slot />
  </div>
</template>

<script lang="ts">
import { Options, prop, Vue } from "vue-class-component";

class Props {
  public name: string = prop<string>({
    required: true,
  });
}

@Options({})
export default class Tab extends Vue.with(Props) {}
</script>
