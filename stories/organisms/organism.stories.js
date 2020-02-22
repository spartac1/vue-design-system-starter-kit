import Organism from '../../src/components/organisms/Organism.vue';

export default {
  title: 'Organisms|Organism',
  component: Organism,
};

export const DefaultOrganism = () => ({
  components: { Organism },
  template: `
      <organism />
    `,
});
