import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppButton extends Vue {
  @Prop({ type: String, default: 'primary' })
  readonly color!: string;

  @Prop({ type: String, default: 'sm' })
  readonly size!: string;

  @Prop({ type: Boolean, default: false })
  readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly outline!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly auto!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly loading!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly icon!: boolean;

  genClasses(): Array<string> {
    return [
      'btn',
      `btn-${this.size}`,
      `btn-${this.color}`,
      this.loading ? 'btn-loading' : '',
      this.icon ? 'btn-icon' : '',
      this.disabled ? 'disabled' : '',
      this.outline ? 'btn-outline' : '',
      this.auto ? 'btn-auto' : '',
    ];
  }

  render(): JSX.Element {
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
  }
}
