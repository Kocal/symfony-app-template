import { mount } from '@vue/test-utils'
import Button from '@app/components/Button'

describe('Button', () => {
  test('Default render', () => {
    const wrapper = mount(Button)

    expect(wrapper.html()).toBe('<button class="btn btn-sm btn-primary"></button>')
  });

  test.each(['xs', 'sm', 'lg', 'xl'])('Size "%s"', (color) => {
    const wrapper = mount(Button, {
      propsData: {
        color,
      }
    })

    expect(wrapper.element).toMatchSnapshot();
  });

  test.each(['primary', 'danger', 'success'])('Color "%s"', (color) => {
    const wrapper = mount(Button, {
      propsData: {
        color,
      }
    })

    expect(wrapper.element).toMatchSnapshot();
  });

  test.each(['icon', 'outline', 'auto'])('Basic property "%s"', (property) => {
    const wrapper = mount(Button, {
      propsData: {
        [property]: true,
      }
    })

    expect(wrapper.html()).toBe(`<button class="btn btn-sm btn-primary btn-${property}"></button>`)
  })

  test('Disabled', () => {
    const wrapper = mount(Button, {
      propsData: {
        disabled: true,
      }
    })
    expect(wrapper.html()).toBe(`<button disabled="disabled" class="btn btn-sm btn-primary disabled"></button>`)
  })

  test('Loading', () => {
    const wrapper = mount(Button, {
      propsData: {
        loading: true,
      }
    })

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Complex render', () => {
    const wrapper = mount(Button, {
      propsData: {
        color: 'success',
        size: 'xl',
        outline: true,
        disabled: true,
        auto: true,
        icon: true,
        loading: true,
      }
    })

    expect(wrapper.html()).toMatchSnapshot();
  });
})
