<template>
  <div>Axios</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from '../utils/axios';

export default defineComponent({
  name: 'AxiosPage',
  setup() {
    axios
      .post('/login', { username: 'admin' })
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log('res: ', res);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('err: ', err);
      });
  },
});
</script>

<style></style>
