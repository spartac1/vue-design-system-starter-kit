import { shallowMount } from '@vue/test-utils';
import Molecule from '../../../src/components/molecules/Molecule.vue';

const wrapper = shallowMount(Molecule)


describe('MyComponent', () => {
  it('be mounted`', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it('be a atom', () => {
    expect(wrapper.contains('span')).toBe(true)
  });
});
