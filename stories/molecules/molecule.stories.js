import Molecule from '../../src/components/molecules/Molecule.vue';

export default {
  title: 'Molecules|Molecule',
  component: Molecule,
};

export const DefaultMolecule = () => ({
  components: { Molecule },
  template: `
      <molecule />
    `,
});
