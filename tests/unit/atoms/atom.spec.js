import { shallowMount } from '@vue/test-utils';
import Atom from '../../../src/components/atoms/Atom.vue';

const wrapper = shallowMount(Atom)


describe('MyComponent', () => {
  it('be mounted`', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it('be a atom', () => {
    expect(wrapper.contains('span')).toBe(true)
  });
});
