<template>
  <div>
    Hello world!

    <AppButton size="xs" outline>Je suis un bouton</AppButton>
  </div>
</template>

<script lang="ts">
import AppButton from '@app/components/AppButton';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    AppButton,
  },
})
export default class App extends Vue {}
</script>
