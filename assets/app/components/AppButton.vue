<template>
  <button :disabled="disabled" :class="classes" v-bind="$attrs">
    <template v-if="loading">
      <div class="loading">
        <i class="fa fa-spinner-third fa-spin" />
      </div>
    </template>
    <slot v-else />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  props: {
    color: { type: String, default: 'primary' },
    size: { type: String, default: 'sm' },
    disabled: { type: Boolean },
    outline: { type: Boolean },
    auto: { type: Boolean },
    loading: { type: Boolean },
    icon: { type: Boolean },
  },
  setup(props) {
    const classes = computed(() => [
      'btn',
      `btn-${props.size}`,
      `btn-${props.color}`,
      props.loading ? 'btn-loading' : '',
      props.icon ? 'btn-icon' : '',
      props.disabled ? 'disabled' : '',
      props.outline ? 'btn-outline' : '',
      props.auto ? 'btn-auto' : '',
    ]);

    return { classes };
  },
});
</script>
