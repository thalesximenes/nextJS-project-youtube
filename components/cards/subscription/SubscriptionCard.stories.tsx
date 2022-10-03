import { ComponentMeta, ComponentStory } from '@storybook/react';
import SubscriptionCard, { ISubscriptionCard } from './SubscriptionCard';
import { mockSubscriptionCardProps } from './SubscriptionCard.mocks';

export default {
  title: 'cards/SubscriptionCard',
  component: SubscriptionCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SubscriptionCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SubscriptionCard> = (args) => (
  <SubscriptionCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSubscriptionCardProps.base,
} as ISubscriptionCard;
