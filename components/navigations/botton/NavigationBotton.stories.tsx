import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavigationBotton, { INavigationBotton } from './NavigationBotton';
import { mockNavigationBottonProps } from './NavigationBotton.mocks';

export default {
  title: 'navigations/NavigationBotton',
  component: NavigationBotton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof NavigationBotton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavigationBotton> = (args) => (
  <NavigationBotton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNavigationBottonProps.base,
} as INavigationBotton;
