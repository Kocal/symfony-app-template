<template>
  <div>
    Hello world!

    <AppButton size="xs" outline>Je suis un bouton</AppButton>
  </div>
</template>

<script lang="ts">
import AppButton from '@app/components/AppButton.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    AppButton,
  },
});
</script>
