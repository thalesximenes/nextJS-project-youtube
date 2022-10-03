import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavigationFooter, { INavigationFooter } from './NavigationFooter';
import { mockNavigationFooterProps } from './NavigationFooter.mocks';

export default {
  title: 'navigations/NavigationFooter',
  component: NavigationFooter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof NavigationFooter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavigationFooter> = (args) => (
  <NavigationFooter {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNavigationFooterProps.base,
} as INavigationFooter;
