import { shallowMount } from '@vue/test-utils';
import Organism from '../../../src/components/organisms/Organism.vue';

const wrapper = shallowMount(Organism)


describe('MyComponent', () => {
  it('be mounted`', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it('be a atom', () => {
    expect(wrapper.contains('span')).toBe(true)
  });
});
