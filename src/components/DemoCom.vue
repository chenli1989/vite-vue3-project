<template>
  <h3>{{ title }}</h3>
  <div>{{ data }}</div>
  slot：
  <slot :title="title" />
  <DemoTsx>
    <span>testtsx</span>
  </DemoTsx>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import DemoTsx from './DemoTsx';

export default defineComponent({
  components: {
    DemoTsx,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const data = computed(() => {
      return `${props.title} content`;
    });

    return {
      data,
    };
  },
});
</script>
