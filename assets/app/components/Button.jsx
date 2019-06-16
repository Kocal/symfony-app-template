export default {
  name: 'SymfonyAppTemplateButton',
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'sm',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    auto: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    genClasses() {
      return [
        'btn',
        `btn-${this.size}`,
        `btn-${this.color}`,
        this.loading && 'btn-loading',
        this.icon && 'btn-icon',
        this.disabled && 'disabled',
        this.outline && 'btn-outline',
        this.auto && 'btn-auto',
      ];
    },
  },
  render() {
    return (
      <button disabled={this.disabled} class={this.genClasses()} on={this.$listeners} {...this.$attrs}>
        {this.loading ? (
          <div class="loading">
            <i class="fa fa-spinner-third fa-spin" />
          </div>
        ) : (
          this.$slots.default
        )}
      </button>
    );
  },
};
