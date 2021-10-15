<template>
  <draggable
    v-model="btnComputed"
    group="people"
    @start="drag = true"
    @end="drag = false"
    item-key="id"
    tag="transition-group"
  >
    <template #item="{ element }">
      <sp-social-button
        @button-clicked="$emit('button-clicked', element.url)"
        :type="element.name"
        :edit="edit"
        >{{ element.username }}</sp-social-button
      >
    </template>
  </draggable>
</template>

<script lang="ts">
import { Options, prop, Vue, WithDefault } from "vue-class-component";
import Draggable from "vuedraggable";
import { SocialTypes } from "./SocialButton.vue";

interface Buttons {
  username: string;
  name: SocialTypes;
  id: number;
  url: string;
}

class Props {
  public buttons: WithDefault<Buttons[]> = prop<Buttons[]>({
    required: false,
    default: [],
  });
  public edit: WithDefault<boolean> = prop<boolean>({
    required: false,
    default: false,
  });
}

@Options({
  components: {
    Draggable,
  },
})
export default class DragDrop extends Vue.with(Props) {
  public drag = false;

  public buttonsInstance: Buttons[] = [];

  get btnComputed(): Buttons[] {
    return this.buttons;
  }
}
</script>
