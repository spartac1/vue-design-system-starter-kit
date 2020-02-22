import Atom from '../../src/components/atoms/Atom.vue';

export default {
  title: 'Atoms|Atom',
  component: Atom,
};


export const DefaultAtom = () => ({
  components: { Atom },
  template: `
      <atom />
    `,
});
