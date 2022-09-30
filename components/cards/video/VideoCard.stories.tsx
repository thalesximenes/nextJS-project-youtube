import { ComponentMeta, ComponentStory } from '@storybook/react';
import VideoCard, { IVideoCard } from './VideoCard';
import { mockVideoCardProps } from './VideoCard.mocks';

export default {
  title: 'cards/VideoCard',
  component: VideoCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof VideoCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VideoCard> = (args) => (
  <VideoCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockVideoCardProps.base,
} as IVideoCard;
