import { mount } from '@vue/test-utils';
import Button from '@app/components/AppButton';

describe('button', () => {
  it('default render', () => {
    expect.assertions(1);

    const wrapper = mount(Button);

    expect(wrapper.html()).toBe('<button class="btn btn-sm btn-primary"></button>');
  });

  it.each(['xs', 'sm', 'lg', 'xl'])('size "%s"', (color) => {
    expect.assertions(1);

    const wrapper = mount(Button, {
      propsData: {
        color,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it.each(['primary', 'danger', 'success'])('color "%s"', (color) => {
    expect.assertions(1);

    const wrapper = mount(Button, {
      propsData: {
        color,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it.each(['icon', 'outline', 'auto'])('basic property "%s"', (property) => {
    expect.assertions(1);

    const wrapper = mount(Button, {
      propsData: {
        [property]: true,
      },
    });

    expect(wrapper.html()).toBe(`<button class="btn btn-sm btn-primary btn-${property}"></button>`);
  });

  it('disabled', () => {
    expect.assertions(1);

    const wrapper = mount(Button, {
      propsData: {
        disabled: true,
      },
    });

    expect(wrapper.html()).toBe(`<button disabled="disabled" class="btn btn-sm btn-primary disabled"></button>`);
  });

  it('loading', () => {
    expect.assertions(1);

    const wrapper = mount(Button, {
      propsData: {
        loading: true,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('complex render', () => {
    expect.assertions(1);

    const wrapper = mount(Button, {
      propsData: {
        color: 'success',
        size: 'xl',
        outline: true,
        disabled: true,
        auto: true,
        icon: true,
        loading: true,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
