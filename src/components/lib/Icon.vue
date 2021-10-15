<template>
  <svg v-html="path" v-hoist:[style] />
</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { Options, prop, Vue, WithDefault } from "vue-class-component";
import { setupCache } from "axios-cache-adapter";

class Props {
  name: string = prop<string>({ required: true });
  height: WithDefault<number> = prop<number>({ required: false, default: 35 });
}

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});
const api = axios.create({
  adapter: cache.adapter,
});

@Options({})
export default class Icon extends Vue.with(Props) {
  public path = "";

  get style(): string {
    return `height: ${this.height}px;`;
  }

  async created(): Promise<void> {
    await api({
      url: `/icons/${this.name}.svg`,
      method: "get",
    }).then((response: AxiosResponse) => {
      this.path = response.data as string;
    });
  }
}
</script>
