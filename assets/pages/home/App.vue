<template>
  <div>
    Hello world!

    <SymfonyAppTemplateButton size="xs" outline>
      Je suis un bouton
    </SymfonyAppTemplateButton>
  </div>
</template>

<script>
import SymfonyAppTemplateButton from '@app/components/Button';

export default {
  name: 'App',
  components: {
    SymfonyAppTemplateButton,
  },
};
</script>
